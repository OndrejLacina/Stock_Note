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



function FormularAkcie(_ref) {
  var onSubmitForm = _ref.onSubmitForm;
  // jdu ukládat zprávu, která bude text, takže tu zprávu chci mít uloženou v nějaké hodnotě, hodnota v tom STATU je "zprava" (mohlo by to být spíš "ticker nebo stock nebo akcie", že?), "setZprava" je manažer té hodnoty "zprava" a ted už jen inicializační hodnota v useState () a dám tam prázdný textový řetězec
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    zprava = _useState2[0],
    setZprava = _useState2[1];
  function napisSpravu(textSpravy) {
    setZprava(textSpravy);
  }

  // jestli to nepůjde, tak v čase 1:45h se řeší console
  function odesliSpravu(event) {
    console.log("zprava odeslaná");
    onSubmitForm(zprava);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "input-area",
    onSubmit: function onSubmit(event) {
      return odesliSpravu(event);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputVeFormulari__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChangeText: napisSpravu
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ButtonPridatAkcii__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormularAkcie);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4081aba7aa79a2d5b069")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jZTUyNzRiYjZkNmE5ODk3ZjAwYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1U7QUFDRTtBQUVwRCxTQUFTSSxhQUFhQSxDQUFBQyxJQUFBLEVBQW1CO0VBQUEsSUFBaEJDLFlBQVksR0FBQUQsSUFBQSxDQUFaQyxZQUFZO0VBQ25DO0VBQ0EsSUFBQUMsU0FBQSxHQUE0Qk4sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQU8sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBakNHLE1BQU0sR0FBQUYsVUFBQTtJQUFFRyxTQUFTLEdBQUFILFVBQUE7RUFFeEIsU0FBU0ksV0FBV0EsQ0FBQ0MsVUFBVSxFQUFFO0lBQy9CRixTQUFTLENBQUNFLFVBQVUsQ0FBQztFQUN2Qjs7RUFFQTtFQUNBLFNBQVNDLFlBQVlBLENBQUNDLEtBQUssRUFBRTtJQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDOUJYLFlBQVksQ0FBQ0ksTUFBTSxDQUFDO0VBQ3RCO0VBRUEsb0JBQ0VWLDBEQUFBLENBQUFBLHVEQUFBLHFCQUVFQSwwREFBQTtJQUFNb0IsU0FBUyxFQUFDLFlBQVk7SUFBQ0MsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUdOLEtBQUs7TUFBQSxPQUFLRCxZQUFZLENBQUNDLEtBQUssQ0FBQztJQUFBO0VBQUMsZ0JBRXBFZiwwREFBQSxDQUFDRSx5REFBZ0I7SUFBQ29CLFlBQVksRUFBRVY7RUFBWSxDQUFFLENBQUMsRUFBQyxHQUFHLGVBRW5EWiwwREFBQSxDQUFDRywwREFBaUIsTUFBRSxDQUNoQixDQUFDLGVBQ1BILDBEQUFBLFlBQVUsQ0FDVixDQUFDO0FBRVA7QUFFQSxpRUFBZUksYUFBYTs7Ozs7Ozs7VUNoQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9jb21wb25lbnRzL0Zvcm11bGFyQWtjaWUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbnB1dFZlRm9ybXVsYXJpIGZyb20gXCIuL0lucHV0VmVGb3JtdWxhcmlcIjtcbmltcG9ydCBCdXR0b25QcmlkYXRBa2NpaSBmcm9tIFwiLi9CdXR0b25QcmlkYXRBa2NpaVwiO1xuXG5mdW5jdGlvbiBGb3JtdWxhckFrY2llKHsgb25TdWJtaXRGb3JtIH0pIHtcbiAgLy8gamR1IHVrbMOhZGF0IHpwcsOhdnUsIGt0ZXLDoSBidWRlIHRleHQsIHRha8W+ZSB0dSB6cHLDoXZ1IGNoY2kgbcOtdCB1bG/FvmVub3UgdiBuxJtqYWvDqSBob2Rub3TEmywgaG9kbm90YSB2IHRvbSBTVEFUVSBqZSBcInpwcmF2YVwiIChtb2hsbyBieSB0byBiw710IHNww63FoSBcInRpY2tlciBuZWJvIHN0b2NrIG5lYm8gYWtjaWVcIiwgxb5lPyksIFwic2V0WnByYXZhXCIgamUgbWFuYcW+ZXIgdMOpIGhvZG5vdHkgXCJ6cHJhdmFcIiBhIHRlZCB1xb4gamVuIGluaWNpYWxpemHEjW7DrSBob2Rub3RhIHYgdXNlU3RhdGUgKCkgYSBkw6FtIHRhbSBwcsOhemRuw70gdGV4dG92w70gxZlldMSbemVjXG4gIGNvbnN0IFt6cHJhdmEsIHNldFpwcmF2YV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBmdW5jdGlvbiBuYXBpc1NwcmF2dSh0ZXh0U3ByYXZ5KSB7XG4gICAgc2V0WnByYXZhKHRleHRTcHJhdnkpO1xuICB9XG5cbiAgLy8gamVzdGxpIHRvIG5lcMWvamRlLCB0YWsgdiDEjWFzZSAxOjQ1aCBzZSDFmWXFocOtIGNvbnNvbGVcbiAgZnVuY3Rpb24gb2Rlc2xpU3ByYXZ1KGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJ6cHJhdmEgb2Rlc2xhbsOhXCIpO1xuICAgIG9uU3VibWl0Rm9ybSh6cHJhdmEpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIG5hIHBvdHZyemVuw60gdG9ob3RvIGZvcm11bMOhxZllIGFrYSBcImV2ZW50IHXFvml2YXRlbGVcIiBha2EgXCJrbGlrbnV0w60gbmEgXCJvZGVzbGlTcHJhdnVcIiBha2EgXCJvblN1Ym1pdFwiIHNlIHZ5a29uw6EgdsWhZSwgY28gamUgdmUgZnVua2NpIG9kZXNsaVNwcmF2dSAocmVzcGVrdGl2ZSB2bG/FvmVuw60gYWtjaWUgLT4gdnl0dm/FmWVuw60gbm92w6lobyBrb21wb25lbnR1LCBrZGUgcGFrIGJ1ZHUgZMOhdmF0IHRyYW5zYWtjZSBha2Npw60gPT4gVE8tRE8/PykgKi99XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJpbnB1dC1hcmVhXCIgb25TdWJtaXQ9eyhldmVudCkgPT4gb2Rlc2xpU3ByYXZ1KGV2ZW50KX0+XG4gICAgICAgIHsvKiBuYXBpc1NwcmF2dSBqZSBmdW5rY2UsIGt0ZXJvdSBzaSB0dm/FmcOtbSB2w73FoWUsIHBybyB0ZW50byBGb3JtdWzDocWZIGtvbXBvbmVudCAqL31cbiAgICAgICAgPElucHV0VmVGb3JtdWxhcmkgb25DaGFuZ2VUZXh0PXtuYXBpc1NwcmF2dX0gLz57XCIgXCJ9XG4gICAgICAgIHsvKiBuZWZ1bmdvdmFsbyBtaSB6ZGUgemFjaHl0w6F2w6Fuw60genByw6F2eSwgxb5lIGJ5bGEgb2Rlc2xhbsOhIFwib2Rvc2xpU3ByYXZ1XCIsIHByb3Rvxb5lIEJ1dHRvblByaWRhdEFrY2lpIGJ5bCB2IGRpdnUgcG9kIC0gYnVkIHRvIG5hc3R5bG92YXQsIGHFpSBqZSB0byBqYWtvYnkgbWltbyBwxZnDrXNwxJt2ZWsgbmVibyB0byBuYXByb2dyYW1vdmF0LCBhYnkgdG8gYnlsbyB2ZWRsZSB2IGRpdnUsIGFsZSBkxJtsYWxvIHRvIHN0ZWpuw70gKi99XG4gICAgICAgIDxCdXR0b25QcmlkYXRBa2NpaSAvPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybXVsYXJBa2NpZTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQwODFhYmE3YWE3OWEyZDViMDY5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbnB1dFZlRm9ybXVsYXJpIiwiQnV0dG9uUHJpZGF0QWtjaWkiLCJGb3JtdWxhckFrY2llIiwiX3JlZiIsIm9uU3VibWl0Rm9ybSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInpwcmF2YSIsInNldFpwcmF2YSIsIm5hcGlzU3ByYXZ1IiwidGV4dFNwcmF2eSIsIm9kZXNsaVNwcmF2dSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0Iiwib25DaGFuZ2VUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==