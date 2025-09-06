"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const l=require("lit");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=globalThis,$=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,k=Symbol(),P=new WeakMap;let z=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==k)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if($&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=P.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&P.set(e,t))}return t}toString(){return this.cssText}};const A=r=>new z(typeof r=="string"?r:r+"",void 0,k),R=(r,t)=>{if($)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=f.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},x=$?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return A(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:M,defineProperty:j,getOwnPropertyDescriptor:T,getOwnPropertyNames:L,getOwnPropertySymbols:q,getPrototypeOf:D}=Object,d=globalThis,U=d.trustedTypes,N=U?U.emptyScript:"",_=d.reactiveElementPolyfillSupport,p=(r,t)=>r,b={toAttribute(r,t){switch(t){case Boolean:r=r?N:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},E=(r,t)=>!M(r,t),C={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:E};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),d.litPropertyMetadata??(d.litPropertyMetadata=new WeakMap);class h extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=C){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&j(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=T(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const a=i==null?void 0:i.call(this);o.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??C}static _$Ei(){if(this.hasOwnProperty(p("elementProperties")))return;const t=D(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(p("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(p("properties"))){const e=this.properties,s=[...L(e),...q(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(x(i))}else t!==void 0&&e.push(x(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return R(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:b).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:b;this._$Em=i,this[i]=a.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??E)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}h.elementStyles=[],h.shadowRootOptions={mode:"open"},h[p("elementProperties")]=new Map,h[p("finalized")]=new Map,_==null||_({ReactiveElement:h}),(d.reactiveElementVersions??(d.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:E},V=(r=B,t,e)=>{const{kind:s,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(e.name,r),s==="accessor"){const{name:n}=e;return{set(a){const g=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,g,r)},init(a){return a!==void 0&&this.P(n,void 0,r),a}}}if(s==="setter"){const{name:n}=e;return function(a){const g=this[n];t.call(this,a),this.requestUpdate(n,g,r)}}throw Error("Unsupported decorator location: "+s)};function y(r){return(t,e)=>typeof e=="object"?V(r,t,e):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}const S=class S extends l.LitElement{constructor(){super(...arguments),this._variant="primary",this._size="medium",this._disabled=!1}static get properties(){return{variant:{type:String},size:{type:String},disabled:{type:Boolean}}}get variant(){return this._variant}set variant(t){const e=this._variant;this._variant=t,this.requestUpdate("variant",e)}get size(){return this._size}set size(t){const e=this._size;this._size=t,this.requestUpdate("size",e)}get disabled(){return this._disabled}set disabled(t){const e=this._disabled;this._disabled=t,this.requestUpdate("disabled",e)}render(){return l.html`
      <button
        class="${this.size} ${this.variant}"
        ?disabled="${this.disabled}"
        @click="${this._handleClick}"
      >
        <slot></slot>
      </button>
    `}_handleClick(t){this.disabled||this.dispatchEvent(new CustomEvent("zen-click",{bubbles:!0,composed:!0,detail:{originalEvent:t}}))}};S.styles=l.css`
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
  `;let m=S;customElements.define("zen-button",m);var I=Object.defineProperty,J=(r,t,e,s)=>{for(var i=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=n(t,e,i)||i);return i&&I(t,e,i),i};const w=class w extends l.LitElement{constructor(){super(...arguments),this.interactive=!1}render(){return l.html`
      <div class="card">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.interactive&&this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.interactive&&this.removeEventListener("click",this._handleClick)}_handleClick(t){this.dispatchEvent(new CustomEvent("zen-click",{bubbles:!0,composed:!0,detail:{originalEvent:t}}))}};w.styles=l.css`
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
  `;let u=w;J([y({type:Boolean,reflect:!0})],u.prototype,"interactive");customElements.define("zen-card",u);var K=Object.defineProperty,W=Object.getOwnPropertyDescriptor,v=(r,t,e,s)=>{for(var i=s>1?void 0:s?W(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&K(t,e,i),i};let c=class extends l.LitElement{constructor(){super(...arguments),this.expanded=!1,this.multiple=!1,this.items=[]}toggleAccordion(r){this.multiple?this.items=this.items.map((t,e)=>e===r?{...t,expanded:!t.expanded}:t):this.items=this.items.map((t,e)=>e===r?{...t,expanded:!t.expanded}:{...t,expanded:!1})}render(){return l.html`
      ${this.items.map((r,t)=>l.html`
          <div class="accordion-item ${r.expanded?"expanded":""}">
            <div class="accordion-header" @click="${()=>this.toggleAccordion(t)}">
              <slot name="header">${r.header}</slot>
              <span>${r.expanded?"▲":"▼"}</span>
            </div>
            <div class="accordion-content">
              <slot name="content">${r.content}</slot>
            </div>
          </div>
        `)}
    `}};c.styles=l.css`
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
  `;v([y({type:Boolean,reflect:!0})],c.prototype,"expanded",2);v([y({type:Boolean,reflect:!0})],c.prototype,"multiple",2);v([y({type:Array})],c.prototype,"items",2);c=v([O("zen-accordion")],c);exports.Button=m;exports.Card=u;
