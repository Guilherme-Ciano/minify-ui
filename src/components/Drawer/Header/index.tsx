import { IoClose } from 'react-icons/io5';
import React, { ReactNode } from 'react';

import { Drawer } from '../styles';

export interface DrawerHeaderProps {
  children: ReactNode | string;
  onClose: (event: any) => void;
}

export default function Header({
  children,
  onClose,
}: DrawerHeaderProps): ReactNode {
  return (
    <Drawer.Header>
      {children}

      <Drawer.CloseButton onClick={onClose}>
        <IoClose />
      </Drawer.CloseButton>
    </Drawer.Header>
  );
}
