/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '../Button';
import React, { FC, ReactNode, useState } from 'react';

import Drawer from './index';

interface DrawerProps {
  title: ReactNode | string;
  footer?: ReactNode | string;
  children: ReactNode;
  direction?: 'left' | 'right';
}

export default function DrawerComponent({
  title,
  footer,
  children,
  direction = 'right',
}: DrawerProps) {
  const [showDrawer, setShowDrawer] = useState(false);
  const hasFooter = typeof footer !== 'undefined';

  const closeDrawer = (event: any) => {
    console.log(event);
    setShowDrawer(false);
  };

  return (
    <>
      <Button type="Primary" onClick={() => setShowDrawer(true)}>
        Show Drawer
      </Button>

      <Drawer.Container
        size="medium"
        isOpen={showDrawer}
        onClose={closeDrawer}
        direction={direction}
      >
        <Drawer.Header onClose={closeDrawer}>{title}</Drawer.Header>

        <Drawer.Content>{children}</Drawer.Content>

        {hasFooter && <Drawer.Footer>{footer}</Drawer.Footer>}
      </Drawer.Container>
    </>
  );
}
