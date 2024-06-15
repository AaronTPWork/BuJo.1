import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Folders } from './sections/Folders';
import { SavedNotes } from './sections/SavedNotes';

import styles from './styles.module.css';
import NoteWithAnnotations from './sections/NewNotes';
import { UserIcon } from '../../Components/icons';
import { useUsers } from '../../Services/User';
import { todayDate, useGlobalValues } from '../../Stores/GlobalValues';
import { SearchModal } from './sections/modals/SearchModal';
import useCurrentUser from '../SignIn/useCurrentUser';

export const Home = () => {
  const {
    selectedUserId,
    showSearch,
    actions: { changeselectedUserId, changeselectedDate, changeselectedProject, hideSearch },
  } = useGlobalValues();
  const { currentUser, setCurrentUser } = useCurrentUser();
  const { data } = useUsers();

  useEffect(() => {
    if (!selectedUserId && currentUser.email) {
      changeselectedUserId(data.find(({ email }) => email === currentUser.email)?.id);
    }
  }, [selectedUserId, currentUser, data]);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.home_header}>
          <div className="flex flex-row py-2 overflow-scroll md:overflow-hidden scrollbar-hide">
            {!currentUser.email ? (
              <Link
                to="/signin"
                className="text-[#7C7C7C] text-xs border rounded-md py-2 px-4 ml-2 border-gray-600"
              >
                SignIn
              </Link>
            ) : (
              <button
                onClick={() => {
                  changeselectedUserId('');
                  setCurrentUser({});
                }}
                className="text-[#7C7C7C] text-xs border rounded-md py-2 px-4 ml-2 border-gray-600"
              >
                Sign out
              </button>
            )}
            {data
              ?.filter((user) => user.email === currentUser.email)
              .map((user) => {
                const isSelected = user.id === selectedUserId;
                const isLoggedin = user.email === currentUser.email;
                return (
                  <div
                    key={user.id}
                    onClick={() => {
                      if (!isSelected) changeselectedUserId(user.id);
                      else changeselectedUserId('');

                      changeselectedDate(todayDate);
                      changeselectedProject('');
                    }}
                    className={`flex items-center rounded-lg border px-2 py-1 mx-1 cursor-pointer ${isSelected ? 'bg-black' : 'bg-white'
                      } ${isLoggedin ? 'border-black' : 'border-[#7C7C7C]'}`}
                  >
                    <div className="mr-1">
                      <UserIcon
                        className="h-4 w-4"
                        fillcolor={isSelected ? '#FFFFFF' : '#7C7C7C'}
                      />
                    </div>
                    <div>
                      <span className={`${isSelected ? 'text-white' : 'text-[#7C7C7C]'} text-xs`}>
                        {user.nickname}
                      </span>
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
