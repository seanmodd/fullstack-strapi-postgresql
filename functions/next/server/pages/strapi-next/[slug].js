(() => {
var exports = {};
exports.id = 951;
exports.ids = [951];
exports.modules = {

/***/ 739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);


// import { Heading, VStack } from '@chakra-ui/react';
// import SinglePost from 'components/SinglePost';
// export default function Post({post}) {
//   return (
//     <VStack>
//       <SinglePost
//         postId={post.id}
//         postUsername={post.User.username}
//         postTitle={post.Title}
//         postUpdated={post.updated_at}
//         postPublished={post.published_at}
//         postContent={post.Content}
//       />
//       <Heading>HELLO</Heading>
//     </VStack>
//   );
// }
// //! Tell NextJS how many pages there are
// //! THEN for each individual page, get the data for that page.
// export async function getStaticPaths() {
//   const res = await fetch('http://localhost:1337/posts');
//   const posts = await res.json();
//   const paths = posts.map((post) => ({
//     params: { slug: post.Slug },
//   }));
//   return {
//     paths,
//     fallback: true,
//   };
// }
// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   const res = await fetch(`http://localhost:1337/posts?Slug=${slug}`);
//   const data = await res.json();
//   const post = data[0];
//   return {
//     props: { post },
//   };
// }

function Post({
  post
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: "/",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        children: "Go Home"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
      children: post.Title
    })]
  });
} // tell next.js how many pages there are

async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();
  const paths = posts.map(post => ({
    params: {
      slug: post.Slug
    }
  }));
  return {
    paths,
    fallback: true
  };
} // for each individual page: get the data for that page

async function getStaticProps({
  params
}) {
  const {
    slug
  } = params;
  const res = await fetch(`http://localhost:1337/posts?Slug=${slug}`);
  const data = await res.json();
  const post = data[0];
  return {
    props: {
      post
    }
  };
}

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(739)));
module.exports = __webpack_exports__;

})();