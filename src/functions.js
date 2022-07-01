/**
 *  ES6 Modules - Export
 */
export const appendToBody = (element) => {
  document.body.appendChild(element);
  document.body.appendChild(document.createElement("hr"));
};
