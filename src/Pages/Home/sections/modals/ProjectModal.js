import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Modal, Toast } from '../../../../Components/common';
import styles from '../../styles/folders.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGlobalValues } from '../../../../Stores/GlobalValues';
import { createProject, editProject } from '../../../../Services/Journal/api';

export const ProjectModal = ({ isModalOpen, closeModal, currentProject }) => {
  const [value, setValue] = useState(currentProject?.name ?? '');
  const [selectedColor, setSelectedColor] = useState(currentProject?.color ?? '#000000');
  const qClient = useQueryClient();

  const { selectedDate, selectedUserId } = useGlobalValues();

  const invalidateQueries = () => {
    qClient.invalidateQueries({
      queryKey: ['journals'],
    });
    qClient.invalidateQueries({
      queryKey: ['journals', selectedDate],
    });
    qClient.invalidateQueries({
      queryKey: ['journals', selectedDate, 'no completed'],
    });
  };

  const { mutate: create, isPending } = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      toast.success('Project created successfully!', Toast);
    },
    onError: () => {
      toast.error('Error creating project!', Toast);
    },
    onSettled: () => {
      invalidateQueries();
      closeModal();
    },
  });

  const { mutate: edit, isPending: isPendingEdit } = useMutation({
    mutationFn: editProject,
    onSuccess: () => {
      toast.success('Project edited successfully!', Toast);
    },
    onError: () => {
      toast.error('Error editing project!', Toast);
    },
    onSettled: () => {
      invalidateQueries();
      closeModal();
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (currentProject) {
      edit({
        id: currentProject.id,
        name: value,
        color: selectedColor,
      });
      return;
    }
    create({
      name: value,
      user_id: selectedUserId,
      color: selectedColor,
    });
  };

  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal} maxWidth="500px">
      <div className="flex flex-col bg-white border border-black rounded-xl h-full">
        <div className={styles.foldersModalHeader}>
          <h3>{currentProject ? 'Edit project' : 'Create project'}</h3>
        </div>
        <form className="w-3/4 p-10 mx-auto pb-40 flex flex-col " onSubmit={onSubmit}>
          <input
            type="text"
            className="border p-4 rounded-xl"
            placeholder="Enter project name"
            value={value ?? ''}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="flex flex-col pt-3">
            <p className="pr-4">Project color</p>
            <input
              type="color"
              value={selectedColor ?? ''}
              onChange={(e) => {
                setSelectedColor(e.target.value);
              }}
            />
          </div>

          <button
            disabled={isPending || isPendingEdit}
            className="px-4 py-2 mx-auto mt-5 text-xl bg-gray-300 rounded-xl"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </Modal>
  );
};
