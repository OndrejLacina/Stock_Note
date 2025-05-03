self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _components_FormularAkcie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var _components_FormularAkcie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_FormularAkcie__WEBPACK_IMPORTED_MODULE_2__);
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Stock Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_components_FormularAkcie__WEBPACK_IMPORTED_MODULE_2___default()), {
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

/***/ 35:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/ondrejlacina/CL/ONL_FER_W_105_React/Stock_Note/js/components/FormularAkcie.js: JSX attributes must only be assigned a non-empty expression. (22:19)\n\n\u001b[0m \u001b[90m 20 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 21 |\u001b[39m       {\u001b[90m/* na potvrzení tohoto formuláře aka \"event uživatele\" aka \"kliknutí na \"odesliSpravu\" aka \"onSubmit\" se vykoná vše, co je ve funkci odesliSpravu (respektive vložení akcie -> vytvoření nového komponentu, kde pak budu dávat transakce akcií => TO-DO??) */\u001b[39m}\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 22 |\u001b[39m       \u001b[33m<\u001b[39m\u001b[33mform\u001b[39m method\u001b[33m=\u001b[39m{} className\u001b[33m=\u001b[39m\u001b[32m\"input-area\"\u001b[39m onSubmit\u001b[33m=\u001b[39m{odesliSpravu}\u001b[33m>\u001b[39m\n \u001b[90m    |\u001b[39m                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 23 |\u001b[39m         {\u001b[90m/* napisSpravu je funkce, kterou si tvořím výše, pro tento Formulář komponent */\u001b[39m}\n \u001b[90m 24 |\u001b[39m         \u001b[33m<\u001b[39m\u001b[33mInputVeFormulari\u001b[39m onChangeText\u001b[33m=\u001b[39m{napisSpravu} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m{\u001b[32m\" \"\u001b[39m}\n \u001b[90m 25 |\u001b[39m         {\u001b[90m/* nefungovalo mi zde zachytávání zprávy, že byla odeslaná \"odosliSpravu\", protože ButtonPridatAkcii byl v divu pod - bud to nastylovat, ať je to jakoby mimo příspěvek nebo to naprogramovat, aby to bylo vedle v divu, ale dělalo to stejný */\u001b[39m}\u001b[0m\n    at constructor (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:360:19)\n    at JSXParserMixin.raise (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:3327:19)\n    at JSXParserMixin.jsxParseAttributeValue (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:6778:16)\n    at JSXParserMixin.jsxParseAttribute (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:6825:38)\n    at JSXParserMixin.jsxParseOpeningElementAfterName (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:6839:28)\n    at JSXParserMixin.jsxParseOpeningElementAt (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:6834:17)\n    at JSXParserMixin.jsxParseElementAt (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:6858:33)\n    at JSXParserMixin.jsxParseElementAt (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:6870:32)\n    at JSXParserMixin.jsxParseElement (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:6921:17)\n    at JSXParserMixin.parseExprAtom (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:6931:19)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8aaf91b16e3c6fd9d715")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dGUvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgRm9ybXVsYXJBa2NpZSBmcm9tIFwiLi9jb21wb25lbnRzL0Zvcm11bGFyQWtjaWVcIjtcbmltcG9ydCBQcmlzcGV2ZWtBa2NpZSBmcm9tIFwiLi9jb21wb25lbnRzL1ByaXNwZXZla0FrY2llXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHByaXNwZXZreTogW1wiUHJpc3BldmVrXCJdLCAvLyBwb2xlXG4gICAgenByYXZhOiBcIlwiLFxuICB9O1xuXG4gIHByaWRhalByaXNwZXZvayA9ICh6cHJhdmEpID0+IHtcbiAgICAvLyB6ZGUgYnVkdSB1cHJhdm92YXQgc3RhdGUgYSBwxZlpZMOhdmF0IHDFmcOtc3DEm3ZreVxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJpc3Bldmt5OiBbLi4ucHJldlN0YXRlLnByaXNwZXZreSwgenByYXZhXSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgdnltYXphdFByaXNwZXZvayA9IChpbmRleFByaXNwZXZrdSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJpc3Bldmt5OiBwcmV2U3RhdGUucHJpc3Bldmt5LmZpbHRlcihcbiAgICAgICAgICAocHJpc3BldmVrLCBpbmRleCkgPT4gaW5kZXhQcmlzcGV2a3UgIT09IGluZGV4XG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIGlucHV0OiBob2Rub3RhIHpwcmF2eSB6IGlucHV0dVxuICBuYXBpc1pwcmF2dSA9IChpbnB1dCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB6cHJhdmE6IGlucHV0IH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxoMT5TdG9jayBOb3RlPC9oMT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7LyogdG90byBidWRlIGZ1bmtjZSBwxZlpZMOhbsOtIFByaXNwZXZla0FrY2llLCBhbGUgbmVtw6FtIG5hc3RhdmVuw70gamXFoXTEmyBuZWJvxaUgdmUgdmlkZXUgYnlsYSBjbGFzc2E/IMSNYXMgMjoxMjoyMSwgYW5vIGplIHRvIGNsYXNzIGtvbXBvbmVudCwgbmFww63FoXUgdG8gdGFrIGFsZSBUT0RPID0+IHDFmWVwc2F0IHRvIGplZG5vZHXFoWVqaSBkbyBmdW5rY2lvbsOhbG7DrWhvIGtvbXBvbmVudHUgKi99XG4gICAgICAgICAgPEZvcm11bGFyQWtjaWUgb25TdWJtaXRGb3JtPXt0aGlzLnByaWRlalByaXNwZXZla30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgIDxQcmlzcGV2ZWtBa2NpZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gVE8tRE8gLT4gdWTEm2xhdCBwYWsgbWVudSBuYWhvxZllLCBhbGVzcG/FiCAyIHrDoWxvxb5reSAoZHJ1aMOhIGJ1ZGUgcMWZZWhsZWQgcG9ydGZvbGlhKVxuLy8gZnVuY3Rpb24gQXBwKCkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxCcm93c2VyUm91dGVyPlxuLy8gICAgICAgPE5hdmlnYWNpYSAvPlxuLy8gICAgICAgPFJvdXRlcz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PE1haW4gLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiY29udGFjdFwiIGVsZW1lbnQ9ezxDb250YWN0IC8+fSAvPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cImxvZ2luXCIgZWxlbWVudD17PExvZ2luIC8+fSAvPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cInByb2R1Y3RzLypcIiBlbGVtZW50PXs8UHJvZHVjdHMgLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGVsZW1lbnQ9ezxOb3RGb3VuZCAvPn0gLz5cbi8vICAgICAgIDwvUm91dGVzPlxuLy8gICAgIDwvQnJvd3NlclJvdXRlcj5cbi8vICAgKTtcbi8vIH1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4YWFmOTFiMTZlM2M2ZmQ5ZDcxNVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0ZVJvb3QiLCJGb3JtdWxhckFrY2llIiwiUHJpc3BldmVrQWtjaWUiLCJBcHAiLCJfQ29tcG9uZW50IiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9jYWxsU3VwZXIiLCJjb25jYXQiLCJzdGF0ZSIsInByaXNwZXZreSIsInpwcmF2YSIsInByaWRhalByaXNwZXZvayIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwidnltYXphdFByaXNwZXZvayIsImluZGV4UHJpc3Bldmt1IiwiZmlsdGVyIiwicHJpc3BldmVrIiwiaW5kZXgiLCJuYXBpc1pwcmF2dSIsImlucHV0IiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25TdWJtaXRGb3JtIiwicHJpZGVqUHJpc3BldmVrIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiXSwic291cmNlUm9vdCI6IiJ9