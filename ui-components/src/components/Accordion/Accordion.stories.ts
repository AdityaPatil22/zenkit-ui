import { html } from 'lit';
import type { StoryObj, Meta } from '@storybook/web-components';
import './Accordion';

interface AccordionArgs {
  items: Array<{
    header: string;
    content: string;
    expanded: boolean;
  }>;
  multiple: boolean;
}

export default {
  title: 'Components/Accordion',
  component: 'zen-accordion',
  argTypes: {
    items: { control: 'object' },
    multiple: { control: 'boolean' }
  },
} as Meta<AccordionArgs>;

const Template = (args: AccordionArgs) => html`
  <zen-accordion .items="${args.items}" .multiple="${args.multiple}"></zen-accordion>
`;

export const Default: StoryObj<AccordionArgs> = {
  render: Template,
  args: {
    items: [
      { header: 'Section 1', content: 'Content for section 1', expanded: false },
      { header: 'Section 2', content: 'Content for section 2', expanded: false },
    ],
    multiple: false,
  },
};

export const Multiple: StoryObj<AccordionArgs> = {
  render: Template,
  args: {
    items: [
      { header: 'Section 1', content: 'Content for section 1', expanded: false },
      { header: 'Section 2', content: 'Content for section 2', expanded: false },
    ],
    multiple: true,
  },
};