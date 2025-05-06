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
  // useEffect(() => {
  //   // mount komponentu
  //   console.log("Prispevek začal cestu");

  //   // unmount komponentu
  //   return () => {
  //     alert("Prispevěk se vymaže");
  //     console.log("prispevek zanikl");
  //   };
  // }, []);

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
/******/ 	__webpack_require__.h = () => ("a1ed315a4917071f1878")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jNTFkOGE5NzIyODFhZDEzMDc1Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDYjtBQUV0QyxTQUFTSSxjQUFjQSxDQUFBQyxJQUFBLEVBTXBCO0VBQUEsSUFMREMsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFDVEMsY0FBYyxHQUFBRixJQUFBLENBQWRFLGNBQWM7SUFDZEMsUUFBUSxHQUFBSCxJQUFBLENBQVJHLFFBQVE7SUFDUkMsWUFBWSxHQUFBSixJQUFBLENBQVpJLFlBQVk7SUFDWkMsZUFBZSxHQUFBTCxJQUFBLENBQWZLLGVBQWU7RUFFZjs7RUFFQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQSxvQkFDRVYsMERBQUE7SUFBS1ksU0FBUyxFQUFDO0VBQVUsZ0JBQ3ZCWiwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBK0QsZ0JBQzVFWiwwREFBQSxhQUFLTSxTQUFTLENBQUNPLE1BQVcsQ0FBQyxlQUMzQmIsMERBQUE7SUFBUVksU0FBUyxFQUFDLHVCQUF1QjtJQUFDRSxPQUFPLEVBQUVOO0VBQVMsR0FBQyxlQUVyRCxDQUNMLENBQUMsZUFDTlIsMERBQUE7SUFBS1ksU0FBUyxFQUFDO0VBQVcsZ0JBQ3hCWiwwREFBQSxDQUFDRyxtREFBVTtJQUNUWSxPQUFPLEVBQUVULFNBQVMsQ0FBQ1MsT0FBUTtJQUMzQlIsY0FBYyxFQUFFQSxjQUFlO0lBQy9CRSxZQUFZLEVBQUVBLFlBQWE7SUFDM0JDLGVBQWUsRUFBRUE7RUFBZ0IsQ0FDbEMsQ0FDRSxDQUNGLENBQUM7QUFFVjtBQUVBLGlFQUFlTixjQUFjOzs7Ozs7OztVQy9DN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2NvbXBvbmVudHMvUHJpc3BldmVrQWtjaWUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE9wZXJhdGlvbnMgZnJvbSBcIi4vT3BlcmF0aW9uc1wiO1xuXG5mdW5jdGlvbiBQcmlzcGV2ZWtBa2NpZSh7XG4gIHByaXNwZXZlayxcbiAgaW5kZXhQcmlzcGV2a3UsXG4gIG9uRGVsZXRlLFxuICBvbkFkZE9wZXJhY2UsXG4gIG9uRGVsZXRlT3BlcmFjZSxcbn0pIHtcbiAgLy8gdGFkeSBidWR1IG3DrXQgcHLDoXpkbsO9IHBvbGUgYWthIFtdIGEgc2VtIGJ1ZHUgcHVzaG92YXQgcG8ga2xpa251dMOtIG5hIHphZMOhbsOtIGFrY2llLCB6YWTDoW7DrSBwxZnDrXNwxJt2xJtrdSwgc2VtIHRvIHBvdMWZZWJ1anUgb2Rlc2xhdCBhIHRvIHNlIHBhayBvZGXFoWxlIGRvIGFwcC5qcyBjZWzDoSB0YXRvIGZ1bmtjZSAtLS0gTkEgS09NVU5JS0FDSSBNRVpJIEtPTVBPTkVOVEFNSSBQT1XFvcONVsOBTSBgUFJPUFNgIC0gUFJPUFMgIG5lbXVzw61tIHBvdcWZw612YXQgamVuIGpha28gYXRyaWJ1dHkgdMSbY2ggaHRtbCB6bmHEjWVrLCBhbGUgbcWvxb51IGplIHBvdcW+w610IGkgdmUgZnVua2PDrWNoXG5cbiAgLy8gS8OzZCBwcm8gcMWZaWTDoW7DrSBqZWRub3RsaXbDqSBvcGVyYWNlIE7DoWt1cC9Qcm9kZWogcHJvIGFrY2lpXG5cbiAgLy8gMS4gcGFyYW1ldHIgLSBjYWxsYmFja1xuICAvLyAyLiBwYXJhbXRlciAtIGRlcGVuZGVuY2llcyAtIHrDoXZpc2xvc3RpXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgLy8gbW91bnQga29tcG9uZW50dVxuICAvLyAgIGNvbnNvbGUubG9nKFwiUHJpc3BldmVrIHphxI1hbCBjZXN0dVwiKTtcblxuICAvLyAgIC8vIHVubW91bnQga29tcG9uZW50dVxuICAvLyAgIHJldHVybiAoKSA9PiB7XG4gIC8vICAgICBhbGVydChcIlByaXNwZXbEm2sgc2UgdnltYcW+ZVwiKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwicHJpc3BldmVrIHphbmlrbFwiKTtcbiAgLy8gICB9O1xuICAvLyB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbS0zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGg1PntwcmlzcGV2ZWsudGlja2VyfTwvaDU+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIgb25DbGljaz17b25EZWxldGV9PlxuICAgICAgICAgIFZ5bWF6YXQgYWtjaWlcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxPcGVyYXRpb25zXG4gICAgICAgICAgb3BlcmFjZT17cHJpc3BldmVrLm9wZXJhY2V9XG4gICAgICAgICAgaW5kZXhQcmlzcGV2a3U9e2luZGV4UHJpc3Bldmt1fVxuICAgICAgICAgIG9uQWRkT3BlcmFjZT17b25BZGRPcGVyYWNlfVxuICAgICAgICAgIG9uRGVsZXRlT3BlcmFjZT17b25EZWxldGVPcGVyYWNlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaXNwZXZla0FrY2llO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTFlZDMxNWE0OTE3MDcxZjE4NzhcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk9wZXJhdGlvbnMiLCJQcmlzcGV2ZWtBa2NpZSIsIl9yZWYiLCJwcmlzcGV2ZWsiLCJpbmRleFByaXNwZXZrdSIsIm9uRGVsZXRlIiwib25BZGRPcGVyYWNlIiwib25EZWxldGVPcGVyYWNlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpY2tlciIsIm9uQ2xpY2siLCJvcGVyYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==