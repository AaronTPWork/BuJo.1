import React, { useMemo, useState } from 'react';

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

  const showingDates = useMemo(() => {
    const filteredDates = dates.filter(
      (date) =>
        journals.filter((journal) => journal.date_created && format(journal.date_created, 'yyyy-MM-dd') === date.value)
          .length
    );
    return filteredDates.map((element) => ({
      ...element,
      recordCount: journals.filter(
        (journal) => journal.date_created && format(journal.date_created, 'yyyy-MM-dd') === element.value
      ).length,
    }));
  }, [dates, journals]);

  return (
    <>
      <div className={styles.folderTable}>
        <div className={styles.folderTableHeader}></div>
        <div className={styles.folders}>
          {selectedUserId && selectedUserId.length ? (
            showingDates.reverse().map((date) => {
              const isSelected = date.value === selectedDate;

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
                  <h3>{date.recordCount}</h3>
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
