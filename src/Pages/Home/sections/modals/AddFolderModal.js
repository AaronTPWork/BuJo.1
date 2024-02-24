import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Modal, TextInput, Toast } from "../../../../Components/common";
import styles from "../../styles/folders.module.css";

export const AddModalForm = ({ isModalOpen, closeModal }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Submited");
    console.log(data);
    reset();
    toast.success("Folder Added Successfully!", Toast);
    closeModal();
  };
  return (
    <>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} maxWidth="500px">
        <div className={styles.foldersModal}>
          <div className={styles.foldersModalHeader}>
            <h3>Add Folder</h3>
          </div>
          <form
            className={styles.foldersModalForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextInput
              register={register}
              name="folderName"
              label="Folder Name*"
              required
            />

            <button className={styles.foldersModalSubmitButton} type="submit">
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};
