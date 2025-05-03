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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, " Pr\u016Fm\u011Brn\xE1 n\xE1kupn\xED cena: ", vypocitejPrumer()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Nov\xE1 operace"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0f78e99ff742b3ca1b31")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxJQUFJLEdBQUcsRUFBQyxJQUFFLEVBQUM0QixFQUFFLENBQUM5QixJQUFJLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxRQUFRLEVBQUMsR0FBQyxFQUFDOEIsRUFBRSxDQUFDOUIsSUFBSSxFQUFDLFNBQzVELEVBQUM4QixFQUFFLENBQUMvQixJQUFJLEVBQUMscUJBQWMsRUFBQytCLEVBQUUsQ0FBQzdCLFFBQVEsRUFBQyxXQUNyQyxDQUFDO0VBQUEsQ0FDTixDQUNDLENBQ0QsQ0FBQztBQUVWO0FBRUEsaUVBQWVULFVBQVU7Ozs7Ozs7O1VDOUZ6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gT3BlcmF0aW9ucygpIHtcbiAgLy8gT2RzdWQgcG/EjcOtdMOhbSBwcsWvbcSbciBhIHZ5dHbDocWZw60gc2UgbWkgamVkbm90bGl2w6kgxZnDoWRreSB0cmFuc2FrY8OtXG4gIGNvbnN0IFtvcGVyYWNlLCBzZXRPcGVyYWNlXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25vdmFPcGVyYWNlLCBzZXROb3ZhT3BlcmFjZV0gPSB1c2VTdGF0ZSh7XG4gICAgY2VuYTogXCJcIixcbiAgICBrdXN5OiBcIlwiLFxuICAgIHBvcGxhdGVrOiBcIlwiLFxuICAgIGRhdHVtOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgc2V0Tm92YU9wZXJhY2UoeyAuLi5ub3ZhT3BlcmFjZSwgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBwcmlkZWpPcGVyYWNpID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2VuYSwga3VzeSwgcG9wbGF0ZWssIGRhdHVtIH0gPSBub3ZhT3BlcmFjZTtcbiAgICBpZiAoIWNlbmEgfHwgIWt1c3kpIHJldHVybjtcbiAgICBzZXRPcGVyYWNlKFtcbiAgICAgIC4uLm9wZXJhY2UsXG4gICAgICB7XG4gICAgICAgIGNlbmE6IHBhcnNlRmxvYXQoY2VuYSksXG4gICAgICAgIGt1c3k6IHBhcnNlRmxvYXQoa3VzeSksXG4gICAgICAgIHBvcGxhdGVrOiBwYXJzZUZsb2F0KHBvcGxhdGVrKSB8fCAwLFxuICAgICAgICBkYXR1bSxcbiAgICAgIH0sXG4gICAgXSk7XG4gICAgc2V0Tm92YU9wZXJhY2UoeyBjZW5hOiBcIlwiLCBrdXN5OiBcIlwiLCBwb3BsYXRlazogXCJcIiwgZGF0dW06IFwiXCIgfSk7XG4gIH07XG5cbiAgY29uc3Qgdnlwb2NpdGVqUHJ1bWVyID0gKCkgPT4ge1xuICAgIGxldCB0b3RhbE5ha2xhZHkgPSAwO1xuICAgIGxldCBjZWxrZW1LdXN1ID0gMDtcblxuICAgIG9wZXJhY2UuZm9yRWFjaCgoeyBjZW5hLCBrdXN5LCBwb3BsYXRlayB9KSA9PiB7XG4gICAgICBpZiAoa3VzeSA+IDApIHtcbiAgICAgICAgdG90YWxOYWtsYWR5ICs9IGNlbmEgKiBrdXN5ICsgcG9wbGF0ZWs7XG4gICAgICAgIGNlbGtlbUt1c3UgKz0ga3VzeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHDFmWkgcHJvZGVqaSBzbsOtxb7DrW1lIFwiY2Vsa2VtS3VzdVwiIGEgY2Vsa292w6kgbsOha2xhZHlcbiAgICAgICAgdG90YWxOYWtsYWR5ICs9IHBvcGxhdGVrO1xuICAgICAgICBjZWxrZW1LdXN1ICs9IGt1c3k7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNlbGtlbUt1c3UgPiAwID8gKHRvdGFsTmFrbGFkeSAvIGNlbGtlbUt1c3UpLnRvRml4ZWQoMikgOiBcIi1cIjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+IFByxa9txJtybsOhIG7DoWt1cG7DrSBjZW5hOiB7dnlwb2NpdGVqUHJ1bWVyKCl9PC9oMz5cbiAgICAgIDxoND5Ob3bDoSBvcGVyYWNlPC9oND5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgbmFtZT1cImNlbmFcIlxuICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2UuY2VuYX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJDZW5hIHphIGt1c1wiXG4gICAgICA+PC9pbnB1dD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgbmFtZT1cImt1c3lcIlxuICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2Uua3VzeX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQb8SNZXQga3Vzxa9cIlxuICAgICAgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgbmFtZT1cInBvcGxhdGVrXCJcbiAgICAgICAgdmFsdWU9e25vdmFPcGVyYWNlLnBvcGxhdGVrfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlBvcGxhdGVrXCJcbiAgICAgIC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICBuYW1lPVwiZGF0dW1cIlxuICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2UuZGF0dW19XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmlkZWpPcGVyYWNpfT5BZGQgb3BlcmF0aW9uPC9idXR0b24+XG5cbiAgICAgIDx1bD5cbiAgICAgICAge29wZXJhY2UubWFwKChvcCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7b3AuZGF0dW0gfHwgXCLigJRcIn06IHtvcC5rdXN5ID4gMCA/IFwiTsOha3VwXCIgOiBcIlByb2RlalwifSB7b3Aua3VzeX0ga3NcbiAgICAgICAgICAgIHphIHtvcC5jZW5hfSBLxI0gKHBvcGxhdGVrIHtvcC5wb3BsYXRla30gS8SNKVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3BlcmF0aW9ucztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBmNzhlOTlmZjc0MmIzY2ExYjMxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJPcGVyYXRpb25zIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwib3BlcmFjZSIsInNldE9wZXJhY2UiLCJfdXNlU3RhdGUzIiwiY2VuYSIsImt1c3kiLCJwb3BsYXRlayIsImRhdHVtIiwiX3VzZVN0YXRlNCIsIm5vdmFPcGVyYWNlIiwic2V0Tm92YU9wZXJhY2UiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIl9ldmVudCR0YXJnZXQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwicHJpZGVqT3BlcmFjaSIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInBhcnNlRmxvYXQiLCJ2eXBvY2l0ZWpQcnVtZXIiLCJ0b3RhbE5ha2xhZHkiLCJjZWxrZW1LdXN1IiwiZm9yRWFjaCIsIl9yZWYiLCJ0b0ZpeGVkIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwib25DbGljayIsIm1hcCIsIm9wIiwiaW5kZXgiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9