class WebcomponentButton extends HTMLButtonElement {
  constructor() {
    super();
    this.innerText = this.getAttribute("slot") ?? "";
    document.addEventListener("click", this);
  }

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

customElements.define("wc-button", WebcomponentButton, { extends: "button" });
export { WebcomponentButton };
