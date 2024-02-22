import { isUndefined } from 'lodash';
import React from 'react';
import { MinimalButton } from './styles';

interface ButtonProps {
  type?: 'Default' | 'Base' | 'Primary' | 'Secondary' | 'Danger' | 'Text';
  size?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  shadow?: boolean;
  disabled?: boolean;

  onClick: () => void;
  children: JSX.Element;

  id?: string;
  icon?: JSX.Element;
  trailIcon?: JSX.Element;
  className?: string;
}

export default function Button({
  type = 'Default',
  size = 'sm',
  hover = false,
  shadow = false,
  disabled = false,

  onClick,
  children,

  id,
  icon,
  trailIcon,
  className,
}: ButtonProps) {
  const hasIcon = !isUndefined(icon);
  const hasTrailIcon = !isUndefined(trailIcon);

  return (
    <MinimalButton
      id={id}
      className={className}
      $type={type}
      $size={size}
      $hover={!disabled ? hover : false}
      $shadow={!disabled ? shadow : false}
      $disabled={disabled}
      onClick={onClick}
      disabled={disabled}
    >
      {hasTrailIcon && trailIcon}
      {children}
      {hasIcon && icon}
    </MinimalButton>
  );
}
