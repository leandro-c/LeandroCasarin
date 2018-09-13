module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/axios.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getAxiosInstance;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);

function getAxiosInstance(axiosInstance) {
  //TODO better solucion for calls on behalf of client
  if (axiosInstance && axiosInstance.constructor && axiosInstance.constructor.name === 'Axios') return axiosInstance;
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    baseURL: '/api/'
  });
}

/***/ }),

/***/ "./actions/hotels.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gethotels */
/* unused harmony export upsertOnhotels */
/* unused harmony export setearhotels */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axios_js__ = __webpack_require__("./actions/axios.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("./constants.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data__ = __webpack_require__("./data/data.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__data_data__);



function gethotels() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* HOTEL_ON_GET */],
    promise: Object(__WEBPACK_IMPORTED_MODULE_0__axios_js__["a" /* default */])(this).get(__WEBPACK_IMPORTED_MODULE_2__data_data___default.a)
  };
}
function upsertOnhotels(payload) {
  console.log('ACTIONS upsertOnhotels', payload);
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* HOTEL_ON_UPSERT */],
    item: payload,
    promise: Object(__WEBPACK_IMPORTED_MODULE_0__axios_js__["a" /* default */])(this).post('/back/updateHoteles', payload)
  };
}
function setearhotels(value) {
  //console.log('ACTIONS setearConductor')
  return {
    type: __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* HOTEL_ON_SET_FILTER */],
    value: value
  };
}

/***/ }),

/***/ "./components/header.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar__ = __webpack_require__("@material-ui/core/AppBar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar__ = __webpack_require__("@material-ui/core/Toolbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_IconButton__ = __webpack_require__("@material-ui/core/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Menu__ = __webpack_require__("@material-ui/icons/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Menu__);
var _jsxFileName = "/Users/leandrocasarin/Documents/hello-almundo/components/header.jsx";








var styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  }
};

function DenseAppBar(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar___default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar___default.a, {
    variant: "dense",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_IconButton___default.a, {
    className: classes.menuButton,
    color: "blue",
    "aria-label": "Menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "./../assets//images/logo-almundo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography___default.a, {
    variant: "title",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "almundo.com"))));
}

DenseAppBar.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(DenseAppBar));

/***/ }),

/***/ "./components/hotelCard.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_IconButton__ = __webpack_require__("@material-ui/core/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Tooltip__ = __webpack_require__("@material-ui/core/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__textH3__ = __webpack_require__("./components/textH3.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__imageBackgroud__ = __webpack_require__("./components/imageBackgroud.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactjs_popup__ = __webpack_require__("reactjs-popup");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactjs_popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_reactjs_popup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__simpleCardHotel__ = __webpack_require__("./components/simpleCardHotel.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stars_jsx__ = __webpack_require__("./components/stars.jsx");
var _jsxFileName = "/Users/leandrocasarin/Documents/hello-almundo/components/hotelCard.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/* import { MdCreate, MdScreenShare } from 'react-icons/lib/md' */



/* import DeleteIcon from '@material-ui/icons/Delete' */

/* import TiPencil from 'react-icons/lib/ti/pencil' */

/* import DeleteIcon from 'react-icons/lib/ti/trash' */









var contentStyle = {
  maxWidth: "600px",
  width: "90%"
};

var ListCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ListCard, _React$Component);

  function ListCard() {
    _classCallCheck(this, ListCard);

    return _possibleConstructorReturn(this, (ListCard.__proto__ || Object.getPrototypeOf(ListCard)).apply(this, arguments));
  }

  _createClass(ListCard, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          useDefaultCursor = _props.useDefaultCursor,
          hotel = _props.hotel;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()(classes.global, classes.flexRow, classes.radius),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()(classes.imgHotel),
        style: {
          width: '100%',
          maxWidth: 100,
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__imageBackgroud__["a" /* default */], {
        minHeight: 110,
        elevation: 0,
        imageSize: "cover",
        alt: "Nombre del hotel",
        backgroundImage: hotel.image,
        radius: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()(classes.displayFlex, {
          width: '100%'
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          padding: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__stars_jsx__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, hotel.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__textH3__["b" /* TitleH3 */], {
        size: 14,
        content: this.props.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__textH3__["a" /* Text */], {
        size: 11,
        content: this.props.ciudad,
        color: 'black',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__textH3__["a" /* Text */], {
        size: 11,
        content: this.props.fecha,
        color: 'gray',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__textH3__["c" /* TitleSecondary */], {
        content: '$' + hotel.price,
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()(classes.options),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Precio por noche por habitacion"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, '$' + hotel.price)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_reactjs_popup___default.a, {
        trigger: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default.a, {
          color: "blue",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, "Ver hotel"),
        modal: true,
        contentStyle: contentStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__simpleCardHotel__["a" /* default */], {
        hotel: hotel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })))))));
    }
  }]);

  return ListCard;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ListCard.defaultProps = {
  title: 'Hotel de ejemplo Buenos Aires',
  ciudad: 'Buenos Aires',
  fecha: 'del: 7/8 al 15/8',
  precio: '1410',
  imageUrl: 'https://images.pexels.com/photos/449627/pexels-photo-449627.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
};
ListCard.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  ciudad: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  fecha: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  precio: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  imageUrl: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__["withStyles"])(function () {
  return {
    global: {
      backgroundColor: 'white',
      position: 'relative',
      border: '0.5px solid silver',
      height: 'auto'
    },
    imgHotel: {
      '@media (max-width: 600px)': {
        display: 'none'
      }
    },
    radius: {
      borderRadius: 6,
      overflow: 'hidden'
    },
    flexRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch'
    },
    options: {
      position: 'absolute',
      top: 10,
      right: 10
    },
    displayFlex: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'flex-end',
      justifyContent: 'space-between'
    }
  };
})(ListCard));

/***/ }),

/***/ "./components/imageBackgroud.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
var _jsxFileName = "/Users/leandrocasarin/Documents/hello-almundo/components/imageBackgroud.jsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var ImageBackground =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ImageBackground, _React$PureComponent);

  function ImageBackground(props) {
    var _this;

    _classCallCheck(this, ImageBackground);

    _this = _possibleConstructorReturn(this, (ImageBackground.__proto__ || Object.getPrototypeOf(ImageBackground)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "_isMounted", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(_assertThisInitialized(_this), "loadImage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(src) {
        if (_this._isMounted && !_this.state.loaded) {
          var imageObj = new Image();
          imageObj.src = src;

          imageObj.onload = function () {
            _this.setState({
              clase: true,
              loaded: true
            });
          };
        }
      }
    });
    _this.state = {
      clase: false
    };
    return _this;
  }

  _createClass(ImageBackground, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false; // delete this.imageObj
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      this.loadImage(this.props.backgroundImage);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          radiusTr = _props.radiusTr,
          radiusBr = _props.radiusBr,
          backgroundImage = _props.backgroundImage,
          minHeight = _props.minHeight,
          imageSize = _props.imageSize,
          elevation = _props.elevation,
          alt = _props.alt;
      var imageStyles = {
        globalImageBckground: {
          borderTopRightRadius: radiusTr,
          borderBottomRightRadius: radiusBr,
          width: '100%'
        },
        backgroundImage: {
          backgroundImage: "url(".concat(backgroundImage, ")"),
          backgroundSize: imageSize,
          backgroundPosition: 'center'
        },
        minHeight: {
          minHeight: minHeight
        },
        elevation: {
          boxShadow: "0 ".concat(elevation, "px 4px rgba(0,0,0,0.3)")
        },
        displayFlex: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        alt: alt,
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(_defineProperty({}, "".concat(classes.image), this.state.clase)),
        style: _objectSpread({}, imageStyles.globalImageBckground, imageStyles.minHeight, imageStyles.backgroundImage, imageStyles.elevation),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }));
    }
  }]);

  return ImageBackground;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

ImageBackground.defaultProps = {
  radiusBr: 0,
  radiusTr: 0,
  elevation: 0,
  backgroundImage: null,
  alt: null
};
ImageBackground.propTypes = {
  radiusBr: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  radiusTr: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  elevation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  alt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  backgroundImage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  minHeight: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  imageSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired
};

var withStylesProps = function withStylesProps(styles) {
  return function (Component) {
    return function (props) {
      var Comp = Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles(props))(Component);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Comp, _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }));
    };
  };
};

var styles = function styles(props) {
  return {
    image: {
      backgroundImage: "url(".concat(props.backgroundImage, ")!important")
    }
  };
}; // export default withStyles(styles)(ImageBackground)


/* harmony default export */ __webpack_exports__["a"] = (withStylesProps(styles)(ImageBackground));

/***/ }),

/***/ "./components/simpleCardHotel.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Card__ = __webpack_require__("@material-ui/core/Card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_CardActions__ = __webpack_require__("@material-ui/core/CardActions");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_CardActions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_CardActions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_CardContent__ = __webpack_require__("@material-ui/core/CardContent");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_CardContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_CardContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_CardMedia__ = __webpack_require__("@material-ui/core/CardMedia");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_CardMedia___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_CardMedia__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography__);
var _jsxFileName = "/Users/leandrocasarin/Documents/hello-almundo/components/simpleCardHotel.jsx";









var styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  }
};

function SimpleCardHotel(props) {
  var classes = props.classes,
      hotel = props.hotel;
  console.log('hotel', hotel.name);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Card___default.a, {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_CardMedia___default.a, {
    className: classes.media,
    image: hotel.image,
    title: "Hotel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_CardContent___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default.a, {
    gutterBottom: true,
    variant: "headline",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, hotel.name)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default.a, {
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Precio por noche por habitacion", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, hotel.price))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_CardActions___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button___default.a, {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "Ver hotel"))));
}

SimpleCardHotel.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(SimpleCardHotel));

/***/ }),

/***/ "./components/stars.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = "/Users/leandrocasarin/Documents/hello-almundo/components/stars.jsx";


/* import IconsFont from './IconsFont' */

var Stars = function Stars(_ref) {
  var stars = _ref.stars,
      iconSize = _ref.iconSize,
      color = _ref.color;
  var selected = Array.from(Array(stars).keys());
  var unselected = Array.from(Array(5 - selected.length).keys());
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  });
};

Stars.defaultProps = {
  iconSize: null,
  stars: 3,
  color: 'orange'
};
Stars.propTypes = {
  iconSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  stars: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (Stars);

/***/ }),

/***/ "./components/textH3.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TitlePrimary */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TitleSecondary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TitleH3; });
/* unused harmony export TitleH4 */
/* unused harmony export TitleH5 */
/* unused harmony export TitleH6 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Text; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = "/Users/leandrocasarin/Documents/hello-almundo/components/textH3.jsx";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var funcStyles = function funcStyles(props) {
  return {
    global: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: props.bold ? 'bold' : 'normal',
      fontStyle: props.italic ? 'italic' : 'normal',
      color: props.color ? props.color : 'black',
      textAlign: props.center ? 'center' : props.right ? 'right' : 'left',
      width: '100%',
      display: 'inline-block',
      margin: 0
    },
    h1: {
      fontSize: props.size || 23
    },
    h2: {
      fontWeight: 100,
      fontSize: props.size || 20
    },
    h3: {
      fontSize: props.size || 18
    },
    h4: {
      fontSize: props.size || 16
    },
    h5: {
      fontSize: props.size || 16
    },
    h6: {
      fontSize: props.size || 14
    },
    p: {
      fontSize: props.size || 14,
      fontWeight: 'lighter',
      lineHeight: '20px'
    },
    textLineThrough: {
      textDecoration: props.lineThrough ? 'line-through' : 'none'
    }
  };
};

var defaultProps = {
  size: 14,
  center: false,
  bold: false,
  italic: false,
  color: '',
  right: false,
  lineThrough: false
  /* eslint-disable */

};
var propTypes = {
  content: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  center: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  bold: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  italic: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  right: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  lineThrough: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
  /* eslint-enable */

};

var TitlePrimary = function TitlePrimary(props) {
  var titleStyles = funcStyles(props);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    style: _objectSpread({}, titleStyles.h1, titleStyles.global),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, props.content);
};

TitlePrimary.defaultProps = defaultProps;
TitlePrimary.propTypes = propTypes;

var TitleSecondary = function TitleSecondary(props) {
  var titleStyles = funcStyles(props);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    style: _objectSpread({}, titleStyles.h2, titleStyles.global),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, props.content);
};

TitleSecondary.defaultProps = defaultProps;
TitleSecondary.propTypes = propTypes;

var TitleH3 = function TitleH3(props) {
  var titleStyles = funcStyles(props);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    style: _objectSpread({}, titleStyles.h3, titleStyles.global),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, props.content);
};

TitleH3.defaultProps = defaultProps;
TitleH3.propTypes = propTypes;

var TitleH4 = function TitleH4(props) {
  var titleStyles = funcStyles(props);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    style: _objectSpread({}, titleStyles.h3, titleStyles.global),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, props.content);
};

TitleH4.defaultProps = defaultProps;
TitleH4.propTypes = propTypes;

var TitleH5 = function TitleH5(props) {
  var titleStyles = funcStyles(props);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    style: _objectSpread({}, titleStyles.h3, titleStyles.global),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    }
  }, props.content);
};

TitleH5.defaultProps = defaultProps;
TitleH5.propTypes = propTypes;

var TitleH6 = function TitleH6(props) {
  var titleStyles = funcStyles(props);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
    style: _objectSpread({}, titleStyles.h3, titleStyles.global),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    }
  }, props.content);
};

TitleH6.defaultProps = defaultProps;
TitleH6.propTypes = propTypes;

var Text = function Text(props) {
  var titleStyles = funcStyles(props);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    style: _objectSpread({}, titleStyles.p, titleStyles.textLineThrough, titleStyles.global, props.style, props.weight),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    }
  }, props.content);
};

Text.defaultProps = defaultProps;
Text.propTypes = propTypes;


/***/ }),

/***/ "./constants.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HOTEL_ON_REMOVE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HOTEL_ON_UPSERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HOTEL_ON_GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HOTEL_ON_SET_FILTER; });
var HOTEL_ON_REMOVE = "HOTEL_ON_REMOVE";
var HOTEL_ON_UPSERT = "HOTEL_ON_UPSERT";
var HOTEL_ON_GET = "HOTEL_ON_GET";
var HOTEL_ON_SET_FILTER = 'HOTEL_ON_SET_FILTER';

/***/ }),

/***/ "./containers/home.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_hotels__ = __webpack_require__("./actions/hotels.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header__ = __webpack_require__("./components/header.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_hotelCard__ = __webpack_require__("./components/hotelCard.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_data__ = __webpack_require__("./data/data.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__data_data__);
var _jsxFileName = "/Users/leandrocasarin/Documents/hello-almundo/containers/home.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var HomeListHoteles =
/*#__PURE__*/
function (_Component) {
  _inherits(HomeListHoteles, _Component);

  function HomeListHoteles() {
    _classCallCheck(this, HomeListHoteles);

    return _possibleConstructorReturn(this, (HomeListHoteles.__proto__ || Object.getPrototypeOf(HomeListHoteles)).apply(this, arguments));
  }

  _createClass(HomeListHoteles, [{
    key: "render",

    /* componentDidMount() {
        this.props.dispatch(gethotels());
    } */
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_5__data_data___default.a.map(function (hotel) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_hotelCard__["a" /* default */], {
          hotel: hotel,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }));
      }));
    }
  }]);

  return HomeListHoteles;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (HomeListHoteles);
/* 
 */

/***/ }),

/***/ "./containers/hoteles2.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_hotelCard__ = __webpack_require__("./components/hotelCard.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data__ = __webpack_require__("./data/data.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__data_data__);
var _jsxFileName = "/Users/leandrocasarin/Documents/hello-almundo/containers/hoteles2.jsx";




var Hotels2 = function Hotels2() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_2__data_data___default.a.map(function (hotel) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_hotelCard__["a" /* default */], {
      hotel: hotel,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }));
  }));
};

/* unused harmony default export */ var _unused_webpack_default_export = (Hotels2);

/***/ }),

/***/ "./data/data.json":
/***/ (function(module, exports) {

module.exports = [{"id":"249942","name":"Hotel Stefanos","stars":3,"price":994.18,"image":"4900059_30_b.jpg","amenities":["safety-box","nightclub","deep-soaking-bathtub","beach","business-center"]},{"id":"161901","name":"Hotel Santa Cruz","stars":3,"price":1267.57,"image":"6623490_6_b.jpg","amenities":["nightclub","business-center","bathtub","newspaper","restaurant"]},{"id":"161914","name":"NM Lima Hotel","stars":4,"price":1445.5,"image":"981018_26_b.jpg","amenities":["business-center","nightclub","deep-soaking-bathtub","fitness-center","garden"]},{"id":"208599","name":"El Golf Hotel Boutique","stars":4,"price":1513.45,"image":"1191401_110_b.jpg","amenities":["safety-box","bathrobes","business-center","beach-pool-facilities","restaurant"]},{"id":"236309","name":"Casa Andina Select Miraflores","stars":4,"price":1545.46,"image":"2a5bb415_b.jpg","amenities":["coffe-maker","safety-box","restaurant","garden","children-club"]},{"id":"161899","name":"Radisson Hotel Decapolis Miraflores","stars":4,"price":2314.61,"image":"46512_29_b.jpg","amenities":["bathtub","separate-bredroom","safety-box","business-center","beach-pool-facilities"]},{"id":"104074","name":"Antigua Miraflores Hotel","stars":3,"price":1862.16,"image":"480835_73_b.jpg","amenities":["restaurant","separate-bredroom","business-center","bathrobes","beach"]},{"id":"512559","name":"Casa Falleri Boutique Hotel","stars":3,"price":1634.03,"image":"11908954_150_b.jpg","amenities":["nightclub","garden","coffe-maker","kitchen-facilities","deep-soaking-bathtub"]},{"id":"228165","name":"Habitat Hotel","stars":3,"price":1061.79,"image":"12808943_13_b.jpg","amenities":["beach-pool-facilities","deep-soaking-bathtub","bathtub","children-club","beach"]},{"id":"137536","name":"Hotel San Blas","stars":3,"price":1106.56,"image":"4417477_17_b.jpg","amenities":["coffe-maker","deep-soaking-bathtub","business-center","bathrobes","safety-box"]},{"id":"266879","name":"Palmetto Hotel Business San Borja","stars":3,"price":1105.87,"image":"4626475_1_b.jpg","amenities":["safety-box","coffe-maker","restaurant","separate-bredroom","bathtub"]},{"id":"19325","name":"Foresta Hotel Lima","stars":4,"price":1941.99,"image":"200684_222_b.jpg","amenities":["bathtub","kitchen-facilities","nightclub","deep-soaking-bathtub","garden"]},{"id":"427467","name":"Royal Inca Hotel","stars":2,"price":683.5,"image":"6900423_6_b.jpg","amenities":["newspaper","coffe-maker","safety-box","kitchen-facilities","bathtub"]},{"id":"277990","name":"Bayview Hotel","stars":3,"price":1043.88,"image":"1231695_139_b.jpg","amenities":["bathtub","deep-soaking-bathtub","kitchen-facilities","fitness-center","nightclub"]},{"id":"90757","name":"Casa Andina Premium Miraflores","stars":4,"price":1887.2,"image":"2039609_120_b.jpg","amenities":["children-club","newspaper","restaurant","separate-bredroom","nightclub"]},{"id":"161890","name":"New Corpac Hotel","stars":3,"price":886.12,"image":"1876197_31_b.jpg","amenities":["children-club","restaurant","fitness-center","bathrobes","safety-box"]},{"id":"314944","name":"Qorianka Hotel","stars":2,"price":1024.91,"image":"9320547_26_b.jpg","amenities":["children-club","garden","deep-soaking-bathtub","newspaper","kitchen-facilities"]},{"id":"433932","name":"Casa Suyay","stars":3,"price":1695.37,"image":"8962073_23_b.jpg","amenities":["kitchen-facilities","restaurant","nightclub","newspaper","coffe-maker"]},{"id":"277988","name":"Casa Bella Miraflores","stars":3,"price":842.54,"image":"4479382_65_b.jpg","amenities":["garden","kitchen-facilities","bathtub","safety-box","business-center"]},{"id":"455161","name":"Tierra Viva Miraflores Larco","stars":3,"price":1431.47,"image":"6153044_28_b.jpg","amenities":["beach-pool-facilities","newspaper","nightclub","bathrobes","deep-soaking-bathtub"]},{"id":"260342","name":"Atton San Isidro","stars":4,"price":1943.69,"image":"4357289_55_b.jpg","amenities":["newspaper","safety-box","business-center","coffe-maker","restaurant"]},{"id":"488116","name":"Urbano Apartment Miraflores Pardo","stars":3,"price":1258.4,"image":"10968139_27_b.jpg","amenities":["deep-soaking-bathtub","bathtub","fitness-center","restaurant","bathrobes"]},{"id":"132929","name":"Los Tallanes Hotel & Suites","stars":3,"price":2014.68,"image":"12287657_13_b.jpg","amenities":["nightclub","beach","safety-box","deep-soaking-bathtub","business-center"]},{"id":"266875","name":"Hotel Ferre Miraflores","stars":3,"price":1183.19,"image":"3045476_5_b.jpg","amenities":["safety-box","newspaper","garden","separate-bredroom","children-club"]},{"id":"411416","name":"Arawi Lima Miraflores","stars":4,"price":2099.1,"image":"5429945_8_b.jpg","amenities":["fitness-center","beach","children-club","nightclub","deep-soaking-bathtub"]},{"id":"266877","name":"Peru Star Boutique Apartments Hotel","stars":4,"price":1093.37,"image":"3124310_1_b.jpg","amenities":["bathtub","restaurant","deep-soaking-bathtub","bathrobes","kitchen-facilities"]},{"id":"106682","name":"Del Pilar Miraflores Hotel","stars":3,"price":1713.42,"image":"412713_46_b.jpg","amenities":["newspaper","coffe-maker","bathtub","kitchen-facilities","deep-soaking-bathtub"]},{"id":"266911","name":"1900 Hostel","stars":1,"price":596.7,"image":"4850335_10_b.jpg","amenities":["coffe-maker","garden","kitchen-facilities","beach-pool-facilities","nightclub"]},{"id":"266878","name":"Machu Picchu Suites","stars":3,"price":794.74,"image":"3688061_52_b.jpg","amenities":["beach","kitchen-facilities","bathtub","garden","restaurant"]},{"id":"411417","name":"Hotel Señorial","stars":3,"price":1193.14,"image":"7700456_3_b.jpg","amenities":["business-center","beach","garden","separate-bredroom","newspaper"]},{"id":"266871","name":"Las Palmas","stars":3,"price":1118.45,"image":"4618948_40_b.jpg","amenities":["beach","deep-soaking-bathtub","kitchen-facilities","beach-pool-facilities","newspaper"]},{"id":"266872","name":"Miraflores Lodge","stars":3,"price":1090.91,"image":"3612838_12_b.jpg","amenities":["coffe-maker","restaurant","kitchen-facilities","bathtub","nightclub"]},{"id":"266873","name":"Casa Wayra Bed & Breakfast Miraflores","stars":3,"price":1175.85,"image":"3688064_92_b.jpg","amenities":["newspaper","beach-pool-facilities","coffe-maker","deep-soaking-bathtub","kitchen-facilities"]},{"id":"266874","name":"HosteLima","stars":2,"price":297.65,"image":"4982472_16_b.jpg","amenities":["business-center","safety-box","kitchen-facilities","restaurant","fitness-center"]},{"id":"266919","name":"3B Barranco's Chic and Basic B&B","stars":3,"price":1488.42,"image":"9ae3980d_b.jpg","amenities":["restaurant","children-club","nightclub","safety-box","beach"]},{"id":"162141","name":"Hotel El Ducado","stars":3,"price":1624.1,"image":"1688562_53_b.jpg","amenities":["kitchen-facilities","garden","nightclub","business-center","safety-box"]},{"id":"266914","name":"LYNIK La Casa de Blanca","stars":2,"price":676.59,"image":"4846837_5_b.jpg","amenities":["deep-soaking-bathtub","beach-pool-facilities","bathtub","separate-bredroom","kitchen-facilities"]},{"id":"26396","name":"Country Club Lima Hotel","stars":5,"price":3109.07,"image":"115596_172_b.jpg","amenities":["restaurant","garden","safety-box","newspaper","beach-pool-facilities"]},{"id":"88527","name":"Hotel Libertador Lima","stars":4,"price":1708.74,"image":"519318_82_b.jpg","amenities":["bathrobes","beach-pool-facilities","business-center","newspaper","nightclub"]},{"id":"450977","name":"Los Girasoles","stars":3,"price":1177.32,"image":"3474909_52_b.jpg","amenities":["kitchen-facilities","bathtub","beach","fitness-center","children-club"]},{"id":"35715","name":"Melia Lima","stars":4,"price":2099.3,"image":"484066_158_b.jpg","amenities":["safety-box","garden","nightclub","beach-pool-facilities","deep-soaking-bathtub"]},{"id":"498515","name":"Casa Aika","stars":3,"price":757.58,"image":"5987363_77_b.jpg","amenities":["newspaper","business-center","nightclub","children-club","deep-soaking-bathtub"]},{"id":"431154","name":"Kingdom Hotel","stars":3,"price":1754.36,"image":"9365800_92_b.jpg","amenities":["children-club","bathtub","beach","business-center","beach-pool-facilities"]},{"id":"454496","name":"Hotel Panamericano","stars":3,"price":798.53,"image":"11920422_40_b.jpg","amenities":["bathtub","children-club","beach","newspaper","kitchen-facilities"]},{"id":"266865","name":"Condor's House - Hostel","stars":2,"price":301.86,"image":"5030807_9_b.jpg","amenities":["newspaper","separate-bredroom","nightclub","restaurant","garden"]},{"id":"266866","name":"House Inn Backpacker","stars":2,"price":280.8,"image":"4982482_7_b.jpg","amenities":["safety-box","beach-pool-facilities","kitchen-facilities","separate-bredroom","bathrobes"]},{"id":"266900","name":"La Casa Nostra Hostel","stars":2,"price":1228.5,"image":"2537805_1_b.jpg","amenities":["kitchen-facilities","fitness-center","garden","nightclub","deep-soaking-bathtub"]},{"id":"266867","name":"Hotel Kamana","stars":3,"price":846.93,"image":"4478078_39_b.jpg","amenities":["bathtub","fitness-center","restaurant","newspaper","separate-bredroom"]},{"id":"91522","name":"Embajadores Hotel","stars":3,"price":1031.9,"image":"386779_53_b.jpg","amenities":["garden","nightclub","bathrobes","coffe-maker","business-center"]},{"id":"266908","name":"Sm Hotel And Business","stars":3,"price":969.64,"image":"4688439_88_b.jpg","amenities":["children-club","separate-bredroom","deep-soaking-bathtub","bathtub","restaurant"]},{"id":"157628","name":"Fiesta Hotel & Casino","stars":4,"price":2927.68,"image":"1777231_85_b.jpg","amenities":["deep-soaking-bathtub","fitness-center","separate-bredroom","coffe-maker","restaurant"]},{"id":"266903","name":"San Isidro Inn","stars":3,"price":1053,"image":"3952922_27_b.jpg","amenities":["children-club","bathtub","fitness-center","separate-bredroom","newspaper"]},{"id":"266904","name":"Posada Peregrinus","stars":2,"price":614.25,"image":"4546549_9_b.jpg","amenities":["nightclub","kitchen-facilities","fitness-center","bathrobes","separate-bredroom"]},{"id":"413051","name":"Courtyard Lima Miraflores","stars":4,"price":2240.34,"image":"9866569_13_b.jpg","amenities":["separate-bredroom","safety-box","beach-pool-facilities","kitchen-facilities","deep-soaking-bathtub"]},{"id":"76136","name":"Hotel Estelar Miraflores","stars":4,"price":1927.17,"image":"b3e281b1_b.jpg","amenities":["nightclub","safety-box","business-center","bathtub","coffe-maker"]},{"id":"76414","name":"Swissôtel Lima","stars":5,"price":3397.94,"image":"d44c63f1_b.jpg","amenities":["kitchen-facilities","coffe-maker","deep-soaking-bathtub","bathrobes","newspaper"]},{"id":"473343","name":"Luxury Hotel Inkari","stars":4,"price":2049.84,"image":"9438646_27_b.jpg","amenities":["bathtub","kitchen-facilities","beach","fitness-center","coffe-maker"]},{"id":"266870","name":"La Paz Apart Hotel","stars":3,"price":2535.14,"image":"4099852_34_b.jpg","amenities":["bathrobes","newspaper","deep-soaking-bathtub","garden","kitchen-facilities"]},{"id":"84153","name":"Basadre Suites Boutique Hotel","stars":3,"price":997.16,"image":"1110876_60_b.jpg","amenities":["bathrobes","deep-soaking-bathtub","safety-box","separate-bredroom","fitness-center"]},{"id":"187309","name":"Hotel Melodia","stars":3,"price":1053,"image":"7864635_1_b.jpg","amenities":["garden","bathtub","bathrobes","safety-box","separate-bredroom"]},{"id":"458601","name":"Hotel Plaza Mayor","stars":2,"price":469.94,"image":"9866986_18_b.jpg","amenities":["fitness-center","garden","deep-soaking-bathtub","coffe-maker","nightclub"]},{"id":"300212","name":"Hotel Nobility","stars":3,"price":1547.88,"image":"6214511_57_b.jpg","amenities":["kitchen-facilities","garden","nightclub","children-club","safety-box"]},{"id":"187306","name":"Casa Andina Standard Miraflores Centro","stars":3,"price":1218.06,"image":"85248126_b.jpg","amenities":["fitness-center","children-club","separate-bredroom","deep-soaking-bathtub","bathrobes"]},{"id":"432536","name":"Wyndham Costa Del Sol Lima City","stars":4,"price":1749.25,"image":"10210122_194_b.jpg","amenities":["children-club","beach","nightclub","beach-pool-facilities","deep-soaking-bathtub"]},{"id":"27227","name":"Sonesta Hotel El Olivar Lima","stars":4,"price":2339.9,"image":"525844_90_b.jpg","amenities":["restaurant","coffe-maker","business-center","nightclub","safety-box"]},{"id":"532067","name":"Thunderbird Hotels J.Pardo","stars":3,"price":2237.4,"image":"1774520_182_b.jpg","amenities":["bathrobes","coffe-maker","children-club","bathtub","kitchen-facilities"]},{"id":"91274","name":"La Hacienda Hotel Miraflores","stars":3,"price":2071.2,"image":"430037_31_b.jpg","amenities":["newspaper","beach-pool-facilities","beach","garden","fitness-center"]},{"id":"296187","name":"El Angolo Lima","stars":3,"price":1864.08,"image":"5981696_40_b.jpg","amenities":["kitchen-facilities","bathrobes","restaurant","garden","newspaper"]},{"id":"161918","name":"Hostal Porta","stars":3,"price":629.8,"image":"1688561_29_b.jpg","amenities":["children-club","separate-bredroom","nightclub","garden","bathtub"]},{"id":"227172","name":"Hotel Novotel Lima","stars":4,"price":2091.07,"image":"2803127_64_b.jpg","amenities":["beach","kitchen-facilities","children-club","newspaper","beach-pool-facilities"]},{"id":"277989","name":"ibis Larco Miraflores","stars":3,"price":1156.91,"image":"917bd6d1_b.jpg","amenities":["safety-box","deep-soaking-bathtub","bathrobes","bathtub","business-center"]},{"id":"234536","name":"Miraflores Suites Centro","stars":3,"price":841.45,"image":"3334784_86_b.jpg","amenities":["beach","kitchen-facilities","newspaper","separate-bredroom","nightclub"]},{"id":"161900","name":"Radisson Hotel San Isidro","stars":4,"price":1761.4,"image":"1580314_67_b.jpg","amenities":["restaurant","children-club","newspaper","deep-soaking-bathtub","business-center"]},{"id":"433213","name":"Hotel Boutique Huaca Wasi","stars":3,"price":1715.28,"image":"5379215_11_b.jpg","amenities":["fitness-center","nightclub","beach-pool-facilities","garden","business-center"]},{"id":"239304","name":"Hotel Inka Path","stars":2,"price":1088.1,"image":"9649999_27_b.jpg","amenities":["fitness-center","deep-soaking-bathtub","garden","separate-bredroom","safety-box"]},{"id":"109664","name":"Plaza del Bosque Hotel","stars":4,"price":1889.37,"image":"48784_97_b.jpg","amenities":["deep-soaking-bathtub","fitness-center","kitchen-facilities","newspaper","children-club"]},{"id":"111046","name":"Suites Antique Apart Hotel","stars":3,"price":1594.88,"image":"11820110_10_b.jpg","amenities":["restaurant","coffe-maker","kitchen-facilities","newspaper","deep-soaking-bathtub"]},{"id":"110914","name":"Royal Park Hotel","stars":4,"price":3141.14,"image":"583479_86_b.jpg","amenities":["safety-box","deep-soaking-bathtub","coffe-maker","bathrobes","garden"]},{"id":"500017","name":"El Faro Inn","stars":3,"price":855.22,"image":"9817258_55_b.jpg","amenities":["coffe-maker","beach","garden","safety-box","deep-soaking-bathtub"]},{"id":"132928","name":"Hotel San Agustin Riviera","stars":3,"price":798.89,"image":"1354077_84_b.jpg","amenities":["garden","nightclub","bathrobes","bathtub","separate-bredroom"]},{"id":"410363","name":"Palmetto San Miguel","stars":3,"price":1057.15,"image":"12627687_102_b.jpg","amenities":["newspaper","restaurant","garden","business-center","safety-box"]},{"id":"161908","name":"BTH","stars":4,"price":1822.71,"image":"897079_215_b.jpg","amenities":["restaurant","bathtub","children-club","bathrobes","safety-box"]},{"id":"137782","name":"Thunderbird Hotels Carrera","stars":3,"price":1559.54,"image":"1773941_61_b.jpg","amenities":["kitchen-facilities","nightclub","beach","beach-pool-facilities","children-club"]},{"id":"161909","name":"qp Hotels Lima","stars":3,"price":1318.17,"image":"1876458_102_b.jpg","amenities":["separate-bredroom","newspaper","beach","fitness-center","beach-pool-facilities"]},{"id":"161904","name":"Sol de Oro Hotel & Suites","stars":4,"price":1722.41,"image":"63569_150_b.jpg","amenities":["fitness-center","garden","beach","restaurant","separate-bredroom"]},{"id":"139167","name":"Hotel Park Suites","stars":2,"price":1447.88,"image":"00650d24_b.jpg","amenities":["children-club","beach-pool-facilities","restaurant","garden","coffe-maker"]},{"id":"511549","name":"Inkawasi Hostel Boutique","stars":2,"price":796.13,"image":"4241228_30_b.jpg","amenities":["restaurant","fitness-center","kitchen-facilities","beach","business-center"]},{"id":"110347","name":"Roosevelt Hotel & Suites","stars":3,"price":1710.01,"image":"81959_63_b.jpg","amenities":["separate-bredroom","nightclub","coffe-maker","beach-pool-facilities","garden"]},{"id":"239178","name":"The Westin Lima Hotel & Convention Center","stars":5,"price":3268.52,"image":"4359018_144_b.jpg","amenities":["safety-box","kitchen-facilities","bathrobes","fitness-center","coffe-maker"]},{"id":"108545","name":"Delfines Hotel & Convention Center","stars":4,"price":3841.81,"image":"4d72efed_b.jpg","amenities":["separate-bredroom","business-center","safety-box","children-club","bathrobes"]},{"id":"72019","name":"Belmond Miraflores Park","stars":5,"price":9355.52,"image":"530284_167_b.jpg","amenities":["coffe-maker","separate-bredroom","garden","children-club","deep-soaking-bathtub"]},{"id":"433923","name":"Atelier Hotel","stars":3,"price":1512.97,"image":"5405282_15_b.jpg","amenities":["newspaper","business-center","children-club","beach","coffe-maker"]},{"id":"15102","name":"Jose Antonio Lima","stars":4,"price":1914.87,"image":"164283a_hb_a_001.jpg","amenities":["garden","business-center","bathrobes","safety-box","beach-pool-facilities"]},{"id":"93911","name":"El Condado Miraflores Hotel & Suites","stars":3,"price":1374.56,"image":"9291429_9_b.jpg","amenities":["coffe-maker","restaurant","bathtub","beach-pool-facilities","separate-bredroom"]},{"id":"132931","name":"Suites del Bosque Hotel","stars":3,"price":1647.73,"image":"1574025_73_b.jpg","amenities":["beach-pool-facilities","newspaper","separate-bredroom","safety-box","garden"]},{"id":"132930","name":"Leon de Oro Inn & Suites","stars":3,"price":1128,"image":"6975518_43_b.jpg","amenities":["nightclub","business-center","safety-box","deep-soaking-bathtub","garden"]},{"id":"161892","name":"Sonesta Posadas del Inca Miraflores - Lima","stars":3,"price":1485.63,"image":"44e00399_b.jpg","amenities":["garden","restaurant","beach","deep-soaking-bathtub","bathtub"]},{"id":"161891","name":"B&B Tradiciones","stars":3,"price":801.45,"image":"893882_7_b.jpg","amenities":["newspaper","coffe-maker","safety-box","beach-pool-facilities","nightclub"]},{"id":"132937","name":"Maria Angola Hotel & Centro de Convenciones","stars":3,"price":1131.76,"image":"23645_15_b.jpg","amenities":["garden","restaurant","children-club","separate-bredroom","deep-soaking-bathtub"]},{"id":"132936","name":"Hotel Continental","stars":3,"price":774.53,"image":"802720_60_b.jpg","amenities":["deep-soaking-bathtub","coffe-maker","newspaper","beach","children-club"]}]

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_hoteles2__ = __webpack_require__("./containers/hoteles2.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_home__ = __webpack_require__("./containers/home.jsx");
var _jsxFileName = "/Users/leandrocasarin/Documents/hello-almundo/pages/index.js";




var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__containers_home__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActions":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/IconButton":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "@material-ui/core/Typography":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Menu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "reactjs-popup":
/***/ (function(module, exports) {

module.exports = require("reactjs-popup");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map