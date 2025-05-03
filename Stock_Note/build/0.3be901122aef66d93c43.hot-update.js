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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Stock Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormularAkcie__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onSubmitForm: this.pridejPrispevek
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "list"
      }, this.state.prispevky.map(function (prispevek, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: index,
          text: prispevek,
          onDelete: function onDelete() {
            return _this2.state.vymazatPrispevok(index);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function PrispevekAkcie(_ref) {
  var text = _ref.text,
    onDelete = _ref.onDelete;
  // tady budu mít prázdný pole aka [] a sem budu pushovat po kliknutí na zadání akcie, zadání příspěvěku, sem to potřebuju odeslat a to se pak odešle do app.js celá tato funkce --- NA KOMUNIKACI MEZI KOMPONENTAMI POUŽÍVÁM `PROPS` - PROPS  nemusím pouřívat jen jako atributy těch html značek, ale můžu je použít i ve funkcích
  // 1. parametr - callback
  // 2. paramter - dependencies - závislosti
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log("Prispevek začal cestu");
    return function () {};
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "action-btn action-delete",
    onClick: onDelete
  }, "Vymazat")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrispevekAkcie);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cfa9ba361f6af22d4847")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaRTtBQWVGLElBQU0wQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUc1Qyw0REFBVSxDQUFDeUMsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNYLE1BQU0sY0FBQ25DLDBEQUFBLENBQUNLLEdBQUcsTUFBRSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNqRitCO0FBRW5ELFNBQVNELGNBQWNBLENBQUE2QyxJQUFBLEVBQXFCO0VBQUEsSUFBbEJSLElBQUksR0FBQVEsSUFBQSxDQUFKUixJQUFJO0lBQUVDLFFBQVEsR0FBQU8sSUFBQSxDQUFSUCxRQUFRO0VBQ3RDO0VBQ0E7RUFDQTtFQUNBTSxnREFBUyxDQUFDLFlBQU07SUFDZEUsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7SUFFcEMsT0FBTyxZQUFNLENBQUMsQ0FBQztFQUNqQixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0VuRCwwREFBQTtJQUFLc0MsU0FBUyxFQUFDO0VBQU0sZ0JBQ25CdEMsMERBQUE7SUFBS3NDLFNBQVMsRUFBQztFQUFXLEdBQUVHLElBQVUsQ0FBQyxlQUN2Q3pDLDBEQUFBO0lBQUtzQyxTQUFTLEVBQUM7RUFBYSxnQkFDMUJ0QywwREFBQTtJQUFRc0MsU0FBUyxFQUFDLDBCQUEwQjtJQUFDYyxPQUFPLEVBQUVWO0VBQVMsR0FBQyxTQUV4RCxDQUNMLENBQ0YsQ0FBQztBQUVWO0FBRUEsaUVBQWV0QyxjQUFjOzs7Ozs7OztVQ3hCN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2NvbXBvbmVudHMvUHJpc3BldmVrQWtjaWUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBGb3JtdWxhckFrY2llIGZyb20gXCIuL2NvbXBvbmVudHMvRm9ybXVsYXJBa2NpZVwiO1xuaW1wb3J0IFByaXNwZXZla0FrY2llIGZyb20gXCIuL2NvbXBvbmVudHMvUHJpc3BldmVrQWtjaWVcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgcHJpc3Bldmt5OiBbXSwgLy8gcG9sZVxuICAgIHpwcmF2YTogXCJcIixcbiAgfTtcblxuICBwcmlkZWpQcmlzcGV2ZWsgPSAoenByYXZhKSA9PiB7XG4gICAgLy8gemRlIGJ1ZHUgdXByYXZvdmF0IHN0YXRlIGEgcMWZaWTDoXZhdCBwxZnDrXNwxJt2a3lcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByaXNwZXZreTogWy4uLnByZXZTdGF0ZS5wcmlzcGV2a3ksIHpwcmF2YV0sXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIHZ5bWF6YXRQcmlzcGV2b2sgPSAoaW5kZXhQcmlzcGV2a3UpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByaXNwZXZreTogcHJldlN0YXRlLnByaXNwZXZreS5maWx0ZXIoXG4gICAgICAgICAgKHByaXNwZXZlaywgaW5kZXgpID0+IGluZGV4UHJpc3Bldmt1ICE9PSBpbmRleFxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBpbnB1dDogaG9kbm90YSB6cHJhdnkgeiBpbnB1dHVcbiAgbmFwaXNacHJhdnUgPSAoaW5wdXQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgenByYXZhOiBpbnB1dCB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8aDE+U3RvY2sgTm90ZTwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgey8qIHRvdG8gYnVkZSBmdW5rY2UgcMWZaWTDoW7DrSBQcmlzcGV2ZWtBa2NpZSwgYWxlIG5lbcOhbSBuYXN0YXZlbsO9IGplxaF0xJsgbmVib8WlIHZlIHZpZGV1IGJ5bGEgY2xhc3NhPyDEjWFzIDI6MTI6MjEsIGFubyBqZSB0byBjbGFzcyBrb21wb25lbnQsIG5hcMOtxaF1IHRvIHRhayBhbGUgVE9ETyA9PiBwxZllcHNhdCB0byBqZWRub2R1xaFlamkgZG8gZnVua2Npb27DoWxuw61obyBrb21wb25lbnR1ICovfVxuICAgICAgICAgIDxGb3JtdWxhckFrY2llIG9uU3VibWl0Rm9ybT17dGhpcy5wcmlkZWpQcmlzcGV2ZWt9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5wcmlzcGV2a3kubWFwKChwcmlzcGV2ZWssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8UHJpc3BldmVrQWtjaWVcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIHRleHQ9e3ByaXNwZXZla31cbiAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gdGhpcy5zdGF0ZS52eW1hemF0UHJpc3Bldm9rKGluZGV4KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG57XG4gIC8qIC8vIFRPLURPIC0+IHVkxJtsYXQgcGFrIG1lbnUgbmFob8WZZSwgYWxlc3BvxYggMiB6w6Fsb8W+a3kgKGRydWjDoSBidWRlIHDFmWVobGVkIHBvcnRmb2xpYSlcbi8vIGZ1bmN0aW9uIEFwcCgpIHsgKi9cbn1cbntcbiAgLyogLy8gICByZXR1cm4gKFxuLy8gICAgIDxCcm93c2VyUm91dGVyPlxuLy8gICAgICAgPE5hdmlnYWNpYSAvPlxuLy8gICAgICAgPFJvdXRlcz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PE1haW4gLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiY29udGFjdFwiIGVsZW1lbnQ9ezxDb250YWN0IC8+fSAvPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cImxvZ2luXCIgZWxlbWVudD17PExvZ2luIC8+fSAvPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cInByb2R1Y3RzLypcIiBlbGVtZW50PXs8UHJvZHVjdHMgLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGVsZW1lbnQ9ezxOb3RGb3VuZCAvPn0gLz5cbi8vICAgICAgIDwvUm91dGVzPlxuLy8gICAgIDwvQnJvd3NlclJvdXRlcj5cbi8vICAgKTtcbi8vIH0gKi9cbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBQcmlzcGV2ZWtBa2NpZSh7IHRleHQsIG9uRGVsZXRlIH0pIHtcbiAgLy8gdGFkeSBidWR1IG3DrXQgcHLDoXpkbsO9IHBvbGUgYWthIFtdIGEgc2VtIGJ1ZHUgcHVzaG92YXQgcG8ga2xpa251dMOtIG5hIHphZMOhbsOtIGFrY2llLCB6YWTDoW7DrSBwxZnDrXNwxJt2xJtrdSwgc2VtIHRvIHBvdMWZZWJ1anUgb2Rlc2xhdCBhIHRvIHNlIHBhayBvZGXFoWxlIGRvIGFwcC5qcyBjZWzDoSB0YXRvIGZ1bmtjZSAtLS0gTkEgS09NVU5JS0FDSSBNRVpJIEtPTVBPTkVOVEFNSSBQT1XFvcONVsOBTSBgUFJPUFNgIC0gUFJPUFMgIG5lbXVzw61tIHBvdcWZw612YXQgamVuIGpha28gYXRyaWJ1dHkgdMSbY2ggaHRtbCB6bmHEjWVrLCBhbGUgbcWvxb51IGplIHBvdcW+w610IGkgdmUgZnVua2PDrWNoXG4gIC8vIDEuIHBhcmFtZXRyIC0gY2FsbGJhY2tcbiAgLy8gMi4gcGFyYW10ZXIgLSBkZXBlbmRlbmNpZXMgLSB6w6F2aXNsb3N0aVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiUHJpc3BldmVrIHphxI1hbCBjZXN0dVwiKTtcblxuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPnt0ZXh0fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjdGlvbi1idG4gYWN0aW9uLWRlbGV0ZVwiIG9uQ2xpY2s9e29uRGVsZXRlfT5cbiAgICAgICAgICBWeW1hemF0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaXNwZXZla0FrY2llO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2ZhOWJhMzYxZjZhZjIyZDQ4NDdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjcmVhdGVSb290IiwiRm9ybXVsYXJBa2NpZSIsIlByaXNwZXZla0FrY2llIiwiQXBwIiwiX0NvbXBvbmVudCIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfY2FsbFN1cGVyIiwiY29uY2F0Iiwic3RhdGUiLCJwcmlzcGV2a3kiLCJ6cHJhdmEiLCJwcmlkZWpQcmlzcGV2ZWsiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsIl90b0NvbnN1bWFibGVBcnJheSIsInZ5bWF6YXRQcmlzcGV2b2siLCJpbmRleFByaXNwZXZrdSIsImZpbHRlciIsInByaXNwZXZlayIsImluZGV4IiwibmFwaXNacHJhdnUiLCJpbnB1dCIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0Rm9ybSIsIm1hcCIsInRleHQiLCJvbkRlbGV0ZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJfcmVmIiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9