"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 43:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);


function PrispevekAkcie(_ref) {
  var prispevek = _ref.prispevek,
    indexPrispevku = _ref.indexPrispevku,
    onDelete = _ref.onDelete,
    onAddOperace = _ref.onAddOperace,
    onDeleteOperace = _ref.onDeleteOperace;
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, prispevek.ticker), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-danger btn-sm",
    onClick: onDelete
  }, "Vymazat akcii")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Operations__WEBPACK_IMPORTED_MODULE_1__["default"], {
    operace: prispevek.operace,
    indexPrispevku: indexPrispevku,
    onAddOperace: onAddOperace,
    onDeleteOperace: onDeleteOperace
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrispevekAkcie);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c51d8a972281ad13075b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mNTM0YTY3MzkwNmM5OWJiNDI5Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDYjtBQUV0QyxTQUFTSSxjQUFjQSxDQUFBQyxJQUFBLEVBTXBCO0VBQUEsSUFMREMsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFDVEMsY0FBYyxHQUFBRixJQUFBLENBQWRFLGNBQWM7SUFDZEMsUUFBUSxHQUFBSCxJQUFBLENBQVJHLFFBQVE7SUFDUkMsWUFBWSxHQUFBSixJQUFBLENBQVpJLFlBQVk7SUFDWkMsZUFBZSxHQUFBTCxJQUFBLENBQWZLLGVBQWU7RUFFZjs7RUFFQTs7RUFFQTtFQUNBO0VBQ0FSLGdEQUFTLENBQUMsWUFBTTtJQUNkO0lBQ0FTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVCQUF1QixDQUFDOztJQUVwQztJQUNBLE9BQU8sWUFBTTtNQUNYQyxLQUFLLENBQUMscUJBQXFCLENBQUM7TUFDNUJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7RUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0VaLDBEQUFBO0lBQUtlLFNBQVMsRUFBQztFQUFVLGdCQUN2QmYsMERBQUE7SUFBS2UsU0FBUyxFQUFDO0VBQStELGdCQUM1RWYsMERBQUEsYUFBS00sU0FBUyxDQUFDVSxNQUFXLENBQUMsZUFDM0JoQiwwREFBQTtJQUFRZSxTQUFTLEVBQUMsdUJBQXVCO0lBQUNFLE9BQU8sRUFBRVQ7RUFBUyxHQUFDLGVBRXJELENBQ0wsQ0FBQyxlQUNOUiwwREFBQTtJQUFLZSxTQUFTLEVBQUM7RUFBVyxnQkFDeEJmLDBEQUFBLENBQUNHLG1EQUFVO0lBQ1RlLE9BQU8sRUFBRVosU0FBUyxDQUFDWSxPQUFRO0lBQzNCWCxjQUFjLEVBQUVBLGNBQWU7SUFDL0JFLFlBQVksRUFBRUEsWUFBYTtJQUMzQkMsZUFBZSxFQUFFQTtFQUFnQixDQUNsQyxDQUNFLENBQ0YsQ0FBQztBQUVWO0FBRUEsaUVBQWVOLGNBQWM7Ozs7Ozs7O1VDL0M3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9QcmlzcGV2ZWtBa2NpZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgT3BlcmF0aW9ucyBmcm9tIFwiLi9PcGVyYXRpb25zXCI7XG5cbmZ1bmN0aW9uIFByaXNwZXZla0FrY2llKHtcbiAgcHJpc3BldmVrLFxuICBpbmRleFByaXNwZXZrdSxcbiAgb25EZWxldGUsXG4gIG9uQWRkT3BlcmFjZSxcbiAgb25EZWxldGVPcGVyYWNlLFxufSkge1xuICAvLyB0YWR5IGJ1ZHUgbcOtdCBwcsOhemRuw70gcG9sZSBha2EgW10gYSBzZW0gYnVkdSBwdXNob3ZhdCBwbyBrbGlrbnV0w60gbmEgemFkw6Fuw60gYWtjaWUsIHphZMOhbsOtIHDFmcOtc3DEm3bEm2t1LCBzZW0gdG8gcG90xZllYnVqdSBvZGVzbGF0IGEgdG8gc2UgcGFrIG9kZcWhbGUgZG8gYXBwLmpzIGNlbMOhIHRhdG8gZnVua2NlIC0tLSBOQSBLT01VTklLQUNJIE1FWkkgS09NUE9ORU5UQU1JIFBPVcW9w41Ww4FNIGBQUk9QU2AgLSBQUk9QUyAgbmVtdXPDrW0gcG91xZnDrXZhdCBqZW4gamFrbyBhdHJpYnV0eSB0xJtjaCBodG1sIHpuYcSNZWssIGFsZSBtxa/FvnUgamUgcG91xb7DrXQgaSB2ZSBmdW5rY8OtY2hcblxuICAvLyBLw7NkIHBybyBwxZlpZMOhbsOtIGplZG5vdGxpdsOpIG9wZXJhY2UgTsOha3VwL1Byb2RlaiBwcm8gYWtjaWlcblxuICAvLyAxLiBwYXJhbWV0ciAtIGNhbGxiYWNrXG4gIC8vIDIuIHBhcmFtdGVyIC0gZGVwZW5kZW5jaWVzIC0gesOhdmlzbG9zdGlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBtb3VudCBrb21wb25lbnR1XG4gICAgY29uc29sZS5sb2coXCJQcmlzcGV2ZWsgemHEjWFsIGNlc3R1XCIpO1xuXG4gICAgLy8gdW5tb3VudCBrb21wb25lbnR1XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGFsZXJ0KFwiUHJpc3BldsSbayBzZSB2eW1hxb5lXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJwcmlzcGV2ZWsgemFuaWtsXCIpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtLTNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDU+e3ByaXNwZXZlay50aWNrZXJ9PC9oNT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIiBvbkNsaWNrPXtvbkRlbGV0ZX0+XG4gICAgICAgICAgVnltYXphdCBha2NpaVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPE9wZXJhdGlvbnNcbiAgICAgICAgICBvcGVyYWNlPXtwcmlzcGV2ZWsub3BlcmFjZX1cbiAgICAgICAgICBpbmRleFByaXNwZXZrdT17aW5kZXhQcmlzcGV2a3V9XG4gICAgICAgICAgb25BZGRPcGVyYWNlPXtvbkFkZE9wZXJhY2V9XG4gICAgICAgICAgb25EZWxldGVPcGVyYWNlPXtvbkRlbGV0ZU9wZXJhY2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpc3BldmVrQWtjaWU7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjNTFkOGE5NzIyODFhZDEzMDc1YlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiT3BlcmF0aW9ucyIsIlByaXNwZXZla0FrY2llIiwiX3JlZiIsInByaXNwZXZlayIsImluZGV4UHJpc3Bldmt1Iiwib25EZWxldGUiLCJvbkFkZE9wZXJhY2UiLCJvbkRlbGV0ZU9wZXJhY2UiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGlja2VyIiwib25DbGljayIsIm9wZXJhY2UiXSwic291cmNlUm9vdCI6IiJ9