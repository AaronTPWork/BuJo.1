import React, { useState } from 'react';
import { Folders } from './sections/Folders';
import { SavedNotes } from './sections/SavedNotes';
import { format } from 'date-fns';

import styles from './styles.module.css';
import NoteWithAnnotations from './sections/NewNotes';

const todayDate = format(new Date(), 'yyyy-MM-dd');
export const Home = () => {
  const [selectedJournal, setSelectedJournal] = useState(todayDate);
  return (
    <>
      <div className={styles.home}>
        <div className={styles.home_header}></div>
        <div className={styles.home_app}>
          {/* Folders Section */}
          <Folders />
          {/* Saved Notes Section */}
          <SavedNotes selectedJournal={selectedJournal} setSelectedJournal={setSelectedJournal} />
          {/* New Notes Section */}
          <NoteWithAnnotations selectedJournal={selectedJournal} setSelectedJournal={setSelectedJournal} />
          <div className={styles.newNotes}></div>
        </div>
      </div>
    </>
  );
};
