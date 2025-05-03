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
          prispevky: prevState.prispevky.filter(prispevek, index)
        };
      });
    };
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
/******/ 	__webpack_require__.h = () => ("6db1760dc738c910a12d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZmY2MWVlYjk2ODFhYzMyNDFjMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDSztBQUNTO0FBQ0U7QUFBQSxJQUVuREssR0FBRywwQkFBQUMsVUFBQTtFQUFBLFNBQUFELElBQUE7SUFBQSxJQUFBRSxLQUFBO0lBQUFDLGVBQUEsT0FBQUgsR0FBQTtJQUFBLFNBQUFJLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFDLElBQUEsT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7TUFBQUYsSUFBQSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTtJQUFBO0lBQUFQLEtBQUEsR0FBQVEsVUFBQSxPQUFBVixHQUFBLEtBQUFXLE1BQUEsQ0FBQUosSUFBQTtJQUFBTCxLQUFBLENBQ1BVLEtBQUssR0FBRztNQUNOQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7TUFBRTtNQUMxQkMsTUFBTSxFQUFFO0lBQ1YsQ0FBQztJQUFBWixLQUFBLENBRURhLGVBQWUsR0FBRyxVQUFDQyxDQUFDLEVBQUs7TUFDdkI7TUFDQWQsS0FBQSxDQUFLZSxRQUFRLENBQUMsVUFBQ0MsU0FBUyxFQUFLO1FBQzNCLE9BQU87VUFDTEwsU0FBUyxLQUFBRixNQUFBLENBQUFRLGtCQUFBLENBQU1ELFNBQVMsQ0FBQ0wsU0FBUyxJQUFFSyxTQUFTLENBQUNKLE1BQU07UUFDdEQsQ0FBQztNQUNILENBQUMsQ0FBQztJQUNKLENBQUM7SUFBQVosS0FBQSxDQUVEa0IsZ0JBQWdCLEdBQUcsVUFBQ0MsY0FBYyxFQUFLO01BQ3JDbkIsS0FBQSxDQUFLZSxRQUFRLENBQUMsVUFBQ0MsU0FBUyxFQUFLO1FBQzNCLE9BQU87VUFDTEwsU0FBUyxFQUFFSyxTQUFTLENBQUNMLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDQyxTQUFTLEVBQUVDLEtBQUs7UUFDeEQsQ0FBQztNQUNILENBQUMsQ0FBQztJQUNKLENBQUM7SUFBQSxPQUFBdEIsS0FBQTtFQUFBO0VBQUF1QixTQUFBLENBQUF6QixHQUFBLEVBQUFDLFVBQUE7RUFBQSxPQUFBeUIsWUFBQSxDQUFBMUIsR0FBQTtJQUFBMkIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsTUFBTUEsQ0FBQSxFQUFHO01BQ1Asb0JBQ0VsQywwREFBQTtRQUFLb0MsU0FBUyxFQUFDO01BQVMsZ0JBQ3RCcEMsMERBQUEsYUFBSSxZQUFjLENBQUMsZUFDbkJBLDBEQUFBLDJCQUVFQSwwREFBQSxDQUFDRyxpRUFBYTtRQUFDa0MsWUFBWSxFQUFFLElBQUksQ0FBQ0M7TUFBZ0IsQ0FBRSxDQUNqRCxDQUFDLGVBQ050QywwREFBQTtRQUFLb0MsU0FBUyxFQUFDO01BQU0sZ0JBQ25CcEMsMERBQUEsQ0FBQ0ksa0VBQWMsTUFBRSxDQUNkLENBQ0YsQ0FBQztJQUVWO0VBQUM7QUFBQSxFQXBDZUgsNENBQVMsR0F1QzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1zQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUd4Qyw0REFBVSxDQUFDcUMsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNSLE1BQU0sY0FBQ2xDLDBEQUFBLENBQUNLLEdBQUcsTUFBRSxDQUFDLENBQUM7Ozs7Ozs7O1VDOURwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgRm9ybXVsYXJBa2NpZSBmcm9tIFwiLi9jb21wb25lbnRzL0Zvcm11bGFyQWtjaWVcIjtcbmltcG9ydCBQcmlzcGV2ZWtBa2NpZSBmcm9tIFwiLi9jb21wb25lbnRzL1ByaXNwZXZla0FrY2llXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHByaXNwZXZreTogW1wiUHJpc3BldmVrXCJdLCAvLyBwb2xlXG4gICAgenByYXZhOiBcIlwiLFxuICB9O1xuXG4gIHByaWRhalByaXNwZXZvayA9IChlKSA9PiB7XG4gICAgLy8gemRlIGJ1ZHUgdXByYXZvdmF0IHN0YXRlIGEgcMWZaWTDoXZhdCBwxZnDrXNwxJt2a3lcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByaXNwZXZreTogWy4uLnByZXZTdGF0ZS5wcmlzcGV2a3ksIHByZXZTdGF0ZS56cHJhdmFdLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICB2eW1hemF0UHJpc3Bldm9rID0gKGluZGV4UHJpc3Bldmt1KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcmlzcGV2a3k6IHByZXZTdGF0ZS5wcmlzcGV2a3kuZmlsdGVyKHByaXNwZXZlaywgaW5kZXgpLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8aDE+U3RvY2sgTm90ZTwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgey8qIHRvdG8gYnVkZSBmdW5rY2UgcMWZaWTDoW7DrSBQcmlzcGV2ZWtBa2NpZSwgYWxlIG5lbcOhbSBuYXN0YXZlbsO9IGplxaF0xJsgbmVib8WlIHZlIHZpZGV1IGJ5bGEgY2xhc3NhPyDEjWFzIDI6MTI6MjEsIGFubyBqZSB0byBjbGFzcyBrb21wb25lbnQsIG5hcMOtxaF1IHRvIHRhayBhbGUgVE9ETyA9PiBwxZllcHNhdCB0byBqZWRub2R1xaFlamkgZG8gZnVua2Npb27DoWxuw61obyBrb21wb25lbnR1ICovfVxuICAgICAgICAgIDxGb3JtdWxhckFrY2llIG9uU3VibWl0Rm9ybT17dGhpcy5wcmlkZWpQcmlzcGV2ZWt9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICA8UHJpc3BldmVrQWtjaWUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIFRPLURPIC0+IHVkxJtsYXQgcGFrIG1lbnUgbmFob8WZZSwgYWxlc3BvxYggMiB6w6Fsb8W+a3kgKGRydWjDoSBidWRlIHDFmWVobGVkIHBvcnRmb2xpYSlcbi8vIGZ1bmN0aW9uIEFwcCgpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8QnJvd3NlclJvdXRlcj5cbi8vICAgICAgIDxOYXZpZ2FjaWEgLz5cbi8vICAgICAgIDxSb3V0ZXM+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxNYWluIC8+fSAvPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cImNvbnRhY3RcIiBlbGVtZW50PXs8Q29udGFjdCAvPn0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCJsb2dpblwiIGVsZW1lbnQ9ezxMb2dpbiAvPn0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCJwcm9kdWN0cy8qXCIgZWxlbWVudD17PFByb2R1Y3RzIC8+fSAvPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBlbGVtZW50PXs8Tm90Rm91bmQgLz59IC8+XG4vLyAgICAgICA8L1JvdXRlcz5cbi8vICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4vLyAgICk7XG4vLyB9XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmRiMTc2MGRjNzM4YzkxMGExMmRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjcmVhdGVSb290IiwiRm9ybXVsYXJBa2NpZSIsIlByaXNwZXZla0FrY2llIiwiQXBwIiwiX0NvbXBvbmVudCIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfY2FsbFN1cGVyIiwiY29uY2F0Iiwic3RhdGUiLCJwcmlzcGV2a3kiLCJ6cHJhdmEiLCJwcmlkYWpQcmlzcGV2b2siLCJlIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ2eW1hemF0UHJpc3Bldm9rIiwiaW5kZXhQcmlzcGV2a3UiLCJmaWx0ZXIiLCJwcmlzcGV2ZWsiLCJpbmRleCIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0Rm9ybSIsInByaWRlalByaXNwZXZlayIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290Il0sInNvdXJjZVJvb3QiOiIifQ==