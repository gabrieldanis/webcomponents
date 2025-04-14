customElements.define(
    "wc-template",
    class extends HTMLElement {
        constructor() {
            super();
            this.btn = document.createElement("button");
            this.btn.textContent = "hi there";
            this.append(this.btn);
            this.btn.addEventListener("click", this);
            this.btn.addEventListener("mouseover", this);
        }

        handleEvent(event) {
            this[`on${event.type}`](event);
        }

        onclick(event) {
            console.log("you clicked bitch!");
        }

        onmouseover(event) {
            console.log("you hovered bitch!");
        }

        connectedCallback() {
            console.log("wc-template CONNECTED");
        }
        disconnectedCallback() {
            console.log("wc-template DISCONNECTED");
        }
    }
);

// customElements.define("my-component", MyComponent);
// export { MyComponent };

// import "./MyComponent";
