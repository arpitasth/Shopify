module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/products.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/productList.js":
/*!***********************************!*\
  !*** ./components/productList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! interweave */ "interweave");
/* harmony import */ var interweave__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(interweave__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "E:\\Projects\\shopify\\ShopifyApps\\Elena\\components\\productList.js";




const ProductList = props => {
  const {
    products
  } = props;
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: pid,
    1: setID
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);

  const handleChange = () => setActive(!active);

  const deleteTitle = `Delete the product with Id:${pid}`;

  if (!products || products.length == 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "No Products Available"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 22
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 16
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      open: active,
      onClose: handleChange,
      title: deleteTitle,
      primaryAction: {
        content: 'Delete',
        onAction: () => {
          fetch(`/deleteProduct?id=${pid}`).then(res => console.log(res));
        }
      },
      secondaryActions: [{
        content: 'Cancel',
        onAction: handleChange
      }],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Modal"].Section, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextContainer"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Are you sure you want to delete?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["ResourceList"], {
        resourceName: {
          singular: 'product',
          plural: 'products'
        },
        items: products,
        renderItem: product => {
          const {
            id,
            title,
            body_html
          } = product;
          const url = product.image.src;

          const media = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"], {
            product: true,
            source: url,
            alt: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 35
          }, undefined);

          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["ResourceItem"], {
            id: id,
            title: title,
            media: media,
            accessibilityLabel: `View details for ${title}`,
            shortcutActions: {
              content: 'Delete',
              onAction: () => {
                setID(id);
                handleChange();
              }
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextStyle"], {
                variation: "strong",
                children: title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(interweave__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
              content: body_html
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 29
          }, undefined);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_productList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/productList */ "./components/productList.js");

var _jsxFileName = "E:\\Projects\\shopify\\ShopifyApps\\Elena\\pages\\products.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Products extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      items: []
    });
  }

  componentDidMount() {
    fetch('/getProducts').then(res => res.json()).then(items => {
      this.setState({
        items
      });
    });
  }

  render() {
    let products = this.state.items.products;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
        title: "Products",
        description: "List of products",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_productList__WEBPACK_IMPORTED_MODULE_3__["default"], {
          products: products
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "interweave":
/*!*****************************!*\
  !*** external "interweave" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("interweave");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9kdWN0TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW50ZXJ3ZWF2ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiUHJvZHVjdExpc3QiLCJwcm9wcyIsInByb2R1Y3RzIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwidXNlU3RhdGUiLCJwaWQiLCJzZXRJRCIsImhhbmRsZUNoYW5nZSIsImRlbGV0ZVRpdGxlIiwibGVuZ3RoIiwiY29udGVudCIsIm9uQWN0aW9uIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInNpbmd1bGFyIiwicGx1cmFsIiwicHJvZHVjdCIsImlkIiwidGl0bGUiLCJib2R5X2h0bWwiLCJ1cmwiLCJpbWFnZSIsInNyYyIsIm1lZGlhIiwiUHJvZHVjdHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIml0ZW1zIiwiY29tcG9uZW50RGlkTW91bnQiLCJqc29uIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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QUMscURBQUQ7QUFBQSw2QkFDSSxxRUFBQyx1REFBRCxDQUFRLGdCQUFSO0FBQ0ksYUFBSyxFQUFDLFVBRFY7QUFFSSxtQkFBVyxFQUFDLGtCQUZoQjtBQUFBLCtCQUlJLHFFQUFDLCtEQUFEO0FBQWEsa0JBQVEsRUFBRUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFVSDs7QUE1QmtDOztBQStCeEIwQix1RUFBZixFOzs7Ozs7Ozs7OztBQ3BDQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9wcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcHJvZHVjdHMuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhcmQsIFJlc291cmNlTGlzdCwgUmVzb3VyY2VJdGVtLCBUaHVtYm5haWwsIFRleHRTdHlsZSwgTW9kYWwsIFRleHRDb250YWluZXIgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHsgTWFya3VwIH0gZnJvbSAnaW50ZXJ3ZWF2ZSc7XHJcblxyXG5jb25zdCBQcm9kdWN0TGlzdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0cyB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwaWQsIHNldElEXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHNldEFjdGl2ZSghYWN0aXZlKTtcclxuICAgIGNvbnN0IGRlbGV0ZVRpdGxlID0gYERlbGV0ZSB0aGUgcHJvZHVjdCB3aXRoIElkOiR7cGlkfWBcclxuXHJcbiAgICBpZighcHJvZHVjdHMgfHwgcHJvZHVjdHMubGVuZ3RoID09IDApe1xyXG4gICAgICAgIHJldHVybiA8Q2FyZD48cD5ObyBQcm9kdWN0cyBBdmFpbGFibGU8L3A+PC9DYXJkPlxyXG4gICAgfVxyXG4gXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgb3Blbj17YWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2RlbGV0ZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdEZWxldGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKGAvZGVsZXRlUHJvZHVjdD9pZD0ke3BpZH1gKS50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5QWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8VGV4dENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT9cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L1RleHRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLlNlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlTmFtZT17e3Npbmd1bGFyOiAncHJvZHVjdCcsIHBsdXJhbDogJ3Byb2R1Y3RzJ319XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3Byb2R1Y3RzfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2lkLCB0aXRsZSwgYm9keV9odG1sfSA9IHByb2R1Y3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gcHJvZHVjdC5pbWFnZS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaWEgPSA8VGh1bWJuYWlsIHByb2R1Y3Qgc291cmNlPXt1cmx9IGFsdD17dGl0bGV9IC8+O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhPXttZWRpYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7dGl0bGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG9ydGN1dEFjdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ0RlbGV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJRChpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj57dGl0bGV9PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFya3VwIGNvbnRlbnQ9e2JvZHlfaHRtbH0+PC9NYXJrdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDsiLCJpbXBvcnQgeyBDYXJkLCBMYXlvdXQsIFBhZ2UgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvcHJvZHVjdExpc3QnO1xyXG5cclxuXHJcbmNsYXNzIFByb2R1Y3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBpdGVtczogW11cclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBmZXRjaCgnL2dldFByb2R1Y3RzJykudGhlbihcclxuICAgICAgICAgICAgKHJlcykgPT4gcmVzLmpzb24oKVxyXG4gICAgICAgICkudGhlbihcclxuICAgICAgICAgICAgKGl0ZW1zKSA9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2l0ZW1zfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7IFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgcHJvZHVjdHMgPSB0aGlzLnN0YXRlLml0ZW1zLnByb2R1Y3RzO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPFBhZ2U+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlByb2R1Y3RzXCJcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkxpc3Qgb2YgcHJvZHVjdHNcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0TGlzdCBwcm9kdWN0cz17cHJvZHVjdHN9PjwvUHJvZHVjdExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG4gICAgICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW50ZXJ3ZWF2ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==