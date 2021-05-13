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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pageLoad */ \"./src/modules/pageLoad.js\");\n/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/navigation */ \"./src/modules/navigation.js\");\n\n\n\n(0,_modules_pageLoad__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_navigation__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction about() {\n    const pageWrapper = document.querySelector(\".page-wrapper\");\n  \n    const aboutContent = document.createElement(\"section\");\n    aboutContent.classList.add(\"menu-item-content\");\n    aboutContent.innerText = \"We have arguably THE BEST pasta!\";\n    pageWrapper.appendChild(aboutContent);\n  \n    const pastaImage = document.createElement(\"img\");\n    pastaImage.classList.add(\"menu-item-image\")\n    pastaImage.src = \"../../assets/pasta.jpg\";\n    aboutContent.appendChild(pastaImage);\n  }\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n  \n\n//# sourceURL=webpack://restaurant_page/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction home() {\n  const pageWrapper = document.querySelector(\".page-wrapper\");\n\n  const homeContent = document.createElement(\"section\");\n  homeContent.classList.add(\"menu-item-content\");\n  homeContent.innerText = \"Best pizza in Your countryside!\";\n  pageWrapper.appendChild(homeContent);\n\n  const pizzaImage = document.createElement(\"img\");\n  pizzaImage.classList.add(\"menu-item-image\")\n  pizzaImage.src = \"../../assets/pizza.jpg\";\n  homeContent.appendChild(pizzaImage);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n\n//# sourceURL=webpack://restaurant_page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/navigation.js":
/*!***********************************!*\
  !*** ./src/modules/navigation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/modules/about.js\");\n\n\n\nfunction displayMenu() {\n  const pageBody = document.querySelector(\".page-wrapper\");\n\n  const menuWrapper = document.createElement(\"nav\");\n  menuWrapper.classList.add(\"menu-wrapper\");\n  pageBody.appendChild(menuWrapper);\n\n  const menuList = document.createElement(\"ul\");\n  menuList.classList.add(\"menu-list\");\n  menuWrapper.appendChild(menuList);\n\n  const home = document.createElement(\"li\");\n  home.classList.add(\"menu-item\");\n  home.innerText = \"Home\";\n  menuList.appendChild(home);\n  home.addEventListener(\"click\", _home__WEBPACK_IMPORTED_MODULE_0__.default);\n\n  const about = document.createElement(\"li\");\n  about.classList.add(\"menu-item\");\n  about.innerText = \"About\";\n  menuList.appendChild(about);\n  about.addEventListener(\"click\", _about__WEBPACK_IMPORTED_MODULE_1__.default)\n\n  const contact = document.createElement(\"li\");\n  contact.classList.add(\"menu-item\");\n  contact.innerText = \"Contact\";\n  menuList.appendChild(contact);\n\n  menuList.style.listStyleType = \"none\";\n  menuList.style.display = \"flex\";\n  menuList.style.justifyContent = \"space-around\";\n  menuList.style.margin = \"auto\";\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);\n\n\n//# sourceURL=webpack://restaurant_page/./src/modules/navigation.js?");

/***/ }),

/***/ "./src/modules/pageLoad.js":
/*!*********************************!*\
  !*** ./src/modules/pageLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadPage() {\n  const pageHeader = document.createElement(\"header\");\n  pageHeader.classList.add(\"page-header\")\n\n  document.body.appendChild(pageHeader);\n\n  const banner = document.createElement(\"img\");\n  banner.src = \"../assets/restaurantBanner.jpg\";\n  banner.classList.add(\"page-header-banner\")\n  pageHeader.appendChild(banner);\n\n  const header = document.createElement(\"h1\");\n  header.classList.add(\"restaurant-header\");\n  header.innerHTML = \"THE BEST Restaurant in Countryside!\";\n  pageHeader.appendChild(header);\n\n  const pageWrapper = document.createElement(\"main\");\n  pageWrapper.classList.add(\"page-wrapper\");\n  document.body.appendChild(pageWrapper);\n\n  const introWrapper = document.createElement(\"article\");\n  pageWrapper.appendChild(introWrapper);\n\n  const about = document.createElement(\"p\");\n  let aboutText = document.createTextNode(\n    \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam culpa vel autem deserunt rem nesciunt, laudantium voluptatum labore possimus placeat enim dicta accusamus recusandae veritatis molestiae eum similique explicabo tempora?\"\n  );\n  about.appendChild(aboutText);\n  introWrapper.appendChild(about);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n\n//# sourceURL=webpack://restaurant_page/./src/modules/pageLoad.js?");

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