import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { MinifyUIThemeProvider } from '../Theme';
import React from 'react';
import DefaultModal from './Exemples';

const meta: Meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    children: <></>,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <DefaultModal />
    </MinifyUIThemeProvider>
  ),
};
