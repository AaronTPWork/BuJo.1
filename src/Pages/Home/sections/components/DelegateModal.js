import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { ArrowLeftIcon } from '../../../../Components/icons';

const DelegateModal = ({ open, onClose, onDelegate }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      onDelegate(email);
    }
  };

  return (
    <ReactModal
      isOpen={open}
      onRequestClose={onClose}
      style={{
        overlay: {
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
        },
        content: {
          top: '200px',
          width: 'fit-content',
          height: 'fit-content',
          position: 'relative',
        },
      }}
    >
      <div className="w-[600px] h-[400px] p-2 flex flex-col">
        <div className="flex flex-row items-center">
          <ArrowLeftIcon className="w-6 h-6 mr-2" />
          <p>Send invite</p>
        </div>
        <div className="flex w-full mt-4 space-x-2">
          <input
            className="outline-none border border-black rounded-md p-1 flex-1 focus:border-2 focus:border-blue-400"
            placeholder="Enter email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="border-2 border-gray-600 text-sm font-bold rounded-md px-2"
            onClick={handleSubmit}
          >
            Delegate
          </button>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <p>Search or add people</p>
        </div>
      </div>
    </ReactModal>
  );
};

export default DelegateModal;
