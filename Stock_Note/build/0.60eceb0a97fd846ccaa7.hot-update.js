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
  // Nejprve spočítáme celkovou hodnotu portfolia
  var totalInvested = prispevky.reduce(function (total, prispevek) {
    var totalKusy = prispevek.operace.reduce(function (sum, op) {
      return sum + op.kusy;
    }, 0);
    var totalNaklady = prispevek.operace.reduce(function (sum, op) {
      return sum + (op.kusy > 0 ? op.cena * op.kusy + op.poplatek : op.poplatek);
    }, 0);
    var prumernaCena = totalKusy > 0 ? totalNaklady / totalKusy : 0;
    return total + prumernaCena * totalKusy;
  }, 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Portfolio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "N\xE1zev akcie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Pr\u016Fm\u011Brn\xE1 n\xE1kupn\xED cena (K\u010D)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Po\u010Det kus\u016F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Sou\u010Det poplatk\u016F (K\u010D)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Celkem zainvestov\xE1no (K\u010D)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Alokace (%)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, prispevky.map(function (prispevek, index) {
    var totalKusy = prispevek.operace.reduce(function (sum, op) {
      return sum + op.kusy;
    }, 0);
    var totalPoplatky = prispevek.operace.reduce(function (sum, op) {
      return sum + op.poplatek;
    }, 0);
    var totalNaklady = prispevek.operace.reduce(function (sum, op) {
      return sum + (op.kusy > 0 ? op.cena * op.kusy + op.poplatek : op.poplatek);
    }, 0);
    var prumernaCena = totalKusy > 0 ? totalNaklady / totalKusy : 0;
    var totalInvestedAkcie = prumernaCena * totalKusy;
    var alokace = totalInvested > 0 ? (totalInvestedAkcie / totalInvested * 100).toFixed(2) : 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, prispevek.ticker), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, prumernaCena.toFixed(2), " K\u010D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, totalKusy), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, totalPoplatky, " K\u010D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, totalInvestedAkcie.toFixed(2), " K\u010D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, alokace, " %"));
  }))));
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
/******/ 	__webpack_require__.h = () => ("c1e474c9c9176f3f9834")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2IsQ0FBRWtCLGtCQUFrQixHQUFHbEIsYUFBYSxHQUFJLEdBQUcsRUFBRW9CLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FDdkQsQ0FBQztJQUVQLG9CQUNFeEIsMERBQUE7TUFBSXlCLEdBQUcsRUFBRUw7SUFBTSxnQkFDYnBCLDBEQUFBLGFBQUtPLFNBQVMsQ0FBQ21CLE1BQVcsQ0FBQyxlQUMzQjFCLDBEQUFBLGFBQUtnQixZQUFZLENBQUNRLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxVQUFPLENBQUMsZUFDckN4QiwwREFBQSxhQUFLUSxTQUFjLENBQUMsZUFDcEJSLDBEQUFBLGFBQUtxQixhQUFhLEVBQUMsVUFBTyxDQUFDLGVBQzNCckIsMERBQUEsYUFBS3NCLGtCQUFrQixDQUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsVUFBTyxDQUFDLGVBQzNDeEIsMERBQUEsYUFBS3VCLE9BQU8sRUFBQyxJQUFNLENBQ2pCLENBQUM7RUFFVCxDQUFDLENBQ0ksQ0FDRixDQUNKLENBQUM7QUFFVjtBQUVBLGlFQUFldEIsU0FBUyxFQUFDOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDeEZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vU3RvY2tfTm90ZS9qcy9wYWdlcy9Qb3J0Zm9saW8uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFBvcnRmb2xpbyh7IHByaXNwZXZreSB9KSB7XG4gIC8vIE5lanBydmUgc3BvxI3DrXTDoW1lIGNlbGtvdm91IGhvZG5vdHUgcG9ydGZvbGlhXG4gIGNvbnN0IHRvdGFsSW52ZXN0ZWQgPSBwcmlzcGV2a3kucmVkdWNlKCh0b3RhbCwgcHJpc3BldmVrKSA9PiB7XG4gICAgY29uc3QgdG90YWxLdXN5ID0gcHJpc3BldmVrLm9wZXJhY2UucmVkdWNlKChzdW0sIG9wKSA9PiBzdW0gKyBvcC5rdXN5LCAwKTtcbiAgICBjb25zdCB0b3RhbE5ha2xhZHkgPSBwcmlzcGV2ZWsub3BlcmFjZS5yZWR1Y2UoXG4gICAgICAoc3VtLCBvcCkgPT5cbiAgICAgICAgc3VtICsgKG9wLmt1c3kgPiAwID8gb3AuY2VuYSAqIG9wLmt1c3kgKyBvcC5wb3BsYXRlayA6IG9wLnBvcGxhdGVrKSxcbiAgICAgIDBcbiAgICApO1xuICAgIGNvbnN0IHBydW1lcm5hQ2VuYSA9IHRvdGFsS3VzeSA+IDAgPyB0b3RhbE5ha2xhZHkgLyB0b3RhbEt1c3kgOiAwO1xuICAgIHJldHVybiB0b3RhbCArIHBydW1lcm5hQ2VuYSAqIHRvdGFsS3VzeTtcbiAgfSwgMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC00XCI+XG4gICAgICA8aDI+UG9ydGZvbGlvPC9oMj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+TsOhemV2IGFrY2llPC90aD5cbiAgICAgICAgICAgIDx0aD5QcsWvbcSbcm7DoSBuw6FrdXBuw60gY2VuYSAoS8SNKTwvdGg+XG4gICAgICAgICAgICA8dGg+UG/EjWV0IGt1c8WvPC90aD5cbiAgICAgICAgICAgIDx0aD5Tb3XEjWV0IHBvcGxhdGvFryAoS8SNKTwvdGg+XG4gICAgICAgICAgICA8dGg+Q2Vsa2VtIHphaW52ZXN0b3bDoW5vIChLxI0pPC90aD5cbiAgICAgICAgICAgIDx0aD5BbG9rYWNlICglKTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtwcmlzcGV2a3kubWFwKChwcmlzcGV2ZWssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b3RhbEt1c3kgPSBwcmlzcGV2ZWsub3BlcmFjZS5yZWR1Y2UoXG4gICAgICAgICAgICAgIChzdW0sIG9wKSA9PiBzdW0gKyBvcC5rdXN5LFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgdG90YWxQb3BsYXRreSA9IHByaXNwZXZlay5vcGVyYWNlLnJlZHVjZShcbiAgICAgICAgICAgICAgKHN1bSwgb3ApID0+IHN1bSArIG9wLnBvcGxhdGVrLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgdG90YWxOYWtsYWR5ID0gcHJpc3BldmVrLm9wZXJhY2UucmVkdWNlKFxuICAgICAgICAgICAgICAoc3VtLCBvcCkgPT5cbiAgICAgICAgICAgICAgICBzdW0gK1xuICAgICAgICAgICAgICAgIChvcC5rdXN5ID4gMCA/IG9wLmNlbmEgKiBvcC5rdXN5ICsgb3AucG9wbGF0ZWsgOiBvcC5wb3BsYXRlayksXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBwcnVtZXJuYUNlbmEgPSB0b3RhbEt1c3kgPiAwID8gdG90YWxOYWtsYWR5IC8gdG90YWxLdXN5IDogMDtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsSW52ZXN0ZWRBa2NpZSA9IHBydW1lcm5hQ2VuYSAqIHRvdGFsS3VzeTtcbiAgICAgICAgICAgIGNvbnN0IGFsb2thY2UgPVxuICAgICAgICAgICAgICB0b3RhbEludmVzdGVkID4gMFxuICAgICAgICAgICAgICAgID8gKCh0b3RhbEludmVzdGVkQWtjaWUgLyB0b3RhbEludmVzdGVkKSAqIDEwMCkudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgIDogMDtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDx0ZD57cHJpc3BldmVrLnRpY2tlcn08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cHJ1bWVybmFDZW5hLnRvRml4ZWQoMil9IEvEjTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt0b3RhbEt1c3l9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3RvdGFsUG9wbGF0a3l9IEvEjTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt0b3RhbEludmVzdGVkQWtjaWUudG9GaXhlZCgyKX0gS8SNPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2Fsb2thY2V9ICU8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpbztcblxuLy8gZnVuY3Rpb24gUG9ydGZvbGlvKHsgcHJpc3Bldmt5IH0pIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC01XCI+XG4vLyAgICAgICA8aDI+UG9ydGZvbGlvPC9oMj5cbi8vICAgICAgIHtwcmlzcGV2a3kubGVuZ3RoID09PSAwID8gKFxuLy8gICAgICAgICA8cD5OZW3DoXRlIMW+w6FkbsOpIHDFmWlkYW7DqSBha2NpZTwvcD5cbi8vICAgICAgICkgOiAoXG4vLyAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4vLyAgICAgICAgICAge3ByaXNwZXZreS5tYXAoKHByaXNwZXZlaywgaW5kZXgpID0+IChcbi8vICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbi8vICAgICAgICAgICAgICAge3ByaXNwZXZlay50aWNrZXJ9IC0gcG/EjWV0IG9wZXJhY8OtIDoge3ByaXNwZXZlay5vcGVyYWNlLmxlbmd0aH1cbi8vICAgICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgKSl9XG4vLyAgICAgICAgIDwvdWw+XG4vLyAgICAgICApfVxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzFlNDc0YzljOTE3NmYzZjk4MzRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJQb3J0Zm9saW8iLCJfcmVmIiwicHJpc3Bldmt5IiwidG90YWxJbnZlc3RlZCIsInJlZHVjZSIsInRvdGFsIiwicHJpc3BldmVrIiwidG90YWxLdXN5Iiwib3BlcmFjZSIsInN1bSIsIm9wIiwia3VzeSIsInRvdGFsTmFrbGFkeSIsImNlbmEiLCJwb3BsYXRlayIsInBydW1lcm5hQ2VuYSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsInRvdGFsUG9wbGF0a3kiLCJ0b3RhbEludmVzdGVkQWtjaWUiLCJhbG9rYWNlIiwidG9GaXhlZCIsImtleSIsInRpY2tlciJdLCJzb3VyY2VSb290IjoiIn0=