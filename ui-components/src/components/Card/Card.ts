import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class Card extends LitElement {
  @property({ type: Boolean, reflect: true })
  interactive = false;

  static styles = css`
    :host {
      display: block;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.2s ease;
    }

    .card {
      background: white;
      border: 1px solid #e2e8f0;
      padding: 1rem;
      height: 100%;
      box-sizing: border-box;
    }

    :host([interactive]) {
      cursor: pointer;
    }

    :host([interactive]:hover) {
      transform: translateY(-2px);
    }

    /* Slots */
    ::slotted([slot="header"]) {
      margin: 0 0 1rem 0;
      padding: 0 0 1rem 0;
      border-bottom: 1px solid #e2e8f0;
    }

    ::slotted([slot="footer"]) {
      margin: 1rem 0 0 0;
      padding: 1rem 0 0 0;
      border-top: 1px solid #e2e8f0;
    }
  `;

  render() {
    return html`
      <div class="card">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.interactive) {
      this.addEventListener('click', this._handleClick);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.interactive) {
      this.removeEventListener('click', this._handleClick);
    }
  }

  private _handleClick(e: Event) {
    this.dispatchEvent(new CustomEvent('zen-click', {
      bubbles: true,
      composed: true,
      detail: { originalEvent: e }
    }));
  }
}

customElements.define('zen-card', Card);
