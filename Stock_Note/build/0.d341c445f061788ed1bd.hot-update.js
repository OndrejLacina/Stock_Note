"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Operations() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Nov\xE1 operace"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "cena",
    value: novaOperace.cena,
    onChange: handleChange,
    placeholder: "Cena za kus"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "kusy",
    value: novaOperace.kusy,
    onChange: handleChange,
    placeholder: "Po\u010Det kus\u016F"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "poplatek",
    value: novaOperace.poplatek,
    onChange: handleChange,
    placeholder: "Poplatek"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "date",
    name: "datum",
    value: novaOperace.datum,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: pridejOperaci
  }, "Add operation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, operace.map(function (op, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index
    }, op.datum || "—", ": ", op.kusy > 0 ? "Nákup" : "Prodej", " ", op.kusy, " ks za ", op.cena, " K\u010D (poplatek ", op.poplatek, " K\u010D)");
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Operations);

/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ButtonSmazatOperaci__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _Operations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



function PrispevekAkcie(_ref) {
  var text = _ref.text,
    onDelete = _ref.onDelete;
  // tady budu mít prázdný pole aka [] a sem budu pushovat po kliknutí na zadání akcie, zadání příspěvěku, sem to potřebuju odeslat a to se pak odešle do app.js celá tato funkce --- NA KOMUNIKACI MEZI KOMPONENTAMI POUŽÍVÁM `PROPS` - PROPS  nemusím pouřívat jen jako atributy těch html značek, ale můžu je použít i ve funkcích

  // Kód pro přidání jednotlivé operace Nákup/Prodej pro akcii
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    operace = _useState2[0],
    setOperace = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      cena: "",
      kusy: "",
      poplatek: "",
      datum: ""
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    novaOperace = _useState4[0],
    setNovaOperace = _useState4[1];
  var handleChange = function handleChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    setNovaOperace(_objectSpread(_objectSpread({}, novaOperace), {}, _defineProperty({}, name, value)));
  };
  var pridejOperaci = function pridejOperaci() {
    var cena = novaOperace.cena,
      kusy = novaOperace.kusy,
      poplatek = novaOperace.poplatek,
      datum = novaOperace.datum;
    if (!cena || !kusy) return;
    setOperace([].concat(_toConsumableArray(operace), [{
      cena: parseFloat(cena),
      kusy: parseFloat(kusy),
      poplatek: parseFloat(poplatek) || 0,
      datum: datum
    }]));
    setNovaOperace({
      cena: "",
      kusy: "",
      poplatek: "",
      datum: ""
    });
  };
  var vypocitejPrumer = function vypocitejPrumer() {
    var totalNaklady = 0;
    var celkemKusu = 0;
    operace.forEach(function (_ref2) {
      var cena = _ref2.cena,
        kusy = _ref2.kusy,
        poplatek = _ref2.poplatek;
      if (kusy > 0) {
        totalNaklady += cena * kusy + poplatek;
        celkemKusu += kusy;
      } else {
        // při prodeji snížíme "celkemKusu" a celkové náklady
        totalNaklady += poplatek;
        celkemKusu += kusy;
      }
    });
    return celkemKusu > 0 ? (totalNaklady / celkemKusu).toFixed(2) : "-";
  };

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
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-footer"
  }, "Pr\u016Fm\u011Brn\xE1 n\xE1kupn\xED cena: ", vypocitejPrumer(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "action-btn action-delete",
    onClick: onDelete
  }, "Vymazat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Operations__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrispevekAkcie);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("23add8d61a9e44442670")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dGUvanMvY29tcG9uZW50cy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9QcmlzcGV2ZWtBa2NpZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIE9wZXJhdGlvbnMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoND5Ob3bDoSBvcGVyYWNlPC9oND5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgbmFtZT1cImNlbmFcIlxuICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2UuY2VuYX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJDZW5hIHphIGt1c1wiXG4gICAgICA+PC9pbnB1dD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgbmFtZT1cImt1c3lcIlxuICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2Uua3VzeX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQb8SNZXQga3Vzxa9cIlxuICAgICAgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgbmFtZT1cInBvcGxhdGVrXCJcbiAgICAgICAgdmFsdWU9e25vdmFPcGVyYWNlLnBvcGxhdGVrfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlBvcGxhdGVrXCJcbiAgICAgIC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICBuYW1lPVwiZGF0dW1cIlxuICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2UuZGF0dW19XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmlkZWpPcGVyYWNpfT5BZGQgb3BlcmF0aW9uPC9idXR0b24+XG5cbiAgICAgIDx1bD5cbiAgICAgICAge29wZXJhY2UubWFwKChvcCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7b3AuZGF0dW0gfHwgXCLigJRcIn06IHtvcC5rdXN5ID4gMCA/IFwiTsOha3VwXCIgOiBcIlByb2RlalwifSB7b3Aua3VzeX0ga3NcbiAgICAgICAgICAgIHphIHtvcC5jZW5hfSBLxI0gKHBvcGxhdGVrIHtvcC5wb3BsYXRla30gS8SNKVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3BlcmF0aW9ucztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uU21hemF0T3BlcmFjaSBmcm9tIFwiLi9CdXR0b25TbWF6YXRPcGVyYWNpXCI7XG5pbXBvcnQgT3BlcmF0aW9ucyBmcm9tIFwiLi9PcGVyYXRpb25zXCI7XG5cbmZ1bmN0aW9uIFByaXNwZXZla0FrY2llKHsgdGV4dCwgb25EZWxldGUgfSkge1xuICAvLyB0YWR5IGJ1ZHUgbcOtdCBwcsOhemRuw70gcG9sZSBha2EgW10gYSBzZW0gYnVkdSBwdXNob3ZhdCBwbyBrbGlrbnV0w60gbmEgemFkw6Fuw60gYWtjaWUsIHphZMOhbsOtIHDFmcOtc3DEm3bEm2t1LCBzZW0gdG8gcG90xZllYnVqdSBvZGVzbGF0IGEgdG8gc2UgcGFrIG9kZcWhbGUgZG8gYXBwLmpzIGNlbMOhIHRhdG8gZnVua2NlIC0tLSBOQSBLT01VTklLQUNJIE1FWkkgS09NUE9ORU5UQU1JIFBPVcW9w41Ww4FNIGBQUk9QU2AgLSBQUk9QUyAgbmVtdXPDrW0gcG91xZnDrXZhdCBqZW4gamFrbyBhdHJpYnV0eSB0xJtjaCBodG1sIHpuYcSNZWssIGFsZSBtxa/FvnUgamUgcG91xb7DrXQgaSB2ZSBmdW5rY8OtY2hcblxuICAvLyBLw7NkIHBybyBwxZlpZMOhbsOtIGplZG5vdGxpdsOpIG9wZXJhY2UgTsOha3VwL1Byb2RlaiBwcm8gYWtjaWlcbiAgY29uc3QgW29wZXJhY2UsIHNldE9wZXJhY2VdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbm92YU9wZXJhY2UsIHNldE5vdmFPcGVyYWNlXSA9IHVzZVN0YXRlKHtcbiAgICBjZW5hOiBcIlwiLFxuICAgIGt1c3k6IFwiXCIsXG4gICAgcG9wbGF0ZWs6IFwiXCIsXG4gICAgZGF0dW06IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBzZXROb3ZhT3BlcmFjZSh7IC4uLm5vdmFPcGVyYWNlLCBbbmFtZV06IHZhbHVlIH0pO1xuICB9O1xuXG4gIGNvbnN0IHByaWRlak9wZXJhY2kgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjZW5hLCBrdXN5LCBwb3BsYXRlaywgZGF0dW0gfSA9IG5vdmFPcGVyYWNlO1xuICAgIGlmICghY2VuYSB8fCAha3VzeSkgcmV0dXJuO1xuICAgIHNldE9wZXJhY2UoW1xuICAgICAgLi4ub3BlcmFjZSxcbiAgICAgIHtcbiAgICAgICAgY2VuYTogcGFyc2VGbG9hdChjZW5hKSxcbiAgICAgICAga3VzeTogcGFyc2VGbG9hdChrdXN5KSxcbiAgICAgICAgcG9wbGF0ZWs6IHBhcnNlRmxvYXQocG9wbGF0ZWspIHx8IDAsXG4gICAgICAgIGRhdHVtLFxuICAgICAgfSxcbiAgICBdKTtcbiAgICBzZXROb3ZhT3BlcmFjZSh7IGNlbmE6IFwiXCIsIGt1c3k6IFwiXCIsIHBvcGxhdGVrOiBcIlwiLCBkYXR1bTogXCJcIiB9KTtcbiAgfTtcblxuICBjb25zdCB2eXBvY2l0ZWpQcnVtZXIgPSAoKSA9PiB7XG4gICAgbGV0IHRvdGFsTmFrbGFkeSA9IDA7XG4gICAgbGV0IGNlbGtlbUt1c3UgPSAwO1xuXG4gICAgb3BlcmFjZS5mb3JFYWNoKCh7IGNlbmEsIGt1c3ksIHBvcGxhdGVrIH0pID0+IHtcbiAgICAgIGlmIChrdXN5ID4gMCkge1xuICAgICAgICB0b3RhbE5ha2xhZHkgKz0gY2VuYSAqIGt1c3kgKyBwb3BsYXRlaztcbiAgICAgICAgY2Vsa2VtS3VzdSArPSBrdXN5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcMWZaSBwcm9kZWppIHNuw63FvsOtbWUgXCJjZWxrZW1LdXN1XCIgYSBjZWxrb3bDqSBuw6FrbGFkeVxuICAgICAgICB0b3RhbE5ha2xhZHkgKz0gcG9wbGF0ZWs7XG4gICAgICAgIGNlbGtlbUt1c3UgKz0ga3VzeTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2Vsa2VtS3VzdSA+IDAgPyAodG90YWxOYWtsYWR5IC8gY2Vsa2VtS3VzdSkudG9GaXhlZCgyKSA6IFwiLVwiO1xuICB9O1xuXG4gIC8vIDEuIHBhcmFtZXRyIC0gY2FsbGJhY2tcbiAgLy8gMi4gcGFyYW10ZXIgLSBkZXBlbmRlbmNpZXMgLSB6w6F2aXNsb3N0aVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIG1vdW50IGtvbXBvbmVudHVcbiAgICBjb25zb2xlLmxvZyhcIlByaXNwZXZlayB6YcSNYWwgY2VzdHVcIik7XG5cbiAgICAvLyB1bm1vdW50IGtvbXBvbmVudHVcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYWxlcnQoXCJQcmlzcGV2xJtrIHNlIHZ5bWHFvmVcIik7XG4gICAgICBjb25zb2xlLmxvZyhcInByaXNwZXZlayB6YW5pa2xcIik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPnt0ZXh0fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICBQcsWvbcSbcm7DoSBuw6FrdXBuw60gY2VuYToge3Z5cG9jaXRlalBydW1lcigpfVxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjdGlvbi1idG4gYWN0aW9uLWRlbGV0ZVwiIG9uQ2xpY2s9e29uRGVsZXRlfT5cbiAgICAgICAgICBWeW1hemF0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8T3BlcmF0aW9ucyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaXNwZXZla0FrY2llO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjNhZGQ4ZDYxYTllNDQ0NDI2NzBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk9wZXJhdGlvbnMiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm5vdmFPcGVyYWNlIiwiY2VuYSIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJrdXN5IiwicG9wbGF0ZWsiLCJkYXR1bSIsIm9uQ2xpY2siLCJwcmlkZWpPcGVyYWNpIiwib3BlcmFjZSIsIm1hcCIsIm9wIiwiaW5kZXgiLCJrZXkiLCJCdXR0b25TbWF6YXRPcGVyYWNpIiwiUHJpc3BldmVrQWtjaWUiLCJfcmVmIiwidGV4dCIsIm9uRGVsZXRlIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2V0T3BlcmFjZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic2V0Tm92YU9wZXJhY2UiLCJldmVudCIsIl9ldmVudCR0YXJnZXQiLCJ0YXJnZXQiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicGFyc2VGbG9hdCIsInZ5cG9jaXRlalBydW1lciIsInRvdGFsTmFrbGFkeSIsImNlbGtlbUt1c3UiLCJmb3JFYWNoIiwiX3JlZjIiLCJ0b0ZpeGVkIiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==