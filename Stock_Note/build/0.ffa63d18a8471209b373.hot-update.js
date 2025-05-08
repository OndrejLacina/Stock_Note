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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f2c7d17d27db06524115")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZmE2M2QxOGE4NDcxMjA5YjM3My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNuRDs7QUFFQSxTQUFTRyxVQUFVQSxDQUFBQyxJQUFBLEVBS2hCO0VBQUEsSUFKREMsT0FBTyxHQUFBRCxJQUFBLENBQVBDLE9BQU87SUFDUEMsY0FBYyxHQUFBRixJQUFBLENBQWRFLGNBQWM7SUFDZEMsWUFBWSxHQUFBSCxJQUFBLENBQVpHLFlBQVk7SUFDWkMsZUFBZSxHQUFBSixJQUFBLENBQWZJLGVBQWU7RUFFZjtFQUNBLElBQUFDLFNBQUEsR0FBc0NSLCtDQUFRLENBQUM7TUFDN0NTLElBQUksRUFBRSxFQUFFO01BQ1JDLElBQUksRUFBRSxFQUFFO01BQ1JDLFFBQVEsRUFBRSxFQUFFO01BQ1pDLEtBQUssRUFBRTtJQUNULENBQUMsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQU4sU0FBQTtJQUxLTyxXQUFXLEdBQUFGLFVBQUE7SUFBRUcsY0FBYyxHQUFBSCxVQUFBO0VBT2xDLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxLQUFLLEVBQUs7SUFDOUIsSUFBQUMsYUFBQSxHQUF3QkQsS0FBSyxDQUFDRSxNQUFNO01BQTVCQyxJQUFJLEdBQUFGLGFBQUEsQ0FBSkUsSUFBSTtNQUFFQyxLQUFLLEdBQUFILGFBQUEsQ0FBTEcsS0FBSztJQUNuQk4sY0FBYyxDQUFBTyxhQUFBLENBQUFBLGFBQUEsS0FBTVIsV0FBVyxPQUFBUyxlQUFBLEtBQUdILElBQUksRUFBR0MsS0FBSyxFQUFFLENBQUM7RUFDbkQsQ0FBQztFQUVELElBQU1HLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUEsRUFBUztJQUMvQixJQUFJLENBQUNWLFdBQVcsQ0FBQ04sSUFBSSxJQUFJLENBQUNNLFdBQVcsQ0FBQ0wsSUFBSSxFQUFFO01BQzFDZ0IsS0FBSyxDQUFDLDBCQUEwQixDQUFDO01BQ2pDO0lBQ0Y7SUFFQXBCLFlBQVksQ0FBQ0QsY0FBYyxFQUFFO01BQzNCSSxJQUFJLEVBQUVrQixVQUFVLENBQUNaLFdBQVcsQ0FBQ04sSUFBSSxDQUFDO01BQ2xDQyxJQUFJLEVBQUVpQixVQUFVLENBQUNaLFdBQVcsQ0FBQ0wsSUFBSSxDQUFDO01BQ2xDQyxRQUFRLEVBQUVnQixVQUFVLENBQUNaLFdBQVcsQ0FBQ0osUUFBUSxDQUFDLElBQUksQ0FBQztNQUMvQ0MsS0FBSyxFQUFFRyxXQUFXLENBQUNILEtBQUssSUFBSTtJQUM5QixDQUFDLENBQUM7SUFFRkksY0FBYyxDQUFDO01BQUVQLElBQUksRUFBRSxFQUFFO01BQUVDLElBQUksRUFBRSxFQUFFO01BQUVDLFFBQVEsRUFBRSxFQUFFO01BQUVDLEtBQUssRUFBRTtJQUFHLENBQUMsQ0FBQztFQUNqRSxDQUFDO0VBRUQsSUFBTWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUFTO0lBQzVCLElBQUlDLFlBQVksR0FBRyxDQUFDO0lBQ3BCLElBQUlDLFVBQVUsR0FBRyxDQUFDO0lBRWxCMUIsT0FBTyxDQUFDMkIsT0FBTyxDQUFDLFVBQUFDLEtBQUEsRUFBOEI7TUFBQSxJQUEzQnZCLElBQUksR0FBQXVCLEtBQUEsQ0FBSnZCLElBQUk7UUFBRUMsSUFBSSxHQUFBc0IsS0FBQSxDQUFKdEIsSUFBSTtRQUFFQyxRQUFRLEdBQUFxQixLQUFBLENBQVJyQixRQUFRO01BQ3JDLElBQUlELElBQUksR0FBRyxDQUFDLEVBQUU7UUFDWm1CLFlBQVksSUFBSXBCLElBQUksR0FBR0MsSUFBSSxHQUFHQyxRQUFRO1FBQ3RDbUIsVUFBVSxJQUFJcEIsSUFBSTtNQUNwQixDQUFDLE1BQU07UUFDTDtRQUNBbUIsWUFBWSxJQUFJbEIsUUFBUTtRQUN4Qm1CLFVBQVUsSUFBSXBCLElBQUk7TUFDcEI7SUFDRixDQUFDLENBQUM7SUFDRixPQUFPb0IsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDRCxZQUFZLEdBQUdDLFVBQVUsRUFBRUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7RUFDdEUsQ0FBQztFQUVELG9CQUNFbEMsMERBQUEsMkJBQ0VBLDBEQUFBO0lBQUlvQyxTQUFTLEVBQUM7RUFBTSxHQUFDLDRDQUF1QixFQUFDUCxlQUFlLENBQUMsQ0FBTSxDQUFDLGVBQ3BFN0IsMERBQUEsYUFBSSxpQkFBZ0IsQ0FBQyxlQUNyQkEsMERBQUE7SUFBS29DLFNBQVMsRUFBQztFQUFpQyxnQkFDOUNwQywwREFBQTtJQUFLb0MsU0FBUyxFQUFDO0VBQUssZ0JBQ2xCcEMsMERBQUE7SUFDRXFDLElBQUksRUFBQyxRQUFRO0lBQ2JmLElBQUksRUFBQyxNQUFNO0lBQ1hDLEtBQUssRUFBRVAsV0FBVyxDQUFDTixJQUFLO0lBQ3hCNEIsUUFBUSxFQUFFcEIsWUFBYTtJQUN2QnFCLFdBQVcsRUFBQyxhQUFhO0lBQ3pCSCxTQUFTLEVBQUM7RUFBYyxDQUN6QixDQUNFLENBQUMsZUFDTnBDLDBEQUFBO0lBQUtvQyxTQUFTLEVBQUM7RUFBSyxnQkFDbEJwQywwREFBQTtJQUNFcUMsSUFBSSxFQUFDLFFBQVE7SUFDYmYsSUFBSSxFQUFDLE1BQU07SUFDWEMsS0FBSyxFQUFFUCxXQUFXLENBQUNMLElBQUs7SUFDeEIyQixRQUFRLEVBQUVwQixZQUFhO0lBQ3ZCcUIsV0FBVyxFQUFDLHNCQUFZO0lBQ3hCSCxTQUFTLEVBQUM7RUFBYyxDQUN6QixDQUNFLENBQUMsZUFDTnBDLDBEQUFBO0lBQUtvQyxTQUFTLEVBQUM7RUFBSyxnQkFDbEJwQywwREFBQTtJQUNFcUMsSUFBSSxFQUFDLFFBQVE7SUFDYmYsSUFBSSxFQUFDLFVBQVU7SUFDZkMsS0FBSyxFQUFFUCxXQUFXLENBQUNKLFFBQVM7SUFDNUIwQixRQUFRLEVBQUVwQixZQUFhO0lBQ3ZCcUIsV0FBVyxFQUFDLFVBQVU7SUFDdEJILFNBQVMsRUFBQztFQUFjLENBQ3pCLENBQ0UsQ0FBQyxlQUNOcEMsMERBQUE7SUFBS29DLFNBQVMsRUFBQztFQUFLLGdCQUNsQnBDLDBEQUFBO0lBQ0VxQyxJQUFJLEVBQUMsTUFBTTtJQUNYZixJQUFJLEVBQUMsT0FBTztJQUNaQyxLQUFLLEVBQUVQLFdBQVcsQ0FBQ0gsS0FBTTtJQUN6QnlCLFFBQVEsRUFBRXBCLFlBQWE7SUFDdkJrQixTQUFTLEVBQUM7RUFBYyxDQUN6QixDQUNFLENBQUMsZUFDTnBDLDBEQUFBO0lBQUtvQyxTQUFTLEVBQUM7RUFBVSxnQkFDdkJwQywwREFBQTtJQUFRb0MsU0FBUyxFQUFDLGlCQUFpQjtJQUFDSSxPQUFPLEVBQUVkO0VBQW1CLEdBQUMsYUFFekQsQ0FDTCxDQUNGLENBQUMsZUFDTjFCLDBEQUFBO0lBQU9vQyxTQUFTLEVBQUM7RUFBcUIsZ0JBQ3BDcEMsMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQSxhQUFJLE9BQVMsQ0FBQyxlQUNkQSwwREFBQSxhQUFJLEtBQU8sQ0FBQyxlQUNaQSwwREFBQSxhQUFJLE1BQVEsQ0FBQyxlQUNiQSwwREFBQSxhQUFJLE1BQVEsQ0FBQyxlQUNiQSwwREFBQSxhQUFJLFVBQVksQ0FBQyxlQUNqQkEsMERBQUEsYUFBSSxNQUFRLENBQ1YsQ0FDQyxDQUFDLGVBQ1JBLDBEQUFBLGdCQUNHSyxPQUFPLENBQUNvQyxHQUFHLENBQUMsVUFBQ0MsRUFBRSxFQUFFQyxLQUFLO0lBQUEsb0JBQ3JCM0MsMERBQUE7TUFBSTRDLEdBQUcsRUFBRUQ7SUFBTSxnQkFDYjNDLDBEQUFBLGFBQUswQyxFQUFFLENBQUM3QixLQUFLLElBQUksR0FBUSxDQUFDLGVBQzFCYiwwREFBQSxhQUFLMEMsRUFBRSxDQUFDL0IsSUFBSSxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsUUFBYSxDQUFDLGVBQzNDWCwwREFBQSxhQUFLMEMsRUFBRSxDQUFDL0IsSUFBUyxDQUFDLGVBQ2xCWCwwREFBQSxhQUFLMEMsRUFBRSxDQUFDaEMsSUFBSSxFQUFDLFVBQU8sQ0FBQyxlQUNyQlYsMERBQUEsYUFBSzBDLEVBQUUsQ0FBQzlCLFFBQVEsRUFBQyxVQUFPLENBQUMsZUFDekJaLDBEQUFBLDBCQUNFQSwwREFBQTtNQUNFd0MsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUE7UUFBQSxPQUFRaEMsZUFBZSxDQUFDRixjQUFjLEVBQUVxQyxLQUFLLENBQUM7TUFBQSxDQUFDO01BQ3REUCxTQUFTLEVBQUM7SUFBdUIsR0FDbEMsUUFFTyxDQUNOLENBQ0YsQ0FBQztFQUFBLENBQ04sQ0FDSSxDQUNGLENBQ0osQ0FBQztBQUVWO0FBRUEsaUVBQWVqQyxVQUFVOzs7Ozs7OztVQzVJekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2NvbXBvbmVudHMvT3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgQnV0dG9uU21hemF0T3BlcmFjaSBuZXBvdcW+w612w6FtIHphdMOtbVxuXG5mdW5jdGlvbiBPcGVyYXRpb25zKHtcbiAgb3BlcmFjZSxcbiAgaW5kZXhQcmlzcGV2a3UsXG4gIG9uQWRkT3BlcmFjZSxcbiAgb25EZWxldGVPcGVyYWNlLFxufSkge1xuICAvLyBPZHN1ZCBwb8SNw610w6FtIHByxa9txJtyIGEgdnl0dsOhxZnDrSBzZSBtaSBqZWRub3RsaXbDqSDFmcOhZGt5IHRyYW5zYWtjw61cbiAgY29uc3QgW25vdmFPcGVyYWNlLCBzZXROb3ZhT3BlcmFjZV0gPSB1c2VTdGF0ZSh7XG4gICAgY2VuYTogXCJcIixcbiAgICBrdXN5OiBcIlwiLFxuICAgIHBvcGxhdGVrOiBcIlwiLFxuICAgIGRhdHVtOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgc2V0Tm92YU9wZXJhY2UoeyAuLi5ub3ZhT3BlcmFjZSwgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBwcmlkZWpOb3ZvdU9wZXJhY2kgPSAoKSA9PiB7XG4gICAgaWYgKCFub3ZhT3BlcmFjZS5jZW5hIHx8ICFub3ZhT3BlcmFjZS5rdXN5KSB7XG4gICAgICBhbGVydChcIlZ5cGzFiCBjZW51IGEgcG/EjWV0IGt1c8WvIVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvbkFkZE9wZXJhY2UoaW5kZXhQcmlzcGV2a3UsIHtcbiAgICAgIGNlbmE6IHBhcnNlRmxvYXQobm92YU9wZXJhY2UuY2VuYSksXG4gICAgICBrdXN5OiBwYXJzZUZsb2F0KG5vdmFPcGVyYWNlLmt1c3kpLFxuICAgICAgcG9wbGF0ZWs6IHBhcnNlRmxvYXQobm92YU9wZXJhY2UucG9wbGF0ZWspIHx8IDAsXG4gICAgICBkYXR1bTogbm92YU9wZXJhY2UuZGF0dW0gfHwgXCItXCIsXG4gICAgfSk7XG5cbiAgICBzZXROb3ZhT3BlcmFjZSh7IGNlbmE6IFwiXCIsIGt1c3k6IFwiXCIsIHBvcGxhdGVrOiBcIlwiLCBkYXR1bTogXCJcIiB9KTtcbiAgfTtcblxuICBjb25zdCB2eXBvY2l0ZWpQcnVtZXIgPSAoKSA9PiB7XG4gICAgbGV0IHRvdGFsTmFrbGFkeSA9IDA7XG4gICAgbGV0IGNlbGtlbUt1c3UgPSAwO1xuXG4gICAgb3BlcmFjZS5mb3JFYWNoKCh7IGNlbmEsIGt1c3ksIHBvcGxhdGVrIH0pID0+IHtcbiAgICAgIGlmIChrdXN5ID4gMCkge1xuICAgICAgICB0b3RhbE5ha2xhZHkgKz0gY2VuYSAqIGt1c3kgKyBwb3BsYXRlaztcbiAgICAgICAgY2Vsa2VtS3VzdSArPSBrdXN5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcMWZaSBwcm9kZWppIHNuw63FvsOtbWUgXCJjZWxrZW1LdXN1XCIgYSBjZWxrb3bDqSBuw6FrbGFkeVxuICAgICAgICB0b3RhbE5ha2xhZHkgKz0gcG9wbGF0ZWs7XG4gICAgICAgIGNlbGtlbUt1c3UgKz0ga3VzeTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2Vsa2VtS3VzdSA+IDAgPyAodG90YWxOYWtsYWR5IC8gY2Vsa2VtS3VzdSkudG9GaXhlZCgyKSA6IFwiLVwiO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0zXCI+UHLFr23Em3Juw6EgbsOha3VwbsOtIGNlbmE6IHt2eXBvY2l0ZWpQcnVtZXIoKX08L2g1PlxuICAgICAgPGg2Pk5vdsOhIG9wZXJhY2U8L2g2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy0yIGFsaWduLWl0ZW1zLWNlbnRlciBtYi0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJjZW5hXCJcbiAgICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5jZW5hfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2VuYSB6YSBrdXNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbmFtZT1cImt1c3lcIlxuICAgICAgICAgICAgdmFsdWU9e25vdmFPcGVyYWNlLmt1c3l9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb8SNZXQga3Vzxa9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbmFtZT1cInBvcGxhdGVrXCJcbiAgICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5wb3BsYXRla31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvcGxhdGVrXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICBuYW1lPVwiZGF0dW1cIlxuICAgICAgICAgICAgdmFsdWU9e25vdmFPcGVyYWNlLmRhdHVtfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG9cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3ByaWRlak5vdm91T3BlcmFjaX0+XG4gICAgICAgICAgICBQxZlpZGF0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRhdHVtPC90aD5cbiAgICAgICAgICAgIDx0aD5UeXA8L3RoPlxuICAgICAgICAgICAgPHRoPkt1c3k8L3RoPlxuICAgICAgICAgICAgPHRoPkNlbmE8L3RoPlxuICAgICAgICAgICAgPHRoPlBvcGxhdGVrPC90aD5cbiAgICAgICAgICAgIDx0aD5Ba2NlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge29wZXJhY2UubWFwKChvcCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPHRkPntvcC5kYXR1bSB8fCBcIuKAlFwifTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57b3Aua3VzeSA+IDAgPyBcIk7DoWt1cFwiIDogXCJQcm9kZWpcIn08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e29wLmt1c3l9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntvcC5jZW5hfSBLxI08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e29wLnBvcGxhdGVrfSBLxI08L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25EZWxldGVPcGVyYWNlKGluZGV4UHJpc3Bldmt1LCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNtYXphdFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9wZXJhdGlvbnM7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmMmM3ZDE3ZDI3ZGIwNjUyNDExNVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiT3BlcmF0aW9ucyIsIl9yZWYiLCJvcGVyYWNlIiwiaW5kZXhQcmlzcGV2a3UiLCJvbkFkZE9wZXJhY2UiLCJvbkRlbGV0ZU9wZXJhY2UiLCJfdXNlU3RhdGUiLCJjZW5hIiwia3VzeSIsInBvcGxhdGVrIiwiZGF0dW0iLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJub3ZhT3BlcmFjZSIsInNldE5vdmFPcGVyYWNlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJfZXZlbnQkdGFyZ2V0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsInByaWRlak5vdm91T3BlcmFjaSIsImFsZXJ0IiwicGFyc2VGbG9hdCIsInZ5cG9jaXRlalBydW1lciIsInRvdGFsTmFrbGFkeSIsImNlbGtlbUt1c3UiLCJmb3JFYWNoIiwiX3JlZjIiLCJ0b0ZpeGVkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwib25DbGljayIsIm1hcCIsIm9wIiwiaW5kZXgiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9