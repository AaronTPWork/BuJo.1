import React, { useEffect, useState } from 'react';
import { PencilPage, DownloadIcon, LockIcon, SearchIcon } from '../../../Components/icons';
import { FloatingMenu } from './components/FloatingMenu';
import { useDailyJournalNotes } from '../../../Services/Journal/hooks';
import { BulletIcon } from './components/BulletIcon';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createJournal, editJournal } from '../../../Services/Journal';

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

const InputArea = ({ value, handleInput, note, index }) => {
  const [localValue, setLocalValue] = useState('');
  useEffect(() => {
    setLocalValue(note.text_stream);
  }, [note.text_stream]);

  return (
    <textarea
      className="border-none outline-none border-gray-300 p-1 leading-6 whitespace-pre-wrap"
      placeholder="Type your note here..."
      value={localValue ?? ''}
      onChange={(e) => setLocalValue(e.target.value)}
      onKeyDown={(e) => handleInput(e, note, index, localValue)}
    />
  );
};

const NoteWithAnnotations = ({ selectedJournal }) => {
  const [showPrimaryFloatingMenu, setShowPrimaryFloatingMenu] = useState(false);
  const [showSecondaryFloatingMenu, setShowSecondaryFloatingMenu] = useState(false);
  const [floatingMenuPosition, setFloatingMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const { notes } = useDailyJournalNotes(selectedJournal);
  const [currentNote, setcurrentNote] = useState();
  const qClient = useQueryClient();

  const invalidateQueries = () => {
    qClient.invalidateQueries({
      queryKey: ['journals'],
    });
    qClient.invalidateQueries({
      queryKey: ['journals', selectedJournal],
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

  const handlePrimaryClick = ({ event, note }) => {
    setcurrentNote(note);
    const buttonPosition = event.target.getBoundingClientRect();
    setShowSecondaryFloatingMenu(false);
    setFloatingMenuPosition({ x: buttonPosition.x, y: buttonPosition.y });
    setShowPrimaryFloatingMenu(true);
  };

  const handleSecondaryClick = ({ event, note }) => {
    setcurrentNote(note);
    const buttonPosition = event.target.getBoundingClientRect();
    setShowPrimaryFloatingMenu(false);
    setFloatingMenuPosition({ x: buttonPosition.x, y: buttonPosition.y });
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
      if (!note.id) {
        debounce(
          createNote({
            date_created: selectedJournal,
            text_stream: newText,
          }),
          500
        );
      } else {
        debounce(
          editNote({
            ...note,
            text_stream: newText,
          }),
          500
        );
      }
    }
  };

  const selectPrimaryIcon = (iconId) => {
    if (!currentNote.id) {
      createNote({
        date_created: selectedJournal,
        bullet_stream: iconId,
      });
    } else {
      editNote({
        ...currentNote,
        bullet_stream: iconId,
      });
    }
    setShowPrimaryFloatingMenu(false);
  };

  const selectSecondaryIcon = (iconId) => {
    if (!currentNote.id) {
      createNote({
        date_created: selectedJournal,
        context_stream: iconId,
      });
    } else {
      editNote({
        ...currentNote,
        context_stream: iconId,
      });
    }
    setShowSecondaryFloatingMenu(false);
  };

  return (
    <div className="flex flex-col h-screen w-3/4 border-x">
      <div className="flex h-20 border">
        <PencilPage styles={'h-10 my-auto ml-5'} />
        <div className="flex gap-x-5">
          <div className="flex px-5 my-auto border-r h-fit">
            <LockIcon styles={'w-10 my-auto'} />
          </div>

          <button className="">
            <DownloadIcon styles={'h-10'} />
          </button>
          <div className="flex px-5 my-auto border-l h-fit">
            <SearchIcon styles={'w-10 my-auto'} />
          </div>
        </div>
      </div>
      <div className="flex h-[90%] overflow-scroll">
        <div className="flex flex-col h-full w-full pt-1 border-r border-r-[#e5e7eb] relative">
          {[...(notes || []), {}]?.map((note, index) => {
            return (
              <div key={`note-detail-${index}`} className="flex w-full items-start">
                <div className="w-[7%] h-full flex justify-center items-center border-r border-r-[#e5e7eb]">
                  <BulletIcon
                    refName={'ref_context'}
                    note={note}
                    selectedIconId={note.context_stream}
                    getIconName={(ref) => `${ref.name}`}
                    handleClick={handleSecondaryClick}
                    index={index}
                  />
                </div>
                <div className="w-[7%] h-full flex justify-center items-center border-r border-r-[#e5e7eb]">
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
              </div>
            );
          })}
        </div>
      </div>
      {showPrimaryFloatingMenu && (
        <FloatingMenu
          floatingMenuPosition={floatingMenuPosition}
          closeMenu={closeMenu}
          selectIcon={selectPrimaryIcon}
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
    </div>
  );
};

export default NoteWithAnnotations;
