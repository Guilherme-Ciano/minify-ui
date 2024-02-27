import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { MinifyUIThemeProvider } from '../Theme';
import { Column, Row } from '../Layout';
import Card from './index';
import { H1, P } from '../Typography';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <></>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Row>
        <Card {...args}>
          <P>Content goes here</P>
        </Card>
      </Row>
    </MinifyUIThemeProvider>
  ),
};

export const Customized: Story = {
  args: {
    borderRadius: 8,
    padding: 20,
    shadowLevel: 2,
    children: <P>Content goes here</P>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Row>
        <Card {...args} />
      </Row>
    </MinifyUIThemeProvider>
  ),
};
