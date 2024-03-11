import React, { useEffect, useState } from 'react';
import { Modal, TextInput } from '../../../../Components/common';
import { SearchIcon } from '../../../../Components/icons';
import { useDailyJournalsBySearch } from '../../../../Services/Journal/hooks';
import { useGlobalValues } from '../../../../Stores/GlobalValues';
import { format } from 'date-fns';
import { ProjectItem } from '../SavedNotes';

export const SearchModal = ({ isModalOpen, closeModal }) => {
  const {
    currentSearch,
    selectedUserId,
    actions: { setCurrentSearch, setSelectedNote, changeselectedUserId, changeselectedDate, changeselectedProject },
  } = useGlobalValues();

  const [localSearchValue, setLocalSearchValue] = useState(currentSearch);
  const { searchValue, searches } = useDailyJournalsBySearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentSearch(localSearchValue);
    searchValue(localSearchValue, selectedUserId);
  };

  useEffect(() => {
    if (currentSearch === '') return;
    searchValue(currentSearch, selectedUserId);

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} maxWidth="1000px">
        <div className="flex justify-end">
          <button className="text-blue-900 -top-10 z-50 right-10 hover:text-blue-400" onClick={closeModal}>
            Close X
          </button>
        </div>
        <div className="bg-white rounded-lg">
          <div className="border-b flex flex-row justify-between p-5">
            <div className="w-full pr-10">
              <form onSubmit={handleSubmit}>
                <TextInput
                  handleChange={(e) => setLocalSearchValue(e.target.value)}
                  placeholder="Search here..."
                  name="search"
                  label=""
                  value={localSearchValue}
                  inputClassname="text-4xl border-none focus:ring-0 ring-0 outline-none	"
                />
              </form>
            </div>
            <button
              onClick={handleSubmit}
              className="flex flex-row items-center py-1 px-4 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50"
            >
              <SearchIcon styles={'w-4 my-auto text-[#7C7C7C]'} />
              <h3 className="text-[#7C7C7C] ml-1">Search</h3>
            </button>
          </div>
          {searches?.length === 0 ? (
            <div className="flex items-center justify-center h-80">
              <h3 className="text-[#7C7C7C]">Search by date, project or term to see results.</h3>
            </div>
          ) : (
            <div className="flex flex-col h-80 overflow-scroll">
              {searches.map((search, idx) => {
                return (
                  <div
                    key={`search-${idx}`}
                    className="flex flex-row w-full border-b cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      changeselectedUserId(search.user_id ?? '0');
                      changeselectedDate(format(new Date(search.date_created), 'yyyy-MM-dd'));
                      changeselectedProject(search.project_stream);
                      setSelectedNote(search);
                      closeModal();
                    }}
                  >
                    <div className="w-1/6 border-r text-center flex items-center justify-center">
                      <h3 className="font-bold">{format(search.date_created, 'dd.MM.yyyy')}</h3>
                    </div>
                    <div className="w-1/3 border-r border-b border-gray-300 bg-gray-200">
                      <ProjectItem isSelected height="h-1" id={search.project_stream} />
                    </div>
                    <div className="w-3/6 px-3 flex items-center">
                      <h3>{search.text_stream}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
