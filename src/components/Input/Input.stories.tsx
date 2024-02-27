import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { FaAddressCard, FaCalendar } from 'react-icons/fa';
import InputText from './Input';
import { MinifyUIThemeProvider } from '../Theme';
import { Column, Row } from '../Layout';

const meta: Meta = {
  title: 'Components/Input',
  component: InputText,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Username:',
    placeholder: 'Enter your username',
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <InputText name={'username'} {...args} />
    </MinifyUIThemeProvider>
  ),
};

export const WithIcons: Story = {
  args: {
    label: 'Address:',
    placeholder: 'Enter your address',
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <InputText name={'Address'} {...args} leftIcon={<FaAddressCard />} />
      <InputText
        name={'Address'}
        placeholder="Search"
        rightIcon={<FaAddressCard />}
      />
    </MinifyUIThemeProvider>
  ),
};

export const WithHelperText: Story = {
  args: {
    label: 'Password:',
    placeholder: 'Enter your password',
    helper: 'Password must be at least 8 characters long.',
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <InputText name={'Password'} {...args} />
    </MinifyUIThemeProvider>
  ),
};

export const WithErrorHandling: Story = {
  args: {
    label: 'Email:',
    placeholder: 'Enter your email',
    errors: 'Invalid email address.',
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <InputText name={'Email'} {...args} />
    </MinifyUIThemeProvider>
  ),
};

export const AllVariants: Story = {
  args: {
    size: 'md',
    label: 'label',
    helper: 'helper',
    disabled: false,
  },
  render: (args) => (
    <MinifyUIThemeProvider>
      <Column>
        <Row style={{ gap: '2rem ' }}>
          <InputText name={'input'} {...args} />
          <InputText name={'input'} {...args} leftIcon={<FaAddressCard />} />
          <InputText name={'input'} {...args} rightIcon={<FaAddressCard />} />
        </Row>
        <Row style={{ gap: '2rem ' }}>
          <InputText name={'input'} {...args} success />
          <InputText
            name={'input'}
            {...args}
            success
            leftIcon={<FaAddressCard />}
          />
          <InputText
            name={'input'}
            {...args}
            success
            rightIcon={<FaAddressCard />}
          />
        </Row>
        <Row style={{ gap: '2rem ' }}>
          <InputText name={'input'} {...args} errors="Error message" />
          <InputText
            name={'input'}
            {...args}
            errors="Error message"
            leftIcon={<FaAddressCard />}
          />
          <InputText
            name={'input'}
            {...args}
            errors="Error message"
            rightIcon={<FaAddressCard />}
          />
        </Row>
      </Column>
    </MinifyUIThemeProvider>
  ),
};
