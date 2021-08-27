(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
;// CONCATENATED MODULE: external "framer-motion"
const external_framer_motion_namespaceObject = require("framer-motion");
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
;// CONCATENATED MODULE: ./next-seo.config.js
const title = 'Next.js Chakra Starter | Hendra Agil';
const description = 'An opinionated starter project with Next.js and Chakra UI. Created by hendraaagil';
const url = 'https://nextjs-chakra-hendraaagil.vercel.app';
const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    images: [{
      url: `https://og-image.vercel.app/**Next.js%20Chakra**%20Starter.png?theme=light&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fraw.githubusercontent.com%2Fchakra-ui%2Fchakra-ui%2Fbf775929a6d73a3aa69e44d5d38542449871475c%2Flogo%2Flogomark-colored.svg`,
      alt: title,
      width: 2048,
      height: 1170
    }]
  },
  twitter: {
    cardType: 'summary_large_image',
    handle: '@hendraaagil',
    site: '@hendraaagil'
  },
  additionalLinkTags: [{
    rel: 'icon',
    href: '/favicon.ico'
  }]
};
/* harmony default export */ const next_seo_config = (SEO);
;// CONCATENATED MODULE: external "@chakra-ui/theme-tools"
const theme_tools_namespaceObject = require("@chakra-ui/theme-tools");
;// CONCATENATED MODULE: ./styles/theme.js




const theme = (0,react_.extendTheme)({
  styles: {
    global: props => ({
      h1: {
        textShadow: '-1px 1px 1px #ff00007e',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '4.5rem',
        textAlign: 'center',
        color: props.colorMode === 'dark' ? 'red.400' : '#ff00ea',
        transition: 'all 0.1s ease-in-out',
        fontWeight: 'semibold',
        letterSpacing: '-0.02em',
        lineHeight: '1.5',
        padding: '0 1rem',
        textShadow: props.colorMode === 'dark' ? '2px 1px red' : '0px 1px#0000006c',
        _hover: {
          letterSpacing: '0.05em'
        }
      },
      body: {
        color: props.colorMode === 'dark' ? 'gray.50' : 'gray.800',
        backgroundColor: props.colorMode === 'dark' ? 'gray.900' : 'gray.100',
        transition: 'all 0.1s ease-in-out'
      },
      input: {
        backgroundColor: props.colorMode === 'dark' ? 'gray.900' : 'gray.100',
        boxShadow: 'md',
        margin: '10px',
        padding: '10px',
        border: props.colorMode === 'dark' ? '0.1px solid #88888886' : '0.1px solid #f0121285',
        transition: 'all 0.1s ease-in-out',
        borderRadius: '5px',
        _hover: {
          transition: 'ease-in-out, width .35s ease-in-out',
          backgroundColor: props.colorMode === 'dark' ? 'gray.700' : 'blue.50',
          boxShadow: props.colorMode === 'dark' ? '0 0 1px 1px #dee4ef' : '0 0 2px 4px #dee4ef'
        },
        _focus: {
          transition: 'all 0.1s ease-in-out'
        }
      },
      // div: {
      //   backgroundColor: props.colorMode === 'dark' ? 'gray.900' : 'gray.100',
      //   transition: 'all 0.1s ease-in-out',
      // },
      a: {
        // color: props.colorMode === 'dark' ? 'gray.50' : 'gray.800',
        fontWeight: '700',
        transition: 'all 0.1s ease-in-out',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: props.colorMode === 'dark' ? 'gray.50' : '#ff00ea',
        textDecoration: 'underline',
        _hover: {
          textShadow: '-1px 1px 5px #30303029',
          color: props.colorMode === 'dark' ? '#0077ff' : '#0077ff',
          transition: 'all 0.1s ease-in-out'
        }
      },
      button: {
        px: '4',
        py: '3',
        m: '2',
        textAlign: 'center',
        // bg: 'gray.700',
        // color: 'blue.50',
        bg: props.colorMode === 'dark' ? 'gray.300' : 'gray.300',
        // boxShadow: '3px 3px 2px 1px rgba(0, 0, 255, .2);',
        boxShadow: props.colorMode === 'dark' ? '1px 1px 1px 1px #aaaaaa47;' : '1px 1px 1px 1px #0000ff0;',
        color: props.colorMode === 'dark' ? '#6f00ff' : '#6f00ff',
        // fontWeight: 'normal',
        // textShadow: '1px 1px 0.2px rgba(0, 0, 255, .2);',
        // borderWidth: '1px',
        borderRadius: '10px',
        transition: 'all 0.5s ease-in-out',
        // borderColor: 'gray.700',
        _hover: {
          // borderColor: '#0022e4',
          // bg: 'purple.400',
          transition: 'all 0.5s ease-in-out' // color: props.colorMode === 'dark' ? '#ff00ea' : '#ff00ea',
          // fontWeight: 'bold',
          // fontSize: '18px',
          // boxShadow:
          //   props.colorMode === 'dark'
          //     ? '2px 2px 2px 1px #aaaaaaca;'
          //     : '3px 3px 2px 1px rgba(0, 0, 255, .2);',
          // textShadow: '0 3px 0 #a0a0a07e',
          // borderRadius: '7.5px',
          // borderColor: '#0022e4',

        },
        transition: 'all 0.5s ease-in-out'
      }
    })
  },
  components: {
    Heading: {
      baseStyle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        lineHeight: '1.5',
        fontFamily: 'Poppins, sans-serif' // color: props.colorMode === 'dark' ? 'gray.50' : 'gray.800',

      },
      variants: {
        'with-shadow': {// bg: 'red.400',
          // boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: props => ({
          bg: (0,theme_tools_namespaceObject.mode)('blue.500', 'red.500')(props),
          // bg: 'gray.300',
          color: props.colorMode === 'dark' ? 'red.500' : 'blue.800',
          _hover: {
            bg: props.colorMode === 'dark' ? 'blue.500' : 'red.500',
            bg: 'gray.300',
            textShadow: '0 3px 0 #a0a0a07e' // borderRadius: '15px',

          }
        })
      }
    },
    Text: {
      baseStyle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        lineHeight: '1.5',
        fontFamily: 'Poppins, sans-serif' // color: props.colorMode === 'dark' ? 'gray.50' : 'gray.800',

      },
      variants: {
        'with-shadow': {// bg: 'red.400',
          // boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: props => ({
          bg: (0,theme_tools_namespaceObject.mode)('blue.500', 'red.500')(props),
          // bg: 'gray.300',
          color: props.colorMode === 'dark' ? 'red.500' : 'blue.800',
          _hover: {
            bg: props.colorMode === 'dark' ? 'blue.500' : 'red.500',
            bg: 'gray.300',
            textShadow: '0 3px 0 #a0a0a07e' // borderRadius: '15px',

          }
        })
      }
    },
    Drawer: {
      // setup light/dark mode component defaults
      baseStyle: props => ({
        dialog: {
          bg: (0,theme_tools_namespaceObject.mode)('red.500', 'blue.500')(props)
        }
      })
    },
    // Text: {
    //   // setup light/dark mode component defaults
    //   baseStyle: (props) => ({
    //     bg: mode('red.500', 'blue.500')(props),
    //   }),
    // },
    Button: {
      baseStyle: {
        fontWeight: 'normal',
        // borderColor: '#ff0000',
        bg: 'gray.50',
        textShadow: '0 3px 0 #a0a0a07e' // borderWidth: '2px',
        // borderRadius: '15px',

      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px'
        },
        lg: {
          h: '48px',
          fontSize: 'lg',
          px: '24px'
        },
        md: {
          h: '40px',
          fontSize: 'lg',
          px: '20px'
        },
        sm: {
          h: '32px',
          fontSize: 'lg',
          px: '16px'
        },
        xs: {
          h: '28px',
          fontSize: 'lg',
          px: '14px'
        }
      },
      variants: {
        'with-shadow': {// bg: 'red.400',
          // boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: props => ({
          // bg: props.colorMode === 'dark' ? 'blue.500' : 'red.500',
          bg: 'gray.300',
          // color: props.colorMode === 'dark' ? 'gray.50' : 'gray.800',
          _hover: {
            // bg: props.colorMode === 'dark' ? 'blue.500' : 'red.500',
            bg: 'gray.300',
            textShadow: '0 3px 0 #a0a0a07e' // borderRadius: '15px',

          }
        })
      }
    }
  }
}); // ! BELOW IS MY THEME FROM GEIST UI!!!!

const myTheme = {
  type: 'Custom',
  palette: {
    accents_1: '#111',
    accents_2: '#333',
    accents_3: '#444',
    accents_4: '#666',
    accents_5: '#888',
    accents_6: '#999',
    accents_7: '#eaeaea',
    accents_8: '#fafafa',
    background: '#000',
    foreground: '#fff',
    selection: '#f81ce5',
    secondary: '#888',
    code: '#79ffe1',
    border: '#333',
    link: '#3291ff'
  },
  expressiveness: {
    dropdownBoxShadow: '0 0 0 1px #333',
    shadowSmall: '0 0 0 1px #333',
    shadowMedium: '0 0 0 1px #333',
    shadowLarge: '0 0 0 1px #333',
    portalOpacity: 0.75
  }
};
/** *
 *  Usage::
 *
 *  export const App = () => {
 *    return (
 *      <GeistProvider themes={[myTheme]} themeType="Custom">
 *        <CssBaseline />
 *        <YourComponent />
 *      </GeistProvider>
 *    )
 *  }
 * */
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(8104);
;// CONCATENATED MODULE: ./components/Navbar.js







function Navbar() {
  const [session, loading] = (0,client_.useSession)(); // console.log(
  //   `Here is the session: ${session} Here is the loading: ${loading}`
  // );

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: "main-nav",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
        justifyContent: "center",
        alignItems: "center",
        px: "300px",
        pb: "0px",
        minChildWidth: "160px",
        spacing: "0px",
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          h: "45px",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Home"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          h: "45px",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/dashboard",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Dashboard"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          h: "45px",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/blog",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Blog"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          h: "45px",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/learning",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Example Page"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
          h: "45px",
          children: [!loading && !session && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/api/auth/signin",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              onClick: e => {
                e.preventDefault();
                (0,client_.signIn)('github');
              },
              children: "Sign In"
            })
          }), session && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/api/auth/signout",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              onClick: e => {
                e.preventDefault();
                (0,client_.signOut)();
              },
              children: "Sign Out"
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
        justifyContent: "center",
        alignItems: "center",
        px: "300px",
        pb: "0px",
        minChildWidth: "160px",
        spacing: "0px",
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          h: "45px",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/strapi-next",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Strapi-Next"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          h: "45px",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/strapi-next",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Strapi-Next"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          h: "45px",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/strapi-next",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Strapi-Next"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          h: "45px",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/strapi-next",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Strapi-Next"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          h: "45px",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/strapi-next",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Strapi-Next"
            })
          })
        })]
      })]
    })
  });
}

/* harmony default export */ const components_Navbar = (Navbar);
;// CONCATENATED MODULE: ./components/Footer.js



function LargeWithLogoCentered() {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    bg: (0,react_.useColorModeValue)('gray.100', 'gray.900'),
    color: (0,react_.useColorModeValue)('gray.700', 'gray.200'),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
      pt: "200px",
      pb: 10,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
        align: "center",
        _before: {
          content: '""',
          borderBottom: '1px solid',
          borderColor: (0,react_.useColorModeValue)('gray.200', 'gray.700'),
          flexGrow: 1,
          mr: 8
        },
        _after: {
          content: '""',
          borderBottom: '1px solid',
          borderColor: (0,react_.useColorModeValue)('gray.200', 'gray.700'),
          flexGrow: 1,
          ml: 8
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          fontSize: "md",
          textAlign: "center",
          children: "Next"
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Image // boxSize="100px"
        , {
          pl: "2px",
          objectFit: "cover",
          src: "https://res.cloudinary.com/seanmodd/image/upload/v1629613336/face_4_66893dfd52.png",
          alt: "Logo"
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          fontSize: "md",
          textAlign: "center",
          children: "Auth"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        pt: 6,
        fontSize: "sm",
        textAlign: "center",
        children: "\xA9 2021 Sean Modd. All rights reserved"
      })]
    })
  });
}
;// CONCATENATED MODULE: external "@chakra-ui/icons"
const icons_namespaceObject = require("@chakra-ui/icons");
;// CONCATENATED MODULE: ./components/DarkModeSwitch.js


// import { useColorMode, IconButton } from '@chakra-ui/core';



const DarkModeSwitch = ({
  children
}) => {
  const {
    colorMode,
    toggleColorMode
  } = (0,react_.useColorMode)();
  const iconColor = {
    light: '#1d1d1d',
    dark: '#ffe600'
  };
  const bgColor = {
    light: 'gray.300',
    dark: 'gray.900'
  };
  const borderColor = {
    light: 'gray.900',
    dark: '#ffe600'
  };
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.HStack, {
      align: "center",
      justify: "center",
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, {
        "aria-label": "Toggle Dark Switch",
        icon: colorMode === 'dark' ? /*#__PURE__*/jsx_runtime_.jsx(icons_namespaceObject.SunIcon, {}) : /*#__PURE__*/jsx_runtime_.jsx(icons_namespaceObject.MoonIcon, {}),
        onClick: toggleColorMode,
        color: iconColor[colorMode],
        bg: bgColor[colorMode],
        borderColor: borderColor[colorMode],
        _hover: {
          bg: colorMode === 'dark' ? '#ffe600' : 'gray.900',
          color: colorMode === 'dark' ? 'gray.900' : 'gray.50'
        },
        children: children
      })
    })
  });
};

/* harmony default export */ const components_DarkModeSwitch = (DarkModeSwitch);
;// CONCATENATED MODULE: ./components/SeanNavbar.js








const SeanNavbar = () => {
  const {
    colorMode
  } = (0,react_.useColorMode)();
  const iconColor = {
    light: '#1d1d1d',
    dark: '#d400ff'
  };
  const textColor = {
    light: '#1d1d1d',
    dark: '#ffffff'
  };
  const bgColor = {
    light: 'gray.100',
    dark: 'gray.900'
  };
  const menuBgColor = {
    light: 'gray.300',
    dark: 'gray.900'
  };
  const bgColorItem = {
    light: 'gray.100',
    dark: 'gray.900'
  };
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Menu, {
        placement: "right",
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.MenuButton, {
          as: react_.IconButton,
          transition: "all 0.5s ease-in-out",
          _hover: {
            bg: colorMode === 'dark' ? '#d400ff' : 'gray.900',
            color: colorMode === 'dark' ? 'gray.900' : 'gray.50',
            transition: 'all 0.5s ease-in-out'
          },
          _active: {
            bg: colorMode === 'dark' ? '#d400ff' : 'gray.200',
            color: colorMode === 'dark' ? 'gray.900' : 'gray.900',
            transition: 'all 0.5s ease-in-out'
          } // boxShadow="md"
          ,
          color: iconColor[colorMode],
          bg: menuBgColor[colorMode] // borderColor={iconColor[colorMode]}
          ,
          h: "50px",
          w: "60px",
          fontSize: "28px",
          icon: /*#__PURE__*/jsx_runtime_.jsx(icons_namespaceObject.DragHandleIcon, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.MenuList, {
          mt: "52px",
          justify: "center",
          bg: bgColor[colorMode],
          w: "300px",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
            pl: "20px",
            justify: "center",
            w: "250px",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.MenuGroup, {
              color: textColor[colorMode],
              title: "Profile",
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
                color: textColor[colorMode] // transition= 'all 0.5s ease-in-out'
                ,
                bg: bgColorItem[colorMode],
                _focus: {
                  bg: colorMode === 'dark' ? 'gray.900' : 'gray.900',
                  color: colorMode === 'dark' ? '#d400ff' : '#d400ff',
                  transition: 'all 0.5s ease-in-out'
                },
                _hover: {
                  bg: colorMode === 'dark' ? 'gray.900' : 'gray.900',
                  color: colorMode === 'dark' ? '#0077ff' : '#0077ff',
                  transition: 'all 0.5s ease-in-out'
                },
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/myaccount",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "My Account"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
                color: textColor[colorMode] // transition= 'all 0.5s ease-in-out'
                ,
                bg: bgColorItem[colorMode],
                _focus: {
                  bg: colorMode === 'dark' ? 'gray.900' : 'gray.900',
                  color: colorMode === 'dark' ? '#d400ff' : '#d400ff',
                  transition: 'all 0.5s ease-in-out'
                },
                _hover: {
                  bg: colorMode === 'dark' ? 'gray.900' : 'gray.900',
                  color: colorMode === 'dark' ? '#0077ff' : '#0077ff',
                  transition: 'all 0.5s ease-in-out'
                },
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "Payments"
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.MenuDivider, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.MenuGroup, {
              color: textColor[colorMode],
              title: "Routes",
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
                color: textColor[colorMode] // transition= 'all 0.5s ease-in-out'
                ,
                bg: bgColorItem[colorMode],
                _focus: {
                  bg: colorMode === 'dark' ? 'gray.900' : 'gray.900',
                  color: colorMode === 'dark' ? '#d400ff' : '#d400ff',
                  transition: 'all 0.5s ease-in-out'
                },
                _hover: {
                  bg: colorMode === 'dark' ? 'gray.900' : 'gray.900',
                  color: colorMode === 'dark' ? '#0077ff' : '#0077ff',
                  transition: 'all 0.5s ease-in-out'
                },
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/learning/product-list",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Product List"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
                color: textColor[colorMode] // transition= 'all 0.5s ease-in-out'
                ,
                bg: bgColorItem[colorMode],
                _focus: {
                  bg: colorMode === 'dark' ? 'gray.900' : 'gray.900',
                  color: colorMode === 'dark' ? '#d400ff' : '#d400ff',
                  transition: 'all 0.5s ease-in-out'
                },
                _hover: {
                  bg: colorMode === 'dark' ? 'gray.900' : 'gray.900',
                  color: colorMode === 'dark' ? '#0077ff' : '#0077ff',
                  transition: 'all 0.5s ease-in-out'
                },
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/learning/nested-dynamic",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Nested Dynamic"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
                color: textColor[colorMode] // transition= 'all 0.5s ease-in-out'
                ,
                bg: bgColorItem[colorMode],
                _focus: {
                  bg: colorMode === 'dark' ? 'gray.900' : 'gray.900',
                  color: colorMode === 'dark' ? '#d400ff' : '#d400ff',
                  transition: 'all 0.5s ease-in-out'
                },
                _hover: {
                  bg: colorMode === 'dark' ? 'gray.900' : 'gray.900',
                  color: colorMode === 'dark' ? '#0077ff' : '#0077ff',
                  transition: 'all 0.5s ease-in-out'
                },
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/learning/catch-all",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Catch All"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
                color: textColor[colorMode] // transition= 'all 0.5s ease-in-out'
                ,
                bg: bgColorItem[colorMode],
                _focus: {
                  bg: colorMode === 'dark' ? 'gray.900' : 'gray.900',
                  color: colorMode === 'dark' ? '#d400ff' : '#d400ff',
                  transition: 'all 0.5s ease-in-out'
                },
                _hover: {
                  bg: colorMode === 'dark' ? 'gray.900' : 'gray.900',
                  color: colorMode === 'dark' ? '#0077ff' : '#0077ff',
                  transition: 'all 0.5s ease-in-out'
                },
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/learning/navigating-programatically",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Programmatic Nav"
                  })
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.MenuDivider, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.MenuGroup, {
              color: textColor[colorMode],
              title: "Routes",
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
                color: textColor[colorMode] // transition= 'all 0.5s ease-in-out'
                ,
                bg: bgColorItem[colorMode],
                _focus: {
                  bg: colorMode === 'dark' ? 'gray.900' : 'gray.900',
                  color: colorMode === 'dark' ? '#d400ff' : '#d400ff',
                  transition: 'all 0.5s ease-in-out'
                },
                _hover: {
                  bg: colorMode === 'dark' ? 'gray.900' : 'gray.900',
                  color: colorMode === 'dark' ? '#0077ff' : '#0077ff',
                  transition: 'all 0.5s ease-in-out'
                },
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/rendering/getstaticprops",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "getStaticProps"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
                color: textColor[colorMode] // transition= 'all 0.5s ease-in-out'
                ,
                bg: bgColorItem[colorMode],
                _focus: {
                  bg: colorMode === 'dark' ? 'gray.900' : 'gray.900',
                  color: colorMode === 'dark' ? '#d400ff' : '#d400ff',
                  transition: 'all 0.5s ease-in-out'
                },
                _hover: {
                  bg: colorMode === 'dark' ? 'gray.900' : 'gray.900',
                  color: colorMode === 'dark' ? '#0077ff' : '#0077ff',
                  transition: 'all 0.5s ease-in-out'
                },
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/rendering/ssg-dynamic-params",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "SSG Dynamic Params"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
                color: textColor[colorMode] // transition= 'all 0.5s ease-in-out'
                ,
                bg: bgColorItem[colorMode],
                _focus: {
                  bg: colorMode === 'dark' ? 'gray.900' : 'gray.900',
                  color: colorMode === 'dark' ? '#d400ff' : '#d400ff',
                  transition: 'all 0.5s ease-in-out'
                },
                _hover: {
                  bg: colorMode === 'dark' ? 'gray.900' : 'gray.900',
                  color: colorMode === 'dark' ? '#0077ff' : '#0077ff',
                  transition: 'all 0.5s ease-in-out'
                },
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/rendering/ssg-getstaticpaths",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "SSG getStaticPaths"
                  })
                })
              })]
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const components_SeanNavbar = ((/* unused pure expression or super */ null && (SeanNavbar)));
const MyTitle = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
  py: "20px",
  mt: "5px",
  mb: "20px",
  align: "center",
  justify: "center",
  children: [/*#__PURE__*/jsx_runtime_.jsx(components_DarkModeSwitch, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
    spacing: "-15px",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "logos",
      children: "Next"
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Image, {
      p: "0px",
      m: "0px",
      pl: "8px" // boxSize="100px"
      // objectFit="cover"
      ,
      src: "https://res.cloudinary.com/seanmodd/image/upload/v1629613336/face_4_66893dfd52.png",
      alt: "Logo"
    }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Auth"
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx(SeanNavbar, {})]
});
;// CONCATENATED MODULE: ./pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function MyApp({
  Component,
  pageProps,
  router
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.ChakraProvider, {
    resetCSS: true,
    theme: theme,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(client_.Provider, {
      session: pageProps.sesson,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_next_seo_namespaceObject.DefaultSeo, _objectSpread({}, next_seo_config)), /*#__PURE__*/jsx_runtime_.jsx(MyTitle, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_namespaceObject.motion.div, {
        initial: "pageInitial",
        animate: "pageAnimate",
        variants: {
          pageInitial: {
            scale: 1.2,
            opacity: 0
          },
          pageAnimate: {
            scale: 1,
            opacity: 1
          }
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(LargeWithLogoCentered, {})]
      }, router.route)]
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 3426:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 8104:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

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
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(4580)));
module.exports = __webpack_exports__;

})();