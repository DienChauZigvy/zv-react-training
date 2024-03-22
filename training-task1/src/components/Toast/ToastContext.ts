import { createContext, useContext } from "react";

export enum ToastTypes {
  INFO = "info",
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
}

interface ToastContextValue {
  open: (message: string) => void;
  close: (id: string) => void;
  showToast: (content: string, type?: ToastTypes) => void;
  success: (message: string) => void;
  info: (message: string) => void;
  error: (message: string) => void;
  warning: (message: string) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = () => useContext(ToastContext);
