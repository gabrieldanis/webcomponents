class WebcomponentTemplateMixedDom extends HTMLElement {
  constructor() {
    super();

    const lightRoot = document.createElement("div");
    lightRoot.innerText = "i am in the light DOM";
    this.appendChild(lightRoot);

    // adding a shadow DOM, important, don't attachShadow to straight to THIS or any element which content you want to display in the light dom
    // becaues you then can't attach non shadow elements anymore.
    const shadowRootElement = document.createElement("div");
    this.appendChild(shadowRootElement);

    // open -> elements are accessible through js from the outside if the host.shadowRoot is accessed explicitly
    // closed -> there is now way to access elements in the shadow
    const shadow = shadowRootElement.attachShadow({ mode: "open" });
    const div = document.createElement("div");
    div.innerText = "Im in the SHADOW";
    shadow.append(div);
  }

  connectedCallback() {
    console.log("wct-mixed-dom CONNECTED");
  }
  disconnectedCallback() {
    console.log("wct-mixed-dom DISCONNECTED");
  }
}

customElements.define("wct-mixed-dom", WebcomponentTemplateMixedDom);
export { WebcomponentTemplateMixedDom };
