import type { Meta, StoryObj } from '@storybook/react';

import { MinifyUIThemeProvider } from './index';
import { Button } from '..';
import { globalVariables } from './variables';
import React from 'react';

const meta = {
  title: 'Components/Theme provider',
  component: MinifyUIThemeProvider,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MinifyUIThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: globalVariables,
    children: (
      <Button onClick={() => {}} type="Primary">
        <span>Button</span>
      </Button>
    ),
  },
};
