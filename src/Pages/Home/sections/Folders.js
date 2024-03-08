import React from 'react';

import styles from '../styles/folders.module.css';
import { eachDayOfInterval, format, isSameDay } from 'date-fns';
import { useGlobalValues } from '../../../Stores/GlobalValues';
import { useDailyJournalsByUser } from '../../../Services/Journal';

function getDatesArray() {
  const today = new Date();
  const year = today.getFullYear();
  const startDate = new Date(year, 0, 1); // January 1st of the current year

  const dates = eachDayOfInterval({ start: startDate, end: today });

  return dates.map((date) => ({
    label: isSameDay(date, today) ? 'Today' : format(date, 'MM.dd.yyyy'),
    value: format(date, 'yyyy-MM-dd'),
  }));
}

export const Folders = () => {
  const dates = getDatesArray();
  const {
    selectedDate,
    selectedUserId,
    actions: { changeselectedDate, changeselectedProject },
  } = useGlobalValues();
  const { journals } = useDailyJournalsByUser(selectedUserId);

  return (
    <>
      <div className={styles.folderTable}>
        <div className={styles.folderTableHeader}></div>
        <div className={styles.folders}>
          {selectedUserId && selectedUserId.length ? (
            dates.reverse().map((date) => {
              const isSelected = date.value === selectedDate;
              let recordCount = 0;
              const found = journals.filter(
                (journal) => journal.date_created && format(journal.date_created, 'yyyy-MM-dd') === date.value
              );
              if (found) {
                recordCount = found.length;
              }
              return (
                <div
                  onClick={() => {
                    changeselectedProject('');
                    changeselectedDate(date.value);
                  }}
                  className={`${
                    isSelected ? 'bg-gray-200' : ''
                  } w-full pl-4 p-2 cursor-pointer flex flex-row justify-between`}
                >
                  <h3>{date.label}</h3>
                  <h3>{recordCount}</h3>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center items-center h-full w-full">No User Selected</div>
          )}
        </div>
      </div>
    </>
  );
};
