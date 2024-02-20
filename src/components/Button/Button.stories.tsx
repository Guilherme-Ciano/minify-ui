import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { FaSave } from 'react-icons/fa';
import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'sm',
    type: 'default',
    children: <span>Button</span>,
  },
};

export const Primary: Story = {
  args: {
    icon: <FaSave />,
    type: 'primary',
    children: <span>Button</span>,
  },
};

export const Dashed: Story = {
  args: {
    type: 'dashed',
    children: <span>Button</span>,
  },
};

export const Text: Story = {
  args: {
    type: 'text',
    children: <span>Button</span>,
  },
};

export const Shadow: Story = {
  args: {
    trailIcon: <FaSave />,
    type: 'shadow',
    children: <span>Button</span>,
  },
};
