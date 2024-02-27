import React, { ChangeEventHandler, useState } from 'react';
import {
  InputWrapper,
  InputContainer,
  Helper,
  Label,
  Icon,
  Input,
  InputLabelWrapper,
  MainWrapper,
} from './styles';

interface InputTextProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  placeholder?: string;
  labelPosition?: 'outside' | 'inside';
  helper?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  errors?: string;
  success?: boolean;

  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: 'number' | 'email' | 'password' | 'search' | 'text' | 'date';
}

export default function InputText({
  name,
  label,
  value,
  helper,
  leftIcon,
  rightIcon,
  onChange,
  size = 'md',
  type = 'text',
  success = false,
  disabled = false,
  errors = undefined,
  labelPosition = 'outside',
  placeholder = 'Input placeholder',
}: InputTextProps) {
  const haveErrors = errors !== undefined;
  const haveLeftIcon = leftIcon !== undefined;
  const haveRightIcon = rightIcon !== undefined;

  const [isFocused, setIsFocused] = useState(false);
  const [isWithError, setIsWithError] = useState(haveErrors);

  return (
    <MainWrapper>
      {labelPosition === 'outside' && <Label $size={size}>{label}</Label>}
      <InputWrapper
        $size={size}
        $disabled={disabled}
        $leftIcon={haveLeftIcon}
        $rightIcon={haveRightIcon}
        $labelPosition={labelPosition}
        $isOnFocus={isFocused}
        $hasError={isWithError}
        $hasSuccess={success}
      >
        <InputContainer>
          {haveLeftIcon && (
            <Icon
              $size={size}
              $isOnFocus={isFocused}
              $hasError={isWithError}
              $hasSuccess={success}
            >
              {leftIcon}
            </Icon>
          )}
          <InputLabelWrapper>
            {labelPosition === 'inside' && <Label $size={size}>{label}</Label>}
            <Input
              name={name}
              value={value}
              placeholder={placeholder}
              $size={size}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onError={() => setIsWithError(true)}
              onChange={onChange}
              type={type}
              disabled={disabled}
            />
          </InputLabelWrapper>
          {haveRightIcon && (
            <Icon
              $size={size}
              $isOnFocus={isFocused}
              $hasError={isWithError}
              $hasSuccess={success}
            >
              {rightIcon}
            </Icon>
          )}
        </InputContainer>
      </InputWrapper>
      {helper && <Helper $size={size}>{helper}</Helper>}
      {errors && (
        <Helper $size={size} $hasError={isWithError}>
          {errors}
        </Helper>
      )}
    </MainWrapper>
  );
}
