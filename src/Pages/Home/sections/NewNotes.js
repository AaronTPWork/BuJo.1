import React, { useEffect, useState } from 'react';
import { PencilPage, DownloadIcon, SearchIcon } from '../../../Components/icons';
import { FloatingMenu } from './components/FloatingMenu';
import { useDailyJournalNotes } from '../../../Services/Journal/hooks';
import { BulletIcon } from './components/BulletIcon';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createJournal, editJournal } from '../../../Services/Journal';
import { todayDate, useGlobalValues } from '../../../Stores/GlobalValues';
import { EditNoteModal } from './modals/EditNoteModal';
import { ProjectModal } from './modals/ProjectModal';
import { migrateNote } from '../../../Services/Journal/api';
import Select from 'react-select';
import { DynamicFloatingMenu } from './components/DynamicFloatingMenu';

function debounce(func, delay) {
  let timeoutId;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

export const InputArea = ({ value, handleInput, note, index }) => {
  const [localValue, setLocalValue] = useState('');
  useEffect(() => {
    setLocalValue(note.text_stream);
  }, [note.text_stream]);

  return (
    <textarea
      type="text"
      className="border-none outline-none border-gray-300 p-1 leading-6 whitespace-pre-wrap h-14 md:h-8"
      style={{
        resize: 'none',
      }}
      placeholder="Type your note here..."
      value={localValue ?? ''}
      onChange={(e) => setLocalValue(e.target.value)}
      onKeyDown={(e) => handleInput(e, note, index, localValue)}
    />
  );
};

const options = [
  { value: 'all', label: 'All' },
  // { value: 'migrated', label: 'Migrated' },
  { value: 'no completed', label: 'No completed' },
];

const NoteWithAnnotations = () => {
  const [showPrimaryFloatingMenu, setShowPrimaryFloatingMenu] = useState(false);
  const [showSecondaryFloatingMenu, setShowSecondaryFloatingMenu] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);

  const [floatingMenuPosition, setFloatingMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const {
    selectedDate,
    selectedProject,
    selectedUserId,
    currentFilter,
    actions: { showSearch, setCurrentFilter },
  } = useGlobalValues();

  const { notes } = useDailyJournalNotes(selectedDate, currentFilter);
  const [currentNote, setcurrentNote] = useState();
  const [showModal, setshowModal] = useState(false);
  const qClient = useQueryClient();

  const filteredNotesByProjectStream = notes?.filter(
    (note) => note.project_stream === selectedProject && note.user_id === selectedUserId
  );

  const invalidateQueries = () => {
    qClient.invalidateQueries({
      queryKey: ['journals'],
    });
    qClient.invalidateQueries({
      queryKey: ['journals', selectedDate],
    });
  };

  const { mutate: createNote } = useMutation({
    mutationFn: createJournal,
    onSettled: () => {
      invalidateQueries();
    },
  });
  const { mutate: editNote } = useMutation({
    mutationFn: editJournal,
    onSettled: () => {
      invalidateQueries();
    },
  });
  const { mutate: migrate } = useMutation({
    mutationFn: migrateNote,
    onSettled: () => {
      invalidateQueries();
    },
  });

  const handlePrimaryClick = ({ event, note }) => {
    setcurrentNote(note);
    const buttonPosition = event.target.getBoundingClientRect();
    setShowSecondaryFloatingMenu(false);
    setFloatingMenuPosition({ x: buttonPosition.x, y: buttonPosition.y - 165 });
    setShowPrimaryFloatingMenu(true);
  };

  const handleSecondaryClick = ({ event, note }) => {
    setcurrentNote(note);
    const buttonPosition = event.target.getBoundingClientRect();
    setShowPrimaryFloatingMenu(false);
    setFloatingMenuPosition({ x: buttonPosition.x, y: buttonPosition.y - 165 });
    setShowSecondaryFloatingMenu(true);
  };

  const closeMenu = () => {
    setShowPrimaryFloatingMenu(false);
    setShowSecondaryFloatingMenu(false);
    setFloatingMenuPosition({
      x: 0,
      y: 0,
    });
  };

  const handleInput = (e, note, index, value) => {
    const newText = value;
    if (e.key === 'Enter' && !e.shiftKey) {
      // if (previousKeyPress === 'Enter') {
      if (!note.id) {
        // debounce(() => {
        //   const newNote = {
        //     date_created: selectedDate,
        //     user_id: selectedUserId,
        //     text_stream: newText,
        //   };
        //   console.log('🚀 ~ handleInput ~ note:', newNote);
        //   if (selectedProject) newNote.project_stream = selectedProject;
        //   return createNote(newNote);
        // }, 500);
        const newNote = {
          date_created: selectedDate ?? todayDate,
          user_id: selectedUserId,
          text_stream: newText,
        };
        if (selectedProject) newNote.project_stream = selectedProject;
        createNote(newNote);
      } else {
        debounce(
          editNote({
            // ...note,
            id: note.id,
            text_stream: newText,
          }),
          500
        );
      }
      //   setPreviousKeyPress('');
      // } else {
      //   setPreviousKeyPress(e.key);
      // }
    }
  };

  const selectPrimaryIcon = (iconId, iconRef) => {
    console.log('🚀 ~ selectPrimaryIcon ~ iconId:', iconId);
    if (!currentNote.id) {
      const newNote = {
        date_created: selectedDate ?? todayDate,
        user_id: selectedUserId,
        bullet_stream: iconId,
      };
      if (selectedProject) newNote.project_stream = selectedProject;
      createNote(newNote);
    } else {
      editNote({
        // ...currentNote,
        id: currentNote.id,
        bullet_stream: iconId,
      });
    }
    if (iconRef && iconRef.state === 'migrated' && currentNote) {
      migrate({ noteId: currentNote.id });
    }
    setShowPrimaryFloatingMenu(false);
  };

  const selectSecondaryIcon = (iconId) => {
    if (!currentNote.id) {
      const newNote = {
        date_created: selectedDate ?? todayDate,
        project_stream: selectedProject,
        user_id: selectedUserId,
        context_stream: iconId ?? '0',
      };
      if (selectedProject) newNote.project_stream = selectedProject;
      createNote(newNote);
    } else {
      editNote({
        // ...currentNote,
        id: currentNote.id,
        context_stream: iconId ?? '0',
      });
    }
    setShowSecondaryFloatingMenu(false);
  };

  return (
    <div className="flex flex-col w-full h-1/2 md:h-screen md:w-3/4 border-x">
      {/* <div className="hidden md:flex justify-between h-20 border"> */}
      <div className="fixed bottom-0 w-full z-50 bg-white md:relative flex justify-between h-14 md:h-20 border">
        <div
          className="cursor-pointer flex items-center"
          onClick={() => {
            setShowProjectModal(true);
          }}
        >
          <PencilPage styles={'h-6 md:h-10 my-auto ml-5 md:hidden'} />
        </div>
        <div className="flex gap-x-5">
          <div className="flex px-5 my-auto border-r h-fit"></div>
          <div className="px-5 w-32 md:w-48 my-auto border-r">
            <Select
              value={options.find((option) => option.value === currentFilter)}
              options={options}
              form="project_stream"
              onChange={(vals) => {
                setCurrentFilter(vals.value);
              }}
              menuPortalTarget={null}
            />
          </div>

          <button className="">
            <DownloadIcon styles={'h-6 md:h-10'} />
          </button>
          <div
            onClick={() => {
              showSearch();
            }}
            className="flex px-5 my-auto border-l h-fit cursor-pointer"
          >
            <SearchIcon styles={'h-6 md:h-10 w-10 my-auto'} />
          </div>
        </div>
      </div>
      <div className="flex md:h-[85%] overflow-scroll">
        <div className="flex flex-col h-full w-full pt-1 border-r border-r-[#e5e7eb] relative">
          {selectedUserId &&
            selectedUserId.length > 0 &&
            [...(filteredNotesByProjectStream || []), {}]?.map((note, index) => {
              return (
                <div key={`note-detail-${index}`} className="flex w-full items-center">
                  <div className="w-[13%] md:w-[7%] h-full flex justify-center items-center border-r border-r-[#e5e7eb]">
                    <BulletIcon
                      refName={'ref_context'}
                      note={note}
                      selectedIconId={note.context_stream}
                      getIconName={(ref) => `${ref.name}`}
                      handleClick={handleSecondaryClick}
                      index={index}
                    />
                  </div>
                  <div className="w-[13%] md:w-[9%] h-full flex justify-center items-center border-r border-r-[#e5e7eb]">
                    <BulletIcon
                      refName={'ref_bullet'}
                      note={note}
                      selectedIconId={note.bullet_stream}
                      getIconName={(ref) => `${ref.ref}-${ref.state}-${ref.name}`}
                      handleClick={handlePrimaryClick}
                      index={index}
                    />
                  </div>
                  <div className="flex flex-col w-full  pl-1">
                    <InputArea handleInput={handleInput} note={note} index={index} />
                  </div>
                  {note.id && (
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        setcurrentNote(note);
                        setshowModal(true);
                      }}
                    >
                      <PencilPage styles={'h-7 my-auto'} />
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
      {showPrimaryFloatingMenu && (
        <DynamicFloatingMenu
          floatingMenuPosition={floatingMenuPosition}
          closeMenu={closeMenu}
          selectIcon={selectPrimaryIcon}
          selectedIcon={currentNote?.selectedIconRef}
          refName={'ref_bullet'}
          getIconName={(ref) => `${ref.ref}-${ref.state}-${ref.name}`}
        />
      )}
      {showSecondaryFloatingMenu && (
        <FloatingMenu
          floatingMenuPosition={floatingMenuPosition}
          closeMenu={closeMenu}
          selectIcon={selectSecondaryIcon}
          refName={'ref_context'}
          getIconName={(ref) => `${ref.name}`}
        />
      )}
      {showModal && (
        <EditNoteModal
          currentNote={currentNote}
          isModalOpen={showModal}
          closeModal={() => {
            setcurrentNote(null);
            setshowModal(false);
          }}
        />
      )}
      {showProjectModal && (
        <ProjectModal
          isModalOpen={showProjectModal}
          closeModal={() => {
            setShowProjectModal(false);
          }}
        />
      )}
    </div>
  );
};

export default NoteWithAnnotations;
