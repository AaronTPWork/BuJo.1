import React from 'react';
import { MenuIcon, TileIcon, ThreeDots } from '../../../Components/icons';
import styles from '../styles/savedNotes.module.css';
import { useDailyJournals } from '../../../Services/Journal';
import { format, parseISO } from 'date-fns';

export const SavedNotes = ({ selectedJournal, setSelectedJournal }) => {
  const { journals } = useDailyJournals();

  return (
    <>
      <div className={styles.home_savedNotes}>
        <div className={styles.home_savedNotesHeader}>
          <div className={styles.home_savedNotesListIcon}>
            <MenuIcon styles={'h-10 my-auto mx-auto'} />
          </div>
          <div className={styles.home_savedNotesTileIcon}>
            <TileIcon styles={'h-10 my-auto'} />
          </div>
        </div>
        {/* Indiviual Saved Notes */}
        <div className="overflow-scroll max-h-[90%]">
          {journals
            ? journals?.reverse().map((note, idx) => {
                return (
                  <div
                    className={
                      selectedJournal === note.date_created
                        ? styles.home_savedNotesNoteSelected
                        : styles.home_savedNotesNote
                    }
                    key={`journal-${idx}`}
                    onClick={() => {
                      setSelectedJournal(note.date_created);
                    }}
                  >
                    <div className="flex">
                      <ThreeDots styles={'h-10 my-auto text-gray-300'} />
                      <div className={styles.home_savedNoteDetails}>
                        <h3>{format(parseISO(note.date_created), 'MM-dd-yyy')}</h3>
                      </div>
                    </div>

                    <div className={styles.home_savedNoteDate}>
                      <p>{note.record_count}</p>
                    </div>
                  </div>
                );
              })
            : ''}
        </div>
      </div>
    </>
  );
};
