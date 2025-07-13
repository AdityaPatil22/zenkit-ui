'use client';
import 'zenkit-ui';

export const allComponents = [
  {
    id: 1,
    title: 'Button',
    link: 'button',
    component: <zen-button variant="primary" size="medium">Click me</zen-button>,
    description:
      'A customizable button component that provides consistent styling and interaction states.',
  },
  {
    id: 2,
    title: 'Card',
    link: 'card',
    component: (
      <zen-card interactive>
        <h3 slot="header">Card Title</h3>
        <p>This is a sample card content.</p>
        <div slot="footer">
          <zen-button variant="secondary" size="small">Learn More</zen-button>
        </div>
      </zen-card>
    ),
    description:
      'A flexible card component that can contain various types of content with consistent styling.',
  },
];
