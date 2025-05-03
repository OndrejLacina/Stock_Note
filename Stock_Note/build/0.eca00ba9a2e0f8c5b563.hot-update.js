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
  function odesliSpravu() {
    console.log("zprava odeslaná");
    onSubmitForm(zprava);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "input-area",
    onSubmit: odesliSpravu
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
/******/ 	__webpack_require__.h = () => ("22602aebb1407ef59a7b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lY2EwMGJhOWEyZTBmOGM1YjU2My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1U7QUFDRTtBQUVwRCxTQUFTSSxhQUFhQSxDQUFBQyxJQUFBLEVBQW1CO0VBQUEsSUFBaEJDLFlBQVksR0FBQUQsSUFBQSxDQUFaQyxZQUFZO0VBQ25DO0VBQ0EsSUFBQUMsU0FBQSxHQUE0Qk4sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQU8sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBakNHLE1BQU0sR0FBQUYsVUFBQTtJQUFFRyxTQUFTLEdBQUFILFVBQUE7RUFFeEIsU0FBU0ksV0FBV0EsQ0FBQ0MsVUFBVSxFQUFFO0lBQy9CRixTQUFTLENBQUNFLFVBQVUsQ0FBQztFQUN2Qjs7RUFFQTtFQUNBLFNBQVNDLFlBQVlBLENBQUEsRUFBRztJQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDOUJWLFlBQVksQ0FBQ0ksTUFBTSxDQUFDO0VBQ3RCO0VBRUEsb0JBQ0VWLDBEQUFBLENBQUFBLHVEQUFBLHFCQUVFQSwwREFBQTtJQUFNbUIsU0FBUyxFQUFDLFlBQVk7SUFBQ0MsUUFBUSxFQUFFTjtFQUFhLGdCQUVsRGQsMERBQUEsQ0FBQ0UseURBQWdCO0lBQUNtQixZQUFZLEVBQUVUO0VBQVksQ0FBRSxDQUFDLEVBQUMsR0FBRyxlQUVuRFosMERBQUEsQ0FBQ0csMERBQWlCLE1BQUUsQ0FDaEIsQ0FBQyxlQUNQSCwwREFBQSxZQUFVLENBQ1YsQ0FBQztBQUVQO0FBRUEsaUVBQWVJLGFBQWE7Ozs7Ozs7O1VDaEM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9Gb3JtdWxhckFrY2llLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXRWZUZvcm11bGFyaSBmcm9tIFwiLi9JbnB1dFZlRm9ybXVsYXJpXCI7XG5pbXBvcnQgQnV0dG9uUHJpZGF0QWtjaWkgZnJvbSBcIi4vQnV0dG9uUHJpZGF0QWtjaWlcIjtcblxuZnVuY3Rpb24gRm9ybXVsYXJBa2NpZSh7IG9uU3VibWl0Rm9ybSB9KSB7XG4gIC8vIGpkdSB1a2zDoWRhdCB6cHLDoXZ1LCBrdGVyw6EgYnVkZSB0ZXh0LCB0YWvFvmUgdHUgenByw6F2dSBjaGNpIG3DrXQgdWxvxb5lbm91IHYgbsSbamFrw6kgaG9kbm90xJssIGhvZG5vdGEgdiB0b20gU1RBVFUgamUgXCJ6cHJhdmFcIiAobW9obG8gYnkgdG8gYsO9dCBzcMOtxaEgXCJ0aWNrZXIgbmVibyBzdG9jayBuZWJvIGFrY2llXCIsIMW+ZT8pLCBcInNldFpwcmF2YVwiIGplIG1hbmHFvmVyIHTDqSBob2Rub3R5IFwienByYXZhXCIgYSB0ZWQgdcW+IGplbiBpbmljaWFsaXphxI1uw60gaG9kbm90YSB2IHVzZVN0YXRlICgpIGEgZMOhbSB0YW0gcHLDoXpkbsO9IHRleHRvdsO9IMWZZXTEm3plY1xuICBjb25zdCBbenByYXZhLCBzZXRacHJhdmFdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgZnVuY3Rpb24gbmFwaXNTcHJhdnUodGV4dFNwcmF2eSkge1xuICAgIHNldFpwcmF2YSh0ZXh0U3ByYXZ5KTtcbiAgfVxuXG4gIC8vIGplc3RsaSB0byBuZXDFr2pkZSwgdGFrIHYgxI1hc2UgMTo0NWggc2UgxZllxaHDrSBjb25zb2xlXG4gIGZ1bmN0aW9uIG9kZXNsaVNwcmF2dSgpIHtcbiAgICBjb25zb2xlLmxvZyhcInpwcmF2YSBvZGVzbGFuw6FcIik7XG4gICAgb25TdWJtaXRGb3JtKHpwcmF2YSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogbmEgcG90dnJ6ZW7DrSB0b2hvdG8gZm9ybXVsw6HFmWUgYWthIFwiZXZlbnQgdcW+aXZhdGVsZVwiIGFrYSBcImtsaWtudXTDrSBuYSBcIm9kZXNsaVNwcmF2dVwiIGFrYSBcIm9uU3VibWl0XCIgc2Ugdnlrb27DoSB2xaFlLCBjbyBqZSB2ZSBmdW5rY2kgb2Rlc2xpU3ByYXZ1IChyZXNwZWt0aXZlIHZsb8W+ZW7DrSBha2NpZSAtPiB2eXR2b8WZZW7DrSBub3bDqWhvIGtvbXBvbmVudHUsIGtkZSBwYWsgYnVkdSBkw6F2YXQgdHJhbnNha2NlIGFrY2nDrSA9PiBUTy1ETz8/KSAqL31cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImlucHV0LWFyZWFcIiBvblN1Ym1pdD17b2Rlc2xpU3ByYXZ1fT5cbiAgICAgICAgey8qIG5hcGlzU3ByYXZ1IGplIGZ1bmtjZSwga3Rlcm91IHNpIHR2b8WZw61tIHbDvcWhZSwgcHJvIHRlbnRvIEZvcm11bMOhxZkga29tcG9uZW50ICovfVxuICAgICAgICA8SW5wdXRWZUZvcm11bGFyaSBvbkNoYW5nZVRleHQ9e25hcGlzU3ByYXZ1fSAvPntcIiBcIn1cbiAgICAgICAgey8qIG5lZnVuZ292YWxvIG1pIHpkZSB6YWNoeXTDoXbDoW7DrSB6cHLDoXZ5LCDFvmUgYnlsYSBvZGVzbGFuw6EgXCJvZG9zbGlTcHJhdnVcIiwgcHJvdG/FvmUgQnV0dG9uUHJpZGF0QWtjaWkgYnlsIHYgZGl2dSBwb2QgLSBidWQgdG8gbmFzdHlsb3ZhdCwgYcWlIGplIHRvIGpha29ieSBtaW1vIHDFmcOtc3DEm3ZlayBuZWJvIHRvIG5hcHJvZ3JhbW92YXQsIGFieSB0byBieWxvIHZlZGxlIHYgZGl2dSwgYWxlIGTEm2xhbG8gdG8gc3Rlam7DvSAqL31cbiAgICAgICAgPEJ1dHRvblByaWRhdEFrY2lpIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtdWxhckFrY2llO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjI2MDJhZWJiMTQwN2VmNTlhN2JcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIklucHV0VmVGb3JtdWxhcmkiLCJCdXR0b25QcmlkYXRBa2NpaSIsIkZvcm11bGFyQWtjaWUiLCJfcmVmIiwib25TdWJtaXRGb3JtIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwienByYXZhIiwic2V0WnByYXZhIiwibmFwaXNTcHJhdnUiLCJ0ZXh0U3ByYXZ5Iiwib2Rlc2xpU3ByYXZ1IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0Iiwib25DaGFuZ2VUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==