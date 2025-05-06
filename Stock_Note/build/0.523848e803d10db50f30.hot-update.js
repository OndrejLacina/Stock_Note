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
      prispevek: prispevek,
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
/******/ 	__webpack_require__.h = () => ("ffa63d18a8471209b373")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MjM4NDhlODAzZDEwZGI1MGYzMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzhCO0FBQ0U7QUFFMUQsU0FBU0csS0FBS0EsQ0FBQUMsSUFBQSxFQU1YO0VBQUEsSUFMREMsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFDVEMsZUFBZSxHQUFBRixJQUFBLENBQWZFLGVBQWU7SUFDZkMsYUFBYSxHQUFBSCxJQUFBLENBQWJHLGFBQWE7SUFDYkMsYUFBYSxHQUFBSixJQUFBLENBQWJJLGFBQWE7SUFDYkMsV0FBVyxHQUFBTCxJQUFBLENBQVhLLFdBQVc7RUFFWCxvQkFDRVQsMERBQUEsMkJBQ0VBLDBEQUFBLGFBQUksVUFBUyxDQUFDLGVBQ2RBLDBEQUFBLENBQUNDLGlFQUFhO0lBQUNVLFlBQVksRUFBRUw7RUFBZ0IsQ0FBRSxDQUFDLGVBQ2hETiwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBTSxHQUNsQlAsU0FBUyxDQUFDUSxHQUFHLENBQUMsVUFBQ0MsU0FBUyxFQUFFQyxLQUFLO0lBQUEsb0JBQzlCZiwwREFBQSxDQUFDRSxrRUFBYztNQUNiYyxHQUFHLEVBQUVELEtBQU07TUFDWEQsU0FBUyxFQUFFQSxTQUFVO01BQ3JCRyxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBQTtRQUFBLE9BQVFWLGFBQWEsQ0FBQ1EsS0FBSyxDQUFDO01BQUEsQ0FBQztNQUNyQ0csWUFBWSxFQUFFVixhQUFjO01BQzVCVyxlQUFlLEVBQUVWO0lBQVksQ0FDOUIsQ0FBQztFQUFBLENBQ0gsQ0FDRSxDQUNGLENBQUM7QUFFVjtBQUVBLGlFQUFlTixLQUFLOzs7Ozs7OztVQzlCcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL3BhZ2VzL0RlbmlrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm11bGFyQWtjaWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybXVsYXJBa2NpZVwiO1xuaW1wb3J0IFByaXNwZXZla0FrY2llIGZyb20gXCIuLi9jb21wb25lbnRzL1ByaXNwZXZla0FrY2llXCI7XG5cbmZ1bmN0aW9uIERlbmlrKHtcbiAgcHJpc3Bldmt5LFxuICBwcmlkZWpQcmlzcGV2ZWssXG4gIHNtYXpQcmlzcGV2ZWssXG4gIHByaWRlak9wZXJhY2ksXG4gIHNtYXpPcGVyYWNpLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+RGVuw61rPC9oMj5cbiAgICAgIDxGb3JtdWxhckFrY2llIG9uU3VibWl0Rm9ybT17cHJpZGVqUHJpc3BldmVrfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgIHtwcmlzcGV2a3kubWFwKChwcmlzcGV2ZWssIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFByaXNwZXZla0FrY2llXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgcHJpc3BldmVrPXtwcmlzcGV2ZWt9XG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gc21helByaXNwZXZlayhpbmRleCl9XG4gICAgICAgICAgICBvbkFkZE9wZXJhY2U9e3ByaWRlak9wZXJhY2l9XG4gICAgICAgICAgICBvbkRlbGV0ZU9wZXJhY2U9e3NtYXpPcGVyYWNpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlbmlrO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmZhNjNkMThhODQ3MTIwOWIzNzNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtdWxhckFrY2llIiwiUHJpc3BldmVrQWtjaWUiLCJEZW5payIsIl9yZWYiLCJwcmlzcGV2a3kiLCJwcmlkZWpQcmlzcGV2ZWsiLCJzbWF6UHJpc3BldmVrIiwicHJpZGVqT3BlcmFjaSIsInNtYXpPcGVyYWNpIiwiY3JlYXRlRWxlbWVudCIsIm9uU3VibWl0Rm9ybSIsImNsYXNzTmFtZSIsIm1hcCIsInByaXNwZXZlayIsImluZGV4Iiwia2V5Iiwib25EZWxldGUiLCJvbkFkZE9wZXJhY2UiLCJvbkRlbGV0ZU9wZXJhY2UiXSwic291cmNlUm9vdCI6IiJ9