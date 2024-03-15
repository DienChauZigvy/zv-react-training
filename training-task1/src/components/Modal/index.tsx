import { ReactNode } from "react";
import styles from "./Modal.module.scss";

interface modalProps {
  onSubmit?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
  children?: ReactNode;
}

const Modal = ({ onSubmit, onCancel, onClose, children }: modalProps) => {
  return (
    <div
      className={styles.modalContainer}
      //   onClick={(e) => {
      //     if (e.target.className === "modal-container") closeModal();
      //   }}
    >
      <div className={styles.modal}>
        <div className={styles.modalHeader} onClick={onClose}>
          <p className={styles.close}>&times;</p>
        </div>
        <div className={styles.modalContent}>{children}</div>
        <div className={styles.modalFooter}>
          <button
            type="submit"
            className={`${styles.btn} ${styles.btnSubmit}`}
            onClick={onSubmit}
          >
            Submit
          </button>
          <button
            type="submit"
            className={`${styles.btn} ${styles.btnCancel}`}
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
