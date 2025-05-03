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
    var _novaOperace = {
        novaOperace: novaOperace
      },
      cena = _novaOperace.cena,
      kusy = _novaOperace.kusy,
      poplatek = _novaOperace.poplatek;
    if (!cena || !kusy) return;
    setOperace([].concat(_toConsumableArray(operace), [{
      cena: parseFloat(cena),
      kusy: parseFloat(kusy),
      poplatek: parseFloat(poplatek) || 0
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
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrispevekAkcie);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("64f612599c01fa0f9012")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy9QcmlzcGV2ZWtBa2NpZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFByaXNwZXZla0FrY2llKHsgdGV4dCwgb25EZWxldGUgfSkge1xuICAvLyB0YWR5IGJ1ZHUgbcOtdCBwcsOhemRuw70gcG9sZSBha2EgW10gYSBzZW0gYnVkdSBwdXNob3ZhdCBwbyBrbGlrbnV0w60gbmEgemFkw6Fuw60gYWtjaWUsIHphZMOhbsOtIHDFmcOtc3DEm3bEm2t1LCBzZW0gdG8gcG90xZllYnVqdSBvZGVzbGF0IGEgdG8gc2UgcGFrIG9kZcWhbGUgZG8gYXBwLmpzIGNlbMOhIHRhdG8gZnVua2NlIC0tLSBOQSBLT01VTklLQUNJIE1FWkkgS09NUE9ORU5UQU1JIFBPVcW9w41Ww4FNIGBQUk9QU2AgLSBQUk9QUyAgbmVtdXPDrW0gcG91xZnDrXZhdCBqZW4gamFrbyBhdHJpYnV0eSB0xJtjaCBodG1sIHpuYcSNZWssIGFsZSBtxa/FvnUgamUgcG91xb7DrXQgaSB2ZSBmdW5rY8OtY2hcblxuICAvLyBLw7NkIHBybyBwxZlpZMOhbsOtIGplZG5vdGxpdsOpIG9wZXJhY2UgTsOha3VwL1Byb2RlaiBwcm8gYWtjaWlcbiAgY29uc3QgW29wZXJhY2UsIHNldE9wZXJhY2VdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbm92YU9wZXJhY2UsIHNldE5vdmFPcGVyYWNlXSA9IHVzZVN0YXRlKHtcbiAgICBjZW5hOiBcIlwiLFxuICAgIGt1c3k6IFwiXCIsXG4gICAgcG9wbGF0ZWs6IFwiXCIsXG4gICAgZGF0dW06IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBzZXROb3ZhT3BlcmFjZSh7IC4uLm5vdmFPcGVyYWNlLCBbbmFtZV06IHZhbHVlIH0pO1xuICB9O1xuXG4gIGNvbnN0IHByaWRlak9wZXJhY2kgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjZW5hLCBrdXN5LCBwb3BsYXRlayB9ID0geyBub3ZhT3BlcmFjZSB9O1xuICAgIGlmICghY2VuYSB8fCAha3VzeSkgcmV0dXJuO1xuICAgIHNldE9wZXJhY2UoW1xuICAgICAgLi4ub3BlcmFjZSxcbiAgICAgIHtcbiAgICAgICAgY2VuYTogcGFyc2VGbG9hdChjZW5hKSxcbiAgICAgICAga3VzeTogcGFyc2VGbG9hdChrdXN5KSxcbiAgICAgICAgcG9wbGF0ZWs6IHBhcnNlRmxvYXQocG9wbGF0ZWspIHx8IDAsXG4gICAgICB9LFxuICAgIF0pO1xuICAgIHNldE5vdmFPcGVyYWNlKHsgY2VuYTogXCJcIiwga3VzeTogXCJcIiwgcG9wbGF0ZWs6IFwiXCIsIGRhdHVtOiBcIlwiIH0pO1xuICB9O1xuXG4gIGNvbnN0IHZ5cG9jaXRlalBydW1lciA9ICgpID0+IHtcbiAgICBsZXQgdG90YWxOYWtsYWR5ID0gMDtcbiAgICBsZXQgY2Vsa2VtS3VzdSA9IDA7XG5cbiAgICBvcGVyYWNlLmZvckVhY2goKHsgY2VuYSwga3VzeSwgcG9wbGF0ZWsgfSkgPT4ge1xuICAgICAgaWYgKGt1c3kgPiAwKSB7XG4gICAgICAgIHRvdGFsTmFrbGFkeSArPSBjZW5hICoga3VzeSArIHBvcGxhdGVrO1xuICAgICAgICBjZWxrZW1LdXN1ICs9IGt1c3k7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwxZlpIHByb2Rlamkgc27DrcW+w61tZSBcImNlbGtlbUt1c3VcIiBhIGNlbGtvdsOpIG7DoWtsYWR5XG4gICAgICAgIHRvdGFsTmFrbGFkeSArPSBwb3BsYXRlaztcbiAgICAgICAgY2Vsa2VtS3VzdSArPSBrdXN5O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjZWxrZW1LdXN1ID4gMCA/ICh0b3RhbE5ha2xhZHkgLyBjZWxrZW1LdXN1KS50b0ZpeGVkKDIpIDogXCItXCI7XG4gIH07XG5cbiAgLy8gMS4gcGFyYW1ldHIgLSBjYWxsYmFja1xuICAvLyAyLiBwYXJhbXRlciAtIGRlcGVuZGVuY2llcyAtIHrDoXZpc2xvc3RpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gbW91bnQga29tcG9uZW50dVxuICAgIGNvbnNvbGUubG9nKFwiUHJpc3BldmVrIHphxI1hbCBjZXN0dVwiKTtcblxuICAgIC8vIHVubW91bnQga29tcG9uZW50dVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBhbGVydChcIlByaXNwZXbEm2sgc2UgdnltYcW+ZVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicHJpc3BldmVrIHphbmlrbFwiKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+e3RleHR9PC9kaXY+XG4gICAgICA8ZGl2PlByxa9txJtybsOhIG7DoWt1cG7DrSBjZW5hOiB7dnlwb2NpdGVqUHJ1bWVyKCl9IDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWN0aW9uLWJ0biBhY3Rpb24tZGVsZXRlXCIgb25DbGljaz17b25EZWxldGV9PlxuICAgICAgICAgIFZ5bWF6YXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoND5Ob3bDoSBvcGVyYWNlPC9oND5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbmFtZT1cImNlbmFcIlxuICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5jZW5hfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDZW5hIHphIGt1c1wiXG4gICAgICAgID48L2lucHV0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaXNwZXZla0FrY2llO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjRmNjEyNTk5YzAxZmEwZjkwMTJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByaXNwZXZla0FrY2llIiwiX3JlZiIsInRleHQiLCJvbkRlbGV0ZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm9wZXJhY2UiLCJzZXRPcGVyYWNlIiwiX3VzZVN0YXRlMyIsImNlbmEiLCJrdXN5IiwicG9wbGF0ZWsiLCJkYXR1bSIsIl91c2VTdGF0ZTQiLCJub3ZhT3BlcmFjZSIsInNldE5vdmFPcGVyYWNlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJfZXZlbnQkdGFyZ2V0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsInByaWRlak9wZXJhY2kiLCJfbm92YU9wZXJhY2UiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwYXJzZUZsb2F0Iiwidnlwb2NpdGVqUHJ1bWVyIiwidG90YWxOYWtsYWR5IiwiY2Vsa2VtS3VzdSIsImZvckVhY2giLCJfcmVmMiIsInRvRml4ZWQiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==