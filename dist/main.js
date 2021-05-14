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

/***/ "./src/images/chef.jpg":
/*!*****************************!*\
  !*** ./src/images/chef.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"00c34f0b0a696721b28e16dac23b670d.jpg\");\n\n//# sourceURL=webpack://restaurant_page/./src/images/chef.jpg?");

/***/ }),

/***/ "./src/images/pasta.jpg":
/*!******************************!*\
  !*** ./src/images/pasta.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"82f601cf27bbd537ce1009347ec739e3.jpg\");\n\n//# sourceURL=webpack://restaurant_page/./src/images/pasta.jpg?");

/***/ }),

/***/ "./src/images/pizza.jpg":
/*!******************************!*\
  !*** ./src/images/pizza.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"672793173c15c0df6a806b7df0b9e95f.jpg\");\n\n//# sourceURL=webpack://restaurant_page/./src/images/pizza.jpg?");

/***/ }),

/***/ "./src/images/restaurantBanner.jpg":
/*!*****************************************!*\
  !*** ./src/images/restaurantBanner.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d25820f6278a90e880ee144cfb269d3e.jpg\");\n\n//# sourceURL=webpack://restaurant_page/./src/images/restaurantBanner.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pageLoad */ \"./src/modules/pageLoad.js\");\n/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/navigation */ \"./src/modules/navigation.js\");\n\n\n\n(0,_modules_pageLoad__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_navigation__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_pasta_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/pasta.jpg */ \"./src/images/pasta.jpg\");\n\n\nfunction about() {\n  const pageWrapper = document.querySelector(\".page-wrapper\");\n  const contentWrapper = document.querySelector(\".menu-item-content\");\n\n  const pastaImage = document.createElement(\"img\");\n  pastaImage.classList.add(\"menu-item-image\");\n  pastaImage.src = _images_pasta_jpg__WEBPACK_IMPORTED_MODULE_0__.default;\n\n  function clear(element) {\n    element.innerHTML = \"\";\n  }\n\n  if (contentWrapper.innerText) {\n    clear(contentWrapper);\n  }\n  contentWrapper.style.display = \"flex\";\n  contentWrapper.innerText = \"We have arguably THE BEST pasta!\";\n  contentWrapper.appendChild(pastaImage);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n\n//# sourceURL=webpack://restaurant_page/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_chef_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/chef.jpg */ \"./src/images/chef.jpg\");\n\n\nfunction contact() {\n  const pageWrapper = document.querySelector(\".page-wrapper\");\n  const contentWrapper = document.querySelector(\".menu-item-content\");\n\n  const chefImage = document.createElement(\"img\");\n  chefImage.classList.add(\"menu-item-image\");\n  chefImage.src = _images_chef_jpg__WEBPACK_IMPORTED_MODULE_0__.default;\n\n  function clear(element) {\n    element.innerHTML = \"\";\n  }\n\n  if (contentWrapper.innerText) {\n    clear(contentWrapper);\n  }\n  contentWrapper.style.display = \"flex\";\n  contentWrapper.innerText = \"Just come to visit us!\";\n  contentWrapper.appendChild(chefImage);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n\n//# sourceURL=webpack://restaurant_page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/pizza.jpg */ \"./src/images/pizza.jpg\");\n\n\nfunction home() {\n  const pageWrapper = document.querySelector(\".page-wrapper\");\n  const contentWrapper = document.querySelector(\".menu-item-content\");\n\n  const pizzaImage = document.createElement(\"img\");\n  pizzaImage.classList.add(\"menu-item-image\");\n  pizzaImage.src = _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__.default;\n\n  function clear(element) {\n    element.innerHTML = \"\";\n  }\n\n  if (contentWrapper.innerText) {\n    clear(contentWrapper);\n  }\n  contentWrapper.style.display = \"flex\";\n  contentWrapper.innerText = \"Best pizza in Your countryside!\";\n  contentWrapper.appendChild(pizzaImage);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n\n//# sourceURL=webpack://restaurant_page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/navigation.js":
/*!***********************************!*\
  !*** ./src/modules/navigation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/modules/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/modules/contact.js\");\n\n\n\n\nfunction displayMenu() {\n  const pageBody = document.querySelector(\".page-wrapper\");\n\n  const menuWrapper = document.createElement(\"nav\");\n  menuWrapper.classList.add(\"menu-wrapper\");\n  pageBody.appendChild(menuWrapper);\n\n  const menuList = document.createElement(\"ul\");\n  menuList.classList.add(\"menu-list\");\n  menuWrapper.appendChild(menuList);\n\n  const home = document.createElement(\"a\");\n  home.classList.add(\"menu-item\");\n  home.innerText = \"Home\";\n  menuList.appendChild(home);\n  home.addEventListener(\"click\", _home__WEBPACK_IMPORTED_MODULE_0__.default);\n\n  const about = document.createElement(\"a\");\n  about.classList.add(\"menu-item\");\n  about.innerText = \"About\";\n  menuList.appendChild(about);\n  about.addEventListener(\"click\", _about__WEBPACK_IMPORTED_MODULE_1__.default);\n\n  const contact = document.createElement(\"a\");\n  contact.classList.add(\"menu-item\");\n  contact.innerText = \"Contact\";\n  menuList.appendChild(contact);\n  contact.addEventListener(\"click\", _contact__WEBPACK_IMPORTED_MODULE_2__.default);\n\n  const contentWrapper = document.createElement(\"section\")\n  contentWrapper.classList.add(\"menu-item-content\")\n  pageBody.appendChild(contentWrapper)\n\n  menuList.style.listStyleType = \"none\";\n  menuList.style.display = \"flex\";\n  menuList.style.margin = \"auto\";\n  menuList.style.padding = 0;\n  contentWrapper.style.display = \"none\" \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);\n\n\n//# sourceURL=webpack://restaurant_page/./src/modules/navigation.js?");

/***/ }),

/***/ "./src/modules/pageLoad.js":
/*!*********************************!*\
  !*** ./src/modules/pageLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_restaurantBanner_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/restaurantBanner.jpg */ \"./src/images/restaurantBanner.jpg\");\n\n\nfunction loadPage() {\n  const pageHeader = document.createElement(\"header\");\n  pageHeader.classList.add(\"page-header\")\n\n  document.body.appendChild(pageHeader);\n\n  const banner = document.createElement(\"img\");\n  banner.src = _images_restaurantBanner_jpg__WEBPACK_IMPORTED_MODULE_0__.default;\n  banner.classList.add(\"page-header-banner\")\n  pageHeader.appendChild(banner);\n\n  const header = document.createElement(\"h1\");\n  header.classList.add(\"restaurant-header\");\n  header.innerHTML = \"THE BEST Restaurant in Countryside!\";\n  pageHeader.appendChild(header);\n\n  const pageWrapper = document.createElement(\"main\");\n  pageWrapper.classList.add(\"page-wrapper\");\n  document.body.appendChild(pageWrapper);\n\n  const introWrapper = document.createElement(\"article\");\n  pageWrapper.appendChild(introWrapper);\n\n  const about = document.createElement(\"p\");\n  let aboutText = document.createTextNode(\n    \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam culpa vel autem deserunt rem nesciunt, laudantium voluptatum labore possimus placeat enim dicta accusamus recusandae veritatis molestiae eum similique explicabo tempora?\"\n  );\n  about.appendChild(aboutText);\n  introWrapper.appendChild(about);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n\n//# sourceURL=webpack://restaurant_page/./src/modules/pageLoad.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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