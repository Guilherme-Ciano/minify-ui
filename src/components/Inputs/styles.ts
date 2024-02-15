import styled, { css } from "styled-components";

const BaseInput = css`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid var(--shadow-color);
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

export const DefaultInput = styled.input`
  ${BaseInput}
`;

export const PrimaryInput = styled.input`
  ${BaseInput}
  border-color: var(--shadow-color);
`;

export const ErrorInput = styled.input`
  ${BaseInput}
  border-color: var(--color-quaternary);
`;

export const DisabledInput = styled.input`
  ${BaseInput}
  border-color: var(--disabled-color);
  background-color: var(--disabled-background-color);
  cursor: not-allowed;
`;

export const InputWithIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 95%;
    bottom: 0.55rem;
    color: var(--shadow-color);
  }
`;

export const InputWithButton = styled.div`
  display: flex;
  align-items: center;

  button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
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
