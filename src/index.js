import grapesjs from "grapesjs/dist/grapes.js";
import basics from "grapesjs-blocks-basic";
import clickableButton from "./plugins/plugin";
import functionalButton from "./plugins/newBlock";
import "./styles.css";

const editor = grapesjs.init({
  container: "#gjs",
  fromElement: 1,
  height: "100%",
  storageManager: { type: 0 },
  plugins: [functionalButton, clickableButton],
  commands: {
    defaults: [],
  },
});

editor.setComponents(`
  <html>
  <head>
  </head>
  <body>
    <h1>Welcome</h1>
  </body>
`);
