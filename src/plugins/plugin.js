import grapesjs from "grapesjs";
import { loadComponents } from "./components";
import { loadBlocks } from "./blocks";
import {
  checkIconRef,
  clickableButtonRef,
  customisableColumnsRef,
} from "../plugins/const";

export default grapesjs.plugins.add(
  "gjs-component-myPlugins",
  (editor, opts = {}) => {
    let c = opts;

    let defaults = {
      blocks: [clickableButtonRef, customisableColumnsRef, checkIconRef],

      // Default style
      defaultStyle: true,

      // clickableButton
      // clickableButton class prefix
      buttonClsPfx: "clickableButton",

      // clickableButton label
      labelClickableButton: "Send Button",

      // clickableButton category label
      labelClickableButtonCategory: "My Component",

      //   customisableColumns
      // customisableColumns class prefix
      customisableColumnsPfx: "customisableColumns",

      // customisableColumns label
      labelCustomisableColumns: "Make column",

      // customisableColumns category label
      labelCustomisableColumnsCategory: "My Component",

      // checkIcon
      // checkIcon class prefix
      checkIconPfx: "checkIcon",

      // customisableColumns label
      labelcheckIcon: "Check Icon",

      // customisableColumns category label
      labelcheckIconCategory: "Icons",
    };

    // Load defaults
    for (let name in defaults) {
      if (!(name in c)) c[name] = defaults[name];
    }

    // Add components
    loadComponents(editor, c);

    // Add components
    loadBlocks(editor, c);
  }
);
