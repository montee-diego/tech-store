(() => {
var exports = {};
exports.id = 300;
exports.ids = [300];
exports.modules = {

/***/ 1554:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Category_title___In8f",
	"flex": "Category_flex__jfp9A",
	"products": "Category_products__uiuc_",
	"grid": "Category_grid__wukdY",
	"filterbtn": "Category_filterbtn__Q0M7l",
	"filter": "Category_filter__g_Ieg",
	"open": "Category_open__Ms0ER",
	"close": "Category_close__AbBhS"
};


/***/ }),

/***/ 3666:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "Filter_form__QX05Z",
	"checkbox": "Filter_checkbox__Y59xo",
	"price": "Filter_price__BB3o2",
	"filter": "Filter_filter__5qze5",
	"input": "Filter_input__HluLM"
};


/***/ }),

/***/ 4718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./services/apollo-client.tsx
var apollo_client = __webpack_require__(8330);
// EXTERNAL MODULE: ./services/queries.tsx
var queries = __webpack_require__(7401);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/Card.tsx
var Card = __webpack_require__(6050);
// EXTERNAL MODULE: ./styles/components/Filter.module.css
var Filter_module = __webpack_require__(3666);
var Filter_module_default = /*#__PURE__*/__webpack_require__.n(Filter_module);
;// CONCATENATED MODULE: ./components/Filter.tsx



const Filter = ({ id , brands , setFilterOpts  })=>{
    const minPrice = (0,external_react_.useRef)(null);
    const maxPrice = (0,external_react_.useRef)(null);
    const selectedBrands = (0,external_react_.useRef)([]);
    const stock = (0,external_react_.useRef)(0);
    const isSale = (0,external_react_.useRef)(false);
    const displayBrands = [
        ...brands
    ].sort();
    function handleBrand(event) {
        const { value , checked  } = event.target;
        if (checked) {
            selectedBrands.current.push(value);
        } else {
            selectedBrands.current = selectedBrands.current.filter((item)=>item !== value
            );
        }
    }
    function handleStock(event) {
        stock.current = event.target.checked ? 1 : 0;
    }
    function handleSale(event) {
        isSale.current = event.target.checked;
    }
    function handleSubmit(event) {
        event.preventDefault();
        setFilterOpts({
            id: id,
            brands: selectedBrands.current.length ? selectedBrands.current : brands,
            minPrice: Number(minPrice?.current?.value) || 0,
            maxPrice: Number(maxPrice?.current?.value) || 500000,
            quantity: stock.current,
            isSale: isSale.current
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: (Filter_module_default()).form,
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                children: "Brands"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(Filter_module_default()).checkbox} ${(Filter_module_default()).filter}`,
                children: displayBrands.map((brand)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "checkbox",
                                value: brand,
                                onChange: handleBrand
                            }),
                            brand
                        ]
                    }, brand)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                children: "Price Range"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Filter_module_default()).price,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: (Filter_module_default()).input,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "min",
                                children: "Min"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "number",
                                id: "min",
                                min: 0,
                                max: 500000,
                                ref: minPrice
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: (Filter_module_default()).input,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "max",
                                children: "Max"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "number",
                                id: "max",
                                min: 0,
                                max: 500000,
                                ref: maxPrice
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                children: "Other"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(Filter_module_default()).checkbox} ${(Filter_module_default()).filter}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "checkbox",
                                name: "stock",
                                onChange: handleStock
                            }),
                            "In Stock"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "checkbox",
                                name: "sale",
                                onChange: handleSale
                            }),
                            "On Sale"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "submit",
                children: "Apply"
            })
        ]
    });
};
/* harmony default export */ const components_Filter = (Filter);

// EXTERNAL MODULE: ./components/Loading.tsx
var Loading = __webpack_require__(2459);
// EXTERNAL MODULE: ./components/OrderBy.tsx
var OrderBy = __webpack_require__(3287);
// EXTERNAL MODULE: ./components/Pagination.tsx
var Pagination = __webpack_require__(9149);
// EXTERNAL MODULE: ./styles/Category.module.css
var Category_module = __webpack_require__(1554);
var Category_module_default = /*#__PURE__*/__webpack_require__.n(Category_module);
;// CONCATENATED MODULE: ./pages/category/[id].tsx












var ProductOrderByInput;
(function(ProductOrderByInput) {
    ProductOrderByInput["title_ASC"] = "title_ASC";
    ProductOrderByInput["price_ASC"] = "price_ASC";
    ProductOrderByInput["price_DESC"] = "price_DESC";
})(ProductOrderByInput || (ProductOrderByInput = {}));
const CategoryPage = ({ category , total  })=>{
    const { 0: products , 1: setProducts  } = (0,external_react_.useState)(category.products);
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const { 0: isFilterOpen , 1: setIsFilterOpen  } = (0,external_react_.useState)(false);
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(0);
    const { 0: filterTotal , 1: setFilterTotal  } = (0,external_react_.useState)(total);
    const { 0: orderBy , 1: setOrderBy  } = (0,external_react_.useState)(ProductOrderByInput.title_ASC);
    const { 0: filterOpts , 1: setFilterOpts  } = (0,external_react_.useState)({
        id: category.id,
        brands: category.brands,
        minPrice: 0,
        maxPrice: 5000,
        quantity: 0,
        isSale: false,
        orderBy: orderBy,
        skip: 10 * page
    });
    const [runQuery, { data: data1  }] = (0,client_.useLazyQuery)(queries/* GET_CATEGORY_FILTERED */.u3, {
        variables: filterOpts,
        fetchPolicy: "no-cache",
        notifyOnNetworkStatusChange: true,
        onCompleted: (data)=>{
            if (data.productsConnection.aggregate.count <= 10) {
                setPage(0);
            }
            setFilterTotal(data.productsConnection.aggregate.count);
            setProducts(data.products);
            setIsLoading(false);
        }
    });
    const handleShowFilter = ()=>{
        if (isFilterOpen) {
            document.body.style.overflow = "visible";
        } else {
            document.body.style.overflow = "hidden";
        }
        setIsFilterOpen(!isFilterOpen);
    };
    const reloadData = (0,external_react_.useCallback)(()=>{
        setIsLoading(true);
        if (isFilterOpen) {
            document.body.style.overflow = "unset";
            setIsFilterOpen(false);
        }
        runQuery({
            variables: {
                ...filterOpts,
                orderBy: orderBy,
                skip: 10 * page
            }
        });
    }, [
        orderBy,
        filterOpts,
        page
    ]);
    (0,external_react_.useEffect)(()=>{
        reloadData();
    }, [
        reloadData
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                    children: [
                        "Tech Store | ",
                        category.name
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Category_module_default()).title,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: category.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (Category_module_default()).filterbtn,
                        onClick: handleShowFilter,
                        children: isFilterOpen ? "Close" : "Filter"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Category_module_default()).flex,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(Category_module_default()).filter} ${isFilterOpen ? (Category_module_default()).open : (Category_module_default()).close}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Filter, {
                            id: category.id,
                            brands: category.brands,
                            setFilterOpts: setFilterOpts
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Category_module_default()).products,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(OrderBy/* default */.Z, {
                                setOrderBy: setOrderBy
                            }),
                            isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(Loading/* default */.Z, {}) : products.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Category_module_default()).grid,
                                        children: products.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                                product: product
                                            }, product.id)
                                        )
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Pagination/* default */.Z, {
                                        setPage: setPage,
                                        total: filterTotal
                                    })
                                ]
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "No results."
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    const id = context?.params?.id;
    const { data  } = await apollo_client/* client.query */.L.query({
        query: queries/* GET_CATEGORY */.jf,
        variables: {
            id: id,
            catId: id
        }
    });
    return {
        props: {
            category: data.category,
            total: data.productsConnection.aggregate.count
        }
    };
};
/* harmony default export */ const _id_ = (CategoryPage);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,330,221,583,241], () => (__webpack_exec__(4718)));
module.exports = __webpack_exports__;

})();