(() => {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 1103:
/***/ ((module) => {

// Exports
module.exports = {
	"product": "Product_product__03_Hw",
	"details": "Product_details__OMEfA",
	"image": "Product_image__F2aS0",
	"info": "Product_info__NOQ1g",
	"description": "Product_description__wwpon",
	"oldprice": "Product_oldprice__0qnMb",
	"sale": "Product_sale__DmkZb",
	"quantity": "Product_quantity__TGWXW",
	"stock": "Product_stock__V_HU4",
	"nostock": "Product_nostock__EzFtr",
	"purchase": "Product_purchase__MHGtk",
	"added": "Product_added__CEtDa",
	"about": "Product_about__DndcK",
	"line": "Product_line__kP8f0",
	"aboutlist": "Product_aboutlist__LZ0_K",
	"grid": "Product_grid__tv0GF"
};


/***/ }),

/***/ 6245:
/***/ ((module) => {

// Exports
module.exports = {
	"flex": "Location_flex__9O4X5"
};


/***/ }),

/***/ 7999:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "NavLink_link__Jy7vb"
};


/***/ }),

/***/ 3711:
/***/ ((module) => {

// Exports
module.exports = {
	"seller": "Seller_seller__zZdBw"
};


/***/ }),

/***/ 387:
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
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./services/apollo-client.tsx
var apollo_client = __webpack_require__(8330);
// EXTERNAL MODULE: ./utils.tsx
var utils = __webpack_require__(5221);
// EXTERNAL MODULE: ./services/queries.tsx
var queries = __webpack_require__(7401);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/Card.tsx
var Card = __webpack_require__(6050);
// EXTERNAL MODULE: ./components/Quantity.tsx
var Quantity = __webpack_require__(1955);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./styles/components/NavLink.module.css
var NavLink_module = __webpack_require__(7999);
var NavLink_module_default = /*#__PURE__*/__webpack_require__.n(NavLink_module);
;// CONCATENATED MODULE: ./components/NavLink.tsx



const NavLink = ({ href , title  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: (NavLink_module_default()).link,
            children: title
        })
    });
};
/* harmony default export */ const components_NavLink = (NavLink);

// EXTERNAL MODULE: ./styles/components/Location.module.css
var Location_module = __webpack_require__(6245);
var Location_module_default = /*#__PURE__*/__webpack_require__.n(Location_module);
;// CONCATENATED MODULE: ./components/Location.tsx



const Location = ({ id , name , brand  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Location_module_default()).flex,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_NavLink, {
                href: `/category/${id}`,
                title: name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/tech-store/img/chevron-right-solid.svg",
                alt: ">"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: brand
            })
        ]
    });
};
/* harmony default export */ const components_Location = (Location);

// EXTERNAL MODULE: ./styles/components/Seller.module.css
var Seller_module = __webpack_require__(3711);
var Seller_module_default = /*#__PURE__*/__webpack_require__.n(Seller_module);
;// CONCATENATED MODULE: ./components/Seller.tsx


const Seller = ({ seller  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Seller_module_default()).seller,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    "Sold by ",
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: seller.name
                    })
                ]
            }),
            seller.isOfficial && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/tech-store/img/circle-check-solid.svg",
                alt: "&check;"
            })
        ]
    });
};
/* harmony default export */ const components_Seller = (Seller);

// EXTERNAL MODULE: ./styles/Product.module.css
var Product_module = __webpack_require__(1103);
var Product_module_default = /*#__PURE__*/__webpack_require__.n(Product_module);
;// CONCATENATED MODULE: ./pages/product/[id].tsx












const ProductPage = ({ product: product1  })=>{
    const router = (0,router_.useRouter)();
    const { id  } = router.query;
    const isInCart = (0,apollo_client/* cartStore */.i)().findIndex((item)=>item.product.id === product1.id
    ) >= 0;
    const { 0: quantity , 1: setQuantity  } = (0,external_react_.useState)(1);
    const { 0: addedToCart , 1: setAddedToCart  } = (0,external_react_.useState)(isInCart);
    const handlePurchase = (event)=>{
        const productToAdd = {
            product: {
                id: product1.id,
                image: {
                    url: product1.image.url
                },
                price: product1.price,
                quantity: product1.quantity,
                title: product1.title
            },
            quantity: quantity
        };
        (0,utils/* addToCart */.Xq)(productToAdd);
        (0,apollo_client/* cartStore */.i)(JSON.parse(localStorage.getItem("cart") || "[]"));
        setAddedToCart(true);
    };
    const handleInCart = (event)=>{
        event.preventDefault();
        router.push("/cart");
    };
    (0,external_react_.useEffect)(()=>{
        setAddedToCart((0,apollo_client/* cartStore */.i)().findIndex((item)=>item.product.id === product1.id
        ) >= 0);
    }, [
        product1.id
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                    children: [
                        "Tech Store | ",
                        product1.title
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Location, {
                id: product1.category.id,
                name: product1.category.name,
                brand: product1.brand
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Product_module_default()).product,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Product_module_default()).details,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Product_module_default()).image,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: product1.image.url,
                                    alt: product1.title
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Product_module_default()).info,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: product1.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_Seller, {
                                        seller: product1.sellers[0]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (Product_module_default()).description,
                                        children: product1.description
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: product1.isOnSale ? (Product_module_default()).oldprice : "",
                                        children: (0,utils/* displayPrice */.ED)(product1.listPrice)
                                    }),
                                    product1.isOnSale && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                        className: (Product_module_default()).sale,
                                        children: [
                                            (0,utils/* displayPrice */.ED)(product1.price),
                                            " (",
                                            (0,utils/* displayDiscount */.iJ)(product1.listPrice, product1.price),
                                            "%)"
                                        ]
                                    }),
                                    product1.quantity > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (Product_module_default()).quantity,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Quantity/* default */.Z, {
                                                        stock: product1.quantity,
                                                        quantity: quantity,
                                                        setQuantity: setQuantity
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: (Product_module_default()).stock,
                                                        children: [
                                                            product1.quantity,
                                                            " in Stock."
                                                        ]
                                                    })
                                                ]
                                            }),
                                            addedToCart ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: `${(Product_module_default()).purchase} ${(Product_module_default()).added}`,
                                                disabled: product1.quantity < 1,
                                                onClick: handleInCart,
                                                children: "In Cart"
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: (Product_module_default()).purchase,
                                                disabled: product1.quantity < 1,
                                                onClick: handlePurchase,
                                                children: "Purchase"
                                            })
                                        ]
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (Product_module_default()).nostock,
                                        children: "This product is out of stock."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Product_module_default()).about,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "About this product"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Product_module_default()).line
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Product_module_default()).aboutlist,
                                dangerouslySetInnerHTML: {
                                    __html: product1.about.html
                                }
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                className: (Product_module_default()).similar,
                children: [
                    "Browse more ",
                    product1.category.name
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Product_module_default()).grid,
                children: product1.category.products.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                        product: product
                    }, product.id)
                )
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    const id = context?.params?.id;
    const { data  } = await apollo_client/* client.query */.L.query({
        query: queries/* GET_PRODUCT_BY_ID */.u0,
        variables: {
            id: id
        }
    });
    return {
        props: {
            product: data.product
        }
    };
};
/* harmony default export */ const _id_ = (ProductPage);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,330,221,583,955], () => (__webpack_exec__(387)));
module.exports = __webpack_exports__;

})();