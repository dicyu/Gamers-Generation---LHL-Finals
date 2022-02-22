import React, { useState } from "react";
import "./MatchedModal.scss"
import { RiCloseLine } from "react-icons/ri";

const MatchedModal = ({ setIsOpen }) => {
    return (
      <>
        <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
        <div className={styles.centered}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>Dialog</h5>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className={styles.modalContent}>
              Are you sure you want to delete the item?
            </div>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                  Delete
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default MatchedModal;