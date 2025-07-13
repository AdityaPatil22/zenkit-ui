'use client';
import 'zenkit-ui';

export const componentData = {
  button: {
    title: 'Button',
    description:
      'Buttons allow users to take actions with a single click. They can be customized with different variants, sizes, and states.',
    example: () => (
      <div className="flex gap-4 flex-wrap">
        <zen-button variant="primary">Primary</zen-button>
        <zen-button variant="secondary">Secondary</zen-button>
        <zen-button variant="outline">Outline</zen-button>
        <zen-button variant="ghost">Ghost</zen-button>
        <zen-button variant="primary" disabled>
          Disabled
        </zen-button>
      </div>
    ),
  },
  card: {
    title: 'Card',
    description:
      'Cards provide a flexible and extensible content container with support for headers, footers, and interactive states.',
    example: () => (
      <div className="w-[300px]">
        <zen-card interactive>
          <h3 slot="header" className="text-lg font-semibold">
            Card Title
          </h3>
          <div className="p-2">
            <p className="mb-4">
              This is a sample card with header and footer sections. Click to
              interact.
            </p>
            <img
              src="https://picsum.photos/300/200"
              alt="Sample"
              className="rounded-lg mb-4"
            />
          </div>
          <div slot="footer" className="flex justify-end">
            <zen-button variant="secondary" size="small">
              Learn More
            </zen-button>
          </div>
        </zen-card>
      </div>
    ),
  },
};
