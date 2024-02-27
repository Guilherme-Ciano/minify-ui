import { createContext, useContext } from 'react';
import { ToastProps } from '../components/Toast/interfaces';

const ToastContext = createContext({
  addToast: ({ message, type, seconds, onClose }: ToastProps) => {},
});

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastContextProvider = ToastContext.Provider;
