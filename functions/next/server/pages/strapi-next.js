(() => {
var exports = {};
exports.id = 318;
exports.ids = [318];
exports.modules = {

/***/ 1966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Post.js



 // import moment from 'moment';


function Post({
  postId,
  postUsername,
  postTitle,
  postPublished,
  postSlug,
  postUpdated
}) {
  const {
    colorMode
  } = (0,react_.useColorMode)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
    borderRadius: "10px",
    justify: "center",
    textAlign: "center",
    borderWidth: "3px",
    py: "15px",
    px: "10px",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/strapi-next/${postSlug}`,
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Heading, {
        _hover: {
          color: colorMode === 'dark' ? '#ff00ea' : '#ff00ea',
          transition: 'all 0.2s ease-in-out'
        },
        mb: "10px",
        transition: "all 0.2s ease-in-out",
        cursor: "pointer",
        letterSpacing: "2.5px",
        textTransform: "uppercase",
        children: postTitle
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "retro",
        children: "read more"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
      pt: "20px",
      spacing: "20%",
      fontWeight: "semibold",
      justify: "center",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
        spacing: "0px",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "posted by: "
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: postUsername
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
        spacing: "0px",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "date published:"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: external_moment_namespaceObject(postPublished).format('MMM Do YY')
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
        spacing: "0px",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "last updated: "
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [" ", external_moment_namespaceObject(postUpdated).format('MMM Do YY')]
        })]
      })]
    })]
  }, postId);
}
;// CONCATENATED MODULE: ./pages/strapi-next/index.js




function Home({
  posts
}) {
  // {console.log(posts)}
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
    pt: "25px",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      style: {
        fontSize: '2.8em',
        textDecoration: 'underline'
      },
      children: "Strapi Blog Posts"
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
      w: "45%",
      pt: "30px",
      spacing: "20px",
      children: posts && posts.map(post => /*#__PURE__*/jsx_runtime_.jsx(Post, {
        postId: post.id,
        postUsername: post.User.username,
        postTitle: post.Title,
        postUpdated: post.updated_at,
        postPublished: post.published_at,
        postSlug: post.Slug
      }))
    })]
  });
}
async function getStaticProps() {
  // ! get post from Strapi API
  const res = await fetch('http://localhost:1337/posts');
  const posts = await res.json();
  return {
    props: {
      posts
    }
  };
}

/***/ }),

/***/ 3426:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(1966)));
module.exports = __webpack_exports__;

})();