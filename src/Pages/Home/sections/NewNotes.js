import React, { useEffect, useLayoutEffect, useState, useMemo, useCallback } from 'react';
import ReactModal from 'react-modal';

import { PencilPage, SearchIcon } from '../../../Components/icons';
import { FloatingMenu } from './components/FloatingMenu';
import { useDailyJournalNotes } from '../../../Services/Journal/hooks';
import { BulletIcon } from './components/BulletIcon';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createJournal, editJournal } from '../../../Services/Journal';
import { todayDate, useGlobalValues } from '../../../Stores/GlobalValues';
import { EditNoteModal } from './modals/EditNoteModal';
import { ProjectModal } from './modals/ProjectModal';
import { migrateNote } from '../../../Services/Journal/api';
import { DynamicFloatingMenu } from './components/DynamicFloatingMenu';
import TextAreaAutoSize from 'react-textarea-autosize';
import { useDebounce, useDebouncedCallback } from 'use-debounce';
import { appendDueDate } from '../../../Services/Journal/utils';

export const InputArea = ({ value, handleInput, note, index, onImage, onEnter, ...props }) => {
  const [localValue, setLocalValue] = useState('');
  const [deferred] = useDebounce(localValue);

  useEffect(() => {
    if (localValue === '' && note.text_stream) {
      setLocalValue(note.text_stream);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (deferred) {
      handleInput(note, deferred);
    }
  }, [deferred, handleInput, note]);

  const appendText = useMemo(() => {
    let res = '';
    const dueDateText = appendDueDate(note);
    res = dueDateText ? dueDateText : '';

    if (note.del_email) {
      res = res + ' Delegated: ' + note.del_email;
    }

    return res;
  }, [note]);

  return (
    <div className="relative">
      {note.image_meta ? (
        <span onClick={onImage}>
          <img src={note.image_meta} className="w-8 h-8 inline-block" alt="note" />
        </span>
      ) : null}
      {appendText && <div className="absolute -top-2 text-xs text-gray-500">{appendText}</div>}
      <TextAreaAutoSize
        {...props}
        className={`border-none inline-block outline-none border-gray-300 p-1 leading-6 whitespace-pre-wrap h-14 md:h-8 w-full resize-none pb-2 ${
          appendText.includes('Delegated') ? 'mt-5 md:mt-0' : ''
        }`}
        placeholder={localValue === '' ? 'Type your note here...' : ''}
        value={localValue || ''}
        onChange={(e) => {
          setLocalValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onEnter(index);
          }
        }}
      />
    </div>
  );
};

const NoteWithAnnotations = () => {
  const [showPrimaryFloatingMenu, setShowPrimaryFloatingMenu] = useState(false);
  const [showSecondaryFloatingMenu, setShowSecondaryFloatingMenu] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const newNoteRef = React.createRef(null);

  const [floatingMenuPosition, setFloatingMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const {
    selectedDate,
    selectedProject,
    selectedUserId,
    actions: { showSearch },
  } = useGlobalValues();

  const { notes } = useDailyJournalNotes(selectedDate);
  const [currentNote, setcurrentNote] = useState();
  const [showModal, setshowModal] = useState(false);
  const qClient = useQueryClient();

  const [openImage, setOpenImage] = useState('');

  const filteredNotesByProjectStream = notes?.filter(
    (note) => note.project_stream === selectedProject && note.user_id === selectedUserId,
  );

  useLayoutEffect(() => {
    if (!newNoteRef.current) {
      const lastItem = filteredNotesByProjectStream.length;
      if (lastItem > 0) {
        newNoteRef.current = document.getElementById(`input-ref-${lastItem - 1}`);
        // newNoteRef.current?.focus();
      }
    }
    return () => {};
  }, [filteredNotesByProjectStream, newNoteRef]);

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

  const handleEnter = useCallback(
    (index) => {
      const nextNoteIdx = index + 1;

      if (nextNoteIdx <= filteredNotesByProjectStream.length) {
        newNoteRef.current = document.getElementById(`input-ref-${nextNoteIdx}`);
        newNoteRef.current.focus();
      }
    },
    [filteredNotesByProjectStream.length, newNoteRef],
  );

  const handleInput = useDebouncedCallback((note, value) => {
    const newText = value;

    if (!note.id) {
      const newNote = {
        date_created: selectedDate ?? todayDate,
        user_id: selectedUserId,
        text_stream: newText,
      };
      if (selectedProject) newNote.project_stream = selectedProject;
      createNote(newNote);
    } else {
      editNote({
        // ...note,
        id: note.id,
        text_stream: newText,
      });
    }
  }, 1000);

  const selectPrimaryIcon = ({ iconId, ...rest }, iconRef) => {
    if (!currentNote.id) {
      const newNote = {
        date_created: selectedDate ?? todayDate,
        user_id: selectedUserId,
        bullet_stream: iconId,
        ...rest,
      };
      if (selectedProject) newNote.project_stream = selectedProject;
      createNote(newNote);
    } else {
      editNote({
        // ...currentNote,
        id: currentNote.id,
        bullet_stream: iconId,
        ...rest,
      });
    }
    if (iconRef && iconRef.state === 'migrated' && currentNote) {
      migrate({ noteId: currentNote.id });
    }
    setShowPrimaryFloatingMenu(false);
  };

  const selectSecondaryIcon = ({ iconId, ...rest }) => {
    if (!currentNote.id) {
      const newNote = {
        date_created: selectedDate ?? todayDate,
        project_stream: selectedProject,
        user_id: selectedUserId,
        context_stream: iconId ?? '0',
        ...rest,
      };
      if (selectedProject) newNote.project_stream = selectedProject;
      createNote(newNote);
    } else {
      editNote({
        id: currentNote.id,
        context_stream: iconId ?? '0',
        ...rest,
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
                <div key={`note-detail-${index}`} className="flex w-full items-start">
                  <div className="w-8 min-w-8 max-w-8 h-full items-start flex justify-center border-r border-r-[#e5e7eb] mt-2">
                    <BulletIcon
                      refName={'ref_context'}
                      note={note}
                      selectedIconId={note.context_stream}
                      getIconName={(ref) => `${ref.name}`}
                      handleClick={handleSecondaryClick}
                      index={index}
                    />
                  </div>
                  <div className="w-8 min-w-8 max-w-8 h-full items-start flex justify-center border-r border-r-[#e5e7eb] mt-2">
                    <BulletIcon
                      refName={'ref_bullet'}
                      note={note}
                      selectedIconId={note.bullet_stream}
                      getIconName={(ref) => `${ref.ref}-${ref.state}-${ref.name}`}
                      handleClick={handlePrimaryClick}
                      index={index}
                    />
                  </div>
                  <div className="flex flex-col w-full pl-1">
                    <InputArea
                      handleInput={handleInput}
                      onImage={() => setOpenImage(note.image_meta)}
                      note={note}
                      onEnter={handleEnter}
                      index={index}
                      id={`input-ref-${index}`}
                    />
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
          note={currentNote}
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

      {openImage && (
        <ReactModal
          isOpen={true}
          onRequestClose={() => {
            setOpenImage('');
          }}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1000,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
            content: {
              width: 'fit-content',
              height: 'fit-content',
              position: 'relative',
            },
          }}
        >
          <img src={openImage} />
        </ReactModal>
      )}
    </div>
  );
};

export default NoteWithAnnotations;
