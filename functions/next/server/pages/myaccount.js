"use strict";
(() => {
var exports = {};
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 1210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8104);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);






function MyAccount() {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const securePage = async () => {
      const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.getSession)();

      if (!session) {
        (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.signIn)();
      } else {
        setLoading(false);
      }
    };

    securePage();
  }, []);

  if (loading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
      pt: "50px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
        className: "title",
        children: "Loading..."
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
    pt: "50px",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
      className: "title",
      pb: "20px",
      children: "My Account Page!"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
      fontSize: "2xl",
      children: ["Owner: ", session.user.name]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyAccount);
async function getServerSideProps(context) {
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.getSession)(context);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/',
        permanent: false
      }
    };
  }

  return {
    props: {
      data: 'List of 100 Blog Titles',
      session
    }
  };
}

/***/ }),

/***/ 3426:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 8104:
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1210));
module.exports = __webpack_exports__;

})();