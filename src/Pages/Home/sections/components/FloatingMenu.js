import React from 'react';

import { useJournalRefs } from '../../../../Services/Reference';
import { getIconComponent } from './DynamicFloatingMenu';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const FloatingMenu = ({
  floatingMenuPosition,
  closeMenu,
  selectIcon,
  refName,
  getIconName,
  note,
}) => {
  const { data } = useJournalRefs(refName);

  return (
    <div
      className="absolute z-50 h-1/2  flex flex-col w-56 p-2 bg-gray-100 border border-gray-400 rounded"
      style={{
        top: `${floatingMenuPosition.y + 30}px`,
        left: `${floatingMenuPosition.x + 12}px`,
      }}
    >
      <button onClick={closeMenu} className="self-end text-lg p-1">
        &times;
      </button>
      <p className="pb-2 mx-auto text-sm">ADD A TAG</p>
      <div className="flex flex-col items-start mt-2 overflow-scroll">
        {data &&
          data?.map((ref, idx) => {
            if (getIconName(ref) === 'reminder') {
              return (
                <div key={`icon_button_${idx}`} className="icon_button cursor-pointer">
                  {getIconComponent(getIconName(ref), 'h-4')}
                  <label
                    htmlFor={`${getIconName(ref)}-due-date`}
                    className="pl-2 text-left cursor-pointer select-none"
                  >
                    {getIconName(ref)}
                  </label>
                  <DatePicker
                    id={`${getIconName(ref)}-due-date`}
                    selected={note?.due_date ?? ''}
                    onChange={(date) => {
                      let utcDateTime = date;
                      utcDateTime.setHours(0, 0, 0);
                      utcDateTime = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
                      selectIcon({ iconId: ref.id, due_date: utcDateTime });
                    }}
                    className="hidden"
                  />
                </div>
              );
            }

            return (
              <button
                key={`icon_button_${idx}`}
                onClick={() => {
                  selectIcon({ iconId: ref.id });
                }}
                className="icon_button"
              >
                {getIconComponent(getIconName(ref), 'h-4')}
                <span className="pl-2 text-left">{getIconName(ref)}</span>
              </button>
            );
          })}
      </div>
    </div>
  );
};
