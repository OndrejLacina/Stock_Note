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
/******/ 	__webpack_require__.h = () => ("6b23496df1bf6c12c26a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43Njg0NGJkZDkyNTJiNDA4MzkzMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNuRDs7QUFFQSxTQUFTRyxVQUFVQSxDQUFBQyxJQUFBLEVBS2hCO0VBQUEsSUFKREMsT0FBTyxHQUFBRCxJQUFBLENBQVBDLE9BQU87SUFDUEMsY0FBYyxHQUFBRixJQUFBLENBQWRFLGNBQWM7SUFDZEMsWUFBWSxHQUFBSCxJQUFBLENBQVpHLFlBQVk7SUFDWkMsZUFBZSxHQUFBSixJQUFBLENBQWZJLGVBQWU7RUFFZjtFQUNBLElBQUFDLFNBQUEsR0FBc0NSLCtDQUFRLENBQUM7TUFDN0NTLElBQUksRUFBRSxFQUFFO01BQ1JDLElBQUksRUFBRSxFQUFFO01BQ1JDLFFBQVEsRUFBRSxFQUFFO01BQ1pDLEtBQUssRUFBRTtJQUNULENBQUMsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQU4sU0FBQTtJQUxLTyxXQUFXLEdBQUFGLFVBQUE7SUFBRUcsY0FBYyxHQUFBSCxVQUFBO0VBT2xDLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxLQUFLLEVBQUs7SUFDOUIsSUFBQUMsYUFBQSxHQUF3QkQsS0FBSyxDQUFDRSxNQUFNO01BQTVCQyxJQUFJLEdBQUFGLGFBQUEsQ0FBSkUsSUFBSTtNQUFFQyxLQUFLLEdBQUFILGFBQUEsQ0FBTEcsS0FBSztJQUVuQk4sY0FBYyxDQUFBTyxhQUFBLENBQUFBLGFBQUEsS0FBTVIsV0FBVyxPQUFBUyxlQUFBLEtBQUdILElBQUksRUFBR0MsS0FBSyxFQUFFLENBQUM7RUFDbkQsQ0FBQztFQUVELElBQU1HLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUEsRUFBUztJQUMvQixJQUFJLENBQUNWLFdBQVcsQ0FBQ04sSUFBSSxJQUFJLENBQUNNLFdBQVcsQ0FBQ0wsSUFBSSxFQUFFO01BQzFDZ0IsS0FBSyxDQUFDLDBCQUEwQixDQUFDO01BQ2pDO0lBQ0Y7SUFFQXBCLFlBQVksQ0FBQ0QsY0FBYyxFQUFFO01BQzNCSSxJQUFJLEVBQUVrQixVQUFVLENBQUNaLFdBQVcsQ0FBQ04sSUFBSSxDQUFDO01BQ2xDQyxJQUFJLEVBQUVpQixVQUFVLENBQUNaLFdBQVcsQ0FBQ0wsSUFBSSxDQUFDO01BQ2xDQyxRQUFRLEVBQUVnQixVQUFVLENBQUNaLFdBQVcsQ0FBQ0osUUFBUSxDQUFDLElBQUksQ0FBQztNQUMvQ0MsS0FBSyxFQUFFRyxXQUFXLENBQUNILEtBQUssSUFBSTtJQUM5QixDQUFDLENBQUM7SUFFRkksY0FBYyxDQUFDO01BQUVQLElBQUksRUFBRSxFQUFFO01BQUVDLElBQUksRUFBRSxFQUFFO01BQUVDLFFBQVEsRUFBRSxFQUFFO01BQUVDLEtBQUssRUFBRTtJQUFHLENBQUMsQ0FBQztFQUNqRSxDQUFDO0VBRUQsSUFBTWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUFTO0lBQzVCLElBQUlDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyQixJQUFJQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEIsSUFBSUMsY0FBYyxHQUFHLENBQUM7SUFFdEIzQixPQUFPLENBQUM0QixPQUFPLENBQUMsVUFBQUMsS0FBQSxFQUE4QjtNQUFBLElBQTNCeEIsSUFBSSxHQUFBd0IsS0FBQSxDQUFKeEIsSUFBSTtRQUFFQyxJQUFJLEdBQUF1QixLQUFBLENBQUp2QixJQUFJO1FBQUVDLFFBQVEsR0FBQXNCLEtBQUEsQ0FBUnRCLFFBQVE7TUFDckMsSUFBSUQsSUFBSSxHQUFHLENBQUMsRUFBRTtRQUNabUIsV0FBVyxJQUFJcEIsSUFBSSxHQUFHQyxJQUFJLEdBQUdDLFFBQVE7UUFDckNtQixVQUFVLElBQUlwQixJQUFJO1FBQ2xCcUIsY0FBYyxJQUFJcEIsUUFBUTtNQUM1QixDQUFDLE1BQU07UUFDTDtRQUNBbUIsVUFBVSxJQUFJcEIsSUFBSTtRQUNsQm1CLFdBQVcsSUFBSWxCLFFBQVE7TUFDekI7SUFDRixDQUFDLENBQUM7SUFFRixJQUFNdUIsWUFBWSxHQUNoQkosVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDRCxXQUFXLEdBQUdDLFVBQVUsRUFBRUssT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7SUFFOUQsT0FBTztNQUNMRCxZQUFZLEVBQVpBLFlBQVk7TUFDWkosVUFBVSxFQUFWQSxVQUFVO01BQ1ZDLGNBQWMsRUFBZEE7SUFDRixDQUFDO0VBQ0gsQ0FBQztFQUVELG9CQUNFaEMsMERBQUEsMkJBQ0VBLDBEQUFBLDJCQUNFQSwwREFBQTtJQUFHc0MsU0FBUyxFQUFDO0VBQU0sR0FBQyw0Q0FDSyxFQUFDVCxlQUFlLENBQUMsQ0FBQyxDQUFDTSxZQUN6QyxDQUFDLGVBQ0puQywwREFBQTtJQUFHc0MsU0FBUyxFQUFDO0VBQU0sR0FBQyx3QkFBWSxFQUFDVCxlQUFlLENBQUMsQ0FBQyxDQUFDRSxVQUFVLEVBQUMsR0FBSSxDQUFDLGVBQ25FL0IsMERBQUE7SUFBR3NDLFNBQVMsRUFBQztFQUFNLEdBQUMsNkJBQ0QsRUFBQ1QsZUFBZSxDQUFDLENBQUMsQ0FBQ0csY0FDbkMsQ0FDQSxDQUFDLGVBRU5oQywwREFBQSxhQUFJLGlCQUFnQixDQUFDLGVBQ3JCQSwwREFBQTtJQUFLc0MsU0FBUyxFQUFDO0VBQWlDLGdCQUM5Q3RDLDBEQUFBO0lBQUtzQyxTQUFTLEVBQUM7RUFBSyxnQkFDbEJ0QywwREFBQTtJQUNFdUMsSUFBSSxFQUFDLFFBQVE7SUFDYmpCLElBQUksRUFBQyxNQUFNO0lBQ1hDLEtBQUssRUFBRVAsV0FBVyxDQUFDTixJQUFLO0lBQ3hCOEIsUUFBUSxFQUFFdEIsWUFBYTtJQUN2QnVCLFdBQVcsRUFBQyxhQUFhO0lBQ3pCSCxTQUFTLEVBQUM7RUFBYyxDQUN6QixDQUNFLENBQUMsZUFDTnRDLDBEQUFBO0lBQUtzQyxTQUFTLEVBQUM7RUFBSyxnQkFDbEJ0QywwREFBQTtJQUNFdUMsSUFBSSxFQUFDLFFBQVE7SUFDYmpCLElBQUksRUFBQyxNQUFNO0lBQ1hDLEtBQUssRUFBRVAsV0FBVyxDQUFDTCxJQUFLO0lBQ3hCNkIsUUFBUSxFQUFFdEIsWUFBYTtJQUN2QnVCLFdBQVcsRUFBQyxzQkFBWTtJQUN4QkgsU0FBUyxFQUFDO0VBQWMsQ0FDekIsQ0FDRSxDQUFDLGVBQ050QywwREFBQTtJQUFLc0MsU0FBUyxFQUFDO0VBQUssZ0JBQ2xCdEMsMERBQUE7SUFDRXVDLElBQUksRUFBQyxRQUFRO0lBQ2JqQixJQUFJLEVBQUMsVUFBVTtJQUNmQyxLQUFLLEVBQUVQLFdBQVcsQ0FBQ0osUUFBUztJQUM1QjRCLFFBQVEsRUFBRXRCLFlBQWE7SUFDdkJ1QixXQUFXLEVBQUMsVUFBVTtJQUN0QkgsU0FBUyxFQUFDO0VBQWMsQ0FDekIsQ0FDRSxDQUFDLGVBQ050QywwREFBQTtJQUFLc0MsU0FBUyxFQUFDO0VBQUssZ0JBQ2xCdEMsMERBQUE7SUFDRXVDLElBQUksRUFBQyxNQUFNO0lBQ1hqQixJQUFJLEVBQUMsT0FBTztJQUNaQyxLQUFLLEVBQUVQLFdBQVcsQ0FBQ0gsS0FBTTtJQUN6QjJCLFFBQVEsRUFBRXRCLFlBQWE7SUFDdkJvQixTQUFTLEVBQUM7RUFBYyxDQUN6QixDQUNFLENBQUMsZUFDTnRDLDBEQUFBO0lBQUtzQyxTQUFTLEVBQUM7RUFBVSxnQkFDdkJ0QywwREFBQTtJQUFRc0MsU0FBUyxFQUFDLGlCQUFpQjtJQUFDSSxPQUFPLEVBQUVoQjtFQUFtQixHQUFDLGFBRXpELENBQ0wsQ0FDRixDQUFDLGVBQ04xQiwwREFBQTtJQUFPc0MsU0FBUyxFQUFDO0VBQXFCLGdCQUNwQ3RDLDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUEsYUFBSSxPQUFTLENBQUMsZUFDZEEsMERBQUEsYUFBSSxLQUFPLENBQUMsZUFDWkEsMERBQUEsYUFBSSxNQUFRLENBQUMsZUFDYkEsMERBQUEsYUFBSSxNQUFRLENBQUMsZUFDYkEsMERBQUEsYUFBSSxVQUFZLENBQUMsZUFDakJBLDBEQUFBLGFBQUksTUFBUSxDQUNWLENBQ0MsQ0FBQyxlQUNSQSwwREFBQSxnQkFDR0ssT0FBTyxDQUFDc0MsR0FBRyxDQUFDLFVBQUNDLEVBQUUsRUFBRUMsS0FBSztJQUFBLG9CQUNyQjdDLDBEQUFBO01BQUk4QyxHQUFHLEVBQUVEO0lBQU0sZ0JBQ2I3QywwREFBQSxhQUFLNEMsRUFBRSxDQUFDL0IsS0FBSyxJQUFJLEdBQVEsQ0FBQyxlQUMxQmIsMERBQUEsYUFBSzRDLEVBQUUsQ0FBQ2pDLElBQUksR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLFFBQWEsQ0FBQyxlQUMzQ1gsMERBQUEsYUFBSzRDLEVBQUUsQ0FBQ2pDLElBQVMsQ0FBQyxlQUNsQlgsMERBQUEsYUFBSzRDLEVBQUUsQ0FBQ2xDLElBQUksRUFBQyxVQUFPLENBQUMsZUFDckJWLDBEQUFBLGFBQUs0QyxFQUFFLENBQUNoQyxRQUFRLEVBQUMsVUFBTyxDQUFDLGVBQ3pCWiwwREFBQSwwQkFDRUEsMERBQUE7TUFDRTBDLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO1FBQUEsT0FBUWxDLGVBQWUsQ0FBQ0YsY0FBYyxFQUFFdUMsS0FBSyxDQUFDO01BQUEsQ0FBQztNQUN0RFAsU0FBUyxFQUFDO0lBQXVCLEdBQ2xDLFFBRU8sQ0FDTixDQUNGLENBQUM7RUFBQSxDQUNOLENBQ0ksQ0FDRixDQUNKLENBQUM7QUFFVjtBQUVBLGlFQUFlbkMsVUFBVTs7Ozs7Ozs7VUNoS3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9jb21wb25lbnRzL09wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IEJ1dHRvblNtYXphdE9wZXJhY2kgbmVwb3XFvsOtdsOhbSB6YXTDrW1cblxuZnVuY3Rpb24gT3BlcmF0aW9ucyh7XG4gIG9wZXJhY2UsXG4gIGluZGV4UHJpc3Bldmt1LFxuICBvbkFkZE9wZXJhY2UsXG4gIG9uRGVsZXRlT3BlcmFjZSxcbn0pIHtcbiAgLy8gT2RzdWQgcG/EjcOtdMOhbSBwcsWvbcSbciBhIHZ5dHbDocWZw60gc2UgbWkgamVkbm90bGl2w6kgxZnDoWRreSB0cmFuc2FrY8OtXG4gIGNvbnN0IFtub3ZhT3BlcmFjZSwgc2V0Tm92YU9wZXJhY2VdID0gdXNlU3RhdGUoe1xuICAgIGNlbmE6IFwiXCIsXG4gICAga3VzeTogXCJcIixcbiAgICBwb3BsYXRlazogXCJcIixcbiAgICBkYXR1bTogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgc2V0Tm92YU9wZXJhY2UoeyAuLi5ub3ZhT3BlcmFjZSwgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBwcmlkZWpOb3ZvdU9wZXJhY2kgPSAoKSA9PiB7XG4gICAgaWYgKCFub3ZhT3BlcmFjZS5jZW5hIHx8ICFub3ZhT3BlcmFjZS5rdXN5KSB7XG4gICAgICBhbGVydChcIlZ5cGzFiCBjZW51IGEgcG/EjWV0IGt1c8WvIVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvbkFkZE9wZXJhY2UoaW5kZXhQcmlzcGV2a3UsIHtcbiAgICAgIGNlbmE6IHBhcnNlRmxvYXQobm92YU9wZXJhY2UuY2VuYSksXG4gICAgICBrdXN5OiBwYXJzZUZsb2F0KG5vdmFPcGVyYWNlLmt1c3kpLFxuICAgICAgcG9wbGF0ZWs6IHBhcnNlRmxvYXQobm92YU9wZXJhY2UucG9wbGF0ZWspIHx8IDAsXG4gICAgICBkYXR1bTogbm92YU9wZXJhY2UuZGF0dW0gfHwgXCItXCIsXG4gICAgfSk7XG5cbiAgICBzZXROb3ZhT3BlcmFjZSh7IGNlbmE6IFwiXCIsIGt1c3k6IFwiXCIsIHBvcGxhdGVrOiBcIlwiLCBkYXR1bTogXCJcIiB9KTtcbiAgfTtcblxuICBjb25zdCB2eXBvY2l0ZWpQcnVtZXIgPSAoKSA9PiB7XG4gICAgbGV0IG5ha3VwbmlDZW5hID0gMDsgLy8gY2Vsa292w6kgbsOha2xhZHkgbmEgbsOha3VweVxuICAgIGxldCBjZWxrZW1LdXN1ID0gMDsgLy8gYWt0dcOhbG7DrSBwb8SNZXQga3Vzxa9cbiAgICBsZXQgY2Vsa2VtUG9wbGF0a3UgPSAwO1xuXG4gICAgb3BlcmFjZS5mb3JFYWNoKCh7IGNlbmEsIGt1c3ksIHBvcGxhdGVrIH0pID0+IHtcbiAgICAgIGlmIChrdXN5ID4gMCkge1xuICAgICAgICBuYWt1cG5pQ2VuYSArPSBjZW5hICoga3VzeSArIHBvcGxhdGVrO1xuICAgICAgICBjZWxrZW1LdXN1ICs9IGt1c3k7XG4gICAgICAgIGNlbGtlbVBvcGxhdGt1ICs9IHBvcGxhdGVrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcMWZaSBwcm9kZWppIHNuw63FvsOtbWUgXCJjZWxrZW1LdXN1XCIgYSBjZWxrb3bDqSBuw6FrbGFkeVxuICAgICAgICBjZWxrZW1LdXN1ICs9IGt1c3k7XG4gICAgICAgIG5ha3VwbmlDZW5hICs9IHBvcGxhdGVrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJ1bWVybmFDZW5hID1cbiAgICAgIGNlbGtlbUt1c3UgPiAwID8gKG5ha3VwbmlDZW5hIC8gY2Vsa2VtS3VzdSkudG9GaXhlZCgyKSA6IFwiLVwiO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBydW1lcm5hQ2VuYSxcbiAgICAgIGNlbGtlbUt1c3UsXG4gICAgICBjZWxrZW1Qb3BsYXRrdSxcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICBQcsWvbcSbcm7DoSBuw6FrdXBuw60gY2VuYToge3Z5cG9jaXRlalBydW1lcigpLnBydW1lcm5hQ2VuYX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zXCI+UG/EjWV0IGt1c8WvOiB7dnlwb2NpdGVqUHJ1bWVyKCkuY2Vsa2VtS3VzdX0gPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgU291xI1ldCBwb3BsYXRrxa86IHt2eXBvY2l0ZWpQcnVtZXIoKS5jZWxrZW1Qb3BsYXRrdX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxoNj5Ob3bDoSBvcGVyYWNlPC9oNj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGctMiBhbGlnbi1pdGVtcy1jZW50ZXIgbWItM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPVwiY2VuYVwiXG4gICAgICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2UuY2VuYX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNlbmEgemEga3VzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJrdXN5XCJcbiAgICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5rdXN5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG/EjWV0IGt1c8WvXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJwb3BsYXRla1wiXG4gICAgICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2UucG9wbGF0ZWt9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb3BsYXRla1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgbmFtZT1cImRhdHVtXCJcbiAgICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5kYXR1bX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtwcmlkZWpOb3ZvdU9wZXJhY2l9PlxuICAgICAgICAgICAgUMWZaWRhdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5EYXR1bTwvdGg+XG4gICAgICAgICAgICA8dGg+VHlwPC90aD5cbiAgICAgICAgICAgIDx0aD5LdXN5PC90aD5cbiAgICAgICAgICAgIDx0aD5DZW5hPC90aD5cbiAgICAgICAgICAgIDx0aD5Qb3BsYXRlazwvdGg+XG4gICAgICAgICAgICA8dGg+QWtjZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtvcGVyYWNlLm1hcCgob3AsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDx0ZD57b3AuZGF0dW0gfHwgXCLigJRcIn08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e29wLmt1c3kgPiAwID8gXCJOw6FrdXBcIiA6IFwiUHJvZGVqXCJ9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPntvcC5rdXN5fTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57b3AuY2VuYX0gS8SNPC90ZD5cbiAgICAgICAgICAgICAgPHRkPntvcC5wb3BsYXRla30gS8SNPC90ZD5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlT3BlcmFjZShpbmRleFByaXNwZXZrdSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTbWF6YXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBPcGVyYXRpb25zO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmIyMzQ5NmRmMWJmNmMxMmMyNmFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk9wZXJhdGlvbnMiLCJfcmVmIiwib3BlcmFjZSIsImluZGV4UHJpc3Bldmt1Iiwib25BZGRPcGVyYWNlIiwib25EZWxldGVPcGVyYWNlIiwiX3VzZVN0YXRlIiwiY2VuYSIsImt1c3kiLCJwb3BsYXRlayIsImRhdHVtIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwibm92YU9wZXJhY2UiLCJzZXROb3ZhT3BlcmFjZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiX2V2ZW50JHRhcmdldCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJwcmlkZWpOb3ZvdU9wZXJhY2kiLCJhbGVydCIsInBhcnNlRmxvYXQiLCJ2eXBvY2l0ZWpQcnVtZXIiLCJuYWt1cG5pQ2VuYSIsImNlbGtlbUt1c3UiLCJjZWxrZW1Qb3BsYXRrdSIsImZvckVhY2giLCJfcmVmMiIsInBydW1lcm5hQ2VuYSIsInRvRml4ZWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIiwibWFwIiwib3AiLCJpbmRleCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=