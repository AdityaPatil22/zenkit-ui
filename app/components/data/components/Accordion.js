'use client';
import 'zenkit-ui';

export const AccordionData = {
  title: 'Accordion',
  description:
    'Accordions allow users to expand and collapse sections of content, helping to manage space and improve user experience on content-heavy pages.',
  example: () => (

    <zen-accordion items={[
      {
        header: 'Section 1',
        content: 'This is the content for section 1',
        expanded: true
      },
      {
        header: 'Section 2',
        content: 'This is the content for section 2'
      }
    ]}>
    </zen-accordion>

  ),
  code: `
  <div className="flex gap-4 flex-wrap">
      <zen-accordion items={[
        {
          header: 'Section 1',
          content: 'This is the content for section 1',
          expanded: true
        },
        {
          header: 'Section 2',
          content: 'This is the content for section 2'
        }
      ]}>
      </zen-accordion>
  </div>`,
};