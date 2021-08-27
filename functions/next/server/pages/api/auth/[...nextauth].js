"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers"
const providers_namespaceObject = require("next-auth/providers");
var providers_default = /*#__PURE__*/__webpack_require__.n(providers_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js


/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
  providers: [providers_default().GitHub({
    clientId: process.env.REACT_APP_GITHUB_ID,
    clientSecret: process.env.REACT_APP_GITHUB_SECRET
  })],
  database: process.env.REACT_APP_DB_URL,
  session: {
    jwt: true
  },
  jwt: {
    secret: 'asdcvbtjhm'
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },

    async session(session, token) {
      session.user.id = token.id;
      return session;
    }

  }
}));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(555));
module.exports = __webpack_exports__;

})();