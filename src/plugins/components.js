export const loadComponents = (editor, opt = {}) => {
  const c = opt;
  const domc = editor.DomComponents;
  const defaultType = domc.getType("default");
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const pfx = c.buttonClsPfx;
  const BUTTON_TYPE = "clickableButton";

  domc.addType(BUTTON_TYPE, {
    model: defaultModel.extend(
      {
        defaults: {
          ...defaultModel.prototype.defaults,
          droppable: false,
          traits: [],
          script: function () {
            alert("welcome to customer magement");
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

        // Add a basic countdown template if it's not yet initialized
        if (!comps.length) {
          comps.reset();
          comps.add(`
            <span data-js="countdown" class="${pfx}-cont">
              <div class="${pfx}-block">
                <div data-js="countdown-day" class="${pfx}-button">
                  <button class="${pfx}-button-element" handleClick>Go To</button>
                </div>
              </div>
            </span>
            <span data-js="countdown-endtext" class="${pfx}-endtext"></span>
          `);
        }
      },
      events: {
        click: "handleClick",
      },
      handleClick: function () {
        alert("Wecome to customer management");
        console.log("Weicome to customer management");
      },
    }),
  });
};
