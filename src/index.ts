import { tagName } from "./wc-attributes-demo";

function registerBlock(blocks: WpBlocks, element: WpElement, blockEditor: BlockEditor) {
  const { createElement } = element;
  blocks.registerBlockType("wc/attributes-demo", {
    edit: ({ attributes, setAttributes }) => {
      const blockProps = blockEditor.useBlockProps();
      const reactEl = createElement(tagName, { ...blockProps, ...attributes, edit: true }, "");
      const el = document.querySelector(tagName);
      if (el) {
        el.setAttributes = setAttributes;
      }
      return reactEl;
    },
    save: ({ attributes }) => createElement(tagName, attributes, ""),
    title: "Wc Attributes Demo",
    category: "widgets",
    icon: "menu",
  });
}

registerBlock(window.wp.blocks, window.wp.element, window.wp.blockEditor);
