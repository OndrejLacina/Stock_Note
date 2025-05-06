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
/******/ 	__webpack_require__.h = () => ("76844bdd9252b4083932")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsb0JBQ3JCN0MsMERBQUE7TUFBSThDLEdBQUcsRUFBRUQ7SUFBTSxnQkFDYjdDLDBEQUFBLGFBQUs0QyxFQUFFLENBQUMvQixLQUFLLElBQUksR0FBUSxDQUFDLGVBQzFCYiwwREFBQSxhQUFLNEMsRUFBRSxDQUFDakMsSUFBSSxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsUUFBYSxDQUFDLGVBQzNDWCwwREFBQSxhQUFLNEMsRUFBRSxDQUFDakMsSUFBUyxDQUFDLGVBQ2xCWCwwREFBQSxhQUFLNEMsRUFBRSxDQUFDbEMsSUFBSSxFQUFDLFVBQU8sQ0FBQyxlQUNyQlYsMERBQUEsYUFBSzRDLEVBQUUsQ0FBQ2hDLFFBQVEsRUFBQyxVQUFPLENBQUMsZUFDekJaLDBEQUFBLDBCQUNFQSwwREFBQTtNQUNFMEMsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUE7UUFBQSxPQUFRbEMsZUFBZSxDQUFDRixjQUFjLEVBQUV1QyxLQUFLLENBQUM7TUFBQSxDQUFDO01BQ3REUCxTQUFTLEVBQUM7SUFBdUIsR0FDbEMsUUFFTyxDQUNOLENBQ0YsQ0FBQztFQUFBLENBQ04sQ0FDSSxDQUNGLENBQ0osQ0FBQztBQUVWO0FBRUEsaUVBQWVuQyxVQUFVOzs7Ozs7OztVQ2hLekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2NvbXBvbmVudHMvT3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgQnV0dG9uU21hemF0T3BlcmFjaSBuZXBvdcW+w612w6FtIHphdMOtbVxuXG5mdW5jdGlvbiBPcGVyYXRpb25zKHtcbiAgb3BlcmFjZSxcbiAgaW5kZXhQcmlzcGV2a3UsXG4gIG9uQWRkT3BlcmFjZSxcbiAgb25EZWxldGVPcGVyYWNlLFxufSkge1xuICAvLyBPZHN1ZCBwb8SNw610w6FtIHByxa9txJtyIGEgdnl0dsOhxZnDrSBzZSBtaSBqZWRub3RsaXbDqSDFmcOhZGt5IHRyYW5zYWtjw61cbiAgY29uc3QgW25vdmFPcGVyYWNlLCBzZXROb3ZhT3BlcmFjZV0gPSB1c2VTdGF0ZSh7XG4gICAgY2VuYTogXCJcIixcbiAgICBrdXN5OiBcIlwiLFxuICAgIHBvcGxhdGVrOiBcIlwiLFxuICAgIGRhdHVtOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG5cbiAgICBzZXROb3ZhT3BlcmFjZSh7IC4uLm5vdmFPcGVyYWNlLCBbbmFtZV06IHZhbHVlIH0pO1xuICB9O1xuXG4gIGNvbnN0IHByaWRlak5vdm91T3BlcmFjaSA9ICgpID0+IHtcbiAgICBpZiAoIW5vdmFPcGVyYWNlLmNlbmEgfHwgIW5vdmFPcGVyYWNlLmt1c3kpIHtcbiAgICAgIGFsZXJ0KFwiVnlwbMWIIGNlbnUgYSBwb8SNZXQga3Vzxa8hXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9uQWRkT3BlcmFjZShpbmRleFByaXNwZXZrdSwge1xuICAgICAgY2VuYTogcGFyc2VGbG9hdChub3ZhT3BlcmFjZS5jZW5hKSxcbiAgICAgIGt1c3k6IHBhcnNlRmxvYXQobm92YU9wZXJhY2Uua3VzeSksXG4gICAgICBwb3BsYXRlazogcGFyc2VGbG9hdChub3ZhT3BlcmFjZS5wb3BsYXRlaykgfHwgMCxcbiAgICAgIGRhdHVtOiBub3ZhT3BlcmFjZS5kYXR1bSB8fCBcIi1cIixcbiAgICB9KTtcblxuICAgIHNldE5vdmFPcGVyYWNlKHsgY2VuYTogXCJcIiwga3VzeTogXCJcIiwgcG9wbGF0ZWs6IFwiXCIsIGRhdHVtOiBcIlwiIH0pO1xuICB9O1xuXG4gIGNvbnN0IHZ5cG9jaXRlalBydW1lciA9ICgpID0+IHtcbiAgICBsZXQgbmFrdXBuaUNlbmEgPSAwOyAvLyBjZWxrb3bDqSBuw6FrbGFkeSBuYSBuw6FrdXB5XG4gICAgbGV0IGNlbGtlbUt1c3UgPSAwO1xuICAgIGxldCBjZWxrZW1Qb3BsYXRrdSA9IDA7XG5cbiAgICBvcGVyYWNlLmZvckVhY2goKHsgY2VuYSwga3VzeSwgcG9wbGF0ZWsgfSkgPT4ge1xuICAgICAgaWYgKGt1c3kgPiAwKSB7XG4gICAgICAgIG5ha3VwbmlDZW5hICs9IGNlbmEgKiBrdXN5ICsgcG9wbGF0ZWs7XG4gICAgICAgIGNlbGtlbUt1c3UgKz0ga3VzeTtcbiAgICAgICAgY2Vsa2VtUG9wbGF0a3UgKz0gcG9wbGF0ZWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwxZlpIHByb2Rlamkgc27DrcW+w61tZSBcImNlbGtlbUt1c3VcIiBhIGNlbGtvdsOpIG7DoWtsYWR5XG4gICAgICAgIGNlbGtlbUt1c3UgKz0ga3VzeTtcbiAgICAgICAgbmFrdXBuaUNlbmEgKz0gcG9wbGF0ZWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcnVtZXJuYUNlbmEgPVxuICAgICAgY2Vsa2VtS3VzdSA+IDAgPyAobmFrdXBuaUNlbmEgLyBjZWxrZW1LdXN1KS50b0ZpeGVkKDIpIDogXCItXCI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJ1bWVybmFDZW5hLFxuICAgICAgY2Vsa2VtS3VzdSxcbiAgICAgIGNlbGtlbVBvcGxhdGt1LFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgIFByxa9txJtybsOhIG7DoWt1cG7DrSBjZW5hOiB7dnlwb2NpdGVqUHJ1bWVyKCkucHJ1bWVybmFDZW5hfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTNcIj5Qb8SNZXQga3Vzxa86IHt2eXBvY2l0ZWpQcnVtZXIoKS5jZWxrZW1LdXN1fSA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICBTb3XEjWV0IHBvcGxhdGvFrzoge3Z5cG9jaXRlalBydW1lcigpLmNlbGtlbVBvcGxhdGt1fVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGg2Pk5vdsOhIG9wZXJhY2U8L2g2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy0yIGFsaWduLWl0ZW1zLWNlbnRlciBtYi0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJjZW5hXCJcbiAgICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5jZW5hfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2VuYSB6YSBrdXNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbmFtZT1cImt1c3lcIlxuICAgICAgICAgICAgdmFsdWU9e25vdmFPcGVyYWNlLmt1c3l9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb8SNZXQga3Vzxa9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbmFtZT1cInBvcGxhdGVrXCJcbiAgICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5wb3BsYXRla31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvcGxhdGVrXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICBuYW1lPVwiZGF0dW1cIlxuICAgICAgICAgICAgdmFsdWU9e25vdmFPcGVyYWNlLmRhdHVtfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG9cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3ByaWRlak5vdm91T3BlcmFjaX0+XG4gICAgICAgICAgICBQxZlpZGF0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRhdHVtPC90aD5cbiAgICAgICAgICAgIDx0aD5UeXA8L3RoPlxuICAgICAgICAgICAgPHRoPkt1c3k8L3RoPlxuICAgICAgICAgICAgPHRoPkNlbmE8L3RoPlxuICAgICAgICAgICAgPHRoPlBvcGxhdGVrPC90aD5cbiAgICAgICAgICAgIDx0aD5Ba2NlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge29wZXJhY2UubWFwKChvcCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPHRkPntvcC5kYXR1bSB8fCBcIuKAlFwifTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57b3Aua3VzeSA+IDAgPyBcIk7DoWt1cFwiIDogXCJQcm9kZWpcIn08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e29wLmt1c3l9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntvcC5jZW5hfSBLxI08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e29wLnBvcGxhdGVrfSBLxI08L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25EZWxldGVPcGVyYWNlKGluZGV4UHJpc3Bldmt1LCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNtYXphdFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9wZXJhdGlvbnM7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3Njg0NGJkZDkyNTJiNDA4MzkzMlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiT3BlcmF0aW9ucyIsIl9yZWYiLCJvcGVyYWNlIiwiaW5kZXhQcmlzcGV2a3UiLCJvbkFkZE9wZXJhY2UiLCJvbkRlbGV0ZU9wZXJhY2UiLCJfdXNlU3RhdGUiLCJjZW5hIiwia3VzeSIsInBvcGxhdGVrIiwiZGF0dW0iLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJub3ZhT3BlcmFjZSIsInNldE5vdmFPcGVyYWNlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJfZXZlbnQkdGFyZ2V0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsInByaWRlak5vdm91T3BlcmFjaSIsImFsZXJ0IiwicGFyc2VGbG9hdCIsInZ5cG9jaXRlalBydW1lciIsIm5ha3VwbmlDZW5hIiwiY2Vsa2VtS3VzdSIsImNlbGtlbVBvcGxhdGt1IiwiZm9yRWFjaCIsIl9yZWYyIiwicHJ1bWVybmFDZW5hIiwidG9GaXhlZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siLCJtYXAiLCJvcCIsImluZGV4Iiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==