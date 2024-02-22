import styled, { css } from 'styled-components';

interface ButtonProps {
  $type?: 'Default' | 'Base' | 'Primary' | 'Secondary' | 'Danger' | 'Text';
  $size?: 'sm' | 'md' | 'lg';
  $hover?: boolean;
  $shadow?: boolean;
  $disabled?: boolean;
}

interface HoverVariations {
  variation: 'Default' | 'Base' | 'Primary' | 'Secondary' | 'Danger' | 'Text';
}

interface ShadowVariations {
  variation: 'Default' | 'Base' | 'Primary' | 'Secondary' | 'Danger';
}

const ButtonSizes = {
  sm: css`
    gap: ${({ theme }) => theme.Size.sxsm};

    padding-top: ${({ theme }) => theme.Size.sxsm};
    padding-bottom: ${({ theme }) => theme.Size.sxsm};
    padding-left: ${({ theme }) => theme.Size.sm};
    padding-right: ${({ theme }) => theme.Size.sm};

    font-size: ${({ theme }) => theme.Size.xsm};
  `,
  md: css`
    gap: ${({ theme }) => theme.Size.xsm};

    padding-top: ${({ theme }) => theme.Size.sm};
    padding-bottom: ${({ theme }) => theme.Size.sm};
    padding-left: ${({ theme }) => theme.Size.lg};
    padding-right: ${({ theme }) => theme.Size.lg};

    font-size: ${({ theme }) => theme.Size.sm};
  `,
  lg: css`
    gap: ${({ theme }) => theme.Size.sm};

    padding-top: ${({ theme }) => theme.Size.md};
    padding-bottom: ${({ theme }) => theme.Size.md};
    padding-left: ${({ theme }) => theme.Size.xl};
    padding-right: ${({ theme }) => theme.Size.xl};

    font-size: ${({ theme }) => theme.Size.md};
  `,
};

const BaseButton = css<ButtonProps>`
  display: flex;

  gap: ${({ theme }) => theme.Size.xsm};

  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.Font.Family};
  font-weight: ${({ theme }) => theme.Font.Weight.Bold};

  border: none;
  border-radius: ${({ theme }) => theme.Size.sxsm};

  color: ${({ theme }) => theme.Colors.BW['300']};

  cursor: pointer;
  transition: all 0.5s ease;
`;

const handleButtonSize = (size: 'sm' | 'md' | 'lg') => {
  if (size === 'sm') return ButtonSizes.sm;
  if (size === 'md') return ButtonSizes.md;
  return ButtonSizes.lg;
};

const handleButtonDisabled = (disabled: boolean) => {
  if (disabled)
    return css`
      opacity: 50%;
      cursor: not-allowed;
    `;
  return;
};

const getHoverStyles = ({ variation }: ShadowVariations) => {
  const getProperColor = () => {
    if (variation === 'Default') return 'Neutral';
    return variation;
  };

  const getProperTone = () => {
    switch (variation) {
      case 'Danger':
        return css<ButtonProps>`
          background-color: ${({ theme }) => theme.Colors.Events.Danger['600']};

          ${({ $shadow, theme }) =>
            $shadow === true &&
            `
        box-shadow: -4px 4px 0px 1px ${theme.Colors.Events.Danger['700']};
        -webkit-box-shadow: -4px 4px 0px 1px ${theme.Colors.Events.Danger['700']};
        -moz-box-shadow: -4px 4px 0px 1px ${theme.Colors.Events.Danger['700']};
      `};
        `;

      case 'Base':
        return css<ButtonProps>`
          background-color: ${({ theme }) => theme.Colors.Neutral['300']};

          ${({ $shadow, theme }) =>
            $shadow === true &&
            `
        box-shadow: -4px 4px 0px 1px ${theme.Colors.Neutral['400']};
        -webkit-box-shadow: -4px 4px 0px 1px ${theme.Colors.Neutral['400']};
        -moz-box-shadow: -4px 4px 0px 1px ${theme.Colors.Neutral['400']};
      `};
        `;

      default:
        return css<ButtonProps>`
          background-color: ${({ theme }) =>
            theme.Colors[getProperColor()]['600']};

          ${({ $shadow, theme }) =>
            $shadow === true &&
            `
        box-shadow: -4px 4px 0px 1px ${theme.Colors[getProperColor()]['700']};
        -webkit-box-shadow: -4px 4px 0px 1px ${
          theme.Colors[getProperColor()]['700']
        };
        -moz-box-shadow: -4px 4px 0px 1px ${
          theme.Colors[getProperColor()]['700']
        };
      `};
        `;
    }
  };

  return getProperTone();
};

const getBackgroundStyles = ({ variation }: HoverVariations) => {
  const getProperColor = () => {
    if (variation === 'Default') return 'Neutral';
    return variation;
  };

  const getProperTone = () => {
    switch (variation) {
      case 'Danger':
        return css<ButtonProps>`
          background-color: ${({ theme }) => theme.Colors.Events.Danger['500']};
        `;

      case 'Base':
        return css<ButtonProps>`
          color: ${({ theme }) => theme.Colors.Neutral['700']};
          background-color: ${({ theme }) => theme.Colors.Neutral['300']};
        `;

      case 'Text':
        return css<ButtonProps>`
          color: ${({ theme }) => theme.Colors.Neutral['700']};
          background: none;
        `;

      default:
        return css<ButtonProps>`
          background-color: ${({ theme }) =>
            theme.Colors[getProperColor()]['500']};
        `;
    }
  };

  return getProperTone();
};

const BaseHover = {
  Default: getHoverStyles({ variation: 'Default' }),
  Base: getHoverStyles({ variation: 'Base' }),
  Primary: getHoverStyles({ variation: 'Primary' }),
  Secondary: getHoverStyles({ variation: 'Secondary' }),
  Danger: getHoverStyles({ variation: 'Danger' }),
};

const ButtonHover = ({ variation }: HoverVariations) => {
  switch (variation) {
    case 'Base':
      return css`
        &:hover {
          ${BaseHover.Base}
        }
      `;
    case 'Primary':
      return css`
        &:hover {
          ${BaseHover.Primary}
        }
      `;
    case 'Secondary':
      return css`
        &:hover {
          ${BaseHover.Secondary}
        }
      `;
    case 'Danger':
      return css`
        &:hover {
          ${BaseHover.Danger}
        }
      `;
    case 'Text':
      return;
    default:
      return css`
        &:hover {
          ${BaseHover.Default}
        }
      `;
  }
};

export const MinimalButton = styled.button<ButtonProps>`
  ${BaseButton}
  ${({ $type }) => getBackgroundStyles({ variation: $type ?? 'Default' })}
  ${({ $size }) => handleButtonSize($size ?? 'md')}
  ${({ $disabled }) => handleButtonDisabled($disabled ?? false)}

  ${({ $hover, $type }) =>
    $hover === true && ButtonHover({ variation: $type ?? 'Default' })}
`;
