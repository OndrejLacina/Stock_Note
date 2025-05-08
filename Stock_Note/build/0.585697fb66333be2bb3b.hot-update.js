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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, prispevek), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-danger btn-sm",
    onClick: onDelete
  }, "Vymazat akcii")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Operations__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrispevekAkcie);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a3bfa20641a1a0d4779d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ODU2OTdmYjY2MzMzYmUyYmIzYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDYjtBQUV0QyxTQUFTSSxjQUFjQSxDQUFBQyxJQUFBLEVBQTBCO0VBQUEsSUFBdkJDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUVDLFFBQVEsR0FBQUYsSUFBQSxDQUFSRSxRQUFRO0VBQzNDOztFQUVBOztFQUVBO0VBQ0E7RUFDQUwsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2Q7SUFDQU0sT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7O0lBRXBDO0lBQ0EsT0FBTyxZQUFNO01BQ1hDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztNQUM1QkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztFQUNILENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDRVQsMERBQUE7SUFBS1ksU0FBUyxFQUFDO0VBQVUsZ0JBQ3ZCWiwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBK0QsZ0JBQzVFWiwwREFBQSxhQUFLTSxTQUFjLENBQUMsZUFDcEJOLDBEQUFBO0lBQVFZLFNBQVMsRUFBQyx1QkFBdUI7SUFBQ0MsT0FBTyxFQUFFTjtFQUFTLEdBQUMsZUFFckQsQ0FDTCxDQUFDLGVBQ05QLDBEQUFBO0lBQUtZLFNBQVMsRUFBQztFQUFXLGdCQUN4QlosMERBQUEsQ0FBQ0csbURBQVUsTUFBRSxDQUNWLENBQ0YsQ0FBQztBQUVWO0FBRUEsaUVBQWVDLGNBQWM7Ozs7Ozs7O1VDcEM3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9QcmlzcGV2ZWtBa2NpZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgT3BlcmF0aW9ucyBmcm9tIFwiLi9PcGVyYXRpb25zXCI7XG5cbmZ1bmN0aW9uIFByaXNwZXZla0FrY2llKHsgcHJpc3BldmVrLCBvbkRlbGV0ZSB9KSB7XG4gIC8vIHRhZHkgYnVkdSBtw610IHByw6F6ZG7DvSBwb2xlIGFrYSBbXSBhIHNlbSBidWR1IHB1c2hvdmF0IHBvIGtsaWtudXTDrSBuYSB6YWTDoW7DrSBha2NpZSwgemFkw6Fuw60gcMWZw61zcMSbdsSba3UsIHNlbSB0byBwb3TFmWVidWp1IG9kZXNsYXQgYSB0byBzZSBwYWsgb2RlxaFsZSBkbyBhcHAuanMgY2Vsw6EgdGF0byBmdW5rY2UgLS0tIE5BIEtPTVVOSUtBQ0kgTUVaSSBLT01QT05FTlRBTUkgUE9Vxb3DjVbDgU0gYFBST1BTYCAtIFBST1BTICBuZW11c8OtbSBwb3XFmcOtdmF0IGplbiBqYWtvIGF0cmlidXR5IHTEm2NoIGh0bWwgem5hxI1laywgYWxlIG3Fr8W+dSBqZSBwb3XFvsOtdCBpIHZlIGZ1bmtjw61jaFxuXG4gIC8vIEvDs2QgcHJvIHDFmWlkw6Fuw60gamVkbm90bGl2w6kgb3BlcmFjZSBOw6FrdXAvUHJvZGVqIHBybyBha2NpaVxuXG4gIC8vIDEuIHBhcmFtZXRyIC0gY2FsbGJhY2tcbiAgLy8gMi4gcGFyYW10ZXIgLSBkZXBlbmRlbmNpZXMgLSB6w6F2aXNsb3N0aVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIG1vdW50IGtvbXBvbmVudHVcbiAgICBjb25zb2xlLmxvZyhcIlByaXNwZXZlayB6YcSNYWwgY2VzdHVcIik7XG5cbiAgICAvLyB1bm1vdW50IGtvbXBvbmVudHVcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYWxlcnQoXCJQcmlzcGV2xJtrIHNlIHZ5bWHFvmVcIik7XG4gICAgICBjb25zb2xlLmxvZyhcInByaXNwZXZlayB6YW5pa2xcIik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG0tM1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxoNT57cHJpc3BldmVrfTwvaDU+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIgb25DbGljaz17b25EZWxldGV9PlxuICAgICAgICAgIFZ5bWF6YXQgYWtjaWlcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxPcGVyYXRpb25zIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpc3BldmVrQWtjaWU7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhM2JmYTIwNjQxYTFhMGQ0Nzc5ZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiT3BlcmF0aW9ucyIsIlByaXNwZXZla0FrY2llIiwiX3JlZiIsInByaXNwZXZlayIsIm9uRGVsZXRlIiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9