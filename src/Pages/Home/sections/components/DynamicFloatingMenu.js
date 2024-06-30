import React, { useState } from 'react';

import {
  Circle,
  CircleHalf,
  CircleFull,
  CircleArrowLeft,
  CircleArrowRight,
  CircleX,
  Square,
  PencilPage,
  DownloadIcon,
  LockIcon,
  SearchIcon,
  SquareHalf,
  SquareFull,
  SquareLeftArrow,
  SquareRightArrow,
  SquareX,
  Diamond,
  DiamondHalf,
  DiamondFull,
  DiamondLeft,
  DiamondRight,
  DiamondX,
  Minus,
  DollarBill,
  Astrick,
  Exclamation1,
  Exclamation2,
  Exclamation3,
  QuestionMark,
  InitNote,
  BlankSVG,
  ImageIcon,
} from '../../../../Components/icons';
import { useBulletIcons } from '../../../../Services/Reference/hooks';
import DelegateModal from './DelegateModal';
import { changeDueDate } from '../../../../Services/Note/api';
import DatePicker from 'react-datepicker';
import moment from 'moment-timezone';
import 'react-datepicker/dist/react-datepicker.css';

import './custom-datepicker.css';

const iconComponents = {
  'bullet-init-note': InitNote,
  'circle-init-task': Circle,
  'circle-started-task': CircleHalf,
  'circle-completed-task': CircleFull,
  'circle-migrated-task': CircleArrowLeft,
  'circle-delegated-task': CircleArrowRight,
  'circle-cancelled-task': CircleX,
  'rectangle-init-image': ImageIcon,
  'square-init-event': Square,
  'square-started-event': SquareHalf,
  'square-completed-event': SquareFull,
  'square-migrated-event': SquareLeftArrow,
  'square-delegated-event': SquareRightArrow,
  'square-cancelled-event': SquareX,
  'diamond-init-appointment': Diamond,
  'diamond-started-appointment': DiamondHalf,
  'diamond-completed-appointment': DiamondFull,
  'diamond-migrated-appointment': DiamondLeft,
  'diamond-delegated-appointment': DiamondRight,
  'diamond-cancelled-appointment': DiamondX,
  'no context': BlankSVG,
  important: Astrick,
  reminder: Exclamation1,
  'reminder-2': Exclamation2,
  'reminder-3': Exclamation3,
  question: QuestionMark,
  money: DollarBill,
  PencilPage,
  DownloadIcon,
  LockIcon,
  SearchIcon,
  Minus,
  Exclamation2,
};

export const getIconComponent = (iconName, styles) => {
  const IconComponent = iconComponents[iconName];
  if (IconComponent === undefined) return null;
  return <IconComponent styles={styles} />;
};

export const DynamicFloatingMenu = ({
  floatingMenuPosition,
  closeMenu,
  selectIcon,
  selectedIcon,
  getIconName,
  note,
  updateDate,
}) => {
  const { data } = useBulletIcons(selectedIcon);
  const [ref, setRef] = useState();
  const [dueDate, setDueDate] = useState('');
  const [isOpened, setisOpened] = useState(false);
  const handleDelegate = (email) =>
    !isOpened && selectIcon({ iconId: ref.id, del_email: email }, ref, isOpened);

  const formatDueDate = (e) => {
    const date = new Date(e);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return formattedDate;
  };

  const handleDueDate = async (e) => {
    try {
      let dateObject = new Date(e);
      let isoDateString = dateObject.toISOString().slice(0, 19).replace('T', ' ');
      await changeDueDate(formatDueDate(e), note);
      setDueDate(e);
      updateDate();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
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
            data?.length &&
            data?.map((ref, idx) => {
              if (getIconName(ref) === 'rectangle-init-image') {
                return (
                  <button key={`icon_button_${idx}`} className="icon_button">
                    {getIconComponent(getIconName(ref), 'h-4')}
                    <label htmlFor="reminder-due-date" className="pl-2 text-left">
                      {getIconName(ref)}
                    </label>
                    <input
                      id="reminder-due-date"
                      type="file"
                      value={note?.due_date?.slice(0, 10)}
                      style={{
                        opacity: 0,
                        position: 'absolute',
                        zIndex: -1,
                        left: 150,
                        top: 150,
                      }}
                      onChange={(e) => {
                        const reader = new FileReader();

                        reader.onload = () => {
                          selectIcon({ iconId: ref.id, image_meta: reader.result }, ref);
                        };

                        reader.onerror = (error) => {
                          console.error('Error reading file:', error);
                        };

                        reader.readAsDataURL(e.target.files[0]);
                      }}
                    />
                  </button>
                );
              } else if (getIconName(ref) === 'circle-delegated-task') {
                return (
                  <button
                    key={`icon_button_${idx}`}
                    onClick={() => {
                      setRef(ref);
                    }}
                    className="icon_button"
                  >
                    {getIconComponent(getIconName(ref), 'h-4')}
                    <span className="pl-2 text-left">{getIconName(ref)}</span>
                  </button>
                );
              }

              return (
                <button
                  key={`icon_button_${idx}`}
                  onClick={() => {
                    selectIcon({ iconId: ref.id }, ref);
                  }}
                  className="icon_button"
                >
                  {getIconComponent(getIconName(ref), 'h-4')}
                  {ref?.state == 'init' && note?.bullet_stream == '13' ? (
                    <DatePicker
                      selected={dueDate}
                      className="bg-transparent ml-1.5 w-full cursor-pointer text-black placeholder-black"
                      placeholderText="diamond-init-appointment"
                      onChange={handleDueDate}
                      timeFormat="HH:mm"
                      dateFormat="yyyy-MM-dd HH:mm:ss"
                      showTimeSelect
                      showTimeSelectOnly={false}
                      timeIntervals={15}
                      timeCaption="Time"
                      onCalendarOpen={() => setisOpened(true)}
                      onCalendarClose={() => setisOpened(false)}
                      calendarClassName="relative"
                    />
                  ) : (
                    <span className="pl-2 text-left">{getIconName(ref)}</span>
                  )}
                </button>
              );
            })}
        </div>
      </div>

      {ref && <DelegateModal open={ref} onClose={() => setRef()} onDelegate={handleDelegate} />}
    </>
  );
};
