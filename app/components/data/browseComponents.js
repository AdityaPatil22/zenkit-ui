'use client';
import { useEffect, useState } from 'react';

const componentData = [
  {
    id: 1,
    title: 'Button',
    link: 'button',
    description:
      'A customizable button component that provides consistent styling and interaction states.',
  },
  {
    id: 2,
    title: 'Card',
    link: 'card',
    description:
      'A flexible card component that can contain various types of content with consistent styling.',
  },
  {
    id: 3,
    title: 'Accordion',
    link: 'accordion',
    description:
      'A collapsible accordion component for displaying content in a space-efficient manner.',
  }
];

export function useComponents() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Import and initialize zenkit-ui only on the client side
    import('zenkit-ui').then(() => {
      setLoaded(true);
    });
  }, []);

  const getPreview = (id) => {
    if (!loaded) return null;

    switch (id) {
      case 1:
        return <zen-button variant="primary" size="medium">Click me</zen-button>;
      case 2:
        return (
          <zen-card interactive>
            <h3 slot="header">Card Title</h3>
            <p>This is a sample card content.</p>
            <div slot="footer">
              <zen-button variant="secondary" size="small">Learn More</zen-button>
            </div>
          </zen-card>
        );
      case 3:
        return (
          <zen-accordion items={[
          {
            header: 'Section 1',
            content: 'This is the content for section 1',
            expanded: true
          },
        ]}>
        </zen-accordion>
        );
      default:
        return null;
    }
  };

  return { componentData, getPreview, loaded };
}
