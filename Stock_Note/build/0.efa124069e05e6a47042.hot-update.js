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
  var pridejPrispevek = function pridejPrispevek(zprava) {
    if (!zprava.trim()) {
      alert("Prosím vyplň název akcie!");
      return;
    }
    setPrispevky([].concat(_toConsumableArray(prispevky), [zprava]));
  };
  var smazPrispevek = function smazPrispevek(index) {
    setPrispevky(prispevky.filter(function (prispevek, indexP) {
      return indexP !== index;
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navigace__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
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
      smazPrispevek: smazPrispevek
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
/******/ 	__webpack_require__.h = () => ("bb1298303d5792e0a561")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZmExMjQwNjllMDVlNmE0NzA0Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDTTtBQUNrQjtBQUVuQjtBQUNiO0FBQ1U7QUFDUjtBQUNBO0FBQ007QUFFeEMsU0FBU1ksR0FBR0EsQ0FBQSxFQUFHO0VBQ2IsSUFBQUMsU0FBQSxHQUFrQ1osK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWEsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBdkNHLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxZQUFZLEdBQUFILFVBQUE7RUFFOUIsSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxNQUFNLEVBQUs7SUFDbEMsSUFBSSxDQUFDQSxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFDLEVBQUU7TUFDbEJDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztNQUNsQztJQUNGO0lBQ0FKLFlBQVksSUFBQUssTUFBQSxDQUFBQyxrQkFBQSxDQUFLUCxTQUFTLElBQUVHLE1BQU0sRUFBQyxDQUFDO0VBQ3RDLENBQUM7RUFFRCxJQUFNSyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlDLEtBQUssRUFBSztJQUMvQlIsWUFBWSxDQUFDRCxTQUFTLENBQUNVLE1BQU0sQ0FBQyxVQUFDQyxTQUFTLEVBQUVDLE1BQU07TUFBQSxPQUFLQSxNQUFNLEtBQUtILEtBQUs7SUFBQSxFQUFDLENBQUM7RUFDekUsQ0FBQztFQUVELG9CQUNFekIsMERBQUEsQ0FBQ0csMkRBQWEscUJBQ1pILDBEQUFBLENBQUNNLDREQUFRLE1BQUUsQ0FBQyxlQUNaTiwwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ0ksb0RBQU0scUJBQ0xKLDBEQUFBLENBQUNLLG1EQUFLO0lBQUN5QixJQUFJLEVBQUMsR0FBRztJQUFDQyxPQUFPLGVBQUUvQiwwREFBQSxDQUFDTyxtREFBSSxNQUFFO0VBQUUsQ0FBRSxDQUFDLGVBQ3JDUCwwREFBQSxDQUFDSyxtREFBSztJQUNKeUIsSUFBSSxFQUFDLFlBQVk7SUFDakJDLE9BQU8sZUFBRS9CLDBEQUFBLENBQUNRLHdEQUFTO01BQUNRLFNBQVMsRUFBRUE7SUFBVSxDQUFFO0VBQUUsQ0FDOUMsQ0FBQyxlQUNGaEIsMERBQUEsQ0FBQ0ssbURBQUs7SUFDSnlCLElBQUksRUFBQyxRQUFRO0lBQ2JDLE9BQU8sZUFDTC9CLDBEQUFBLENBQUNTLG9EQUFLO01BQ0pPLFNBQVMsRUFBRUEsU0FBVTtNQUNyQkUsZUFBZSxFQUFFQSxlQUFnQjtNQUNqQ00sYUFBYSxFQUFFQTtJQUFjLENBQzlCO0VBQ0YsQ0FDRixDQUFDLGVBQ0Z4QiwwREFBQSxDQUFDSyxtREFBSztJQUFDeUIsSUFBSSxFQUFDLFFBQVE7SUFBQ0MsT0FBTyxlQUFFL0IsMERBQUEsQ0FBQ1Usb0RBQUssTUFBRTtFQUFFLENBQUUsQ0FBQyxlQUMzQ1YsMERBQUEsQ0FBQ0ssbURBQUs7SUFBQ3lCLElBQUksRUFBQyxHQUFHO0lBQUNDLE9BQU8sZUFBRS9CLDBEQUFBLENBQUNXLHVEQUFRLE1BQUU7RUFBRSxDQUFFLENBQ2xDLENBQ0wsQ0FDUSxDQUFDO0FBRXBCO0FBRUEsSUFBTXFCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR2pDLDREQUFVLENBQUM4QixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxjQUFDcEMsMERBQUEsQ0FBQ1ksR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7VUN4RHBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBOYXZpZ2FjZSBmcm9tIFwiLi9jb21wb25lbnRzL05hdmlnYWNlXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lXCI7XG5pbXBvcnQgUG9ydGZvbGlvIGZyb20gXCIuL3BhZ2VzL1BvcnRmb2xpb1wiO1xuaW1wb3J0IERlbmlrIGZyb20gXCIuL3BhZ2VzL0RlbmlrXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vcGFnZXMvQWJvdXRcIjtcbmltcG9ydCBOb3RGb3VuZCBmcm9tIFwiLi9wYWdlcy9Ob3RGb3VuZFwiO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtwcmlzcGV2a3ksIHNldFByaXNwZXZreV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgcHJpZGVqUHJpc3BldmVrID0gKHpwcmF2YSkgPT4ge1xuICAgIGlmICghenByYXZhLnRyaW0oKSkge1xuICAgICAgYWxlcnQoXCJQcm9zw61tIHZ5cGzFiCBuw6F6ZXYgYWtjaWUhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRQcmlzcGV2a3koWy4uLnByaXNwZXZreSwgenByYXZhXSk7XG4gIH07XG5cbiAgY29uc3Qgc21helByaXNwZXZlayA9IChpbmRleCkgPT4ge1xuICAgIHNldFByaXNwZXZreShwcmlzcGV2a3kuZmlsdGVyKChwcmlzcGV2ZWssIGluZGV4UCkgPT4gaW5kZXhQICE9PSBpbmRleCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICA8TmF2aWdhY2UgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICBwYXRoPVwiL3BvcnRmb2xpb1wiXG4gICAgICAgICAgICBlbGVtZW50PXs8UG9ydGZvbGlvIHByaXNwZXZreT17cHJpc3Bldmt5fSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgcGF0aD1cIi9kZW5pa1wiXG4gICAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgICAgPERlbmlrXG4gICAgICAgICAgICAgICAgcHJpc3Bldmt5PXtwcmlzcGV2a3l9XG4gICAgICAgICAgICAgICAgcHJpZGVqUHJpc3BldmVrPXtwcmlkZWpQcmlzcGV2ZWt9XG4gICAgICAgICAgICAgICAgc21helByaXNwZXZlaz17c21helByaXNwZXZla31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Fib3V0XCIgZWxlbWVudD17PEFib3V0IC8+fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGVsZW1lbnQ9ezxOb3RGb3VuZCAvPn0gLz5cbiAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICA8L2Rpdj5cbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICk7XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmIxMjk4MzAzZDU3OTJlMGE1NjFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJOYXZpZ2FjZSIsIkhvbWUiLCJQb3J0Zm9saW8iLCJEZW5payIsIkFib3V0IiwiTm90Rm91bmQiLCJBcHAiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJwcmlzcGV2a3kiLCJzZXRQcmlzcGV2a3kiLCJwcmlkZWpQcmlzcGV2ZWsiLCJ6cHJhdmEiLCJ0cmltIiwiYWxlcnQiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJzbWF6UHJpc3BldmVrIiwiaW5kZXgiLCJmaWx0ZXIiLCJwcmlzcGV2ZWsiLCJpbmRleFAiLCJjcmVhdGVFbGVtZW50IiwicGF0aCIsImVsZW1lbnQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=