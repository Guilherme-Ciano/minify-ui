import React from 'react';

import {
  DefaultInput,
  DisabledInput,
  ErrorInput,
  InputFeedback,
  InputLabel,
  InputWithIcon,
  PrimaryInput,
} from './styles';

interface InputProps {
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  button?: React.ReactNode;
  label?: string;
  feedback?: string;
  disabled?: boolean;
  error?: boolean;
  primary?: boolean;
  className?: string;
}

export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  label,
  feedback,
  disabled,
  error,
  primary,
  className,
}: InputProps) {
  let InputComponent = DefaultInput;
  if (primary) {
    InputComponent = PrimaryInput;
  } else if (error) {
    InputComponent = ErrorInput;
  } else if (disabled) {
    InputComponent = DisabledInput;
  }

  return (
    <div className={className}>
      {label && <InputLabel>{label}</InputLabel>}
      <InputComponent
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {icon && <InputWithIcon>{icon}</InputWithIcon>}
      {feedback && <InputFeedback>{feedback}</InputFeedback>}
    </div>
  );
}
