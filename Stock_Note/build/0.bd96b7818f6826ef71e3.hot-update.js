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
        // součet všech poplatků
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
/******/ 	__webpack_require__.h = () => ("8561b5e467899575268d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxVQUFDQyxFQUFFLEVBQUVDLEtBQUs7SUFBQSxvQkFDckI3QywwREFBQTtNQUFJOEMsR0FBRyxFQUFFRDtJQUFNLGdCQUNiN0MsMERBQUEsYUFBSzRDLEVBQUUsQ0FBQy9CLEtBQUssSUFBSSxHQUFRLENBQUMsZUFDMUJiLDBEQUFBLGFBQUs0QyxFQUFFLENBQUNqQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxRQUFhLENBQUMsZUFDM0NYLDBEQUFBLGFBQUs0QyxFQUFFLENBQUNqQyxJQUFTLENBQUMsZUFDbEJYLDBEQUFBLGFBQUs0QyxFQUFFLENBQUNsQyxJQUFJLEVBQUMsVUFBTyxDQUFDLGVBQ3JCViwwREFBQSxhQUFLNEMsRUFBRSxDQUFDaEMsUUFBUSxFQUFDLFVBQU8sQ0FBQyxlQUN6QlosMERBQUEsMEJBQ0VBLDBEQUFBO01BQ0UwQyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtRQUFBLE9BQVFsQyxlQUFlLENBQUNGLGNBQWMsRUFBRXVDLEtBQUssQ0FBQztNQUFBLENBQUM7TUFDdERQLFNBQVMsRUFBQztJQUF1QixHQUNsQyxRQUVPLENBQ04sQ0FDRixDQUFDO0VBQUEsQ0FDTixDQUNJLENBQ0YsQ0FDSixDQUFDO0FBRVY7QUFFQSxpRUFBZW5DLFVBQVU7Ozs7Ozs7O1VDakt6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBCdXR0b25TbWF6YXRPcGVyYWNpIG5lcG91xb7DrXbDoW0gemF0w61tXG5cbmZ1bmN0aW9uIE9wZXJhdGlvbnMoe1xuICBvcGVyYWNlLFxuICBpbmRleFByaXNwZXZrdSxcbiAgb25BZGRPcGVyYWNlLFxuICBvbkRlbGV0ZU9wZXJhY2UsXG59KSB7XG4gIC8vIE9kc3VkIHBvxI3DrXTDoW0gcHLFr23Em3IgYSB2eXR2w6HFmcOtIHNlIG1pIGplZG5vdGxpdsOpIMWZw6Fka3kgdHJhbnNha2PDrVxuICBjb25zdCBbbm92YU9wZXJhY2UsIHNldE5vdmFPcGVyYWNlXSA9IHVzZVN0YXRlKHtcbiAgICBjZW5hOiBcIlwiLFxuICAgIGt1c3k6IFwiXCIsXG4gICAgcG9wbGF0ZWs6IFwiXCIsXG4gICAgZGF0dW06IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcblxuICAgIHNldE5vdmFPcGVyYWNlKHsgLi4ubm92YU9wZXJhY2UsIFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgcHJpZGVqTm92b3VPcGVyYWNpID0gKCkgPT4ge1xuICAgIGlmICghbm92YU9wZXJhY2UuY2VuYSB8fCAhbm92YU9wZXJhY2Uua3VzeSkge1xuICAgICAgYWxlcnQoXCJWeXBsxYggY2VudSBhIHBvxI1ldCBrdXPFryFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb25BZGRPcGVyYWNlKGluZGV4UHJpc3Bldmt1LCB7XG4gICAgICBjZW5hOiBwYXJzZUZsb2F0KG5vdmFPcGVyYWNlLmNlbmEpLFxuICAgICAga3VzeTogcGFyc2VGbG9hdChub3ZhT3BlcmFjZS5rdXN5KSxcbiAgICAgIHBvcGxhdGVrOiBwYXJzZUZsb2F0KG5vdmFPcGVyYWNlLnBvcGxhdGVrKSB8fCAwLFxuICAgICAgZGF0dW06IG5vdmFPcGVyYWNlLmRhdHVtIHx8IFwiLVwiLFxuICAgIH0pO1xuXG4gICAgc2V0Tm92YU9wZXJhY2UoeyBjZW5hOiBcIlwiLCBrdXN5OiBcIlwiLCBwb3BsYXRlazogXCJcIiwgZGF0dW06IFwiXCIgfSk7XG4gIH07XG5cbiAgY29uc3Qgdnlwb2NpdGVqUHJ1bWVyID0gKCkgPT4ge1xuICAgIGxldCBuYWt1cG5pQ2VuYSA9IDA7IC8vIGNlbGtvdsOpIG7DoWtsYWR5IG5hIG7DoWt1cHlcbiAgICBsZXQgY2Vsa2VtS3VzdSA9IDA7IC8vIGFrdHXDoWxuw60gcG/EjWV0IGt1c8WvXG4gICAgbGV0IGNlbGtlbVBvcGxhdGt1ID0gMDsgLy8gc291xI1ldCB2xaFlY2ggcG9wbGF0a8WvXG5cbiAgICBvcGVyYWNlLmZvckVhY2goKHsgY2VuYSwga3VzeSwgcG9wbGF0ZWsgfSkgPT4ge1xuICAgICAgaWYgKGt1c3kgPiAwKSB7XG4gICAgICAgIC8vIHNvdcSNZXQgdsWhZWNoIHBvcGxhdGvFr1xuICAgICAgICBuYWt1cG5pQ2VuYSArPSBjZW5hICoga3VzeSArIHBvcGxhdGVrO1xuICAgICAgICBjZWxrZW1LdXN1ICs9IGt1c3k7XG4gICAgICAgIGNlbGtlbVBvcGxhdGt1ICs9IHBvcGxhdGVrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcMWZaSBwcm9kZWppIHNuw63FvsOtbWUgXCJjZWxrZW1LdXN1XCIgYSBjZWxrb3bDqSBuw6FrbGFkeVxuICAgICAgICBjZWxrZW1LdXN1ICs9IGt1c3k7XG4gICAgICAgIG5ha3VwbmlDZW5hICs9IHBvcGxhdGVrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJ1bWVybmFDZW5hID1cbiAgICAgIGNlbGtlbUt1c3UgPiAwID8gKG5ha3VwbmlDZW5hIC8gY2Vsa2VtS3VzdSkudG9GaXhlZCgyKSA6IFwiLVwiO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBydW1lcm5hQ2VuYSxcbiAgICAgIGNlbGtlbUt1c3UsXG4gICAgICBjZWxrZW1Qb3BsYXRrdSxcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICBQcsWvbcSbcm7DoSBuw6FrdXBuw60gY2VuYToge3Z5cG9jaXRlalBydW1lcigpLnBydW1lcm5hQ2VuYX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zXCI+UG/EjWV0IGt1c8WvOiB7dnlwb2NpdGVqUHJ1bWVyKCkuY2Vsa2VtS3VzdX0gPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgU291xI1ldCBwb3BsYXRrxa86IHt2eXBvY2l0ZWpQcnVtZXIoKS5jZWxrZW1Qb3BsYXRrdX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxoNj5Ob3bDoSBvcGVyYWNlPC9oNj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGctMiBhbGlnbi1pdGVtcy1jZW50ZXIgbWItM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPVwiY2VuYVwiXG4gICAgICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2UuY2VuYX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNlbmEgemEga3VzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJrdXN5XCJcbiAgICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5rdXN5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG/EjWV0IGt1c8WvXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJwb3BsYXRla1wiXG4gICAgICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2UucG9wbGF0ZWt9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb3BsYXRla1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgbmFtZT1cImRhdHVtXCJcbiAgICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5kYXR1bX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtwcmlkZWpOb3ZvdU9wZXJhY2l9PlxuICAgICAgICAgICAgUMWZaWRhdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5EYXR1bTwvdGg+XG4gICAgICAgICAgICA8dGg+VHlwPC90aD5cbiAgICAgICAgICAgIDx0aD5LdXN5PC90aD5cbiAgICAgICAgICAgIDx0aD5DZW5hPC90aD5cbiAgICAgICAgICAgIDx0aD5Qb3BsYXRlazwvdGg+XG4gICAgICAgICAgICA8dGg+QWtjZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtvcGVyYWNlLm1hcCgob3AsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDx0ZD57b3AuZGF0dW0gfHwgXCLigJRcIn08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e29wLmt1c3kgPiAwID8gXCJOw6FrdXBcIiA6IFwiUHJvZGVqXCJ9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntvcC5rdXN5fTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57b3AuY2VuYX0gS8SNPC90ZD5cbiAgICAgICAgICAgICAgPHRkPntvcC5wb3BsYXRla30gS8SNPC90ZD5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlT3BlcmFjZShpbmRleFByaXNwZXZrdSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTbWF6YXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBPcGVyYXRpb25zO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODU2MWI1ZTQ2Nzg5OTU3NTI2OGRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk9wZXJhdGlvbnMiLCJfcmVmIiwib3BlcmFjZSIsImluZGV4UHJpc3Bldmt1Iiwib25BZGRPcGVyYWNlIiwib25EZWxldGVPcGVyYWNlIiwiX3VzZVN0YXRlIiwiY2VuYSIsImt1c3kiLCJwb3BsYXRlayIsImRhdHVtIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwibm92YU9wZXJhY2UiLCJzZXROb3ZhT3BlcmFjZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiX2V2ZW50JHRhcmdldCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJwcmlkZWpOb3ZvdU9wZXJhY2kiLCJhbGVydCIsInBhcnNlRmxvYXQiLCJ2eXBvY2l0ZWpQcnVtZXIiLCJuYWt1cG5pQ2VuYSIsImNlbGtlbUt1c3UiLCJjZWxrZW1Qb3BsYXRrdSIsImZvckVhY2giLCJfcmVmMiIsInBydW1lcm5hQ2VuYSIsInRvRml4ZWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIiwibWFwIiwib3AiLCJpbmRleCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=