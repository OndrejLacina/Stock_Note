self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _components_FormularAkcie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_3__);
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
      prispevky: [],
      // pole
      zprava: ""
    };
    _this.pridejPrispevek = function (zprava) {
      // zde budu upravovat state a přidávat příspěvky
      _this.setState(function (prevState) {
        return {
          prispevky: [zprava].concat(_toConsumableArray(prevState.prispevky))
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Stock Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormularAkcie__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onSubmitForm: this.pridejPrispevek
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "list"
      }, this.state.prispevky.map(function (prispevek, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_3___default()), {
          key: index,
          text: prispevek,
          onDelete: function onDelete() {
            return _this2.vymazatPrispevok(index);
          }
        });
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
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
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ 37:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/ondrejlacina/CL/ONL_FER_W_105_React/Stock_Note/js/components/PrispevekAkcie.js: Unexpected token, expected \",\" (11:13)\n\n\u001b[0m \u001b[90m  9 |\u001b[39m     cena\u001b[33m:\u001b[39m \u001b[32m\"\"\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 10 |\u001b[39m     kusy\u001b[33m:\u001b[39m \u001b[32m\"\"\u001b[39m\u001b[33m,\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 11 |\u001b[39m     poplatek \u001b[32m\"\"\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m    |\u001b[39m              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 12 |\u001b[39m     datum\u001b[33m:\u001b[39m \u001b[32m\"\"\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 13 |\u001b[39m   })\u001b[33m;\u001b[39m\n \u001b[90m 14 |\u001b[39m\u001b[0m\n    at constructor (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:360:19)\n    at JSXParserMixin.raise (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:3327:19)\n    at JSXParserMixin.unexpected (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:3347:16)\n    at JSXParserMixin.expect (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:3657:12)\n    at JSXParserMixin.parseObjectLike (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:11507:14)\n    at JSXParserMixin.parseExprAtom (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:11025:23)\n    at JSXParserMixin.parseExprAtom (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:6936:20)\n    at JSXParserMixin.parseExprSubscripts (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:10759:23)\n    at JSXParserMixin.parseUpdate (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:10744:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/ondrejlacina/CL/ONL_FER_W_105_React/node_modules/@babel/parser/lib/index.js:10724:23)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1913e666b1fcfb20af12")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkU7QUFlRixJQUFNMEMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHNUMsNERBQVUsQ0FBQ3lDLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDWCxNQUFNLGNBQUNuQywwREFBQSxDQUFDSyxHQUFHLE1BQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7VUNqRnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBGb3JtdWxhckFrY2llIGZyb20gXCIuL2NvbXBvbmVudHMvRm9ybXVsYXJBa2NpZVwiO1xuaW1wb3J0IFByaXNwZXZla0FrY2llIGZyb20gXCIuL2NvbXBvbmVudHMvUHJpc3BldmVrQWtjaWVcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgcHJpc3Bldmt5OiBbXSwgLy8gcG9sZVxuICAgIHpwcmF2YTogXCJcIixcbiAgfTtcblxuICBwcmlkZWpQcmlzcGV2ZWsgPSAoenByYXZhKSA9PiB7XG4gICAgLy8gemRlIGJ1ZHUgdXByYXZvdmF0IHN0YXRlIGEgcMWZaWTDoXZhdCBwxZnDrXNwxJt2a3lcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByaXNwZXZreTogW3pwcmF2YSwgLi4ucHJldlN0YXRlLnByaXNwZXZreV0sXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIHZ5bWF6YXRQcmlzcGV2b2sgPSAoaW5kZXhQcmlzcGV2a3UpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByaXNwZXZreTogcHJldlN0YXRlLnByaXNwZXZreS5maWx0ZXIoXG4gICAgICAgICAgKHByaXNwZXZlaywgaW5kZXgpID0+IGluZGV4UHJpc3Bldmt1ICE9PSBpbmRleFxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBpbnB1dDogaG9kbm90YSB6cHJhdnkgeiBpbnB1dHVcbiAgbmFwaXNacHJhdnUgPSAoaW5wdXQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgenByYXZhOiBpbnB1dCB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8aDE+U3RvY2sgTm90ZTwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgey8qIHRvdG8gYnVkZSBmdW5rY2UgcMWZaWTDoW7DrSBQcmlzcGV2ZWtBa2NpZSwgYWxlIG5lbcOhbSBuYXN0YXZlbsO9IGplxaF0xJsgbmVib8WlIHZlIHZpZGV1IGJ5bGEgY2xhc3NhPyDEjWFzIDI6MTI6MjEsIGFubyBqZSB0byBjbGFzcyBrb21wb25lbnQsIG5hcMOtxaF1IHRvIHRhayBhbGUgVE9ETyA9PiBwxZllcHNhdCB0byBqZWRub2R1xaFlamkgZG8gZnVua2Npb27DoWxuw61obyBrb21wb25lbnR1ICovfVxuICAgICAgICAgIDxGb3JtdWxhckFrY2llIG9uU3VibWl0Rm9ybT17dGhpcy5wcmlkZWpQcmlzcGV2ZWt9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5wcmlzcGV2a3kubWFwKChwcmlzcGV2ZWssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8UHJpc3BldmVrQWtjaWVcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIHRleHQ9e3ByaXNwZXZla31cbiAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gdGhpcy52eW1hemF0UHJpc3Bldm9rKGluZGV4KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG57XG4gIC8qIC8vIFRPLURPIC0+IHVkxJtsYXQgcGFrIG1lbnUgbmFob8WZZSwgYWxlc3BvxYggMiB6w6Fsb8W+a3kgKGRydWjDoSBidWRlIHDFmWVobGVkIHBvcnRmb2xpYSlcbi8vIGZ1bmN0aW9uIEFwcCgpIHsgKi9cbn1cbntcbiAgLyogLy8gICByZXR1cm4gKFxuLy8gICAgIDxCcm93c2VyUm91dGVyPlxuLy8gICAgICAgPE5hdmlnYWNpYSAvPlxuLy8gICAgICAgPFJvdXRlcz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PE1haW4gLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiY29udGFjdFwiIGVsZW1lbnQ9ezxDb250YWN0IC8+fSAvPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cImxvZ2luXCIgZWxlbWVudD17PExvZ2luIC8+fSAvPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cInByb2R1Y3RzLypcIiBlbGVtZW50PXs8UHJvZHVjdHMgLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGVsZW1lbnQ9ezxOb3RGb3VuZCAvPn0gLz5cbi8vICAgICAgIDwvUm91dGVzPlxuLy8gICAgIDwvQnJvd3NlclJvdXRlcj5cbi8vICAgKTtcbi8vIH0gKi9cbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxOTEzZTY2NmIxZmNmYjIwYWYxMlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0ZVJvb3QiLCJGb3JtdWxhckFrY2llIiwiUHJpc3BldmVrQWtjaWUiLCJBcHAiLCJfQ29tcG9uZW50IiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9jYWxsU3VwZXIiLCJjb25jYXQiLCJzdGF0ZSIsInByaXNwZXZreSIsInpwcmF2YSIsInByaWRlalByaXNwZXZlayIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwidnltYXphdFByaXNwZXZvayIsImluZGV4UHJpc3Bldmt1IiwiZmlsdGVyIiwicHJpc3BldmVrIiwiaW5kZXgiLCJuYXBpc1pwcmF2dSIsImlucHV0IiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpczIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25TdWJtaXRGb3JtIiwibWFwIiwidGV4dCIsIm9uRGVsZXRlIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiXSwic291cmNlUm9vdCI6IiJ9