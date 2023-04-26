import { css as d, LitElement as h, html as l } from "lit";
import { property as p, customElement as b } from "lit/decorators.js";
var g = Object.defineProperty, w = Object.getOwnPropertyDescriptor, m = (t, r, s, o) => {
  for (var e = o > 1 ? void 0 : o ? w(r, s) : r, n = t.length - 1, a; n >= 0; n--)
    (a = t[n]) && (e = (o ? a(r, s, e) : a(e)) || e);
  return o && e && g(r, s, e), e;
};
const c = "wc-attributes-demo";
let i = class extends h {
  constructor() {
    super(...arguments), this.message = "", this.coCode = "", this.isEditMode = !1, this.coLinkMap = /* @__PURE__ */ new Map([
      ["google", new URL("https://www.google.com")],
      ["microsoft", new URL("https://www.microsoft.com/")]
    ]);
  }
  handleSubmit(t) {
    if (t.preventDefault(), !this.setAttribute)
      throw ReferenceError("NoSetAttributes");
    const r = t.target, s = new FormData(r), o = s.get("message"), e = s.get("company");
    this.setAttributes && this.setAttributes({ message: o, company: e });
  }
  render() {
    return l`<h1>Message</h1>
      <p>${this.message}</p>
      <p><a href=${this.coLinkMap.get(this.coCode)}>Company Link</a></p>
      ${this.isEditMode ? l`<form @submit=${this.handleSubmit}>
            <label for="company">Company</label>
            <select id="company" name="company">
              ${Array.from(this.coLinkMap.entries()).map(
      ([t]) => l`<option value=${t}>${t}</option>`
    )}
            </select>
            <label for="message">Message</label>
            <textarea name="message" id="message">${this.message}</textarea>
            <button type="submit">Change</button>
          </form>` : ""}`;
  }
};
i.styles = d`
    :host {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
      width: 90%;
      display: block;
    }

    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    textarea {
      margin-bottom: 1rem;
      min-height: 100px;
      max-width: 100%;
      min-width: 100%;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;
m([
  p({ type: String })
], i.prototype, "message", 2);
m([
  p({ type: String, attribute: "company" })
], i.prototype, "coCode", 2);
m([
  p({
    type: Boolean,
    attribute: "edit",
    converter(t) {
      return t === "true" || t === "1";
    }
  })
], i.prototype, "isEditMode", 2);
i = m([
  b(c)
], i);
function y(t, r, s) {
  const { createElement: o } = r;
  t.registerBlockType("wc/attributes-demo", {
    edit: ({ attributes: e, setAttributes: n }) => {
      const a = s.useBlockProps(), f = o(c, { ...a, ...e, edit: !0 }, ""), u = document.querySelector(c);
      return u && (u.setAttributes = n), f;
    },
    save: ({ attributes: e }) => o(c, e, ""),
    title: "Wc Attributes Demo",
    category: "widgets",
    icon: "menu"
  });
}
y(window.wp.blocks, window.wp.element, window.wp.blockEditor);
