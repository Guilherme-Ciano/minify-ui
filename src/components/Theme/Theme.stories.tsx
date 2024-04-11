import type { Meta, StoryObj } from '@storybook/react';

import { MinifyUIThemeProvider } from './index';
import { Button } from '..';
import { globalVariables } from './variables';
import React from 'react';
import { AllVariants } from '../Toast/Exemples';
import ToastProvider from '../Toast/Toast';
import { EThemeMode } from './interfaces';

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
    themeMode: EThemeMode.light,
    theme: globalVariables,
    children: (
      <Button onClick={() => {}} type="Primary">
        <span>Button</span>
      </Button>
    ),
  },
};

export const ColorScheme: Story = {
  args: {
    themeMode: EThemeMode.light,
    colorScheme: {
      Neutral: '#4E6766',
      Primary: '#5AB1BB',
    },
    children: (
      <ToastProvider>
        <AllVariants />
      </ToastProvider>
    ),
  },
  render: (args) => <MinifyUIThemeProvider {...args}></MinifyUIThemeProvider>,
};
