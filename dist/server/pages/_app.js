(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 998:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Disclaimer_container__rkRoe",
	"popup": "Disclaimer_popup__jxfpd"
};


/***/ }),

/***/ 6518:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Footer_container__n6RLR"
};


/***/ }),

/***/ 34:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Nav_navbar__Gsj0x",
	"logo": "Nav_logo__ERCsn",
	"search": "Nav_search__HtIdT",
	"button": "Nav_button__WQUun",
	"cart": "Nav_cart__0NXqw"
};


/***/ }),

/***/ 1578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./services/apollo-client.tsx
var apollo_client = __webpack_require__(8330);
// EXTERNAL MODULE: ./styles/components/Disclaimer.module.css
var Disclaimer_module = __webpack_require__(998);
var Disclaimer_module_default = /*#__PURE__*/__webpack_require__.n(Disclaimer_module);
;// CONCATENATED MODULE: ./components/Disclaimer.tsx


const Disclaimer = ({ setIsPopupOpen  })=>{
    const handlePopup = (event)=>{
        setIsPopupOpen(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Disclaimer_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Disclaimer_module_default()).popup,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "Disclaimer"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "This site is a ",
                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                            children: "portfolio project"
                        }),
                        " only, none of the products are for sale. Prices were taken from different sites and do not reflect real market prices at all."
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: handlePopup,
                    children: "Ok, I Understand"
                })
            ]
        })
    });
};
/* harmony default export */ const components_Disclaimer = (Disclaimer);

// EXTERNAL MODULE: ./styles/components/Footer.module.css
var Footer_module = __webpack_require__(6518);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer.tsx


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Footer_module_default()).container,
            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Tech Store \xa9 2010-2022"
            })
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./styles/components/Nav.module.css
var Nav_module = __webpack_require__(34);
var Nav_module_default = /*#__PURE__*/__webpack_require__.n(Nav_module);
;// CONCATENATED MODULE: ./components/Nav.tsx







const Nav = ()=>{
    const { 0: input , 1: setInput  } = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    const inputEl = (0,external_react_.useRef)(null);
    const cart = (0,client_.useReactiveVar)(apollo_client/* cartStore */.i);
    function handleInput(event) {
        setInput(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        router.push(`/search?query=${input}`);
        inputEl?.current?.blur();
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Nav_module_default()).navbar,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        id: (Nav_module_default()).logo,
                        children: "Tech Store"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    className: (Nav_module_default()).search,
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            value: input,
                            onChange: handleInput,
                            ref: inputEl
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            className: (Nav_module_default()).button,
                            title: "Search",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/tech-store/img/icon-search.svg",
                                alt: "Search"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/cart",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        className: (Nav_module_default()).cart,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/tech-store/img/cart-shopping-solid.svg",
                                alt: "Cart"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: cart.length
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Nav = (Nav);

;// CONCATENATED MODULE: ./pages/_app.tsx








function MyApp({ Component , pageProps  }) {
    const { 0: isPopupOpen , 1: setIsPopupOpen  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        (0,apollo_client/* cartStore */.i)(JSON.parse(localStorage.getItem("cart") || "[]"));
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(client_.ApolloProvider, {
        client: apollo_client/* client */.L,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Nav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {}),
            isPopupOpen && /*#__PURE__*/ jsx_runtime_.jsx(components_Disclaimer, {
                setIsPopupOpen: setIsPopupOpen
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,330], () => (__webpack_exec__(1578)));
module.exports = __webpack_exports__;

})();