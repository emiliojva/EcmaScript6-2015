import { appendToBody } from "../functions.js";

export function Button(text, background, color) {
  this.text = text;
  this.background = background;
  this.color = color;
  return this.element();
}

Button.prototype.element = function () {
  const elementHtml = document.createElement("button");
  elementHtml.innerText = this.text;
  elementHtml.style.backgroundColor = this.background;
  elementHtml.style.color = this.color;
  return elementHtml;
};

export const ClassWithPrototypeES5 = () => {
  /**
   * Classes using prototype scope
   * up to Javascript ES5 - 2009
   */
  const button = new Button("Novo botão", "gray", "white");
  appendToBody(button);
};
