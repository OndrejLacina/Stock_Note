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
  var onSubmit = _ref.onSubmit;
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
/******/ 	__webpack_require__.h = () => ("42ae406ca3f3d80fae7e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jOGZiZTk2YzM2MGIxNTU3Y2JhNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1U7QUFDRTtBQUVwRCxTQUFTSSxhQUFhQSxDQUFBQyxJQUFBLEVBQWU7RUFBQSxJQUFaQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtFQUMvQjtFQUNBLElBQUFDLFNBQUEsR0FBNEJOLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFPLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQWpDRyxNQUFNLEdBQUFGLFVBQUE7SUFBRUcsU0FBUyxHQUFBSCxVQUFBO0VBRXhCLFNBQVNJLFdBQVdBLENBQUNDLFVBQVUsRUFBRTtJQUMvQkYsU0FBUyxDQUFDRSxVQUFVLENBQUM7RUFDdkI7O0VBRUE7RUFDQSxTQUFTQyxZQUFZQSxDQUFBLEVBQUc7SUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0VBQ2hDO0VBRUEsb0JBQ0VoQiwwREFBQSxDQUFBQSx1REFBQSxxQkFFRUEsMERBQUE7SUFBTW1CLFNBQVMsRUFBQyxZQUFZO0lBQUNiLFFBQVEsRUFBRVE7RUFBYSxnQkFFbERkLDBEQUFBLENBQUNFLHlEQUFnQjtJQUFDa0IsWUFBWSxFQUFFUjtFQUFZLENBQUUsQ0FBQyxFQUFDLEdBQUcsZUFFbkRaLDBEQUFBLENBQUNHLDBEQUFpQixNQUFFLENBQ2hCLENBQUMsZUFDUEgsMERBQUEsWUFBVSxDQUNWLENBQUM7QUFFUDtBQUVBLGlFQUFlSSxhQUFhOzs7Ozs7OztVQy9CNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2NvbXBvbmVudHMvRm9ybXVsYXJBa2NpZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0VmVGb3JtdWxhcmkgZnJvbSBcIi4vSW5wdXRWZUZvcm11bGFyaVwiO1xuaW1wb3J0IEJ1dHRvblByaWRhdEFrY2lpIGZyb20gXCIuL0J1dHRvblByaWRhdEFrY2lpXCI7XG5cbmZ1bmN0aW9uIEZvcm11bGFyQWtjaWUoeyBvblN1Ym1pdCB9KSB7XG4gIC8vIGpkdSB1a2zDoWRhdCB6cHLDoXZ1LCBrdGVyw6EgYnVkZSB0ZXh0LCB0YWvFvmUgdHUgenByw6F2dSBjaGNpIG3DrXQgdWxvxb5lbm91IHYgbsSbamFrw6kgaG9kbm90xJssIGhvZG5vdGEgdiB0b20gU1RBVFUgamUgXCJ6cHJhdmFcIiAobW9obG8gYnkgdG8gYsO9dCBzcMOtxaEgXCJ0aWNrZXIgbmVibyBzdG9jayBuZWJvIGFrY2llXCIsIMW+ZT8pLCBcInNldFpwcmF2YVwiIGplIG1hbmHFvmVyIHTDqSBob2Rub3R5IFwienByYXZhXCIgYSB0ZWQgdcW+IGplbiBpbmljaWFsaXphxI1uw60gaG9kbm90YSB2IHVzZVN0YXRlICgpIGEgZMOhbSB0YW0gcHLDoXpkbsO9IHRleHRvdsO9IMWZZXTEm3plY1xuICBjb25zdCBbenByYXZhLCBzZXRacHJhdmFdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgZnVuY3Rpb24gbmFwaXNTcHJhdnUodGV4dFNwcmF2eSkge1xuICAgIHNldFpwcmF2YSh0ZXh0U3ByYXZ5KTtcbiAgfVxuXG4gIC8vIGplc3RsaSB0byBuZXDFr2pkZSwgdGFrIHYgxI1hc2UgMTo0NWggc2UgxZllxaHDrSBjb25zb2xlXG4gIGZ1bmN0aW9uIG9kZXNsaVNwcmF2dSgpIHtcbiAgICBjb25zb2xlLmxvZyhcInpwcmF2YSBvZGVzbGFuw6FcIik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogbmEgcG90dnJ6ZW7DrSB0b2hvdG8gZm9ybXVsw6HFmWUgYWthIFwiZXZlbnQgdcW+aXZhdGVsZVwiIGFrYSBcImtsaWtudXTDrSBuYSBcIm9kZXNsaVNwcmF2dVwiIGFrYSBcIm9uU3VibWl0XCIgc2Ugdnlrb27DoSB2xaFlLCBjbyBqZSB2ZSBmdW5rY2kgb2Rlc2xpU3ByYXZ1IChyZXNwZWt0aXZlIHZsb8W+ZW7DrSBha2NpZSAtPiB2eXR2b8WZZW7DrSBub3bDqWhvIGtvbXBvbmVudHUsIGtkZSBwYWsgYnVkdSBkw6F2YXQgdHJhbnNha2NlIGFrY2nDrSA9PiBUTy1ETz8/KSAqL31cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImlucHV0LWFyZWFcIiBvblN1Ym1pdD17b2Rlc2xpU3ByYXZ1fT5cbiAgICAgICAgey8qIG5hcGlzU3ByYXZ1IGplIGZ1bmtjZSwga3Rlcm91IHNpIHR2b8WZw61tIHbDvcWhZSwgcHJvIHRlbnRvIEZvcm11bMOhxZkga29tcG9uZW50ICovfVxuICAgICAgICA8SW5wdXRWZUZvcm11bGFyaSBvbkNoYW5nZVRleHQ9e25hcGlzU3ByYXZ1fSAvPntcIiBcIn1cbiAgICAgICAgey8qIG5lZnVuZ292YWxvIG1pIHpkZSB6YWNoeXTDoXbDoW7DrSB6cHLDoXZ5LCDFvmUgYnlsYSBvZGVzbGFuw6EgXCJvZG9zbGlTcHJhdnVcIiwgcHJvdG/FvmUgQnV0dG9uUHJpZGF0QWtjaWkgYnlsIHYgZGl2dSBwb2QgLSBidWQgdG8gbmFzdHlsb3ZhdCwgYcWlIGplIHRvIGpha29ieSBtaW1vIHDFmcOtc3DEm3ZlayBuZWJvIHRvIG5hcHJvZ3JhbW92YXQsIGFieSB0byBieWxvIHZlZGxlIHYgZGl2dSwgYWxlIGTEm2xhbG8gdG8gc3Rlam7DvSAqL31cbiAgICAgICAgPEJ1dHRvblByaWRhdEFrY2lpIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtdWxhckFrY2llO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDJhZTQwNmNhM2YzZDgwZmFlN2VcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIklucHV0VmVGb3JtdWxhcmkiLCJCdXR0b25QcmlkYXRBa2NpaSIsIkZvcm11bGFyQWtjaWUiLCJfcmVmIiwib25TdWJtaXQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ6cHJhdmEiLCJzZXRacHJhdmEiLCJuYXBpc1NwcmF2dSIsInRleHRTcHJhdnkiLCJvZGVzbGlTcHJhdnUiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwib25DaGFuZ2VUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==