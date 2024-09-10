/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/helpers/asset.js":
/*!*********************************!*\
  !*** ./src/js/helpers/asset.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createAssetUrl: function createAssetUrl(path) {
    if (/^data/.test(path)) {
      return path;
    }
    if (/^https?:\/\//.test(path)) {
      return path;
    }
    path = path.replace(/^\//, '');
    return "".concat("MISSING_ENV_VAR".ASSET_BASE_PATH).concat(path);
  }
});

/***/ }),

/***/ "./src/js/modules/background.js":
/*!**************************************!*\
  !*** ./src/js/modules/background.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_asset_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/asset.js */ "./src/js/helpers/asset.js");

var self = {
  eventBus: null,
  initialize: function initialize(eventBus) {
    self.eventBus = eventBus;
    var backgroundTL = self.createBackgroundTimeline();
    backgroundTL.play(0);
  },
  createBackgroundTimeline: function createBackgroundTimeline() {
    var b1 = "linear-gradient(217deg, rgba(255,0,0,.9), rgba(255,0,0,0) 70.71%),  linear-gradient(127deg, rgba(0,255,0,.9), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.9), rgba(0,0,255,0) 70.71%)";
    var b2 = "linear-gradient(217deg, rgba(255,0,0,.9), rgba(255,0,0,0) 70.71%),  linear-gradient(127deg, rgba(0,255,0,.9), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.9), rgba(0,0,255,0) 70.71%)";

    // linear-gradient(217deg, rgba(255,0,0,.9), rgba(255,0,0,0) 70.71%),  linear-gradient(127deg, rgba(0,255,0,.9), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.9), rgba(0,0,255,0) 70.71%)

    var tl = gsap.timeline({
      paused: true,
      repeat: -1,
      yoyo: true
    });
    tl.add('start');
    tl.add(gsap.set(".background", {
      background: b1
    }), 'start');
    tl.add(gsap.to(".background", 2, {
      ease: "sine.inOut",
      background: b2
    }), 'start');

    // tl.add(gsap.set(".headline", {background: b2}), 'start')
    // tl.add(gsap.to(".headline", 15, {ease: "sine.inOut", background: b1}), 'start')

    return tl;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (self);

/***/ }),

/***/ "./src/js/modules/introAnimation.js":
/*!******************************************!*\
  !*** ./src/js/modules/introAnimation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_asset_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/asset.js */ "./src/js/helpers/asset.js");

var self = {
  eventBus: null,
  initialize: function initialize(eventBus) {
    self.eventBus = eventBus;
    var introAnimation = self.createIntroTimeline();
    introAnimation.play(0);
  },
  createIntroTimeline: function createIntroTimeline() {
    var tl = gsap.timeline({
      paused: true
    });
    tl.add('start');
    // tl.to('.headline', 0, { x: "65vw" }, "start")
    // tl.to('.title01', 0.1, {opacity:0}, 'start+=15')
    // tl.to('.title02', 0.1, { opacity: 1 }, 'start+=15')

    // tl.fromTo('.headline', 2, {x:(document.querySelector('.headline .title01').offsetWidth + document.querySelector('.headline .title03').offsetWidth)/4 + 150 },{ x: (document.querySelector('.headline .title01').offsetWidth + document.querySelector('.headline .title03').offsetWidth)/4}, "start+=2")
    // tl.fromTo('.headline', 1, { x: '25vw' }, { x: 0 }, "start")
    // tl.fromTo('.headline', 1,{x: 0}, {x: -200}, "start+=2")
    // tl.fromTo('.headline', 12, {x:5200, ease: "sine.inOut"},{x:-5200}, "start")
    // tl.to('.headline', 0.6, {scale: 1, x:0, ease: "sine.inOut"}, "start+=12")
    return tl;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (self);

/***/ }),

/***/ "./src/js/modules/tickerLoop.js":
/*!**************************************!*\
  !*** ./src/js/modules/tickerLoop.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_asset_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/asset.js */ "./src/js/helpers/asset.js");

var self = {
  eventBus: null,
  initialize: function initialize(eventBus) {
    self.eventBus = eventBus;
    self.duplicateTickerItems();
    var tickerTL = self.createTickerTL();
    tickerTL.play(0);
  },
  duplicateTickerItems: function duplicateTickerItems() {
    document.querySelector('.skillsTickerItemContainer').innerHTML += document.querySelector('.skillsTickerItemContainer').innerHTML;
  },
  createTickerTL: function createTickerTL() {
    var tl = gsap.timeline({
      paused: true,
      repeat: -1
    });
    tl.add('start');
    tl.to('.skillsTickerItemContainer', 30, {
      x: -document.querySelector('.skillsTickerItemContainer').offsetWidth / 2,
      ease: "none"
    }, "start");
    return tl;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (self);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_background_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/background.js */ "./src/js/modules/background.js");
/* harmony import */ var _modules_introAnimation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/introAnimation.js */ "./src/js/modules/introAnimation.js");
/* harmony import */ var _modules_tickerLoop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tickerLoop.js */ "./src/js/modules/tickerLoop.js");



var eventBus = new EventTarget();
window.addEventListener('load', function () {
  _modules_background_js__WEBPACK_IMPORTED_MODULE_0__["default"].initialize(eventBus);
  _modules_introAnimation_js__WEBPACK_IMPORTED_MODULE_1__["default"].initialize(eventBus);
  _modules_tickerLoop_js__WEBPACK_IMPORTED_MODULE_2__["default"].initialize(eventBus);
  // projectOverlay.initialize(eventBus);
  // projectFilters.initialize(eventBus);
  // article.initialize(eventBus);
});
})();

/******/ })()
;