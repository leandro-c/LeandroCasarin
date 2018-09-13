webpackHotUpdate(4,{

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

/***/ "./containers/home.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_hotels__ = __webpack_require__("./actions/hotels.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header__ = __webpack_require__("./components/header.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_hotelCard__ = __webpack_require__("./components/hotelCard.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
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

/***/ })

})
//# sourceMappingURL=4.dc3f5dab0e4beee77916.hot-update.js.map