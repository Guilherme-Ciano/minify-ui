import React, { useState, useEffect, createContext, useContext } from 'react';
import { ToastContainer, ToastWrapper } from './styles';

import { GoCheckCircle } from 'react-icons/go';
import { PiWarningDiamond } from 'react-icons/pi';
import {
  IoIosCloseCircleOutline,
  IoIosInformationCircleOutline,
} from 'react-icons/io';
import { P } from '../Typography';
import { ToastProps, ToastProviderProps } from './interfaces';
import { ToastContextProvider } from '../../hooks/useToast';

const DefineToastIcon = {
  info: <IoIosInformationCircleOutline />,
  success: <GoCheckCircle />,
  warning: <PiWarningDiamond />,
  error: <IoIosCloseCircleOutline />,
  default: <></>,
  black: <></>,
};

const Toast = ({
  message,
  type = 'info',
  seconds = 3,
  onClose,
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const delayMilisecondsTimeToCompleteAnimation = 800;
  const timeVisibleInMiliseconds =
    seconds * 1000 + delayMilisecondsTimeToCompleteAnimation;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, timeVisibleInMiliseconds);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ToastWrapper type={type} $isVisible={isVisible} onClick={onClose}>
      {DefineToastIcon[type]}
      <P>{message}</P>
    </ToastWrapper>
  );
};

const ToastProvider = ({
  children,
  position = 'topRight',
}: ToastProviderProps) => {
  const [toasts, setToasts] = useState<any[]>([]);

  const addToast = ({
    message,
    type = 'default',
    seconds,
    onClose,
  }: ToastProps) => {
    const newToast: ToastProps = {
      id: Math.random().toString(36).substr(2, 9),
      message,
      type,
      seconds,
      onClose,
    };

    setToasts((prevToasts: any) => [...prevToasts, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (toasts.length > 0) {
        setToasts((prevToasts) => prevToasts.slice(1));
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [toasts]);

  return (
    <ToastContextProvider value={{ addToast }}>
      <ToastContainer position={position} id="toastContainer">
        {toasts.map((toast) => (
          <Toast
            id={toast.id}
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </ToastContainer>
      {children}
    </ToastContextProvider>
  );
};

export default ToastProvider;
