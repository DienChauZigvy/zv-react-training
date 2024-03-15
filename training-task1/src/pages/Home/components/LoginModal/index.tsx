import styles from "./LoginModal.module.scss";
import { createPortal } from "react-dom";
import Modal from "../../../../components/Modal";

interface LoginModalProps {
  onClose: () => void;
}
export default function LoginModal({ onClose }: LoginModalProps) {
  return createPortal(
    <Modal onClose={onClose} title="Log in or sign up">
      <div className={styles.titleHeader}>Welcome to Airbnb</div>
    </Modal>,
    document.body,
  );
}
