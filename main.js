customElements.define(
    "wc-template",
    class extends HTMLElement {
        constructor() {
            super();
            this.btn = document.createElement("button");
            this.btn.textContent = "button text";
            this.append(this.btn);
            this.btn.addEventListener("click", this);
        }

        handleEvent(event) {
            this[`on${event.type}`](event);
        }

        onclick(event) {
            console.log("you clicked");
        }
    }
);

// customElements.define("my-component", MyComponent);
// export { MyComponent };

// import "./MyComponent";
