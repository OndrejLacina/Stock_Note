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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Portfolio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "N\xE1zev akcie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Pr\u016Fm\u011Brn\xE1 n\xE1kupn\xED cena (K\u010D)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Po\u010Det kus\u016F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Sou\u010Det poplatk\u016F (K\u010D)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, prispevky.map(function (prispevek, index) {
    var operace = prispevek.operace || [];
    var totalNaklady = 0;
    var celkemKusu = 0;
    var celkemPoplatku = 0;
    operace.forEach(function (_ref2) {
      var cena = _ref2.cena,
        kusy = _ref2.kusy,
        poplatek = _ref2.poplatek;
      if (kusy > 0) {
        totalNaklady += cena * kusy + poplatek;
        celkemKusu += kusy;
      } else {
        // Při prodeji započítáme jen poplatek, ne cenu
        celkemKusu += kusy;
        celkemPoplatku += poplatek;
      }
      // A poplatek přičítáme vždy
      celkemPoplatku += poplatek;
    });
    var prumernaCena = celkemKusu > 0 ? (totalNaklady / celkemKusu).toFixed(2) : "-";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, prispevek.ticker), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, prumernaCena), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, celkemKusu), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, celkemPoplatku.toFixed(2)));
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
/******/ 	__webpack_require__.h = () => ("6a4289db660c88be1004")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMWU0NzRjOWM5MTc2ZjNmOTgzNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixTQUFTQyxTQUFTQSxDQUFBQyxJQUFBLEVBQWdCO0VBQUEsSUFBYkMsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7RUFDNUIsb0JBQ0VILDBEQUFBO0lBQUtLLFNBQVMsRUFBQztFQUFnQixnQkFDN0JMLDBEQUFBLGFBQUksV0FBYSxDQUFDLGVBQ2xCQSwwREFBQTtJQUFPSyxTQUFTLEVBQUM7RUFBcUIsZ0JBQ3BDTCwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBLGFBQUksZ0JBQWUsQ0FBQyxlQUNwQkEsMERBQUEsYUFBSSxvREFBOEIsQ0FBQyxlQUNuQ0EsMERBQUEsYUFBSSxzQkFBYyxDQUFDLGVBQ25CQSwwREFBQSxhQUFJLHFDQUF3QixDQUMxQixDQUNDLENBQUMsZUFDUkEsMERBQUEsZ0JBQ0dHLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLFVBQUNDLFNBQVMsRUFBRUMsS0FBSyxFQUFLO0lBQ25DLElBQU1DLE9BQU8sR0FBR0YsU0FBUyxDQUFDRSxPQUFPLElBQUksRUFBRTtJQUV2QyxJQUFJQyxZQUFZLEdBQUcsQ0FBQztJQUNwQixJQUFJQyxVQUFVLEdBQUcsQ0FBQztJQUNsQixJQUFJQyxjQUFjLEdBQUcsQ0FBQztJQUV0QkgsT0FBTyxDQUFDSSxPQUFPLENBQUMsVUFBQUMsS0FBQSxFQUE4QjtNQUFBLElBQTNCQyxJQUFJLEdBQUFELEtBQUEsQ0FBSkMsSUFBSTtRQUFFQyxJQUFJLEdBQUFGLEtBQUEsQ0FBSkUsSUFBSTtRQUFFQyxRQUFRLEdBQUFILEtBQUEsQ0FBUkcsUUFBUTtNQUNyQyxJQUFJRCxJQUFJLEdBQUcsQ0FBQyxFQUFFO1FBQ1pOLFlBQVksSUFBSUssSUFBSSxHQUFHQyxJQUFJLEdBQUdDLFFBQVE7UUFDdENOLFVBQVUsSUFBSUssSUFBSTtNQUNwQixDQUFDLE1BQU07UUFDTDtRQUNBTCxVQUFVLElBQUlLLElBQUk7UUFDbEJKLGNBQWMsSUFBSUssUUFBUTtNQUM1QjtNQUNBO01BQ0FMLGNBQWMsSUFBSUssUUFBUTtJQUM1QixDQUFDLENBQUM7SUFFRixJQUFNQyxZQUFZLEdBQ2hCUCxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUNELFlBQVksR0FBR0MsVUFBVSxFQUFFUSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztJQUUvRCxvQkFDRW5CLDBEQUFBO01BQUlvQixHQUFHLEVBQUVaO0lBQU0sZ0JBQ2JSLDBEQUFBLGFBQUtPLFNBQVMsQ0FBQ2MsTUFBVyxDQUFDLGVBQzNCckIsMERBQUEsYUFBS2tCLFlBQWlCLENBQUMsZUFDdkJsQiwwREFBQSxhQUFLVyxVQUFlLENBQUMsZUFDckJYLDBEQUFBLGFBQUtZLGNBQWMsQ0FBQ08sT0FBTyxDQUFDLENBQUMsQ0FBTSxDQUNqQyxDQUFDO0VBRVQsQ0FBQyxDQUNJLENBQ0YsQ0FDSixDQUFDO0FBRVY7QUFFQSxpRUFBZWxCLFNBQVMsRUFBQzs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3pFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1N0b2NrX05vdGUvanMvcGFnZXMvUG9ydGZvbGlvLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBQb3J0Zm9saW8oeyBwcmlzcGV2a3kgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTRcIj5cbiAgICAgIDxoMj5Qb3J0Zm9saW88L2gyPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Ow6F6ZXYgYWtjaWU8L3RoPlxuICAgICAgICAgICAgPHRoPlByxa9txJtybsOhIG7DoWt1cG7DrSBjZW5hIChLxI0pPC90aD5cbiAgICAgICAgICAgIDx0aD5Qb8SNZXQga3Vzxa88L3RoPlxuICAgICAgICAgICAgPHRoPlNvdcSNZXQgcG9wbGF0a8WvIChLxI0pPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge3ByaXNwZXZreS5tYXAoKHByaXNwZXZlaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhY2UgPSBwcmlzcGV2ZWsub3BlcmFjZSB8fCBbXTtcblxuICAgICAgICAgICAgbGV0IHRvdGFsTmFrbGFkeSA9IDA7XG4gICAgICAgICAgICBsZXQgY2Vsa2VtS3VzdSA9IDA7XG4gICAgICAgICAgICBsZXQgY2Vsa2VtUG9wbGF0a3UgPSAwO1xuXG4gICAgICAgICAgICBvcGVyYWNlLmZvckVhY2goKHsgY2VuYSwga3VzeSwgcG9wbGF0ZWsgfSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoa3VzeSA+IDApIHtcbiAgICAgICAgICAgICAgICB0b3RhbE5ha2xhZHkgKz0gY2VuYSAqIGt1c3kgKyBwb3BsYXRlaztcbiAgICAgICAgICAgICAgICBjZWxrZW1LdXN1ICs9IGt1c3k7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUMWZaSBwcm9kZWppIHphcG/EjcOtdMOhbWUgamVuIHBvcGxhdGVrLCBuZSBjZW51XG4gICAgICAgICAgICAgICAgY2Vsa2VtS3VzdSArPSBrdXN5O1xuICAgICAgICAgICAgICAgIGNlbGtlbVBvcGxhdGt1ICs9IHBvcGxhdGVrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIEEgcG9wbGF0ZWsgcMWZacSNw610w6FtZSB2xb5keVxuICAgICAgICAgICAgICBjZWxrZW1Qb3BsYXRrdSArPSBwb3BsYXRlaztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBwcnVtZXJuYUNlbmEgPVxuICAgICAgICAgICAgICBjZWxrZW1LdXN1ID4gMCA/ICh0b3RhbE5ha2xhZHkgLyBjZWxrZW1LdXN1KS50b0ZpeGVkKDIpIDogXCItXCI7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8dGQ+e3ByaXNwZXZlay50aWNrZXJ9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3BydW1lcm5hQ2VuYX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57Y2Vsa2VtS3VzdX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57Y2Vsa2VtUG9wbGF0a3UudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpbztcblxuLy8gZnVuY3Rpb24gUG9ydGZvbGlvKHsgcHJpc3Bldmt5IH0pIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC01XCI+XG4vLyAgICAgICA8aDI+UG9ydGZvbGlvPC9oMj5cbi8vICAgICAgIHtwcmlzcGV2a3kubGVuZ3RoID09PSAwID8gKFxuLy8gICAgICAgICA8cD5OZW3DoXRlIMW+w6FkbsOpIHDFmWlkYW7DqSBha2NpZTwvcD5cbi8vICAgICAgICkgOiAoXG4vLyAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4vLyAgICAgICAgICAge3ByaXNwZXZreS5tYXAoKHByaXNwZXZlaywgaW5kZXgpID0+IChcbi8vICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbi8vICAgICAgICAgICAgICAge3ByaXNwZXZlay50aWNrZXJ9IC0gcG/EjWV0IG9wZXJhY8OtIDoge3ByaXNwZXZlay5vcGVyYWNlLmxlbmd0aH1cbi8vICAgICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgKSl9XG4vLyAgICAgICAgIDwvdWw+XG4vLyAgICAgICApfVxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmE0Mjg5ZGI2NjBjODhiZTEwMDRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJQb3J0Zm9saW8iLCJfcmVmIiwicHJpc3Bldmt5IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1hcCIsInByaXNwZXZlayIsImluZGV4Iiwib3BlcmFjZSIsInRvdGFsTmFrbGFkeSIsImNlbGtlbUt1c3UiLCJjZWxrZW1Qb3BsYXRrdSIsImZvckVhY2giLCJfcmVmMiIsImNlbmEiLCJrdXN5IiwicG9wbGF0ZWsiLCJwcnVtZXJuYUNlbmEiLCJ0b0ZpeGVkIiwia2V5IiwidGlja2VyIl0sInNvdXJjZVJvb3QiOiIifQ==