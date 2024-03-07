import React from 'react';
import { Folders } from './sections/Folders';
import { SavedNotes } from './sections/SavedNotes';

import styles from './styles.module.css';
import NoteWithAnnotations from './sections/NewNotes';
import { UserIcon } from '../../Components/icons';
import { useUsers } from '../../Services/User';
import { useGlobalValues } from '../../Stores/GlobalValues';

export const Home = () => {
  const {
    selectedUserId,
    actions: { changeselectedUserId, changeselectedDate, changeselectedProject },
  } = useGlobalValues();
  const { data } = useUsers();

  return (
    <>
      <div className={styles.home}>
        <div className={styles.home_header}>
          <div className="flex flex-row py-2">
            {data?.map((user) => {
              const isSelected = user.id === selectedUserId;
              return (
                <div
                  onClick={() => {
                    if (!isSelected) changeselectedUserId(user.id);
                    else changeselectedUserId('');

                    changeselectedDate('');
                    changeselectedProject('');
                  }}
                  class={`flex items-center rounded-xl border border-[#7C7C7C] px-2 py-1 mx-1 cursor-pointer ${
                    isSelected ? 'bg-black' : 'bg-white'
                  }`}
                >
                  <div class="mr-1">
                    <UserIcon size="6" />
                  </div>
                  <div>
                    <span class={`${isSelected ? 'text-white' : 'text-[#7C7C7C]'} text-xs`}>{user.nickname}</span>
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
      </div>
    </>
  );
};
