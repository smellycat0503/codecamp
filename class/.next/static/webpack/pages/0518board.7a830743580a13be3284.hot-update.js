/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/0518board",{

/***/ "./src/components/board/BoardList.presenter.tsx":
/*!******************************************************!*\
  !*** ./src/components/board/BoardList.presenter.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BoardList_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardList.styles */ \"./src/components/board/BoardList.styles.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/parkminkyu/Desktop/codecamp_1\\u1100\\u1175_\\u1107\\u1161\\u11A8\\u1106\\u1175\\u11AB\\u1100\\u1172/class/src/components/board/BoardList.presenter.tsx\",\n    _this = undefined;\n\n// import { Checkbox } from '@material-ui/core'\n\n\n//! 이 프롭스 과정에서 또 객체화되므로 {}를 넣어줘야함!!!!!!!!!!!!!!\nvar BoardListPresenter = function BoardListPresenter(_ref) {\n  var data = _ref.data,\n      onClickPage = _ref.onClickPage,\n      currentPage = _ref.currentPage;\n  // data.filter((data)=>data.fetchBoard.number )\n  // let a= data.slice(-6)\n  console.log(data); // a.map((data) => {\n  //         <LineWrapper>\n  //             <Checkbox1 type = \"checkbox\"></Checkbox1>\n  //             <Number>{data.fetchBoard.number}</Number>\n  //             <Title>{data.fetchBoard.title}</Title>\n  //             <Date>{data.fetchBoard.createdAt}</Date>\n  //         </LineWrapper>})\n  // let a= data.fetchBoard.slice(-6)\n  // const list = a.map((data) => {\n  //         <LineWrapper>\n  //             <Checkbox1 type = \"checkbox\"></Checkbox1>\n  //             <Number>{data.fetchBoard.number}</Number>\n  //             <Title>{data.fetchBoard.title}</Title>\n  //             <Date>{data.fetchBoard.createdAt}</Date>\n  //         </LineWrapper>})\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardList_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardList_styles__WEBPACK_IMPORTED_MODULE_1__.HeadLineWrapper, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardList_styles__WEBPACK_IMPORTED_MODULE_1__.CheckboxInHead, {\n        type: \"checkbox\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardList_styles__WEBPACK_IMPORTED_MODULE_1__.NumberInHead, {\n        children: \"\\uBC88\\uD638\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardList_styles__WEBPACK_IMPORTED_MODULE_1__.TitleInHead, {\n        children: \"\\uC81C\\uBAA9\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardList_styles__WEBPACK_IMPORTED_MODULE_1__.DateInHead, {\n        children: \"\\uC791\\uC131\\uC77C\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardList_styles__WEBPACK_IMPORTED_MODULE_1__.BodyWrapper, {\n      children: [data === null || data === void 0 ? void 0 : data.fetchBoards.map(function (board) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardList_styles__WEBPACK_IMPORTED_MODULE_1__.LineWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardList_styles__WEBPACK_IMPORTED_MODULE_1__.Checkbox1, {\n            type: \"checkbox\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardList_styles__WEBPACK_IMPORTED_MODULE_1__.Number, {\n            children: board.number\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardList_styles__WEBPACK_IMPORTED_MODULE_1__.Title, {\n            children: board.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardList_styles__WEBPACK_IMPORTED_MODULE_1__.Date, {\n            children: board.createdAt\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this);\n      }), new Array(10).fill(1).map(function (___, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardList_styles__WEBPACK_IMPORTED_MODULE_1__.Page, {\n          id: String(index + 1),\n          onClick: onClickPage,\n          isActive: currentPage === index + 1,\n          children: index + 1\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardList_styles__WEBPACK_IMPORTED_MODULE_1__.Deletebutton, {\n      children: \"\\uC120\\uD0DD \\uC0AD\\uC81C\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = BoardListPresenter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardListPresenter);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardListPresenter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYm9hcmQvQm9hcmRMaXN0LnByZXNlbnRlci50c3g/MTZlOSJdLCJuYW1lcyI6WyJCb2FyZExpc3RQcmVzZW50ZXIiLCJkYXRhIiwib25DbGlja1BhZ2UiLCJjdXJyZW50UGFnZSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaEJvYXJkcyIsIm1hcCIsImJvYXJkIiwibnVtYmVyIiwidGl0bGUiLCJjcmVhdGVkQXQiLCJBcnJheSIsImZpbGwiLCJfX18iLCJpbmRleCIsIlN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBSUE7O0FBaUJBO0FBQ0EsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixPQUFzQztBQUFBLE1BQXBDQyxJQUFvQyxRQUFwQ0EsSUFBb0M7QUFBQSxNQUE5QkMsV0FBOEIsUUFBOUJBLFdBQThCO0FBQUEsTUFBakJDLFdBQWlCLFFBQWpCQSxXQUFpQjtBQUMvRDtBQUVBO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaLEVBTCtELENBTy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFDRSw4REFBQyxzREFBRDtBQUFBLDRCQUNFLDhEQUFDLDhEQUFEO0FBQUEsOEJBQ0UsOERBQUMsNkRBQUQ7QUFBZ0IsWUFBSSxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUUsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQW1CRSw4REFBQywwREFBRDtBQUFBLGlCQUVHQSxJQUZILGFBRUdBLElBRkgsdUJBRUdBLElBQUksQ0FBRUssV0FBTixDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQ0MsS0FBRDtBQUFBLDRCQUNyQiw4REFBQywwREFBRDtBQUFBLGtDQUNFLDhEQUFDLHdEQUFEO0FBQVcsZ0JBQUksRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMscURBQUQ7QUFBQSxzQkFBU0EsS0FBSyxDQUFDQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRSw4REFBQyxvREFBRDtBQUFBLHNCQUFRRCxLQUFLLENBQUNFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFLDhEQUFDLG1EQUFEO0FBQUEsc0JBQU9GLEtBQUssQ0FBQ0c7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEcUI7QUFBQSxPQUF0QixDQUZILEVBWUcsSUFBSUMsS0FBSixDQUFVLEVBQVYsRUFBY0MsSUFBZCxDQUFtQixDQUFuQixFQUFzQk4sR0FBdEIsQ0FBMEIsVUFBQ08sR0FBRCxFQUFNQyxLQUFOO0FBQUEsNEJBQ3pCLDhEQUFDLG1EQUFEO0FBQ0UsWUFBRSxFQUFFQyxNQUFNLENBQUNELEtBQUssR0FBRyxDQUFULENBRFo7QUFFRSxpQkFBTyxFQUFFYixXQUZYO0FBR0Usa0JBQVEsRUFBRUMsV0FBVyxLQUFLWSxLQUFLLEdBQUcsQ0FIcEM7QUFBQSxvQkFLR0EsS0FBSyxHQUFHO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEeUI7QUFBQSxPQUExQixDQVpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRixlQXlDRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZDRCxDQXRFRDs7S0FBTWYsa0I7QUF3RU4sK0RBQWVBLGtCQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvYm9hcmQvQm9hcmRMaXN0LnByZXNlbnRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHtkZWxCYXNlUGF0aH0gZnJvbSAnbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtnZXREYXRlfSBmcm9tICcuLi9jb21tb25zL2xpYnJhcmllcy91dGlscydcblxuaW1wb3J0IHtcbiAgV3JhcHBlcixcbiAgSGVhZExpbmVXcmFwcGVyLFxuICBDaGVja2JveEluSGVhZCxcbiAgVGl0bGVJbkhlYWQsXG4gIE51bWJlckluSGVhZCxcbiAgRGF0ZUluSGVhZCxcbiAgQm9keVdyYXBwZXIsXG4gIExpbmVXcmFwcGVyLFxuICBDaGVja2JveDEsXG4gIE51bWJlcixcbiAgVGl0bGUsXG4gIERhdGUsXG4gIERlbGV0ZWJ1dHRvbixcbiAgUGFnZSxcbn0gZnJvbSAnLi9Cb2FyZExpc3Quc3R5bGVzJ1xuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gJ3JlYWN0LWluZmluaXRlLXNjcm9sbGVyJ1xuLy8hIOydtCDtlITroa3siqQg6rO87KCV7JeQ7IScIOuYkCDqsJ3ssrTtmZTrkJjrr4DroZwge33rpbwg64Sj7Ja07KSY7JW87ZWoISEhISEhISEhISEhISFcbmNvbnN0IEJvYXJkTGlzdFByZXNlbnRlciA9ICh7ZGF0YSwgb25DbGlja1BhZ2UsIGN1cnJlbnRQYWdlfSkgPT4ge1xuICAvLyBkYXRhLmZpbHRlcigoZGF0YSk9PmRhdGEuZmV0Y2hCb2FyZC5udW1iZXIgKVxuXG4gIC8vIGxldCBhPSBkYXRhLnNsaWNlKC02KVxuXG4gIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgLy8gYS5tYXAoKGRhdGEpID0+IHtcbiAgLy8gICAgICAgICA8TGluZVdyYXBwZXI+XG4gIC8vICAgICAgICAgICAgIDxDaGVja2JveDEgdHlwZSA9IFwiY2hlY2tib3hcIj48L0NoZWNrYm94MT5cbiAgLy8gICAgICAgICAgICAgPE51bWJlcj57ZGF0YS5mZXRjaEJvYXJkLm51bWJlcn08L051bWJlcj5cbiAgLy8gICAgICAgICAgICAgPFRpdGxlPntkYXRhLmZldGNoQm9hcmQudGl0bGV9PC9UaXRsZT5cbiAgLy8gICAgICAgICAgICAgPERhdGU+e2RhdGEuZmV0Y2hCb2FyZC5jcmVhdGVkQXR9PC9EYXRlPlxuICAvLyAgICAgICAgIDwvTGluZVdyYXBwZXI+fSlcblxuICAvLyBsZXQgYT0gZGF0YS5mZXRjaEJvYXJkLnNsaWNlKC02KVxuXG4gIC8vIGNvbnN0IGxpc3QgPSBhLm1hcCgoZGF0YSkgPT4ge1xuICAvLyAgICAgICAgIDxMaW5lV3JhcHBlcj5cbiAgLy8gICAgICAgICAgICAgPENoZWNrYm94MSB0eXBlID0gXCJjaGVja2JveFwiPjwvQ2hlY2tib3gxPlxuICAvLyAgICAgICAgICAgICA8TnVtYmVyPntkYXRhLmZldGNoQm9hcmQubnVtYmVyfTwvTnVtYmVyPlxuICAvLyAgICAgICAgICAgICA8VGl0bGU+e2RhdGEuZmV0Y2hCb2FyZC50aXRsZX08L1RpdGxlPlxuICAvLyAgICAgICAgICAgICA8RGF0ZT57ZGF0YS5mZXRjaEJvYXJkLmNyZWF0ZWRBdH08L0RhdGU+XG4gIC8vICAgICAgICAgPC9MaW5lV3JhcHBlcj59KVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8SGVhZExpbmVXcmFwcGVyPlxuICAgICAgICA8Q2hlY2tib3hJbkhlYWQgdHlwZT1cImNoZWNrYm94XCI+PC9DaGVja2JveEluSGVhZD5cbiAgICAgICAgPE51bWJlckluSGVhZD7rsojtmLg8L051bWJlckluSGVhZD5cbiAgICAgICAgPFRpdGxlSW5IZWFkPuygnOuqqTwvVGl0bGVJbkhlYWQ+XG4gICAgICAgIDxEYXRlSW5IZWFkPuyekeyEseydvDwvRGF0ZUluSGVhZD5cbiAgICAgIDwvSGVhZExpbmVXcmFwcGVyPlxuICAgICAgey8qIDxJbmZpbml0ZVNjcm9sbFxuICAgICAgICBwYWdlU3RhcnQ9ezB9XG4gICAgICAgIGxvYWRNb3JlPXsoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJzEyMycpXG4gICAgICAgIH19XG4gICAgICAgIGhhc01vcmU9e3RydWUgfHwgZmFsc2V9XG4gICAgICAgIGxvYWRlcj17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIiBrZXk9ezB9PlxuICAgICAgICAgICAgTG9hZGluZyAuLi5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPjwvSW5maW5pdGVTY3JvbGw+ICovfVxuICAgICAgPEJvZHlXcmFwcGVyPlxuICAgICAgICB7LyogPExpbmVXcmFwcGVyPntkYXRhPy5mZXRjaEJvYXJkcy5tYXAoKGRhdGEpID0+ICg8ZGl2PmFzczwvZGl2PikpfTwvTGluZVdyYXBwZXI+ICovfVxuICAgICAgICB7ZGF0YT8uZmV0Y2hCb2FyZHMubWFwKChib2FyZCkgPT4gKFxuICAgICAgICAgIDxMaW5lV3JhcHBlcj5cbiAgICAgICAgICAgIDxDaGVja2JveDEgdHlwZT1cImNoZWNrYm94XCI+PC9DaGVja2JveDE+XG4gICAgICAgICAgICA8TnVtYmVyPntib2FyZC5udW1iZXJ9PC9OdW1iZXI+XG4gICAgICAgICAgICA8VGl0bGU+e2JvYXJkLnRpdGxlfTwvVGl0bGU+XG4gICAgICAgICAgICA8RGF0ZT57Ym9hcmQuY3JlYXRlZEF0fTwvRGF0ZT5cbiAgICAgICAgICAgIHsvKiA8ZGl2Pu2YhOyerCDsnbjrjbHsiqQ6PC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPXtib2FyZC5udW1iZXJ9PuyCreygnDwvYnV0dG9uPiAqL31cbiAgICAgICAgICA8L0xpbmVXcmFwcGVyPlxuICAgICAgICApKX1cbiAgICAgICAge25ldyBBcnJheSgxMCkuZmlsbCgxKS5tYXAoKF9fXywgaW5kZXgpID0+IChcbiAgICAgICAgICA8UGFnZVxuICAgICAgICAgICAgaWQ9e1N0cmluZyhpbmRleCArIDEpfVxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja1BhZ2V9XG4gICAgICAgICAgICBpc0FjdGl2ZT17Y3VycmVudFBhZ2UgPT09IGluZGV4ICsgMX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aW5kZXggKyAxfVxuICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgKSl9XG4gICAgICA8L0JvZHlXcmFwcGVyPlxuICAgICAgPERlbGV0ZWJ1dHRvbj7shKDtg50g7IKt7KCcPC9EZWxldGVidXR0b24+XG4gICAgPC9XcmFwcGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkTGlzdFByZXNlbnRlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/board/BoardList.presenter.tsx\n");

/***/ })

});