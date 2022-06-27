(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 2046:
/***/ ((module) => {

// Exports
module.exports = {
	"grid": "Search_grid__Er4j0"
};


/***/ }),

/***/ 6087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8330);
/* harmony import */ var _services_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7401);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6050);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2459);
/* harmony import */ var _components_OrderBy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3287);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9149);
/* harmony import */ var _styles_Search_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2046);
/* harmony import */ var _styles_Search_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Search_module_css__WEBPACK_IMPORTED_MODULE_10__);











var ProductOrderByInput;
(function(ProductOrderByInput) {
    ProductOrderByInput["title_ASC"] = "title_ASC";
    ProductOrderByInput["price_ASC"] = "price_ASC";
    ProductOrderByInput["price_DESC"] = "price_DESC";
})(ProductOrderByInput || (ProductOrderByInput = {}));
const Search = ({ results , query , total  })=>{
    const { 0: products , 1: setProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(results);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: orderBy , 1: setOrderBy  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ProductOrderByInput.title_ASC);
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [runQuery, { data: data1  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(_services_queries__WEBPACK_IMPORTED_MODULE_4__/* .GET_SEARCH */ .to, {
        variables: {
            query: query,
            orderBy: orderBy,
            skip: 10 * page
        },
        fetchPolicy: "no-cache",
        notifyOnNetworkStatusChange: true,
        onCompleted: (data)=>{
            setProducts(data.products);
            setIsLoading(false);
        }
    });
    const reloadData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setIsLoading(true);
        runQuery();
    }, [
        orderBy,
        page
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        reloadData();
    }, [
        reloadData
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        "Tech Store | Search: ",
                        query
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                children: [
                    'Search results for "',
                    query,
                    '"'
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_OrderBy__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                setOrderBy: setOrderBy
            }),
            isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}) : products.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Search_module_css__WEBPACK_IMPORTED_MODULE_10___default().grid),
                        children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                product: product
                            }, product.id)
                        )
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        setPage: setPage,
                        total: total
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "No results."
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    const { query  } = context.query;
    const { data  } = await _services_apollo_client__WEBPACK_IMPORTED_MODULE_3__/* .client.query */ .L.query({
        query: _services_queries__WEBPACK_IMPORTED_MODULE_4__/* .GET_SEARCH */ .to,
        variables: {
            query: query
        }
    });
    return {
        props: {
            results: data.products,
            query: query,
            total: data.productsConnection.aggregate.count
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);


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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,330,221,583,241], () => (__webpack_exec__(6087)));
module.exports = __webpack_exports__;

})();