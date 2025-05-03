"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _components_ButtonPridatAkcii__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _components_FormularAkcie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);





function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Stock Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormularAkcie__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PrispevekAkcie__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
}

// TO-DO -> udělat pak menu nahoře, alespoň 2 záložky (druhá bude přehled portfolia)
// function App() {
//   return (
//     <BrowserRouter>
//       <Navigacia />
//       <Routes>
//         <Route path="/" element={<Main />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="login" element={<Login />} />
//         <Route path="products/*" element={<Products />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

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
  // jdu ukládat zprávu, která bude text, takže tu zprávu chci mít uloženou v nějaké hodnotě, hodnota v tom STATU je "zprava" (mohlo by to být spíš "ticker nebo stock nebo akcie", že?)
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    zprava = _useState2[0],
    setZprava = _useState2[1];
  function napisSpravu(textSpravy) {}
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "input-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputVeFormulari__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChangeText: napisSpravu
  }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ButtonPridatAkcii__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormularAkcie);

/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function InputVeFormulari(_ref) {
  var onChangeText = _ref.onChangeText;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    className: "textarea",
    placeholder: "Vlo\u017E novou akcii..",
    rows: 2,
    onChange: function onChange(event) {
      return onChangeText(event.target.value);
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputVeFormulari);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c42761fcd6fdfe36cbc5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zN2Q4Zjc5ZDAzNDU3YTJkZWUyOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFDaUI7QUFDUjtBQUNFO0FBRXpELFNBQVNLLEdBQUdBLENBQUEsRUFBRztFQUNiLG9CQUNFTCwwREFBQTtJQUFLTyxTQUFTLEVBQUM7RUFBUyxnQkFDdEJQLDBEQUFBLGFBQUksWUFBYyxDQUFDLGVBQ25CQSwwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ0csaUVBQWEsTUFBRSxDQUNiLENBQUMsZUFDTkgsMERBQUE7SUFBS08sU0FBUyxFQUFDO0VBQU0sZ0JBQ25CUCwwREFBQSxDQUFDSSxrRUFBYyxNQUFFLENBQ2QsQ0FDRixDQUFDO0FBRVY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1JLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR1YsNERBQVUsQ0FBQ08sU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sY0FBQ1osMERBQUEsQ0FBQ0ssR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENvQjtBQUNVO0FBQ0U7QUFFcEQsU0FBU0YsYUFBYUEsQ0FBQSxFQUFHO0VBQ3ZCO0VBQ0EsSUFBQVksU0FBQSxHQUE0QkYsK0NBQVEsQ0FBQyxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQS9CRyxNQUFNLEdBQUFGLFVBQUE7SUFBRUcsU0FBUyxHQUFBSCxVQUFBO0VBRXhCLFNBQVNJLFdBQVdBLENBQUNDLFVBQVUsRUFBRSxDQUFDO0VBRWxDLG9CQUNFckIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0VBLDBEQUFBO0lBQU1PLFNBQVMsRUFBQztFQUFZLGdCQUMxQlAsMERBQUEsQ0FBQ2MseURBQWdCO0lBQUNTLFlBQVksRUFBRUg7RUFBWSxDQUFFLENBQUMsRUFBQyxHQUU1QyxDQUFDLGVBQ1BwQiwwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ0UsMERBQWlCLE1BQUUsQ0FDakIsQ0FDTCxDQUFDO0FBRVA7QUFFQSxpRUFBZUMsYUFBYTs7Ozs7Ozs7Ozs7OztBQ3ZCRjtBQUUxQixTQUFTVyxnQkFBZ0JBLENBQUFVLElBQUEsRUFBbUI7RUFBQSxJQUFoQkQsWUFBWSxHQUFBQyxJQUFBLENBQVpELFlBQVk7RUFDdEMsb0JBQ0V2QiwwREFBQTtJQUNFTyxTQUFTLEVBQUMsVUFBVTtJQUNwQmtCLFdBQVcsRUFBQyx5QkFBb0I7SUFDaENDLElBQUksRUFBRSxDQUFFO0lBQ1JDLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHQyxLQUFLO01BQUEsT0FBS0wsWUFBWSxDQUFDSyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQUE7RUFBQyxDQUM3QyxDQUFDO0FBRWhCO0FBRUEsaUVBQWVoQixnQkFBZ0I7Ozs7Ozs7O1VDYi9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9jb21wb25lbnRzL0Zvcm11bGFyQWtjaWUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9jb21wb25lbnRzL0lucHV0VmVGb3JtdWxhcmkuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBCdXR0b25QcmlkYXRBa2NpaSBmcm9tIFwiLi9jb21wb25lbnRzL0J1dHRvblByaWRhdEFrY2lpXCI7XG5pbXBvcnQgRm9ybXVsYXJBa2NpZSBmcm9tIFwiLi9jb21wb25lbnRzL0Zvcm11bGFyQWtjaWVcIjtcbmltcG9ydCBQcmlzcGV2ZWtBa2NpZSBmcm9tIFwiLi9jb21wb25lbnRzL1ByaXNwZXZla0FrY2llXCI7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxoMT5TdG9jayBOb3RlPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxGb3JtdWxhckFrY2llIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICA8UHJpc3BldmVrQWtjaWUgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBUTy1ETyAtPiB1ZMSbbGF0IHBhayBtZW51IG5haG/FmWUsIGFsZXNwb8WIIDIgesOhbG/Fvmt5IChkcnVow6EgYnVkZSBwxZllaGxlZCBwb3J0Zm9saWEpXG4vLyBmdW5jdGlvbiBBcHAoKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPEJyb3dzZXJSb3V0ZXI+XG4vLyAgICAgICA8TmF2aWdhY2lhIC8+XG4vLyAgICAgICA8Um91dGVzPlxuLy8gICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8TWFpbiAvPn0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCJjb250YWN0XCIgZWxlbWVudD17PENvbnRhY3QgLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwibG9naW5cIiBlbGVtZW50PXs8TG9naW4gLz59IC8+XG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwicHJvZHVjdHMvKlwiIGVsZW1lbnQ9ezxQcm9kdWN0cyAvPn0gLz5cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PE5vdEZvdW5kIC8+fSAvPlxuLy8gICAgICAgPC9Sb3V0ZXM+XG4vLyAgICAgPC9Ccm93c2VyUm91dGVyPlxuLy8gICApO1xuLy8gfVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0VmVGb3JtdWxhcmkgZnJvbSBcIi4vSW5wdXRWZUZvcm11bGFyaVwiO1xuaW1wb3J0IEJ1dHRvblByaWRhdEFrY2lpIGZyb20gXCIuL0J1dHRvblByaWRhdEFrY2lpXCI7XG5cbmZ1bmN0aW9uIEZvcm11bGFyQWtjaWUoKSB7XG4gIC8vIGpkdSB1a2zDoWRhdCB6cHLDoXZ1LCBrdGVyw6EgYnVkZSB0ZXh0LCB0YWvFvmUgdHUgenByw6F2dSBjaGNpIG3DrXQgdWxvxb5lbm91IHYgbsSbamFrw6kgaG9kbm90xJssIGhvZG5vdGEgdiB0b20gU1RBVFUgamUgXCJ6cHJhdmFcIiAobW9obG8gYnkgdG8gYsO9dCBzcMOtxaEgXCJ0aWNrZXIgbmVibyBzdG9jayBuZWJvIGFrY2llXCIsIMW+ZT8pXG4gIGNvbnN0IFt6cHJhdmEsIHNldFpwcmF2YV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGZ1bmN0aW9uIG5hcGlzU3ByYXZ1KHRleHRTcHJhdnkpIHt9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiaW5wdXQtYXJlYVwiPlxuICAgICAgICA8SW5wdXRWZUZvcm11bGFyaSBvbkNoYW5nZVRleHQ9e25hcGlzU3ByYXZ1fSAvPntcIiBcIn1cbiAgICAgICAgey8qIG5hcGlzU3ByYXZ1IGplIGZ1bmtjZSwga3Rlcm91IHNpIHR2b8WZw61tIHbDvcWhZSwgcHJvIHRlbnRvIEZvcm11bMOhxZkga29tcG9uZW50ICovfVxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEJ1dHRvblByaWRhdEFrY2lpIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybXVsYXJBa2NpZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gSW5wdXRWZUZvcm11bGFyaSh7IG9uQ2hhbmdlVGV4dCB9KSB7XG4gIHJldHVybiAoXG4gICAgPHRleHRhcmVhXG4gICAgICBjbGFzc05hbWU9XCJ0ZXh0YXJlYVwiXG4gICAgICBwbGFjZWhvbGRlcj1cIlZsb8W+IG5vdm91IGFrY2lpLi5cIlxuICAgICAgcm93cz17Mn1cbiAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uQ2hhbmdlVGV4dChldmVudC50YXJnZXQudmFsdWUpfVxuICAgID48L3RleHRhcmVhPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFZlRm9ybXVsYXJpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzQyNzYxZmNkNmZkZmUzNmNiYzVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiQnV0dG9uUHJpZGF0QWtjaWkiLCJGb3JtdWxhckFrY2llIiwiUHJpc3BldmVrQWtjaWUiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJ1c2VTdGF0ZSIsIklucHV0VmVGb3JtdWxhcmkiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ6cHJhdmEiLCJzZXRacHJhdmEiLCJuYXBpc1NwcmF2dSIsInRleHRTcHJhdnkiLCJGcmFnbWVudCIsIm9uQ2hhbmdlVGV4dCIsIl9yZWYiLCJwbGFjZWhvbGRlciIsInJvd3MiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9