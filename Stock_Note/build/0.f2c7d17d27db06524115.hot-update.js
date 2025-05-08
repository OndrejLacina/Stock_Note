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
    setPrispevky(function (prevPrispevky) {
      return prevPrispevky.map(function (prispevek, index) {
        if (index === indexPrispevku) {
          return _objectSpread(_objectSpread({}, prispevek), {}, {
            operace: [].concat(_toConsumableArray(prispevek.operace), [novaOperace])
          });
        }
        return prispevek;
      });
    });
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
/******/ 	__webpack_require__.h = () => ("f54ef95c33ab4b5abe4b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBQ0ZoQiwwREFBQSxDQUFDSyxtREFBSztJQUNKcUMsSUFBSSxFQUFDLFFBQVE7SUFDYkMsT0FBTyxlQUNMM0MsMERBQUEsQ0FBQ1Msb0RBQUs7TUFDSk8sU0FBUyxFQUFFQSxTQUFVO01BQ3JCRSxlQUFlLEVBQUVBLGVBQWdCO01BQ2pDTyxhQUFhLEVBQUVBLGFBQWM7TUFDN0JLLGFBQWEsRUFBRUEsYUFBYztNQUM3Qk8sV0FBVyxFQUFFQTtJQUFZLENBQzFCO0VBQ0YsQ0FDRixDQUFDLGVBQ0ZyQywwREFBQSxDQUFDSyxtREFBSztJQUFDcUMsSUFBSSxFQUFDLFFBQVE7SUFBQ0MsT0FBTyxlQUFFM0MsMERBQUEsQ0FBQ1Usb0RBQUssTUFBRTtFQUFFLENBQUUsQ0FBQyxlQUMzQ1YsMERBQUEsQ0FBQ0ssbURBQUs7SUFBQ3FDLElBQUksRUFBQyxHQUFHO0lBQUNDLE9BQU8sZUFBRTNDLDBEQUFBLENBQUNXLHVEQUFRLE1BQUU7RUFBRSxDQUFFLENBQ2xDLENBQ0wsQ0FDUSxDQUFDO0FBRXBCO0FBRUEsSUFBTWlDLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBRzdDLDREQUFVLENBQUMwQyxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxjQUFDaEQsMERBQUEsQ0FBQ1ksR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7VUN0RnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBOYXZpZ2FjZSBmcm9tIFwiLi9jb21wb25lbnRzL05hdmlnYWNlXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lXCI7XG5pbXBvcnQgUG9ydGZvbGlvIGZyb20gXCIuL3BhZ2VzL1BvcnRmb2xpb1wiO1xuaW1wb3J0IERlbmlrIGZyb20gXCIuL3BhZ2VzL0RlbmlrXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vcGFnZXMvQWJvdXRcIjtcbmltcG9ydCBOb3RGb3VuZCBmcm9tIFwiLi9wYWdlcy9Ob3RGb3VuZFwiO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtwcmlzcGV2a3ksIHNldFByaXNwZXZreV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgcHJpZGVqUHJpc3BldmVrID0gKHRpY2tlcikgPT4ge1xuICAgIGlmICghdGlja2VyLnRyaW0oKSkge1xuICAgICAgYWxlcnQoXCJQcm9zw61tIHZ5cGzFiCBuw6F6ZXYgYWtjaWUhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRQcmlzcGV2a3koWy4uLnByaXNwZXZreSwgeyB0aWNrZXI6IHRpY2tlciwgb3BlcmFjZTogW10gfV0pO1xuICB9O1xuXG4gIGNvbnN0IHNtYXpQcmlzcGV2ZWsgPSAoaW5kZXgpID0+IHtcbiAgICBzZXRQcmlzcGV2a3kocHJpc3Bldmt5LmZpbHRlcigoXywgaW5kZXhQKSA9PiBpbmRleFAgIT09IGluZGV4KSk7XG4gIH07XG5cbiAgY29uc3QgcHJpZGVqT3BlcmFjaSA9IChpbmRleFByaXNwZXZrdSwgbm92YU9wZXJhY2UpID0+IHtcbiAgICBzZXRQcmlzcGV2a3koKHByZXZQcmlzcGV2a3kpID0+XG4gICAgICBwcmV2UHJpc3Bldmt5Lm1hcCgocHJpc3BldmVrLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPT09IGluZGV4UHJpc3Bldmt1KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnByaXNwZXZlayxcbiAgICAgICAgICAgIG9wZXJhY2U6IFsuLi5wcmlzcGV2ZWsub3BlcmFjZSwgbm92YU9wZXJhY2VdLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByaXNwZXZlaztcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBzbWF6T3BlcmFjaSA9IChpbmRleFByaXNwZXZrdSwgaW5kZXhPcGVyYWNlKSA9PiB7XG4gICAgc2V0UHJpc3Bldmt5KFxuICAgICAgcHJpc3Bldmt5Lm1hcCgocHJpc3BldmVrLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPT09IGluZGV4UHJpc3Bldmt1KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnByaXNwZXZlayxcbiAgICAgICAgICAgIG9wZXJhY2U6IHByaXNwZXZlay5vcGVyYWNlLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXhPcGVyYWNlKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmlzcGV2ZWs7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgIDxOYXZpZ2FjZSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNFwiPlxuICAgICAgICA8Um91dGVzPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxuICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgcGF0aD1cIi9wb3J0Zm9saW9cIlxuICAgICAgICAgICAgZWxlbWVudD17PFBvcnRmb2xpbyBwcmlzcGV2a3k9e3ByaXNwZXZreX0gLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgIHBhdGg9XCIvZGVuaWtcIlxuICAgICAgICAgICAgZWxlbWVudD17XG4gICAgICAgICAgICAgIDxEZW5pa1xuICAgICAgICAgICAgICAgIHByaXNwZXZreT17cHJpc3Bldmt5fVxuICAgICAgICAgICAgICAgIHByaWRlalByaXNwZXZlaz17cHJpZGVqUHJpc3BldmVrfVxuICAgICAgICAgICAgICAgIHNtYXpQcmlzcGV2ZWs9e3NtYXpQcmlzcGV2ZWt9XG4gICAgICAgICAgICAgICAgcHJpZGVqT3BlcmFjaT17cHJpZGVqT3BlcmFjaX1cbiAgICAgICAgICAgICAgICBzbWF6T3BlcmFjaT17c21hek9wZXJhY2l9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hYm91dFwiIGVsZW1lbnQ9ezxBYm91dCAvPn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBlbGVtZW50PXs8Tm90Rm91bmQgLz59IC8+XG4gICAgICAgIDwvUm91dGVzPlxuICAgICAgPC9kaXY+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICApO1xufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY1NGVmOTVjMzNhYjRiNWFiZTRiXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiTmF2aWdhY2UiLCJIb21lIiwiUG9ydGZvbGlvIiwiRGVuaWsiLCJBYm91dCIsIk5vdEZvdW5kIiwiQXBwIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicHJpc3Bldmt5Iiwic2V0UHJpc3Bldmt5IiwicHJpZGVqUHJpc3BldmVrIiwidGlja2VyIiwidHJpbSIsImFsZXJ0IiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5Iiwib3BlcmFjZSIsInNtYXpQcmlzcGV2ZWsiLCJpbmRleCIsImZpbHRlciIsIl8iLCJpbmRleFAiLCJwcmlkZWpPcGVyYWNpIiwiaW5kZXhQcmlzcGV2a3UiLCJub3ZhT3BlcmFjZSIsInByZXZQcmlzcGV2a3kiLCJtYXAiLCJwcmlzcGV2ZWsiLCJfb2JqZWN0U3ByZWFkIiwic21hek9wZXJhY2kiLCJpbmRleE9wZXJhY2UiLCJpIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInBhdGgiLCJlbGVtZW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9