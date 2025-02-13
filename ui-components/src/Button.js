import { LitElement, html, css } from 'lit';

export class Button extends LitElement {
    static styles = css`
      button {
        padding: 10px;
        border: 1px solid #1B263B;
        border-radius: 6px;
        transition: background-color 0.3s, color 0.3s;
        cursor: pointer;     
      }
      button:hover {
        background-color: #1B263B;
        color: white;
      }
    `;

    render() {
        return html`<button><slot></slot></button>`;
    }
}

customElements.define('zen-button', Button);
export default Button;