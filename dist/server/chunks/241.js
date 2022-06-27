exports.id = 241;
exports.ids = [241];
exports.modules = {

/***/ 2942:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Loading_wrapper__LkgBA",
	"loading": "Loading_loading__tIhnL",
	"lds-dual-ring": "Loading_lds-dual-ring__3AUy_"
};


/***/ }),

/***/ 1628:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "OrderBy_container__yliX6",
	"wrapper": "OrderBy_wrapper__xEDT4",
	"orderby": "OrderBy_orderby__pYu9S"
};


/***/ }),

/***/ 2772:
/***/ ((module) => {

// Exports
module.exports = {
	"pagination": "Pagination_pagination__VVeVj"
};


/***/ }),

/***/ 2459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_Loading_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2942);
/* harmony import */ var _styles_components_Loading_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Loading_module_css__WEBPACK_IMPORTED_MODULE_1__);


const Loading = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_components_Loading_module_css__WEBPACK_IMPORTED_MODULE_1___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_components_Loading_module_css__WEBPACK_IMPORTED_MODULE_1___default().loading)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Loading"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 3287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_OrderBy_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1628);
/* harmony import */ var _styles_components_OrderBy_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_OrderBy_module_css__WEBPACK_IMPORTED_MODULE_1__);


var ProductOrderByInput;
(function(ProductOrderByInput) {
    ProductOrderByInput["title_ASC"] = "title_ASC";
    ProductOrderByInput["price_ASC"] = "price_ASC";
    ProductOrderByInput["price_DESC"] = "price_DESC";
})(ProductOrderByInput || (ProductOrderByInput = {}));
const OrderBy = ({ setOrderBy  })=>{
    const handleOrderChange = (event)=>{
        const index = Number(event.target.value);
        setOrderBy(Object.values(ProductOrderByInput)[index]);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_components_OrderBy_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                children: "Sort by:"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_components_OrderBy_module_css__WEBPACK_IMPORTED_MODULE_1___default().wrapper),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: (_styles_components_OrderBy_module_css__WEBPACK_IMPORTED_MODULE_1___default().orderby),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "radio",
                                name: "orderBy",
                                onChange: handleOrderChange,
                                value: 0,
                                defaultChecked: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Featured"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: (_styles_components_OrderBy_module_css__WEBPACK_IMPORTED_MODULE_1___default().orderby),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "radio",
                                name: "orderBy",
                                onChange: handleOrderChange,
                                value: 1
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Lowest Price"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: (_styles_components_OrderBy_module_css__WEBPACK_IMPORTED_MODULE_1___default().orderby),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "radio",
                                name: "orderBy",
                                onChange: handleOrderChange,
                                value: 2
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Highest Price"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderBy);


/***/ }),

/***/ 9149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_Pagination_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2772);
/* harmony import */ var _styles_components_Pagination_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Pagination_module_css__WEBPACK_IMPORTED_MODULE_1__);


const Pagination = ({ setPage , total  })=>{
    const totalPages = Math.ceil(total / 10);
    const handlePage = (event)=>{
        setPage(Number(event.currentTarget.value));
    };
    const renderButtons = ()=>{
        let buttons = [];
        for(let i = 0; i < totalPages; i++){
            buttons.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: handlePage,
                value: i,
                children: i + 1
            }, i));
        }
        return buttons;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_components_Pagination_module_css__WEBPACK_IMPORTED_MODULE_1___default().pagination),
        children: renderButtons()
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ })

};
;