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
    onChangeText: napisZpravu
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ButtonPridatAkcii__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormularAkcie);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("68990b253be611eac5d7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42YmI4ZmFlMDM1ODE1M2EzNzUyMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1U7QUFDRTtBQUVwRCxTQUFTSSxhQUFhQSxDQUFBQyxJQUFBLEVBQW1CO0VBQUEsSUFBaEJDLFlBQVksR0FBQUQsSUFBQSxDQUFaQyxZQUFZO0VBQ25DO0VBQ0EsSUFBQUMsU0FBQSxHQUE0Qk4sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQU8sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBakNHLE1BQU0sR0FBQUYsVUFBQTtJQUFFRyxTQUFTLEdBQUFILFVBQUE7RUFFeEIsU0FBU0ksV0FBV0EsQ0FBQ0MsVUFBVSxFQUFFO0lBQy9CRixTQUFTLENBQUNFLFVBQVUsQ0FBQztFQUN2Qjs7RUFFQTtFQUNBO0VBQ0EsU0FBU0MsWUFBWUEsQ0FBQ0MsS0FBSyxFQUFFO0lBQzNCQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztJQUM5QlosWUFBWSxDQUFDSSxNQUFNLENBQUM7SUFDcEJDLFNBQVMsQ0FBQyxFQUFFLENBQUM7RUFDZjtFQUVBLG9CQUNFWCwwREFBQSxDQUFBQSx1REFBQSxxQkFFRUEsMERBQUE7SUFBTXFCLFNBQVMsRUFBQyxZQUFZO0lBQUNDLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHUCxLQUFLO01BQUEsT0FBS0QsWUFBWSxDQUFDQyxLQUFLLENBQUM7SUFBQTtFQUFDLGdCQUVwRWYsMERBQUEsQ0FBQ0UseURBQWdCO0lBQUNxQixZQUFZLEVBQUVYO0VBQVksQ0FBRSxDQUFDLEVBQUMsR0FBRyxlQUVuRFosMERBQUEsQ0FBQ0csMERBQWlCLE1BQUUsQ0FDaEIsQ0FBQyxlQUNQSCwwREFBQSxZQUFVLENBQ1YsQ0FBQztBQUVQO0FBRUEsaUVBQWVJLGFBQWE7Ozs7Ozs7O1VDbkM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9Gb3JtdWxhckFrY2llLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXRWZUZvcm11bGFyaSBmcm9tIFwiLi9JbnB1dFZlRm9ybXVsYXJpXCI7XG5pbXBvcnQgQnV0dG9uUHJpZGF0QWtjaWkgZnJvbSBcIi4vQnV0dG9uUHJpZGF0QWtjaWlcIjtcblxuZnVuY3Rpb24gRm9ybXVsYXJBa2NpZSh7IG9uU3VibWl0Rm9ybSB9KSB7XG4gIC8vIGpkdSB1a2zDoWRhdCB6cHLDoXZ1LCBrdGVyw6EgYnVkZSB0ZXh0LCB0YWvFvmUgdHUgenByw6F2dSBjaGNpIG3DrXQgdWxvxb5lbm91IHYgbsSbamFrw6kgaG9kbm90xJssIGhvZG5vdGEgdiB0b20gU1RBVFUgamUgXCJ6cHJhdmFcIiAobW9obG8gYnkgdG8gYsO9dCBzcMOtxaEgXCJ0aWNrZXIgbmVibyBzdG9jayBuZWJvIGFrY2llXCIsIMW+ZT8pLCBcInNldFpwcmF2YVwiIGplIG1hbmHFvmVyIHTDqSBob2Rub3R5IFwienByYXZhXCIgYSB0ZWQgdcW+IGplbiBpbmljaWFsaXphxI1uw60gaG9kbm90YSB2IHVzZVN0YXRlICgpIGEgZMOhbSB0YW0gcHLDoXpkbsO9IHRleHRvdsO9IMWZZXTEm3plY1xuICBjb25zdCBbenByYXZhLCBzZXRacHJhdmFdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgZnVuY3Rpb24gbmFwaXNacHJhdnUodGV4dFpwcmF2eSkge1xuICAgIHNldFpwcmF2YSh0ZXh0WnByYXZ5KTtcbiAgfVxuXG4gIC8vIGplc3RsaSB0byBuZXDFr2pkZSwgdGFrIHYgxI1hc2UgMTo0NWggc2UgxZllxaHDrSBjb25zb2xlXG4gIC8vIFBvdHZyenVqdSBmb3JtdWzDocWZXG4gIGZ1bmN0aW9uIG9kZXNsaVpwcmF2dShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJ6cHJhdmEgb2Rlc2xhbsOhXCIpO1xuICAgIG9uU3VibWl0Rm9ybSh6cHJhdmEpO1xuICAgIHNldFpwcmF2YShcIlwiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBuYSBwb3R2cnplbsOtIHRvaG90byBmb3JtdWzDocWZZSBha2EgXCJldmVudCB1xb5pdmF0ZWxlXCIgYWthIFwia2xpa251dMOtIG5hIFwib2Rlc2xpU3ByYXZ1XCIgYWthIFwib25TdWJtaXRcIiBzZSB2eWtvbsOhIHbFoWUsIGNvIGplIHZlIGZ1bmtjaSBvZGVzbGlTcHJhdnUgKHJlc3Bla3RpdmUgdmxvxb5lbsOtIGFrY2llIC0+IHZ5dHZvxZllbsOtIG5vdsOpaG8ga29tcG9uZW50dSwga2RlIHBhayBidWR1IGTDoXZhdCB0cmFuc2FrY2UgYWtjacOtID0+IFRPLURPPz8pICovfVxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiaW5wdXQtYXJlYVwiIG9uU3VibWl0PXsoZXZlbnQpID0+IG9kZXNsaVpwcmF2dShldmVudCl9PlxuICAgICAgICB7LyogbmFwaXNTcHJhdnUgamUgZnVua2NlLCBrdGVyb3Ugc2kgdHZvxZnDrW0gdsO9xaFlLCBwcm8gdGVudG8gRm9ybXVsw6HFmSBrb21wb25lbnQgKi99XG4gICAgICAgIDxJbnB1dFZlRm9ybXVsYXJpIG9uQ2hhbmdlVGV4dD17bmFwaXNacHJhdnV9IC8+e1wiIFwifVxuICAgICAgICB7LyogbmVmdW5nb3ZhbG8gbWkgemRlIHphY2h5dMOhdsOhbsOtIHpwcsOhdnksIMW+ZSBieWxhIG9kZXNsYW7DoSBcIm9kb3NsaVNwcmF2dVwiLCBwcm90b8W+ZSBCdXR0b25QcmlkYXRBa2NpaSBieWwgdiBkaXZ1IHBvZCAtIGJ1ZCB0byBuYXN0eWxvdmF0LCBhxaUgamUgdG8gamFrb2J5IG1pbW8gcMWZw61zcMSbdmVrIG5lYm8gdG8gbmFwcm9ncmFtb3ZhdCwgYWJ5IHRvIGJ5bG8gdmVkbGUgdiBkaXZ1LCBhbGUgZMSbbGFsbyB0byBzdGVqbsO9ICovfVxuICAgICAgICA8QnV0dG9uUHJpZGF0QWtjaWkgLz5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXY+PC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm11bGFyQWtjaWU7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ODk5MGIyNTNiZTYxMWVhYzVkN1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW5wdXRWZUZvcm11bGFyaSIsIkJ1dHRvblByaWRhdEFrY2lpIiwiRm9ybXVsYXJBa2NpZSIsIl9yZWYiLCJvblN1Ym1pdEZvcm0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ6cHJhdmEiLCJzZXRacHJhdmEiLCJuYXBpc1pwcmF2dSIsInRleHRacHJhdnkiLCJvZGVzbGlacHJhdnUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0Iiwib25DaGFuZ2VUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==