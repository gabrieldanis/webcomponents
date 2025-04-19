class WebcomponentTemplateShadowDom extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    const div = document.createElement("div");
    const slot = document.createElement("slot");
    slot.name = "position1";
    slot.innerText = "placeholder Text Slot";
    div.appendChild(slot);

    shadowRoot.appendChild(div);
  }
  connectedCallback() {
    console.log("wct-shadow-dom CONNECTED");
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
