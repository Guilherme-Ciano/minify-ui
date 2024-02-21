import { isUndefined } from 'lodash';
import React from 'react';
import { MinimalButton } from './styles';

interface ButtonProps {
  type: 'primary' | 'default' | 'text' | 'dashed' | 'shadow';
  onClick: () => void;
  children: JSX.Element;

  id?: string;
  size?: 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  icon?: JSX.Element;
  trailIcon?: JSX.Element;
  className?: string;
}

export default function Button({
  id,
  icon,
  type = 'primary',
  size = 'sm',
  isDisabled = false,
  onClick,
  children,
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
      $isDisabled={isDisabled}
      onClick={onClick}
      disabled={isDisabled}
    >
      {hasIcon && icon}
      {children}
      {hasTrailIcon && trailIcon}
    </MinimalButton>
  );
}
