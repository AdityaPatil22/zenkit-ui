var s = Object.defineProperty;
var l = (t, o, r) => o in t ? s(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r;
var e = (t, o, r) => l(t, typeof o != "symbol" ? o + "" : o, r);
import { LitElement as c, css as d, html as i } from "lit";
class n extends c {
  render() {
    return i`<button><slot></slot></button>`;
  }
}
e(n, "styles", d`
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
    `);
customElements.define("zen-button", n);
