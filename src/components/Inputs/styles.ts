import styled, { css } from 'styled-components';

const BaseInput = css<{ $themeVariables: Record<string, string | number> }>`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid ${({ $themeVariables }) => $themeVariables.shadowColor};
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ $themeVariables }) => $themeVariables.colorPrimary};
  }
`;

export const DefaultInput = styled.input<{
  $themeVariables: Record<string, string | number>;
}>`
  ${BaseInput}
`;

export const PrimaryInput = styled.input<{
  $themeVariables: Record<string, string | number>;
}>`
  ${BaseInput}
  border-color: ${({ $themeVariables }) => $themeVariables.shadowColor};
`;

export const ErrorInput = styled.input<{
  $themeVariables: Record<string, string | number>;
}>`
  ${BaseInput}
  border-color: ${({ $themeVariables }) => $themeVariables.colorQuaternary};
`;

export const DisabledInput = styled.input<{
  $themeVariables: Record<string, string | number>;
}>`
  ${BaseInput}
  cursor: not-allowed;
`;

export const InputWithIcon = styled.div<{
  $themeVariables: Record<string, string | number>;
}>`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 95%;
    bottom: 0.6rem;
    color: ${({ $themeVariables }) => $themeVariables.shadowColor};
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const InputLabel = styled.label`
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

export const InputFeedback = styled.div`
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;
