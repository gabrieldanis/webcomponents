export class WebComponentMinimal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("Minimal CONNECTED");
  }

  disconnectedCallback() {
    console.log("Minimal DISCONNECTED");
  }
}

customElements.define("wct-minimal", WebComponentMinimal);
