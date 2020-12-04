import grapesjs from "grapesjs/dist/grapes.js";
import basics from "grapesjs-blocks-basic";
import newsletters from "grapesjs-preset-newsletter";
import webpages from "grapesjs-preset-webpage";
import myPlugins from "./plugins/plugin";
import "./styles.css";

const editor = grapesjs.init({
  container: "#gjs",
  fromElement: true,
  height: "100%",
  showOffsets: 1,
  noticeOnUnload: 0,
  storageManager: { autoload: 0 },
  plugins: [webpages, myPlugins],
  commands: {
    defaults: [],
  },
});

editor.setComponents(`
  <html>
  <head>
  </head>
    <body>
      <section>
        <div>
          <h1>Welcome To Customer Management</h1>
          <p>Design Your Own Web Page</p>
        </div>
      </section>
    </body>
`);
