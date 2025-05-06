"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 42:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FormularAkcie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);



function Denik(_ref) {
  var prispevky = _ref.prispevky,
    pridejPrispevek = _ref.pridejPrispevek,
    smazPrispevek = _ref.smazPrispevek,
    pridejOperaci = _ref.pridejOperaci,
    smazOperaci = _ref.smazOperaci;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Den\xEDk"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormularAkcie__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onSubmitForm: pridejPrispevek
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "list"
  }, prispevky.map(function (prispevek, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      text: prispevek,
      onDelete: function onDelete() {
        return smazPrispevek(index);
      },
      onAddOperace: pridejOperaci,
      onDeleteOperace: smazOperaci
    });
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Denik);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("273f72d82decf59530c9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wNjhlMDkyNTk2YTEzZjRmMGQxZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzhCO0FBQ0U7QUFFMUQsU0FBU0csS0FBS0EsQ0FBQUMsSUFBQSxFQU1YO0VBQUEsSUFMREMsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFDVEMsZUFBZSxHQUFBRixJQUFBLENBQWZFLGVBQWU7SUFDZkMsYUFBYSxHQUFBSCxJQUFBLENBQWJHLGFBQWE7SUFDYkMsYUFBYSxHQUFBSixJQUFBLENBQWJJLGFBQWE7SUFDYkMsV0FBVyxHQUFBTCxJQUFBLENBQVhLLFdBQVc7RUFFWCxvQkFDRVQsMERBQUEsMkJBQ0VBLDBEQUFBLGFBQUksVUFBUyxDQUFDLGVBQ2RBLDBEQUFBLENBQUNDLGlFQUFhO0lBQUNVLFlBQVksRUFBRUw7RUFBZ0IsQ0FBRSxDQUFDLGVBQ2hETiwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBTSxHQUNsQlAsU0FBUyxDQUFDUSxHQUFHLENBQUMsVUFBQ0MsU0FBUyxFQUFFQyxLQUFLO0lBQUEsb0JBQzlCZiwwREFBQSxDQUFDRSxrRUFBYztNQUNiYyxHQUFHLEVBQUVELEtBQU07TUFDWEUsSUFBSSxFQUFFSCxTQUFVO01BQ2hCSSxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBQTtRQUFBLE9BQVFYLGFBQWEsQ0FBQ1EsS0FBSyxDQUFDO01BQUEsQ0FBQztNQUNyQ0ksWUFBWSxFQUFFWCxhQUFjO01BQzVCWSxlQUFlLEVBQUVYO0lBQVksQ0FDOUIsQ0FBQztFQUFBLENBQ0gsQ0FDRSxDQUNGLENBQUM7QUFFVjtBQUVBLGlFQUFlTixLQUFLOzs7Ozs7OztVQzlCcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL3BhZ2VzL0RlbmlrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm11bGFyQWtjaWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybXVsYXJBa2NpZVwiO1xuaW1wb3J0IFByaXNwZXZla0FrY2llIGZyb20gXCIuLi9jb21wb25lbnRzL1ByaXNwZXZla0FrY2llXCI7XG5cbmZ1bmN0aW9uIERlbmlrKHtcbiAgcHJpc3Bldmt5LFxuICBwcmlkZWpQcmlzcGV2ZWssXG4gIHNtYXpQcmlzcGV2ZWssXG4gIHByaWRlak9wZXJhY2ksXG4gIHNtYXpPcGVyYWNpLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+RGVuw61rPC9oMj5cbiAgICAgIDxGb3JtdWxhckFrY2llIG9uU3VibWl0Rm9ybT17cHJpZGVqUHJpc3BldmVrfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgIHtwcmlzcGV2a3kubWFwKChwcmlzcGV2ZWssIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFByaXNwZXZla0FrY2llXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgdGV4dD17cHJpc3BldmVrfVxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IHNtYXpQcmlzcGV2ZWsoaW5kZXgpfVxuICAgICAgICAgICAgb25BZGRPcGVyYWNlPXtwcmlkZWpPcGVyYWNpfVxuICAgICAgICAgICAgb25EZWxldGVPcGVyYWNlPXtzbWF6T3BlcmFjaX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZW5paztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI3M2Y3MmQ4MmRlY2Y1OTUzMGM5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybXVsYXJBa2NpZSIsIlByaXNwZXZla0FrY2llIiwiRGVuaWsiLCJfcmVmIiwicHJpc3Bldmt5IiwicHJpZGVqUHJpc3BldmVrIiwic21helByaXNwZXZlayIsInByaWRlak9wZXJhY2kiLCJzbWF6T3BlcmFjaSIsImNyZWF0ZUVsZW1lbnQiLCJvblN1Ym1pdEZvcm0iLCJjbGFzc05hbWUiLCJtYXAiLCJwcmlzcGV2ZWsiLCJpbmRleCIsImtleSIsInRleHQiLCJvbkRlbGV0ZSIsIm9uQWRkT3BlcmFjZSIsIm9uRGVsZXRlT3BlcmFjZSJdLCJzb3VyY2VSb290IjoiIn0=