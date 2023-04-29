"use strict";
exports.id = 912;
exports.ids = [912];
exports.modules = {

/***/ 4912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_m": () => (/* binding */ toggleFavProduct)
/* harmony export */ });
/* unused harmony export setUserLogged */
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    user: {
        name: "Lucas Pulliese"
    },
    favProducts: []
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "user",
    initialState,
    reducers: {
        toggleFavProduct (state, action) {
            const index = state.favProducts.includes(action.payload.id);
            if (!index) {
                state.favProducts.push(action.payload.id);
                return;
            }
            (0,lodash__WEBPACK_IMPORTED_MODULE_0__.remove)(state.favProducts, (id)=>id === action.payload.id
            );
        },
        setUserLogged (state, action) {
            const index = state.favProducts.includes(action.payload.id);
            if (!index) {
                state.favProducts.push(action.payload.id);
                return {
                    ...state,
                    favProducts: state.favProducts
                };
            }
            (0,lodash__WEBPACK_IMPORTED_MODULE_0__.remove)(state.favProducts, (id)=>id === action.payload.id
            );
            return {
                ...state,
                favProducts: state.favProducts
            };
        }
    }
});
const { toggleFavProduct , setUserLogged  } = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);


/***/ })

};
;