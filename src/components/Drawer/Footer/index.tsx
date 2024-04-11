import React, { ReactNode } from 'react';

import { Drawer } from '../styles';

export interface DrawerFooterProps {
  children: ReactNode;
}

export default function Footer({ children }: DrawerFooterProps): ReactNode {
  return <Drawer.Footer>{children}</Drawer.Footer>;
}
