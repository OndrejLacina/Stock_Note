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

// import ButtonSmazatOperaci nepoužívám zatím

function Operations() {
  // Odsud počítám průměr a vytváří se mi jednotlivé řádky transakcí
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
    operace.forEach(function (_ref) {
      var cena = _ref.cena,
        kusy = _ref.kusy,
        poplatek = _ref.poplatek;
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
  var smazOperaci = function smazOperaci(idx) {
    setOperace(operace.filter(function (_, i) {
      return i !== idx;
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "mb-3"
  }, "Pr\u016Fm\u011Brn\xE1 n\xE1kupn\xED cena: ", vypocitejPrumer()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Nov\xE1 operace"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row g-2 align-items-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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
  }, "Add operation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, operace.map(function (op, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index
    }, op.datum || "—", ": ", op.kusy > 0 ? "Nákup" : "Prodej", " ", op.kusy, " ks za ", op.cena, " K\u010D (poplatek ", op.poplatek, " K\u010D)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "action-btn action-delete",
      onClick: function onClick() {
        return smazOperaci(index);
      }
    }, "Smazat"));
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Operations);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("faa2d203fda181d38643")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFUCxXQUFXLENBQUNGLEtBQU07SUFDekI4QixRQUFRLEVBQUUxQjtFQUFhLENBQ3hCLENBQUMsZUFDRmpCLDBEQUFBO0lBQVE2QyxPQUFPLEVBQUVwQjtFQUFjLEdBQUMsZUFBcUIsQ0FDbEQsQ0FBQyxlQUNOekIsMERBQUEsYUFDR08sT0FBTyxDQUFDdUMsR0FBRyxDQUFDLFVBQUNDLEVBQUUsRUFBRUMsS0FBSztJQUFBLG9CQUNyQmhELDBEQUFBO01BQUlpRCxHQUFHLEVBQUVEO0lBQU0sR0FDWkQsRUFBRSxDQUFDbEMsS0FBSyxJQUFJLEdBQUcsRUFBQyxJQUFFLEVBQUNrQyxFQUFFLENBQUNwQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxRQUFRLEVBQUMsR0FBQyxFQUFDb0MsRUFBRSxDQUFDcEMsSUFBSSxFQUFDLFNBQzVELEVBQUNvQyxFQUFFLENBQUNyQyxJQUFJLEVBQUMscUJBQWMsRUFBQ3FDLEVBQUUsQ0FBQ25DLFFBQVEsRUFBQyxXQUN2QyxlQUFBWiwwREFBQTtNQUNFeUMsU0FBUyxFQUFDLDBCQUEwQjtNQUNwQ0ksT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUE7UUFBQSxPQUFRVixXQUFXLENBQUNhLEtBQUssQ0FBQztNQUFBO0lBQUMsR0FDbkMsUUFFTyxDQUNOLENBQUM7RUFBQSxDQUNOLENBQ0MsQ0FDRCxDQUFDO0FBRVY7QUFFQSxpRUFBZTdDLFVBQVU7Ozs7Ozs7O1VDMUd6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBCdXR0b25TbWF6YXRPcGVyYWNpIG5lcG91xb7DrXbDoW0gemF0w61tXG5cbmZ1bmN0aW9uIE9wZXJhdGlvbnMoKSB7XG4gIC8vIE9kc3VkIHBvxI3DrXTDoW0gcHLFr23Em3IgYSB2eXR2w6HFmcOtIHNlIG1pIGplZG5vdGxpdsOpIMWZw6Fka3kgdHJhbnNha2PDrVxuICBjb25zdCBbb3BlcmFjZSwgc2V0T3BlcmFjZV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtub3ZhT3BlcmFjZSwgc2V0Tm92YU9wZXJhY2VdID0gdXNlU3RhdGUoe1xuICAgIGNlbmE6IFwiXCIsXG4gICAga3VzeTogXCJcIixcbiAgICBwb3BsYXRlazogXCJcIixcbiAgICBkYXR1bTogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHNldE5vdmFPcGVyYWNlKHsgLi4ubm92YU9wZXJhY2UsIFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgcHJpZGVqT3BlcmFjaSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNlbmEsIGt1c3ksIHBvcGxhdGVrLCBkYXR1bSB9ID0gbm92YU9wZXJhY2U7XG4gICAgaWYgKCFjZW5hIHx8ICFrdXN5KSByZXR1cm47XG4gICAgc2V0T3BlcmFjZShbXG4gICAgICAuLi5vcGVyYWNlLFxuICAgICAge1xuICAgICAgICBjZW5hOiBwYXJzZUZsb2F0KGNlbmEpLFxuICAgICAgICBrdXN5OiBwYXJzZUZsb2F0KGt1c3kpLFxuICAgICAgICBwb3BsYXRlazogcGFyc2VGbG9hdChwb3BsYXRlaykgfHwgMCxcbiAgICAgICAgZGF0dW0sXG4gICAgICB9LFxuICAgIF0pO1xuICAgIHNldE5vdmFPcGVyYWNlKHsgY2VuYTogXCJcIiwga3VzeTogXCJcIiwgcG9wbGF0ZWs6IFwiXCIsIGRhdHVtOiBcIlwiIH0pO1xuICB9O1xuXG4gIGNvbnN0IHZ5cG9jaXRlalBydW1lciA9ICgpID0+IHtcbiAgICBsZXQgdG90YWxOYWtsYWR5ID0gMDtcbiAgICBsZXQgY2Vsa2VtS3VzdSA9IDA7XG5cbiAgICBvcGVyYWNlLmZvckVhY2goKHsgY2VuYSwga3VzeSwgcG9wbGF0ZWsgfSkgPT4ge1xuICAgICAgaWYgKGt1c3kgPiAwKSB7XG4gICAgICAgIHRvdGFsTmFrbGFkeSArPSBjZW5hICoga3VzeSArIHBvcGxhdGVrO1xuICAgICAgICBjZWxrZW1LdXN1ICs9IGt1c3k7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwxZlpIHByb2Rlamkgc27DrcW+w61tZSBcImNlbGtlbUt1c3VcIiBhIGNlbGtvdsOpIG7DoWtsYWR5XG4gICAgICAgIHRvdGFsTmFrbGFkeSArPSBwb3BsYXRlaztcbiAgICAgICAgY2Vsa2VtS3VzdSArPSBrdXN5O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjZWxrZW1LdXN1ID4gMCA/ICh0b3RhbE5ha2xhZHkgLyBjZWxrZW1LdXN1KS50b0ZpeGVkKDIpIDogXCItXCI7XG4gIH07XG5cbiAgY29uc3Qgc21hek9wZXJhY2kgPSAoaWR4KSA9PiB7XG4gICAgc2V0T3BlcmFjZShvcGVyYWNlLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaWR4KSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTNcIj5QcsWvbcSbcm7DoSBuw6FrdXBuw60gY2VuYToge3Z5cG9jaXRlalBydW1lcigpfTwvaDU+XG4gICAgICA8aDY+Tm92w6Egb3BlcmFjZTwvaDY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBnLTIgYWxpZ24taXRlbXMtY2VudGVyIG1iLTNcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbmFtZT1cImNlbmFcIlxuICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5jZW5hfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDZW5hIHphIGt1c1wiXG4gICAgICAgID48L2lucHV0PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBuYW1lPVwia3VzeVwiXG4gICAgICAgICAgdmFsdWU9e25vdmFPcGVyYWNlLmt1c3l9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvxI1ldCBrdXPFr1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG5hbWU9XCJwb3BsYXRla1wiXG4gICAgICAgICAgdmFsdWU9e25vdmFPcGVyYWNlLnBvcGxhdGVrfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb3BsYXRla1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICBuYW1lPVwiZGF0dW1cIlxuICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5kYXR1bX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByaWRlak9wZXJhY2l9PkFkZCBvcGVyYXRpb248L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsPlxuICAgICAgICB7b3BlcmFjZS5tYXAoKG9wLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHtvcC5kYXR1bSB8fCBcIuKAlFwifToge29wLmt1c3kgPiAwID8gXCJOw6FrdXBcIiA6IFwiUHJvZGVqXCJ9IHtvcC5rdXN5fSBrc1xuICAgICAgICAgICAgemEge29wLmNlbmF9IEvEjSAocG9wbGF0ZWsge29wLnBvcGxhdGVrfSBLxI0pXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjdGlvbi1idG4gYWN0aW9uLWRlbGV0ZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNtYXpPcGVyYWNpKGluZGV4KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU21hemF0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9wZXJhdGlvbnM7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmYWEyZDIwM2ZkYTE4MWQzODY0M1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiT3BlcmF0aW9ucyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm9wZXJhY2UiLCJzZXRPcGVyYWNlIiwiX3VzZVN0YXRlMyIsImNlbmEiLCJrdXN5IiwicG9wbGF0ZWsiLCJkYXR1bSIsIl91c2VTdGF0ZTQiLCJub3ZhT3BlcmFjZSIsInNldE5vdmFPcGVyYWNlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJfZXZlbnQkdGFyZ2V0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsInByaWRlak9wZXJhY2kiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwYXJzZUZsb2F0Iiwidnlwb2NpdGVqUHJ1bWVyIiwidG90YWxOYWtsYWR5IiwiY2Vsa2VtS3VzdSIsImZvckVhY2giLCJfcmVmIiwidG9GaXhlZCIsInNtYXpPcGVyYWNpIiwiaWR4IiwiZmlsdGVyIiwiXyIsImkiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIiwibWFwIiwib3AiLCJpbmRleCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=