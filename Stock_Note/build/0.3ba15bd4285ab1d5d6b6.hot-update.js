"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41);
/* harmony import */ var _components_Navigace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _pages_Portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var _pages_Denik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42);
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);
/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }









function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    prispevky = _useState2[0],
    setPrispevky = _useState2[1];
  var pridejPrispevek = function pridejPrispevek(ticker) {
    if (!ticker.trim()) {
      alert("Prosím vyplň název akcie!");
      return;
    }
    setPrispevky([].concat(_toConsumableArray(prispevky), [{
      ticker: ticker,
      operace: []
    }]));
  };
  var smazPrispevek = function smazPrispevek(index) {
    setPrispevky(prispevky.filter(function (_, indexP) {
      return indexP !== index;
    }));
  };
  var pridejOperaci = function pridejOperaci(indexPrispevku, novaOperace) {
    setPrispevky(prispevky.map(function (prispevky, index) {
      if (index === indexPrispevku) {
        return _objectSpread(_objectSpread({}, prispevek), {}, {
          operace: [].concat(_toConsumableArray(prispevek.operace), [novaOperace])
        });
      }
      return prispevek;
    }));
  };
  var smazOperaci = function smazOperaci(indexPrispevku, indexOperace) {
    setPrispevky(prispevky.map(function (prispevek, index) {
      if (index === indexPrispevku) {
        return _objectSpread(_objectSpread({}, prispevek), {}, {
          operace: prispevek.operace.filter(function (_, i) {
            return i !== indexOperace;
          })
        });
      }
      return prispevek;
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navigace__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/portfolio",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Portfolio__WEBPACK_IMPORTED_MODULE_4__["default"], {
      prispevky: prispevky
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/denik",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Denik__WEBPACK_IMPORTED_MODULE_5__["default"], {
      prispevky: prispevky,
      pridejPrispevek: pridejPrispevek,
      smazPrispevek: smazPrispevek,
      pridejOperaci: pridejOperaci,
      smazOperaci: smazOperaci
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/about",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_About__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_NotFound__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }))));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("523848e803d10db50f30")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJLEVBQUMsUUFBUTtJQUNiQyxPQUFPLGVBQ0wxQywwREFBQSxDQUFDUyxvREFBSztNQUNKTyxTQUFTLEVBQUVBLFNBQVU7TUFDckJFLGVBQWUsRUFBRUEsZUFBZ0I7TUFDakNPLGFBQWEsRUFBRUEsYUFBYztNQUM3QkssYUFBYSxFQUFFQSxhQUFjO01BQzdCTSxXQUFXLEVBQUVBO0lBQVksQ0FDMUI7RUFDRixDQUNGLENBQUMsZUFDRnBDLDBEQUFBLENBQUNLLG1EQUFLO0lBQUNvQyxJQUFJLEVBQUMsUUFBUTtJQUFDQyxPQUFPLGVBQUUxQywwREFBQSxDQUFDVSxvREFBSyxNQUFFO0VBQUUsQ0FBRSxDQUFDLGVBQzNDViwwREFBQSxDQUFDSyxtREFBSztJQUFDb0MsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFMUMsMERBQUEsQ0FBQ1csdURBQVEsTUFBRTtFQUFFLENBQUUsQ0FDbEMsQ0FDTCxDQUNRLENBQUM7QUFFcEI7QUFFQSxJQUFNZ0MsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHNUMsNERBQVUsQ0FBQ3lDLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGNBQUMvQywwREFBQSxDQUFDWSxHQUFHLE1BQUUsQ0FBQyxDQUFDOzs7Ozs7OztVQ3RGcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IE5hdmlnYWNlIGZyb20gXCIuL2NvbXBvbmVudHMvTmF2aWdhY2VcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWVcIjtcbmltcG9ydCBQb3J0Zm9saW8gZnJvbSBcIi4vcGFnZXMvUG9ydGZvbGlvXCI7XG5pbXBvcnQgRGVuaWsgZnJvbSBcIi4vcGFnZXMvRGVuaWtcIjtcbmltcG9ydCBBYm91dCBmcm9tIFwiLi9wYWdlcy9BYm91dFwiO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gXCIuL3BhZ2VzL05vdEZvdW5kXCI7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW3ByaXNwZXZreSwgc2V0UHJpc3Bldmt5XSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBwcmlkZWpQcmlzcGV2ZWsgPSAodGlja2VyKSA9PiB7XG4gICAgaWYgKCF0aWNrZXIudHJpbSgpKSB7XG4gICAgICBhbGVydChcIlByb3PDrW0gdnlwbMWIIG7DoXpldiBha2NpZSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFByaXNwZXZreShbLi4ucHJpc3Bldmt5LCB7IHRpY2tlcjogdGlja2VyLCBvcGVyYWNlOiBbXSB9XSk7XG4gIH07XG5cbiAgY29uc3Qgc21helByaXNwZXZlayA9IChpbmRleCkgPT4ge1xuICAgIHNldFByaXNwZXZreShwcmlzcGV2a3kuZmlsdGVyKChfLCBpbmRleFApID0+IGluZGV4UCAhPT0gaW5kZXgpKTtcbiAgfTtcblxuICBjb25zdCBwcmlkZWpPcGVyYWNpID0gKGluZGV4UHJpc3Bldmt1LCBub3ZhT3BlcmFjZSkgPT4ge1xuICAgIHNldFByaXNwZXZreShcbiAgICAgIHByaXNwZXZreS5tYXAoKHByaXNwZXZreSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID09PSBpbmRleFByaXNwZXZrdSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5wcmlzcGV2ZWssXG4gICAgICAgICAgICBvcGVyYWNlOiBbLi4ucHJpc3BldmVrLm9wZXJhY2UsIG5vdmFPcGVyYWNlXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmlzcGV2ZWs7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3Qgc21hek9wZXJhY2kgPSAoaW5kZXhQcmlzcGV2a3UsIGluZGV4T3BlcmFjZSkgPT4ge1xuICAgIHNldFByaXNwZXZreShcbiAgICAgIHByaXNwZXZreS5tYXAoKHByaXNwZXZlaywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID09PSBpbmRleFByaXNwZXZrdSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5wcmlzcGV2ZWssXG4gICAgICAgICAgICBvcGVyYWNlOiBwcmlzcGV2ZWsub3BlcmFjZS5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4T3BlcmFjZSksXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJpc3BldmVrO1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICA8TmF2aWdhY2UgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTRcIj5cbiAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0gLz5cbiAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgIHBhdGg9XCIvcG9ydGZvbGlvXCJcbiAgICAgICAgICAgIGVsZW1lbnQ9ezxQb3J0Zm9saW8gcHJpc3Bldmt5PXtwcmlzcGV2a3l9IC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICBwYXRoPVwiL2RlbmlrXCJcbiAgICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICA8RGVuaWtcbiAgICAgICAgICAgICAgICBwcmlzcGV2a3k9e3ByaXNwZXZreX1cbiAgICAgICAgICAgICAgICBwcmlkZWpQcmlzcGV2ZWs9e3ByaWRlalByaXNwZXZla31cbiAgICAgICAgICAgICAgICBzbWF6UHJpc3BldmVrPXtzbWF6UHJpc3BldmVrfVxuICAgICAgICAgICAgICAgIHByaWRlak9wZXJhY2k9e3ByaWRlak9wZXJhY2l9XG4gICAgICAgICAgICAgICAgc21hek9wZXJhY2k9e3NtYXpPcGVyYWNpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWJvdXRcIiBlbGVtZW50PXs8QWJvdXQgLz59IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PE5vdEZvdW5kIC8+fSAvPlxuICAgICAgICA8L1JvdXRlcz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgKTtcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1MjM4NDhlODAzZDEwZGI1MGYzMFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIk5hdmlnYWNlIiwiSG9tZSIsIlBvcnRmb2xpbyIsIkRlbmlrIiwiQWJvdXQiLCJOb3RGb3VuZCIsIkFwcCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInByaXNwZXZreSIsInNldFByaXNwZXZreSIsInByaWRlalByaXNwZXZlayIsInRpY2tlciIsInRyaW0iLCJhbGVydCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIm9wZXJhY2UiLCJzbWF6UHJpc3BldmVrIiwiaW5kZXgiLCJmaWx0ZXIiLCJfIiwiaW5kZXhQIiwicHJpZGVqT3BlcmFjaSIsImluZGV4UHJpc3Bldmt1Iiwibm92YU9wZXJhY2UiLCJtYXAiLCJfb2JqZWN0U3ByZWFkIiwicHJpc3BldmVrIiwic21hek9wZXJhY2kiLCJpbmRleE9wZXJhY2UiLCJpIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInBhdGgiLCJlbGVtZW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9