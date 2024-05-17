import React from 'react';
import { useSingleJournalRef } from '../../../../Services/Reference';
import { CirclePlus } from '../../../../Components/icons';
import { getIconComponent } from './DynamicFloatingMenu';

export const BulletIcon = ({ refName, selectedIconId, getIconName, handleClick, index, note, isDisabled = false }) => {
  const data = useSingleJournalRef(refName, selectedIconId);
  const selectedIconRef = data && data.data && data.data.length > 0 && selectedIconId ? data.data[0]?.ref : null;

  return (
    <button
      className=" hover:opacity-100 z-10"
      disabled={isDisabled}
      onClick={(e) => handleClick({ event: e, index, note: { ...note, selectedIconRef } })}
    >
      {data && data.data && data.data.length > 0 && selectedIconId ? (
        getIconComponent(getIconName(data?.data[0]), 'h-[18px] mx-auto')
      ) : (
        <div className="opacity-25 hover:opacity-100">
          <CirclePlus styles={'h-[18px] mx-auto'} />
        </div>
      )}
    </button>
  );
};
