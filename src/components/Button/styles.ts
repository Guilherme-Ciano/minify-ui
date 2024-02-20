import styled, { css } from 'styled-components';

interface ButtonProps {
  $type: 'primary' | 'default' | 'text' | 'dashed' | 'shadow';
  $size?: 'sm' | 'md' | 'lg';
  $isDisabled: boolean;
}

const buttonSizes = {
  sm: css`
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  `,
  md: css`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  `,
  lg: css`
    padding: 1rem 2rem;
    font-size: 1.2rem;
  `,
};

const BaseButton = css<ButtonProps>`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacingVariables.spacingSmall};
  background: transparent;
  border-radius: ${(props) => props.theme.borderVariables.borderRadiusSmall};
  color: ${(props) => props.theme.fontVariables.fontColor};
  font-family: ${(props) => props.theme.fontVariables.fontFamilySansSerif};
  font-size: ${(props) => props.theme.fontVariables.fontSizeBase};
  font-weight: ${(props) => props.theme.fontVariables.fontWeightLightBold};
  cursor: pointer;
  transition: background-color 0.5s ease;
`;

export const MinimalButton = styled.button<ButtonProps>`
  ${BaseButton}
  ${({ $size }) => buttonSizes[$size || 'sm']}

  // Button type styles
  ${({ $type }) => {
    switch ($type) {
      case 'primary':
        return css`
          border: 2px solid
            ${(props) => props.theme.colorVariables.colorPrimary};
          background: ${(props) => props.theme.colorVariables.colorPrimary};
          color: ${(props) => props.theme.colorVariables.colorWhite};
          transition: box-shadow 0.5s ease;
        `;
      case 'default':
        return css`
          border: 2px solid ${(props) => props.theme.colorVariables.colorBlack};
          background: transparent;
        `;
      case 'dashed':
        return css`
          border: 2px dashed ${(props) => props.theme.colorVariables.colorBlack};
          background: transparent;
        `;
      case 'text':
        return css`
          border: none;
          background: transparent;
        `;
      case 'shadow':
        return css`
          border: 2px solid ${(props) => props.theme.colorVariables.colorBlack};
          background: transparent;
          transition: box-shadow 0.5s ease;

          &:hover {
            box-shadow: -3px 2px 0px 1px
              ${(props) => props.theme.colorVariables.colorBlack};
            -webkit-box-shadow: -3px 2px 0px 1px
              ${(props) => props.theme.colorVariables.colorBlack};
            -moz-box-shadow: -3px 2px 0px 1px
              ${(props) => props.theme.colorVariables.colorBlack};
          }
        `;
      default:
        return css`
          border: 2px solid ${(props) => props.theme.colorVariables.colorBlack};
          background: transparent;
        `;
    }
  }}

  &:hover {
    ${({ $type }) =>
      $type === 'default' &&
      css`
        background-color: ${(props) => props.theme.colorVariables.colorWhite};
        color: ${(props) => props.theme.colorVariables.colorBlack};
      `}

    ${({ $type }) =>
      $type === 'primary' &&
      css`
        box-shadow: -3px 2px 38px -13px ${(props) => props.theme.colorVariables.colorPrimary};
        -webkit-box-shadow: -3px 2px 38px -13px ${(props) => props.theme.colorVariables.colorPrimary};
        -moz-box-shadow: -3px 2px 38px -13px ${(props) => props.theme.colorVariables.colorPrimary};
      `}
  }

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      background: ${(props) => props.theme.colorVariables.colorWhite};
      border: 2px solid ${(props) => props.theme.colorVariables.colorBlack};
      color: ${(props) => props.theme.colorVariables.colorBlack};

      &:hover {
        background: ${(props) => props.theme.colorVariables.colorWhite};
        color: ${(props) => props.theme.colorVariables.colorBlack};
        cursor: not-allowed;
      }
    `}
`;
