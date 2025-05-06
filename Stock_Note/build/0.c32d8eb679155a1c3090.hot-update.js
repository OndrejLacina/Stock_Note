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

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setNovaOperace({ ...novaOperace, [name]: value });
  // };

  var handleChange = function handleChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    setNovaOperace(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, name === "cena" || name === "kusy" || name === "poplatek" ? parseFloat(value) : value));
    });
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
        // Prodej
        celkemKusu += kusy;
        nakupniCena += poplatek;
      }
    });

    // Výpočet průměrné ceny: celkové náklady děleno počet kusů
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
/******/ 	__webpack_require__.h = () => ("f1150a6058afb35d771a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksTUFBUSxDQUFDLGVBQ2JBLDBEQUFBLGFBQUksTUFBUSxDQUFDLGVBQ2JBLDBEQUFBLGFBQUksVUFBWSxDQUFDLGVBQ2pCQSwwREFBQSxhQUFJLE1BQVEsQ0FDVixDQUNDLENBQUMsZUFDUkEsMERBQUEsZ0JBQ0dLLE9BQU8sQ0FBQ3VDLEdBQUcsQ0FBQyxVQUFDQyxFQUFFLEVBQUVDLEtBQUs7SUFBQSxvQkFDckI5QywwREFBQTtNQUFJK0MsR0FBRyxFQUFFRDtJQUFNLGdCQUNiOUMsMERBQUEsYUFBSzZDLEVBQUUsQ0FBQ2hDLEtBQUssSUFBSSxHQUFRLENBQUMsZUFDMUJiLDBEQUFBLGFBQUs2QyxFQUFFLENBQUNsQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxRQUFhLENBQUMsZUFDM0NYLDBEQUFBLGFBQUs2QyxFQUFFLENBQUNsQyxJQUFTLENBQUMsZUFDbEJYLDBEQUFBLGFBQUs2QyxFQUFFLENBQUNuQyxJQUFJLEVBQUMsVUFBTyxDQUFDLGVBQ3JCViwwREFBQSxhQUFLNkMsRUFBRSxDQUFDakMsUUFBUSxFQUFDLFVBQU8sQ0FBQyxlQUN6QlosMERBQUEsMEJBQ0VBLDBEQUFBO01BQ0UyQyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtRQUFBLE9BQVFuQyxlQUFlLENBQUNGLGNBQWMsRUFBRXdDLEtBQUssQ0FBQztNQUFBLENBQUM7TUFDdERQLFNBQVMsRUFBQztJQUF1QixHQUNsQyxRQUVPLENBQ04sQ0FDRixDQUFDO0VBQUEsQ0FDTixDQUNJLENBQ0YsQ0FDSixDQUFDO0FBRVY7QUFFQSxpRUFBZXBDLFVBQVU7Ozs7Ozs7O1VDOUt6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBCdXR0b25TbWF6YXRPcGVyYWNpIG5lcG91xb7DrXbDoW0gemF0w61tXG5cbmZ1bmN0aW9uIE9wZXJhdGlvbnMoe1xuICBvcGVyYWNlLFxuICBpbmRleFByaXNwZXZrdSxcbiAgb25BZGRPcGVyYWNlLFxuICBvbkRlbGV0ZU9wZXJhY2UsXG59KSB7XG4gIC8vIE9kc3VkIHBvxI3DrXTDoW0gcHLFr23Em3IgYSB2eXR2w6HFmcOtIHNlIG1pIGplZG5vdGxpdsOpIMWZw6Fka3kgdHJhbnNha2PDrVxuICBjb25zdCBbbm92YU9wZXJhY2UsIHNldE5vdmFPcGVyYWNlXSA9IHVzZVN0YXRlKHtcbiAgICBjZW5hOiBcIlwiLFxuICAgIGt1c3k6IFwiXCIsXG4gICAgcG9wbGF0ZWs6IFwiXCIsXG4gICAgZGF0dW06IFwiXCIsXG4gIH0pO1xuXG4gIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAvLyAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcblxuICAvLyAgIHNldE5vdmFPcGVyYWNlKHsgLi4ubm92YU9wZXJhY2UsIFtuYW1lXTogdmFsdWUgfSk7XG4gIC8vIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgc2V0Tm92YU9wZXJhY2UoKHByZXYpID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgW25hbWVdOlxuICAgICAgICBuYW1lID09PSBcImNlbmFcIiB8fCBuYW1lID09PSBcImt1c3lcIiB8fCBuYW1lID09PSBcInBvcGxhdGVrXCJcbiAgICAgICAgICA/IHBhcnNlRmxvYXQodmFsdWUpXG4gICAgICAgICAgOiB2YWx1ZSxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgcHJpZGVqTm92b3VPcGVyYWNpID0gKCkgPT4ge1xuICAgIGlmICghbm92YU9wZXJhY2UuY2VuYSB8fCAhbm92YU9wZXJhY2Uua3VzeSkge1xuICAgICAgYWxlcnQoXCJWeXBsxYggY2VudSBhIHBvxI1ldCBrdXPFryFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb25BZGRPcGVyYWNlKGluZGV4UHJpc3Bldmt1LCB7XG4gICAgICBjZW5hOiBwYXJzZUZsb2F0KG5vdmFPcGVyYWNlLmNlbmEpLFxuICAgICAga3VzeTogcGFyc2VGbG9hdChub3ZhT3BlcmFjZS5rdXN5KSxcbiAgICAgIHBvcGxhdGVrOiBwYXJzZUZsb2F0KG5vdmFPcGVyYWNlLnBvcGxhdGVrKSB8fCAwLFxuICAgICAgZGF0dW06IG5vdmFPcGVyYWNlLmRhdHVtIHx8IFwiLVwiLFxuICAgIH0pO1xuXG4gICAgc2V0Tm92YU9wZXJhY2UoeyBjZW5hOiBcIlwiLCBrdXN5OiBcIlwiLCBwb3BsYXRlazogXCJcIiwgZGF0dW06IFwiXCIgfSk7XG4gIH07XG5cbiAgY29uc3Qgdnlwb2NpdGVqUHJ1bWVyID0gKCkgPT4ge1xuICAgIGxldCBuYWt1cG5pQ2VuYSA9IDA7IC8vIGNlbGtvdsOpIG7DoWtsYWR5IG5hIG7DoWt1cHlcbiAgICBsZXQgY2Vsa2VtS3VzdSA9IDA7IC8vIGFrdHXDoWxuw60gcG/EjWV0IGt1c8WvXG4gICAgbGV0IGNlbGtlbVBvcGxhdGt1ID0gMDsgLy8gc291xI1ldCB2xaFlY2ggcG9wbGF0a8WvXG5cbiAgICBvcGVyYWNlLmZvckVhY2goKHsgY2VuYSwga3VzeSwgcG9wbGF0ZWsgfSkgPT4ge1xuICAgICAgaWYgKGt1c3kgPiAwKSB7XG4gICAgICAgIC8vIE7DoWt1cDogemFwb8SNw610w6FtZSBjZW51IGkgcG9wbGF0ZWtcbiAgICAgICAgbmFrdXBuaUNlbmEgKz0gY2VuYSAqIGt1c3kgKyBwb3BsYXRlaztcbiAgICAgICAgY2Vsa2VtS3VzdSArPSBrdXN5O1xuICAgICAgICBjZWxrZW1Qb3BsYXRrdSArPSBwb3BsYXRlaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFByb2RlalxuICAgICAgICBjZWxrZW1LdXN1ICs9IGt1c3k7XG4gICAgICAgIG5ha3VwbmlDZW5hICs9IHBvcGxhdGVrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVsO9cG/EjWV0IHByxa9txJtybsOpIGNlbnk6IGNlbGtvdsOpIG7DoWtsYWR5IGTEm2xlbm8gcG/EjWV0IGt1c8WvXG4gICAgY29uc3QgcHJ1bWVybmFDZW5hID1cbiAgICAgIGNlbGtlbUt1c3UgPiAwID8gKG5ha3VwbmlDZW5hIC8gY2Vsa2VtS3VzdSkudG9GaXhlZCgyKSA6IFwiLVwiO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBydW1lcm5hQ2VuYSxcbiAgICAgIGNlbGtlbUt1c3UsXG4gICAgICBjZWxrZW1Qb3BsYXRrdSxcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICBQcsWvbcSbcm7DoSBuw6FrdXBuw60gY2VuYToge3Z5cG9jaXRlalBydW1lcigpLnBydW1lcm5hQ2VuYX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zXCI+UG/EjWV0IGt1c8WvOiB7dnlwb2NpdGVqUHJ1bWVyKCkuY2Vsa2VtS3VzdX0gPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgU291xI1ldCBwb3BsYXRrxa86IHt2eXBvY2l0ZWpQcnVtZXIoKS5jZWxrZW1Qb3BsYXRrdX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxoNj5Ob3bDoSBvcGVyYWNlPC9oNj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGctMiBhbGlnbi1pdGVtcy1jZW50ZXIgbWItM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPVwiY2VuYVwiXG4gICAgICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2UuY2VuYX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNlbmEgemEga3VzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJrdXN5XCJcbiAgICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5rdXN5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG/EjWV0IGt1c8WvXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJwb3BsYXRla1wiXG4gICAgICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2UucG9wbGF0ZWt9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb3BsYXRla1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgbmFtZT1cImRhdHVtXCJcbiAgICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5kYXR1bX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtwcmlkZWpOb3ZvdU9wZXJhY2l9PlxuICAgICAgICAgICAgUMWZaWRhdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5EYXR1bTwvdGg+XG4gICAgICAgICAgICA8dGg+VHlwPC90aD5cbiAgICAgICAgICAgIDx0aD5LdXN5PC90aD5cbiAgICAgICAgICAgIDx0aD5DZW5hPC90aD5cbiAgICAgICAgICAgIDx0aD5Qb3BsYXRlazwvdGg+XG4gICAgICAgICAgICA8dGg+QWtjZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtvcGVyYWNlLm1hcCgob3AsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDx0ZD57b3AuZGF0dW0gfHwgXCLigJRcIn08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e29wLmt1c3kgPiAwID8gXCJOw6FrdXBcIiA6IFwiUHJvZGVqXCJ9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntvcC5rdXN5fTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57b3AuY2VuYX0gS8SNPC90ZD5cbiAgICAgICAgICAgICAgPHRkPntvcC5wb3BsYXRla30gS8SNPC90ZD5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlT3BlcmFjZShpbmRleFByaXNwZXZrdSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTbWF6YXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBPcGVyYXRpb25zO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjExNTBhNjA1OGFmYjM1ZDc3MWFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk9wZXJhdGlvbnMiLCJfcmVmIiwib3BlcmFjZSIsImluZGV4UHJpc3Bldmt1Iiwib25BZGRPcGVyYWNlIiwib25EZWxldGVPcGVyYWNlIiwiX3VzZVN0YXRlIiwiY2VuYSIsImt1c3kiLCJwb3BsYXRlayIsImRhdHVtIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwibm92YU9wZXJhY2UiLCJzZXROb3ZhT3BlcmFjZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiX2V2ZW50JHRhcmdldCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXYiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwicGFyc2VGbG9hdCIsInByaWRlak5vdm91T3BlcmFjaSIsImFsZXJ0Iiwidnlwb2NpdGVqUHJ1bWVyIiwibmFrdXBuaUNlbmEiLCJjZWxrZW1LdXN1IiwiY2Vsa2VtUG9wbGF0a3UiLCJmb3JFYWNoIiwiX3JlZjIiLCJwcnVtZXJuYUNlbmEiLCJ0b0ZpeGVkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwib25DbGljayIsIm1hcCIsIm9wIiwiaW5kZXgiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9