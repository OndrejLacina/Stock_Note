"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputVeFormulari__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _ButtonPridatAkcii__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
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
  function napisZpravu(textZpravy) {
    setZprava(textZpravy);
  }

  // jestli to nepůjde, tak v čase 1:45h se řeší console
  // Potvrzuju formulář
  function odesliZpravu(event) {
    event.preventDefault();
    console.log("zprava odeslaná");
    onSubmitForm(zprava);
    setZprava("");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "input-area",
    onSubmit: function onSubmit(event) {
      return odesliZpravu(event);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputVeFormulari__WEBPACK_IMPORTED_MODULE_1__["default"], {
    valueProp: zprava,
    onChangeText: napisZpravu
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ButtonPridatAkcii__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormularAkcie);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0e44a5407c731695221f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wOGI0Y2UyZTgyYTE5MDAzNjI0YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1U7QUFDRTtBQUVwRCxTQUFTSSxhQUFhQSxDQUFBQyxJQUFBLEVBQW1CO0VBQUEsSUFBaEJDLFlBQVksR0FBQUQsSUFBQSxDQUFaQyxZQUFZO0VBQ25DO0VBQ0EsSUFBQUMsU0FBQSxHQUE0Qk4sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQU8sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBakNHLE1BQU0sR0FBQUYsVUFBQTtJQUFFRyxTQUFTLEdBQUFILFVBQUE7RUFFeEIsU0FBU0ksV0FBV0EsQ0FBQ0MsVUFBVSxFQUFFO0lBQy9CRixTQUFTLENBQUNFLFVBQVUsQ0FBQztFQUN2Qjs7RUFFQTtFQUNBO0VBQ0EsU0FBU0MsWUFBWUEsQ0FBQ0MsS0FBSyxFQUFFO0lBQzNCQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztJQUM5QlosWUFBWSxDQUFDSSxNQUFNLENBQUM7SUFDcEJDLFNBQVMsQ0FBQyxFQUFFLENBQUM7RUFDZjtFQUVBLG9CQUNFWCwwREFBQSxDQUFBQSx1REFBQSxxQkFFRUEsMERBQUE7SUFBTXFCLFNBQVMsRUFBQyxZQUFZO0lBQUNDLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHUCxLQUFLO01BQUEsT0FBS0QsWUFBWSxDQUFDQyxLQUFLLENBQUM7SUFBQTtFQUFDLGdCQUVwRWYsMERBQUEsQ0FBQ0UseURBQWdCO0lBQUNxQixTQUFTLEVBQUViLE1BQU87SUFBQ2MsWUFBWSxFQUFFWjtFQUFZLENBQUUsQ0FBQyxFQUFDLEdBQUcsZUFFdEVaLDBEQUFBLENBQUNHLDBEQUFpQixNQUFFLENBQ2hCLENBQUMsZUFDUEgsMERBQUEsWUFBVSxDQUNWLENBQUM7QUFFUDtBQUVBLGlFQUFlSSxhQUFhOzs7Ozs7OztVQ25DNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2NvbXBvbmVudHMvRm9ybXVsYXJBa2NpZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0VmVGb3JtdWxhcmkgZnJvbSBcIi4vSW5wdXRWZUZvcm11bGFyaVwiO1xuaW1wb3J0IEJ1dHRvblByaWRhdEFrY2lpIGZyb20gXCIuL0J1dHRvblByaWRhdEFrY2lpXCI7XG5cbmZ1bmN0aW9uIEZvcm11bGFyQWtjaWUoeyBvblN1Ym1pdEZvcm0gfSkge1xuICAvLyBqZHUgdWtsw6FkYXQgenByw6F2dSwga3RlcsOhIGJ1ZGUgdGV4dCwgdGFrxb5lIHR1IHpwcsOhdnUgY2hjaSBtw610IHVsb8W+ZW5vdSB2IG7Em2pha8OpIGhvZG5vdMSbLCBob2Rub3RhIHYgdG9tIFNUQVRVIGplIFwienByYXZhXCIgKG1vaGxvIGJ5IHRvIGLDvXQgc3DDrcWhIFwidGlja2VyIG5lYm8gc3RvY2sgbmVibyBha2NpZVwiLCDFvmU/KSwgXCJzZXRacHJhdmFcIiBqZSBtYW5hxb5lciB0w6kgaG9kbm90eSBcInpwcmF2YVwiIGEgdGVkIHXFviBqZW4gaW5pY2lhbGl6YcSNbsOtIGhvZG5vdGEgdiB1c2VTdGF0ZSAoKSBhIGTDoW0gdGFtIHByw6F6ZG7DvSB0ZXh0b3bDvSDFmWV0xJt6ZWNcbiAgY29uc3QgW3pwcmF2YSwgc2V0WnByYXZhXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGZ1bmN0aW9uIG5hcGlzWnByYXZ1KHRleHRacHJhdnkpIHtcbiAgICBzZXRacHJhdmEodGV4dFpwcmF2eSk7XG4gIH1cblxuICAvLyBqZXN0bGkgdG8gbmVwxa9qZGUsIHRhayB2IMSNYXNlIDE6NDVoIHNlIMWZZcWhw60gY29uc29sZVxuICAvLyBQb3R2cnp1anUgZm9ybXVsw6HFmVxuICBmdW5jdGlvbiBvZGVzbGlacHJhdnUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwienByYXZhIG9kZXNsYW7DoVwiKTtcbiAgICBvblN1Ym1pdEZvcm0oenByYXZhKTtcbiAgICBzZXRacHJhdmEoXCJcIik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogbmEgcG90dnJ6ZW7DrSB0b2hvdG8gZm9ybXVsw6HFmWUgYWthIFwiZXZlbnQgdcW+aXZhdGVsZVwiIGFrYSBcImtsaWtudXTDrSBuYSBcIm9kZXNsaVNwcmF2dVwiIGFrYSBcIm9uU3VibWl0XCIgc2Ugdnlrb27DoSB2xaFlLCBjbyBqZSB2ZSBmdW5rY2kgb2Rlc2xpU3ByYXZ1IChyZXNwZWt0aXZlIHZsb8W+ZW7DrSBha2NpZSAtPiB2eXR2b8WZZW7DrSBub3bDqWhvIGtvbXBvbmVudHUsIGtkZSBwYWsgYnVkdSBkw6F2YXQgdHJhbnNha2NlIGFrY2nDrSA9PiBUTy1ETz8/KSAqL31cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImlucHV0LWFyZWFcIiBvblN1Ym1pdD17KGV2ZW50KSA9PiBvZGVzbGlacHJhdnUoZXZlbnQpfT5cbiAgICAgICAgey8qIG5hcGlzU3ByYXZ1IGplIGZ1bmtjZSwga3Rlcm91IHNpIHR2b8WZw61tIHbDvcWhZSwgcHJvIHRlbnRvIEZvcm11bMOhxZkga29tcG9uZW50ICovfVxuICAgICAgICA8SW5wdXRWZUZvcm11bGFyaSB2YWx1ZVByb3A9e3pwcmF2YX0gb25DaGFuZ2VUZXh0PXtuYXBpc1pwcmF2dX0gLz57XCIgXCJ9XG4gICAgICAgIHsvKiBuZWZ1bmdvdmFsbyBtaSB6ZGUgemFjaHl0w6F2w6Fuw60genByw6F2eSwgxb5lIGJ5bGEgb2Rlc2xhbsOhIFwib2Rvc2xpU3ByYXZ1XCIsIHByb3Rvxb5lIEJ1dHRvblByaWRhdEFrY2lpIGJ5bCB2IGRpdnUgcG9kIC0gYnVkIHRvIG5hc3R5bG92YXQsIGHFpSBqZSB0byBqYWtvYnkgbWltbyBwxZnDrXNwxJt2ZWsgbmVibyB0byBuYXByb2dyYW1vdmF0LCBhYnkgdG8gYnlsbyB2ZWRsZSB2IGRpdnUsIGFsZSBkxJtsYWxvIHRvIHN0ZWpuw70gKi99XG4gICAgICAgIDxCdXR0b25QcmlkYXRBa2NpaSAvPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybXVsYXJBa2NpZTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBlNDRhNTQwN2M3MzE2OTUyMjFmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbnB1dFZlRm9ybXVsYXJpIiwiQnV0dG9uUHJpZGF0QWtjaWkiLCJGb3JtdWxhckFrY2llIiwiX3JlZiIsIm9uU3VibWl0Rm9ybSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInpwcmF2YSIsInNldFpwcmF2YSIsIm5hcGlzWnByYXZ1IiwidGV4dFpwcmF2eSIsIm9kZXNsaVpwcmF2dSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJ2YWx1ZVByb3AiLCJvbkNoYW5nZVRleHQiXSwic291cmNlUm9vdCI6IiJ9