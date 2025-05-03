"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ButtonSmazatOperaci__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
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


function PrispevekAkcie(_ref) {
  var text = _ref.text,
    onDelete = _ref.onDelete;
  // tady budu mít prázdný pole aka [] a sem budu pushovat po kliknutí na zadání akcie, zadání příspěvěku, sem to potřebuju odeslat a to se pak odešle do app.js celá tato funkce --- NA KOMUNIKACI MEZI KOMPONENTAMI POUŽÍVÁM `PROPS` - PROPS  nemusím pouřívat jen jako atributy těch html značek, ale můžu je použít i ve funkcích

  // Kód pro přidání jednotlivé operace Nákup/Prodej pro akcii
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
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Pr\u016Fm\u011Brn\xE1 n\xE1kupn\xED cena: ", vypocitejPrumer(), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "action-btn action-delete",
    onClick: onDelete
  }, "Vymazat")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Nov\xE1 operace"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrispevekAkcie);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c791f9bc904badb40a7f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iNzY4NTllZWYxNWI5ODc1MDM4ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0s7QUFFeEQsU0FBU0ksY0FBY0EsQ0FBQUMsSUFBQSxFQUFxQjtFQUFBLElBQWxCQyxJQUFJLEdBQUFELElBQUEsQ0FBSkMsSUFBSTtJQUFFQyxRQUFRLEdBQUFGLElBQUEsQ0FBUkUsUUFBUTtFQUN0Qzs7RUFFQTtFQUNBLElBQUFDLFNBQUEsR0FBOEJQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFRLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQW5DRyxPQUFPLEdBQUFGLFVBQUE7SUFBRUcsVUFBVSxHQUFBSCxVQUFBO0VBQzFCLElBQUFJLFVBQUEsR0FBc0NaLCtDQUFRLENBQUM7TUFDN0NhLElBQUksRUFBRSxFQUFFO01BQ1JDLElBQUksRUFBRSxFQUFFO01BQ1JDLFFBQVEsRUFBRSxFQUFFO01BQ1pDLEtBQUssRUFBRTtJQUNULENBQUMsQ0FBQztJQUFBQyxVQUFBLEdBQUFSLGNBQUEsQ0FBQUcsVUFBQTtJQUxLTSxXQUFXLEdBQUFELFVBQUE7SUFBRUUsY0FBYyxHQUFBRixVQUFBO0VBT2xDLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxLQUFLLEVBQUs7SUFDOUIsSUFBQUMsYUFBQSxHQUF3QkQsS0FBSyxDQUFDRSxNQUFNO01BQTVCQyxJQUFJLEdBQUFGLGFBQUEsQ0FBSkUsSUFBSTtNQUFFQyxLQUFLLEdBQUFILGFBQUEsQ0FBTEcsS0FBSztJQUNuQk4sY0FBYyxDQUFBTyxhQUFBLENBQUFBLGFBQUEsS0FBTVIsV0FBVyxPQUFBUyxlQUFBLEtBQUdILElBQUksRUFBR0MsS0FBSyxFQUFFLENBQUM7RUFDbkQsQ0FBQztFQUVELElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQSxFQUFTO0lBQzFCLElBQVFmLElBQUksR0FBNEJLLFdBQVcsQ0FBM0NMLElBQUk7TUFBRUMsSUFBSSxHQUFzQkksV0FBVyxDQUFyQ0osSUFBSTtNQUFFQyxRQUFRLEdBQVlHLFdBQVcsQ0FBL0JILFFBQVE7TUFBRUMsS0FBSyxHQUFLRSxXQUFXLENBQXJCRixLQUFLO0lBQ25DLElBQUksQ0FBQ0gsSUFBSSxJQUFJLENBQUNDLElBQUksRUFBRTtJQUNwQkgsVUFBVSxJQUFBa0IsTUFBQSxDQUFBQyxrQkFBQSxDQUNMcEIsT0FBTyxJQUNWO01BQ0VHLElBQUksRUFBRWtCLFVBQVUsQ0FBQ2xCLElBQUksQ0FBQztNQUN0QkMsSUFBSSxFQUFFaUIsVUFBVSxDQUFDakIsSUFBSSxDQUFDO01BQ3RCQyxRQUFRLEVBQUVnQixVQUFVLENBQUNoQixRQUFRLENBQUMsSUFBSSxDQUFDO01BQ25DQyxLQUFLLEVBQUxBO0lBQ0YsQ0FBQyxFQUNGLENBQUM7SUFDRkcsY0FBYyxDQUFDO01BQUVOLElBQUksRUFBRSxFQUFFO01BQUVDLElBQUksRUFBRSxFQUFFO01BQUVDLFFBQVEsRUFBRSxFQUFFO01BQUVDLEtBQUssRUFBRTtJQUFHLENBQUMsQ0FBQztFQUNqRSxDQUFDO0VBRUQsSUFBTWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUFTO0lBQzVCLElBQUlDLFlBQVksR0FBRyxDQUFDO0lBQ3BCLElBQUlDLFVBQVUsR0FBRyxDQUFDO0lBRWxCeEIsT0FBTyxDQUFDeUIsT0FBTyxDQUFDLFVBQUFDLEtBQUEsRUFBOEI7TUFBQSxJQUEzQnZCLElBQUksR0FBQXVCLEtBQUEsQ0FBSnZCLElBQUk7UUFBRUMsSUFBSSxHQUFBc0IsS0FBQSxDQUFKdEIsSUFBSTtRQUFFQyxRQUFRLEdBQUFxQixLQUFBLENBQVJyQixRQUFRO01BQ3JDLElBQUlELElBQUksR0FBRyxDQUFDLEVBQUU7UUFDWm1CLFlBQVksSUFBSXBCLElBQUksR0FBR0MsSUFBSSxHQUFHQyxRQUFRO1FBQ3RDbUIsVUFBVSxJQUFJcEIsSUFBSTtNQUNwQixDQUFDLE1BQU07UUFDTDtRQUNBbUIsWUFBWSxJQUFJbEIsUUFBUTtRQUN4Qm1CLFVBQVUsSUFBSXBCLElBQUk7TUFDcEI7SUFDRixDQUFDLENBQUM7SUFDRixPQUFPb0IsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDRCxZQUFZLEdBQUdDLFVBQVUsRUFBRUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUc7RUFDdEUsQ0FBQzs7RUFFRDtFQUNBO0VBQ0FwQyxnREFBUyxDQUFDLFlBQU07SUFDZDtJQUNBcUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7O0lBRXBDO0lBQ0EsT0FBTyxZQUFNO01BQ1hDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztNQUM1QkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztFQUNILENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDRXhDLDBEQUFBO0lBQUsyQyxTQUFTLEVBQUM7RUFBTSxnQkFDbkIzQywwREFBQTtJQUFLMkMsU0FBUyxFQUFDO0VBQVcsR0FBRXJDLElBQVUsQ0FBQyxlQUN2Q04sMERBQUEsY0FBSyw0Q0FBdUIsRUFBQ2lDLGVBQWUsQ0FBQyxDQUFDLEVBQUMsR0FBTSxDQUFDLGVBRXREakMsMERBQUE7SUFBSzJDLFNBQVMsRUFBQztFQUFhLGdCQUMxQjNDLDBEQUFBO0lBQVEyQyxTQUFTLEVBQUMsMEJBQTBCO0lBQUNDLE9BQU8sRUFBRXJDO0VBQVMsR0FBQyxTQUV4RCxDQUNMLENBQUMsZUFDTlAsMERBQUEsMkJBQ0VBLDBEQUFBLGFBQUksaUJBQWdCLENBQUMsZUFDckJBLDBEQUFBO0lBQ0U2QyxJQUFJLEVBQUMsUUFBUTtJQUNicEIsSUFBSSxFQUFDLE1BQU07SUFDWEMsS0FBSyxFQUFFUCxXQUFXLENBQUNMLElBQUs7SUFDeEJnQyxRQUFRLEVBQUV6QixZQUFhO0lBQ3ZCMEIsV0FBVyxFQUFDO0VBQWEsQ0FDbkIsQ0FBQyxlQUNUL0MsMERBQUE7SUFDRTZDLElBQUksRUFBQyxRQUFRO0lBQ2JwQixJQUFJLEVBQUMsTUFBTTtJQUNYQyxLQUFLLEVBQUVQLFdBQVcsQ0FBQ0osSUFBSztJQUN4QitCLFFBQVEsRUFBRXpCLFlBQWE7SUFDdkIwQixXQUFXLEVBQUM7RUFBWSxDQUN6QixDQUFDLGVBQ0YvQywwREFBQTtJQUNFNkMsSUFBSSxFQUFDLFFBQVE7SUFDYnBCLElBQUksRUFBQyxVQUFVO0lBQ2ZDLEtBQUssRUFBRVAsV0FBVyxDQUFDSCxRQUFTO0lBQzVCOEIsUUFBUSxFQUFFekIsWUFBYTtJQUN2QjBCLFdBQVcsRUFBQztFQUFVLENBQ3ZCLENBQUMsZUFDRi9DLDBEQUFBO0lBQ0U2QyxJQUFJLEVBQUMsTUFBTTtJQUNYcEIsSUFBSSxFQUFDLE9BQU87SUFDWkMsS0FBSyxFQUFFUCxXQUFXLENBQUNGLEtBQU07SUFDekI2QixRQUFRLEVBQUV6QjtFQUFhLENBQ3hCLENBQUMsZUFDRnJCLDBEQUFBO0lBQVE0QyxPQUFPLEVBQUVmO0VBQWMsR0FBQyxlQUFxQixDQUFDLGVBRXREN0IsMERBQUEsYUFDR1csT0FBTyxDQUFDcUMsR0FBRyxDQUFDLFVBQUNDLEVBQUUsRUFBRUMsS0FBSztJQUFBLG9CQUNyQmxELDBEQUFBO01BQUltRCxHQUFHLEVBQUVEO0lBQU0sR0FDWkQsRUFBRSxDQUFDaEMsS0FBSyxJQUFJLEdBQUcsRUFBQyxJQUFFLEVBQUNnQyxFQUFFLENBQUNsQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxRQUFRLEVBQUMsR0FBQyxFQUFDa0MsRUFBRSxDQUFDbEMsSUFBSSxFQUFDLFNBQzVELEVBQUNrQyxFQUFFLENBQUNuQyxJQUFJLEVBQUMscUJBQWMsRUFBQ21DLEVBQUUsQ0FBQ2pDLFFBQVEsRUFBQyxXQUNyQyxDQUFDO0VBQUEsQ0FDTixDQUNDLENBQ0QsQ0FDRixDQUFDO0FBRVY7QUFFQSxpRUFBZVosY0FBYzs7Ozs7Ozs7VUN2SDdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9jb21wb25lbnRzL1ByaXNwZXZla0FrY2llLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b25TbWF6YXRPcGVyYWNpIGZyb20gXCIuL0J1dHRvblNtYXphdE9wZXJhY2lcIjtcblxuZnVuY3Rpb24gUHJpc3BldmVrQWtjaWUoeyB0ZXh0LCBvbkRlbGV0ZSB9KSB7XG4gIC8vIHRhZHkgYnVkdSBtw610IHByw6F6ZG7DvSBwb2xlIGFrYSBbXSBhIHNlbSBidWR1IHB1c2hvdmF0IHBvIGtsaWtudXTDrSBuYSB6YWTDoW7DrSBha2NpZSwgemFkw6Fuw60gcMWZw61zcMSbdsSba3UsIHNlbSB0byBwb3TFmWVidWp1IG9kZXNsYXQgYSB0byBzZSBwYWsgb2RlxaFsZSBkbyBhcHAuanMgY2Vsw6EgdGF0byBmdW5rY2UgLS0tIE5BIEtPTVVOSUtBQ0kgTUVaSSBLT01QT05FTlRBTUkgUE9Vxb3DjVbDgU0gYFBST1BTYCAtIFBST1BTICBuZW11c8OtbSBwb3XFmcOtdmF0IGplbiBqYWtvIGF0cmlidXR5IHTEm2NoIGh0bWwgem5hxI1laywgYWxlIG3Fr8W+dSBqZSBwb3XFvsOtdCBpIHZlIGZ1bmtjw61jaFxuXG4gIC8vIEvDs2QgcHJvIHDFmWlkw6Fuw60gamVkbm90bGl2w6kgb3BlcmFjZSBOw6FrdXAvUHJvZGVqIHBybyBha2NpaVxuICBjb25zdCBbb3BlcmFjZSwgc2V0T3BlcmFjZV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtub3ZhT3BlcmFjZSwgc2V0Tm92YU9wZXJhY2VdID0gdXNlU3RhdGUoe1xuICAgIGNlbmE6IFwiXCIsXG4gICAga3VzeTogXCJcIixcbiAgICBwb3BsYXRlazogXCJcIixcbiAgICBkYXR1bTogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHNldE5vdmFPcGVyYWNlKHsgLi4ubm92YU9wZXJhY2UsIFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgcHJpZGVqT3BlcmFjaSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNlbmEsIGt1c3ksIHBvcGxhdGVrLCBkYXR1bSB9ID0gbm92YU9wZXJhY2U7XG4gICAgaWYgKCFjZW5hIHx8ICFrdXN5KSByZXR1cm47XG4gICAgc2V0T3BlcmFjZShbXG4gICAgICAuLi5vcGVyYWNlLFxuICAgICAge1xuICAgICAgICBjZW5hOiBwYXJzZUZsb2F0KGNlbmEpLFxuICAgICAgICBrdXN5OiBwYXJzZUZsb2F0KGt1c3kpLFxuICAgICAgICBwb3BsYXRlazogcGFyc2VGbG9hdChwb3BsYXRlaykgfHwgMCxcbiAgICAgICAgZGF0dW0sXG4gICAgICB9LFxuICAgIF0pO1xuICAgIHNldE5vdmFPcGVyYWNlKHsgY2VuYTogXCJcIiwga3VzeTogXCJcIiwgcG9wbGF0ZWs6IFwiXCIsIGRhdHVtOiBcIlwiIH0pO1xuICB9O1xuXG4gIGNvbnN0IHZ5cG9jaXRlalBydW1lciA9ICgpID0+IHtcbiAgICBsZXQgdG90YWxOYWtsYWR5ID0gMDtcbiAgICBsZXQgY2Vsa2VtS3VzdSA9IDA7XG5cbiAgICBvcGVyYWNlLmZvckVhY2goKHsgY2VuYSwga3VzeSwgcG9wbGF0ZWsgfSkgPT4ge1xuICAgICAgaWYgKGt1c3kgPiAwKSB7XG4gICAgICAgIHRvdGFsTmFrbGFkeSArPSBjZW5hICoga3VzeSArIHBvcGxhdGVrO1xuICAgICAgICBjZWxrZW1LdXN1ICs9IGt1c3k7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwxZlpIHByb2Rlamkgc27DrcW+w61tZSBcImNlbGtlbUt1c3VcIiBhIGNlbGtvdsOpIG7DoWtsYWR5XG4gICAgICAgIHRvdGFsTmFrbGFkeSArPSBwb3BsYXRlaztcbiAgICAgICAgY2Vsa2VtS3VzdSArPSBrdXN5O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjZWxrZW1LdXN1ID4gMCA/ICh0b3RhbE5ha2xhZHkgLyBjZWxrZW1LdXN1KS50b0ZpeGVkKDIpIDogXCItXCI7XG4gIH07XG5cbiAgLy8gMS4gcGFyYW1ldHIgLSBjYWxsYmFja1xuICAvLyAyLiBwYXJhbXRlciAtIGRlcGVuZGVuY2llcyAtIHrDoXZpc2xvc3RpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gbW91bnQga29tcG9uZW50dVxuICAgIGNvbnNvbGUubG9nKFwiUHJpc3BldmVrIHphxI1hbCBjZXN0dVwiKTtcblxuICAgIC8vIHVubW91bnQga29tcG9uZW50dVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBhbGVydChcIlByaXNwZXbEm2sgc2UgdnltYcW+ZVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicHJpc3BldmVrIHphbmlrbFwiKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+e3RleHR9PC9kaXY+XG4gICAgICA8ZGl2PlByxa9txJtybsOhIG7DoWt1cG7DrSBjZW5hOiB7dnlwb2NpdGVqUHJ1bWVyKCl9IDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWN0aW9uLWJ0biBhY3Rpb24tZGVsZXRlXCIgb25DbGljaz17b25EZWxldGV9PlxuICAgICAgICAgIFZ5bWF6YXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoND5Ob3bDoSBvcGVyYWNlPC9oND5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbmFtZT1cImNlbmFcIlxuICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5jZW5hfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDZW5hIHphIGt1c1wiXG4gICAgICAgID48L2lucHV0PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBuYW1lPVwia3VzeVwiXG4gICAgICAgICAgdmFsdWU9e25vdmFPcGVyYWNlLmt1c3l9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvxI1ldCBrdXPFr1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG5hbWU9XCJwb3BsYXRla1wiXG4gICAgICAgICAgdmFsdWU9e25vdmFPcGVyYWNlLnBvcGxhdGVrfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb3BsYXRla1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICBuYW1lPVwiZGF0dW1cIlxuICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5kYXR1bX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByaWRlak9wZXJhY2l9PkFkZCBvcGVyYXRpb248L2J1dHRvbj5cblxuICAgICAgICA8dWw+XG4gICAgICAgICAge29wZXJhY2UubWFwKChvcCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAge29wLmRhdHVtIHx8IFwi4oCUXCJ9OiB7b3Aua3VzeSA+IDAgPyBcIk7DoWt1cFwiIDogXCJQcm9kZWpcIn0ge29wLmt1c3l9IGtzXG4gICAgICAgICAgICAgIHphIHtvcC5jZW5hfSBLxI0gKHBvcGxhdGVrIHtvcC5wb3BsYXRla30gS8SNKVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcmlzcGV2ZWtBa2NpZTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM3OTFmOWJjOTA0YmFkYjQwYTdmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCdXR0b25TbWF6YXRPcGVyYWNpIiwiUHJpc3BldmVrQWtjaWUiLCJfcmVmIiwidGV4dCIsIm9uRGVsZXRlIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwib3BlcmFjZSIsInNldE9wZXJhY2UiLCJfdXNlU3RhdGUzIiwiY2VuYSIsImt1c3kiLCJwb3BsYXRlayIsImRhdHVtIiwiX3VzZVN0YXRlNCIsIm5vdmFPcGVyYWNlIiwic2V0Tm92YU9wZXJhY2UiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIl9ldmVudCR0YXJnZXQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwicHJpZGVqT3BlcmFjaSIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInBhcnNlRmxvYXQiLCJ2eXBvY2l0ZWpQcnVtZXIiLCJ0b3RhbE5ha2xhZHkiLCJjZWxrZW1LdXN1IiwiZm9yRWFjaCIsIl9yZWYyIiwidG9GaXhlZCIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJtYXAiLCJvcCIsImluZGV4Iiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==