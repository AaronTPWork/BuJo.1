import React, { useEffect } from 'react';
import { MenuIcon, TileIcon, ThreeDots } from '../../../Components/icons';
import styles from '../styles/savedNotes.module.css';
import { useGlobalValues } from '../../../Stores/GlobalValues';
import { useSingleJournalRef } from '../../../Services/Reference';
import { useDailyJournalNotes } from '../../../Services/Journal/hooks';

export const ProjectItem = ({ id, handleClick, selectedProject, height = 'h-10' }) => {
  const { data } = useSingleJournalRef('ref_project', id);

  const projectData = data.length === 1 ? data[0] : null;

  // if (!projectData) return null;

  return (
    <div
      className={selectedProject === projectData?.id ? styles.home_savedNotesNoteSelected : styles.home_savedNotesNote}
      onClick={() => handleClick(projectData)}
    >
      <div className={`flex items-center ${height}`}>
        <ThreeDots styles={`my-auto text-gray-300 ${height}`} />
        <div className={styles.home_savedNoteDetails}>
          <h3>{projectData?.name ?? 'Project'}</h3>
        </div>
      </div>
    </div>
  );
};

export const SavedNotes = () => {
  const {
    selectedDate,
    selectedUserId,
    selectedProject,
    actions: { changeselectedProject },
  } = useGlobalValues();
  const { notes } = useDailyJournalNotes(selectedDate);

  const notesFilteredByUser = notes?.filter((note) => note.user_id === selectedUserId);
  const uniqueProjectStreams = Array.from(new Set((notesFilteredByUser ?? []).map((item) => item.project_stream)));

  useEffect(() => {
    if (selectedProject === '' && uniqueProjectStreams && uniqueProjectStreams.length > 0)
      changeselectedProject(uniqueProjectStreams[0]);
  }, [changeselectedProject, selectedProject, uniqueProjectStreams]);

  return (
    <>
      <div className={styles.home_savedNotes}>
        <div className={styles.home_savedNotesHeader}>
          <div className={styles.home_savedNotesListIcon}>
            <MenuIcon styles={'h-10 my-auto mx-auto'} />
          </div>
          <div className={styles.home_savedNotesTileIcon}>
            <TileIcon styles={'h-10 my-auto'} />
          </div>
        </div>
        <div className="overflow-scroll h-[85%]">
          {uniqueProjectStreams?.map((projectId, idx) => {
            return (
              <ProjectItem
                id={projectId}
                key={idx}
                selectedProject={selectedProject}
                handleClick={(projectData) => {
                  changeselectedProject(projectData?.id ?? '0');
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
