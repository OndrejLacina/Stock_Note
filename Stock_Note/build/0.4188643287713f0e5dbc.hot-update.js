"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _components_ButtonPridatAkcii__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _components_FormularAkcie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);





function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Stock Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormularAkcie__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
}

// TO-DO -> udělat pak menu nahoře, alespoň 2 záložky (druhá bude přehled portfolia)
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



function FormularAkcie() {
  var _napisSpravu = function napisSpravu(textSpravy) {},
    _napisSpravu2 = _slicedToArray(_napisSpravu, 2),
    text = _napisSpravu2[0],
    setText = _napisSpravu2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "input-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputVeFormulari__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChangeText: napisSpravu
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ButtonPridatAkcii__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
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
/******/ 	__webpack_require__.h = () => ("263ca6ae5bf3e9de4e80")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40MTg4NjQzMjg3NzEzZjBlNWRiYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFDaUI7QUFDUjtBQUNFO0FBRXpELFNBQVNLLEdBQUdBLENBQUEsRUFBRztFQUNiLG9CQUNFTCwwREFBQTtJQUFLTyxTQUFTLEVBQUM7RUFBUyxnQkFDdEJQLDBEQUFBLGFBQUksWUFBYyxDQUFDLGVBQ25CQSwwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ0csaUVBQWEsTUFBRSxDQUNiLENBQUMsZUFDTkgsMERBQUE7SUFBS08sU0FBUyxFQUFDO0VBQU0sZ0JBQ25CUCwwREFBQSxDQUFDSSxrRUFBYyxNQUFFLENBQ2QsQ0FDRixDQUFDO0FBRVY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR1YsNERBQVUsQ0FBQ08sU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sY0FBQ1osMERBQUEsQ0FBQ0ssR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENNO0FBQ3dCO0FBQ0U7QUFFcEQsU0FBU0YsYUFBYUEsQ0FBQSxFQUFHO0VBQ3ZCLElBQUFXLFlBQUEsR0FBd0IsU0FBU0MsV0FBV0EsQ0FBQ0MsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUFBQyxhQUFBLEdBQUFDLGNBQUEsQ0FBQUosWUFBQTtJQUFwREssSUFBSSxHQUFBRixhQUFBO0lBQUVHLE9BQU8sR0FBQUgsYUFBQTtFQUVwQixvQkFDRWpCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNFQSwwREFBQTtJQUFNTyxTQUFTLEVBQUM7RUFBWSxnQkFDMUJQLDBEQUFBLENBQUNhLHlEQUFnQjtJQUFDUyxZQUFZLEVBQUVQO0VBQVksQ0FBRSxDQUFDLEVBQUMsR0FFNUMsQ0FBQyxlQUNQZiwwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ0UsMERBQWlCLE1BQUUsQ0FDakIsQ0FDTCxDQUFDO0FBRVA7QUFFQSxpRUFBZUMsYUFBYTs7Ozs7Ozs7Ozs7OztBQ3BCRjtBQUUxQixTQUFTVSxnQkFBZ0JBLENBQUFVLElBQUEsRUFBbUI7RUFBQSxJQUFoQkQsWUFBWSxHQUFBQyxJQUFBLENBQVpELFlBQVk7RUFDdEMsb0JBQ0V0QiwwREFBQTtJQUNFTyxTQUFTLEVBQUMsVUFBVTtJQUNwQmlCLFdBQVcsRUFBQyx5QkFBb0I7SUFDaENDLElBQUksRUFBRSxDQUFFO0lBQ1JDLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHQyxLQUFLO01BQUEsT0FBS0wsWUFBWSxDQUFDSyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQUE7RUFBQyxDQUM3QyxDQUFDO0FBRWhCO0FBRUEsaUVBQWVoQixnQkFBZ0I7Ozs7Ozs7O1VDYi9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9jb21wb25lbnRzL0Zvcm11bGFyQWtjaWUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9jb21wb25lbnRzL0lucHV0VmVGb3JtdWxhcmkuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBCdXR0b25QcmlkYXRBa2NpaSBmcm9tIFwiLi9jb21wb25lbnRzL0J1dHRvblByaWRhdEFrY2lpXCI7XG5pbXBvcnQgRm9ybXVsYXJBa2NpZSBmcm9tIFwiLi9jb21wb25lbnRzL0Zvcm11bGFyQWtjaWVcIjtcbmltcG9ydCBQcmlzcGV2ZWtBa2NpZSBmcm9tIFwiLi9jb21wb25lbnRzL1ByaXNwZXZla0FrY2llXCI7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxoMT5TdG9jayBOb3RlPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxGb3JtdWxhckFrY2llIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICA8UHJpc3BldmVrQWtjaWUgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBUTy1ETyAtPiB1ZMSbbGF0IHBhayBtZW51IG5haG/FmWUsIGFsZXNwb8WIIDIgesOhbG/Fvmt5IChkcnVow6EgYnVkZSBwxZllaGxlZCBwb3J0Zm9saWEpXG4vLyBmdW5jdGlvbiBBcHAoKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPEJyb3dzZXJSb3V0ZXI+XG4vLyAgICAgICA8TmF2aWdhY2lhIC8+XG4vLyAgICAgICA8Um91dGVzPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8TWFpbiAvPn0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCJjb250YWN0XCIgZWxlbWVudD17PENvbnRhY3QgLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwibG9naW5cIiBlbGVtZW50PXs8TG9naW4gLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwicHJvZHVjdHMvKlwiIGVsZW1lbnQ9ezxQcm9kdWN0cyAvPn0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PE5vdEZvdW5kIC8+fSAvPlxuLy8gICAgICAgPC9Sb3V0ZXM+XG4vLyAgICAgPC9Ccm93c2VyUm91dGVyPlxuLy8gICApO1xuLy8gfVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbnB1dFZlRm9ybXVsYXJpIGZyb20gXCIuL0lucHV0VmVGb3JtdWxhcmlcIjtcbmltcG9ydCBCdXR0b25QcmlkYXRBa2NpaSBmcm9tIFwiLi9CdXR0b25QcmlkYXRBa2NpaVwiO1xuXG5mdW5jdGlvbiBGb3JtdWxhckFrY2llKCkge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSBmdW5jdGlvbiBuYXBpc1NwcmF2dSh0ZXh0U3ByYXZ5KSB7fTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJpbnB1dC1hcmVhXCI+XG4gICAgICAgIDxJbnB1dFZlRm9ybXVsYXJpIG9uQ2hhbmdlVGV4dD17bmFwaXNTcHJhdnV9IC8+e1wiIFwifVxuICAgICAgICB7LyogbmFwaXNTcHJhdnUgamUgZnVua2NlLCBrdGVyb3Ugc2kgdHZvxZnDrW0gdsO9xaFlLCBwcm8gdGVudG8gRm9ybXVsw6HFmSBrb21wb25lbnQgKi99XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8QnV0dG9uUHJpZGF0QWtjaWkgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtdWxhckFrY2llO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBJbnB1dFZlRm9ybXVsYXJpKHsgb25DaGFuZ2VUZXh0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8dGV4dGFyZWFcbiAgICAgIGNsYXNzTmFtZT1cInRleHRhcmVhXCJcbiAgICAgIHBsYWNlaG9sZGVyPVwiVmxvxb4gbm92b3UgYWtjaWkuLlwiXG4gICAgICByb3dzPXsyfVxuICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gb25DaGFuZ2VUZXh0KGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgPjwvdGV4dGFyZWE+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0VmVGb3JtdWxhcmk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNjNjYTZhZTViZjNlOWRlNGU4MFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJCdXR0b25QcmlkYXRBa2NpaSIsIkZvcm11bGFyQWtjaWUiLCJQcmlzcGV2ZWtBa2NpZSIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsIklucHV0VmVGb3JtdWxhcmkiLCJfbmFwaXNTcHJhdnUiLCJuYXBpc1NwcmF2dSIsInRleHRTcHJhdnkiLCJfbmFwaXNTcHJhdnUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ0ZXh0Iiwic2V0VGV4dCIsIkZyYWdtZW50Iiwib25DaGFuZ2VUZXh0IiwiX3JlZiIsInBsYWNlaG9sZGVyIiwicm93cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=