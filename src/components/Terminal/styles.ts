import styled, { css } from "styled-components";

export const Terminal = styled.div`
  width: 600px;
  background-color: #282a36;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const TerminalHeader = styled.div`
  display: flex;
  padding: 10px;

  justify-content: space-between;
`;

export const ButtonsArea = styled.div`
  display: flex;

  gap: 5px;
`;

export const TextButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0;
  font-size: 10pt;
`;

export const Button = css`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const Red = styled.div`
  ${Button}
  background-color: #ff5f56;
`;

export const Yellow = styled.div`
  ${Button}
  background-color: #ffbd2e;
`;

export const Green = styled.div`
  ${Button}
  background-color: #27c93f;
`;

export const TerminalBody = styled.div`
  padding: 20px;
  color: #fff;
`;

export const PRE = styled.pre`
  margin: 0;
`;
