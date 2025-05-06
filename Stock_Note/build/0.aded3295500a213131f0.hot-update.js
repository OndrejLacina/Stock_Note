self["webpackHotUpdatees6_react"](0,{

/***/ 44:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/ondrejlacina/CL/Stock_Note/Stock_Note/js/components/Operations.js: Identifier 'onDeleteOperace' has already been declared. (8:2)\n\n\u001b[0m \u001b[90m  6 |\u001b[39m   indexPrispevku\u001b[33m,\u001b[39m\n \u001b[90m  7 |\u001b[39m   onAddOperace\u001b[33m,\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  8 |\u001b[39m   onDeleteOperace\u001b[33m,\u001b[39m\n \u001b[90m    |\u001b[39m   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m  9 |\u001b[39m }) {\n \u001b[90m 10 |\u001b[39m   \u001b[90m// Odsud počítám průměr a vytváří se mi jednotlivé řádky transakcí\u001b[39m\n \u001b[90m 11 |\u001b[39m   \u001b[36mconst\u001b[39m [novaOperace\u001b[33m,\u001b[39m setNovaOperace] \u001b[33m=\u001b[39m useState({\u001b[0m\n    at constructor (/Users/ondrejlacina/CL/Stock_Note/node_modules/@babel/parser/lib/index.js:360:19)\n    at JSXParserMixin.raise (/Users/ondrejlacina/CL/Stock_Note/node_modules/@babel/parser/lib/index.js:3327:19)\n    at ScopeHandler.checkRedeclarationInScope (/Users/ondrejlacina/CL/Stock_Note/node_modules/@babel/parser/lib/index.js:1555:19)\n    at ScopeHandler.declareName (/Users/ondrejlacina/CL/Stock_Note/node_modules/@babel/parser/lib/index.js:1538:14)\n    at JSXParserMixin.declareNameFromIdentifier (/Users/ondrejlacina/CL/Stock_Note/node_modules/@babel/parser/lib/index.js:7480:16)\n    at JSXParserMixin.checkIdentifier (/Users/ondrejlacina/CL/Stock_Note/node_modules/@babel/parser/lib/index.js:7476:12)\n    at JSXParserMixin.checkLVal (/Users/ondrejlacina/CL/Stock_Note/node_modules/@babel/parser/lib/index.js:7417:12)\n    at JSXParserMixin.checkLVal (/Users/ondrejlacina/CL/Stock_Note/node_modules/@babel/parser/lib/index.js:7457:12)\n    at JSXParserMixin.checkLVal (/Users/ondrejlacina/CL/Stock_Note/node_modules/@babel/parser/lib/index.js:7453:16)\n    at JSXParserMixin.checkParams (/Users/ondrejlacina/CL/Stock_Note/node_modules/@babel/parser/lib/index.js:11815:12)");

/***/ }),

/***/ 43:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var _Operations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Operations__WEBPACK_IMPORTED_MODULE_1__);


function PrispevekAkcie(_ref) {
  var prispevek = _ref.prispevek,
    index = _ref.index,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Operations__WEBPACK_IMPORTED_MODULE_1___default()), {
    operace: prispevek.operace,
    indexPrispevku: index,
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
/******/ 	__webpack_require__.h = () => ("b6684219a41159bebbf2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hZGVkMzI5NTUwMGEyMTMxMzFmMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNiO0FBRXRDLFNBQVNJLGNBQWNBLENBQUFDLElBQUEsRUFNcEI7RUFBQSxJQUxEQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUNUQyxLQUFLLEdBQUFGLElBQUEsQ0FBTEUsS0FBSztJQUNMQyxRQUFRLEdBQUFILElBQUEsQ0FBUkcsUUFBUTtJQUNSQyxZQUFZLEdBQUFKLElBQUEsQ0FBWkksWUFBWTtJQUNaQyxlQUFlLEdBQUFMLElBQUEsQ0FBZkssZUFBZTtFQUVmOztFQUVBOztFQUVBO0VBQ0E7RUFDQVIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2Q7SUFDQVMsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7O0lBRXBDO0lBQ0EsT0FBTyxZQUFNO01BQ1hDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztNQUM1QkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztFQUNILENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDRVosMERBQUE7SUFBS2UsU0FBUyxFQUFDO0VBQVUsZ0JBQ3ZCZiwwREFBQTtJQUFLZSxTQUFTLEVBQUM7RUFBK0QsZ0JBQzVFZiwwREFBQSxhQUFLTSxTQUFTLENBQUNVLE1BQVcsQ0FBQyxlQUMzQmhCLDBEQUFBO0lBQVFlLFNBQVMsRUFBQyx1QkFBdUI7SUFBQ0UsT0FBTyxFQUFFVDtFQUFTLEdBQUMsZUFFckQsQ0FDTCxDQUFDLGVBQ05SLDBEQUFBO0lBQUtlLFNBQVMsRUFBQztFQUFXLGdCQUN4QmYsMERBQUEsQ0FBQ0csb0RBQVU7SUFDVGUsT0FBTyxFQUFFWixTQUFTLENBQUNZLE9BQVE7SUFDM0JDLGNBQWMsRUFBRVosS0FBTTtJQUN0QkUsWUFBWSxFQUFFQSxZQUFhO0lBQzNCQyxlQUFlLEVBQUVBO0VBQWdCLENBQ2xDLENBQ0UsQ0FDRixDQUFDO0FBRVY7QUFFQSxpRUFBZU4sY0FBYzs7Ozs7Ozs7VUMvQzdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9jb21wb25lbnRzL1ByaXNwZXZla0FrY2llLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBPcGVyYXRpb25zIGZyb20gXCIuL09wZXJhdGlvbnNcIjtcblxuZnVuY3Rpb24gUHJpc3BldmVrQWtjaWUoe1xuICBwcmlzcGV2ZWssXG4gIGluZGV4LFxuICBvbkRlbGV0ZSxcbiAgb25BZGRPcGVyYWNlLFxuICBvbkRlbGV0ZU9wZXJhY2UsXG59KSB7XG4gIC8vIHRhZHkgYnVkdSBtw610IHByw6F6ZG7DvSBwb2xlIGFrYSBbXSBhIHNlbSBidWR1IHB1c2hvdmF0IHBvIGtsaWtudXTDrSBuYSB6YWTDoW7DrSBha2NpZSwgemFkw6Fuw60gcMWZw61zcMSbdsSba3UsIHNlbSB0byBwb3TFmWVidWp1IG9kZXNsYXQgYSB0byBzZSBwYWsgb2RlxaFsZSBkbyBhcHAuanMgY2Vsw6EgdGF0byBmdW5rY2UgLS0tIE5BIEtPTVVOSUtBQ0kgTUVaSSBLT01QT05FTlRBTUkgUE9Vxb3DjVbDgU0gYFBST1BTYCAtIFBST1BTICBuZW11c8OtbSBwb3XFmcOtdmF0IGplbiBqYWtvIGF0cmlidXR5IHTEm2NoIGh0bWwgem5hxI1laywgYWxlIG3Fr8W+dSBqZSBwb3XFvsOtdCBpIHZlIGZ1bmtjw61jaFxuXG4gIC8vIEvDs2QgcHJvIHDFmWlkw6Fuw60gamVkbm90bGl2w6kgb3BlcmFjZSBOw6FrdXAvUHJvZGVqIHBybyBha2NpaVxuXG4gIC8vIDEuIHBhcmFtZXRyIC0gY2FsbGJhY2tcbiAgLy8gMi4gcGFyYW10ZXIgLSBkZXBlbmRlbmNpZXMgLSB6w6F2aXNsb3N0aVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIG1vdW50IGtvbXBvbmVudHVcbiAgICBjb25zb2xlLmxvZyhcIlByaXNwZXZlayB6YcSNYWwgY2VzdHVcIik7XG5cbiAgICAvLyB1bm1vdW50IGtvbXBvbmVudHVcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYWxlcnQoXCJQcmlzcGV2xJtrIHNlIHZ5bWHFvmVcIik7XG4gICAgICBjb25zb2xlLmxvZyhcInByaXNwZXZlayB6YW5pa2xcIik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG0tM1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxoNT57cHJpc3BldmVrLnRpY2tlcn08L2g1PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiIG9uQ2xpY2s9e29uRGVsZXRlfT5cbiAgICAgICAgICBWeW1hemF0IGFrY2lpXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8T3BlcmF0aW9uc1xuICAgICAgICAgIG9wZXJhY2U9e3ByaXNwZXZlay5vcGVyYWNlfVxuICAgICAgICAgIGluZGV4UHJpc3Bldmt1PXtpbmRleH1cbiAgICAgICAgICBvbkFkZE9wZXJhY2U9e29uQWRkT3BlcmFjZX1cbiAgICAgICAgICBvbkRlbGV0ZU9wZXJhY2U9e29uRGVsZXRlT3BlcmFjZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcmlzcGV2ZWtBa2NpZTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI2Njg0MjE5YTQxMTU5YmViYmYyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJPcGVyYXRpb25zIiwiUHJpc3BldmVrQWtjaWUiLCJfcmVmIiwicHJpc3BldmVrIiwiaW5kZXgiLCJvbkRlbGV0ZSIsIm9uQWRkT3BlcmFjZSIsIm9uRGVsZXRlT3BlcmFjZSIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0aWNrZXIiLCJvbkNsaWNrIiwib3BlcmFjZSIsImluZGV4UHJpc3Bldmt1Il0sInNvdXJjZVJvb3QiOiIifQ==