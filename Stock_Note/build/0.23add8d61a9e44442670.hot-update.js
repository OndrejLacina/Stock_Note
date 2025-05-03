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
/* harmony import */ var _ButtonSmazatOperaci__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _Operations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);



function PrispevekAkcie(_ref) {
  var text = _ref.text,
    onDelete = _ref.onDelete;
  // tady budu mít prázdný pole aka [] a sem budu pushovat po kliknutí na zadání akcie, zadání příspěvěku, sem to potřebuju odeslat a to se pak odešle do app.js celá tato funkce --- NA KOMUNIKACI MEZI KOMPONENTAMI POUŽÍVÁM `PROPS` - PROPS  nemusím pouřívat jen jako atributy těch html značek, ale můžu je použít i ve funkcích

  // Kód pro přidání jednotlivé operace Nákup/Prodej pro akcii

  // 1. parametr - callback
  // 2. paramter - dependencies - závislosti
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // mount komponentu
    console.log("Prispevek začal cestu");

    // unmount komponentu
    return function () {
      alert("Prispevěk se vymaže");
      console.log("prispevek zanikl");
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-footer"
  }, "Pr\u016Fm\u011Brn\xE1 n\xE1kupn\xED cena: ", vypocitejPrumer(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "action-btn action-delete",
    onClick: onDelete
  }, "Vymazat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Operations__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrispevekAkcie);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3bd5d5c39cd10f82c99c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yM2FkZDhkNjFhOWU0NDQ0MjY3MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0s7QUFDbEI7QUFFdEMsU0FBU0ssY0FBY0EsQ0FBQUMsSUFBQSxFQUFxQjtFQUFBLElBQWxCQyxJQUFJLEdBQUFELElBQUEsQ0FBSkMsSUFBSTtJQUFFQyxRQUFRLEdBQUFGLElBQUEsQ0FBUkUsUUFBUTtFQUN0Qzs7RUFFQTs7RUFFQTtFQUNBO0VBQ0FOLGdEQUFTLENBQUMsWUFBTTtJQUNkO0lBQ0FPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVCQUF1QixDQUFDOztJQUVwQztJQUNBLE9BQU8sWUFBTTtNQUNYQyxLQUFLLENBQUMscUJBQXFCLENBQUM7TUFDNUJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7RUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0VWLDBEQUFBO0lBQUthLFNBQVMsRUFBQztFQUFNLGdCQUNuQmIsMERBQUE7SUFBS2EsU0FBUyxFQUFDO0VBQVcsR0FBRU4sSUFBVSxDQUFDLGVBQ3ZDUCwwREFBQTtJQUFLYSxTQUFTLEVBQUM7RUFBYSxHQUFDLDRDQUNKLEVBQUNDLGVBQWUsQ0FBQyxDQUFDLGVBQ3pDZCwwREFBQTtJQUFRYSxTQUFTLEVBQUMsMEJBQTBCO0lBQUNFLE9BQU8sRUFBRVA7RUFBUyxHQUFDLFNBRXhELENBQUMsZUFDVFIsMERBQUEsQ0FBQ0ksbURBQVUsTUFBRSxDQUNWLENBQ0YsQ0FBQztBQUVWO0FBRUEsaUVBQWVDLGNBQWM7Ozs7Ozs7O1VDcEM3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9QcmlzcGV2ZWtBa2NpZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uU21hemF0T3BlcmFjaSBmcm9tIFwiLi9CdXR0b25TbWF6YXRPcGVyYWNpXCI7XG5pbXBvcnQgT3BlcmF0aW9ucyBmcm9tIFwiLi9PcGVyYXRpb25zXCI7XG5cbmZ1bmN0aW9uIFByaXNwZXZla0FrY2llKHsgdGV4dCwgb25EZWxldGUgfSkge1xuICAvLyB0YWR5IGJ1ZHUgbcOtdCBwcsOhemRuw70gcG9sZSBha2EgW10gYSBzZW0gYnVkdSBwdXNob3ZhdCBwbyBrbGlrbnV0w60gbmEgemFkw6Fuw60gYWtjaWUsIHphZMOhbsOtIHDFmcOtc3DEm3bEm2t1LCBzZW0gdG8gcG90xZllYnVqdSBvZGVzbGF0IGEgdG8gc2UgcGFrIG9kZcWhbGUgZG8gYXBwLmpzIGNlbMOhIHRhdG8gZnVua2NlIC0tLSBOQSBLT01VTklLQUNJIE1FWkkgS09NUE9ORU5UQU1JIFBPVcW9w41Ww4FNIGBQUk9QU2AgLSBQUk9QUyAgbmVtdXPDrW0gcG91xZnDrXZhdCBqZW4gamFrbyBhdHJpYnV0eSB0xJtjaCBodG1sIHpuYcSNZWssIGFsZSBtxa/FvnUgamUgcG91xb7DrXQgaSB2ZSBmdW5rY8OtY2hcblxuICAvLyBLw7NkIHBybyBwxZlpZMOhbsOtIGplZG5vdGxpdsOpIG9wZXJhY2UgTsOha3VwL1Byb2RlaiBwcm8gYWtjaWlcblxuICAvLyAxLiBwYXJhbWV0ciAtIGNhbGxiYWNrXG4gIC8vIDIuIHBhcmFtdGVyIC0gZGVwZW5kZW5jaWVzIC0gesOhdmlzbG9zdGlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBtb3VudCBrb21wb25lbnR1XG4gICAgY29uc29sZS5sb2coXCJQcmlzcGV2ZWsgemHEjWFsIGNlc3R1XCIpO1xuXG4gICAgLy8gdW5tb3VudCBrb21wb25lbnR1XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGFsZXJ0KFwiUHJpc3BldsSbayBzZSB2eW1hxb5lXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJwcmlzcGV2ZWsgemFuaWtsXCIpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj57dGV4dH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgUHLFr23Em3Juw6EgbsOha3VwbsOtIGNlbmE6IHt2eXBvY2l0ZWpQcnVtZXIoKX1cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhY3Rpb24tYnRuIGFjdGlvbi1kZWxldGVcIiBvbkNsaWNrPXtvbkRlbGV0ZX0+XG4gICAgICAgICAgVnltYXphdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPE9wZXJhdGlvbnMgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcmlzcGV2ZWtBa2NpZTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNiZDVkNWMzOWNkMTBmODJjOTljXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCdXR0b25TbWF6YXRPcGVyYWNpIiwiT3BlcmF0aW9ucyIsIlByaXNwZXZla0FrY2llIiwiX3JlZiIsInRleHQiLCJvbkRlbGV0ZSIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ2eXBvY2l0ZWpQcnVtZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==