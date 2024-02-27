import type { Meta, StoryObj } from '@storybook/react';

import ToastProvider from './index';
import { MinifyUIThemeProvider } from '..';
import {
  BlackToast,
  DefaultToast,
  ErrorToast,
  InfoToast,
  SuccessToast,
  WarningToast,
} from './Exemples';

import React from 'react';

const meta = {
  title: 'Components/Toast',
  component: ToastProvider,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <></>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <ToastProvider {...args}>
        <DefaultToast />
      </ToastProvider>
    </MinifyUIThemeProvider>
  ),
};

export const Info: Story = {
  args: {
    children: <></>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <ToastProvider {...args}>
        <InfoToast />
      </ToastProvider>
    </MinifyUIThemeProvider>
  ),
};

export const Success: Story = {
  args: {
    children: <></>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <ToastProvider {...args}>
        <SuccessToast />
      </ToastProvider>
    </MinifyUIThemeProvider>
  ),
};

export const Warning: Story = {
  args: {
    children: <></>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <ToastProvider {...args}>
        <WarningToast />
      </ToastProvider>
    </MinifyUIThemeProvider>
  ),
};

export const Error: Story = {
  args: {
    children: <></>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <ToastProvider {...args}>
        <ErrorToast />
      </ToastProvider>
    </MinifyUIThemeProvider>
  ),
};

export const Black: Story = {
  args: {
    children: <></>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <ToastProvider {...args}>
        <BlackToast />
      </ToastProvider>
    </MinifyUIThemeProvider>
  ),
};
