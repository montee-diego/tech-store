"use strict";
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 5221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ED": () => (/* binding */ displayPrice),
/* harmony export */   "Xq": () => (/* binding */ addToCart),
/* harmony export */   "h2": () => (/* binding */ removeFromCart),
/* harmony export */   "iJ": () => (/* binding */ displayDiscount),
/* harmony export */   "xT": () => (/* binding */ getRandomNumber),
/* harmony export */   "xu": () => (/* binding */ updateCart)
/* harmony export */ });
const displayPrice = (price)=>{
    return Intl.NumberFormat(undefined, {
        style: "currency",
        currency: "EUR"
    }).format(price);
};
const displayDiscount = (price, priceOnSale)=>{
    return Math.round(Math.abs((priceOnSale - price) / price) * 100);
};
const getRandomNumber = (min, max)=>{
    return Math.round(Math.random() * (max - min) + min);
};
const addToCart = (product)=>{
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let indexInCart = cart.findIndex((item)=>item.product.id === product.product.id
    );
    if (indexInCart !== -1) {
        cart[indexInCart].quantity += product.quantity;
    } else {
        cart = [
            ...cart,
            product
        ];
    }
    localStorage.setItem("cart", JSON.stringify(cart));
};
const removeFromCart = (id)=>{
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let updatedCart = cart.filter((item)=>item.product.id !== id
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
};
const updateCart = (id, quantity)=>{
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let indexInCart = cart.findIndex((item)=>item.product.id === id
    );
    if (indexInCart !== -1) {
        cart[indexInCart].quantity = quantity;
    } else {
        return;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
};


/***/ })

};
;