import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Modal, Toast } from '../../../../Components/common';
import styles from '../../styles/folders.module.css';
import { useJournalRefs } from '../../../../Services/Reference';
import Select from 'react-select';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGlobalValues } from '../../../../Stores/GlobalValues';
import { editJournal } from '../../../../Services/Journal';

export const EditNoteModal = ({ isModalOpen, closeModal, currentNote }) => {
  const { data, isLoading } = useJournalRefs('ref_project');
  const [options, setOptions] = useState([]);
  const [selectedProject, setselectedProject] = useState();
  const qClient = useQueryClient();

  const { selectedDate } = useGlobalValues();

  const invalidateQueries = () => {
    qClient.invalidateQueries({
      queryKey: ['journals'],
    });
    qClient.invalidateQueries({
      queryKey: ['journals', selectedDate],
    });
  };

  const { mutate: editNote, isPending } = useMutation({
    mutationFn: editJournal,
    onSettled: () => {
      invalidateQueries();
      toast.success('Note saved successfully!', Toast);
      closeModal();
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    editNote({
      ...currentNote,
      project_stream: selectedProject ?? '0',
    });
  };

  useEffect(() => {
    if (data && options.length === 0) {
      setOptions(
        data.map((item) => {
          return { value: item.id, label: item.name };
        })
      );
    }
  }, [data, options]);

  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal} maxWidth="500px">
      <div className={styles.foldersModal}>
        <div className={styles.foldersModalHeader}>
          <h3>Edit Note</h3>
        </div>
        <form className={styles.foldersModalForm} onSubmit={onSubmit}>
          <Select
            options={options}
            form="project_stream"
            isLoading={isLoading}
            onChange={(vals) => {
              setselectedProject(vals.value);
            }}
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
            menuPortalTarget={document.body}
          />

          <button
            disabled={isLoading || isPending}
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
