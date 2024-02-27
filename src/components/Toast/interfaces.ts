export type ToastTypes =
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'black'
  | 'default';

export interface ToastProps {
  id?: string;
  seconds?: number;
  type?: ToastTypes;
  message: string;
  onClose?: () => void;
}

export interface ToastProviderProps {
  children: JSX.Element | JSX.Element[];
  position?:
    | 'bottomLeft'
    | 'bottomCenter'
    | 'bottomRight'
    | 'topLeft'
    | 'topCenter'
    | 'topRight';
}
