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
    _this.vymazatPrispevok = function () {};
    return _this;
  }
  _inherits(App, _Component);
  return _createClass(App, [{
    key: "render",
    value: function render() {
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
/******/ 	__webpack_require__.h = () => ("c3e016e3f14b5c6e6e01")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMjg3NjVhOTQ3N2JkMDRkMWFiYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDSztBQUNTO0FBQ0U7QUFBQSxJQUVuREssR0FBRywwQkFBQUMsVUFBQTtFQUFBLFNBQUFELElBQUE7SUFBQSxJQUFBRSxLQUFBO0lBQUFDLGVBQUEsT0FBQUgsR0FBQTtJQUFBLFNBQUFJLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFDLElBQUEsT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7TUFBQUYsSUFBQSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTtJQUFBO0lBQUFQLEtBQUEsR0FBQVEsVUFBQSxPQUFBVixHQUFBLEtBQUFXLE1BQUEsQ0FBQUosSUFBQTtJQUFBTCxLQUFBLENBQ1BVLEtBQUssR0FBRztNQUNOQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7TUFBRTtNQUMxQkMsTUFBTSxFQUFFO0lBQ1YsQ0FBQztJQUFBWixLQUFBLENBRURhLGVBQWUsR0FBRyxVQUFDQyxDQUFDLEVBQUs7TUFDdkI7TUFDQWQsS0FBQSxDQUFLZSxRQUFRLENBQUMsVUFBQ0MsU0FBUyxFQUFLO1FBQzNCLE9BQU87VUFDTEwsU0FBUyxLQUFBRixNQUFBLENBQUFRLGtCQUFBLENBQU1ELFNBQVMsQ0FBQ0wsU0FBUyxJQUFFSyxTQUFTLENBQUNKLE1BQU07UUFDdEQsQ0FBQztNQUNILENBQUMsQ0FBQztJQUNKLENBQUM7SUFBQVosS0FBQSxDQUVEa0IsZ0JBQWdCLEdBQUcsWUFBTSxDQUFDLENBQUM7SUFBQSxPQUFBbEIsS0FBQTtFQUFBO0VBQUFtQixTQUFBLENBQUFyQixHQUFBLEVBQUFDLFVBQUE7RUFBQSxPQUFBcUIsWUFBQSxDQUFBdEIsR0FBQTtJQUFBdUIsR0FBQTtJQUFBQyxLQUFBLEVBRTNCLFNBQUFDLE1BQU1BLENBQUEsRUFBRztNQUNQLG9CQUNFOUIsMERBQUE7UUFBS2dDLFNBQVMsRUFBQztNQUFTLGdCQUN0QmhDLDBEQUFBLGFBQUksWUFBYyxDQUFDLGVBQ25CQSwwREFBQSwyQkFFRUEsMERBQUEsQ0FBQ0csaUVBQWE7UUFBQzhCLFlBQVksRUFBRSxJQUFJLENBQUNDO01BQWdCLENBQUUsQ0FDakQsQ0FBQyxlQUNObEMsMERBQUE7UUFBS2dDLFNBQVMsRUFBQztNQUFNLGdCQUNuQmhDLDBEQUFBLENBQUNJLGtFQUFjLE1BQUUsQ0FDZCxDQUNGLENBQUM7SUFFVjtFQUFDO0FBQUEsRUE5QmVILDRDQUFTLEdBaUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNa0MsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHcEMsNERBQVUsQ0FBQ2lDLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDUixNQUFNLGNBQUM5QiwwREFBQSxDQUFDSyxHQUFHLE1BQUUsQ0FBQyxDQUFDOzs7Ozs7OztVQ3hEcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IEZvcm11bGFyQWtjaWUgZnJvbSBcIi4vY29tcG9uZW50cy9Gb3JtdWxhckFrY2llXCI7XG5pbXBvcnQgUHJpc3BldmVrQWtjaWUgZnJvbSBcIi4vY29tcG9uZW50cy9QcmlzcGV2ZWtBa2NpZVwiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBwcmlzcGV2a3k6IFtcIlByaXNwZXZla1wiXSwgLy8gcG9sZVxuICAgIHpwcmF2YTogXCJcIixcbiAgfTtcblxuICBwcmlkYWpQcmlzcGV2b2sgPSAoZSkgPT4ge1xuICAgIC8vIHpkZSBidWR1IHVwcmF2b3ZhdCBzdGF0ZSBhIHDFmWlkw6F2YXQgcMWZw61zcMSbdmt5XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcmlzcGV2a3k6IFsuLi5wcmV2U3RhdGUucHJpc3Bldmt5LCBwcmV2U3RhdGUuenByYXZhXSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgdnltYXphdFByaXNwZXZvayA9ICgpID0+IHt9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxoMT5TdG9jayBOb3RlPC9oMT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7LyogdG90byBidWRlIGZ1bmtjZSBwxZlpZMOhbsOtIFByaXNwZXZla0FrY2llLCBhbGUgbmVtw6FtIG5hc3RhdmVuw70gamXFoXTEmyBuZWJvxaUgdmUgdmlkZXUgYnlsYSBjbGFzc2E/IMSNYXMgMjoxMjoyMSwgYW5vIGplIHRvIGNsYXNzIGtvbXBvbmVudCwgbmFww63FoXUgdG8gdGFrIGFsZSBUT0RPID0+IHDFmWVwc2F0IHRvIGplZG5vZHXFoWVqaSBkbyBmdW5rY2lvbsOhbG7DrWhvIGtvbXBvbmVudHUgKi99XG4gICAgICAgICAgPEZvcm11bGFyQWtjaWUgb25TdWJtaXRGb3JtPXt0aGlzLnByaWRlalByaXNwZXZla30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgIDxQcmlzcGV2ZWtBa2NpZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gVE8tRE8gLT4gdWTEm2xhdCBwYWsgbWVudSBuYWhvxZllLCBhbGVzcG/FiCAyIHrDoWxvxb5reSAoZHJ1aMOhIGJ1ZGUgcMWZZWhsZWQgcG9ydGZvbGlhKVxuLy8gZnVuY3Rpb24gQXBwKCkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxCcm93c2VyUm91dGVyPlxuLy8gICAgICAgPE5hdmlnYWNpYSAvPlxuLy8gICAgICAgPFJvdXRlcz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PE1haW4gLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiY29udGFjdFwiIGVsZW1lbnQ9ezxDb250YWN0IC8+fSAvPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cImxvZ2luXCIgZWxlbWVudD17PExvZ2luIC8+fSAvPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cInByb2R1Y3RzLypcIiBlbGVtZW50PXs8UHJvZHVjdHMgLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGVsZW1lbnQ9ezxOb3RGb3VuZCAvPn0gLz5cbi8vICAgICAgIDwvUm91dGVzPlxuLy8gICAgIDwvQnJvd3NlclJvdXRlcj5cbi8vICAgKTtcbi8vIH1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjM2UwMTZlM2YxNGI1YzZlNmUwMVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0ZVJvb3QiLCJGb3JtdWxhckFrY2llIiwiUHJpc3BldmVrQWtjaWUiLCJBcHAiLCJfQ29tcG9uZW50IiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9jYWxsU3VwZXIiLCJjb25jYXQiLCJzdGF0ZSIsInByaXNwZXZreSIsInpwcmF2YSIsInByaWRhalByaXNwZXZvayIsImUiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsIl90b0NvbnN1bWFibGVBcnJheSIsInZ5bWF6YXRQcmlzcGV2b2siLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdEZvcm0iLCJwcmlkZWpQcmlzcGV2ZWsiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCJdLCJzb3VyY2VSb290IjoiIn0=