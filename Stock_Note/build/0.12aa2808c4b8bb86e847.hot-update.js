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
    className: "card-body"
  }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Operations__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "action-btn action-delete",
    onClick: onDelete
  }, "Vymazat akcii")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrispevekAkcie);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c10d242f9738a54d68b4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMmFhMjgwOGM0YjhiYjg2ZTg0Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDYjtBQUV0QyxTQUFTSSxjQUFjQSxDQUFBQyxJQUFBLEVBQXFCO0VBQUEsSUFBbEJDLElBQUksR0FBQUQsSUFBQSxDQUFKQyxJQUFJO0lBQUVDLFFBQVEsR0FBQUYsSUFBQSxDQUFSRSxRQUFRO0VBQ3RDOztFQUVBOztFQUVBO0VBQ0E7RUFDQUwsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2Q7SUFDQU0sT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7O0lBRXBDO0lBQ0EsT0FBTyxZQUFNO01BQ1hDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztNQUM1QkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztFQUNILENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDRVQsMERBQUE7SUFBS1ksU0FBUyxFQUFDO0VBQVUsZ0JBQ3ZCWiwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBVyxHQUFFTixJQUFVLENBQUMsZUFDdkNOLDBEQUFBO0lBQUtZLFNBQVMsRUFBQztFQUFhLGdCQUMxQlosMERBQUEsQ0FBQ0csbURBQVUsTUFBRSxDQUFDLGVBQ2RILDBEQUFBO0lBQVFZLFNBQVMsRUFBQywwQkFBMEI7SUFBQ0MsT0FBTyxFQUFFTjtFQUFTLEdBQUMsZUFFeEQsQ0FDTCxDQUNGLENBQUM7QUFFVjtBQUVBLGlFQUFlSCxjQUFjOzs7Ozs7OztVQ2xDN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2NvbXBvbmVudHMvUHJpc3BldmVrQWtjaWUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE9wZXJhdGlvbnMgZnJvbSBcIi4vT3BlcmF0aW9uc1wiO1xuXG5mdW5jdGlvbiBQcmlzcGV2ZWtBa2NpZSh7IHRleHQsIG9uRGVsZXRlIH0pIHtcbiAgLy8gdGFkeSBidWR1IG3DrXQgcHLDoXpkbsO9IHBvbGUgYWthIFtdIGEgc2VtIGJ1ZHUgcHVzaG92YXQgcG8ga2xpa251dMOtIG5hIHphZMOhbsOtIGFrY2llLCB6YWTDoW7DrSBwxZnDrXNwxJt2xJtrdSwgc2VtIHRvIHBvdMWZZWJ1anUgb2Rlc2xhdCBhIHRvIHNlIHBhayBvZGXFoWxlIGRvIGFwcC5qcyBjZWzDoSB0YXRvIGZ1bmtjZSAtLS0gTkEgS09NVU5JS0FDSSBNRVpJIEtPTVBPTkVOVEFNSSBQT1XFvcONVsOBTSBgUFJPUFNgIC0gUFJPUFMgIG5lbXVzw61tIHBvdcWZw612YXQgamVuIGpha28gYXRyaWJ1dHkgdMSbY2ggaHRtbCB6bmHEjWVrLCBhbGUgbcWvxb51IGplIHBvdcW+w610IGkgdmUgZnVua2PDrWNoXG5cbiAgLy8gS8OzZCBwcm8gcMWZaWTDoW7DrSBqZWRub3RsaXbDqSBvcGVyYWNlIE7DoWt1cC9Qcm9kZWogcHJvIGFrY2lpXG5cbiAgLy8gMS4gcGFyYW1ldHIgLSBjYWxsYmFja1xuICAvLyAyLiBwYXJhbXRlciAtIGRlcGVuZGVuY2llcyAtIHrDoXZpc2xvc3RpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gbW91bnQga29tcG9uZW50dVxuICAgIGNvbnNvbGUubG9nKFwiUHJpc3BldmVrIHphxI1hbCBjZXN0dVwiKTtcblxuICAgIC8vIHVubW91bnQga29tcG9uZW50dVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBhbGVydChcIlByaXNwZXbEm2sgc2UgdnltYcW+ZVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicHJpc3BldmVrIHphbmlrbFwiKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbS0zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPnt0ZXh0fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICA8T3BlcmF0aW9ucyAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjdGlvbi1idG4gYWN0aW9uLWRlbGV0ZVwiIG9uQ2xpY2s9e29uRGVsZXRlfT5cbiAgICAgICAgICBWeW1hemF0IGFrY2lpXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaXNwZXZla0FrY2llO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzEwZDI0MmY5NzM4YTU0ZDY4YjRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk9wZXJhdGlvbnMiLCJQcmlzcGV2ZWtBa2NpZSIsIl9yZWYiLCJ0ZXh0Iiwib25EZWxldGUiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=