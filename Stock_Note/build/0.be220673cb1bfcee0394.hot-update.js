"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _components_FormularAkcie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
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
    _this.pridejPrispevek = function (zprava) {
      // zde budu upravovat state a přidávat příspěvky
      _this.setState(function (prevState) {
        return {
          prispevky: [].concat(_toConsumableArray(prevState.prispevky), [zprava])
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
    // input: hodnota zpravy z inputu
    _this.napisZpravu = function (input) {
      _this.setState({
        zprava: input
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
      }, this.state.prispevky.map((prispevek, index)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
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
/******/ 	__webpack_require__.h = () => ("35235fb4723e0cbc2f06")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBQyxDQUFDOzs7Ozs7OztVQ3RFcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IEZvcm11bGFyQWtjaWUgZnJvbSBcIi4vY29tcG9uZW50cy9Gb3JtdWxhckFrY2llXCI7XG5pbXBvcnQgUHJpc3BldmVrQWtjaWUgZnJvbSBcIi4vY29tcG9uZW50cy9QcmlzcGV2ZWtBa2NpZVwiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBwcmlzcGV2a3k6IFtcIlByaXNwZXZla1wiXSwgLy8gcG9sZVxuICAgIHpwcmF2YTogXCJcIixcbiAgfTtcblxuICBwcmlkZWpQcmlzcGV2ZWsgPSAoenByYXZhKSA9PiB7XG4gICAgLy8gemRlIGJ1ZHUgdXByYXZvdmF0IHN0YXRlIGEgcMWZaWTDoXZhdCBwxZnDrXNwxJt2a3lcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByaXNwZXZreTogWy4uLnByZXZTdGF0ZS5wcmlzcGV2a3ksIHpwcmF2YV0sXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIHZ5bWF6YXRQcmlzcGV2b2sgPSAoaW5kZXhQcmlzcGV2a3UpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByaXNwZXZreTogcHJldlN0YXRlLnByaXNwZXZreS5maWx0ZXIoXG4gICAgICAgICAgKHByaXNwZXZlaywgaW5kZXgpID0+IGluZGV4UHJpc3Bldmt1ICE9PSBpbmRleFxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBpbnB1dDogaG9kbm90YSB6cHJhdnkgeiBpbnB1dHVcbiAgbmFwaXNacHJhdnUgPSAoaW5wdXQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgenByYXZhOiBpbnB1dCB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8aDE+U3RvY2sgTm90ZTwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgey8qIHRvdG8gYnVkZSBmdW5rY2UgcMWZaWTDoW7DrSBQcmlzcGV2ZWtBa2NpZSwgYWxlIG5lbcOhbSBuYXN0YXZlbsO9IGplxaF0xJsgbmVib8WlIHZlIHZpZGV1IGJ5bGEgY2xhc3NhPyDEjWFzIDI6MTI6MjEsIGFubyBqZSB0byBjbGFzcyBrb21wb25lbnQsIG5hcMOtxaF1IHRvIHRhayBhbGUgVE9ETyA9PiBwxZllcHNhdCB0byBqZWRub2R1xaFlamkgZG8gZnVua2Npb27DoWxuw61obyBrb21wb25lbnR1ICovfVxuICAgICAgICAgIDxGb3JtdWxhckFrY2llIG9uU3VibWl0Rm9ybT17dGhpcy5wcmlkZWpQcmlzcGV2ZWt9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5wcmlzcGV2a3kubWFwKChwcmlzcGV2ZWssIGluZGV4KSl9XG4gICAgICAgICAgPFByaXNwZXZla0FrY2llIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBUTy1ETyAtPiB1ZMSbbGF0IHBhayBtZW51IG5haG/FmWUsIGFsZXNwb8WIIDIgesOhbG/Fvmt5IChkcnVow6EgYnVkZSBwxZllaGxlZCBwb3J0Zm9saWEpXG4vLyBmdW5jdGlvbiBBcHAoKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPEJyb3dzZXJSb3V0ZXI+XG4vLyAgICAgICA8TmF2aWdhY2lhIC8+XG4vLyAgICAgICA8Um91dGVzPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8TWFpbiAvPn0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCJjb250YWN0XCIgZWxlbWVudD17PENvbnRhY3QgLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwibG9naW5cIiBlbGVtZW50PXs8TG9naW4gLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwicHJvZHVjdHMvKlwiIGVsZW1lbnQ9ezxQcm9kdWN0cyAvPn0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PE5vdEZvdW5kIC8+fSAvPlxuLy8gICAgICAgPC9Sb3V0ZXM+XG4vLyAgICAgPC9Ccm93c2VyUm91dGVyPlxuLy8gICApO1xuLy8gfVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM1MjM1ZmI0NzIzZTBjYmMyZjA2XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY3JlYXRlUm9vdCIsIkZvcm11bGFyQWtjaWUiLCJQcmlzcGV2ZWtBa2NpZSIsIkFwcCIsIl9Db21wb25lbnQiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiX2NhbGxTdXBlciIsImNvbmNhdCIsInN0YXRlIiwicHJpc3Bldmt5IiwienByYXZhIiwicHJpZGVqUHJpc3BldmVrIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ2eW1hemF0UHJpc3Bldm9rIiwiaW5kZXhQcmlzcGV2a3UiLCJmaWx0ZXIiLCJwcmlzcGV2ZWsiLCJpbmRleCIsIm5hcGlzWnByYXZ1IiwiaW5wdXQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdEZvcm0iLCJtYXAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCJdLCJzb3VyY2VSb290IjoiIn0=