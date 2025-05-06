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
  var smazOperaci = function smazOperaci(idx) {
    setOperace(operace.filter(function (_, i) {
      return i !== idx;
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "mb-3"
  }, "Pr\u016Fm\u011Brn\xE1 n\xE1kupn\xED cena: ", vypocitejPrumer()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Nov\xE1 operace"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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

/***/ }),

/***/ 43:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);


function PrispevekAkcie(_ref) {
  var prispevek = _ref.prispevek,
    index = _ref.index,
    onDelete = _ref.onDelete,
    onAddOperace = _ref.onAddOperace,
    onDeleteOperace = _ref.onDeleteOperace;
  // tady budu mít prázdný pole aka [] a sem budu pushovat po kliknutí na zadání akcie, zadání příspěvěku, sem to potřebuju odeslat a to se pak odešle do app.js celá tato funkce --- NA KOMUNIKACI MEZI KOMPONENTAMI POUŽÍVÁM `PROPS` - PROPS  nemusím pouřívat jen jako atributy těch html značek, ale můžu je použít i ve funkcích

  // Kód pro přidání jednotlivé operace Nákup/Prodej pro akcii

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
    className: "card m-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, prispevek.ticker), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-danger btn-sm",
    onClick: onDelete
  }, "Vymazat akcii")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Operations__WEBPACK_IMPORTED_MODULE_1__["default"], {
    operace: prispevek.operace,
    indexPrispevku: index,
    onAddOperace: onAddOperace,
    onDeleteOperace: onDeleteOperace
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrispevekAkcie);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("17b3ec94304ddc6fdb53")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxNQUFXLENBQUMsZUFDM0J4RCwwREFBQTtJQUFRMEMsU0FBUyxFQUFDLHVCQUF1QjtJQUFDSSxPQUFPLEVBQUVPO0VBQVMsR0FBQyxlQUVyRCxDQUNMLENBQUMsZUFDTnJELDBEQUFBO0lBQUswQyxTQUFTLEVBQUM7RUFBVyxnQkFDeEIxQywwREFBQSxDQUFDRyxtREFBVTtJQUNURSxPQUFPLEVBQUUrQyxTQUFTLENBQUMvQyxPQUFRO0lBQzNCQyxjQUFjLEVBQUUyQyxLQUFNO0lBQ3RCMUMsWUFBWSxFQUFFQSxZQUFhO0lBQzNCQyxlQUFlLEVBQUVBO0VBQWdCLENBQ2xDLENBQ0UsQ0FDRixDQUFDO0FBRVY7QUFFQSxpRUFBZTJDLGNBQWM7Ozs7Ozs7O1VDL0M3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvY29tcG9uZW50cy9QcmlzcGV2ZWtBa2NpZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgQnV0dG9uU21hemF0T3BlcmFjaSBuZXBvdcW+w612w6FtIHphdMOtbVxuXG5mdW5jdGlvbiBPcGVyYXRpb25zKHtcbiAgb3BlcmFjZSxcbiAgaW5kZXhQcmlzcGV2a3UsXG4gIG9uQWRkT3BlcmFjZSxcbiAgb25EZWxldGVPcGVyYWNlLFxufSkge1xuICAvLyBPZHN1ZCBwb8SNw610w6FtIHByxa9txJtyIGEgdnl0dsOhxZnDrSBzZSBtaSBqZWRub3RsaXbDqSDFmcOhZGt5IHRyYW5zYWtjw61cbiAgY29uc3QgW25vdmFPcGVyYWNlLCBzZXROb3ZhT3BlcmFjZV0gPSB1c2VTdGF0ZSh7XG4gICAgY2VuYTogXCJcIixcbiAgICBrdXN5OiBcIlwiLFxuICAgIHBvcGxhdGVrOiBcIlwiLFxuICAgIGRhdHVtOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgc2V0Tm92YU9wZXJhY2UoeyAuLi5ub3ZhT3BlcmFjZSwgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBwcmlkZWpOb3ZvdU9wZXJhY2kgPSAoKSA9PiB7XG4gICAgaWYgKCFub3ZhT3BlcmFjZS5jZW5hIHx8ICFub3ZhT3BlcmFjZS5rdXN5KSB7XG4gICAgICBhbGVydChcIlZ5cGzFiCBjZW51IGEgcG/EjWV0IGt1c8WvIVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvbkFkZE9wZXJhY2UoaW5kZXhQcmlzcGV2a3UsIHtcbiAgICAgIGNlbmE6IHBhcnNlRmxvYXQobm92YU9wZXJhY2UuY2VuYSksXG4gICAgICBrdXN5OiBwYXJzZUZsb2F0KG5vdmFPcGVyYWNlLmt1c3kpLFxuICAgICAgcG9wbGF0ZWs6IHBhcnNlRmxvYXQobm92YU9wZXJhY2UucG9wbGF0ZWspIHx8IDAsXG4gICAgICBkYXR1bTogbm92YU9wZXJhY2UuZGF0dW0gfHwgXCItXCIsXG4gICAgfSk7XG5cbiAgICBzZXROb3ZhT3BlcmFjZSh7IGNlbmE6IFwiXCIsIGt1c3k6IFwiXCIsIHBvcGxhdGVrOiBcIlwiLCBkYXR1bTogXCJcIiB9KTtcbiAgfTtcblxuICBjb25zdCB2eXBvY2l0ZWpQcnVtZXIgPSAoKSA9PiB7XG4gICAgbGV0IHRvdGFsTmFrbGFkeSA9IDA7XG4gICAgbGV0IGNlbGtlbUt1c3UgPSAwO1xuXG4gICAgb3BlcmFjZS5mb3JFYWNoKCh7IGNlbmEsIGt1c3ksIHBvcGxhdGVrIH0pID0+IHtcbiAgICAgIGlmIChrdXN5ID4gMCkge1xuICAgICAgICB0b3RhbE5ha2xhZHkgKz0gY2VuYSAqIGt1c3kgKyBwb3BsYXRlaztcbiAgICAgICAgY2Vsa2VtS3VzdSArPSBrdXN5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcMWZaSBwcm9kZWppIHNuw63FvsOtbWUgXCJjZWxrZW1LdXN1XCIgYSBjZWxrb3bDqSBuw6FrbGFkeVxuICAgICAgICB0b3RhbE5ha2xhZHkgKz0gcG9wbGF0ZWs7XG4gICAgICAgIGNlbGtlbUt1c3UgKz0ga3VzeTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2Vsa2VtS3VzdSA+IDAgPyAodG90YWxOYWtsYWR5IC8gY2Vsa2VtS3VzdSkudG9GaXhlZCgyKSA6IFwiLVwiO1xuICB9O1xuXG4gIGNvbnN0IHNtYXpPcGVyYWNpID0gKGlkeCkgPT4ge1xuICAgIHNldE9wZXJhY2Uob3BlcmFjZS5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGlkeCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0zXCI+UHLFr23Em3Juw6EgbsOha3VwbsOtIGNlbmE6IHt2eXBvY2l0ZWpQcnVtZXIoKX08L2g1PlxuICAgICAgPGg2Pk5vdsOhIG9wZXJhY2U8L2g2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy0yIGFsaWduLWl0ZW1zLWNlbnRlciBtYi0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJjZW5hXCJcbiAgICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5jZW5hfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2VuYSB6YSBrdXNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbmFtZT1cImt1c3lcIlxuICAgICAgICAgICAgdmFsdWU9e25vdmFPcGVyYWNlLmt1c3l9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb8SNZXQga3Vzxa9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbmFtZT1cInBvcGxhdGVrXCJcbiAgICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5wb3BsYXRla31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvcGxhdGVrXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICBuYW1lPVwiZGF0dW1cIlxuICAgICAgICAgICAgdmFsdWU9e25vdmFPcGVyYWNlLmRhdHVtfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG9cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3ByaWRlak5vdm91T3BlcmFjaX0+XG4gICAgICAgICAgICBQxZlpZGF0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRhdHVtPC90aD5cbiAgICAgICAgICAgIDx0aD5UeXA8L3RoPlxuICAgICAgICAgICAgPHRoPkt1c3k8L3RoPlxuICAgICAgICAgICAgPHRoPkNlbmE8L3RoPlxuICAgICAgICAgICAgPHRoPlBvcGxhdGVrPC90aD5cbiAgICAgICAgICAgIDx0aD5Ba2NlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge29wZXJhY2UubWFwKChvcCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPHRkPntvcC5kYXR1bSB8fCBcIuKAlFwifTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57b3Aua3VzeSA+IDAgPyBcIk7DoWt1cFwiIDogXCJQcm9kZWpcIn08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e29wLmt1c3l9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntvcC5jZW5hfSBLxI08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e29wLnBvcGxhdGVrfSBLxI08L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25EZWxldGVPcGVyYWNlKGluZGV4UHJpc3Bldmt1LCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNtYXphdFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9wZXJhdGlvbnM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE9wZXJhdGlvbnMgZnJvbSBcIi4vT3BlcmF0aW9uc1wiO1xuXG5mdW5jdGlvbiBQcmlzcGV2ZWtBa2NpZSh7XG4gIHByaXNwZXZlayxcbiAgaW5kZXgsXG4gIG9uRGVsZXRlLFxuICBvbkFkZE9wZXJhY2UsXG4gIG9uRGVsZXRlT3BlcmFjZSxcbn0pIHtcbiAgLy8gdGFkeSBidWR1IG3DrXQgcHLDoXpkbsO9IHBvbGUgYWthIFtdIGEgc2VtIGJ1ZHUgcHVzaG92YXQgcG8ga2xpa251dMOtIG5hIHphZMOhbsOtIGFrY2llLCB6YWTDoW7DrSBwxZnDrXNwxJt2xJtrdSwgc2VtIHRvIHBvdMWZZWJ1anUgb2Rlc2xhdCBhIHRvIHNlIHBhayBvZGXFoWxlIGRvIGFwcC5qcyBjZWzDoSB0YXRvIGZ1bmtjZSAtLS0gTkEgS09NVU5JS0FDSSBNRVpJIEtPTVBPTkVOVEFNSSBQT1XFvcONVsOBTSBgUFJPUFNgIC0gUFJPUFMgIG5lbXVzw61tIHBvdcWZw612YXQgamVuIGpha28gYXRyaWJ1dHkgdMSbY2ggaHRtbCB6bmHEjWVrLCBhbGUgbcWvxb51IGplIHBvdcW+w610IGkgdmUgZnVua2PDrWNoXG5cbiAgLy8gS8OzZCBwcm8gcMWZaWTDoW7DrSBqZWRub3RsaXbDqSBvcGVyYWNlIE7DoWt1cC9Qcm9kZWogcHJvIGFrY2lpXG5cbiAgLy8gMS4gcGFyYW1ldHIgLSBjYWxsYmFja1xuICAvLyAyLiBwYXJhbXRlciAtIGRlcGVuZGVuY2llcyAtIHrDoXZpc2xvc3RpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gbW91bnQga29tcG9uZW50dVxuICAgIGNvbnNvbGUubG9nKFwiUHJpc3BldmVrIHphxI1hbCBjZXN0dVwiKTtcblxuICAgIC8vIHVubW91bnQga29tcG9uZW50dVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBhbGVydChcIlByaXNwZXbEm2sgc2UgdnltYcW+ZVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicHJpc3BldmVrIHphbmlrbFwiKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbS0zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGg1PntwcmlzcGV2ZWsudGlja2VyfTwvaDU+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIgb25DbGljaz17b25EZWxldGV9PlxuICAgICAgICAgIFZ5bWF6YXQgYWtjaWlcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxPcGVyYXRpb25zXG4gICAgICAgICAgb3BlcmFjZT17cHJpc3BldmVrLm9wZXJhY2V9XG4gICAgICAgICAgaW5kZXhQcmlzcGV2a3U9e2luZGV4fVxuICAgICAgICAgIG9uQWRkT3BlcmFjZT17b25BZGRPcGVyYWNlfVxuICAgICAgICAgIG9uRGVsZXRlT3BlcmFjZT17b25EZWxldGVPcGVyYWNlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaXNwZXZla0FrY2llO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTdiM2VjOTQzMDRkZGM2ZmRiNTNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk9wZXJhdGlvbnMiLCJfcmVmIiwib3BlcmFjZSIsImluZGV4UHJpc3Bldmt1Iiwib25BZGRPcGVyYWNlIiwib25EZWxldGVPcGVyYWNlIiwiX3VzZVN0YXRlIiwiY2VuYSIsImt1c3kiLCJwb3BsYXRlayIsImRhdHVtIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwibm92YU9wZXJhY2UiLCJzZXROb3ZhT3BlcmFjZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiX2V2ZW50JHRhcmdldCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJwcmlkZWpOb3ZvdU9wZXJhY2kiLCJhbGVydCIsInBhcnNlRmxvYXQiLCJ2eXBvY2l0ZWpQcnVtZXIiLCJ0b3RhbE5ha2xhZHkiLCJjZWxrZW1LdXN1IiwiZm9yRWFjaCIsIl9yZWYyIiwidG9GaXhlZCIsInNtYXpPcGVyYWNpIiwiaWR4Iiwic2V0T3BlcmFjZSIsImZpbHRlciIsIl8iLCJpIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwib25DbGljayIsIm1hcCIsIm9wIiwiaW5kZXgiLCJrZXkiLCJQcmlzcGV2ZWtBa2NpZSIsInByaXNwZXZlayIsIm9uRGVsZXRlIiwiY29uc29sZSIsImxvZyIsInRpY2tlciJdLCJzb3VyY2VSb290IjoiIn0=