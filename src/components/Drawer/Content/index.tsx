import React, { ReactNode } from 'react';

import { Drawer } from '../styles';

export interface DrawerContentProps {
  children: ReactNode;
}

export default function Content({ children }: DrawerContentProps): ReactNode {
  return <Drawer.Content>{children}</Drawer.Content>;
}
