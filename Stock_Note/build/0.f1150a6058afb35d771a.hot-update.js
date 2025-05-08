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
      cena: novaOperace.cena,
      kusy: novaOperace.kusy,
      poplatek: novaOperace.poplatek || 0,
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
/******/ 	__webpack_require__.h = () => ("44ed1fdef05b36d007ff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxhQUFJLFVBQVksQ0FBQyxlQUNqQkEsMERBQUEsYUFBSSxNQUFRLENBQ1YsQ0FDQyxDQUFDLGVBQ1JBLDBEQUFBLGdCQUNHSyxPQUFPLENBQUN1QyxHQUFHLENBQUMsVUFBQ0MsRUFBRSxFQUFFQyxLQUFLO0lBQUEsb0JBQ3JCOUMsMERBQUE7TUFBSStDLEdBQUcsRUFBRUQ7SUFBTSxnQkFDYjlDLDBEQUFBLGFBQUs2QyxFQUFFLENBQUNoQyxLQUFLLElBQUksR0FBUSxDQUFDLGVBQzFCYiwwREFBQSxhQUFLNkMsRUFBRSxDQUFDbEMsSUFBSSxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsUUFBYSxDQUFDLGVBQzNDWCwwREFBQSxhQUFLNkMsRUFBRSxDQUFDbEMsSUFBUyxDQUFDLGVBQ2xCWCwwREFBQSxhQUFLNkMsRUFBRSxDQUFDbkMsSUFBSSxFQUFDLFVBQU8sQ0FBQyxlQUNyQlYsMERBQUEsYUFBSzZDLEVBQUUsQ0FBQ2pDLFFBQVEsRUFBQyxVQUFPLENBQUMsZUFDekJaLDBEQUFBLDBCQUNFQSwwREFBQTtNQUNFMkMsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUE7UUFBQSxPQUFRbkMsZUFBZSxDQUFDRixjQUFjLEVBQUV3QyxLQUFLLENBQUM7TUFBQSxDQUFDO01BQ3REUCxTQUFTLEVBQUM7SUFBdUIsR0FDbEMsUUFFTyxDQUNOLENBQ0YsQ0FBQztFQUFBLENBQ04sQ0FDSSxDQUNGLENBQ0osQ0FBQztBQUVWO0FBRUEsaUVBQWVwQyxVQUFVOzs7Ozs7OztVQzlLekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2NvbXBvbmVudHMvT3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgQnV0dG9uU21hemF0T3BlcmFjaSBuZXBvdcW+w612w6FtIHphdMOtbVxuXG5mdW5jdGlvbiBPcGVyYXRpb25zKHtcbiAgb3BlcmFjZSxcbiAgaW5kZXhQcmlzcGV2a3UsXG4gIG9uQWRkT3BlcmFjZSxcbiAgb25EZWxldGVPcGVyYWNlLFxufSkge1xuICAvLyBPZHN1ZCBwb8SNw610w6FtIHByxa9txJtyIGEgdnl0dsOhxZnDrSBzZSBtaSBqZWRub3RsaXbDqSDFmcOhZGt5IHRyYW5zYWtjw61cbiAgY29uc3QgW25vdmFPcGVyYWNlLCBzZXROb3ZhT3BlcmFjZV0gPSB1c2VTdGF0ZSh7XG4gICAgY2VuYTogXCJcIixcbiAgICBrdXN5OiBcIlwiLFxuICAgIHBvcGxhdGVrOiBcIlwiLFxuICAgIGRhdHVtOiBcIlwiLFxuICB9KTtcblxuICAvLyBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgLy8gICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG5cbiAgLy8gICBzZXROb3ZhT3BlcmFjZSh7IC4uLm5vdmFPcGVyYWNlLCBbbmFtZV06IHZhbHVlIH0pO1xuICAvLyB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcblxuICAgIHNldE5vdmFPcGVyYWNlKChwcmV2KSA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIFtuYW1lXTpcbiAgICAgICAgbmFtZSA9PT0gXCJjZW5hXCIgfHwgbmFtZSA9PT0gXCJrdXN5XCIgfHwgbmFtZSA9PT0gXCJwb3BsYXRla1wiXG4gICAgICAgICAgPyBwYXJzZUZsb2F0KHZhbHVlKVxuICAgICAgICAgIDogdmFsdWUsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IHByaWRlak5vdm91T3BlcmFjaSA9ICgpID0+IHtcbiAgICBpZiAoIW5vdmFPcGVyYWNlLmNlbmEgfHwgIW5vdmFPcGVyYWNlLmt1c3kpIHtcbiAgICAgIGFsZXJ0KFwiVnlwbMWIIGNlbnUgYSBwb8SNZXQga3Vzxa8hXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9uQWRkT3BlcmFjZShpbmRleFByaXNwZXZrdSwge1xuICAgICAgY2VuYTogbm92YU9wZXJhY2UuY2VuYSxcbiAgICAgIGt1c3k6IG5vdmFPcGVyYWNlLmt1c3ksXG4gICAgICBwb3BsYXRlazogbm92YU9wZXJhY2UucG9wbGF0ZWsgfHwgMCxcbiAgICAgIGRhdHVtOiBub3ZhT3BlcmFjZS5kYXR1bSB8fCBcIi1cIixcbiAgICB9KTtcblxuICAgIHNldE5vdmFPcGVyYWNlKHsgY2VuYTogXCJcIiwga3VzeTogXCJcIiwgcG9wbGF0ZWs6IFwiXCIsIGRhdHVtOiBcIlwiIH0pO1xuICB9O1xuXG4gIGNvbnN0IHZ5cG9jaXRlalBydW1lciA9ICgpID0+IHtcbiAgICBsZXQgbmFrdXBuaUNlbmEgPSAwOyAvLyBjZWxrb3bDqSBuw6FrbGFkeSBuYSBuw6FrdXB5XG4gICAgbGV0IGNlbGtlbUt1c3UgPSAwOyAvLyBha3R1w6FsbsOtIHBvxI1ldCBrdXPFr1xuICAgIGxldCBjZWxrZW1Qb3BsYXRrdSA9IDA7IC8vIHNvdcSNZXQgdsWhZWNoIHBvcGxhdGvFr1xuXG4gICAgb3BlcmFjZS5mb3JFYWNoKCh7IGNlbmEsIGt1c3ksIHBvcGxhdGVrIH0pID0+IHtcbiAgICAgIGlmIChrdXN5ID4gMCkge1xuICAgICAgICAvLyBOw6FrdXA6IHphcG/EjcOtdMOhbWUgY2VudSBpIHBvcGxhdGVrXG4gICAgICAgIG5ha3VwbmlDZW5hICs9IGNlbmEgKiBrdXN5ICsgcG9wbGF0ZWs7XG4gICAgICAgIGNlbGtlbUt1c3UgKz0ga3VzeTtcbiAgICAgICAgY2Vsa2VtUG9wbGF0a3UgKz0gcG9wbGF0ZWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQcm9kZWpcbiAgICAgICAgY2Vsa2VtS3VzdSArPSBrdXN5O1xuICAgICAgICBuYWt1cG5pQ2VuYSArPSBwb3BsYXRlaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFbDvXBvxI1ldCBwcsWvbcSbcm7DqSBjZW55OiBjZWxrb3bDqSBuw6FrbGFkeSBkxJtsZW5vIHBvxI1ldCBrdXPFr1xuICAgIGNvbnN0IHBydW1lcm5hQ2VuYSA9XG4gICAgICBjZWxrZW1LdXN1ID4gMCA/IChuYWt1cG5pQ2VuYSAvIGNlbGtlbUt1c3UpLnRvRml4ZWQoMikgOiBcIi1cIjtcblxuICAgIHJldHVybiB7XG4gICAgICBwcnVtZXJuYUNlbmEsXG4gICAgICBjZWxrZW1LdXN1LFxuICAgICAgY2Vsa2VtUG9wbGF0a3UsXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgUHLFr23Em3Juw6EgbsOha3VwbsOtIGNlbmE6IHt2eXBvY2l0ZWpQcnVtZXIoKS5wcnVtZXJuYUNlbmF9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItM1wiPlBvxI1ldCBrdXPFrzoge3Z5cG9jaXRlalBydW1lcigpLmNlbGtlbUt1c3V9IDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgIFNvdcSNZXQgcG9wbGF0a8WvOiB7dnlwb2NpdGVqUHJ1bWVyKCkuY2Vsa2VtUG9wbGF0a3V9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aDY+Tm92w6Egb3BlcmFjZTwvaDY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBnLTIgYWxpZ24taXRlbXMtY2VudGVyIG1iLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbmFtZT1cImNlbmFcIlxuICAgICAgICAgICAgdmFsdWU9e25vdmFPcGVyYWNlLmNlbmF9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDZW5hIHphIGt1c1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPVwia3VzeVwiXG4gICAgICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2Uua3VzeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvxI1ldCBrdXPFr1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPVwicG9wbGF0ZWtcIlxuICAgICAgICAgICAgdmFsdWU9e25vdmFPcGVyYWNlLnBvcGxhdGVrfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9wbGF0ZWtcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgIG5hbWU9XCJkYXR1bVwiXG4gICAgICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2UuZGF0dW19XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0b1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17cHJpZGVqTm92b3VPcGVyYWNpfT5cbiAgICAgICAgICAgIFDFmWlkYXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RGF0dW08L3RoPlxuICAgICAgICAgICAgPHRoPlR5cDwvdGg+XG4gICAgICAgICAgICA8dGg+S3VzeTwvdGg+XG4gICAgICAgICAgICA8dGg+Q2VuYTwvdGg+XG4gICAgICAgICAgICA8dGg+UG9wbGF0ZWs8L3RoPlxuICAgICAgICAgICAgPHRoPkFrY2U8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7b3BlcmFjZS5tYXAoKG9wLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8dGQ+e29wLmRhdHVtIHx8IFwi4oCUXCJ9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntvcC5rdXN5ID4gMCA/IFwiTsOha3VwXCIgOiBcIlByb2RlalwifTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57b3Aua3VzeX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e29wLmNlbmF9IEvEjTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57b3AucG9wbGF0ZWt9IEvEjTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZU9wZXJhY2UoaW5kZXhQcmlzcGV2a3UsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWRhbmdlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU21hemF0XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3BlcmF0aW9ucztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ0ZWQxZmRlZjA1YjM2ZDAwN2ZmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJPcGVyYXRpb25zIiwiX3JlZiIsIm9wZXJhY2UiLCJpbmRleFByaXNwZXZrdSIsIm9uQWRkT3BlcmFjZSIsIm9uRGVsZXRlT3BlcmFjZSIsIl91c2VTdGF0ZSIsImNlbmEiLCJrdXN5IiwicG9wbGF0ZWsiLCJkYXR1bSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm5vdmFPcGVyYWNlIiwic2V0Tm92YU9wZXJhY2UiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIl9ldmVudCR0YXJnZXQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2IiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsInBhcnNlRmxvYXQiLCJwcmlkZWpOb3ZvdU9wZXJhY2kiLCJhbGVydCIsInZ5cG9jaXRlalBydW1lciIsIm5ha3VwbmlDZW5hIiwiY2Vsa2VtS3VzdSIsImNlbGtlbVBvcGxhdGt1IiwiZm9yRWFjaCIsIl9yZWYyIiwicHJ1bWVybmFDZW5hIiwidG9GaXhlZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siLCJtYXAiLCJvcCIsImluZGV4Iiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==