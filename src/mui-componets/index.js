import ReactDOM from "react-dom";

import { ServerStyleSheets } from "@material-ui/styles";

import { baseReactComponent } from "../base-react-componet";

import { ButtonElement } from "./Button";
import { SliderElement } from "./Slider";
import { Snackbar } from "./Snackbar";

const sheets = new ServerStyleSheets();

export const MuiComponents = (editor) => {
  const {
    baseReactComponentModel,
    baseReactComponentView,
  } = baseReactComponent(editor);

  const model = {
    ...baseReactComponentModel,
  };

  const view = {
    ...baseReactComponentView,
    mount: function (component) {
      const s = sheets.collect(component);
      ReactDOM.render(s, this.getRenderTarget());
      const css = sheets.toString();

      const style = document.createElement("style");
      style.innerHTML = css;
      this.em.get("Canvas").getDocument().head.appendChild(style);
      return this;
    },
  };

  const params = { editor, model, view };
  ButtonElement(params);
  SliderElement(params);
  Snackbar(params);
};
