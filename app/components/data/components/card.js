'use client';
import 'zenkit-ui';

export const cardData = {
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
  code: `<div className="w-[300px]">
  <zen-card interactive>
    <h3 slot="header" className="text-lg font-semibold">Card Title</h3>
    <div className="p-2">
      <p className="mb-4">This is a sample card with header and footer sections. Click to interact.</p>
      <img src="https://picsum.photos/300/200" alt="Sample" className="rounded-lg mb-4" />
    </div>
    <div slot="footer" className="flex justify-end">
      <zen-button variant="secondary" size="small">Learn More</zen-button>
    </div>
  </zen-card>
</div>`,
};
