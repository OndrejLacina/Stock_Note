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

/***/ }),

/***/ 47:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(9);


var m = __webpack_require__(28);
if (process.env.NODE_ENV === 'production') {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("82d1e80a0bb1c0cd5067")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kNDMyNzA2NTIzYmVhZTVjODZlMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDTTtBQUNrQjtBQUVuQjtBQUNiO0FBQ1U7QUFDUjtBQUNBO0FBQ007QUFFeEMsU0FBU1ksR0FBR0EsQ0FBQSxFQUFHO0VBQ2IsSUFBQUMsU0FBQSxHQUFrQ1osK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWEsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBdkNHLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxZQUFZLEdBQUFILFVBQUE7RUFFOUIsSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxNQUFNLEVBQUs7SUFDbENGLFlBQVksSUFBQUcsTUFBQSxDQUFBQyxrQkFBQSxDQUFLTCxTQUFTLElBQUVHLE1BQU0sRUFBQyxDQUFDO0VBQ3RDLENBQUM7RUFFRCxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlDLEtBQUssRUFBSztJQUMvQk4sWUFBWSxDQUFDRCxTQUFTLENBQUNRLE1BQU0sQ0FBQyxVQUFDQyxTQUFTLEVBQUVDLE1BQU07TUFBQSxPQUFLQSxNQUFNLEtBQUtILEtBQUs7SUFBQSxFQUFDLENBQUM7RUFDekUsQ0FBQztFQUVELG9CQUNFdkIsMERBQUEsQ0FBQ0csMkRBQWEscUJBQ1pILDBEQUFBLENBQUNNLDREQUFRLE1BQUUsQ0FBQyxlQUNaTiwwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ0ksb0RBQU0scUJBQ0xKLDBEQUFBLENBQUNLLG1EQUFLO0lBQUN1QixJQUFJLEVBQUMsR0FBRztJQUFDQyxPQUFPLGVBQUU3QiwwREFBQSxDQUFDTyxtREFBSSxNQUFFO0VBQUUsQ0FBRSxDQUFDLGVBQ3JDUCwwREFBQSxDQUFDSyxtREFBSztJQUNKdUIsSUFBSSxFQUFDLFlBQVk7SUFDakJDLE9BQU8sZUFBRTdCLDBEQUFBLENBQUNRLHdEQUFTO01BQUNRLFNBQVMsRUFBRUE7SUFBVSxDQUFFO0VBQUUsQ0FDOUMsQ0FBQyxlQUNGaEIsMERBQUEsQ0FBQ0ssbURBQUs7SUFDSnVCLElBQUksRUFBQyxRQUFRO0lBQ2JDLE9BQU8sZUFDTDdCLDBEQUFBLENBQUNTLG9EQUFLO01BQ0pPLFNBQVMsRUFBRUEsU0FBVTtNQUNyQkUsZUFBZSxFQUFFQSxlQUFnQjtNQUNqQ0ksYUFBYSxFQUFFQTtJQUFjLENBQzlCO0VBQ0YsQ0FDRixDQUFDLGVBQ0Z0QiwwREFBQSxDQUFDSyxtREFBSztJQUFDdUIsSUFBSSxFQUFDLFFBQVE7SUFBQ0MsT0FBTyxlQUFFN0IsMERBQUEsQ0FBQ1Usb0RBQUssTUFBRTtFQUFFLENBQUUsQ0FBQyxlQUMzQ1YsMERBQUEsQ0FBQ0ssbURBQUs7SUFBQ3VCLElBQUksRUFBQyxHQUFHO0lBQUNDLE9BQU8sZUFBRTdCLDBEQUFBLENBQUNXLHVEQUFRLE1BQUU7RUFBRSxDQUFFLENBQ2xDLENBQ0wsQ0FDUSxDQUFDO0FBRXBCO0FBRUEsSUFBTW1CLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBRy9CLDREQUFVLENBQUM0QixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxjQUFDbEMsMERBQUEsQ0FBQ1ksR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7QUNwRFA7O0FBRWIsUUFBUSxtQkFBTyxDQUFDLEVBQVc7QUFDM0IsSUFBSSxPQUFPO0FBQ1gsRUFBRSxrQkFBa0I7QUFDcEIsRUFBRSxtQkFBbUI7QUFDckIsRUFBRTtBQUNGO0FBQ0EsRUFBRSxrQkFBa0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUJBQW1CO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDeEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBOYXZpZ2FjZSBmcm9tIFwiLi9jb21wb25lbnRzL05hdmlnYWNlXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lXCI7XG5pbXBvcnQgUG9ydGZvbGlvIGZyb20gXCIuL3BhZ2VzL1BvcnRmb2xpb1wiO1xuaW1wb3J0IERlbmlrIGZyb20gXCIuL3BhZ2VzL0RlbmlrXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vcGFnZXMvQWJvdXRcIjtcbmltcG9ydCBOb3RGb3VuZCBmcm9tIFwiLi9wYWdlcy9Ob3RGb3VuZFwiO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtwcmlzcGV2a3ksIHNldFByaXNwZXZreV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgcHJpZGVqUHJpc3BldmVrID0gKHpwcmF2YSkgPT4ge1xuICAgIHNldFByaXNwZXZreShbLi4ucHJpc3Bldmt5LCB6cHJhdmFdKTtcbiAgfTtcblxuICBjb25zdCBzbWF6UHJpc3BldmVrID0gKGluZGV4KSA9PiB7XG4gICAgc2V0UHJpc3Bldmt5KHByaXNwZXZreS5maWx0ZXIoKHByaXNwZXZlaywgaW5kZXhQKSA9PiBpbmRleFAgIT09IGluZGV4KSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgIDxOYXZpZ2FjZSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0gLz5cbiAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgIHBhdGg9XCIvcG9ydGZvbGlvXCJcbiAgICAgICAgICAgIGVsZW1lbnQ9ezxQb3J0Zm9saW8gcHJpc3Bldmt5PXtwcmlzcGV2a3l9IC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICBwYXRoPVwiL2RlbmlrXCJcbiAgICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICA8RGVuaWtcbiAgICAgICAgICAgICAgICBwcmlzcGV2a3k9e3ByaXNwZXZreX1cbiAgICAgICAgICAgICAgICBwcmlkZWpQcmlzcGV2ZWs9e3ByaWRlalByaXNwZXZla31cbiAgICAgICAgICAgICAgICBzbWF6UHJpc3BldmVrPXtzbWF6UHJpc3BldmVrfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWJvdXRcIiBlbGVtZW50PXs8QWJvdXQgLz59IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PE5vdEZvdW5kIC8+fSAvPlxuICAgICAgICA8L1JvdXRlcz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgKTtcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBtID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBleHBvcnRzLmNyZWF0ZVJvb3QgPSBtLmNyZWF0ZVJvb3Q7XG4gIGV4cG9ydHMuaHlkcmF0ZVJvb3QgPSBtLmh5ZHJhdGVSb290O1xufSBlbHNlIHtcbiAgdmFyIGkgPSBtLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuICBleHBvcnRzLmNyZWF0ZVJvb3QgPSBmdW5jdGlvbihjLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5jcmVhdGVSb290KGMsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgZXhwb3J0cy5oeWRyYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIGgsIG8pIHtcbiAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBtLmh5ZHJhdGVSb290KGMsIGgsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjgyZDFlODBhMGJiMWMwY2Q1MDY3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiTmF2aWdhY2UiLCJIb21lIiwiUG9ydGZvbGlvIiwiRGVuaWsiLCJBYm91dCIsIk5vdEZvdW5kIiwiQXBwIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicHJpc3Bldmt5Iiwic2V0UHJpc3Bldmt5IiwicHJpZGVqUHJpc3BldmVrIiwienByYXZhIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5Iiwic21helByaXNwZXZlayIsImluZGV4IiwiZmlsdGVyIiwicHJpc3BldmVrIiwiaW5kZXhQIiwiY3JlYXRlRWxlbWVudCIsInBhdGgiLCJlbGVtZW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9