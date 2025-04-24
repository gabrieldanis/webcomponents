class WebcomponentTemplateShadowDom extends HTMLElement {
  shadowRoot: ShadowRoot | null = null;

  constructor() {
    super();

    // HAS TO HAPPEN IN CONSTRUCTOR!!!
    this.shadowRoot = this.attachShadow({ mode: "closed" });
  }
  connectedCallback() {
    console.log("wct-shadow-dom CONNECTED");

    // use SLOT only in CONNECTEDCALLBACK because it is DOM Element
    const slot = document.createElement("slot");
    slot.name = "position1";
    slot.innerText = "placeholder Text Slot";
    if (this.shadowRoot) {
      this.shadowRoot.appendChild(slot);
    }
  }
  disconnectedCallback() {
    console.log("wct-shadow-dom DISCONNECTED");
  }
}

customElements.define("wct-shadow-dom", WebcomponentTemplateShadowDom);
export { WebcomponentTemplateShadowDom };

// usage in HTML
//     <wct-shadow-dom>
//       <span slot="position1">inside slot</span>
//     </wct-shadow-dom>
