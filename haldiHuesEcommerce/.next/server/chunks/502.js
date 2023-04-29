"use strict";
exports.id = 502;
exports.ids = [502];
exports.modules = {

/***/ 1502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "gK": () => (/* binding */ addProduct),
/* harmony export */   "kM": () => (/* binding */ setCount),
/* harmony export */   "kh": () => (/* binding */ removeProduct)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    cartItems: []
};
const indexSameProduct = (state, action)=>{
    const sameProduct = (product)=>product.id === action.id && product.color === action.color && product.size === action.size
    ;
    return state.cartItems.findIndex(sameProduct);
};
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action)=>{
            const cartItems = state.cartItems;
            // find index of product
            const index = indexSameProduct(state, action.payload.product);
            if (index !== -1) {
                cartItems[index].count += action.payload.count;
                return;
            }
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    action.payload.product
                ]
            };
        },
        removeProduct (state, action) {
            // find index of product
            state.cartItems.splice(indexSameProduct(state, action.payload), 1);
        },
        setCount (state, action) {
            // find index and add new count on product count
            const indexItem = indexSameProduct(state, action.payload.product);
            state.cartItems[indexItem].count = action.payload.count;
        }
    }
});
const { addProduct , removeProduct , setCount  } = cartSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);


/***/ })

};
;