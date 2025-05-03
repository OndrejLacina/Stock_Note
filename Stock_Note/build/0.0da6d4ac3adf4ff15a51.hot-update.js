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
      prispevky: prispevky,
      pridejPrispevek: pridejPrispevek,
      smazPrispevek: smazPrispevek
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/about",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(About, null)
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("11e5c97f38993900a3cc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wZGE2ZDRhYzNhZGY0ZmYxNWE1MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUN4QztBQUNnRTtBQUVuQjtBQUNiO0FBQ1U7QUFFMUMsU0FBU1EsR0FBR0EsQ0FBQSxFQUFHO0VBQ2IsSUFBQUMsU0FBQSxHQUFrQ1IsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVMsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBdkNHLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxZQUFZLEdBQUFILFVBQUE7RUFFOUIsSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxNQUFNLEVBQUs7SUFDbENGLFlBQVksSUFBQUcsTUFBQSxDQUFBQyxrQkFBQSxDQUFLTCxTQUFTLElBQUVHLE1BQU0sRUFBQyxDQUFDO0VBQ3RDLENBQUM7RUFFRCxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlDLEtBQUssRUFBSztJQUMvQk4sWUFBWSxDQUFDRCxTQUFTLENBQUNRLE1BQU0sQ0FBQyxVQUFDQyxTQUFTLEVBQUVDLE1BQU07TUFBQSxPQUFLQSxNQUFNLEtBQUtILEtBQUs7SUFBQSxFQUFDLENBQUM7RUFDekUsQ0FBQztFQUVELG9CQUNFbkIsMERBQUEsQ0FBQ0UsMkRBQWEscUJBQ1pGLDBEQUFBLENBQUNLLDREQUFRLE1BQUUsQ0FBQyxlQUNaTCwwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ0csb0RBQU0scUJBQ0xILDBEQUFBLENBQUNJLG1EQUFLO0lBQUNvQixJQUFJLEVBQUMsR0FBRztJQUFDQyxPQUFPLGVBQUV6QiwwREFBQSxDQUFDTSxtREFBSSxNQUFFO0VBQUUsQ0FBRSxDQUFDLGVBQ3JDTiwwREFBQSxDQUFDSSxtREFBSztJQUNKb0IsSUFBSSxFQUFDLFlBQVk7SUFDakJDLE9BQU8sZUFBRXpCLDBEQUFBLENBQUNPLHdEQUFTO01BQUNLLFNBQVMsRUFBRUE7SUFBVSxDQUFFO0VBQUUsQ0FDOUMsQ0FBQyxlQUNGWiwwREFBQSxDQUFDSSxtREFBSztJQUNKb0IsSUFBSSxFQUFDLFFBQVE7SUFDYkMsT0FBTyxlQUNMekIsMERBQUEsQ0FBQzBCLEtBQUs7TUFDSmQsU0FBUyxFQUFFQSxTQUFVO01BQ3JCRSxlQUFlLEVBQUVBLGVBQWdCO01BQ2pDSSxhQUFhLEVBQUVBO0lBQWMsQ0FDOUI7RUFDRixDQUNGLENBQUMsZUFDRmxCLDBEQUFBLENBQUNJLG1EQUFLO0lBQUNvQixJQUFJLEVBQUMsUUFBUTtJQUFDQyxPQUFPLGVBQUV6QiwwREFBQSxDQUFDMkIsS0FBSyxNQUFFO0VBQUUsQ0FBRSxDQUFDLGVBQzNDM0IsMERBQUEsQ0FBQ0ksbURBQUs7SUFBQ29CLElBQUksRUFBQyxHQUFHO0lBQUNDLE9BQU8sZUFBRXpCLDBEQUFBLENBQUNNLG1EQUFJLE1BQUU7RUFBRSxDQUFFLENBQzlCLENBQ0wsQ0FDUSxDQUFDO0FBRXBCO0FBRUE7RUFDRTtBQUNGO0FBREU7QUFHRjtFQUNFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkU7QUFlRixJQUFNc0IsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHQyxVQUFVLENBQUNKLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDRSxNQUFNLGNBQUNqQywwREFBQSxDQUFDUSxHQUFHLE1BQUUsQ0FBQyxDQUFDOzs7Ozs7OztVQ3JFcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IE5hdmlnYWNlIGZyb20gXCIuL2NvbXBvbmVudHMvTmF2aWdhY2VcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL3BhZ2VzL0hvbWVcIjtcbmltcG9ydCBQb3J0Zm9saW8gZnJvbSBcIi4vcGFnZXMvUG9ydGZvbGlvXCI7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW3ByaXNwZXZreSwgc2V0UHJpc3Bldmt5XSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBwcmlkZWpQcmlzcGV2ZWsgPSAoenByYXZhKSA9PiB7XG4gICAgc2V0UHJpc3Bldmt5KFsuLi5wcmlzcGV2a3ksIHpwcmF2YV0pO1xuICB9O1xuXG4gIGNvbnN0IHNtYXpQcmlzcGV2ZWsgPSAoaW5kZXgpID0+IHtcbiAgICBzZXRQcmlzcGV2a3kocHJpc3Bldmt5LmZpbHRlcigocHJpc3BldmVrLCBpbmRleFApID0+IGluZGV4UCAhPT0gaW5kZXgpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgPE5hdmlnYWNlIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Um91dGVzPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxuICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgcGF0aD1cIi9wb3J0Zm9saW9cIlxuICAgICAgICAgICAgZWxlbWVudD17PFBvcnRmb2xpbyBwcmlzcGV2a3k9e3ByaXNwZXZreX0gLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgIHBhdGg9XCIvZGVuaWtcIlxuICAgICAgICAgICAgZWxlbWVudD17XG4gICAgICAgICAgICAgIDxEZW5pa1xuICAgICAgICAgICAgICAgIHByaXNwZXZreT17cHJpc3Bldmt5fVxuICAgICAgICAgICAgICAgIHByaWRlalByaXNwZXZlaz17cHJpZGVqUHJpc3BldmVrfVxuICAgICAgICAgICAgICAgIHNtYXpQcmlzcGV2ZWs9e3NtYXpQcmlzcGV2ZWt9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hYm91dFwiIGVsZW1lbnQ9ezxBYm91dCAvPn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0gLz5cbiAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICA8L2Rpdj5cbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICk7XG59XG5cbntcbiAgLyogLy8gVE8tRE8gLT4gdWTEm2xhdCBwYWsgbWVudSBuYWhvxZllLCBhbGVzcG/FiCAyIHrDoWxvxb5reSAoZHJ1aMOhIGJ1ZGUgcMWZZWhsZWQgcG9ydGZvbGlhKVxuLy8gZnVuY3Rpb24gQXBwKCkgeyAqL1xufVxue1xuICAvKiAvLyAgIHJldHVybiAoXG4vLyAgICAgPEJyb3dzZXJSb3V0ZXI+XG4vLyAgICAgICA8TmF2aWdhY2lhIC8+XG4vLyAgICAgICA8Um91dGVzPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8TWFpbiAvPn0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCJjb250YWN0XCIgZWxlbWVudD17PENvbnRhY3QgLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwibG9naW5cIiBlbGVtZW50PXs8TG9naW4gLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwicHJvZHVjdHMvKlwiIGVsZW1lbnQ9ezxQcm9kdWN0cyAvPn0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PE5vdEZvdW5kIC8+fSAvPlxuLy8gICAgICAgPC9Sb3V0ZXM+XG4vLyAgICAgPC9Ccm93c2VyUm91dGVyPlxuLy8gICApO1xuLy8gfSAqL1xufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjExZTVjOTdmMzg5OTM5MDBhM2NjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJOYXZpZ2FjZSIsIkhvbWUiLCJQb3J0Zm9saW8iLCJBcHAiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJwcmlzcGV2a3kiLCJzZXRQcmlzcGV2a3kiLCJwcmlkZWpQcmlzcGV2ZWsiLCJ6cHJhdmEiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJzbWF6UHJpc3BldmVrIiwiaW5kZXgiLCJmaWx0ZXIiLCJwcmlzcGV2ZWsiLCJpbmRleFAiLCJjcmVhdGVFbGVtZW50IiwicGF0aCIsImVsZW1lbnQiLCJEZW5payIsIkFib3V0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJjcmVhdGVSb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==