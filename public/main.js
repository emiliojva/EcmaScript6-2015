/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ECMAScript-2009/ClassWithPrototypeES5.js":
/*!******************************************************!*\
  !*** ./src/ECMAScript-2009/ClassWithPrototypeES5.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* binding */ Button),\n/* harmony export */   \"ClassWithPrototypeES5\": () => (/* binding */ ClassWithPrototypeES5)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions.js */ \"./src/functions.js\");\n\r\n\r\nfunction Button(text, background, color) {\r\n  this.text = text;\r\n  this.background = background;\r\n  this.color = color;\r\n  return this.element();\r\n}\r\n\r\nButton.prototype.element = function () {\r\n  const elementHtml = document.createElement(\"button\");\r\n  elementHtml.innerText = this.text;\r\n  elementHtml.style.backgroundColor = this.background;\r\n  elementHtml.style.color = this.color;\r\n  return elementHtml;\r\n};\r\n\r\nconst ClassWithPrototypeES5 = () => {\r\n  /**\r\n   * Classes using prototype scope\r\n   * up to Javascript ES5 - 2009\r\n   */\r\n  const button = new Button(\"Novo botão\", \"gray\", \"white\");\r\n  (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.appendToBody)(button);\r\n};\r\n\n\n//# sourceURL=webpack://prototypees5-2009-x-classeses6-2015/./src/ECMAScript-2009/ClassWithPrototypeES5.js?");

/***/ }),

/***/ "./src/ES6-2015/classes/01-Classes.js":
/*!********************************************!*\
  !*** ./src/ES6-2015/classes/01-Classes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ClassButton\": () => (/* binding */ ClassButton)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions.js */ \"./src/functions.js\");\n\r\n\r\nclass Button {\r\n  constructor(text, background, color) {\r\n    this.text = text;\r\n    this.background = background;\r\n    this.color = color;\r\n    return this.element();\r\n  }\r\n\r\n  element() {\r\n    const elementHtml = document.createElement(\"button\");\r\n    elementHtml.innerText = this.text;\r\n    elementHtml.style.backgroundColor = this.background;\r\n    elementHtml.style.color = this.color;\r\n    this.elementDOM = elementHtml;\r\n    return elementHtml;\r\n  }\r\n}\r\n\r\nconst ClassButton = () => {\r\n  const obj_button = new Button(\"Botão com Class ES6\", \"Blue\", \"white\");\r\n  console.log(obj_button);\r\n  (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.appendToBody)(obj_button);\r\n};\r\n\n\n//# sourceURL=webpack://prototypees5-2009-x-classeses6-2015/./src/ES6-2015/classes/01-Classes.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendToBody\": () => (/* binding */ appendToBody)\n/* harmony export */ });\n/**\r\n *  ES6 Modules - Export\r\n */\r\nconst appendToBody = (element) => {\r\n  document.body.appendChild(element);\r\n  document.body.appendChild(document.createElement(\"hr\"));\r\n};\r\n\n\n//# sourceURL=webpack://prototypees5-2009-x-classeses6-2015/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ECMAScript_2009_ClassWithPrototypeES5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ECMAScript-2009/ClassWithPrototypeES5.js */ \"./src/ECMAScript-2009/ClassWithPrototypeES5.js\");\n/* harmony import */ var _ES6_2015_classes_01_Classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ES6-2015/classes/01-Classes.js */ \"./src/ES6-2015/classes/01-Classes.js\");\n/* Nova feature do ES6 - Modules import */\n// import \"./styles.css\";\n\n\n\n(0,_ES6_2015_classes_01_Classes_js__WEBPACK_IMPORTED_MODULE_1__.ClassButton)();\n\n/**\n *  Javascript Classes with prototypes ES5\n *  @link https://www.w3schools.com/js/js_object_prototypes.asp\n *  @link https://www.w3schools.com/js/js_es5.asp\n */\n(0,_ECMAScript_2009_ClassWithPrototypeES5_js__WEBPACK_IMPORTED_MODULE_0__.ClassWithPrototypeES5)();\n\nconsole.log('aeeeeeee')\n\n//# sourceURL=webpack://prototypees5-2009-x-classeses6-2015/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;