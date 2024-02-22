import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import Button from './Button';
import { MinifyUIThemeProvider } from '../Theme';
import { Column, Row } from '../Layout';
import { FaInfo, FaInfoCircle, FaSave, FaTrash } from 'react-icons/fa';

const meta = {
  title: 'Components/Button',
  component: Button,
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
    type: 'Default',
    children: <span>Button</span>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Row>
        <Button {...args} />
        <Button {...args} icon={<FaSave />} />
        <Button {...args} trailIcon={<FaSave />} />
      </Row>
    </MinifyUIThemeProvider>
  ),
};

export const Primary: Story = {
  args: {
    type: 'Primary',
    children: <span>Button</span>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Row>
        <Button {...args} />
        <Button {...args} icon={<FaSave />} />
        <Button {...args} trailIcon={<FaSave />} />
      </Row>
    </MinifyUIThemeProvider>
  ),
};

export const Secondary: Story = {
  args: {
    type: 'Secondary',
    children: <span>Button</span>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Row>
        <Button {...args} />
        <Button {...args} icon={<FaSave />} />
        <Button {...args} trailIcon={<FaSave />} />
      </Row>
    </MinifyUIThemeProvider>
  ),
};

export const Base: Story = {
  args: {
    type: 'Base',
    children: <span>Button</span>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Row>
        <Button {...args} />
        <Button {...args} icon={<FaSave />} />
        <Button {...args} trailIcon={<FaSave />} />
      </Row>
    </MinifyUIThemeProvider>
  ),
};

export const Danger: Story = {
  args: {
    type: 'Danger',
    children: <span>Button</span>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Row>
        <Button {...args} />
        <Button {...args} icon={<FaTrash />} />
        <Button {...args} trailIcon={<FaTrash />} />
      </Row>
    </MinifyUIThemeProvider>
  ),
};

export const Text: Story = {
  args: {
    type: 'Text',
    children: <span>Button</span>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Row>
        <Button {...args} />
        <Button {...args} icon={<FaInfoCircle />} />
        <Button {...args} trailIcon={<FaInfoCircle />} />
      </Row>
    </MinifyUIThemeProvider>
  ),
};

export const AllVariants: Story = {
  args: {
    children: <span>Button</span>,
  },
  name: 'All Buttons',
  render: () => (
    <MinifyUIThemeProvider>
      <Row>
        <Button type="Default" hover onClick={handleClick}>
          <span>Button</span>
        </Button>
        <Button type="Base" hover onClick={handleClick}>
          <span>Button</span>
        </Button>
        <Button type="Primary" hover onClick={handleClick}>
          <span>Button</span>
        </Button>
        <Button type="Secondary" hover onClick={handleClick}>
          <span>Button</span>
        </Button>
        <Button type="Danger" hover onClick={handleClick}>
          <span>Button</span>
        </Button>
        <Button type="Text" hover onClick={handleClick}>
          <span>Button</span>
        </Button>
      </Row>
    </MinifyUIThemeProvider>
  ),
};

export const Showcase: Story = {
  args: {
    children: <span>Button</span>,
  },
  render: () => (
    <MinifyUIThemeProvider>
      <Column>
        <Button type="Default" onClick={handleClick}>
          <span>Click me</span>
        </Button>

        <Button type="Primary" onClick={handleClick}>
          <span>Submit</span>
        </Button>

        <Button type="Secondary" onClick={handleClick}>
          <span>Cancel</span>
        </Button>

        <Button type="Base" onClick={handleClick}>
          <span>Learn more</span>
        </Button>

        <Button type="Danger" onClick={handleClick}>
          <span>Delete</span>
        </Button>

        <Button type="Text" onClick={handleClick}>
          <span>View details</span>
        </Button>

        <Button type="Primary" icon={<FaSave />} onClick={handleClick}>
          <span>Save</span>
        </Button>

        <Button type="Primary" disabled onClick={handleClick}>
          <span>Submit</span>
        </Button>

        <Button type="Primary" hover onClick={handleClick}>
          <span>Submit</span>
        </Button>

        <Button type="Primary" hover shadow onClick={handleClick}>
          <span>Submit</span>
        </Button>
      </Column>
    </MinifyUIThemeProvider>
  ),
};
