import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { MinifyUIThemeProvider } from '../Theme';
import { Column, Row } from '../Layout';
import { H1, H2, H3, P, A, Small } from './index';

const meta = {
  title: 'Components/Typography',
  component: H1,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof H1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  args: {
    type: 'normal',
    children: '',
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Row
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <H1 {...args}>Heading 1</H1>
        <H2 {...args}>Heading 2</H2>
        <H3 {...args}>Heading 3</H3>
      </Row>
    </MinifyUIThemeProvider>
  ),
};

export const Paragraph: Story = {
  args: {
    type: 'normal',
    children: '',
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Row
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <P {...args}>Paragraph</P>
      </Row>
    </MinifyUIThemeProvider>
  ),
};

export const Link: Story = {
  args: {
    type: 'normal',
    children: '',
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Row
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <A href="/" {...args}>
          Link
        </A>
      </Row>
    </MinifyUIThemeProvider>
  ),
};

export const SmallText: Story = {
  args: {
    type: 'normal',
    children: '',
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Row
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <Small {...args}>Small text</Small>
      </Row>
    </MinifyUIThemeProvider>
  ),
};

export const All: Story = {
  args: {
    type: 'normal',
    children: '',
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Row
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <H1 {...args}>Heading 1</H1>
        <H2 {...args}>Heading 2</H2>
        <H3 {...args}>Heading 3</H3>
        <P {...args}>Paragraph</P>
        <A {...args}>Link</A>
        <Small {...args}>Small text</Small>
      </Row>
    </MinifyUIThemeProvider>
  ),
};
