class WebComponentTemplateShadowDom extends HTMLElement {
  shadow: ShadowRoot | null = null;

  constructor() {
    super();

    // HAS TO HAPPEN IN CONSTRUCTOR!!!
    this.shadow = this.attachShadow({ mode: "closed" });
  }
  connectedCallback() {
    console.log("wct-shadow-dom CONNECTED");

    // use SLOT only in CONNECTEDCALLBACK because it is DOM Element
    const slot = document.createElement("slot");
    slot.name = "position1";
    slot.innerText = "placeholder Text Slot";
    if (this.shadow) {
      this.shadow.appendChild(slot);
    }
  }
  disconnectedCallback() {
    console.log("wct-shadow-dom DISCONNECTED");
  }
}

customElements.define("wct-shadow-dom", WebComponentTemplateShadowDom);
export { WebComponentTemplateShadowDom };

// usage in HTML
//     <wct-shadow-dom>
//       <span slot="position1">inside slot</span>
//     </wct-shadow-dom>
