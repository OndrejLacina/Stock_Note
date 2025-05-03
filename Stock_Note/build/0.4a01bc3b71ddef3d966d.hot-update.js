"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FormularAkcie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
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

// import { createRoot } from "react-dom/client";



var App = /*#__PURE__*/function (_Component) {
  function App() {
    var _this;
    _classCallCheck(this, App);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, App, [].concat(args));
    _this.state = {
      prispevky: [],
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
      var _this2 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Stock Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormularAkcie__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onSubmitForm: this.pridejPrispevek
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "list"
      }, this.state.prispevky.map(function (prispevek, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: index,
          text: prispevek,
          onDelete: function onDelete() {
            return _this2.vymazatPrispevok(index);
          }
        });
      })));
    }
  }]);
}(Component);
{
  /* // TO-DO -> udělat pak menu nahoře, alespoň 2 záložky (druhá bude přehled portfolia)
  // function App() { */
}
{
  /* //   return (
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
  // } */
}
var container = document.getElementById("app");
var root = createRoot(container);
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8d8feb354d970cc0e3ba")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkU7QUFlRixJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdDLFVBQVUsQ0FBQ0osU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNaLE1BQU0sY0FBQ3JDLDBEQUFBLENBQUNPLEdBQUcsTUFBRSxDQUFDLENBQUM7Ozs7Ozs7O1VDbkZwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgRm9ybXVsYXJBa2NpZSBmcm9tIFwiLi9jb21wb25lbnRzL0Zvcm11bGFyQWtjaWVcIjtcbmltcG9ydCBQcmlzcGV2ZWtBa2NpZSBmcm9tIFwiLi9jb21wb25lbnRzL1ByaXNwZXZla0FrY2llXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHByaXNwZXZreTogW10sIC8vIHBvbGVcbiAgICB6cHJhdmE6IFwiXCIsXG4gIH07XG5cbiAgcHJpZGVqUHJpc3BldmVrID0gKHpwcmF2YSkgPT4ge1xuICAgIC8vIHpkZSBidWR1IHVwcmF2b3ZhdCBzdGF0ZSBhIHDFmWlkw6F2YXQgcMWZw61zcMSbdmt5XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcmlzcGV2a3k6IFsuLi5wcmV2U3RhdGUucHJpc3Bldmt5LCB6cHJhdmFdLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICB2eW1hemF0UHJpc3Bldm9rID0gKGluZGV4UHJpc3Bldmt1KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcmlzcGV2a3k6IHByZXZTdGF0ZS5wcmlzcGV2a3kuZmlsdGVyKFxuICAgICAgICAgIChwcmlzcGV2ZWssIGluZGV4KSA9PiBpbmRleFByaXNwZXZrdSAhPT0gaW5kZXhcbiAgICAgICAgKSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gaW5wdXQ6IGhvZG5vdGEgenByYXZ5IHogaW5wdXR1XG4gIG5hcGlzWnByYXZ1ID0gKGlucHV0KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHpwcmF2YTogaW5wdXQgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgPGgxPlN0b2NrIE5vdGU8L2gxPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsvKiB0b3RvIGJ1ZGUgZnVua2NlIHDFmWlkw6Fuw60gUHJpc3BldmVrQWtjaWUsIGFsZSBuZW3DoW0gbmFzdGF2ZW7DvSBqZcWhdMSbIG5lYm/FpSB2ZSB2aWRldSBieWxhIGNsYXNzYT8gxI1hcyAyOjEyOjIxLCBhbm8gamUgdG8gY2xhc3Mga29tcG9uZW50LCBuYXDDrcWhdSB0byB0YWsgYWxlIFRPRE8gPT4gcMWZZXBzYXQgdG8gamVkbm9kdcWhZWppIGRvIGZ1bmtjaW9uw6FsbsOtaG8ga29tcG9uZW50dSAqL31cbiAgICAgICAgICA8Rm9ybXVsYXJBa2NpZSBvblN1Ym1pdEZvcm09e3RoaXMucHJpZGVqUHJpc3BldmVrfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUucHJpc3Bldmt5Lm1hcCgocHJpc3BldmVrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFByaXNwZXZla0FrY2llXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICB0ZXh0PXtwcmlzcGV2ZWt9XG4gICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IHRoaXMudnltYXphdFByaXNwZXZvayhpbmRleCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxue1xuICAvKiAvLyBUTy1ETyAtPiB1ZMSbbGF0IHBhayBtZW51IG5haG/FmWUsIGFsZXNwb8WIIDIgesOhbG/Fvmt5IChkcnVow6EgYnVkZSBwxZllaGxlZCBwb3J0Zm9saWEpXG4vLyBmdW5jdGlvbiBBcHAoKSB7ICovXG59XG57XG4gIC8qIC8vICAgcmV0dXJuIChcbi8vICAgICA8QnJvd3NlclJvdXRlcj5cbi8vICAgICAgIDxOYXZpZ2FjaWEgLz5cbi8vICAgICAgIDxSb3V0ZXM+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxNYWluIC8+fSAvPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cImNvbnRhY3RcIiBlbGVtZW50PXs8Q29udGFjdCAvPn0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCJsb2dpblwiIGVsZW1lbnQ9ezxMb2dpbiAvPn0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCJwcm9kdWN0cy8qXCIgZWxlbWVudD17PFByb2R1Y3RzIC8+fSAvPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBlbGVtZW50PXs8Tm90Rm91bmQgLz59IC8+XG4vLyAgICAgICA8L1JvdXRlcz5cbi8vICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4vLyAgICk7XG4vLyB9ICovXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGQ4ZmViMzU0ZDk3MGNjMGUzYmFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkZvcm11bGFyQWtjaWUiLCJQcmlzcGV2ZWtBa2NpZSIsIkFwcCIsIl9Db21wb25lbnQiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiX2NhbGxTdXBlciIsImNvbmNhdCIsInN0YXRlIiwicHJpc3Bldmt5IiwienByYXZhIiwicHJpZGVqUHJpc3BldmVrIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ2eW1hemF0UHJpc3Bldm9rIiwiaW5kZXhQcmlzcGV2a3UiLCJmaWx0ZXIiLCJwcmlzcGV2ZWsiLCJpbmRleCIsIm5hcGlzWnByYXZ1IiwiaW5wdXQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIl90aGlzMiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdEZvcm0iLCJtYXAiLCJ0ZXh0Iiwib25EZWxldGUiLCJDb21wb25lbnQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsImNyZWF0ZVJvb3QiXSwic291cmNlUm9vdCI6IiJ9