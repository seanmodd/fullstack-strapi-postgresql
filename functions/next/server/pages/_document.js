"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 60:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyDocument)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
;// CONCATENATED MODULE: external "@geist-ui/react"
const external_geist_ui_react_namespaceObject = require("@geist-ui/react");
;// CONCATENATED MODULE: ./pages/_document.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class MyDocument extends next_document.default {
  static async getInitialProps(ctx) {
    const initialProps = await next_document.default.getInitialProps(ctx); //   return { ...initialProps };
    // }

    const styles = external_geist_ui_react_namespaceObject.CssBaseline.flush();
    return _objectSpread(_objectSpread({}, initialProps), {}, {
      styles: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [initialProps.styles, styles]
      })
    });
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Html, {
      lang: "en",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Head, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
          charSet: "UTF-8"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          content: "ie=edge",
          httpEquiv: "X-UA-Compatible"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("body", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.ColorModeScript, {}), /*#__PURE__*/jsx_runtime_.jsx(next_document.Main, {}), /*#__PURE__*/jsx_runtime_.jsx(next_document.NextScript, {})]
      })]
    });
  }

}

/***/ }),

/***/ 3426:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 2538:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 2208:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6044:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5163:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/document-context.js");

/***/ }),

/***/ 6098:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1168:
/***/ ((module) => {

module.exports = require("styled-jsx/server");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859], () => (__webpack_exec__(60)));
module.exports = __webpack_exports__;

})();