/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/0518board",{

/***/ "./src/components/board/BoardList.container.tsx":
/*!******************************************************!*\
  !*** ./src/components/board/BoardList.container.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BoardList_presenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardList.presenter */ \"./src/components/board/BoardList.presenter.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _BoardList_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardList.queries */ \"./src/components/board/BoardList.queries.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/parkminkyu/Desktop/codecamp_1\\u1100\\u1175_\\u1107\\u1161\\u11A8\\u1106\\u1175\\u11AB\\u1100\\u1172/class/src/components/board/BoardList.container.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar BoardListContainer = function BoardListContainer() {\n  _s();\n\n  //필요한 기능 목록.\n  //1.라우터 사용하여 주소 가져오기.\n  //2. gql 데이터값 불러오기.\n  //3. 데이터 조회를 위한 useQuery 사용.\n  //4. useState로 데이터 묶기.=> 조회할때는 묶을 필요가 없네?\n  //클릭해서 주소를 가져와야 하는 경우가 아니므로 사용을 안하는게 맞나\n  // const router = useRouter()\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_BoardList_queries__WEBPACK_IMPORTED_MODULE_2__.raison, {\n    variables: {\n      page: currentPage\n    }\n  }),\n      data = _useQuery.data; // 여기는 특정 값을 조회하는 것이 아닌 게시판 모든 내용을 찾아야 하므로\n  //\n  // const onClickPage = (page) => {\n  //   setCurrentPage(page)\n  // }\n\n\n  console.log(data); //* 이 단계에서는 객체들이 아직 fetchBoard에 있음\n  //* 이후의 키에 들어갈 때마다 data뒤에 ?를 넣어야함.\n  //* =옵셔널체이닝->데이타가 있을 경우 가져오고 없을 경우에는 아무 행동도 하지 않는다.\n\n  console.log(data === null || data === void 0 ? void 0 : data.fetchBoards); // let a= data.fetchBoards.slice(-6)\n  // const data2 = data?.fetchBoards.map((data) => {\n  //         <LineWrapper>\n  //             <Checkbox1 type = \"checkbox\"></Checkbox1>\n  //             <Number>{data.fetchBoards.number}</Number>\n  //             <Title>{data.fetchBoards.title}</Title>\n  //             <Date>{data.fetchBoards.createdAt}</Date>\n  //         </LineWrapper>\n  //         })\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1),\n      currentPage = _useState[0],\n      setCurrentPage = _useState[1];\n\n  var onClickPage = function onClickPage(e) {\n    var a = e.target.id;\n    setCurrentPage(a);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardList_presenter__WEBPACK_IMPORTED_MODULE_1__.default, {\n    data: data,\n    onClickPage: onClickPage,\n    currentPage: currentPage\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, _this) //! a={data} 에서 a를 프레젠터로 넘기는 것. 이때 한번 더 객채화가 되는건가?\n  ;\n};\n\n_s(BoardListContainer, \"GCLfVt4TtXG99/N2JLz7qO0tSH0=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery];\n});\n\n_c = BoardListContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardListContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardListContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYm9hcmQvQm9hcmRMaXN0LmNvbnRhaW5lci50c3g/NWJmOSJdLCJuYW1lcyI6WyJCb2FyZExpc3RDb250YWluZXIiLCJ1c2VRdWVyeSIsInJhaXNvbiIsInZhcmlhYmxlcyIsInBhZ2UiLCJjdXJyZW50UGFnZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hCb2FyZHMiLCJ1c2VTdGF0ZSIsInNldEN1cnJlbnRQYWdlIiwib25DbGlja1BhZ2UiLCJlIiwiYSIsInRhcmdldCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFBQTs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQK0Isa0JBU2hCQyx3REFBUSxDQUFDQyxzREFBRCxFQUFTO0FBQzlCQyxhQUFTLEVBQUU7QUFBQ0MsVUFBSSxFQUFFQztBQUFQO0FBRG1CLEdBQVQsQ0FUUTtBQUFBLE1BU3hCQyxJQVR3QixhQVN4QkEsSUFUd0IsRUFZL0I7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLEVBbEIrQixDQW1CL0I7QUFDQTtBQUNBOztBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixhQUFZQSxJQUFaLHVCQUFZQSxJQUFJLENBQUVHLFdBQWxCLEVBdkIrQixDQXlCL0I7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWxDK0Isa0JBb0NPQywrQ0FBUSxDQUFDLENBQUQsQ0FwQ2Y7QUFBQSxNQW9DeEJMLFdBcEN3QjtBQUFBLE1Bb0NYTSxjQXBDVzs7QUFzQy9CLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QixRQUFJQyxDQUFDLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxFQUFqQjtBQUNBTCxrQkFBYyxDQUFDRyxDQUFELENBQWQ7QUFDRCxHQUhEOztBQUtBLHNCQUNFLDhEQUFDLHlEQUFEO0FBQ0UsUUFBSSxFQUFFUixJQURSO0FBRUUsZUFBVyxFQUFFTSxXQUZmO0FBR0UsZUFBVyxFQUFFUDtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixDQU1FO0FBTkY7QUFRRCxDQW5ERDs7R0FBTUwsa0I7VUFTV0Msb0Q7OztLQVRYRCxrQjtBQXFETiwrREFBZUEsa0JBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ib2FyZC9Cb2FyZExpc3QuY29udGFpbmVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2FyZExpc3RQcmVzZW50ZXIgZnJvbSAnLi9Cb2FyZExpc3QucHJlc2VudGVyJ1xuaW1wb3J0IHtncWwsIHVzZVF1ZXJ5fSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCB7cmFpc29ufSBmcm9tICcuL0JvYXJkTGlzdC5xdWVyaWVzJ1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmVXcmFwcGVyLCBDaGVja2JveDEsIE51bWJlciwgVGl0bGUsIERhdGV9IGZyb20gJy4vQm9hcmRMaXN0LnN0eWxlcydcblxuY29uc3QgQm9hcmRMaXN0Q29udGFpbmVyID0gKCkgPT4ge1xuICAvL+2VhOyalO2VnCDquLDriqUg66qp66GdLlxuICAvLzEu65287Jqw7YSwIOyCrOyaqe2VmOyXrCDso7zshowg6rCA7KC47Jik6riwLlxuICAvLzIuIGdxbCDrjbDsnbTthLDqsJIg67aI65+s7Jik6riwLlxuICAvLzMuIOuNsOydtO2EsCDsobDtmozrpbwg7JyE7ZWcIHVzZVF1ZXJ5IOyCrOyaqS5cbiAgLy80LiB1c2VTdGF0ZeuhnCDrjbDsnbTthLAg66y26riwLj0+IOyhsO2ajO2VoOuVjOuKlCDrrLbsnYQg7ZWE7JqU6rCAIOyXhuuEpD9cbiAgLy/tgbTrpq3tlbTshJwg7KO87IaM66W8IOqwgOyguOyZgOyVvCDtlZjripQg6rK97Jqw6rCAIOyVhOuLiOuvgOuhnCDsgqzsmqnsnYQg7JWI7ZWY64qU6rKMIOunnuuCmFxuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IHtkYXRhfSA9IHVzZVF1ZXJ5KHJhaXNvbiwge1xuICAgIHZhcmlhYmxlczoge3BhZ2U6IGN1cnJlbnRQYWdlfSxcbiAgfSlcbiAgLy8g7Jes6riw64qUIO2KueyglSDqsJLsnYQg7KGw7ZqM7ZWY64qUIOqyg+ydtCDslYTri4wg6rKM7Iuc7YyQIOuqqOuToCDrgrTsmqnsnYQg7LC+7JWE7JW8IO2VmOuvgOuhnFxuICAvL1xuXG4gIC8vIGNvbnN0IG9uQ2xpY2tQYWdlID0gKHBhZ2UpID0+IHtcbiAgLy8gICBzZXRDdXJyZW50UGFnZShwYWdlKVxuICAvLyB9XG4gIGNvbnNvbGUubG9nKGRhdGEpXG4gIC8vKiDsnbQg64uo6rOE7JeQ7ISc64qUIOqwneyytOuTpOydtCDslYTsp4EgZmV0Y2hCb2FyZOyXkCDsnojsnYxcbiAgLy8qIOydtO2bhOydmCDtgqTsl5Ag65Ok7Ja06rCIIOuVjOuniOuLpCBkYXRh65Kk7JeQID/rpbwg64Sj7Ja07JW87ZWoLlxuICAvLyogPeyYteyFlOuEkOyytOydtOuLnS0+642w7J207YOA6rCAIOyeiOydhCDqsr3smrAg6rCA7KC47Jik6rOgIOyXhuydhCDqsr3smrDsl5DripQg7JWE66y0IO2WieuPmeuPhCDtlZjsp4Ag7JWK64qU64ukLlxuXG4gIGNvbnNvbGUubG9nKGRhdGE/LmZldGNoQm9hcmRzKVxuXG4gIC8vIGxldCBhPSBkYXRhLmZldGNoQm9hcmRzLnNsaWNlKC02KVxuXG4gIC8vIGNvbnN0IGRhdGEyID0gZGF0YT8uZmV0Y2hCb2FyZHMubWFwKChkYXRhKSA9PiB7XG4gIC8vICAgICAgICAgPExpbmVXcmFwcGVyPlxuICAvLyAgICAgICAgICAgICA8Q2hlY2tib3gxIHR5cGUgPSBcImNoZWNrYm94XCI+PC9DaGVja2JveDE+XG4gIC8vICAgICAgICAgICAgIDxOdW1iZXI+e2RhdGEuZmV0Y2hCb2FyZHMubnVtYmVyfTwvTnVtYmVyPlxuICAvLyAgICAgICAgICAgICA8VGl0bGU+e2RhdGEuZmV0Y2hCb2FyZHMudGl0bGV9PC9UaXRsZT5cbiAgLy8gICAgICAgICAgICAgPERhdGU+e2RhdGEuZmV0Y2hCb2FyZHMuY3JlYXRlZEF0fTwvRGF0ZT5cbiAgLy8gICAgICAgICA8L0xpbmVXcmFwcGVyPlxuICAvLyAgICAgICAgIH0pXG5cbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKVxuXG4gIGNvbnN0IG9uQ2xpY2tQYWdlID0gKGUpID0+IHtcbiAgICBsZXQgYSA9IGUudGFyZ2V0LmlkXG4gICAgc2V0Q3VycmVudFBhZ2UoYSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJvYXJkTGlzdFByZXNlbnRlclxuICAgICAgZGF0YT17ZGF0YX1cbiAgICAgIG9uQ2xpY2tQYWdlPXtvbkNsaWNrUGFnZX1cbiAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cbiAgICAvPlxuICAgIC8vISBhPXtkYXRhfSDsl5DshJwgYeulvCDtlITroIjsoKDthLDroZwg64SY6riw64qUIOqygy4g7J2065WMIO2VnOuyiCDrjZQg6rCd7LGE7ZmU6rCAIOuQmOuKlOqxtOqwgD9cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZExpc3RDb250YWluZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/board/BoardList.container.tsx\n");

/***/ })

});