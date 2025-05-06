"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 44:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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

function Operations(_ref) {
  var operace = _ref.operace,
    indexPrispevku = _ref.indexPrispevku,
    onAddOperace = _ref.onAddOperace,
    onDeleteOperace = _ref.onDeleteOperace;
  // Odsud počítám průměr a vytváří se mi jednotlivé řádky transakcí
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      cena: "",
      kusy: "",
      poplatek: "",
      datum: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    novaOperace = _useState2[0],
    setNovaOperace = _useState2[1];
  var handleChange = function handleChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    setNovaOperace(_objectSpread(_objectSpread({}, novaOperace), {}, _defineProperty({}, name, value)));
  };
  var pridejNovouOperaci = function pridejNovouOperaci() {
    if (!novaOperace.cena || !novaOperace.kusy) {
      alert("Vyplň cenu a počet kusů!");
      return;
    }
    onAddOperace(indexPrispevku, {
      cena: parseFloat(novaOperace.cena),
      kusy: parseFloat(novaOperace.kusy),
      poplatek: parseFloat(novaOperace.poplatek) || 0,
      datum: novaOperace.datum || "-"
    });
    setNovaOperace({
      cena: "",
      kusy: "",
      poplatek: "",
      datum: ""
    });
  };
  var vypocitejPrumer = function vypocitejPrumer() {
    var nakupniCena = 0;
    var celkemKusu = 0;
    var celkemPoplatku = 0;
    operace.forEach(function (_ref2) {
      var cena = _ref2.cena,
        kusy = _ref2.kusy,
        poplatek = _ref2.poplatek;
      if (kusy > 0) {
        nakupniCena += cena * kusy + poplatek;
        celkemKusu += kusy;
        celkemPoplatku += poplatek;
      } else {
        // při prodeji snížíme "celkemKusu" a celkové náklady
        celkemKusu += kusy;
        nakupniCena += poplatek;
      }
    });
    var prumernaCena = celkemKusu > 0 ? (nakupniCena / celkemKusu).toFixed(2) : "-";
    return {
      prumernaCena: prumernaCena,
      celkemKusu: celkemKusu,
      celkemPoplatku: celkemPoplatku
    };
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mb-3"
  }, "Pr\u016Fm\u011Brn\xE1 n\xE1kupn\xED cena: ", vypocitejPrumer().prumernaCena), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mb-3"
  }, "Po\u010Det kus\u016F: ", vypocitejPrumer().celkemKusu, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mb-3"
  }, "Sou\u010Det poplatk\u016F: ", vypocitejPrumer().celkemPoplatku)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Nov\xE1 operace"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row g-2 align-items-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "cena",
    value: novaOperace.cena,
    onChange: handleChange,
    placeholder: "Cena za kus",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "kusy",
    value: novaOperace.kusy,
    onChange: handleChange,
    placeholder: "Po\u010Det kus\u016F",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    name: "poplatek",
    value: novaOperace.poplatek,
    onChange: handleChange,
    placeholder: "Poplatek",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "date",
    name: "datum",
    value: novaOperace.datum,
    onChange: handleChange,
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-primary",
    onClick: pridejNovouOperaci
  }, "P\u0159idat"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Datum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Typ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Kusy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Cena"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Poplatek"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Akce"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, operace.map(function (op, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, op.datum || "—"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, op.kusy > 0 ? "Nákup" : "Prodej"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, op.kusy), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, op.cena, " K\u010D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, op.poplatek, " K\u010D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return onDeleteOperace(indexPrispevku, index);
      },
      className: "btn btn-sm btn-danger"
    }, "Smazat")));
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Operations);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ba43ba673301cde1245f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QywwREFBQTtNQUFJOEMsR0FBRyxFQUFFRDtJQUFNLGdCQUNiN0MsMERBQUEsYUFBSzRDLEVBQUUsQ0FBQy9CLEtBQUssSUFBSSxHQUFRLENBQUMsZUFDMUJiLDBEQUFBLGFBQUs0QyxFQUFFLENBQUNqQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxRQUFhLENBQUMsZUFDM0NYLDBEQUFBLGFBQUs0QyxFQUFFLENBQUNqQyxJQUFTLENBQUMsZUFDbEJYLDBEQUFBLGFBQUs0QyxFQUFFLENBQUNsQyxJQUFJLEVBQUMsVUFBTyxDQUFDLGVBQ3JCViwwREFBQSxhQUFLNEMsRUFBRSxDQUFDaEMsUUFBUSxFQUFDLFVBQU8sQ0FBQyxlQUN6QlosMERBQUEsMEJBQ0VBLDBEQUFBO01BQ0UwQyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtRQUFBLE9BQVFsQyxlQUFlLENBQUNGLGNBQWMsRUFBRXVDLEtBQUssQ0FBQztNQUFBLENBQUM7TUFDdERQLFNBQVMsRUFBQztJQUF1QixHQUNsQyxRQUVPLENBQ04sQ0FDRixDQUFDO0VBQUEsQ0FDTixDQUNJLENBQ0YsQ0FDSixDQUFDO0FBRVY7QUFFQSxpRUFBZW5DLFVBQVU7Ozs7Ozs7O1VDaEt6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBCdXR0b25TbWF6YXRPcGVyYWNpIG5lcG91xb7DrXbDoW0gemF0w61tXG5cbmZ1bmN0aW9uIE9wZXJhdGlvbnMoe1xuICBvcGVyYWNlLFxuICBpbmRleFByaXNwZXZrdSxcbiAgb25BZGRPcGVyYWNlLFxuICBvbkRlbGV0ZU9wZXJhY2UsXG59KSB7XG4gIC8vIE9kc3VkIHBvxI3DrXTDoW0gcHLFr23Em3IgYSB2eXR2w6HFmcOtIHNlIG1pIGplZG5vdGxpdsOpIMWZw6Fka3kgdHJhbnNha2PDrVxuICBjb25zdCBbbm92YU9wZXJhY2UsIHNldE5vdmFPcGVyYWNlXSA9IHVzZVN0YXRlKHtcbiAgICBjZW5hOiBcIlwiLFxuICAgIGt1c3k6IFwiXCIsXG4gICAgcG9wbGF0ZWs6IFwiXCIsXG4gICAgZGF0dW06IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcblxuICAgIHNldE5vdmFPcGVyYWNlKHsgLi4ubm92YU9wZXJhY2UsIFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgcHJpZGVqTm92b3VPcGVyYWNpID0gKCkgPT4ge1xuICAgIGlmICghbm92YU9wZXJhY2UuY2VuYSB8fCAhbm92YU9wZXJhY2Uua3VzeSkge1xuICAgICAgYWxlcnQoXCJWeXBsxYggY2VudSBhIHBvxI1ldCBrdXPFryFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb25BZGRPcGVyYWNlKGluZGV4UHJpc3Bldmt1LCB7XG4gICAgICBjZW5hOiBwYXJzZUZsb2F0KG5vdmFPcGVyYWNlLmNlbmEpLFxuICAgICAga3VzeTogcGFyc2VGbG9hdChub3ZhT3BlcmFjZS5rdXN5KSxcbiAgICAgIHBvcGxhdGVrOiBwYXJzZUZsb2F0KG5vdmFPcGVyYWNlLnBvcGxhdGVrKSB8fCAwLFxuICAgICAgZGF0dW06IG5vdmFPcGVyYWNlLmRhdHVtIHx8IFwiLVwiLFxuICAgIH0pO1xuXG4gICAgc2V0Tm92YU9wZXJhY2UoeyBjZW5hOiBcIlwiLCBrdXN5OiBcIlwiLCBwb3BsYXRlazogXCJcIiwgZGF0dW06IFwiXCIgfSk7XG4gIH07XG5cbiAgY29uc3Qgdnlwb2NpdGVqUHJ1bWVyID0gKCkgPT4ge1xuICAgIGxldCBuYWt1cG5pQ2VuYSA9IDA7XG4gICAgbGV0IGNlbGtlbUt1c3UgPSAwO1xuICAgIGxldCBjZWxrZW1Qb3BsYXRrdSA9IDA7XG5cbiAgICBvcGVyYWNlLmZvckVhY2goKHsgY2VuYSwga3VzeSwgcG9wbGF0ZWsgfSkgPT4ge1xuICAgICAgaWYgKGt1c3kgPiAwKSB7XG4gICAgICAgIG5ha3VwbmlDZW5hICs9IGNlbmEgKiBrdXN5ICsgcG9wbGF0ZWs7XG4gICAgICAgIGNlbGtlbUt1c3UgKz0ga3VzeTtcbiAgICAgICAgY2Vsa2VtUG9wbGF0a3UgKz0gcG9wbGF0ZWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwxZlpIHByb2Rlamkgc27DrcW+w61tZSBcImNlbGtlbUt1c3VcIiBhIGNlbGtvdsOpIG7DoWtsYWR5XG4gICAgICAgIGNlbGtlbUt1c3UgKz0ga3VzeTtcbiAgICAgICAgbmFrdXBuaUNlbmEgKz0gcG9wbGF0ZWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcnVtZXJuYUNlbmEgPVxuICAgICAgY2Vsa2VtS3VzdSA+IDAgPyAobmFrdXBuaUNlbmEgLyBjZWxrZW1LdXN1KS50b0ZpeGVkKDIpIDogXCItXCI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJ1bWVybmFDZW5hLFxuICAgICAgY2Vsa2VtS3VzdSxcbiAgICAgIGNlbGtlbVBvcGxhdGt1LFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgIFByxa9txJtybsOhIG7DoWt1cG7DrSBjZW5hOiB7dnlwb2NpdGVqUHJ1bWVyKCkucHJ1bWVybmFDZW5hfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTNcIj5Qb8SNZXQga3Vzxa86IHt2eXBvY2l0ZWpQcnVtZXIoKS5jZWxrZW1LdXN1fSA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICBTb3XEjWV0IHBvcGxhdGvFrzoge3Z5cG9jaXRlalBydW1lcigpLmNlbGtlbVBvcGxhdGt1fVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGg2Pk5vdsOhIG9wZXJhY2U8L2g2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy0yIGFsaWduLWl0ZW1zLWNlbnRlciBtYi0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJjZW5hXCJcbiAgICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5jZW5hfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2VuYSB6YSBrdXNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbmFtZT1cImt1c3lcIlxuICAgICAgICAgICAgdmFsdWU9e25vdmFPcGVyYWNlLmt1c3l9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb8SNZXQga3Vzxa9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbmFtZT1cInBvcGxhdGVrXCJcbiAgICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5wb3BsYXRla31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvcGxhdGVrXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICBuYW1lPVwiZGF0dW1cIlxuICAgICAgICAgICAgdmFsdWU9e25vdmFPcGVyYWNlLmRhdHVtfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG9cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3ByaWRlak5vdm91T3BlcmFjaX0+XG4gICAgICAgICAgICBQxZlpZGF0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRhdHVtPC90aD5cbiAgICAgICAgICAgIDx0aD5UeXA8L3RoPlxuICAgICAgICAgICAgPHRoPkt1c3k8L3RoPlxuICAgICAgICAgICAgPHRoPkNlbmE8L3RoPlxuICAgICAgICAgICAgPHRoPlBvcGxhdGVrPC90aD5cbiAgICAgICAgICAgIDx0aD5Ba2NlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge29wZXJhY2UubWFwKChvcCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPHRkPntvcC5kYXR1bSB8fCBcIuKAlFwifTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57b3Aua3VzeSA+IDAgPyBcIk7DoWt1cFwiIDogXCJQcm9kZWpcIn08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e29wLmt1c3l9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntvcC5jZW5hfSBLxI08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e29wLnBvcGxhdGVrfSBLxI08L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25EZWxldGVPcGVyYWNlKGluZGV4UHJpc3Bldmt1LCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNtYXphdFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9wZXJhdGlvbnM7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiYTQzYmE2NzMzMDFjZGUxMjQ1ZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiT3BlcmF0aW9ucyIsIl9yZWYiLCJvcGVyYWNlIiwiaW5kZXhQcmlzcGV2a3UiLCJvbkFkZE9wZXJhY2UiLCJvbkRlbGV0ZU9wZXJhY2UiLCJfdXNlU3RhdGUiLCJjZW5hIiwia3VzeSIsInBvcGxhdGVrIiwiZGF0dW0iLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJub3ZhT3BlcmFjZSIsInNldE5vdmFPcGVyYWNlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJfZXZlbnQkdGFyZ2V0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsInByaWRlak5vdm91T3BlcmFjaSIsImFsZXJ0IiwicGFyc2VGbG9hdCIsInZ5cG9jaXRlalBydW1lciIsIm5ha3VwbmlDZW5hIiwiY2Vsa2VtS3VzdSIsImNlbGtlbVBvcGxhdGt1IiwiZm9yRWFjaCIsIl9yZWYyIiwicHJ1bWVybmFDZW5hIiwidG9GaXhlZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siLCJtYXAiLCJvcCIsImluZGV4Iiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==