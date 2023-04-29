"use strict";
exports.id = 680;
exports.ids = [680];
exports.modules = {

/***/ 2418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Breadcrumb = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "breadcrumb",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "breadcrumb-list",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "icon-home"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: "All Products"
                    })
                ]
            })
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);


/***/ }),

/***/ 1030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CheckboxColor = ({ color , name , type ="checkbox" , onChange , valueName  })=>{
    const onSelect = (e)=>{
        if (onChange) {
            onChange(e.target.getAttribute("data-name"));
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
        htmlFor: color + "-" + name,
        className: `checkbox-color`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                onChange: onSelect,
                value: color,
                "data-name": valueName,
                name: name,
                type: type,
                id: color + "-" + name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "checkbox__check",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "checkbox__color",
                    style: {
                        backgroundColor: color
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxColor);


/***/ }),

/***/ 9494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export productsColors */
const productsColors = [
    {
        id: "1",
        label: "Black",
        color: "#000000"
    },
    {
        id: "2",
        label: "Brown",
        color: "#6F3E18"
    },
    {
        id: "3",
        label: "Yellow",
        color: "#D4BE8D"
    },
    {
        id: "4",
        label: "Gray",
        color: "#838383"
    },
    {
        id: "5",
        label: "White",
        color: "#F3F3F3"
    },
    {
        id: "6",
        label: "Blue",
        color: "#0F73AD"
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsColors);


/***/ }),

/***/ 5250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export productsSizes */
const productsSizes = [
    {
        id: "1",
        label: "XS"
    },
    {
        id: "2",
        label: "S"
    },
    {
        id: "3",
        label: "M"
    },
    {
        id: "4",
        label: "L"
    },
    {
        id: "5",
        label: "XL"
    },
    {
        id: "6",
        label: "XXL"
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsSizes);


/***/ })

};
;