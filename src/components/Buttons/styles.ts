import styled, { css } from 'styled-components';

const BaseButton = css<{ $themeVariables: Record<string, string | number> }>`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: ${({ $themeVariables }) => $themeVariables.buttonPadding};
  background: transparent;
  border-radius: ${({ $themeVariables }) => $themeVariables.borderRadiusSmall};
  color: ${({ $themeVariables }) => $themeVariables.textColor};
  font-size: ${({ $themeVariables }) => $themeVariables.fontSizeBase};
  cursor: pointer;
  transition: background-color 0.5s ease;
`;

export const DefaultButton = css<{
  $themeVariables: Record<string, string | number>;
}>`
  ${BaseButton}
  border: 2px solid ${({ $themeVariables }) => $themeVariables.shadowColor};
  background: transparent;
`;

export const PrimaryButton = css<{
  $themeVariables: Record<string, string | number>;
}>`
  ${BaseButton}
  border: 2px solid ${({ $themeVariables }) => $themeVariables.shadowColor};
  background: ${({ $themeVariables }) => $themeVariables.shadowColor};
  color: ${({ $themeVariables }) => $themeVariables.backgroundColor};
`;

export const DashedButton = css<{
  $themeVariables: Record<string, string | number>;
}>`
  ${BaseButton}
  border: 2px dashed ${({ $themeVariables }) => $themeVariables.shadowColor};
  background: transparent;
`;

export const TextButton = css<{
  $themeVariables: Record<string, string | number>;
}>`
  ${BaseButton}
  border: none;
  background: transparent;
`;

export const ShadowButton = css<{
  $themeVariables: Record<string, string | number>;
}>`
  ${BaseButton}
  border: 2px solid ${({ $themeVariables }) => $themeVariables.shadowColor};
  background: transparent;
  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: -3px 2px 0px 1px
      ${({ $themeVariables }) => $themeVariables.shadowColor};
    -webkit-box-shadow: -3px 2px 0px 1px
      ${({ $themeVariables }) => $themeVariables.shadowColor};
    -moz-box-shadow: -3px 2px 0px 1px
      ${({ $themeVariables }) => $themeVariables.shadowColor};
  }
`;

export const MinimalButton = styled.button<{
  $type: 'primary' | 'default' | 'text' | 'dashed' | 'shadow';
  $size?: 'sm' | 'md' | 'lg';
  $themeVariables: Record<string, string | number>;
}>`
  ${(props) => props.$type === 'primary' && PrimaryButton}
  ${(props) => props.$type === 'default' && DefaultButton}
  ${(props) => props.$type === 'dashed' && DashedButton}
  ${(props) => props.$type === 'text' && TextButton}
  ${(props) => props.$type === 'shadow' && ShadowButton}

  &:hover {
    ${(props) =>
      props.$type !== 'shadow' &&
      `
      background-color: #f5f5f5;
      color: #1f1f1f;
    `}
  }
`;
