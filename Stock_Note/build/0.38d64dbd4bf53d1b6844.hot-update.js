"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _components_FormularAkcie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var _components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);




function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Stock Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormularAkcie__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
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

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function buttonPridatAkcii() {
  console.log("Pridat Akcii");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "submit-button",
    onClick: buttonPridatAkcii
  }, "P\u0159idat akcii"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonPridatAkcii);

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
  // jdu ukládat zprávu, která bude text, takže tu zprávu chci mít uloženou v nějaké hodnotě, hodnota v tom STATU je "zprava" (mohlo by to být spíš "ticker nebo stock nebo akcie", že?), "setZprava" je manažer té hodnoty "zprava" a ted už jen inicializační hodnota v useState () a dám tam prázdný textový řetězec
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    zprava = _useState2[0],
    setZprava = _useState2[1];
  function napisSpravu(textSpravy) {
    setZprava(textSpravy);
  }
  function odesliSpravu() {}
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "input-area",
    onSubmit: odesliSpravu
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
/******/ 	__webpack_require__.h = () => ("d911ed7e48d1684cbfb9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zOGQ2NGRiZDRiZjUzZDFiNjg0NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNvQjtBQUNTO0FBQ0U7QUFFekQsU0FBU0ksR0FBR0EsQ0FBQSxFQUFHO0VBQ2Isb0JBQ0VKLDBEQUFBO0lBQUtNLFNBQVMsRUFBQztFQUFTLGdCQUN0Qk4sMERBQUEsYUFBSSxZQUFjLENBQUMsZUFDbkJBLDBEQUFBLDJCQUNFQSwwREFBQSxDQUFDRSxpRUFBYSxNQUFFLENBQ2IsQ0FBQyxlQUNORiwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBTSxnQkFDbkJOLDBEQUFBLENBQUNHLGtFQUFjLE1BQUUsQ0FDZCxDQUNGLENBQUM7QUFFVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUksU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHVCw0REFBVSxDQUFDTSxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxjQUFDWCwwREFBQSxDQUFDSSxHQUFHLE1BQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDckNNO0FBRTFCLFNBQVNRLGlCQUFpQkEsQ0FBQSxFQUFHO0VBQzNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFFM0Isb0JBQ0VkLDBEQUFBLDJCQUNFQSwwREFBQTtJQUFRTSxTQUFTLEVBQUMsZUFBZTtJQUFDUyxPQUFPLEVBQUVIO0VBQWtCLEdBQUMsbUJBRXRELENBQ0wsQ0FBQztBQUVWO0FBRUEsaUVBQWVBLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZFE7QUFDVTtBQUNFO0FBRXBELFNBQVNWLGFBQWFBLENBQUEsRUFBRztFQUN2QjtFQUNBLElBQUFpQixTQUFBLEdBQTRCSCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBSSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFqQ0csTUFBTSxHQUFBRixVQUFBO0lBQUVHLFNBQVMsR0FBQUgsVUFBQTtFQUV4QixTQUFTSSxXQUFXQSxDQUFDQyxVQUFVLEVBQUU7SUFDL0JGLFNBQVMsQ0FBQ0UsVUFBVSxDQUFDO0VBQ3ZCO0VBRUEsU0FBU0MsWUFBWUEsQ0FBQSxFQUFHLENBQUM7RUFFekIsb0JBQ0UxQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUE7SUFBTU0sU0FBUyxFQUFDLFlBQVk7SUFBQ3NCLFFBQVEsRUFBRUY7RUFBYSxnQkFDbEQxQiwwREFBQSxDQUFDaUIseURBQWdCO0lBQUNZLFlBQVksRUFBRUw7RUFBWSxDQUFFLENBQUMsRUFBQyxHQUU1QyxDQUFDLGVBQ1B4QiwwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ2tCLDBEQUFpQixNQUFFLENBQ2pCLENBQ0wsQ0FBQztBQUVQO0FBRUEsaUVBQWVoQixhQUFhOzs7Ozs7Ozs7Ozs7O0FDM0JGO0FBRTFCLFNBQVNlLGdCQUFnQkEsQ0FBQWEsSUFBQSxFQUFtQjtFQUFBLElBQWhCRCxZQUFZLEdBQUFDLElBQUEsQ0FBWkQsWUFBWTtFQUN0QyxvQkFDRTdCLDBEQUFBO0lBQ0VNLFNBQVMsRUFBQyxVQUFVO0lBQ3BCeUIsV0FBVyxFQUFDLHlCQUFvQjtJQUNoQ0MsSUFBSSxFQUFFLENBQUU7SUFDUkMsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUdDLEtBQUs7TUFBQSxPQUFLTCxZQUFZLENBQUNLLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFBQTtFQUFDLENBQzdDLENBQUM7QUFFaEI7QUFFQSxpRUFBZW5CLGdCQUFnQjs7Ozs7Ozs7VUNiL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2NvbXBvbmVudHMvQnV0dG9uUHJpZGF0QWtjaWkuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9jb21wb25lbnRzL0Zvcm11bGFyQWtjaWUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9jb21wb25lbnRzL0lucHV0VmVGb3JtdWxhcmkuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBGb3JtdWxhckFrY2llIGZyb20gXCIuL2NvbXBvbmVudHMvRm9ybXVsYXJBa2NpZVwiO1xuaW1wb3J0IFByaXNwZXZla0FrY2llIGZyb20gXCIuL2NvbXBvbmVudHMvUHJpc3BldmVrQWtjaWVcIjtcblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPGgxPlN0b2NrIE5vdGU8L2gxPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEZvcm11bGFyQWtjaWUgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgIDxQcmlzcGV2ZWtBa2NpZSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIFRPLURPIC0+IHVkxJtsYXQgcGFrIG1lbnUgbmFob8WZZSwgYWxlc3BvxYggMiB6w6Fsb8W+a3kgKGRydWjDoSBidWRlIHDFmWVobGVkIHBvcnRmb2xpYSlcbi8vIGZ1bmN0aW9uIEFwcCgpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8QnJvd3NlclJvdXRlcj5cbi8vICAgICAgIDxOYXZpZ2FjaWEgLz5cbi8vICAgICAgIDxSb3V0ZXM+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxNYWluIC8+fSAvPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cImNvbnRhY3RcIiBlbGVtZW50PXs8Q29udGFjdCAvPn0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCJsb2dpblwiIGVsZW1lbnQ9ezxMb2dpbiAvPn0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCJwcm9kdWN0cy8qXCIgZWxlbWVudD17PFByb2R1Y3RzIC8+fSAvPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBlbGVtZW50PXs8Tm90Rm91bmQgLz59IC8+XG4vLyAgICAgICA8L1JvdXRlcz5cbi8vICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4vLyAgICk7XG4vLyB9XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBidXR0b25QcmlkYXRBa2NpaSgpIHtcbiAgY29uc29sZS5sb2coXCJQcmlkYXQgQWtjaWlcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCIgb25DbGljaz17YnV0dG9uUHJpZGF0QWtjaWl9PlxuICAgICAgICBQxZlpZGF0IGFrY2lpXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uUHJpZGF0QWtjaWk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbnB1dFZlRm9ybXVsYXJpIGZyb20gXCIuL0lucHV0VmVGb3JtdWxhcmlcIjtcbmltcG9ydCBCdXR0b25QcmlkYXRBa2NpaSBmcm9tIFwiLi9CdXR0b25QcmlkYXRBa2NpaVwiO1xuXG5mdW5jdGlvbiBGb3JtdWxhckFrY2llKCkge1xuICAvLyBqZHUgdWtsw6FkYXQgenByw6F2dSwga3RlcsOhIGJ1ZGUgdGV4dCwgdGFrxb5lIHR1IHpwcsOhdnUgY2hjaSBtw610IHVsb8W+ZW5vdSB2IG7Em2pha8OpIGhvZG5vdMSbLCBob2Rub3RhIHYgdG9tIFNUQVRVIGplIFwienByYXZhXCIgKG1vaGxvIGJ5IHRvIGLDvXQgc3DDrcWhIFwidGlja2VyIG5lYm8gc3RvY2sgbmVibyBha2NpZVwiLCDFvmU/KSwgXCJzZXRacHJhdmFcIiBqZSBtYW5hxb5lciB0w6kgaG9kbm90eSBcInpwcmF2YVwiIGEgdGVkIHXFviBqZW4gaW5pY2lhbGl6YcSNbsOtIGhvZG5vdGEgdiB1c2VTdGF0ZSAoKSBhIGTDoW0gdGFtIHByw6F6ZG7DvSB0ZXh0b3bDvSDFmWV0xJt6ZWNcbiAgY29uc3QgW3pwcmF2YSwgc2V0WnByYXZhXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGZ1bmN0aW9uIG5hcGlzU3ByYXZ1KHRleHRTcHJhdnkpIHtcbiAgICBzZXRacHJhdmEodGV4dFNwcmF2eSk7XG4gIH1cblxuICBmdW5jdGlvbiBvZGVzbGlTcHJhdnUoKSB7fVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImlucHV0LWFyZWFcIiBvblN1Ym1pdD17b2Rlc2xpU3ByYXZ1fT5cbiAgICAgICAgPElucHV0VmVGb3JtdWxhcmkgb25DaGFuZ2VUZXh0PXtuYXBpc1NwcmF2dX0gLz57XCIgXCJ9XG4gICAgICAgIHsvKiBuYXBpc1NwcmF2dSBqZSBmdW5rY2UsIGt0ZXJvdSBzaSB0dm/FmcOtbSB2w73FoWUsIHBybyB0ZW50byBGb3JtdWzDocWZIGtvbXBvbmVudCAqL31cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxCdXR0b25QcmlkYXRBa2NpaSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm11bGFyQWtjaWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIElucHV0VmVGb3JtdWxhcmkoeyBvbkNoYW5nZVRleHQgfSkge1xuICByZXR1cm4gKFxuICAgIDx0ZXh0YXJlYVxuICAgICAgY2xhc3NOYW1lPVwidGV4dGFyZWFcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJWbG/FviBub3ZvdSBha2NpaS4uXCJcbiAgICAgIHJvd3M9ezJ9XG4gICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZVRleHQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICA+PC90ZXh0YXJlYT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRWZUZvcm11bGFyaTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ5MTFlZDdlNDhkMTY4NGNiZmI5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkZvcm11bGFyQWtjaWUiLCJQcmlzcGV2ZWtBa2NpZSIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsImJ1dHRvblByaWRhdEFrY2lpIiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2siLCJ1c2VTdGF0ZSIsIklucHV0VmVGb3JtdWxhcmkiLCJCdXR0b25QcmlkYXRBa2NpaSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInpwcmF2YSIsInNldFpwcmF2YSIsIm5hcGlzU3ByYXZ1IiwidGV4dFNwcmF2eSIsIm9kZXNsaVNwcmF2dSIsIkZyYWdtZW50Iiwib25TdWJtaXQiLCJvbkNoYW5nZVRleHQiLCJfcmVmIiwicGxhY2Vob2xkZXIiLCJyb3dzIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==