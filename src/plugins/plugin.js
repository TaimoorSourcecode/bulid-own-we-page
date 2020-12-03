import grapesjs from "grapesjs";
import { loadComponents } from "./components";
import { loadBlocks } from "./blocks";
import { clickableButtonRef } from "../plugins/const";

export default grapesjs.plugins.add(
  "gjs-component-clickableButton",
  (editor, opts = {}) => {
    let c = opts;

    let defaults = {
      blocks: [clickableButtonRef],

      // Default style
      defaultStyle: true,

      // Countdown class prefix
      buttonClsPfx: "clickableButton",

      // Countdown label
      labelClickableButton: "Send Button",

      // Countdown category label
      labelClickableButtonCategory: "Extra",
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
