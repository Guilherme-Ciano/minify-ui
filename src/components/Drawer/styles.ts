import styled from 'styled-components';

interface DrawerContainerProps {
  isOpen: boolean;
  size: 'small' | 'medium' | 'large';
  direction: 'left' | 'right';
}

interface DrawerOverlayProps {
  isOpen: boolean;
}

const ContainerSizes = {
  small: '250px',
  medium: '378px',
  large: '736px',
};

const Container = styled.div<DrawerContainerProps>`
  width: ${({ size }) => ContainerSizes[size]};
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  ${({ direction, size, isOpen }) => {
    if (direction !== 'right') {
      return {
        left: isOpen ? '0' : `-${ContainerSizes[size]}`,
      };
    }

    return {
      right: isOpen ? '0' : `-${ContainerSizes[size]}`,
    };
  }}

  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};

  position: fixed;
  top: 0;

  transition: ${({ direction }) => direction} 0.3s ease-in-out;

  z-index: 1000;
`;

const Content = styled.div`
  height: 100%;
  padding: ${({ theme }) => theme.Size.md};
  background-color: ${({ theme }) => theme.Colors.BW['200']};
`;

const Header = styled.div`
  display: flex;
  flex: 0;

  justify-content: space-between;

  background-color: white;

  align-items: center;

  padding: ${({ theme }) => theme.Size.sm} ${({ theme }) => theme.Size.md};

  font-size: ${({ theme }) => theme.Size.sm};
  line-height: 1.5;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);
`;

const CloseButton = styled.button`
  width: ${({ theme }) => theme.Size.lg};
  height: ${({ theme }) => theme.Size.md};

  display: flex;

  justify-content: center;
  align-items: center;

  color: rgba(0, 0, 0, 0.45);

  font-size: ${({ theme }) => theme.Size.sm};
  font-weight: 600;

  text-align: center;
  text-transform: none;
  text-decoration: none;

  background: transparent;
  border: 0;

  cursor: pointer;
  transition: all 0.2s;
`;

const Footer = styled.div`
  display: flex;
  flex: 0;

  background-color: white;

  align-items: center;

  padding: ${({ theme }) => theme.Size.sm} ${({ theme }) => theme.Size.md};

  font-size: ${({ theme }) => theme.Size.sm};
  line-height: 1.5;
  border-top: 1px solid rgba(5, 5, 5, 0.06);
`;

const Overlay = styled.div<DrawerOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, ${({ isOpen }) => (isOpen ? '0.45' : '0')});
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out,
    visibility 0s ease-in-out ${({ isOpen }) => (isOpen ? '0s' : '0.3s')};
  z-index: 999;
`;

export const Drawer = {
  Container,
  Overlay,
  Content,
  Header,
  Footer,
  CloseButton,
};
