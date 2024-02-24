import React, { useState } from "react";

import styles from "../styles/folders.module.css";
import { AddModalForm } from "./modals/AddFolderModal";

export const Folders = () => {
  const [addFolderModal, setAddFolderModal] = useState(false);

  return (
    <>
      <div className={styles.folderTable}>
        <div className={styles.folderTableHeader}></div>
        <div className={styles.folders}>
          {/* Inv Folders */}
          <div className="w-full py-3 bg-gray-200">
            <h3>Lorem ipsum Folder 1</h3>
          </div>

          <h3>Lorem ipsum Folder 2</h3>
          <h3>Lorem ipsum Folder 3</h3>
          <h3>Lorem ipsum Folder 4</h3>
          <h3>Lorem ipsum Folder 5</h3>
        </div>
        <div className={styles.folderTableFooter}>
          <button
            onClick={() => setAddFolderModal(true)}
            className={styles.addFolderButton}
          >
            <span className="material-symbols-outlined">add_circle</span>Add
            Folder
          </button>
        </div>
        <AddModalForm
          isModalOpen={addFolderModal}
          closeModal={() => setAddFolderModal(false)}
        />
      </div>
    </>
  );
};
