import grapesjs from "grapesjs/dist/grapes.js";
import basics from "grapesjs-blocks-basic";
import { baseReactComponent } from "./base-react-componet";
import Listing from "./Listing";
import "./styles.css";
import { MuiComponents } from "./mui-componets";

const editor = grapesjs.init({
  container: "#gjs",
  fromElement: 1,
  height: "100%",
  storageManager: { type: 0 },
  plugins: [basics],
});

const { baseReactComponentModel, baseReactComponentView } = baseReactComponent(
  editor
);

MuiComponents(editor);

editor.BlockManager.add("listing", {
  label: "<div class='gjs-fonts gjs-f-b1'>Listing</div>",
  content: "<Listing>Foo</Listing>",
});

editor.DomComponents.addType("Listing", {
  model: {
    ...baseReactComponentModel,
    defaults: {
      component: Listing,
      stylable: true,
      resizable: true,
      editable: true,
      draggable: true,
      droppable: true,
      attributes: {
        mlsid: "Default MLSID",
        editable: true,
      },
      traits: [
        {
          type: "number",
          label: "MLS ID",
          name: "mlsid",
        },
      ],
    },
  },
  view: baseReactComponentView,
  isComponent: (el) => el.tagName === "LISTING",
});

editor.setComponents(`
  <html>
  <head>
  </head>
  <body>
    <div>
      <span>
      <section id="id3ja" class="blk-sect">
      <div class="container-width">
        <div class="blk-title">Blocks
        </div>
        <div class="blk-desc">Each element in HTML page could be seen as a block. On the left panel you could find different kind of blocks that you can create, move and style
        </div>
        <div id="i1kg3" class="price-cards">
          <div class="price-card-cont">
            <div class="price-card">
              <div id="i2lkj" class="pc-title">Starter
              </div>
              <div id="ik25k" class="pc-desc">Some random list
              </div>
              <div id="ic0zg" class="pc-feature odd-feat">ONE
              </div>
              <div class="pc-feature">+ Starter feature 2
              </div>
              <div class="pc-feature odd-feat">+ Starter feature 3
              </div>
              <div class="pc-feature">+ Starter feature 4
              </div>
              <div class="pc-amount odd-feat">$ 9,90/mo
              </div>
            </div>
          </div>
          <div class="price-card-cont">
            <div class="price-card pc-regular">
              <div class="pc-title">Regular
              </div>
              <div id="icgfm3" class="pc-desc">Some random list
              </div>
              <div class="pc-feature odd-feat">+ Regular feature 1
              </div>
              <div class="pc-feature">+ Regular feature 2
              </div>
              <div class="pc-feature odd-feat">+ Regular feature 3
              </div>
              <div class="pc-feature">+ Regular feature 4
              </div>
              <div class="pc-amount odd-feat">$ 19,90/mo
              </div>
            </div>
          </div>
          <div class="price-card-cont">
            <div class="price-card pc-enterprise">
              <div class="pc-title">Enterprise
              </div>
              <div id="ifr60q" class="pc-desc">Some random list
              </div>
              <div class="pc-feature odd-feat">+ Enterprise feature 1
              </div>
              <div class="pc-feature">+ Enterprise feature 2
              </div>
              <div class="pc-feature odd-feat">+ Enterprise feature 3
              </div>
              <div class="pc-feature">+ Enterprise feature 4
              </div>
              <div class="pc-amount odd-feat">$ 29,90/mo
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      </span>
      <span>
        Foo
      </span>
      <Listing></Listing>
      <Snackbar>
        <MuiButton variant='contained' color='secondary'>
          Click Me
        </MuiButton>
      </Snackbar>
      <Slider />
    </div>
  </body>
`);
