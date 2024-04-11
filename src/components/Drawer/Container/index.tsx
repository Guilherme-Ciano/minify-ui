import React, { ReactNode } from 'react';

import { Drawer } from '../styles';

export interface DrawerContainerProps {
  isOpen: boolean;
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  onClose: (event: any) => void;
  direction?: 'left' | 'right';
}

export default function Container({
  isOpen,
  size = 'medium',
  onClose,
  children,
  direction = 'right',
}: DrawerContainerProps): ReactNode {
  return (
    <>
      <Drawer.Overlay isOpen={isOpen} onClick={onClose} />
      <Drawer.Container isOpen={isOpen} size={size} direction={direction}>
        {children}
      </Drawer.Container>
    </>
  );
}
