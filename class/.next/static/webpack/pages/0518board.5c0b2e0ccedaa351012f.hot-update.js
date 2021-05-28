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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BoardList_presenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardList.presenter */ \"./src/components/board/BoardList.presenter.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _BoardList_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardList.queries */ \"./src/components/board/BoardList.queries.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _BoardList_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoardList.styles */ \"./src/components/board/BoardList.styles.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/parkminkyu/Desktop/codecamp_1\\u1100\\u1175_\\u1107\\u1161\\u11A8\\u1106\\u1175\\u11AB\\u1100\\u1172/class/src/components/board/BoardList.container.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar BoardListContainer = function BoardListContainer() {\n  _s();\n\n  //필요한 기능 목록.\n  //1.라우터 사용하여 주소 가져오기.\n  //2. gql 데이터값 불러오기.\n  //3. 데이터 조회를 위한 useQuery 사용.\n  //4. useState로 데이터 묶기.=> 조회할때는 묶을 필요가 없네?\n  //클릭해서 주소를 가져와야 하는 경우가 아니므로 사용을 안하는게 맞나\n  // const router = useRouter()\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(_BoardList_queries__WEBPACK_IMPORTED_MODULE_2__.raison),\n      data = _useQuery.data; // 여기는 특정 값을 조회하는 것이 아닌 게시판 모든 내용을 찾아야 하므로\n  //\n  // const onClickPage = (page) => {\n  //   setCurrentPage(page)\n  // }\n\n\n  console.log(data); //* 이 단계에서는 객체들이 아직 fetchBoard에 있음\n  //* 이후의 키에 들어갈 때마다 data뒤에 ?를 넣어야함.\n  //* =옵셔널체이닝->데이타가 있을 경우 가져오고 없을 경우에는 아무 행동도 하지 않는다.\n\n  console.log(data === null || data === void 0 ? void 0 : data.fetchBoards); // let a= data.fetchBoards.slice(-6)\n  // const data2 = data?.fetchBoards.map((data) => {\n  //         <LineWrapper>\n  //             <Checkbox1 type = \"checkbox\"></Checkbox1>\n  //             <Number>{data.fetchBoards.number}</Number>\n  //             <Title>{data.fetchBoards.title}</Title>\n  //             <Date>{data.fetchBoards.createdAt}</Date>\n  //         </LineWrapper>\n  //         })\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1),\n      currentPage = _useState[0],\n      setCurrentPage = _useState[1];\n\n  var onClickPage = function onClickPage(e) {\n    var a = (0,_BoardList_styles__WEBPACK_IMPORTED_MODULE_4__.Number)(e.target.id);\n    setCurrentPage(a);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardList_presenter__WEBPACK_IMPORTED_MODULE_1__.default, {\n    data: data,\n    onClickPage: onClickPage,\n    currentPage: currentPage\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, _this) //! a={data} 에서 a를 프레젠터로 넘기는 것. 이때 한번 더 객채화가 되는건가?\n  ;\n};\n\n_s(BoardListContainer, \"GCLfVt4TtXG99/N2JLz7qO0tSH0=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery];\n});\n\n_c = BoardListContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardListContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardListContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYm9hcmQvQm9hcmRMaXN0LmNvbnRhaW5lci50c3g/NWJmOSJdLCJuYW1lcyI6WyJCb2FyZExpc3RDb250YWluZXIiLCJ1c2VRdWVyeSIsInJhaXNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hCb2FyZHMiLCJ1c2VTdGF0ZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJvbkNsaWNrUGFnZSIsImUiLCJhIiwiTnVtYmVyIiwidGFyZ2V0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUFBOztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVArQixrQkFTaEJDLHdEQUFRLENBQUNDLHNEQUFELENBVFE7QUFBQSxNQVN4QkMsSUFUd0IsYUFTeEJBLElBVHdCLEVBVS9CO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixFQWhCK0IsQ0FpQi9CO0FBQ0E7QUFDQTs7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosYUFBWUEsSUFBWix1QkFBWUEsSUFBSSxDQUFFRyxXQUFsQixFQXJCK0IsQ0F1Qi9CO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFoQytCLGtCQWtDT0MsK0NBQVEsQ0FBQyxDQUFELENBbENmO0FBQUEsTUFrQ3hCQyxXQWxDd0I7QUFBQSxNQWtDWEMsY0FsQ1c7O0FBb0MvQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekIsUUFBSUMsQ0FBQyxHQUFHQyx5REFBTSxDQUFDRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsRUFBVixDQUFkO0FBQ0FOLGtCQUFjLENBQUNHLENBQUQsQ0FBZDtBQUNELEdBSEQ7O0FBS0Esc0JBQ0UsOERBQUMseURBQUQ7QUFDRSxRQUFJLEVBQUVULElBRFI7QUFFRSxlQUFXLEVBQUVPLFdBRmY7QUFHRSxlQUFXLEVBQUVGO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLENBTUU7QUFORjtBQVFELENBakREOztHQUFNUixrQjtVQVNXQyxvRDs7O0tBVFhELGtCO0FBbUROLCtEQUFlQSxrQkFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2JvYXJkL0JvYXJkTGlzdC5jb250YWluZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkTGlzdFByZXNlbnRlciBmcm9tICcuL0JvYXJkTGlzdC5wcmVzZW50ZXInXG5pbXBvcnQge2dxbCwgdXNlUXVlcnl9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0IHtyYWlzb259IGZyb20gJy4vQm9hcmRMaXN0LnF1ZXJpZXMnXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGluZVdyYXBwZXIsIENoZWNrYm94MSwgTnVtYmVyLCBUaXRsZSwgRGF0ZX0gZnJvbSAnLi9Cb2FyZExpc3Quc3R5bGVzJ1xuXG5jb25zdCBCb2FyZExpc3RDb250YWluZXIgPSAoKSA9PiB7XG4gIC8v7ZWE7JqU7ZWcIOq4sOuKpSDrqqnroZ0uXG4gIC8vMS7rnbzsmrDthLAg7IKs7Jqp7ZWY7JesIOyjvOyGjCDqsIDsoLjsmKTquLAuXG4gIC8vMi4gZ3FsIOuNsOydtO2EsOqwkiDrtojrn6zsmKTquLAuXG4gIC8vMy4g642w7J207YSwIOyhsO2ajOulvCDsnITtlZwgdXNlUXVlcnkg7IKs7JqpLlxuICAvLzQuIHVzZVN0YXRl66GcIOuNsOydtO2EsCDrrLbquLAuPT4g7KGw7ZqM7ZWg65WM64qUIOustuydhCDtlYTsmpTqsIAg7JeG64SkP1xuICAvL+2BtOumre2VtOyEnCDso7zshozrpbwg6rCA7KC47JmA7JW8IO2VmOuKlCDqsr3smrDqsIAg7JWE64uI66+A66GcIOyCrOyaqeydhCDslYjtlZjripTqsowg66ee64KYXG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3Qge2RhdGF9ID0gdXNlUXVlcnkocmFpc29uKVxuICAvLyDsl6zquLDripQg7Yq57KCVIOqwkuydhCDsobDtmoztlZjripQg6rKD7J20IOyVhOuLjCDqsozsi5ztjJAg66qo65OgIOuCtOyaqeydhCDssL7slYTslbwg7ZWY66+A66GcXG4gIC8vXG5cbiAgLy8gY29uc3Qgb25DbGlja1BhZ2UgPSAocGFnZSkgPT4ge1xuICAvLyAgIHNldEN1cnJlbnRQYWdlKHBhZ2UpXG4gIC8vIH1cbiAgY29uc29sZS5sb2coZGF0YSlcbiAgLy8qIOydtCDri6jqs4Tsl5DshJzripQg6rCd7LK065Ok7J20IOyVhOyngSBmZXRjaEJvYXJk7JeQIOyeiOydjFxuICAvLyog7J207ZuE7J2YIO2CpOyXkCDrk6TslrTqsIgg65WM66eI64ukIGRhdGHrkqTsl5AgP+ulvCDrhKPslrTslbztlaguXG4gIC8vKiA97Ji17IWU64SQ7LK07J2064udLT7rjbDsnbTtg4DqsIAg7J6I7J2EIOqyveyasCDqsIDsoLjsmKTqs6Ag7JeG7J2EIOqyveyasOyXkOuKlCDslYTrrLQg7ZaJ64+Z64+EIO2VmOyngCDslYrripTri6QuXG5cbiAgY29uc29sZS5sb2coZGF0YT8uZmV0Y2hCb2FyZHMpXG5cbiAgLy8gbGV0IGE9IGRhdGEuZmV0Y2hCb2FyZHMuc2xpY2UoLTYpXG5cbiAgLy8gY29uc3QgZGF0YTIgPSBkYXRhPy5mZXRjaEJvYXJkcy5tYXAoKGRhdGEpID0+IHtcbiAgLy8gICAgICAgICA8TGluZVdyYXBwZXI+XG4gIC8vICAgICAgICAgICAgIDxDaGVja2JveDEgdHlwZSA9IFwiY2hlY2tib3hcIj48L0NoZWNrYm94MT5cbiAgLy8gICAgICAgICAgICAgPE51bWJlcj57ZGF0YS5mZXRjaEJvYXJkcy5udW1iZXJ9PC9OdW1iZXI+XG4gIC8vICAgICAgICAgICAgIDxUaXRsZT57ZGF0YS5mZXRjaEJvYXJkcy50aXRsZX08L1RpdGxlPlxuICAvLyAgICAgICAgICAgICA8RGF0ZT57ZGF0YS5mZXRjaEJvYXJkcy5jcmVhdGVkQXR9PC9EYXRlPlxuICAvLyAgICAgICAgIDwvTGluZVdyYXBwZXI+XG4gIC8vICAgICAgICAgfSlcblxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpXG5cbiAgY29uc3Qgb25DbGlja1BhZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBhID0gTnVtYmVyKGUudGFyZ2V0LmlkKVxuICAgIHNldEN1cnJlbnRQYWdlKGEpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb2FyZExpc3RQcmVzZW50ZXJcbiAgICAgIGRhdGE9e2RhdGF9XG4gICAgICBvbkNsaWNrUGFnZT17b25DbGlja1BhZ2V9XG4gICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgLz5cbiAgICAvLyEgYT17ZGF0YX0g7JeQ7IScIGHrpbwg7ZSE66CI7KCg7YSw66GcIOuEmOq4sOuKlCDqsoMuIOydtOuVjCDtlZzrsogg642UIOqwneyxhO2ZlOqwgCDrkJjripTqsbTqsIA/XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRMaXN0Q29udGFpbmVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/board/BoardList.container.tsx\n");

/***/ })

});