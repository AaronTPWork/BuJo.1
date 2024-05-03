import React, { useEffect, useState } from 'react';
import { Modal, TextInput } from '../../../../Components/common';
import { SearchIcon } from '../../../../Components/icons';
import { useDailyJournalsBySearch } from '../../../../Services/Journal/hooks';
import { useGlobalValues } from '../../../../Stores/GlobalValues';
import { format } from 'date-fns';
import { ProjectItem } from '../SavedNotes';
import Select from 'react-select';

const options = [
  { value: 'all', label: 'All' },
  // { value: 'migrated', label: 'Migrated' },
  { value: 'no completed', label: 'Incomplete' },
];

export const SearchModal = ({ isModalOpen, closeModal }) => {
  const {
    currentSearch,
    selectedUserId,
    currentFilter,
    actions: {
      setCurrentSearch,
      setSelectedNote,
      changeselectedUserId,
      changeselectedDate,
      changeselectedProject,
      setCurrentFilter,
    },
  } = useGlobalValues();

  const [localSearchValue, setLocalSearchValue] = useState(currentSearch);
  const { searchValue, searches } = useDailyJournalsBySearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentSearch(localSearchValue);
    const filterSearch = currentFilter === 'all' ? localSearchValue : currentFilter;
    searchValue(filterSearch, selectedUserId);
  };

  useEffect(() => {
    if (currentSearch === '') return;
    const filterSearch = currentFilter === 'all' ? currentSearch : currentFilter;
    searchValue(filterSearch, selectedUserId);

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} maxWidth="1000px">
        <div className="flex justify-end"></div>
        <div className="bg-white rounded-lg">
          <div className="border-b flex flex-row justify-between px-2 py-5 md:p-5">
            <div className="w-4/6 md:w-full md:pr-10">
              <form onSubmit={handleSubmit}>
                <TextInput
                  handleChange={(e) => setLocalSearchValue(e.target.value)}
                  placeholder="Search here..."
                  name="search"
                  label=""
                  value={localSearchValue}
                  inputClassname="text-lg md:text-4xl border-none focus:ring-0 ring-0 outline-none	"
                />
              </form>
            </div>
            <div className="px-5 w-72 my-auto border-r mr-5">
              <Select
                value={options.find((option) => option.value === currentFilter)}
                options={options}
                form="project_stream"
                onChange={(vals) => {
                  let filter = vals.value;
                  if (vals.value === 'no completed') {
                    filter = 'no completed';
                    setCurrentSearch('');
                    setLocalSearchValue('');
                  } else {
                    filter = localSearchValue;
                  }
                  searchValue(filter, selectedUserId);
                  setCurrentFilter(vals.value);
                }}
                styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                menuPortalTarget={document.body}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="flex flex-row items-center py-1 px-4 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50"
            >
              <SearchIcon styles={'w-4 my-auto text-[#7C7C7C]'} />
              <h3 className="text-[#7C7C7C] ml-1 text-sm md:text-md">Search</h3>
            </button>
          </div>
          {searches?.length === 0 ? (
            <div className="flex items-center justify-center h-80">
              <h3 className="text-[#7C7C7C]">Search by date, project or term to see results.</h3>
            </div>
          ) : (
            <div className="flex flex-col h-80 overflow-y-scroll">
              {searches.map((search, idx) => {
                return (
                  <div
                    key={`search-${idx}`}
                    className="flex flex-col md:flex-row py-4 md:py-0 w-full border-b cursor-pointer items-center hover:bg-gray-100"
                    onClick={() => {
                      changeselectedUserId(search.user_id ?? '0');
                      changeselectedDate(format(new Date(search.date_created), 'yyyy-MM-dd'));
                      changeselectedProject(search.project_stream);
                      setSelectedNote(search);
                      closeModal();
                    }}
                  >
                    <div className="w-full md:w-1/6 md:border-r text-center flex items-center justify-center">
                      <h3 className="text-xs md:text-lg font-bold">{format(search.date_created, 'dd.MM.yyyy')}</h3>
                    </div>
                    <div className="w-full md:w-1/3 border-r border-b md:py-0 border-gray-300 bg-gray-200 flex items-center">
                      <ProjectItem isSelected height="h-5" id={search.project_stream} />
                    </div>
                    <div className="flex-1 px-3 flex items-center">
                      <h3 className="text-xs md:text-lg">{search.text_stream}</h3>
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
