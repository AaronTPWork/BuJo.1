import React from 'react';
import { useSingleJournalRef } from '../../../../Services/Reference';
import { getIconComponent } from './FloatingMenu';
import { CirclePlus } from '../../../../Components/icons';

export const BulletIcon = ({ refName, selectedIconId, getIconName, handleClick, index, note }) => {
  const data = useSingleJournalRef(refName, selectedIconId);

  return (
    <button className=" hover:opacity-100 z-10" onClick={(e) => handleClick({ event: e, index, note })}>
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
