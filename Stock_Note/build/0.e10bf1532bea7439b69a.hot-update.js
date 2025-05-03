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
  }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-footer"
  }, "Pr\u016Fm\u011Brn\xE1 n\xE1kupn\xED cena: ", vypocitejPrumer(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "action-btn action-delete",
    onClick: onDelete
  }, "Vymazat")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-footer"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Nov\xE1 operace"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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
/******/ 	__webpack_require__.h = () => ("4c0f10b3948c73f013fb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RVAsV0FBVyxDQUFDSixJQUFLO0lBQ3hCK0IsUUFBUSxFQUFFekIsWUFBYTtJQUN2QjBCLFdBQVcsRUFBQztFQUFZLENBQ3pCLENBQUMsZUFDRi9DLDBEQUFBO0lBQ0U2QyxJQUFJLEVBQUMsUUFBUTtJQUNicEIsSUFBSSxFQUFDLFVBQVU7SUFDZkMsS0FBSyxFQUFFUCxXQUFXLENBQUNILFFBQVM7SUFDNUI4QixRQUFRLEVBQUV6QixZQUFhO0lBQ3ZCMEIsV0FBVyxFQUFDO0VBQVUsQ0FDdkIsQ0FBQyxlQUNGL0MsMERBQUE7SUFDRTZDLElBQUksRUFBQyxNQUFNO0lBQ1hwQixJQUFJLEVBQUMsT0FBTztJQUNaQyxLQUFLLEVBQUVQLFdBQVcsQ0FBQ0YsS0FBTTtJQUN6QjZCLFFBQVEsRUFBRXpCO0VBQWEsQ0FDeEIsQ0FBQyxlQUNGckIsMERBQUE7SUFBUTRDLE9BQU8sRUFBRWY7RUFBYyxHQUFDLGVBQXFCLENBQUMsZUFFdEQ3QiwwREFBQSxhQUNHVyxPQUFPLENBQUNxQyxHQUFHLENBQUMsVUFBQ0MsRUFBRSxFQUFFQyxLQUFLO0lBQUEsb0JBQ3JCbEQsMERBQUE7TUFBSW1ELEdBQUcsRUFBRUQ7SUFBTSxHQUNaRCxFQUFFLENBQUNoQyxLQUFLLElBQUksR0FBRyxFQUFDLElBQUUsRUFBQ2dDLEVBQUUsQ0FBQ2xDLElBQUksR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLFFBQVEsRUFBQyxHQUFDLEVBQUNrQyxFQUFFLENBQUNsQyxJQUFJLEVBQUMsU0FDNUQsRUFBQ2tDLEVBQUUsQ0FBQ25DLElBQUksRUFBQyxxQkFBYyxFQUFDbUMsRUFBRSxDQUFDakMsUUFBUSxFQUFDLFdBQ3JDLENBQUM7RUFBQSxDQUNOLENBQ0MsQ0FDRCxDQUNGLENBQUM7QUFFVjtBQUVBLGlFQUFlWixjQUFjOzs7Ozs7OztVQ3hIN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9TdG9ja19Ob3RlL2pzL2NvbXBvbmVudHMvUHJpc3BldmVrQWtjaWUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvblNtYXphdE9wZXJhY2kgZnJvbSBcIi4vQnV0dG9uU21hemF0T3BlcmFjaVwiO1xuXG5mdW5jdGlvbiBQcmlzcGV2ZWtBa2NpZSh7IHRleHQsIG9uRGVsZXRlIH0pIHtcbiAgLy8gdGFkeSBidWR1IG3DrXQgcHLDoXpkbsO9IHBvbGUgYWthIFtdIGEgc2VtIGJ1ZHUgcHVzaG92YXQgcG8ga2xpa251dMOtIG5hIHphZMOhbsOtIGFrY2llLCB6YWTDoW7DrSBwxZnDrXNwxJt2xJtrdSwgc2VtIHRvIHBvdMWZZWJ1anUgb2Rlc2xhdCBhIHRvIHNlIHBhayBvZGXFoWxlIGRvIGFwcC5qcyBjZWzDoSB0YXRvIGZ1bmtjZSAtLS0gTkEgS09NVU5JS0FDSSBNRVpJIEtPTVBPTkVOVEFNSSBQT1XFvcONVsOBTSBgUFJPUFNgIC0gUFJPUFMgIG5lbXVzw61tIHBvdcWZw612YXQgamVuIGpha28gYXRyaWJ1dHkgdMSbY2ggaHRtbCB6bmHEjWVrLCBhbGUgbcWvxb51IGplIHBvdcW+w610IGkgdmUgZnVua2PDrWNoXG5cbiAgLy8gS8OzZCBwcm8gcMWZaWTDoW7DrSBqZWRub3RsaXbDqSBvcGVyYWNlIE7DoWt1cC9Qcm9kZWogcHJvIGFrY2lpXG4gIGNvbnN0IFtvcGVyYWNlLCBzZXRPcGVyYWNlXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25vdmFPcGVyYWNlLCBzZXROb3ZhT3BlcmFjZV0gPSB1c2VTdGF0ZSh7XG4gICAgY2VuYTogXCJcIixcbiAgICBrdXN5OiBcIlwiLFxuICAgIHBvcGxhdGVrOiBcIlwiLFxuICAgIGRhdHVtOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgc2V0Tm92YU9wZXJhY2UoeyAuLi5ub3ZhT3BlcmFjZSwgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBwcmlkZWpPcGVyYWNpID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2VuYSwga3VzeSwgcG9wbGF0ZWssIGRhdHVtIH0gPSBub3ZhT3BlcmFjZTtcbiAgICBpZiAoIWNlbmEgfHwgIWt1c3kpIHJldHVybjtcbiAgICBzZXRPcGVyYWNlKFtcbiAgICAgIC4uLm9wZXJhY2UsXG4gICAgICB7XG4gICAgICAgIGNlbmE6IHBhcnNlRmxvYXQoY2VuYSksXG4gICAgICAgIGt1c3k6IHBhcnNlRmxvYXQoa3VzeSksXG4gICAgICAgIHBvcGxhdGVrOiBwYXJzZUZsb2F0KHBvcGxhdGVrKSB8fCAwLFxuICAgICAgICBkYXR1bSxcbiAgICAgIH0sXG4gICAgXSk7XG4gICAgc2V0Tm92YU9wZXJhY2UoeyBjZW5hOiBcIlwiLCBrdXN5OiBcIlwiLCBwb3BsYXRlazogXCJcIiwgZGF0dW06IFwiXCIgfSk7XG4gIH07XG5cbiAgY29uc3Qgdnlwb2NpdGVqUHJ1bWVyID0gKCkgPT4ge1xuICAgIGxldCB0b3RhbE5ha2xhZHkgPSAwO1xuICAgIGxldCBjZWxrZW1LdXN1ID0gMDtcblxuICAgIG9wZXJhY2UuZm9yRWFjaCgoeyBjZW5hLCBrdXN5LCBwb3BsYXRlayB9KSA9PiB7XG4gICAgICBpZiAoa3VzeSA+IDApIHtcbiAgICAgICAgdG90YWxOYWtsYWR5ICs9IGNlbmEgKiBrdXN5ICsgcG9wbGF0ZWs7XG4gICAgICAgIGNlbGtlbUt1c3UgKz0ga3VzeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHDFmWkgcHJvZGVqaSBzbsOtxb7DrW1lIFwiY2Vsa2VtS3VzdVwiIGEgY2Vsa292w6kgbsOha2xhZHlcbiAgICAgICAgdG90YWxOYWtsYWR5ICs9IHBvcGxhdGVrO1xuICAgICAgICBjZWxrZW1LdXN1ICs9IGt1c3k7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNlbGtlbUt1c3UgPiAwID8gKHRvdGFsTmFrbGFkeSAvIGNlbGtlbUt1c3UpLnRvRml4ZWQoMikgOiBcIi1cIjtcbiAgfTtcblxuICAvLyAxLiBwYXJhbWV0ciAtIGNhbGxiYWNrXG4gIC8vIDIuIHBhcmFtdGVyIC0gZGVwZW5kZW5jaWVzIC0gesOhdmlzbG9zdGlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBtb3VudCBrb21wb25lbnR1XG4gICAgY29uc29sZS5sb2coXCJQcmlzcGV2ZWsgemHEjWFsIGNlc3R1XCIpO1xuXG4gICAgLy8gdW5tb3VudCBrb21wb25lbnR1XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGFsZXJ0KFwiUHJpc3BldsSbayBzZSB2eW1hxb5lXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJwcmlzcGV2ZWsgemFuaWtsXCIpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj57dGV4dH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgUHLFr23Em3Juw6EgbsOha3VwbsOtIGNlbmE6IHt2eXBvY2l0ZWpQcnVtZXIoKX1cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhY3Rpb24tYnRuIGFjdGlvbi1kZWxldGVcIiBvbkNsaWNrPXtvbkRlbGV0ZX0+XG4gICAgICAgICAgVnltYXphdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+PC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDQ+Tm92w6Egb3BlcmFjZTwvaDQ+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG5hbWU9XCJjZW5hXCJcbiAgICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2UuY2VuYX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2VuYSB6YSBrdXNcIlxuICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbmFtZT1cImt1c3lcIlxuICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5rdXN5fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb8SNZXQga3Vzxa9cIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBuYW1lPVwicG9wbGF0ZWtcIlxuICAgICAgICAgIHZhbHVlPXtub3ZhT3BlcmFjZS5wb3BsYXRla31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9wbGF0ZWtcIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgbmFtZT1cImRhdHVtXCJcbiAgICAgICAgICB2YWx1ZT17bm92YU9wZXJhY2UuZGF0dW19XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmlkZWpPcGVyYWNpfT5BZGQgb3BlcmF0aW9uPC9idXR0b24+XG5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtvcGVyYWNlLm1hcCgob3AsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIHtvcC5kYXR1bSB8fCBcIuKAlFwifToge29wLmt1c3kgPiAwID8gXCJOw6FrdXBcIiA6IFwiUHJvZGVqXCJ9IHtvcC5rdXN5fSBrc1xuICAgICAgICAgICAgICB6YSB7b3AuY2VuYX0gS8SNIChwb3BsYXRlayB7b3AucG9wbGF0ZWt9IEvEjSlcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpc3BldmVrQWtjaWU7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0YzBmMTBiMzk0OGM3M2YwMTNmYlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnV0dG9uU21hemF0T3BlcmFjaSIsIlByaXNwZXZla0FrY2llIiwiX3JlZiIsInRleHQiLCJvbkRlbGV0ZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm9wZXJhY2UiLCJzZXRPcGVyYWNlIiwiX3VzZVN0YXRlMyIsImNlbmEiLCJrdXN5IiwicG9wbGF0ZWsiLCJkYXR1bSIsIl91c2VTdGF0ZTQiLCJub3ZhT3BlcmFjZSIsInNldE5vdmFPcGVyYWNlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJfZXZlbnQkdGFyZ2V0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsInByaWRlak9wZXJhY2kiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwYXJzZUZsb2F0Iiwidnlwb2NpdGVqUHJ1bWVyIiwidG90YWxOYWtsYWR5IiwiY2Vsa2VtS3VzdSIsImZvckVhY2giLCJfcmVmMiIsInRvRml4ZWQiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwibWFwIiwib3AiLCJpbmRleCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=