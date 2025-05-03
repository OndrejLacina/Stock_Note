"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputVeFormulari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _ButtonPridatAkcii__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



function FormularAkcie() {
  // jdu ukládat zprávu, která bude text, takže tu zprávu chci mít uloženou v nějaké hodnotě, hodnota v tom STATU je "zprava" (mohlo by to být spíš "ticker nebo stock nebo akcie", že?), "setZprava" je manažer té hodnoty "zprava" a ted už jen inicializační hodnota v useState () a dám tam prázdný textový řetězec
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    zprava = _useState2[0],
    setZprava = _useState2[1];
  function napisSpravu(textSpravy) {
    setZprava(textSpravy);
  }
  function odesliSpravu() {
    console.log("zprava odeslaná");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "input-area",
    onSubmit: odesliSpravu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputVeFormulari__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChangeText: napisSpravu
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ButtonPridatAkcii__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormularAkcie);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9c08b713a39129a03274")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kOTExZWQ3ZTQ4ZDE2ODRjYmZiOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1U7QUFDRTtBQUVwRCxTQUFTSSxhQUFhQSxDQUFBLEVBQUc7RUFDdkI7RUFDQSxJQUFBQyxTQUFBLEdBQTRCSiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBSyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFqQ0csTUFBTSxHQUFBRixVQUFBO0lBQUVHLFNBQVMsR0FBQUgsVUFBQTtFQUV4QixTQUFTSSxXQUFXQSxDQUFDQyxVQUFVLEVBQUU7SUFDL0JGLFNBQVMsQ0FBQ0UsVUFBVSxDQUFDO0VBQ3ZCO0VBRUEsU0FBU0MsWUFBWUEsQ0FBQSxFQUFHO0lBQ3RCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztFQUNoQztFQUVBLG9CQUNFZCwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUE7SUFBTWlCLFNBQVMsRUFBQyxZQUFZO0lBQUNDLFFBQVEsRUFBRU47RUFBYSxnQkFDbERaLDBEQUFBLENBQUNFLHlEQUFnQjtJQUFDaUIsWUFBWSxFQUFFVDtFQUFZLENBQUUsQ0FBQyxFQUFDLEdBRTVDLENBQUMsZUFDUFYsMERBQUEsMkJBQ0VBLDBEQUFBLENBQUNHLDBEQUFpQixNQUFFLENBQ2pCLENBQ0wsQ0FBQztBQUVQO0FBRUEsaUVBQWVDLGFBQWE7Ozs7Ozs7O1VDN0I1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9Gb3JtdWxhckFrY2llLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXRWZUZvcm11bGFyaSBmcm9tIFwiLi9JbnB1dFZlRm9ybXVsYXJpXCI7XG5pbXBvcnQgQnV0dG9uUHJpZGF0QWtjaWkgZnJvbSBcIi4vQnV0dG9uUHJpZGF0QWtjaWlcIjtcblxuZnVuY3Rpb24gRm9ybXVsYXJBa2NpZSgpIHtcbiAgLy8gamR1IHVrbMOhZGF0IHpwcsOhdnUsIGt0ZXLDoSBidWRlIHRleHQsIHRha8W+ZSB0dSB6cHLDoXZ1IGNoY2kgbcOtdCB1bG/FvmVub3UgdiBuxJtqYWvDqSBob2Rub3TEmywgaG9kbm90YSB2IHRvbSBTVEFUVSBqZSBcInpwcmF2YVwiIChtb2hsbyBieSB0byBiw710IHNww63FoSBcInRpY2tlciBuZWJvIHN0b2NrIG5lYm8gYWtjaWVcIiwgxb5lPyksIFwic2V0WnByYXZhXCIgamUgbWFuYcW+ZXIgdMOpIGhvZG5vdHkgXCJ6cHJhdmFcIiBhIHRlZCB1xb4gamVuIGluaWNpYWxpemHEjW7DrSBob2Rub3RhIHYgdXNlU3RhdGUgKCkgYSBkw6FtIHRhbSBwcsOhemRuw70gdGV4dG92w70gxZlldMSbemVjXG4gIGNvbnN0IFt6cHJhdmEsIHNldFpwcmF2YV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBmdW5jdGlvbiBuYXBpc1NwcmF2dSh0ZXh0U3ByYXZ5KSB7XG4gICAgc2V0WnByYXZhKHRleHRTcHJhdnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gb2Rlc2xpU3ByYXZ1KCkge1xuICAgIGNvbnNvbGUubG9nKFwienByYXZhIG9kZXNsYW7DoVwiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImlucHV0LWFyZWFcIiBvblN1Ym1pdD17b2Rlc2xpU3ByYXZ1fT5cbiAgICAgICAgPElucHV0VmVGb3JtdWxhcmkgb25DaGFuZ2VUZXh0PXtuYXBpc1NwcmF2dX0gLz57XCIgXCJ9XG4gICAgICAgIHsvKiBuYXBpc1NwcmF2dSBqZSBmdW5rY2UsIGt0ZXJvdSBzaSB0dm/FmcOtbSB2w73FoWUsIHBybyB0ZW50byBGb3JtdWzDocWZIGtvbXBvbmVudCAqL31cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxCdXR0b25QcmlkYXRBa2NpaSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm11bGFyQWtjaWU7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5YzA4YjcxM2EzOTEyOWEwMzI3NFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW5wdXRWZUZvcm11bGFyaSIsIkJ1dHRvblByaWRhdEFrY2lpIiwiRm9ybXVsYXJBa2NpZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInpwcmF2YSIsInNldFpwcmF2YSIsIm5hcGlzU3ByYXZ1IiwidGV4dFNwcmF2eSIsIm9kZXNsaVNwcmF2dSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsIm9uQ2hhbmdlVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=