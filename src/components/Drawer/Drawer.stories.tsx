import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import Drawer from './Drawer';
import { MinifyUIThemeProvider } from '../Theme';
import { P } from '../Typography';
import Button from '../Button';
import { Row } from '../Layout';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'left',
    title: <P type="bold">Drawer Header</P>,
    footer: (
      <Row>
        <Button type="Default" onClick={() => {}}>
          Cancelar
        </Button>
        <Button type="Primary" onClick={() => {}}>
          Enviar
        </Button>
      </Row>
    ),
    children: <P>Main content</P>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Drawer {...args} />
    </MinifyUIThemeProvider>
  ),
};
