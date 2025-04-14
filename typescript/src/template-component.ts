class WebcomponentTemplate extends HTMLElement {
  btn: HTMLButtonElement;
  constructor() {
    super();
    this.btn = document.createElement("button");
    this.btn.textContent = "hi there";
    this.append(this.btn);
    this.btn.addEventListener("click", this);
    this.btn.addEventListener("mouseover", this);

    // adding a shadow DOM, important, don't attachShadow to straight to THIS
    // becaues you then can't attach non shadow elements anymore.
    const shadowRoot = document.createElement("div");
    this.appendChild(shadowRoot);

    // open -> elements are accessible through js from the outside if the host.shadowRoot is accessed explicitly
    // closed -> there is now way to access elements in the shadow
    const shadow = shadowRoot.attachShadow({ mode: "closed" });
    const divShadow = document.createElement("div");
    divShadow.innerText = "Im in the SHADOW";
    shadow.append(divShadow);

    // getting info from attributs aka. passing info into webcomponent through html
    const size = this.getAttribute("size");
    console.log("size:", size);
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

  onMouseover(event: Event) {
    console.log("you hovered bitch!", event);
  }

  connectedCallback() {
    console.log("wc-template CONNECTED");
  }
  disconnectedCallback() {
    console.log("wc-template DISCONNECTED");
  }
}

customElements.define("wc-template", WebcomponentTemplate);
export { WebcomponentTemplate };
