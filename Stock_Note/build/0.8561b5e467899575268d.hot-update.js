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
    var nakupniCena = 0; // celkové náklady na nákupy
    var celkemKusu = 0; // aktuální počet kusů
    var celkemPoplatku = 0; // součet všech poplatků

    operace.forEach(function (_ref2) {
      var cena = _ref2.cena,
        kusy = _ref2.kusy,
        poplatek = _ref2.poplatek;
      if (kusy > 0) {
        // Nákup: započítáme cenu i poplatek
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
/******/ 	__webpack_require__.h = () => ("759473cd3a9ac4bf702b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxVQUFDQyxFQUFFLEVBQUVDLEtBQUs7SUFBQSxvQkFDckI3QywwREFBQTtNQUFJOEMsR0FBRyxFQUFFRDtJQUFNLGdCQUNiN0MsMERBQUEsYUFBSzRDLEVBQUUsQ0FBQy9CLEtBQUssSUFBSSxHQUFRLENBQUMsZUFDMUJiLDBEQUFBLGFBQUs0QyxFQUFFLENBQUNqQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxRQUFhLENBQUMsZUFDM0NYLDBEQUFBLGFBQUs0QyxFQUFFLENBQUNqQyxJQUFTLENBQUMsZUFDbEJYLDBEQUFBLGFBQUs0QyxFQUFFLENBQUNsQyxJQUFJLEVBQUMsVUFBTyxDQUFDLGVBQ3JCViwwREFBQSxhQUFLNEMsRUFBRSxDQUFDaEMsUUFBUSxFQUFDLFVBQU8sQ0FBQyxlQUN6QlosMERBQUEsMEJBQ0VBLDBEQUFBO01BQ0UwQyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtRQUFBLE9BQVFsQyxlQUFlLENBQUNGLGNBQWMsRUFBRXVDLEtBQUssQ0FBQztNQUFBLENBQUM7TUFDdERQLFNBQVMsRUFBQztJQUF1QixHQUNsQyxRQUVPLENBQ04sQ0FDRixDQUFDO0VBQUEsQ0FDTixDQUNJLENBQ0YsQ0FDSixDQUFDO0FBRVY7QUFFQSxpRUFBZW5DLFVBQVU7Ozs7Ozs7O1VDakt6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBCdXR0b25TbWF6YXRPcGVyYWNpIG5lcG91xb7DrXbDoW0gemF0w61tXG5cbmZ1bmN0aW9uIE9wZXJhdGlvbnMoe1xuICBvcGVyYWNlLFxuICBpbmRleFByaXNwZXZrdSxcbiAgb25BZGRPcGVyYWNlLFxuICBvbkRlbGV0ZU9wZXJhY2UsXG59KSB7XG4gIC8vIE9kc3VkIHBvxI3DrXTDoW0gcHLFr23Em3IgYSB2eXR2w6HFmcOtIHNlIG1pIGplZG5vdGxpdsOpIMWZw6Fka3kgdHJhbnNha2PDrVxuICBjb25zdCBbbm92YU9wZXJhY2UsIHNldE5vdmFPcGVyYWNlXSA9IHVzZVN0YXRlKHtcbiAgICBjZW5hOiBcIlwiLFxuICAgIGt1c3k6IFwiXCIsXG4gICAgcG9wbGF0ZWs6IFwiXCIsXG4gICAgZGF0dW06IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcblxuICAgIHNldE5vdmFPcGVyYWNlKHsgLi4ubm92YU9wZXJhY2UsIFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgcHJpZGVqTm92b3VPcGVyYWNpID0gKCkgPT4ge1xuICAgIGlmICghbm92YU9wZXJhY2UuY2VuYSB8fCAhbm92YU9wZXJhY2Uua3VzeSkge1xuICAgICAgYWxlcnQoXCJWeXBsxYggY2VudSBhIHBvxI1ldCBrdXPFryFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb25BZGRPcGVyYWNlKGluZGV4UHJpc3Bldmt1LCB7XG4gICAgICBjZW5hOiBwYXJzZUZsb2F0KG5vdmFPcGVyYWNlLmNlbmEpLFxuICAgICAga3VzeTogcGFyc2VGbG9hdChub3ZhT3BlcmFjZS5rdXN5KSxcbiAgICAgIHBvcGxhdGVrOiBwYXJzZUZsb2F0KG5vdmFPcGVyYWNlLnBvcGxhdGVrKSB8fCAwLFxuICAgICAgZGF0dW06IG5vdmFPcGVyYWNlLmRhdHVtIHx8IFwiLVwiLFxuICAgIH0pO1xuXG4gICAgc2V0Tm92YU9wZXJhY2UoeyBjZW5hOiBcIlwiLCBrdXN5OiBcIlwiLCBwb3BsYXRlazogXCJcIiwgZGF0dW06IFwiXCIgfSk7XG4gIH07XG5cbiAgY29uc3Qgdnlwb2NpdGVqUHJ1bWVyID0gKCkgPT4ge1xuICAgIGxldCBuYWt1cG5pQ2VuYSA9IDA7IC8vIGNlbGtvdsOpIG7DoWtsYWR5IG5hIG7DoWt1cHlcbiAgICBsZXQgY2Vsa2VtS3VzdSA9IDA7IC8vIGFrdHXDoWxuw60gcG/EjWV0IGt1c8WvXG4gICAgbGV0IGNlbGtlbVBvcGxhdGt1ID0gMDsgLy8gc291xI1ldCB2xaFlY2ggcG9wbGF0a8WvXG5cbiAgICBvcGVyYWNlLmZvckVhY2goKHsgY2VuYSwga3VzeSwgcG9wbGF0ZWsgfSkgPT4ge1xuICAgICAgaWYgKGt1c3kgPiAwKSB7XG4gICAgICAgIC8vIE7DoWt1cDogemFwb8SNw610w6FtZSBjZW51IGkgcG9wbGF0ZWtcbiAgICAgICAgbmFrdXBuaUNlbmEgKz0gY2VuYSAqIGt1c3kgKyBwb3BsYXRlaztcbiAgICAgICAgY2Vsa2VtS3VzdSArPSBrdXN5O1xuICAgICAgICBjZWxrZW1Qb3BsYXRrdSArPSBwb3BsYXRlaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHDFmWkgcHJvZGVqaSBzbsOtxb7DrW1lIFwiY2Vsa2VtS3VzdVwiIGEgY2Vsa292w6kgbsOha2xhZHlcbiAgICAgICAgY2Vsa2VtS3VzdSArPSBrdXN5O1xuICAgICAgICBuYWt1cG5pQ2VuYSArPSBwb3BsYXRlaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHBydW1lcm5hQ2VuYSA9XG4gICAgICBjZWxrZW1LdXN1ID4gMCA/IChuYWt1cG5pQ2VuYSAvIGNlbGtlbUt1c3UpLnRvRml4ZWQoMikgOiBcIi1cIjtcblxuICAgIHJldHVybiB7XG4gICAgICBwcnVtZXJuYUNlbmEsXG4gICAgICBjZWxrZW1LdXN1LFxuICAgICAgY2Vsa2VtUG9wbGF0a3UsXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgUHLFr23Em3Juw6EgbsOha3VwbsOtIGNlbmE6IHt2eXBvY2l0ZWpQcnVtZXIoKS5wcnVtZXJuYUNlbmF9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItM1wiPlBvxI1ldCBrdXPFrzoge3Z5cG9jaXRlalBydW1lcigpLmNlbGtlbUt1c3V9IDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgIFNvdcSNZXQgcG9wbGF0a8WvOiB7dnlwb2NpdGVqUHJ1bWVyKCkuY2Vsa2VtUG9wbGF0a3V9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aDY+Tm92w6Egb3BlcmFjZTwvaDY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBnLTIgYWxpZ24taXRlbXMtY2VudGVyIG1iLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbmFtZT1cImNlbmFcIlxuICAgICAgICAgICAgdmFsdWU9e25vdmFPcGVyYWNlLmNlbmF9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDZW5hIHphIGt1c1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPVwia3VzeVwiXG4gICAgICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2Uua3VzeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvxI1ldCBrdXPFr1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPVwicG9wbGF0ZWtcIlxuICAgICAgICAgICAgdmFsdWU9e25vdmFPcGVyYWNlLnBvcGxhdGVrfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9wbGF0ZWtcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgIG5hbWU9XCJkYXR1bVwiXG4gICAgICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2UuZGF0dW19XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0b1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17cHJpZGVqTm92b3VPcGVyYWNpfT5cbiAgICAgICAgICAgIFDFmWlkYXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RGF0dW08L3RoPlxuICAgICAgICAgICAgPHRoPlR5cDwvdGg+XG4gICAgICAgICAgICA8dGg+S3VzeTwvdGg+XG4gICAgICAgICAgICA8dGg+Q2VuYTwvdGg+XG4gICAgICAgICAgICA8dGg+UG9wbGF0ZWs8L3RoPlxuICAgICAgICAgICAgPHRoPkFrY2U8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7b3BlcmFjZS5tYXAoKG9wLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8dGQ+e29wLmRhdHVtIHx8IFwi4oCUXCJ9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntvcC5rdXN5ID4gMCA/IFwiTsOha3VwXCIgOiBcIlByb2RlalwifTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57b3Aua3VzeX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e29wLmNlbmF9IEvEjTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57b3AucG9wbGF0ZWt9IEvEjTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZU9wZXJhY2UoaW5kZXhQcmlzcGV2a3UsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWRhbmdlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU21hemF0XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3BlcmF0aW9ucztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc1OTQ3M2NkM2E5YWM0YmY3MDJiXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJPcGVyYXRpb25zIiwiX3JlZiIsIm9wZXJhY2UiLCJpbmRleFByaXNwZXZrdSIsIm9uQWRkT3BlcmFjZSIsIm9uRGVsZXRlT3BlcmFjZSIsIl91c2VTdGF0ZSIsImNlbmEiLCJrdXN5IiwicG9wbGF0ZWsiLCJkYXR1bSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm5vdmFPcGVyYWNlIiwic2V0Tm92YU9wZXJhY2UiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIl9ldmVudCR0YXJnZXQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwicHJpZGVqTm92b3VPcGVyYWNpIiwiYWxlcnQiLCJwYXJzZUZsb2F0Iiwidnlwb2NpdGVqUHJ1bWVyIiwibmFrdXBuaUNlbmEiLCJjZWxrZW1LdXN1IiwiY2Vsa2VtUG9wbGF0a3UiLCJmb3JFYWNoIiwiX3JlZjIiLCJwcnVtZXJuYUNlbmEiLCJ0b0ZpeGVkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwib25DbGljayIsIm1hcCIsIm9wIiwiaW5kZXgiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9