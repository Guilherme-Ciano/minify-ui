import styled, { css } from 'styled-components';

interface InputProps {
  $size?: 'sm' | 'md' | 'lg';
  $leftIcon?: boolean;
  $rightIcon?: boolean;
  $disabled?: boolean;
  $labelPosition?: 'outside' | 'inside';
  $isOnFocus?: boolean;
  $hasError?: boolean;
  $hasSuccess?: boolean;
}

const handleFontSize = (size: 'sm' | 'md' | 'lg') => {
  const fontSize = {
    sm: css`
      ${({ theme }) => theme.Size.sxsm}
    `,
    md: css`
      ${({ theme }) => theme.Size.xsm}
    `,
    lg: css`
      ${({ theme }) => theme.Size.sm}
    `,
  };

  return fontSize[size];
};

const handleInputSize = (
  size: 'sm' | 'md' | 'lg',
  labelPosition: 'outside' | 'inside'
) => {
  const paddingSizes = {
    outside: {
      sm: css`
        padding: 0.3rem ${({ theme }) => theme.Size.sxsm};
      `,
      md: css`
        padding: 0.3rem ${({ theme }) => theme.Size.sxsm};
      `,
      lg: css`
        padding: 0.3rem ${({ theme }) => theme.Size.xsm};
      `,
    },
    inside: {
      sm: css`
        padding: 0;
      `,
      md: css`
        padding: 0.3rem ${({ theme }) => theme.Size.sxsm};
      `,
      lg: css`
        padding: 0.3rem ${({ theme }) => theme.Size.sm};
      `,
    },
  };

  return paddingSizes[labelPosition][size];
};

const handleInputDisabled = (disabled: boolean) => {
  if (disabled)
    return css`
      opacity: 0.5;
      cursor: not-allowed;
    `;
  return;
};

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.Colors.BW['300']};
  border-radius: ${({ theme }) => theme.Size.sxsm};
  transition: border-color 0.3s ease;
  margin-top: calc((${({ theme }) => theme.Size.sxsm}) - 5px);
  cursor: text;

  ${({ $size = 'md', $labelPosition = 'outside' }) =>
    handleInputSize($size, $labelPosition)}
  ${({ $disabled = false }) => handleInputDisabled($disabled)}

  ${({ $hasSuccess }) =>
    $hasSuccess &&
    css`
      border-color: ${({ theme }) => theme.Colors.Secondary['500']};
    `}

  ${({ $isOnFocus }) =>
    $isOnFocus &&
    css`
      border-color: ${({ theme }) => theme.Colors.Primary['400']};
    `}

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: ${({ theme }) => theme.Colors.Events.Danger['500']};
    `}
`;

export const InputContainer = styled.div`
  height: 100%;
  display: flex;
  gap: ${({ theme }) => theme.Size.sxsm};
  align-items: center;
`;

export const InputLabelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: calc(${({ theme }) => theme.Size.sxsm} / 2);
`;

export const Input = styled.input<InputProps>`
  border: none;
  padding: 0.1rem;

  font-size: ${({ $size = 'md' }) => handleFontSize($size)};
  font-family: ${({ theme }) => theme.Font.Family};

  &::placeholder {
    color: ${({ theme }) => theme.Colors.BW['400']};
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

export const Icon = styled.div<InputProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    font-size: calc(${({ $size }) => handleFontSize($size ?? 'md')} * 1.5);
    fill: ${({ theme }) => theme.Colors.BW['400']};

    ${({ $hasSuccess }) =>
      $hasSuccess &&
      css`
        fill: ${({ theme }) => theme.Colors.Secondary['500']};
      `}

    ${({ $isOnFocus }) =>
      $isOnFocus &&
      css`
        fill: ${({ theme }) => theme.Colors.Primary['400']};
      `}

  ${({ $hasError }) =>
      $hasError &&
      css`
        fill: ${({ theme }) => theme.Colors.Events.Danger['500']};
      `}
  }
`;

export const Label = styled.label<InputProps>`
  font-family: ${({ theme }) => theme.Font.Family};
  font-size: calc(${({ $size }) => handleFontSize($size ?? 'md')});
`;

export const Helper = styled.label<InputProps>`
  font-family: ${({ theme }) => theme.Font.Family};
  font-size: calc(${({ $size }) => handleFontSize($size ?? 'md')});

  ${({ $hasError }) =>
    $hasError &&
    css`
      color: ${({ theme }) => theme.Colors.Events.Danger['500']};
    `}
`;
