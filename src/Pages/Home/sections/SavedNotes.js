import React from 'react';
import { MenuIcon, TileIcon, ThreeDots } from '../../../Components/icons';
import styles from '../styles/savedNotes.module.css';
import { useGlobalValues } from '../../../Stores/GlobalValues';
import { useSingleJournalRef } from '../../../Services/Reference';
import { useDailyJournalNotes } from '../../../Services/Journal/hooks';

const ProjectItem = ({ id }) => {
  const { data } = useSingleJournalRef('ref_project', id);
  console.log('🚀 ~ ProjectItem ~ data:', data);
  const {
    selectedProject,
    actions: { changeselectedProject },
  } = useGlobalValues();

  const projectData = data.length === 1 ? data[0] : null;

  if (!projectData) return null;

  return (
    <div
      className={selectedProject === projectData?.id ? styles.home_savedNotesNoteSelected : styles.home_savedNotesNote}
      onClick={() => {
        if (projectData?.id) changeselectedProject(projectData?.id);
      }}
    >
      <div className="flex">
        <ThreeDots styles={'h-10 my-auto text-gray-300'} />
        <div className={styles.home_savedNoteDetails}>
          <h3>{projectData?.name ?? 'Project'}</h3>
        </div>
      </div>
    </div>
  );
};

export const SavedNotes = () => {
  const { selectedDate, selectedUserId } = useGlobalValues();
  const { notes } = useDailyJournalNotes(selectedDate);

  const notesFilteredByUser = notes?.filter((note) => note.user_id === selectedUserId);
  const uniqueProjectStreams = Array.from(new Set((notesFilteredByUser ?? []).map((item) => item.project_stream)));

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
            return <ProjectItem id={projectId} key={idx} />;
          })}
        </div>
      </div>
    </>
  );
};
