import { Meta, StoryObj } from '@storybook/react';
import { MinifyUIThemeProvider } from '../Theme';
import { PageWrapper, Center, Column, Row } from './Layout';
import React from 'react';
import { P } from '../Typography';

const meta: Meta = {
  title: 'Components/Layout',
  component: Column,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageLayout: Story = {
  args: {
    children: (
      <>
        <P>Element 1</P>
        <P>Element 2</P>
      </>
    ),
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <PageWrapper {...args} />
    </MinifyUIThemeProvider>
  ),
};

export const ColumnLayout: Story = {
  args: {
    children: (
      <>
        <P>Element 1</P>
        <P>Element 2</P>
      </>
    ),
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Column {...args} />
    </MinifyUIThemeProvider>
  ),
};

export const RowLayout: Story = {
  args: {
    children: (
      <>
        <P>Element 1</P>
        <P>Element 2</P>
      </>
    ),
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Row {...args} />
    </MinifyUIThemeProvider>
  ),
};

export const CenterLayout: Story = {
  args: {
    children: (
      <>
        <P>Element 1</P>
        <P>Element 2</P>
      </>
    ),
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Center {...args} />
    </MinifyUIThemeProvider>
  ),
};
