import {
  clickableButtonRef,
  customisableColumnsRef,
  checkIconRef,
} from "./const";

export const loadBlocks = (editor, opt = {}) => {
  const c = opt;
  const bm = editor.BlockManager;
  const buttonPfx = c.buttonClsPfx;
  const columnPfx = c.customisableColumnsPfx;
  const checkIconPfx = c.checkIconPfx;

  const style = c.defaultStyle
    ? `<style>

    // clicableButton Style

    .${buttonPfx} {
      text-align: center;
      font-family: Helvetica, serif;
    }

    .${buttonPfx}-block {
      display: inline-block;
      margin: 0 10px;
      padding: 10px;
    }

    .${buttonPfx}-button {
      font-size: 5rem;
    }

    .${buttonPfx}-button-element {
      height: 50px;
      width: 150px;
      background: pink;
      border-radius: 10px;
      font-size: 30px;
    }

    .${buttonPfx}-endtext {
      font-size: 5rem;
    }

    .${buttonPfx}-cont,
    .${buttonPfx}-block {
      display: inline-block;
    }

    //customisableColumns style

    .${columnPfx} {
      text-align: center;
      font-family: Helvetica, serif;
    }

    .${columnPfx}-cont {
      height: auto;
    }

    .${columnPfx}-column-block {
      display: inline-block;
      margin: 0 10px;
      padding: 10px;
    }

    .${columnPfx}-column-element {
      display: flex;
      margin: 0 10px;
      padding: 10px;
      justify-content: space-around;
    }

    .${columnPfx}-column {
      background: pink;
      height: 500px;
      width: 375px;
      margin: 0 10px;
      padding: 10px;
      display: table;
    }

    .${columnPfx}-column-button-cont {
       display: table-cell;
       text-align: center;
       vertical-align: bottom;
    }

    .${columnPfx}-cloumn-button {
      font-size: 25px;
      width: 130px;
      background: #c9ffc6;
      border-radius: 20px;
      margin-bottom: 10px;
    }

    .${columnPfx}-cont,
    .${columnPfx}-column-block {
      display: inline-block;
    }

  </style>`
    : "";

  // clickableButton

  if (c.blocks.indexOf(clickableButtonRef) >= 0) {
    bm.add(clickableButtonRef, {
      label: c.labelClickableButton,
      category: c.labelClickableButtonCategory,
      attributes: { class: "fa fa-share" },
      content: `
        <div class="${buttonPfx}" data-gjs-type="clickableButton"></div>
        ${style}
      `,
    });
  }

  // customisableColumns

  if (c.blocks.indexOf(customisableColumnsRef) >= 0) {
    bm.add(customisableColumnsRef, {
      label: c.labelCustomisableColumns,
      category: c.labelCustomisableColumnsCategory,
      attributes: { class: "fa fa-columns" },
      content: `
        <div class="${columnPfx}" data-gjs-type="customisableColumns"></div>
        ${style}
      `,
    });
  }

  // checkIcon

  if (c.blocks.indexOf(checkIconRef) >= 0) {
    bm.add(checkIconRef, {
      label: c.labelCheckIcon,
      category: c.labelCheckIconCategory,
      attributes: { class: "fa fa-check" },
      content: `
        <div class="${checkIconPfx}" data-gjs-type="checkIcon"></div>
        ${style}
      `,
    });
  }
};
