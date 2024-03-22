import React from 'react';
import { Folders } from './sections/Folders';
import { SavedNotes } from './sections/SavedNotes';

import styles from './styles.module.css';
import NoteWithAnnotations from './sections/NewNotes';
import { UserIcon } from '../../Components/icons';
import { useUsers } from '../../Services/User';
import { todayDate, useGlobalValues } from '../../Stores/GlobalValues';
import { SearchModal } from './sections/modals/SearchModal';

export const Home = () => {
  const {
    selectedUserId,
    showSearch,
    actions: { changeselectedUserId, changeselectedDate, changeselectedProject, hideSearch },
  } = useGlobalValues();
  const { data } = useUsers();

  return (
    <>
      <div className={styles.home}>
        <div className={styles.home_header}>
          <div className="flex flex-row py-2 overflow-scroll md:overflow-hidden scrollbar-hide">
            {data?.map((user) => {
              const isSelected = user.id === selectedUserId;
              return (
                <div
                  key={user.id}
                  onClick={() => {
                    if (!isSelected) changeselectedUserId(user.id);
                    else changeselectedUserId('');

                    changeselectedDate(todayDate);
                    changeselectedProject('');
                  }}
                  className={`flex items-center rounded-lg border border-[#7C7C7C] px-2 py-1 mx-1 cursor-pointer ${
                    isSelected ? 'bg-black' : 'bg-white'
                  }`}
                >
                  <div className="mr-1">
                    <UserIcon className="h-4 w-4" fillcolor={isSelected ? '#FFFFFF' : '#7C7C7C'} />
                  </div>
                  <div>
                    <span className={`${isSelected ? 'text-white' : 'text-[#7C7C7C]'} text-xs`}>{user.nickname}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.home_app}>
          {/* Folders Section */}
          <Folders />
          {/* Saved Notes Section */}
          <SavedNotes />
          {/* New Notes Section */}
          <NoteWithAnnotations />
          <div className={styles.newNotes}></div>
        </div>
        <SearchModal isModalOpen={showSearch} closeModal={hideSearch} />
      </div>
    </>
  );
};
