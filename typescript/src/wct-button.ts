class WebcomponentTemplateButton extends HTMLButtonElement {
  constructor() {
    super();
    document.addEventListener("click", this);
  }

  // this is like a router for events. but needs to things.
  // addEventListener and the Function that deals with event like 'onClick'
  handleEvent(event: Event) {
    const handlerName =
      "on" + event.type.charAt(0).toUpperCase() + event.type.slice(1);
    const handler = this[handlerName as keyof this];
    if (typeof handler === "function") {
      handler.call(this, event);
    }
  }

  onClick(event: Event) {
    console.log("you clicked bitch!", event);
  }

  connectedCallback() {
    console.log("wc-button CONNECTED");
  }
  disconnectedCallback() {
    console.log("wc-button DISCONNECTED");
  }
}

customElements.define("wct-button", WebcomponentTemplateButton, {
  extends: "button",
});
export { WebcomponentTemplateButton };
