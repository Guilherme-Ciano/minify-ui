import { Meta, StoryObj } from '@storybook/react';

import Input from './index';
import React from 'react';
import { FaAddressCard } from 'react-icons/fa';

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
};

export const Primary: Story = {
  args: {
    placeholder: 'placeholder',
    primary: true,
  },
};

export const ErrorVariant: Story = {
  args: {
    placeholder: 'placeholder',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'placeholder',
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: 'placeholder',
    icon: <FaAddressCard />,
  },
};
