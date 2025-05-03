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
    _this.pridajPrispevok = function (zprava) {
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

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function buttonPridatAkcii(_ref) {
  var onClickProp = _ref.onClickProp;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "submit-button",
    onClick: onClickProp
  }, "P\u0159idat akcii"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonPridatAkcii);

/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputVeFormulari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _ButtonPridatAkcii__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



function FormularAkcie(_ref) {
  var onSubmitForm = _ref.onSubmitForm;
  // jdu ukládat zprávu, která bude text, takže tu zprávu chci mít uloženou v nějaké hodnotě, hodnota v tom STATU je "zprava" (mohlo by to být spíš "ticker nebo stock nebo akcie", že?), "setZprava" je manažer té hodnoty "zprava" a ted už jen inicializační hodnota v useState () a dám tam prázdný textový řetězec
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    zprava = _useState2[0],
    setZprava = _useState2[1];
  function napisSpravu(textSpravy) {
    setZprava(textSpravy);
  }

  // jestli to nepůjde, tak v čase 1:45h se řeší console
  function odesliSpravu() {
    console.log("zprava odeslaná");
    onSubmitForm(zprava);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    method: "POST",
    className: "input-area",
    onSubmit: odesliSpravu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputVeFormulari__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChangeText: napisSpravu
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ButtonPridatAkcii__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormularAkcie);

/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function InputVeFormulari(_ref) {
  var onChangeText = _ref.onChangeText;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    className: "textarea",
    placeholder: "Vlo\u017E novou akcii..",
    rows: 2,
    name: "zprava",
    onChange: function onChange(event) {
      return onChangeText(event.target.value);
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputVeFormulari);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("01761292c3c817b2ca30")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtFQUFBLElBQWhCa0IsWUFBWSxHQUFBbEIsSUFBQSxDQUFaa0IsWUFBWTtFQUN0QyxvQkFDRS9ELDBEQUFBO0lBQ0VxQyxTQUFTLEVBQUMsVUFBVTtJQUNwQjJCLFdBQVcsRUFBQyx5QkFBb0I7SUFDaENDLElBQUksRUFBRSxDQUFFO0lBQ1JDLElBQUksRUFBQyxRQUFRO0lBQ2JDLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHQyxLQUFLO01BQUEsT0FBS0wsWUFBWSxDQUFDSyxLQUFLLENBQUNDLE1BQU0sQ0FBQ25DLEtBQUssQ0FBQztJQUFBO0VBQUMsQ0FDN0MsQ0FBQztBQUVoQjtBQUVBLGlFQUFlZSxnQkFBZ0I7Ozs7Ozs7O1VDZC9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9jb21wb25lbnRzL0J1dHRvblByaWRhdEFrY2lpLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9Gb3JtdWxhckFrY2llLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9JbnB1dFZlRm9ybXVsYXJpLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgRm9ybXVsYXJBa2NpZSBmcm9tIFwiLi9jb21wb25lbnRzL0Zvcm11bGFyQWtjaWVcIjtcbmltcG9ydCBQcmlzcGV2ZWtBa2NpZSBmcm9tIFwiLi9jb21wb25lbnRzL1ByaXNwZXZla0FrY2llXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHByaXNwZXZreTogW1wiUHJpc3BldmVrXCJdLCAvLyBwb2xlXG4gICAgenByYXZhOiBcIlwiLFxuICB9O1xuXG4gIHByaWRhalByaXNwZXZvayA9ICh6cHJhdmEpID0+IHtcbiAgICAvLyB6ZGUgYnVkdSB1cHJhdm92YXQgc3RhdGUgYSBwxZlpZMOhdmF0IHDFmcOtc3DEm3ZreVxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJpc3Bldmt5OiBbLi4ucHJldlN0YXRlLnByaXNwZXZreSwgenByYXZhXSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgdnltYXphdFByaXNwZXZvayA9IChpbmRleFByaXNwZXZrdSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJpc3Bldmt5OiBwcmV2U3RhdGUucHJpc3Bldmt5LmZpbHRlcihcbiAgICAgICAgICAocHJpc3BldmVrLCBpbmRleCkgPT4gaW5kZXhQcmlzcGV2a3UgIT09IGluZGV4XG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIGlucHV0OiBob2Rub3RhIHpwcmF2eSB6IGlucHV0dVxuICBuYXBpc1pwcmF2dSA9IChpbnB1dCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB6cHJhdmE6IGlucHV0IH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxoMT5TdG9jayBOb3RlPC9oMT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7LyogdG90byBidWRlIGZ1bmtjZSBwxZlpZMOhbsOtIFByaXNwZXZla0FrY2llLCBhbGUgbmVtw6FtIG5hc3RhdmVuw70gamXFoXTEmyBuZWJvxaUgdmUgdmlkZXUgYnlsYSBjbGFzc2E/IMSNYXMgMjoxMjoyMSwgYW5vIGplIHRvIGNsYXNzIGtvbXBvbmVudCwgbmFww63FoXUgdG8gdGFrIGFsZSBUT0RPID0+IHDFmWVwc2F0IHRvIGplZG5vZHXFoWVqaSBkbyBmdW5rY2lvbsOhbG7DrWhvIGtvbXBvbmVudHUgKi99XG4gICAgICAgICAgPEZvcm11bGFyQWtjaWUgb25TdWJtaXRGb3JtPXt0aGlzLnByaWRlalByaXNwZXZla30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgIDxQcmlzcGV2ZWtBa2NpZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gVE8tRE8gLT4gdWTEm2xhdCBwYWsgbWVudSBuYWhvxZllLCBhbGVzcG/FiCAyIHrDoWxvxb5reSAoZHJ1aMOhIGJ1ZGUgcMWZZWhsZWQgcG9ydGZvbGlhKVxuLy8gZnVuY3Rpb24gQXBwKCkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxCcm93c2VyUm91dGVyPlxuLy8gICAgICAgPE5hdmlnYWNpYSAvPlxuLy8gICAgICAgPFJvdXRlcz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PE1haW4gLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiY29udGFjdFwiIGVsZW1lbnQ9ezxDb250YWN0IC8+fSAvPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cImxvZ2luXCIgZWxlbWVudD17PExvZ2luIC8+fSAvPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cInByb2R1Y3RzLypcIiBlbGVtZW50PXs8UHJvZHVjdHMgLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGVsZW1lbnQ9ezxOb3RGb3VuZCAvPn0gLz5cbi8vICAgICAgIDwvUm91dGVzPlxuLy8gICAgIDwvQnJvd3NlclJvdXRlcj5cbi8vICAgKTtcbi8vIH1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIGJ1dHRvblByaWRhdEFrY2lpKHsgb25DbGlja1Byb3AgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdC1idXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrUHJvcH0+XG4gICAgICAgIFDFmWlkYXQgYWtjaWlcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBidXR0b25QcmlkYXRBa2NpaTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0VmVGb3JtdWxhcmkgZnJvbSBcIi4vSW5wdXRWZUZvcm11bGFyaVwiO1xuaW1wb3J0IEJ1dHRvblByaWRhdEFrY2lpIGZyb20gXCIuL0J1dHRvblByaWRhdEFrY2lpXCI7XG5cbmZ1bmN0aW9uIEZvcm11bGFyQWtjaWUoeyBvblN1Ym1pdEZvcm0gfSkge1xuICAvLyBqZHUgdWtsw6FkYXQgenByw6F2dSwga3RlcsOhIGJ1ZGUgdGV4dCwgdGFrxb5lIHR1IHpwcsOhdnUgY2hjaSBtw610IHVsb8W+ZW5vdSB2IG7Em2pha8OpIGhvZG5vdMSbLCBob2Rub3RhIHYgdG9tIFNUQVRVIGplIFwienByYXZhXCIgKG1vaGxvIGJ5IHRvIGLDvXQgc3DDrcWhIFwidGlja2VyIG5lYm8gc3RvY2sgbmVibyBha2NpZVwiLCDFvmU/KSwgXCJzZXRacHJhdmFcIiBqZSBtYW5hxb5lciB0w6kgaG9kbm90eSBcInpwcmF2YVwiIGEgdGVkIHXFviBqZW4gaW5pY2lhbGl6YcSNbsOtIGhvZG5vdGEgdiB1c2VTdGF0ZSAoKSBhIGTDoW0gdGFtIHByw6F6ZG7DvSB0ZXh0b3bDvSDFmWV0xJt6ZWNcbiAgY29uc3QgW3pwcmF2YSwgc2V0WnByYXZhXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGZ1bmN0aW9uIG5hcGlzU3ByYXZ1KHRleHRTcHJhdnkpIHtcbiAgICBzZXRacHJhdmEodGV4dFNwcmF2eSk7XG4gIH1cblxuICAvLyBqZXN0bGkgdG8gbmVwxa9qZGUsIHRhayB2IMSNYXNlIDE6NDVoIHNlIMWZZcWhw60gY29uc29sZVxuICBmdW5jdGlvbiBvZGVzbGlTcHJhdnUoKSB7XG4gICAgY29uc29sZS5sb2coXCJ6cHJhdmEgb2Rlc2xhbsOhXCIpO1xuICAgIG9uU3VibWl0Rm9ybSh6cHJhdmEpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIG5hIHBvdHZyemVuw60gdG9ob3RvIGZvcm11bMOhxZllIGFrYSBcImV2ZW50IHXFvml2YXRlbGVcIiBha2EgXCJrbGlrbnV0w60gbmEgXCJvZGVzbGlTcHJhdnVcIiBha2EgXCJvblN1Ym1pdFwiIHNlIHZ5a29uw6EgdsWhZSwgY28gamUgdmUgZnVua2NpIG9kZXNsaVNwcmF2dSAocmVzcGVrdGl2ZSB2bG/FvmVuw60gYWtjaWUgLT4gdnl0dm/FmWVuw60gbm92w6lobyBrb21wb25lbnR1LCBrZGUgcGFrIGJ1ZHUgZMOhdmF0IHRyYW5zYWtjZSBha2Npw60gPT4gVE8tRE8/PykgKi99XG4gICAgICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgY2xhc3NOYW1lPVwiaW5wdXQtYXJlYVwiIG9uU3VibWl0PXtvZGVzbGlTcHJhdnV9PlxuICAgICAgICB7LyogbmFwaXNTcHJhdnUgamUgZnVua2NlLCBrdGVyb3Ugc2kgdHZvxZnDrW0gdsO9xaFlLCBwcm8gdGVudG8gRm9ybXVsw6HFmSBrb21wb25lbnQgKi99XG4gICAgICAgIDxJbnB1dFZlRm9ybXVsYXJpIG9uQ2hhbmdlVGV4dD17bmFwaXNTcHJhdnV9IC8+e1wiIFwifVxuICAgICAgICB7LyogbmVmdW5nb3ZhbG8gbWkgemRlIHphY2h5dMOhdsOhbsOtIHpwcsOhdnksIMW+ZSBieWxhIG9kZXNsYW7DoSBcIm9kb3NsaVNwcmF2dVwiLCBwcm90b8W+ZSBCdXR0b25QcmlkYXRBa2NpaSBieWwgdiBkaXZ1IHBvZCAtIGJ1ZCB0byBuYXN0eWxvdmF0LCBhxaUgamUgdG8gamFrb2J5IG1pbW8gcMWZw61zcMSbdmVrIG5lYm8gdG8gbmFwcm9ncmFtb3ZhdCwgYWJ5IHRvIGJ5bG8gdmVkbGUgdiBkaXZ1LCBhbGUgZMSbbGFsbyB0byBzdGVqbsO9ICovfVxuICAgICAgICA8QnV0dG9uUHJpZGF0QWtjaWkgLz5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXY+PC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm11bGFyQWtjaWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIElucHV0VmVGb3JtdWxhcmkoeyBvbkNoYW5nZVRleHQgfSkge1xuICByZXR1cm4gKFxuICAgIDx0ZXh0YXJlYVxuICAgICAgY2xhc3NOYW1lPVwidGV4dGFyZWFcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJWbG/FviBub3ZvdSBha2NpaS4uXCJcbiAgICAgIHJvd3M9ezJ9XG4gICAgICBuYW1lPVwienByYXZhXCJcbiAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uQ2hhbmdlVGV4dChldmVudC50YXJnZXQudmFsdWUpfVxuICAgID48L3RleHRhcmVhPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFZlRm9ybXVsYXJpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDE3NjEyOTJjM2M4MTdiMmNhMzBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjcmVhdGVSb290IiwiRm9ybXVsYXJBa2NpZSIsIlByaXNwZXZla0FrY2llIiwiQXBwIiwiX0NvbXBvbmVudCIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfY2FsbFN1cGVyIiwiY29uY2F0Iiwic3RhdGUiLCJwcmlzcGV2a3kiLCJ6cHJhdmEiLCJwcmlkYWpQcmlzcGV2b2siLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsIl90b0NvbnN1bWFibGVBcnJheSIsInZ5bWF6YXRQcmlzcGV2b2siLCJpbmRleFByaXNwZXZrdSIsImZpbHRlciIsInByaXNwZXZlayIsImluZGV4IiwibmFwaXNacHJhdnUiLCJpbnB1dCIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0Rm9ybSIsInByaWRlalByaXNwZXZlayIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiYnV0dG9uUHJpZGF0QWtjaWkiLCJfcmVmIiwib25DbGlja1Byb3AiLCJvbkNsaWNrIiwidXNlU3RhdGUiLCJJbnB1dFZlRm9ybXVsYXJpIiwiQnV0dG9uUHJpZGF0QWtjaWkiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZXRacHJhdmEiLCJuYXBpc1NwcmF2dSIsInRleHRTcHJhdnkiLCJvZGVzbGlTcHJhdnUiLCJjb25zb2xlIiwibG9nIiwiRnJhZ21lbnQiLCJtZXRob2QiLCJvblN1Ym1pdCIsIm9uQ2hhbmdlVGV4dCIsInBsYWNlaG9sZGVyIiwicm93cyIsIm5hbWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==