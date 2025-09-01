'use client';
import 'zenkit-ui';

export const buttonData = {
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
  code: `<div className="flex gap-4 flex-wrap">
  <zen-button variant="primary">Primary</zen-button>
  <zen-button variant="secondary">Secondary</zen-button>
  <zen-button variant="outline">Outline</zen-button>
  <zen-button variant="ghost">Ghost</zen-button>
  <zen-button variant="primary" disabled>Disabled</zen-button>
</div>`,
};
