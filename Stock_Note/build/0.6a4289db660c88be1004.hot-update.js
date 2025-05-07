"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 38:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Portfolio(_ref) {
  var prispevky = _ref.prispevky;
  // Spočítat průměrnou cenu
  var spocitejPrumer = function spocitejPrumer(prispevek) {
    var operace = prispevek.operace;
    var totalNaklady = 0;
    var celkemKusu = 0;
    operace.forEach(function (_ref2) {
      var cena = _ref2.cena,
        kusy = _ref2.kusy,
        poplatek = _ref2.poplatek;
      if (kusy > 0) {
        totalNaklady += cena * kusy + poplatek;
        celkemKusu += kusy;
      }
    });
    return celkemKusu > 0 ? (totalNaklady / celkemKusu).toFixed(2) : "-";
  };

  // Spočítat celkový počet kusů (počítá i prodeje, tedy záporné kusy)
  var spocitejTotalKusy = function spocitejTotalKusy(prispevek) {
    return prispevek.operace.reduce(function (sum, op) {
      return sum + op.kusy;
    }, 0);
  };

  // Spočítat součet všech poplatků (náklady)
  var spocitejPoplatky = function spocitejPoplatky(prispevek) {
    return prispevek.operace.reduce(function (sum, op) {
      return sum + op.poplatek;
    }, 0);
  };

  // Spočítat celkově zainvestované peníze (jen nákupy)
  var spocitejTotalInvestovano = function spocitejTotalInvestovano(prispevek) {
    return prispevek.operace.filter(function (op) {
      return op.kusy > 0;
    }) // jen nákupy
    .reduce(function (sum, op) {
      return sum + op.cena * op.kusy + op.poplatek;
    }, 0).toFixed(2);
  };

  // (VOLITELNÉ) Alokaci dopočítáme až budeme mít total portfolio value

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "mb-4"
  }, "Portfolio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table table-striped table-bordered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", {
    className: "table-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Ticker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Pr\u016Fm\u011Brn\xE1 cena [K\u010D]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Po\u010Det kus\u016F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Sou\u010Det poplatk\u016F [K\u010D]"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Celkem investov\xE1no [K\u010D]"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, prispevky.map(function (prispevek, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, prispevek.ticker), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, spocitejPrumer(prispevek)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, spocitejTotalKusy(prispevek)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, spocitejPoplatky(prispevek)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, spocitejTotalInvestovano(prispevek)));
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);

// function Portfolio({ prispevky }) {
//   return (
//     <div className="container mt-5">
//       <h2>Portfolio</h2>
//       {prispevky.length === 0 ? (
//         <p>Nemáte žádné přidané akcie</p>
//       ) : (
//         <ul className="list-group">
//           {prispevky.map((prispevek, index) => (
//             <li key={index} className="list-group-item">
//               {prispevek.ticker} - počet operací : {prispevek.operace.length}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b2ad4e30a5bbe26c07ca")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsZUFDUkEsMERBQUEsZ0JBQ0dHLFNBQVMsQ0FBQ3FCLEdBQUcsQ0FBQyxVQUFDbkIsU0FBUyxFQUFFb0IsS0FBSztJQUFBLG9CQUM5QnpCLDBEQUFBO01BQUkwQixHQUFHLEVBQUVEO0lBQU0sZ0JBQ2J6QiwwREFBQSxhQUFLSyxTQUFTLENBQUNzQixNQUFXLENBQUMsZUFDM0IzQiwwREFBQSxhQUFLSSxjQUFjLENBQUNDLFNBQVMsQ0FBTSxDQUFDLGVBQ3BDTCwwREFBQSxhQUFLZSxpQkFBaUIsQ0FBQ1YsU0FBUyxDQUFNLENBQUMsZUFDdkNMLDBEQUFBLGFBQUttQixnQkFBZ0IsQ0FBQ2QsU0FBUyxDQUFNLENBQUMsZUFDdENMLDBEQUFBLGFBQUtvQix3QkFBd0IsQ0FBQ2YsU0FBUyxDQUFNLENBQzNDLENBQUM7RUFBQSxDQUNOLENBQ0ksQ0FDRixDQUNKLENBQ0YsQ0FBQztBQUVWO0FBRUEsaUVBQWVKLFNBQVMsRUFBQzs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3pGQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvcGFnZXMvUG9ydGZvbGlvLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBQb3J0Zm9saW8oeyBwcmlzcGV2a3kgfSkge1xuICAvLyBTcG/EjcOtdGF0IHByxa9txJtybm91IGNlbnVcbiAgY29uc3Qgc3BvY2l0ZWpQcnVtZXIgPSAocHJpc3BldmVrKSA9PiB7XG4gICAgY29uc3Qgb3BlcmFjZSA9IHByaXNwZXZlay5vcGVyYWNlO1xuICAgIGxldCB0b3RhbE5ha2xhZHkgPSAwO1xuICAgIGxldCBjZWxrZW1LdXN1ID0gMDtcblxuICAgIG9wZXJhY2UuZm9yRWFjaCgoeyBjZW5hLCBrdXN5LCBwb3BsYXRlayB9KSA9PiB7XG4gICAgICBpZiAoa3VzeSA+IDApIHtcbiAgICAgICAgdG90YWxOYWtsYWR5ICs9IGNlbmEgKiBrdXN5ICsgcG9wbGF0ZWs7XG4gICAgICAgIGNlbGtlbUt1c3UgKz0ga3VzeTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjZWxrZW1LdXN1ID4gMCA/ICh0b3RhbE5ha2xhZHkgLyBjZWxrZW1LdXN1KS50b0ZpeGVkKDIpIDogXCItXCI7XG4gIH07XG5cbiAgLy8gU3BvxI3DrXRhdCBjZWxrb3bDvSBwb8SNZXQga3Vzxa8gKHBvxI3DrXTDoSBpIHByb2RlamUsIHRlZHkgesOhcG9ybsOpIGt1c3kpXG4gIGNvbnN0IHNwb2NpdGVqVG90YWxLdXN5ID0gKHByaXNwZXZlaykgPT4ge1xuICAgIHJldHVybiBwcmlzcGV2ZWsub3BlcmFjZS5yZWR1Y2UoKHN1bSwgb3ApID0+IHN1bSArIG9wLmt1c3ksIDApO1xuICB9O1xuXG4gIC8vIFNwb8SNw610YXQgc291xI1ldCB2xaFlY2ggcG9wbGF0a8WvIChuw6FrbGFkeSlcbiAgY29uc3Qgc3BvY2l0ZWpQb3BsYXRreSA9IChwcmlzcGV2ZWspID0+IHtcbiAgICByZXR1cm4gcHJpc3BldmVrLm9wZXJhY2UucmVkdWNlKChzdW0sIG9wKSA9PiBzdW0gKyBvcC5wb3BsYXRlaywgMCk7XG4gIH07XG5cbiAgLy8gU3BvxI3DrXRhdCBjZWxrb3bEmyB6YWludmVzdG92YW7DqSBwZW7DrXplIChqZW4gbsOha3VweSlcbiAgY29uc3Qgc3BvY2l0ZWpUb3RhbEludmVzdG92YW5vID0gKHByaXNwZXZlaykgPT4ge1xuICAgIHJldHVybiBwcmlzcGV2ZWsub3BlcmFjZVxuICAgICAgLmZpbHRlcigob3ApID0+IG9wLmt1c3kgPiAwKSAvLyBqZW4gbsOha3VweVxuICAgICAgLnJlZHVjZSgoc3VtLCBvcCkgPT4gc3VtICsgb3AuY2VuYSAqIG9wLmt1c3kgKyBvcC5wb3BsYXRlaywgMClcbiAgICAgIC50b0ZpeGVkKDIpO1xuICB9O1xuXG4gIC8vIChWT0xJVEVMTsOJKSBBbG9rYWNpIGRvcG/EjcOtdMOhbWUgYcW+IGJ1ZGVtZSBtw610IHRvdGFsIHBvcnRmb2xpbyB2YWx1ZVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTRcIj5Qb3J0Zm9saW88L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkXCI+XG4gICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRhYmxlLXByaW1hcnlcIj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPlRpY2tlcjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5QcsWvbcSbcm7DoSBjZW5hIFtLxI1dPC90aD5cbiAgICAgICAgICAgICAgPHRoPlBvxI1ldCBrdXPFrzwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Tb3XEjWV0IHBvcGxhdGvFryBbS8SNXTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5DZWxrZW0gaW52ZXN0b3bDoW5vIFtLxI1dPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7cHJpc3Bldmt5Lm1hcCgocHJpc3BldmVrLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPHRkPntwcmlzcGV2ZWsudGlja2VyfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntzcG9jaXRlalBydW1lcihwcmlzcGV2ZWspfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntzcG9jaXRlalRvdGFsS3VzeShwcmlzcGV2ZWspfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntzcG9jaXRlalBvcGxhdGt5KHByaXNwZXZlayl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3Nwb2NpdGVqVG90YWxJbnZlc3RvdmFubyhwcmlzcGV2ZWspfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpbztcblxuLy8gZnVuY3Rpb24gUG9ydGZvbGlvKHsgcHJpc3Bldmt5IH0pIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC01XCI+XG4vLyAgICAgICA8aDI+UG9ydGZvbGlvPC9oMj5cbi8vICAgICAgIHtwcmlzcGV2a3kubGVuZ3RoID09PSAwID8gKFxuLy8gICAgICAgICA8cD5OZW3DoXRlIMW+w6FkbsOpIHDFmWlkYW7DqSBha2NpZTwvcD5cbi8vICAgICAgICkgOiAoXG4vLyAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4vLyAgICAgICAgICAge3ByaXNwZXZreS5tYXAoKHByaXNwZXZlaywgaW5kZXgpID0+IChcbi8vICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbi8vICAgICAgICAgICAgICAge3ByaXNwZXZlay50aWNrZXJ9IC0gcG/EjWV0IG9wZXJhY8OtIDoge3ByaXNwZXZlay5vcGVyYWNlLmxlbmd0aH1cbi8vICAgICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgKSl9XG4vLyAgICAgICAgIDwvdWw+XG4vLyAgICAgICApfVxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjJhZDRlMzBhNWJiZTI2YzA3Y2FcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJQb3J0Zm9saW8iLCJfcmVmIiwicHJpc3Bldmt5Iiwic3BvY2l0ZWpQcnVtZXIiLCJwcmlzcGV2ZWsiLCJvcGVyYWNlIiwidG90YWxOYWtsYWR5IiwiY2Vsa2VtS3VzdSIsImZvckVhY2giLCJfcmVmMiIsImNlbmEiLCJrdXN5IiwicG9wbGF0ZWsiLCJ0b0ZpeGVkIiwic3BvY2l0ZWpUb3RhbEt1c3kiLCJyZWR1Y2UiLCJzdW0iLCJvcCIsInNwb2NpdGVqUG9wbGF0a3kiLCJzcG9jaXRlalRvdGFsSW52ZXN0b3Zhbm8iLCJmaWx0ZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibWFwIiwiaW5kZXgiLCJrZXkiLCJ0aWNrZXIiXSwic291cmNlUm9vdCI6IiJ9