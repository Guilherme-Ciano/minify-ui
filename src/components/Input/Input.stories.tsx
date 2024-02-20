import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { FaAddressCard } from 'react-icons/fa';
import Input from './Input';
import { MinifyUIThemeProvider } from '../Theme';

const meta: Meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'placeholder',
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Input {...args} />
    </MinifyUIThemeProvider>
  ),
};

export const Primary: Story = {
  args: {
    placeholder: 'placeholder',
    primary: true,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Input {...args} />
    </MinifyUIThemeProvider>
  ),
};

export const ErrorVariant: Story = {
  args: {
    placeholder: 'placeholder',
    error: true,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Input {...args} />
    </MinifyUIThemeProvider>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: 'placeholder',
    disabled: true,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Input {...args} />
    </MinifyUIThemeProvider>
  ),
};

export const WithIcon: Story = {
  args: {
    placeholder: 'placeholder',
    icon: <FaAddressCard />,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Input {...args} />
    </MinifyUIThemeProvider>
  ),
};
