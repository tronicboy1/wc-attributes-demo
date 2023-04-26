import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

export const tagName = "wc-attributes-demo";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement(tagName)
export class WcAttributesDemo extends LitElement {
  @property({ type: String }) message = "";
  @property({ type: String, attribute: "company" }) coCode = "";
  @property({
    type: Boolean,
    attribute: "edit",
    converter(value) {
      return value === "true" || value === "1";
    },
  })
  isEditMode = false;
  setAttributes?: (props: Record<string, any>) => void;

  private coLinkMap = new Map<string, URL>([
    ["google", new URL("https://www.google.com")],
    ["catena", new URL("https://www.catenamedia.com/")],
  ]);

  private handleSubmit(event: Event) {
    event.preventDefault();
    if (!this.setAttribute) throw ReferenceError("NoSetAttributes");
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const message = formData.get("message");
    const company = formData.get("company");
    if (this.setAttributes) {
      this.setAttributes({ message, company });
    }
  }

  render() {
    return html`<h1>Message</h1>
      <p>${this.message}</p>
      <p><a href=${this.coLinkMap.get(this.coCode)}>Company Link</a></p>
      ${this.isEditMode
        ? html`<form @submit=${this.handleSubmit}>
            <label for="company">Company</label>
            <select id="company" name="company">
              ${Array.from(this.coLinkMap.entries()).map(
                ([coCode]) => html`<option value=${coCode}>${coCode}</option>`
              )}
            </select>
            <label for="message">Message</label>
            <textarea name="message" id="message">${this.message}</textarea>
            <button type="submit">Change</button>
          </form>`
        : ""}`;
  }

  static styles = css`
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
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: WcAttributesDemo;
  }
}
