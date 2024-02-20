import type { Meta, StoryObj } from '@storybook/react';

import { MinimalUIThemeProvider } from './index';
import { Button } from '..';
import { globalVariables } from './variables';
import React from 'react';

const meta = {
  title: 'Components/Theme provider',
  component: MinimalUIThemeProvider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MinimalUIThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: globalVariables,
    children: (
      <Button onClick={() => {}} type="primary">
        <span>Button</span>
      </Button>
    ),
  },
};
