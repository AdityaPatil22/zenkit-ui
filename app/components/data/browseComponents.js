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
      default:
        return null;
    }
  };

  return { componentData, getPreview, loaded };
}
