import React from 'react';
import { MinimalButton } from './styles';
import { isUndefined } from 'lodash';
import { useTheme } from '../../utils/provider';

interface MinimalButtonProps {
  variant?: 'primary' | 'default' | 'text' | 'dashed' | 'shadow';

  label: string;

  size?: 'sm' | 'md' | 'lg';

  icon?: JSX.Element;
  trailIcon?: JSX.Element;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    MinimalButtonProps {}

export default function Button({
  variant = 'default',
  label,
  size = 'md',
  icon,
  trailIcon,
  ...buttonProps
}: ButtonProps) {
  const { themeVariables } = useTheme();

  const hasIcon = !isUndefined(icon);
  const hasTrailIcon = !isUndefined(trailIcon);

  return (
    <MinimalButton
      $type={variant}
      $size={size}
      $themeVariables={themeVariables}
      {...buttonProps}
    >
      {hasIcon && icon}
      {label}
      {hasTrailIcon && trailIcon}
    </MinimalButton>
  );
}
