import { appendToBody } from "../../functions";

class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
    return this.element();
  }

  element() {
    const elementHtml = document.createElement("button");
    elementHtml.innerText = this.text;
    elementHtml.style.backgroundColor = this.background;
    elementHtml.style.color = this.color;
    this.elementDOM = elementHtml;
    return elementHtml;
  }
}

export const ClassButton = () => {
  const obj_button = new Button("Botão com Class ES6", "Blue", "white");
  console.log(obj_button);
  appendToBody(obj_button);
};
