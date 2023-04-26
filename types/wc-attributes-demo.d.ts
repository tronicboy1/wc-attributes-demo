import { LitElement } from "lit";
export declare const tagName = "wc-attributes-demo";
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class WcAttributesDemo extends LitElement {
    message: string;
    coCode: string;
    isEditMode: boolean;
    setAttributes?: (props: Record<string, any>) => void;
    private coLinkMap;
    private handleSubmit;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: WcAttributesDemo;
    }
}
