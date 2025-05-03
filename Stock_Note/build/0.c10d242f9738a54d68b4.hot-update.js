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
/* harmony import */ var _Operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);


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
    className: "card m-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-danger btn-sm",
    onClick: onDelete
  }, "Vymazat akcii")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrispevekAkcie);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0ed93f1686926404abc5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMTBkMjQyZjk3MzhhNTRkNjhiNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDYjtBQUV0QyxTQUFTSSxjQUFjQSxDQUFBQyxJQUFBLEVBQXFCO0VBQUEsSUFBbEJDLElBQUksR0FBQUQsSUFBQSxDQUFKQyxJQUFJO0lBQUVDLFFBQVEsR0FBQUYsSUFBQSxDQUFSRSxRQUFRO0VBQ3RDOztFQUVBOztFQUVBO0VBQ0E7RUFDQUwsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2Q7SUFDQU0sT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7O0lBRXBDO0lBQ0EsT0FBTyxZQUFNO01BQ1hDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztNQUM1QkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztFQUNILENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDRVQsMERBQUE7SUFBS1ksU0FBUyxFQUFDO0VBQVUsZ0JBQ3ZCWiwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBK0QsZ0JBQzVFWiwwREFBQSxhQUFLTSxJQUFTLENBQUMsZUFDZk4sMERBQUE7SUFBUVksU0FBUyxFQUFDLHVCQUF1QjtJQUFDQyxPQUFPLEVBQUVOO0VBQVMsR0FBQyxlQUVyRCxDQUNMLENBQ0YsQ0FBQztBQUVWO0FBRUEsaUVBQWVILGNBQWM7Ozs7Ozs7O1VDakM3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9QcmlzcGV2ZWtBa2NpZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgT3BlcmF0aW9ucyBmcm9tIFwiLi9PcGVyYXRpb25zXCI7XG5cbmZ1bmN0aW9uIFByaXNwZXZla0FrY2llKHsgdGV4dCwgb25EZWxldGUgfSkge1xuICAvLyB0YWR5IGJ1ZHUgbcOtdCBwcsOhemRuw70gcG9sZSBha2EgW10gYSBzZW0gYnVkdSBwdXNob3ZhdCBwbyBrbGlrbnV0w60gbmEgemFkw6Fuw60gYWtjaWUsIHphZMOhbsOtIHDFmcOtc3DEm3bEm2t1LCBzZW0gdG8gcG90xZllYnVqdSBvZGVzbGF0IGEgdG8gc2UgcGFrIG9kZcWhbGUgZG8gYXBwLmpzIGNlbMOhIHRhdG8gZnVua2NlIC0tLSBOQSBLT01VTklLQUNJIE1FWkkgS09NUE9ORU5UQU1JIFBPVcW9w41Ww4FNIGBQUk9QU2AgLSBQUk9QUyAgbmVtdXPDrW0gcG91xZnDrXZhdCBqZW4gamFrbyBhdHJpYnV0eSB0xJtjaCBodG1sIHpuYcSNZWssIGFsZSBtxa/FvnUgamUgcG91xb7DrXQgaSB2ZSBmdW5rY8OtY2hcblxuICAvLyBLw7NkIHBybyBwxZlpZMOhbsOtIGplZG5vdGxpdsOpIG9wZXJhY2UgTsOha3VwL1Byb2RlaiBwcm8gYWtjaWlcblxuICAvLyAxLiBwYXJhbWV0ciAtIGNhbGxiYWNrXG4gIC8vIDIuIHBhcmFtdGVyIC0gZGVwZW5kZW5jaWVzIC0gesOhdmlzbG9zdGlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBtb3VudCBrb21wb25lbnR1XG4gICAgY29uc29sZS5sb2coXCJQcmlzcGV2ZWsgemHEjWFsIGNlc3R1XCIpO1xuXG4gICAgLy8gdW5tb3VudCBrb21wb25lbnR1XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGFsZXJ0KFwiUHJpc3BldsSbayBzZSB2eW1hxb5lXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJwcmlzcGV2ZWsgemFuaWtsXCIpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtLTNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDU+e3RleHR9PC9oNT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIiBvbkNsaWNrPXtvbkRlbGV0ZX0+XG4gICAgICAgICAgVnltYXphdCBha2NpaVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcmlzcGV2ZWtBa2NpZTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBlZDkzZjE2ODY5MjY0MDRhYmM1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJPcGVyYXRpb25zIiwiUHJpc3BldmVrQWtjaWUiLCJfcmVmIiwidGV4dCIsIm9uRGVsZXRlIiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9