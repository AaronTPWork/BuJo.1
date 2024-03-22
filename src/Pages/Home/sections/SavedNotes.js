import React, { useEffect } from 'react';
import { MenuIcon, TileIcon, ThreeDots } from '../../../Components/icons';
import styles from '../styles/savedNotes.module.css';
import { useGlobalValues } from '../../../Stores/GlobalValues';
import { useSingleJournalRef } from '../../../Services/Reference';
import { useDailyJournalNotes } from '../../../Services/Journal/hooks';

export const ProjectItem = ({ id, handleClick, selectedProject, height = 'h-10' }) => {
  const { data } = useSingleJournalRef('ref_project', id);

  const projectData = data.length === 1 ? data[0] : null;

  return (
    <div
      className={
        selectedProject === projectData?.id || (selectedProject === '0' && projectData === null)
          ? styles.home_savedNotesNoteSelected
          : styles.home_savedNotesNote
      }
      onClick={() => handleClick && handleClick(projectData)}
    >
      <div className={`flex flex-row w-full justify-between items-center ${height}`}>
        <div className="flex items-center">
          <ThreeDots styles={`my-auto text-gray-300 h-6 md:${height}`} />
          <div className={styles.home_savedNoteDetails}>
            <h3 className="capitalize">{projectData?.name ?? 'Default project'}</h3>
          </div>
        </div>
        <div
          className={`h-full w-7 rounded-full`}
          style={{
            backgroundColor: projectData?.color ?? 'gray',
          }}
        />
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
        <div className="overflow-scroll h-full md:h-[85%]">
          {uniqueProjectStreams?.map((projectId, idx) => {
            return (
              <div className="border-y" key={`project-idx-${projectId}`}>
                <ProjectItem
                  id={projectId}
                  selectedProject={selectedProject}
                  handleClick={(projectData) => {
                    changeselectedProject(projectData?.id ?? '0');
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
