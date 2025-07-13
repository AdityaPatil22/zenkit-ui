import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Button';
import type { Button } from './Button';

const meta: Meta<Button> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args) => html`
    <zen-button
      variant="${args.variant}"
      size="${args.size}"
      ?disabled="${args.disabled}"
    >
      ${args.slot || 'Button'}
    </zen-button>
  `,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    slot: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    slot: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    disabled: false,
    slot: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'medium',
    disabled: false,
    slot: 'Outline Button',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    disabled: false,
    slot: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    disabled: false,
    slot: 'Large Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: true,
    slot: 'Disabled Button',
  },
};
