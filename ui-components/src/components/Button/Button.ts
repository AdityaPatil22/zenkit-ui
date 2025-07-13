import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'small' | 'medium' | 'large';

export class Button extends LitElement {
  static get properties() {
    return {
      variant: { type: String },
      size: { type: String },
      disabled: { type: Boolean }
    };
  }

  private _variant: ButtonVariant = 'primary';
  private _size: ButtonSize = 'medium';
  private _disabled = false;

  get variant() { return this._variant; }
  set variant(value: ButtonVariant) {
    const oldValue = this._variant;
    this._variant = value;
    this.requestUpdate('variant', oldValue);
  }

  get size() { return this._size; }
  set size(value: ButtonSize) {
    const oldValue = this._size;
    this._size = value;
    this.requestUpdate('size', oldValue);
  }

  get disabled() { return this._disabled; }
  set disabled(value: boolean) {
    const oldValue = this._disabled;
    this._disabled = value;
    this.requestUpdate('disabled', oldValue);
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      font-family: system-ui, sans-serif;
      border-radius: 6px;
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      font-weight: 500;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Size variants */
    .small {
      padding: 6px 12px;
      font-size: 14px;
    }

    .medium {
      padding: 8px 16px;
      font-size: 16px;
    }

    .large {
      padding: 12px 24px;
      font-size: 18px;
    }

    /* Style variants */
    .primary {
      background: #1b263b;
      color: white;
      border-color: #1b263b;
    }

    .primary:hover:not(:disabled) {
      background: #2a3b59;
      border-color: #2a3b59;
    }

    .secondary {
      background: #e2e8f0;
      color: #1b263b;
      border-color: #e2e8f0;
    }

    .secondary:hover:not(:disabled) {
      background: #cbd5e1;
      border-color: #cbd5e1;
    }

    .outline {
      background: transparent;
      color: #1b263b;
      border-color: #1b263b;
    }

    .outline:hover:not(:disabled) {
      background: #f8fafc;
    }
  `;

  render() {
    return html`
      <button
        class="${this.size} ${this.variant}"
        ?disabled="${this.disabled}"
        @click="${this._handleClick}"
      >
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(e: Event) {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('zen-click', {
        bubbles: true,
        composed: true,
        detail: { originalEvent: e }
      }));
    }
  }
}

customElements.define('zen-button', Button);
