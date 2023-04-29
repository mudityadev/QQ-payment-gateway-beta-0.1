"use strict";
(() => {
var exports = {};
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 4966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_data_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7881);
// fake data

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{
    console.log(req);
    // fake loading time
    setTimeout(()=>{
        res.status(200).json(_utils_data_products__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
    }, 800);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [881], () => (__webpack_exec__(4966)));
module.exports = __webpack_exports__;

})();