import { IoClose } from "react-icons/io5";
import styles from "./Toast.module.scss";
import { useEffect, useRef } from "react";
import { IoInformationCircle } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { PiSealWarningFill } from "react-icons/pi";

function useTimeout(callbackFunction: () => void) {
  const savedCallback = useRef(callbackFunction);

  useEffect(() => {
    savedCallback.current = callbackFunction;
  }, [callbackFunction]);

  useEffect(() => {
    const functionId = setTimeout(() => savedCallback.current(), 6000);
    return () => clearTimeout(functionId);
  }, []);
}

export interface ToastProps {
  message: string;
  close: () => void;
  classNames: string;
}

export function Toast({ message, close, classNames }: ToastProps) {
  useTimeout(() => {
    close();
  });
  return (
    <div className={`${styles.toast} ${styles[classNames]}`}>
      <div className={styles.content}>
        {classNames === "info" && (
          <IoInformationCircle className={styles.icon} />
        )}
        {classNames === "success" && <FaCircleCheck className={styles.icon} />}

        {classNames === "error" && (
          <IoInformationCircle className={styles.icon} />
        )}
        {classNames === "warning" && (
          <PiSealWarningFill className={styles.icon} />
        )}
        <div>{message}</div>
      </div>

      <button onClick={close} className={styles.closeButton}>
        <IoClose />
      </button>
    </div>
  );
}
