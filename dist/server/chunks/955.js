exports.id = 955;
exports.ids = [955];
exports.modules = {

/***/ 2744:
/***/ ((module) => {

// Exports
module.exports = {
	"quantity": "Quantity_quantity__uL94C",
	"value": "Quantity_value__y7L4t",
	"lbtn": "Quantity_lbtn__PGq4l",
	"rbtn": "Quantity_rbtn__iYa1z"
};


/***/ }),

/***/ 1955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_Quantity_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2744);
/* harmony import */ var _styles_components_Quantity_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Quantity_module_css__WEBPACK_IMPORTED_MODULE_1__);


const Quantity = ({ stock , quantity , setQuantity  })=>{
    const handleDecrease = ()=>{
        setQuantity(Math.max(1, quantity - 1));
    };
    const handleIncrease = ()=>{
        setQuantity(Math.min(stock, quantity + 1));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_components_Quantity_module_css__WEBPACK_IMPORTED_MODULE_1___default().quantity),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: (_styles_components_Quantity_module_css__WEBPACK_IMPORTED_MODULE_1___default().lbtn),
                type: "button",
                value: "-",
                onClick: handleDecrease,
                disabled: stock < 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: (_styles_components_Quantity_module_css__WEBPACK_IMPORTED_MODULE_1___default().value),
                type: "number",
                name: "quantity",
                id: "quantity",
                value: quantity,
                size: 3,
                readOnly: true,
                disabled: stock < 1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: (_styles_components_Quantity_module_css__WEBPACK_IMPORTED_MODULE_1___default().rbtn),
                type: "button",
                value: "+",
                onClick: handleIncrease,
                disabled: stock < 1
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quantity);


/***/ })

};
;