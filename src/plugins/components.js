import { CheckIcon } from "@material-ui/icons";
export const loadComponents = (editor, opt = {}) => {
  const c = opt;
  const domc = editor.DomComponents;
  const defaultType = domc.getType("default");
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const buttonPfx = c.buttonClsPfx;
  const columnPfx = c.customisableColumnsPfx;
  const checkIconPfx = c.checkIconPfx;
  const BUTTON_TYPE = "clickableButton";
  const COLUMNS_TYPE = "customisableColumns";
  const CHECKICON_TYPE = "checkIcon";

  // clickableButton component

  domc.addType(BUTTON_TYPE, {
    model: defaultModel.extend(
      {
        defaults: {
          ...defaultModel.prototype.defaults,
          droppable: false,
          traits: [],
          script: function () {
            alert("Welcome to Customer Magement");
          },
        },
      },
      {
        isComponent(el) {
          if (
            el.getAttribute &&
            el.getAttribute("data-gjs-type") === BUTTON_TYPE
          ) {
            return {
              type: BUTTON_TYPE,
            };
          }
        },
      }
    ),
    view: defaultView.extend({
      init() {
        const comps = this.model.get("components");

        // Add a basic button template if it's not yet initialized
        if (!comps.length) {
          comps.reset();
          comps.add(`
            <span data-js="countdown" class="${buttonPfx}-cont">
              <div class="${buttonPfx}-block">
                <div data-js="countdown-day" class="${buttonPfx}-button">
                  <button class="${buttonPfx}-button-element" handleClick>Go To</button>
                </div>
              </div>
            </span>
            <span data-js="countdown-endtext" class="${buttonPfx}-endtext"></span>
          `);
        }
      },
      events: {
        click: "handleClick",
      },
      handleClick: function () {
        alert("Wecome to customer management");
        console.log("Weicome to customer management");
        // window.location.replace("https://www.sourcecodelabs.co.uk/");
      },
    }),
  });

  // customisableColumns component

  domc.addType(COLUMNS_TYPE, {
    model: defaultModel.extend(
      {
        defaults: {
          ...defaultModel.prototype.defaults,
          droppable: true,
          // script: function () {
          //   alert("design your columns");
          // },
        },
      },
      {
        isComponent(el) {
          if (
            el.getAttribute &&
            el.getAttribute("data-gjs-type") === COLUMNS_TYPE
          ) {
            return {
              type: COLUMNS_TYPE,
            };
          }
        },
      }
    ),
    view: defaultView.extend({
      init() {
        const comps = this.model.get("components");

        // Add a basic column template if it's not yet initialized
        if (!comps.length) {
          comps.reset();
          comps.add(`
            <span class="${columnPfx}-cont">
              <div class="${columnPfx}-cloumn-block">
                <div class="${columnPfx}-column-element">
                  <div class="${columnPfx}-column">
                    <div class="${columnPfx}-column-button-cont">
                      <button class="${columnPfx}-cloumn-button" onClick={alert("click-1")}>Click-1</button>
                    </div>
                  </div>
                  <div class="${columnPfx}-column">
                    <div class="${columnPfx}-column-button-cont">
                     <button class="${columnPfx}-cloumn-button"  onClick={window.location.replace("https://www.sourcecodelabs.co.uk/")}>Click-2</button>
                    </div>
                  </div>
                  <div class="${columnPfx}-column">
                    <div class="${columnPfx}-column-button-cont">
                     <button class="${columnPfx}-cloumn-button" onClick={alert("click-3")}>Click-3</button>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          `);
        }
      },
      // events: {
      //   click: function () {
      //     console.log("hii");
      //   },
      // },
    }),
  });

  // checkIcon component

  domc.addType(CHECKICON_TYPE, {
    model: defaultModel.extend(
      {
        defaults: {
          ...defaultModel.prototype.defaults,
          droppable: true,
          script: function () {
            alert("check icon");
          },
        },
      },
      {
        isComponent(el) {
          if (
            el.getAttribute &&
            el.getAttribute("data-gjs-type") === CHECKICON_TYPE
          ) {
            return {
              type: CHECKICON_TYPE,
            };
          }
        },
      }
    ),
    view: defaultView.extend({
      init() {
        const comps = this.model.get("components");

        // Add a basic column template if it's not yet initialized
        if (!comps.length) {
          comps.reset();
          comps.add(`
            <span class="${checkIconPfx}-cont">
              <CheckIcon/>
            </span>
          `);
        }
      },
    }),
  });
};
