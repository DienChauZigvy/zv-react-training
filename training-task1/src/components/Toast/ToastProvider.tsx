import { useMemo, useState } from "react";
import { ToastContext, ToastTypes } from "./ToastContext";
import styles from "./Toast.module.scss";
import { Toast } from ".";

interface ToastProviderProperties {
  children: React.ReactElement;
}

interface ToastType {
  message: string;
  id: number;
  type?: ToastTypes;
}

export function ToastProvider({ children }: ToastProviderProperties) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  function openToast(message: string) {
    const newToast: ToastType = {
      id: Date.now(),
      message,
      type: ToastTypes.INFO,
    };
    setToasts((previousToasts) => [...previousToasts, newToast]);
  }

  function closeToast(id: number) {
    setToasts((previousToasts) =>
      previousToasts.filter((toast) => toast.id !== id),
    );
  }

  const showToast = (message: string, type: ToastTypes = ToastTypes.INFO) => {
    const newToast: ToastType = {
      id: new Date().getTime(),
      message,
      type,
    };
    setToasts((previousToasts) => [...previousToasts, newToast]);
  };

  const success = (message: string) => {
    const newToast: ToastType = {
      id: Date.now(),
      message,
      type: ToastTypes.SUCCESS,
    };
    setToasts((previousToasts) => [...previousToasts, newToast]);
  };
  const info = (message: string) => {
    const newToast: ToastType = {
      id: Date.now(),
      message,
      type: ToastTypes.INFO,
    };
    setToasts((previousToasts) => [...previousToasts, newToast]);
  };
  const error = (message: string) => {
    const newToast: ToastType = {
      id: Date.now(),
      message,
      type: ToastTypes.ERROR,
    };
    setToasts((previousToasts) => [...previousToasts, newToast]);
  };
  const warning = (message: string) => {
    const newToast: ToastType = {
      id: Date.now(),
      message,
      type: ToastTypes.WARNING,
    };
    setToasts((previousToasts) => [...previousToasts, newToast]);
  };

  const contextValue = useMemo(
    () => ({
      open: openToast,
      close: closeToast,
      showToast,
      success,
      info,
      error,
      warning,
    }),
    [],
  );
  return (
    <>
      <ToastContext.Provider value={contextValue}>
        {children}
        <div className={styles.toasts}>
          {toasts &&
            toasts.map((toast) => (
              <Toast
                classNames={`${toast.type}`}
                key={toast.id}
                message={toast.message}
                close={() => closeToast(toast.id)}
              />
            ))}
        </div>
      </ToastContext.Provider>
    </>
  );
}
