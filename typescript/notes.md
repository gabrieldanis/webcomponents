# Webcomponents

## Constructor vs. ConnectedCallback

| Task                           | Use in `constructor` | Use in `connectedCallback` |
| ------------------------------ | -------------------- | -------------------------- |
| Initialize state               | ✅ Yes               | ✅ Possible, but late      |
| Attach shadow DOM              | ✅ Yes               | 🚫 Not ideal               |
| Add event listeners            | 🚫 Not safe          | ✅ Yes                     |
| Read attributes from DOM       | 🚫 No                | ✅ Yes                     |
| Access child elements or slots | 🚫 No                | ✅ Yes                     |
| Make network requests          | 🚫 No                | ✅ Yes                     |
