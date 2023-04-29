(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3563:
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
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
// EXTERNAL MODULE: ./store/reducers/cart.ts
var cart = __webpack_require__(1502);
// EXTERNAL MODULE: ./store/reducers/user.ts
var user = __webpack_require__(4912);
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: ./store/index.ts






//COMBINING ALL REDUCERS
const reducer = {
    cart: cart/* default */.ZP,
    user: user/* default */.ZP
};
const rootReducer = (0,toolkit_.combineReducers)({
    cart: cart/* default */.ZP,
    user: user/* default */.ZP
});
let store = (0,toolkit_.configureStore)({
    reducer
});
const makeStore = ({ isServer  })=>{
    if (isServer) {
        //If it's on server side, create a store
        return store = (0,toolkit_.configureStore)({
            reducer
        });
    } else {
        //If it's on client side, create a store which will persist
        const persistConfig = {
            key: "shoppingcart",
            whitelist: [
                "cart",
                "user"
            ],
            storage: (storage_default())
        };
        const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, rootReducer); // Create a new reducer with our existing reducer
        store = (0,toolkit_.configureStore)({
            reducer: persistedReducer
        }); // Creating the store again
        // @ts-ignore:next-line
        store.__persistor = (0,external_redux_persist_namespaceObject.persistStore)(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature
        return store;
    }
};
// export an assembled wrapper
// @ts-ignore:next-line
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore, {
    debug: true
});

// EXTERNAL MODULE: ./node_modules/swiper/swiper.scss
var swiper = __webpack_require__(9076);
// EXTERNAL MODULE: ./utils/gtag.ts
var gtag = __webpack_require__(687);
;// CONCATENATED MODULE: ./pages/_app.tsx




// global styles





const isProduction = "production" === "production";
// only events on production
if (isProduction) {
    // Notice how we track pageview when route is changed
    router_default().events.on("routeChangeComplete", (url)=>gtag/* pageview */.LV(url)
    );
}
const MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    })
;
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));


/***/ }),

/***/ 687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LV": () => (/* binding */ pageview),
/* harmony export */   "vt": () => (/* binding */ GA_TRACKING_ID)
/* harmony export */ });
/* unused harmony export event */
const GA_TRACKING_ID = "UA-114361661-6" // This is your GA Tracking ID
;
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url)=>{
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url
    });
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({ action , category , label , value  })=>{
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value
    });
};


/***/ }),

/***/ 9076:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

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
var __webpack_exports__ = __webpack_require__.X(0, [912,502], () => (__webpack_exec__(3563)));
module.exports = __webpack_exports__;

})();