import { clickableButtonRef } from "./const";

export const loadBlocks = (editor, opt = {}) => {
  const c = opt;
  const bm = editor.BlockManager;
  const pfx = c.buttonClsPfx;
  const style = c.defaultStyle
    ? `<style>
    .${pfx} {
      text-align: center;
      font-family: Helvetica, serif;
    }

    .${pfx}-block {
      display: inline-block;
      margin: 0 10px;
      padding: 10px;
    }

    .${pfx}-button {
      font-size: 5rem;
    }

    .${pfx}-button-element {
      height: 50px;
      width: 150px;
      background: pink;
      border-radius: 10px;
      font-size: 30px;
    }

    .${pfx}-endtext {
      font-size: 5rem;
    }

    .${pfx}-cont,
    .${pfx}-block {
      display: inline-block;
    }
  </style>`
    : "";

  if (c.blocks.indexOf(clickableButtonRef) >= 0) {
    bm.add(clickableButtonRef, {
      label: c.labelClickableButton,
      category: c.labelClickableButtonCategory,
      attributes: { class: "fa fa-share" },
      content: `
        <div class="${pfx}" data-gjs-type="clickableButton"></div>
        ${style}
      `,
    });
  }
};
