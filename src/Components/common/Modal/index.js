import React from 'react';
import ReactModal from 'react-modal';

export function Modal({ isModalOpen, closeModal, maxWidth, children }) {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
    },
    content: {
      maxWidth: maxWidth,
      width: '100%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      border: 'none',
      background: 'transparent',
      maxHeight: '100vh',
      transform: 'translate(-50%, -50%)',
      // overflow: 'auto',
      borderRadius: '10px',
    },
  };

  return (
    <ReactModal isOpen={isModalOpen} style={customStyles} onRequestClose={closeModal} ariaHideApp={false}>
      {children}
    </ReactModal>
  );
}
