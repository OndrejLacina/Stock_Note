"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

// import ButtonSmazatOperaci nepoužívám zatím

function Operations() {
  // Odsud počítám průměr a vytváří se mi jednotlivé řádky transakcí
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
    operace.forEach(function (_ref) {
      var cena = _ref.cena,
        kusy = _ref.kusy,
        poplatek = _ref.poplatek;
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
  }, "Pr\u016Fm\u011Brn\xE1 n\xE1kupn\xED cena: ", vypocitejPrumer()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Nov\xE1 operace"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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
  }, "Add operation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, operace.map(function (op, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index
    }, op.datum || "—", ": ", op.kusy > 0 ? "Nákup" : "Prodej", " ", op.kusy, " ks za ", op.cena, " K\u010D (poplatek ", op.poplatek, " K\u010D)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "action-btn action-delete",
      onClick: function onClick() {
        return smazOperaci(index);
      }
    }, "Smazat"));
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Operations);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f0ab39f86a42e3395cc9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjhCLFFBQVEsRUFBRTFCO0VBQWEsQ0FDeEIsQ0FBQyxlQUNGakIsMERBQUE7SUFBUTZDLE9BQU8sRUFBRXBCO0VBQWMsR0FBQyxlQUFxQixDQUNsRCxDQUFDLGVBQ056QiwwREFBQSxhQUNHTyxPQUFPLENBQUN1QyxHQUFHLENBQUMsVUFBQ0MsRUFBRSxFQUFFQyxLQUFLO0lBQUEsb0JBQ3JCaEQsMERBQUE7TUFBSWlELEdBQUcsRUFBRUQ7SUFBTSxHQUNaRCxFQUFFLENBQUNsQyxLQUFLLElBQUksR0FBRyxFQUFDLElBQUUsRUFBQ2tDLEVBQUUsQ0FBQ3BDLElBQUksR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLFFBQVEsRUFBQyxHQUFDLEVBQUNvQyxFQUFFLENBQUNwQyxJQUFJLEVBQUMsU0FDNUQsRUFBQ29DLEVBQUUsQ0FBQ3JDLElBQUksRUFBQyxxQkFBYyxFQUFDcUMsRUFBRSxDQUFDbkMsUUFBUSxFQUFDLFdBQ3ZDLGVBQUFaLDBEQUFBO01BQ0V5QyxTQUFTLEVBQUMsMEJBQTBCO01BQ3BDSSxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQTtRQUFBLE9BQVFWLFdBQVcsQ0FBQ2EsS0FBSyxDQUFDO01BQUE7SUFBQyxHQUNuQyxRQUVPLENBQ04sQ0FBQztFQUFBLENBQ04sQ0FDQyxDQUNELENBQUM7QUFFVjtBQUVBLGlFQUFlN0MsVUFBVTs7Ozs7Ozs7VUMxR3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9jb21wb25lbnRzL09wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IEJ1dHRvblNtYXphdE9wZXJhY2kgbmVwb3XFvsOtdsOhbSB6YXTDrW1cblxuZnVuY3Rpb24gT3BlcmF0aW9ucygpIHtcbiAgLy8gT2RzdWQgcG/EjcOtdMOhbSBwcsWvbcSbciBhIHZ5dHbDocWZw60gc2UgbWkgamVkbm90bGl2w6kgxZnDoWRreSB0cmFuc2FrY8OtXG4gIGNvbnN0IFtvcGVyYWNlLCBzZXRPcGVyYWNlXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25vdmFPcGVyYWNlLCBzZXROb3ZhT3BlcmFjZV0gPSB1c2VTdGF0ZSh7XG4gICAgY2VuYTogXCJcIixcbiAgICBrdXN5OiBcIlwiLFxuICAgIHBvcGxhdGVrOiBcIlwiLFxuICAgIGRhdHVtOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgc2V0Tm92YU9wZXJhY2UoeyAuLi5ub3ZhT3BlcmFjZSwgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBwcmlkZWpPcGVyYWNpID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2VuYSwga3VzeSwgcG9wbGF0ZWssIGRhdHVtIH0gPSBub3ZhT3BlcmFjZTtcbiAgICBpZiAoIWNlbmEgfHwgIWt1c3kpIHJldHVybjtcbiAgICBzZXRPcGVyYWNlKFtcbiAgICAgIC4uLm9wZXJhY2UsXG4gICAgICB7XG4gICAgICAgIGNlbmE6IHBhcnNlRmxvYXQoY2VuYSksXG4gICAgICAgIGt1c3k6IHBhcnNlRmxvYXQoa3VzeSksXG4gICAgICAgIHBvcGxhdGVrOiBwYXJzZUZsb2F0KHBvcGxhdGVrKSB8fCAwLFxuICAgICAgICBkYXR1bSxcbiAgICAgIH0sXG4gICAgXSk7XG4gICAgc2V0Tm92YU9wZXJhY2UoeyBjZW5hOiBcIlwiLCBrdXN5OiBcIlwiLCBwb3BsYXRlazogXCJcIiwgZGF0dW06IFwiXCIgfSk7XG4gIH07XG5cbiAgY29uc3Qgdnlwb2NpdGVqUHJ1bWVyID0gKCkgPT4ge1xuICAgIGxldCB0b3RhbE5ha2xhZHkgPSAwO1xuICAgIGxldCBjZWxrZW1LdXN1ID0gMDtcblxuICAgIG9wZXJhY2UuZm9yRWFjaCgoeyBjZW5hLCBrdXN5LCBwb3BsYXRlayB9KSA9PiB7XG4gICAgICBpZiAoa3VzeSA+IDApIHtcbiAgICAgICAgdG90YWxOYWtsYWR5ICs9IGNlbmEgKiBrdXN5ICsgcG9wbGF0ZWs7XG4gICAgICAgIGNlbGtlbUt1c3UgKz0ga3VzeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHDFmWkgcHJvZGVqaSBzbsOtxb7DrW1lIFwiY2Vsa2VtS3VzdVwiIGEgY2Vsa292w6kgbsOha2xhZHlcbiAgICAgICAgdG90YWxOYWtsYWR5ICs9IHBvcGxhdGVrO1xuICAgICAgICBjZWxrZW1LdXN1ICs9IGt1c3k7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNlbGtlbUt1c3UgPiAwID8gKHRvdGFsTmFrbGFkeSAvIGNlbGtlbUt1c3UpLnRvRml4ZWQoMikgOiBcIi1cIjtcbiAgfTtcblxuICBjb25zdCBzbWF6T3BlcmFjaSA9IChpZHgpID0+IHtcbiAgICBzZXRPcGVyYWNlKG9wZXJhY2UuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpZHgpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwibWItM1wiPlByxa9txJtybsOhIG7DoWt1cG7DrSBjZW5hOiB7dnlwb2NpdGVqUHJ1bWVyKCl9PC9oNT5cbiAgICAgIDxoNj5Ob3bDoSBvcGVyYWNlPC9oNj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG5hbWU9XCJjZW5hXCJcbiAgICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2UuY2VuYX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2VuYSB6YSBrdXNcIlxuICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbmFtZT1cImt1c3lcIlxuICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5rdXN5fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb8SNZXQga3Vzxa9cIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBuYW1lPVwicG9wbGF0ZWtcIlxuICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5wb3BsYXRla31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9wbGF0ZWtcIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgbmFtZT1cImRhdHVtXCJcbiAgICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2UuZGF0dW19XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmlkZWpPcGVyYWNpfT5BZGQgb3BlcmF0aW9uPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bD5cbiAgICAgICAge29wZXJhY2UubWFwKChvcCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7b3AuZGF0dW0gfHwgXCLigJRcIn06IHtvcC5rdXN5ID4gMCA/IFwiTsOha3VwXCIgOiBcIlByb2RlalwifSB7b3Aua3VzeX0ga3NcbiAgICAgICAgICAgIHphIHtvcC5jZW5hfSBLxI0gKHBvcGxhdGVrIHtvcC5wb3BsYXRla30gS8SNKVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY3Rpb24tYnRuIGFjdGlvbi1kZWxldGVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzbWF6T3BlcmFjaShpbmRleCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNtYXphdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBPcGVyYXRpb25zO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjBhYjM5Zjg2YTQyZTMzOTVjYzlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk9wZXJhdGlvbnMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJvcGVyYWNlIiwic2V0T3BlcmFjZSIsIl91c2VTdGF0ZTMiLCJjZW5hIiwia3VzeSIsInBvcGxhdGVrIiwiZGF0dW0iLCJfdXNlU3RhdGU0Iiwibm92YU9wZXJhY2UiLCJzZXROb3ZhT3BlcmFjZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiX2V2ZW50JHRhcmdldCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJwcmlkZWpPcGVyYWNpIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicGFyc2VGbG9hdCIsInZ5cG9jaXRlalBydW1lciIsInRvdGFsTmFrbGFkeSIsImNlbGtlbUt1c3UiLCJmb3JFYWNoIiwiX3JlZiIsInRvRml4ZWQiLCJzbWF6T3BlcmFjaSIsImlkeCIsImZpbHRlciIsIl8iLCJpIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwib25DbGljayIsIm1hcCIsIm9wIiwiaW5kZXgiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9