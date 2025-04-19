class WebcomponentTemplateLightDom extends HTMLElement {
  // giving initial value to attribute coming from DOM
  size: number = 0;
  div = document.createElement("div");

  constructor() {
    super();
    this.append(this.div);
  }

  connectedCallback() {
    console.log("wct-light-dom CONNECTED");

    // getting info from attributs aka. passing info into webcomponent through html
    const size = Number(this.getAttribute("size"));
    if (size !== null) {
      this.div.innerText = `hello from the light DOM, my size is ${size}`;
    }
  }

  disconnectedCallback() {
    console.log("wc-light-dom DISCONNECTED");
  }
}

customElements.define("wct-light-dom", WebcomponentTemplateLightDom);
export { WebcomponentTemplateLightDom };
