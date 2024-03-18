import { ReactNode } from "react";
import styles from "./Modal.module.scss";

interface modalProps {
  onSubmit?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
  children?: ReactNode;
  title?: string;
}

const Modal = ({
  onSubmit,
  onCancel,
  onClose,
  children,
  title,
}: modalProps) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div onClick={onClose} className={styles.close}>
            &times;
          </div>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.modalContent}>{children}</div>
        {/* <div className={styles.modalFooter}>
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
          </div> */}
      </div>
    </div>
  );
};

export default Modal;
