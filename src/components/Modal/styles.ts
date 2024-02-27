import styled, { keyframes } from 'styled-components';

const Maximize = keyframes`
  from {
    opacity: 0.2;
    transform: scale(0.01);
  }
  to {
    opacity: 1;
    transform: scale(1);
    transform: translate(-50%, -50%)
  }
`;

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContainer = styled.div<{ size: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: calc((${({ theme }) => theme.Size.sm}) + 0.3rem);
  border-radius: ${({ theme }) => theme.Size.sxsm};
  min-width: calc((${({ theme }) => theme.Size.xl}) * (${({ size }) => size}));

  animation: ${Maximize} 300ms ease-in-out;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.Size.sm};
`;

export const ModalTitle = styled.div`
  margin: 0;
`;

export const ModalBody = styled.div`
  margin-bottom: ${({ theme }) => theme.Size.sm};
`;
