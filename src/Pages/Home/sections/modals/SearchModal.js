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
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
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

  const uniqueDates = Array.from(new Set(searches?.map((item) => format(new Date(item.date_created), 'MM-dd-yyyy'))));
  const uniqueProjects = searches
    ?.map((item) => ({
      project_stream: item.project_stream,
      date_created: format(new Date(item.date_created), 'MM-dd-yyyy'),
    }))
    .filter((item) => item.date_created === selectedDate);
  const uniqueProjectStreams = Array.from(new Set(uniqueProjects.map((item) => item.project_stream)));

  const filteredSearches = searches?.filter((item) => {
    const date = format(new Date(item.date_created), 'MM-dd-yyyy');
    return date === selectedDate && item.project_stream === selectedProject;
  });

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
            <div className="flex h-80">
              <div className="w-1/6 border-r overflow-scroll scrollbar-hide">
                {uniqueDates?.map((date, idx) => {
                  const isSelected = date === selectedDate;
                  return (
                    <div
                      key={`idx-${date}`}
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedProject('');
                      }}
                      className={`${
                        isSelected ? 'bg-gray-200' : ''
                      } w-full pl-4 p-2 h-10 cursor-pointer flex flex-row justify-between`}
                    >
                      <h3>{date}</h3>
                    </div>
                  );
                })}
              </div>
              <div className="w-1/3 border-r overflow-scroll scrollbar-hide">
                {uniqueProjectStreams?.map((projectId, idx) => {
                  return (
                    <ProjectItem
                      height="h-1"
                      id={projectId}
                      key={idx}
                      selectedProject={selectedProject}
                      handleClick={(projectData) => {
                        setSelectedProject(projectData?.id ?? '0');
                        console.log('🚀 ~ SearchModal ~ projectData', projectData);
                      }}
                    />
                  );
                })}
              </div>
              <div className="w-3/6 overflow-scroll scrollbar-hide">
                {filteredSearches?.map((search, idx) => {
                  return (
                    <div
                      onClick={() => {
                        console.log('🚀 ~ SearchModal ~ search', search);
                        changeselectedUserId(search.user_id);
                        changeselectedDate(format(new Date(search.date_created), 'yyyy-MM-dd'));
                        changeselectedProject(search.project_stream);
                        setSelectedNote(search);
                        closeModal();
                      }}
                      key={idx}
                      className="h-10 w-full items-start px-4 py-2 border-y cursor-pointer"
                    >
                      <h3>{search.text_stream}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
