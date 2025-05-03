"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony import */ var _components_Navigace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var _pages_Portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
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

// import { createRoot } from "react-dom/client";




function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    prispevky = _useState2[0],
    setPrispevky = _useState2[1];
  var pridejPrispevek = function pridejPrispevek(zprava) {
    setPrispevky([].concat(_toConsumableArray(prispevky), [zprava]));
  };
  var smazPrispevek = function smazPrispevek(index) {
    setPrispevky(prispevky.filter(function (prispevek, indexP) {
      return indexP !== index;
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navigace__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/portfolio",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Portfolio__WEBPACK_IMPORTED_MODULE_3__["default"], {
      prispevky: prispevky
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/denik",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Denik, {
      prispevky: prispevky
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }))));
}
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

/***/ }),

/***/ 38:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Portfolio(_ref) {
  var prispevky = _ref.prispevky;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Portfolio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, prispevky.map(function (prispevek, indexPrispevku) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: indexPrispevku
    }, prispevek);
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e92195751c1d04520d18")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUVWO0FBRUEsaUVBQWVkLFNBQVM7Ozs7Ozs7O1VDZnhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9wYWdlcy9Qb3J0Zm9saW8uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBOYXZpZ2FjZSBmcm9tIFwiLi9jb21wb25lbnRzL05hdmlnYWNlXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lXCI7XG5pbXBvcnQgUG9ydGZvbGlvIGZyb20gXCIuL3BhZ2VzL1BvcnRmb2xpb1wiO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtwcmlzcGV2a3ksIHNldFByaXNwZXZreV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgcHJpZGVqUHJpc3BldmVrID0gKHpwcmF2YSkgPT4ge1xuICAgIHNldFByaXNwZXZreShbLi4ucHJpc3Bldmt5LCB6cHJhdmFdKTtcbiAgfTtcblxuICBjb25zdCBzbWF6UHJpc3BldmVrID0gKGluZGV4KSA9PiB7XG4gICAgc2V0UHJpc3Bldmt5KHByaXNwZXZreS5maWx0ZXIoKHByaXNwZXZlaywgaW5kZXhQKSA9PiBpbmRleFAgIT09IGluZGV4KSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgIDxOYXZpZ2FjZSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0gLz5cbiAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgIHBhdGg9XCIvcG9ydGZvbGlvXCJcbiAgICAgICAgICAgIGVsZW1lbnQ9ezxQb3J0Zm9saW8gcHJpc3Bldmt5PXtwcmlzcGV2a3l9IC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGVuaWtcIiBlbGVtZW50PXs8RGVuaWsgcHJpc3Bldmt5PXtwcmlzcGV2a3l9IC8+fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxuICAgICAgICA8L1JvdXRlcz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgKTtcbn1cblxue1xuICAvKiAvLyBUTy1ETyAtPiB1ZMSbbGF0IHBhayBtZW51IG5haG/FmWUsIGFsZXNwb8WIIDIgesOhbG/Fvmt5IChkcnVow6EgYnVkZSBwxZllaGxlZCBwb3J0Zm9saWEpXG4vLyBmdW5jdGlvbiBBcHAoKSB7ICovXG59XG57XG4gIC8qIC8vICAgcmV0dXJuIChcbi8vICAgICA8QnJvd3NlclJvdXRlcj5cbi8vICAgICAgIDxOYXZpZ2FjaWEgLz5cbi8vICAgICAgIDxSb3V0ZXM+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxNYWluIC8+fSAvPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cImNvbnRhY3RcIiBlbGVtZW50PXs8Q29udGFjdCAvPn0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCJsb2dpblwiIGVsZW1lbnQ9ezxMb2dpbiAvPn0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCJwcm9kdWN0cy8qXCIgZWxlbWVudD17PFByb2R1Y3RzIC8+fSAvPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBlbGVtZW50PXs8Tm90Rm91bmQgLz59IC8+XG4vLyAgICAgICA8L1JvdXRlcz5cbi8vICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4vLyAgICk7XG4vLyB9ICovXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBQb3J0Zm9saW8oeyBwcmlzcGV2a3kgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+UG9ydGZvbGlvPC9oMj5cbiAgICAgIDx1bD5cbiAgICAgICAge3ByaXNwZXZreS5tYXAoKHByaXNwZXZlaywgaW5kZXhQcmlzcGV2a3UpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleFByaXNwZXZrdX0+e3ByaXNwZXZla308L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpbztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU5MjE5NTc1MWMxZDA0NTIwZDE4XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJOYXZpZ2FjZSIsIkhvbWUiLCJQb3J0Zm9saW8iLCJBcHAiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJwcmlzcGV2a3kiLCJzZXRQcmlzcGV2a3kiLCJwcmlkZWpQcmlzcGV2ZWsiLCJ6cHJhdmEiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJzbWF6UHJpc3BldmVrIiwiaW5kZXgiLCJmaWx0ZXIiLCJwcmlzcGV2ZWsiLCJpbmRleFAiLCJjcmVhdGVFbGVtZW50IiwicGF0aCIsImVsZW1lbnQiLCJEZW5payIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiY3JlYXRlUm9vdCIsInJlbmRlciIsIl9yZWYiLCJtYXAiLCJpbmRleFByaXNwZXZrdSIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=