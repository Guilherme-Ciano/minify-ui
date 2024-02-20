import styled, { css } from 'styled-components';

const BaseInput = css`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme.colorVariables.shadowColor};
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colorVariables.colorPrimary};
  }
`;

export const DefaultInput = styled.input`
  ${BaseInput}
`;

export const PrimaryInput = styled.input`
  ${BaseInput}
  border-color: ${(props) => props.theme.colorVariables.shadowColor};
`;

export const ErrorInput = styled.input`
  ${BaseInput}
  border-color: ${(props) => props.theme.colorVariables.colorError};
`;

export const DisabledInput = styled.input`
  ${BaseInput}
  cursor: not-allowed;
`;

export const InputWithIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 95%;
    bottom: 0.6rem;
    color: ${(props) => props.theme.colorVariables.shadowColor};
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
