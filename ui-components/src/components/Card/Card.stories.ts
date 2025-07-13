import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './Card';
import type { Card } from './Card';

interface CardStoryProps extends Card {
  header?: string;
  content?: string;
  footer?: string;
}

const meta: Meta<CardStoryProps> = {
  title: 'Components/Card',
  tags: ['autodocs'],
  component: 'zen-card',
  render: (args) => html`
    <zen-card
      ?interactive="${args.interactive}"
      style="width: 300px;"
    >
      ${args.header ? html`<h3 slot="header">${args.header}</h3>` : ''}
      ${args.content}
      ${args.footer ? html`<div slot="footer">${args.footer}</div>` : ''}
    </zen-card>
  `,
  argTypes: {
    interactive: {
      description: 'Whether the card is interactive (hoverable and clickable)',
      control: { type: 'boolean' },
    },
    header: {
      description: 'Content for the card header',
      control: { type: 'text' },
      table: {
        category: 'Slots',
      }
    },
    content: {
      description: 'Main content of the card',
      control: { type: 'text' },
      table: {
        category: 'Slots',
      }
    },
    footer: {
      description: 'Content for the card footer',
      control: { type: 'text' },
      table: {
        category: 'Slots',
      }
    },
  },
};

export default meta;
type Story = StoryObj<CardStoryProps>;

export const Basic: Story = {
  args: {
    interactive: false,
    header: 'Card Title',
    content: 'This is a minimalist card component with clean and simple styling.',
    footer: 'Card Footer',
  },
};

export const Interactive: Story = {
  args: {
    interactive: true,
    header: 'Interactive Card',
    content: 'This card is interactive! Hover over it to see the subtle animation.',
    footer: 'Click me!',
  },
};

export const ContentOnly: Story = {
  args: {
    interactive: false,
    content: 'A card with only content, showing its minimal form.',
  },
};

export const ComplexContent: Story = {
  render: ({ interactive }) => html`
    <zen-card
      ?interactive="${interactive}"
      style="width: 300px;"
    >
      <h3 slot="header">Complex Card</h3>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <img
          src="https://picsum.photos/300/200"
          alt="Random image"
          style="width: 100%; border-radius: 8px;"
        />
        <p>This card shows how to use complex content while maintaining minimalist styling.</p>
        <zen-button variant="primary">Learn More</zen-button>
      </div>
      <div slot="footer" style="display: flex; justify-content: space-between; align-items: center;">
        <span>Posted by John Doe</span>
        <span>2 min read</span>
      </div>
    </zen-card>
  `,
  args: {
    interactive: true,
  },
};
