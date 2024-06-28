import React, { useEffect, useState } from 'react';
import { MenuIcon, ThreeDots, PencilPage } from '../../../Components/icons';
import styles from '../styles/savedNotes.module.css';
import { useGlobalValues } from '../../../Stores/GlobalValues';
import { useSingleJournalRef } from '../../../Services/Reference';
import { useDailyJournalNotes } from '../../../Services/Journal/hooks';
import { ProjectModal } from './modals/ProjectModal';

export const ProjectItem = ({
  id,
  handleClick,
  selectedProject,
  handleMenuClick,
  height = 'h-10',
}) => {
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
          <div
            onClick={() => {
              handleMenuClick && handleMenuClick(projectData);
            }}
          >
            <ThreeDots styles={`my-auto text-gray-300 h-6 md:${height}`} />
          </div>
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
    actions: { changeselectedProject, changeselectedProjectName },
  } = useGlobalValues();
  const { notes } = useDailyJournalNotes(selectedDate);
  const [showModal, setshowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const notesFilteredByUser = notes?.filter((note) => note.user_id === selectedUserId);
  const uniqueProjectStreams = Array.from(
    new Set((notesFilteredByUser ?? []).map((item) => item.project_stream)),
  );

  useEffect(() => {
    if (selectedProject === '' && uniqueProjectStreams?.length)
      changeselectedProject(uniqueProjectStreams[0]);
  }, [changeselectedProject, selectedProject, uniqueProjectStreams]);

  return (
    <>
      <div className={styles.home_savedNotes}>
        <div className={styles.home_savedNotesHeader}>
          <div className={styles.home_savedNotesListIcon}>
            <MenuIcon styles={'h-10 my-auto mx-auto'} />
          </div>
          <div
            className={styles.home_savedNotesTileIcon}
            onClick={() => {
              setshowModal(true);
            }}
          >
            <h3>New Project</h3>
            <PencilPage styles={'h-6 md:h-5 my-auto ml-1'} />
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
                    changeselectedProjectName(projectData?.name ?? '0');
                  }}
                  handleMenuClick={(projectData) => {
                    setshowModal(true);
                    setCurrentProject(projectData);
                  }}
                />
              </div>
            );
          })}
        </div>
        {showModal && (
          <ProjectModal
            isModalOpen={showModal}
            currentProject={currentProject}
            closeModal={() => {
              setCurrentProject(null);
              setshowModal(false);
            }}
          />
        )}
      </div>
    </>
  );
};
