"use strict";
self["webpackHotUpdatees6_react"](0,{

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, this.props.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LikeButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LikeButtonFunc, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "action-btn action-delete",
    onClick: this.props.onDelete
  }, "Vymazat")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrispevekAkcie);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6ecd4d3fd3579992ca6c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hNTM0NjdmNGRhNTIwYTg5YTRjNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUVuRCxTQUFTRyxjQUFjQSxDQUFBQyxJQUFBLEVBQXFCO0VBQUEsSUFBbEJDLElBQUksR0FBQUQsSUFBQSxDQUFKQyxJQUFJO0lBQUVDLFFBQVEsR0FBQUYsSUFBQSxDQUFSRSxRQUFRO0VBQ3RDO0VBQ0Esb0JBQ0VOLDBEQUFBO0lBQUtRLFNBQVMsRUFBQztFQUFNLGdCQUNuQlIsMERBQUE7SUFBS1EsU0FBUyxFQUFDO0VBQVcsR0FBRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0osSUFBVSxDQUFDLGVBQ2xETCwwREFBQTtJQUFLUSxTQUFTLEVBQUM7RUFBYSxnQkFDMUJSLDBEQUFBLENBQUNVLFVBQVUsTUFBRSxDQUFDLGVBQ2RWLDBEQUFBLENBQUNXLGNBQWMsTUFBRSxDQUFDLGVBQ2xCWCwwREFBQTtJQUNFUSxTQUFTLEVBQUMsMEJBQTBCO0lBQ3BDSSxPQUFPLEVBQUUsSUFBSSxDQUFDSCxLQUFLLENBQUNIO0VBQVMsR0FDOUIsU0FFTyxDQUNMLENBQ0YsQ0FBQztBQUVWO0FBRUEsaUVBQWVILGNBQWM7Ozs7Ozs7O1VDckI3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9QcmlzcGV2ZWtBa2NpZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFByaXNwZXZla0FrY2llKHsgdGV4dCwgb25EZWxldGUgfSkge1xuICAvLyB0YWR5IGJ1ZHUgbcOtdCBwcsOhemRuw70gcG9sZSBha2EgW10gYSBzZW0gYnVkdSBwdXNob3ZhdCBwbyBrbGlrbnV0w60gbmEgemFkw6Fuw60gYWtjaWUsIHphZMOhbsOtIHDFmcOtc3DEm3bEm2t1LCBzZW0gdG8gcG90xZllYnVqdSBvZGVzbGF0IGEgdG8gc2UgcGFrIG9kZcWhbGUgZG8gYXBwLmpzIGNlbMOhIHRhdG8gZnVua2NlIC0tLSBOQSBLT01VTklLQUNJIE1FWkkgS09NUE9ORU5UQU1JIFBPVcW9w41Ww4FNIGBQUk9QU2AgLSBQUk9QUyAgbmVtdXPDrW0gcG91xZnDrXZhdCBqZW4gamFrbyBhdHJpYnV0eSB0xJtjaCBodG1sIHpuYcSNZWssIGFsZSBtxa/FvnUgamUgcG91xb7DrXQgaSB2ZSBmdW5rY8OtY2hcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+e3RoaXMucHJvcHMudGV4dH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgPExpa2VCdXR0b24gLz5cbiAgICAgICAgPExpa2VCdXR0b25GdW5jIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJhY3Rpb24tYnRuIGFjdGlvbi1kZWxldGVcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25EZWxldGV9XG4gICAgICAgID5cbiAgICAgICAgICBWeW1hemF0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaXNwZXZla0FrY2llO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmVjZDRkM2ZkMzU3OTk5MmNhNmNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByaXNwZXZla0FrY2llIiwiX3JlZiIsInRleHQiLCJvbkRlbGV0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJwcm9wcyIsIkxpa2VCdXR0b24iLCJMaWtlQnV0dG9uRnVuYyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9