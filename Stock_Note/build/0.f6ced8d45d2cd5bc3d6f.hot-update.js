"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _components_FormularAkcie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var _components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var App = /*#__PURE__*/function (_Component) {
  function App() {
    var _this;
    _classCallCheck(this, App);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, App, [].concat(args));
    _this.state = {
      prispevky: ["Prispevek"],
      // pole
      zprava: ""
    };
    _this.pridajPrispevok = function (e) {
      // zde budu upravovat state a přidávat příspěvky
      _this.setState(function (prevState) {
        return {
          prispevky: [].concat(_toConsumableArray(prevState.prispevky), [prevState.zprava])
        };
      });
    };
    _this.vymazatPrispevok = function (indexPrispevku) {
      _this.setState(function (prevState) {
        return {
          prispevky: prevState.prispevky.filter(function (prispevek, index) {
            return indexPrispevku !== index;
          })
        };
      });
    };
    return _this;
  }
  _inherits(App, _Component);
  return _createClass(App, [{
    key: "render",
    value:
    //

    function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Stock Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormularAkcie__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onSubmitForm: this.pridejPrispevek
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "list"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component); // TO-DO -> udělat pak menu nahoře, alespoň 2 záložky (druhá bude přehled portfolia)
// function App() {
//   return (
//     <BrowserRouter>
//       <Navigacia />
//       <Routes>
//         <Route path="/" element={<Main />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="login" element={<Login />} />
//         <Route path="products/*" element={<Products />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eb4ccbcc037643e794d2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mNmNlZDhkNDVkMmNkNWJjM2Q2Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDSztBQUNTO0FBQ0U7QUFBQSxJQUVuREssR0FBRywwQkFBQUMsVUFBQTtFQUFBLFNBQUFELElBQUE7SUFBQSxJQUFBRSxLQUFBO0lBQUFDLGVBQUEsT0FBQUgsR0FBQTtJQUFBLFNBQUFJLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFDLElBQUEsT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7TUFBQUYsSUFBQSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTtJQUFBO0lBQUFQLEtBQUEsR0FBQVEsVUFBQSxPQUFBVixHQUFBLEtBQUFXLE1BQUEsQ0FBQUosSUFBQTtJQUFBTCxLQUFBLENBQ1BVLEtBQUssR0FBRztNQUNOQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7TUFBRTtNQUMxQkMsTUFBTSxFQUFFO0lBQ1YsQ0FBQztJQUFBWixLQUFBLENBRURhLGVBQWUsR0FBRyxVQUFDQyxDQUFDLEVBQUs7TUFDdkI7TUFDQWQsS0FBQSxDQUFLZSxRQUFRLENBQUMsVUFBQ0MsU0FBUyxFQUFLO1FBQzNCLE9BQU87VUFDTEwsU0FBUyxLQUFBRixNQUFBLENBQUFRLGtCQUFBLENBQU1ELFNBQVMsQ0FBQ0wsU0FBUyxJQUFFSyxTQUFTLENBQUNKLE1BQU07UUFDdEQsQ0FBQztNQUNILENBQUMsQ0FBQztJQUNKLENBQUM7SUFBQVosS0FBQSxDQUVEa0IsZ0JBQWdCLEdBQUcsVUFBQ0MsY0FBYyxFQUFLO01BQ3JDbkIsS0FBQSxDQUFLZSxRQUFRLENBQUMsVUFBQ0MsU0FBUyxFQUFLO1FBQzNCLE9BQU87VUFDTEwsU0FBUyxFQUFFSyxTQUFTLENBQUNMLFNBQVMsQ0FBQ1MsTUFBTSxDQUNuQyxVQUFDQyxTQUFTLEVBQUVDLEtBQUs7WUFBQSxPQUFLSCxjQUFjLEtBQUtHLEtBQUs7VUFBQSxDQUNoRDtRQUNGLENBQUM7TUFDSCxDQUFDLENBQUM7SUFDSixDQUFDO0lBQUEsT0FBQXRCLEtBQUE7RUFBQTtFQUFBdUIsU0FBQSxDQUFBekIsR0FBQSxFQUFBQyxVQUFBO0VBQUEsT0FBQXlCLFlBQUEsQ0FBQTFCLEdBQUE7SUFBQTJCLEdBQUE7SUFBQUMsS0FBQTtJQUVEOztJQUVBLFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUNQLG9CQUNFbEMsMERBQUE7UUFBS29DLFNBQVMsRUFBQztNQUFTLGdCQUN0QnBDLDBEQUFBLGFBQUksWUFBYyxDQUFDLGVBQ25CQSwwREFBQSwyQkFFRUEsMERBQUEsQ0FBQ0csaUVBQWE7UUFBQ2tDLFlBQVksRUFBRSxJQUFJLENBQUNDO01BQWdCLENBQUUsQ0FDakQsQ0FBQyxlQUNOdEMsMERBQUE7UUFBS29DLFNBQVMsRUFBQztNQUFNLGdCQUNuQnBDLDBEQUFBLENBQUNJLGtFQUFjLE1BQUUsQ0FDZCxDQUNGLENBQUM7SUFFVjtFQUFDO0FBQUEsRUF4Q2VILDRDQUFTLEdBMkMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNc0MsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHeEMsNERBQVUsQ0FBQ3FDLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDUixNQUFNLGNBQUNsQywwREFBQSxDQUFDSyxHQUFHLE1BQUUsQ0FBQyxDQUFDOzs7Ozs7OztVQ2xFcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IEZvcm11bGFyQWtjaWUgZnJvbSBcIi4vY29tcG9uZW50cy9Gb3JtdWxhckFrY2llXCI7XG5pbXBvcnQgUHJpc3BldmVrQWtjaWUgZnJvbSBcIi4vY29tcG9uZW50cy9QcmlzcGV2ZWtBa2NpZVwiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBwcmlzcGV2a3k6IFtcIlByaXNwZXZla1wiXSwgLy8gcG9sZVxuICAgIHpwcmF2YTogXCJcIixcbiAgfTtcblxuICBwcmlkYWpQcmlzcGV2b2sgPSAoZSkgPT4ge1xuICAgIC8vIHpkZSBidWR1IHVwcmF2b3ZhdCBzdGF0ZSBhIHDFmWlkw6F2YXQgcMWZw61zcMSbdmt5XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcmlzcGV2a3k6IFsuLi5wcmV2U3RhdGUucHJpc3Bldmt5LCBwcmV2U3RhdGUuenByYXZhXSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgdnltYXphdFByaXNwZXZvayA9IChpbmRleFByaXNwZXZrdSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJpc3Bldmt5OiBwcmV2U3RhdGUucHJpc3Bldmt5LmZpbHRlcihcbiAgICAgICAgICAocHJpc3BldmVrLCBpbmRleCkgPT4gaW5kZXhQcmlzcGV2a3UgIT09IGluZGV4XG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIC8vXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgPGgxPlN0b2NrIE5vdGU8L2gxPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsvKiB0b3RvIGJ1ZGUgZnVua2NlIHDFmWlkw6Fuw60gUHJpc3BldmVrQWtjaWUsIGFsZSBuZW3DoW0gbmFzdGF2ZW7DvSBqZcWhdMSbIG5lYm/FpSB2ZSB2aWRldSBieWxhIGNsYXNzYT8gxI1hcyAyOjEyOjIxLCBhbm8gamUgdG8gY2xhc3Mga29tcG9uZW50LCBuYXDDrcWhdSB0byB0YWsgYWxlIFRPRE8gPT4gcMWZZXBzYXQgdG8gamVkbm9kdcWhZWppIGRvIGZ1bmtjaW9uw6FsbsOtaG8ga29tcG9uZW50dSAqL31cbiAgICAgICAgICA8Rm9ybXVsYXJBa2NpZSBvblN1Ym1pdEZvcm09e3RoaXMucHJpZGVqUHJpc3BldmVrfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAgPFByaXNwZXZla0FrY2llIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBUTy1ETyAtPiB1ZMSbbGF0IHBhayBtZW51IG5haG/FmWUsIGFsZXNwb8WIIDIgesOhbG/Fvmt5IChkcnVow6EgYnVkZSBwxZllaGxlZCBwb3J0Zm9saWEpXG4vLyBmdW5jdGlvbiBBcHAoKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPEJyb3dzZXJSb3V0ZXI+XG4vLyAgICAgICA8TmF2aWdhY2lhIC8+XG4vLyAgICAgICA8Um91dGVzPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8TWFpbiAvPn0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCJjb250YWN0XCIgZWxlbWVudD17PENvbnRhY3QgLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwibG9naW5cIiBlbGVtZW50PXs8TG9naW4gLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwicHJvZHVjdHMvKlwiIGVsZW1lbnQ9ezxQcm9kdWN0cyAvPn0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PE5vdEZvdW5kIC8+fSAvPlxuLy8gICAgICAgPC9Sb3V0ZXM+XG4vLyAgICAgPC9Ccm93c2VyUm91dGVyPlxuLy8gICApO1xuLy8gfVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImViNGNjYmNjMDM3NjQzZTc5NGQyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlUm9vdCIsIkZvcm11bGFyQWtjaWUiLCJQcmlzcGV2ZWtBa2NpZSIsIkFwcCIsIl9Db21wb25lbnQiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiX2NhbGxTdXBlciIsImNvbmNhdCIsInN0YXRlIiwicHJpc3Bldmt5IiwienByYXZhIiwicHJpZGFqUHJpc3Bldm9rIiwiZSIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwidnltYXphdFByaXNwZXZvayIsImluZGV4UHJpc3Bldmt1IiwiZmlsdGVyIiwicHJpc3BldmVrIiwiaW5kZXgiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdEZvcm0iLCJwcmlkZWpQcmlzcGV2ZWsiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCJdLCJzb3VyY2VSb290IjoiIn0=