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
      indexPrispevku: index,
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
/******/ 	__webpack_require__.h = () => ("f534a673906c99bb429b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mNTRlZjk1YzMzYWI0YjVhYmU0Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzhCO0FBQ0U7QUFFMUQsU0FBU0csS0FBS0EsQ0FBQUMsSUFBQSxFQU1YO0VBQUEsSUFMREMsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFDVEMsZUFBZSxHQUFBRixJQUFBLENBQWZFLGVBQWU7SUFDZkMsYUFBYSxHQUFBSCxJQUFBLENBQWJHLGFBQWE7SUFDYkMsYUFBYSxHQUFBSixJQUFBLENBQWJJLGFBQWE7SUFDYkMsV0FBVyxHQUFBTCxJQUFBLENBQVhLLFdBQVc7RUFFWCxvQkFDRVQsMERBQUEsMkJBQ0VBLDBEQUFBLGFBQUksVUFBUyxDQUFDLGVBQ2RBLDBEQUFBLENBQUNDLGlFQUFhO0lBQUNVLFlBQVksRUFBRUw7RUFBZ0IsQ0FBRSxDQUFDLGVBQ2hETiwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBTSxHQUNsQlAsU0FBUyxDQUFDUSxHQUFHLENBQUMsVUFBQ0MsU0FBUyxFQUFFQyxLQUFLO0lBQUEsb0JBQzlCZiwwREFBQSxDQUFDRSxrRUFBYztNQUNiYyxHQUFHLEVBQUVELEtBQU07TUFDWEQsU0FBUyxFQUFFQSxTQUFVO01BQ3JCRyxjQUFjLEVBQUVGLEtBQU07TUFDdEJHLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFBO1FBQUEsT0FBUVgsYUFBYSxDQUFDUSxLQUFLLENBQUM7TUFBQSxDQUFDO01BQ3JDSSxZQUFZLEVBQUVYLGFBQWM7TUFDNUJZLGVBQWUsRUFBRVg7SUFBWSxDQUM5QixDQUFDO0VBQUEsQ0FDSCxDQUNFLENBQ0YsQ0FBQztBQUVWO0FBRUEsaUVBQWVOLEtBQUs7Ozs7Ozs7O1VDL0JwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvcGFnZXMvRGVuaWsuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybXVsYXJBa2NpZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtdWxhckFrY2llXCI7XG5pbXBvcnQgUHJpc3BldmVrQWtjaWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJpc3BldmVrQWtjaWVcIjtcblxuZnVuY3Rpb24gRGVuaWsoe1xuICBwcmlzcGV2a3ksXG4gIHByaWRlalByaXNwZXZlayxcbiAgc21helByaXNwZXZlayxcbiAgcHJpZGVqT3BlcmFjaSxcbiAgc21hek9wZXJhY2ksXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5EZW7DrWs8L2gyPlxuICAgICAgPEZvcm11bGFyQWtjaWUgb25TdWJtaXRGb3JtPXtwcmlkZWpQcmlzcGV2ZWt9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAge3ByaXNwZXZreS5tYXAoKHByaXNwZXZlaywgaW5kZXgpID0+IChcbiAgICAgICAgICA8UHJpc3BldmVrQWtjaWVcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBwcmlzcGV2ZWs9e3ByaXNwZXZla31cbiAgICAgICAgICAgIGluZGV4UHJpc3Bldmt1PXtpbmRleH1cbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBzbWF6UHJpc3BldmVrKGluZGV4KX1cbiAgICAgICAgICAgIG9uQWRkT3BlcmFjZT17cHJpZGVqT3BlcmFjaX1cbiAgICAgICAgICAgIG9uRGVsZXRlT3BlcmFjZT17c21hek9wZXJhY2l9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVuaWs7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmNTM0YTY3MzkwNmM5OWJiNDI5YlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm11bGFyQWtjaWUiLCJQcmlzcGV2ZWtBa2NpZSIsIkRlbmlrIiwiX3JlZiIsInByaXNwZXZreSIsInByaWRlalByaXNwZXZlayIsInNtYXpQcmlzcGV2ZWsiLCJwcmlkZWpPcGVyYWNpIiwic21hek9wZXJhY2kiLCJjcmVhdGVFbGVtZW50Iiwib25TdWJtaXRGb3JtIiwiY2xhc3NOYW1lIiwibWFwIiwicHJpc3BldmVrIiwiaW5kZXgiLCJrZXkiLCJpbmRleFByaXNwZXZrdSIsIm9uRGVsZXRlIiwib25BZGRPcGVyYWNlIiwib25EZWxldGVPcGVyYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==