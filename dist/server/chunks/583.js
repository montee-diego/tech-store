exports.id = 583;
exports.ids = [583];
exports.modules = {

/***/ 2752:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__xuvEK",
	"image": "Card_image__ofF0E",
	"info": "Card_info__ofjfT",
	"flex": "Card_flex__OcFZ3",
	"sale": "Card_sale__ODjp4",
	"oldprice": "Card_oldprice__PRbPp",
	"save": "Card_save__UXVQg",
	"nostock": "Card_nostock__2zLWb"
};


/***/ }),

/***/ 6050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5221);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_Card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2752);
/* harmony import */ var _styles_components_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Card_module_css__WEBPACK_IMPORTED_MODULE_2__);




const Card = ({ product  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/product/${product.id}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: (_styles_components_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_components_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().image),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: product.image.url,
                        alt: "product image"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_components_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().info),
                    children: [
                        product.quantity < 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_components_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().nostock),
                            children: "NO STOCK"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_components_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().flex),
                            children: product.isOnSale ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: (_styles_components_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().sale),
                                        children: (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .displayPrice */ .ED)(product.price)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: (_styles_components_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().oldprice),
                                        children: (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .displayPrice */ .ED)(product.listPrice)
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_styles_components_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().save),
                                        children: [
                                            "Save ",
                                            (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .displayDiscount */ .iJ)(product.listPrice, product.price),
                                            "%"
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .displayPrice */ .ED)(product.price)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: product.title
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 7401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gn": () => (/* binding */ GET_HOMEPAGE),
/* harmony export */   "jf": () => (/* binding */ GET_CATEGORY),
/* harmony export */   "to": () => (/* binding */ GET_SEARCH),
/* harmony export */   "u0": () => (/* binding */ GET_PRODUCT_BY_ID),
/* harmony export */   "u3": () => (/* binding */ GET_CATEGORY_FILTERED)
/* harmony export */ });
/* unused harmony export PRODUCT_CARD */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const PRODUCT_CARD = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment ProductCard on Product {
    brand
    id
    image {
      url
    }
    isOnSale
    listPrice
    price
    quantity
    title
  }
`;
const GET_HOMEPAGE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  ${PRODUCT_CARD}
  query GetCategories($skip: Int = 0) {
    categories(orderBy: name_ASC) {
      icon {
        url
      }
      id
      name
    }
    popular: products(where: { isOnSale: false }, first: 6, skip: $skip) {
      ...ProductCard
    }
    deals: products(where: { isOnSale: true }, first: 6, skip: $skip) {
      ...ProductCard
    }
  }
`;
const GET_CATEGORY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  ${PRODUCT_CARD}
  query GetCategory($id: ID = "", $catId: String! = "") {
    category(where: { id: $id }) {
      id
      name
      brands
      products(first: 10) {
        ...ProductCard
      }
    }
    productsConnection(where: { categoryId: $catId }) {
      aggregate {
        count
      }
    }
  }
`;
const GET_CATEGORY_FILTERED = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  ${PRODUCT_CARD}
  query GetCategoryFiltered(
    $id: String! = ""
    $brands: [String!] = []
    $minPrice: Float = 0
    $maxPrice: Float = 0
    $quantity: Int = 0
    $isSale: Boolean = false
    $orderBy: ProductOrderByInput
    $skip: Int = 0
  ) {
    products(
      where: {
        categoryId: $id
        brand_in: $brands
        AND: [
          { quantity_gte: $quantity }
          { OR: [{ isOnSale: $isSale }, { isOnSale_not: false }] }
          { price_gte: $minPrice, price_lte: $maxPrice }
        ]
      }
      orderBy: $orderBy
      first: 10
      skip: $skip
    ) {
      ...ProductCard
    }
    productsConnection(
      where: {
        categoryId: $id
        brand_in: $brands
        AND: [
          { quantity_gte: $quantity }
          { OR: [{ isOnSale: $isSale }, { isOnSale_not: false }] }
          { price_gte: $minPrice, price_lte: $maxPrice }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;
const GET_PRODUCT_BY_ID = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  ${PRODUCT_CARD}
  query GetProductByID($id: ID = "") {
    product(where: { id: $id }) {
      about {
        html
      }
      brand
      category {
        ... on Category {
          id
          name
          products(where: { NOT: { id: $id } }, first: 4) {
            ...ProductCard
          }
        }
      }
      description
      id
      image {
        url
      }
      isOnSale
      listPrice
      price
      quantity
      sellers {
        id
        isOfficial
        name
      }
      title
    }
  }
`;
const GET_SEARCH = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  ${PRODUCT_CARD}
  query GetSearch(
    $query: String = ""
    $orderBy: ProductOrderByInput
    $skip: Int = 0
  ) {
    products(
      where: { _search: $query }
      orderBy: $orderBy
      first: 10
      skip: $skip
    ) {
      ...ProductCard
    }
    productsConnection(where: { _search: $query }, first: 10, skip: $skip) {
      aggregate {
        count
      }
    }
  }
`;


/***/ })

};
;