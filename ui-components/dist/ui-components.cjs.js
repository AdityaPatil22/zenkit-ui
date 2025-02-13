"use strict";var c=Object.defineProperty;var i=(o,t,r)=>t in o?c(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r;var s=(o,t,r)=>i(o,typeof t!="symbol"?t+"":t,r);const e=require("lit");class n extends e.LitElement{render(){return e.html`<button><slot></slot></button>`}}s(n,"styles",e.css`
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
    `);customElements.define("zen-button",n);
