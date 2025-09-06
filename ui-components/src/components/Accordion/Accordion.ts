import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

interface AccordionItem {
  header: string;
  content: string;
  expanded?: boolean;
}

@customElement('zen-accordion')
class Accordion extends LitElement {
  @property({ type: Boolean, reflect: true }) expanded = false;
  @property({ type: Boolean, reflect: true }) multiple = false;
  @property({ type: Array }) items: AccordionItem[] = [];

  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }
    .accordion-item {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      margin-bottom: 8px;
      overflow: hidden;
      transition: height 0.2s ease-in-out;
    }
    .accordion-header {
      background-color: #1b263b;
      color: #e2e8f0;
      padding: 12px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .accordion-header:hover {
      background-color: #2a3b59;
    }
    .accordion-content {
      padding: 12px;
      background-color: #f9fafb;
      display: none;
    }
    .accordion-item.expanded .accordion-content {
      display: block;
    }
  `;

  private toggleAccordion(index: number) {
    if (this.multiple) {
      this.items = this.items.map((item, i) =>
        i === index ? { ...item, expanded: !item.expanded } : item
      );
    } else {
      this.items = this.items.map((item, i) =>
        i === index ? { ...item, expanded: !item.expanded } : { ...item, expanded: false }
      );
    }
  }

  render() {
    return html`
      ${this.items.map(
        (item, index) => html`
          <div class="accordion-item ${item.expanded ? 'expanded' : ''}">
            <div class="accordion-header" @click="${() => this.toggleAccordion(index)}">
              <slot name="header">${item.header}</slot>
              <span>${item.expanded ? '▲' : '▼'}</span>
            </div>
            <div class="accordion-content">
              <slot name="content">${item.content}</slot>
            </div>
          </div>
        `
      )}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'zen-accordion': Accordion;
  }
}