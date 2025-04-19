class WebcomponentTemplateLightDom extends HTMLElement {
  constructor() {
    super();
    const div = document.createElement("div");
    const size = this.getAttribute("size");
    div.innerText = `hello from the light DOM, my size is ${size}`;
    this.append(div);
    // getting info from attributs aka. passing info into webcomponent through html
    console.log("size:", size);
  }

  connectedCallback() {
    console.log("wct-light-dom CONNECTED");
    const slot = document.createElement("slot");
    this.appendChild(slot);
  }
  disconnectedCallback() {
    console.log("wc-light-dom DISCONNECTED");
  }
}

customElements.define("wct-light-dom", WebcomponentTemplateLightDom);
export { WebcomponentTemplateLightDom };
