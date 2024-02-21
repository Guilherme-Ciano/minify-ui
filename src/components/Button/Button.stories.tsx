import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { FaSave, FaSearch } from 'react-icons/fa';
import Button from './Button';
import { MinifyUIThemeProvider } from '../Theme';
import { Column, Row } from '../Layout';
import Terminal from '../Terminal';

const meta = {
  title: 'Components/Button',
  component: Button,
  // tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const handleClick = () => {};

export const Default: Story = {
  args: {
    size: 'sm',
    type: 'default',
    children: <span>Button</span>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Button {...args}></Button>
    </MinifyUIThemeProvider>
  ),
};

export const Primary: Story = {
  args: {
    type: 'primary',
    children: <span>Button</span>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Button {...args}></Button>
    </MinifyUIThemeProvider>
  ),
};

export const Dashed: Story = {
  args: {
    type: 'dashed',
    children: <span>Button</span>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Button {...args}></Button>
    </MinifyUIThemeProvider>
  ),
};

export const Text: Story = {
  args: {
    type: 'text',
    children: <span>Button</span>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Button {...args}></Button>
    </MinifyUIThemeProvider>
  ),
};

export const Shadow: Story = {
  args: {
    type: 'shadow',
    children: <span>Button</span>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Button {...args}></Button>
    </MinifyUIThemeProvider>
  ),
};

export const AllVariants: Story = {
  args: {
    type: 'shadow',
    children: <span>Button</span>,
  },
  name: 'All Buttons',
  render: (args) => (
    <MinifyUIThemeProvider>
      <Row>
        <Button type="primary" onClick={handleClick}>
          <span>Button</span>
        </Button>
        <Button type="default" onClick={handleClick}>
          <span>Button</span>
        </Button>
        <Button type="shadow" onClick={handleClick}>
          <span>Button</span>
        </Button>
        <Button type="dashed" onClick={handleClick}>
          <span>Button</span>
        </Button>
        <Button type="text" onClick={handleClick}>
          <span>Button</span>
        </Button>
      </Row>
    </MinifyUIThemeProvider>
  ),
};
