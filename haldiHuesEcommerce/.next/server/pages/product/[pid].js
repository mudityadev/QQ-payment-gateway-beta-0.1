"use strict";
(() => {
var exports = {};
exports.id = 260;
exports.ids = [260];
exports.modules = {

/***/ 5008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _pid_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/footer/index.tsx
var footer = __webpack_require__(8173);
// EXTERNAL MODULE: ./layouts/Main.tsx
var Main = __webpack_require__(1659);
// EXTERNAL MODULE: ./components/breadcrumb/index.tsx
var breadcrumb = __webpack_require__(2418);
// EXTERNAL MODULE: ./components/products-featured/index.tsx + 1 modules
var products_featured = __webpack_require__(9952);
;// CONCATENATED MODULE: ./components/product-single/gallery/index.tsx

const Gallery = ({ images  })=>{
    const featImage = images[0];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "product-gallery",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "product-gallery__thumbs",
                children: images.map((image)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "product-gallery__thumb",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: image,
                            alt: ""
                        })
                    }, image)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "product-gallery__image",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: featImage,
                    alt: ""
                })
            })
        ]
    });
};
/* harmony default export */ const gallery = (Gallery);

// EXTERNAL MODULE: ./utils/data/products-colors.ts
var products_colors = __webpack_require__(9494);
// EXTERNAL MODULE: ./utils/data/products-sizes.ts
var products_sizes = __webpack_require__(5250);
// EXTERNAL MODULE: ./components/products-filter/form-builder/checkbox-color/index.tsx
var checkbox_color = __webpack_require__(1030);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: ./store/reducers/cart.ts
var cart = __webpack_require__(1502);
// EXTERNAL MODULE: ./store/reducers/user.ts
var user = __webpack_require__(4912);
;// CONCATENATED MODULE: ./components/product-single/content/index.tsx









const Content = ({ product  })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { 0: count , 1: setCount  } = (0,external_react_.useState)(1);
    const { 0: color , 1: setColor  } = (0,external_react_.useState)("");
    const { 0: itemSize , 1: setItemSize  } = (0,external_react_.useState)("");
    const onColorSet = (e)=>setColor(e)
    ;
    const onSelectChange = (e)=>setItemSize(e.target.value)
    ;
    const { favProducts  } = (0,external_react_redux_.useSelector)((state)=>state.user
    );
    const isFavourite = (0,external_lodash_.some)(favProducts, (productId)=>productId === product.id
    );
    const toggleFav = ()=>{
        dispatch((0,user/* toggleFavProduct */._m)({
            id: product.id
        }));
    };
    const addToCart = ()=>{
        const productToSave = {
            id: product.id,
            name: product.name,
            thumb: product.images ? product.images[0] : "",
            price: product.currentPrice,
            count: count,
            color: color,
            size: itemSize
        };
        const productStore = {
            count,
            product: productToSave
        };
        dispatch((0,cart/* addProduct */.gK)(productStore));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "product-content",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "product-content__intro",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                        className: "product__id",
                        children: [
                            "Product ID:",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            product.id
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "product-on-sale",
                        children: "Sale"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "product__name",
                        children: product.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "product__prices",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                children: [
                                    "$",
                                    product.currentPrice
                                ]
                            }),
                            product.discount && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    "$",
                                    product.price
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "product-content__filters",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "product-filter-item",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: "Color:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "checkbox-color-wrapper",
                                children: products_colors/* default.map */.Z.map((type)=>/*#__PURE__*/ jsx_runtime_.jsx(checkbox_color/* default */.Z, {
                                        type: "radio",
                                        name: "product-color",
                                        color: type.color,
                                        valueName: type.label,
                                        onChange: onColorSet
                                    }, type.id)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "product-filter-item",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                children: [
                                    "Size: ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: "See size table"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "checkbox-color-wrapper",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "select-wrapper",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                        onChange: onSelectChange,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                children: "Choose size"
                                            }),
                                            products_sizes/* default.map */.Z.map((type)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: type.label,
                                                    children: type.label
                                                })
                                            )
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "product-filter-item",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: "Quantity:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "quantity-buttons",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "quantity-button",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "button",
                                                onClick: ()=>setCount(count - 1)
                                                ,
                                                className: "quantity-button__btn",
                                                children: "-"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: count
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "button",
                                                onClick: ()=>setCount(count + 1)
                                                ,
                                                className: "quantity-button__btn",
                                                children: "+"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "submit",
                                        onClick: ()=>addToCart()
                                        ,
                                        className: "btn btn--rounded btn--yellow",
                                        children: "Add to cart"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        onClick: toggleFav,
                                        className: `btn-heart ${isFavourite ? "btn-heart--active" : ""}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "icon-heart"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const content = (Content);

;// CONCATENATED MODULE: ./components/product-single/description/index.tsx

const Description = ({ show  })=>{
    const style = {
        display: show ? "flex" : "none"
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        style: style,
        className: "product-single__description",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "product-description-block",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "icon-cart"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: "Details and product description"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "White Summer Vibes T-shirt in the uiKit line with a colorful print. ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "Made of jersey cotton. T-shirt fits perfectly with jeans, pants or shorts."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "product-description-block",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "icon-cart"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: "Details and product description"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "White Summer Vibes T-shirt in the uiKit line with a colorful print. ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "Made of jersey cotton. T-shirt fits perfectly with jeans, pants or shorts."
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const description = (Description);

;// CONCATENATED MODULE: external "react-rater"
const external_react_rater_namespaceObject = require("react-rater");
var external_react_rater_default = /*#__PURE__*/__webpack_require__.n(external_react_rater_namespaceObject);
;// CONCATENATED MODULE: ./utils/markup.ts
const createMarkup = (content)=>{
    return {
        __html: content
    };
};
/* harmony default export */ const markup = (createMarkup);

;// CONCATENATED MODULE: ./components/product-single/reviews/reviews-list/index.tsx



const ReviewsList = ({ reviews  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "reviews-list",
        children: reviews.map((review, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "review-item",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "review__avatar",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: review.avatar,
                            alt: "avatar"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "review__content",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: review.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_rater_default()), {
                                total: 5,
                                interactive: false,
                                rating: review.punctuation
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "review__comment",
                                dangerouslySetInnerHTML: markup(review.description)
                            })
                        ]
                    })
                ]
            }, index)
        )
    });
};
/* harmony default export */ const reviews_list = (ReviewsList);

;// CONCATENATED MODULE: ./components/product-single/reviews/punctuation/index.tsx


const Punctuation = ({ votes , punctuation , countOpinions  })=>{
    const percentageBar = (count)=>{
        return count * 100 / countOpinions;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "product-punctuation",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "product-punctuation__values",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: punctuation
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_rater_default()), {
                        total: 5,
                        interactive: false,
                        rating: punctuation
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "icon-avatar"
                            }),
                            countOpinions,
                            " all opinions"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "product-punctuation__rates",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "punctuations-lists",
                    children: votes.map((vote)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "punctuation-item",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((external_react_rater_default()), {
                                    total: 1,
                                    interactive: false,
                                    rating: 1
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: vote.value
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "punctuation-item__bar",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        style: {
                                            width: percentageBar(vote.count) + "%"
                                        },
                                        className: "punctuation-item__bar__current"
                                    })
                                })
                            ]
                        }, vote.count)
                    )
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "punctuation-btn-wrapper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "button",
                    className: "btn btn--rounded btn--yellow",
                    children: "Add opinion"
                })
            })
        ]
    });
};
/* harmony default export */ const punctuation = (Punctuation);

;// CONCATENATED MODULE: ./components/product-single/reviews/index.tsx



const Reviews = ({ show , product  })=>{
    const style = {
        display: show ? "flex" : "none"
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        style: style,
        className: "product-single__reviews",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(punctuation, {
                punctuation: product.punctuation.punctuation,
                countOpinions: product.punctuation.countOpinions,
                votes: product.punctuation.votes
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(reviews_list, {
                reviews: product.reviews
            })
        ]
    });
};
/* harmony default export */ const reviews = (Reviews);

// EXTERNAL MODULE: ./utils/server.ts
var server = __webpack_require__(9708);
;// CONCATENATED MODULE: ./pages/product/[pid].tsx











const getServerSideProps = async ({ query  })=>{
    const pid = query.pid;
    const res = await fetch(`${server/* server */.f}/api/product/${pid}`);
    const product = await res.json();
    return {
        props: {
            product
        }
    };
};
const Product = ({ product  })=>{
    const { 0: showBlock , 1: setShowBlock  } = (0,external_react_.useState)("description");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Main/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(breadcrumb/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "product-single",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "product-single__content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(gallery, {
                                    images: product.images
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(content, {
                                    product: product
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "product-single__info",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "product-single__info-btns",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            onClick: ()=>setShowBlock("description")
                                            ,
                                            className: `btn btn--rounded ${showBlock === "description" ? "btn--active" : ""}`,
                                            children: "Description"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            onClick: ()=>setShowBlock("reviews")
                                            ,
                                            className: `btn btn--rounded ${showBlock === "reviews" ? "btn--active" : ""}`,
                                            children: "Reviews (2)"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(description, {
                                    show: showBlock === "description"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(reviews, {
                                    product: product,
                                    show: showBlock === "reviews"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "product-single-page",
                children: /*#__PURE__*/ jsx_runtime_.jsx(products_featured/* default */.Z, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const _pid_ = (Product);


/***/ }),

/***/ 9708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ server)
/* harmony export */ });
const dev = "production" !== "production";
const server = dev ? "http://localhost:3001" : "https://next-ecommerce-front.vercel.app";


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3630:
/***/ ((module) => {

module.exports = require("swiper/react");

/***/ }),

/***/ 549:
/***/ ((module) => {

module.exports = require("swr");

/***/ }),

/***/ 6135:
/***/ ((module) => {

module.exports = require("use-onclickoutside");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,778,912,66,502,952,680], () => (__webpack_exec__(5008)));
module.exports = __webpack_exports__;

})();