/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/mutation",{

/***/ "./pages/mutation/index.js":
/*!*********************************!*\
  !*** ./pages/mutation/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MutationPage; }\n/* harmony export */ });\n/* harmony import */ var _Users_parkminkyu_Desktop_codecamp_1_class_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_parkminkyu_Desktop_codecamp_1_class_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_parkminkyu_Desktop_codecamp_1_class_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_parkminkyu_Desktop_codecamp_1_class_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_parkminkyu_Desktop_codecamp_1_class_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_parkminkyu_Desktop_codecamp_1_class_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/parkminkyu/Desktop/codecamp_1\\u1100\\u1175_\\u1107\\u1161\\u11A8\\u1106\\u1175\\u11AB\\u1100\\u1172/class/pages/mutation/index.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_parkminkyu_Desktop_codecamp_1_class_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)([\"\\n            mutation createBoard($writer: String, $password: String, $title: String, $contents: String) { \\n                \\n                    createBoard( \\n                        writer: $writer,\\n                        password: $password,\\n                        title: $title,\\n                        contents: $contents\\n                    \\n                ){\\n                    message\\n                }\\n                }\\n    \\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nfunction MutationPage() {\n  _s();\n\n  // const [writer, setWriter] = useState(\"\")\n  // const [password, setPassword] = useState(\"\")\n  // const [title, setTitle] = useState(\"\")\n  // const [contents, setContents] = useState(\"\")\n  //-> 이거 4개를 하나로 묶는 방법이 있음.-> 객체 사용.\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n    writer: '',\n    password: '',\n    title: '',\n    contents: ''\n  }),\n      aaa = _useState[0],\n      setAaa = _useState[1];\n\n  var CREATE_BOARD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.gql)(_templateObject());\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation)(CREATE_BOARD),\n      _useMutation2 = (0,_Users_parkminkyu_Desktop_codecamp_1_class_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 1),\n      createBoard = _useMutation2[0];\n\n  function onClickPost() {\n    return _onClickPost.apply(this, arguments);\n  } //     const result = await createBoard({\n  //         variables: {\n  //             writer,\n  //             password,\n  //             title: title,\n  //             contents: contents\n  //             //: 뒤에 위에 선언한 state를 넣는다. {} 안에 넣지는 않음.\n  //             // 앞과 state가 같으면 앞 내용 생략 가능.\n  //             // variables -> \n  //          }\n  //     })\n  //     console.log(result)\n  //     // alert(result.data.createBoard.message)\n  //     // console.log(\"게시물 등록하기입니다.\")\n  //     // const sendwriter = await bbb()\n  //     // console.log(sendwriter)\n  //     //콘솔로그 다양하게 활용\n  //     //-> 실무에서는 괄호 안에 '' 를 넣음\n  // } //여기 기준 윗 부분 JS, 아랫부분 HTML\n  // const onChangeWritter = event => { \n  //     // setWriter(event.target.value)\n  // }\n  // const onChangePassword = event => {\n  //     // setPassword(event.target.value)\n  // }\n  // const onChangeTitle = event => {\n  //     // setTitle(event.target.value)\n  // }\n  // const onChangeContents = event => {\n  //     // setContents(event.target.value)\n  // }\n\n\n  function _onClickPost() {\n    _onClickPost = (0,_Users_parkminkyu_Desktop_codecamp_1_class_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_parkminkyu_Desktop_codecamp_1_class_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var result;\n      return _Users_parkminkyu_Desktop_codecamp_1_class_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return createBoard({\n                variables: {\n                  writer: writer,\n                  password: password,\n                  title: title,\n                  contents: contents\n                }\n              });\n\n            case 3:\n              result = _context.sent;\n              console.warn('writer', writer);\n              console.info('password', password);\n              console.error('title', title);\n              console.log('contents', contents);\n              console.log(result);\n              alert(result.data.createBoard.message);\n              _context.next = 15;\n              break;\n\n            case 12:\n              _context.prev = 12;\n              _context.t0 = _context[\"catch\"](0);\n              alert(_context.t0.message);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 12]]);\n    }));\n    return _onClickPost.apply(this, arguments);\n  }\n\n  var onChangeInput = function onChangeInput(event) {\n    // console.log(event.target)\n    console.log(event.target.value);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [\"\\uC791\\uC131\\uC790: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n      type: \"text\",\n      onChange: onChangeInput\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 22\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 76\n    }, this), \"\\uBE44\\uBC00\\uBC88\\uD638: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n      type: \"password\",\n      onChange: onChangeInput\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 23\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 81\n    }, this), \"\\uC81C\\uBAA9: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n      type: \"text\",\n      onChange: onChangeInput\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 21\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 75\n    }, this), \"\\uB0B4\\uC6A9: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n      type: \"text\",\n      onChange: onChangeInput\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 21\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 75\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      onClick: onClickPost,\n      children: \"\\uAC8C\\uC2DC\\uBB3C \\uB4F1\\uB85D\\uD558\\uAE30\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 17\n    }, this)]\n  }, void 0, true);\n}\n\n_s(MutationPage, \"sXeRjmwH2hXX8B+Rjk3ofdcP4co=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation];\n});\n\n_c = MutationPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"MutationPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXV0YXRpb24vaW5kZXguanM/ZGRmZSJdLCJuYW1lcyI6WyJNdXRhdGlvblBhZ2UiLCJ1c2VTdGF0ZSIsIndyaXRlciIsInBhc3N3b3JkIiwidGl0bGUiLCJjb250ZW50cyIsImFhYSIsInNldEFhYSIsIkNSRUFURV9CT0FSRCIsImdxbCIsInVzZU11dGF0aW9uIiwiY3JlYXRlQm9hcmQiLCJvbkNsaWNrUG9zdCIsInZhcmlhYmxlcyIsInJlc3VsdCIsImNvbnNvbGUiLCJ3YXJuIiwiaW5mbyIsImVycm9yIiwibG9nIiwiYWxlcnQiLCJkYXRhIiwibWVzc2FnZSIsIm9uQ2hhbmdlSW5wdXQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULEdBQXVCO0FBQUE7O0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMa0Msa0JBTVpDLCtDQUFRLENBQUM7QUFDM0JDLFVBQU0sRUFBQyxFQURvQjtBQUUzQkMsWUFBUSxFQUFDLEVBRmtCO0FBRzNCQyxTQUFLLEVBQUMsRUFIcUI7QUFJM0JDLFlBQVEsRUFBQztBQUprQixHQUFELENBTkk7QUFBQSxNQU0zQkMsR0FOMkI7QUFBQSxNQU10QkMsTUFOc0I7O0FBZWxDLE1BQU1DLFlBQVksR0FBR0MsbURBQUgsbUJBQWxCOztBQWZrQyxxQkErQlpDLDJEQUFXLENBQUNGLFlBQUQsQ0EvQkM7QUFBQTtBQUFBLE1BK0IzQkcsV0EvQjJCOztBQUFBLFdBaUNuQkMsV0FqQ21CO0FBQUE7QUFBQSxJQXlEbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7OztBQXRHa0M7QUFBQSwrVUFpQ2xDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFNkJELFdBQVcsQ0FBQztBQUM3QkUseUJBQVMsRUFBQztBQUFDWCx3QkFBTSxFQUFOQSxNQUFEO0FBQVFDLDBCQUFRLEVBQVJBLFFBQVI7QUFBaUJDLHVCQUFLLEVBQUxBLEtBQWpCO0FBQXVCQywwQkFBUSxFQUFSQTtBQUF2QjtBQURtQixlQUFELENBRnhDOztBQUFBO0FBRWNTLG9CQUZkO0FBTVFDLHFCQUFPLENBQUNDLElBQVIsQ0FBYSxRQUFiLEVBQXVCZCxNQUF2QjtBQUNBYSxxQkFBTyxDQUFDRSxJQUFSLENBQWEsVUFBYixFQUF5QmQsUUFBekI7QUFDQVkscUJBQU8sQ0FBQ0csS0FBUixDQUFjLE9BQWQsRUFBdUJkLEtBQXZCO0FBQ0FXLHFCQUFPLENBQUNJLEdBQVIsQ0FBWSxVQUFaLEVBQXdCZCxRQUF4QjtBQUNBVSxxQkFBTyxDQUFDSSxHQUFSLENBQVlMLE1BQVo7QUFDQU0sbUJBQUssQ0FBQ04sTUFBTSxDQUFDTyxJQUFQLENBQVlWLFdBQVosQ0FBd0JXLE9BQXpCLENBQUw7QUFYUjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWNRRixtQkFBSyxDQUFDLFlBQU1FLE9BQVAsQ0FBTDs7QUFkUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWpDa0M7QUFBQTtBQUFBOztBQXVHbEMsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLLEVBQUk7QUFDM0I7QUFDQVQsV0FBTyxDQUFDSSxHQUFSLENBQVlLLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUF6QjtBQUNILEdBSEQ7O0FBS0ksc0JBQ0k7QUFBQSxvREFDUztBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLGNBQVEsRUFBSUg7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURULGVBQytEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEL0QsNkNBRVU7QUFBTyxVQUFJLEVBQUMsVUFBWjtBQUF1QixjQUFRLEVBQUlBO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGVixlQUVvRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRnBFLGlDQUdRO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsY0FBUSxFQUFJQTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSFIsZUFHOEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUg5RCxpQ0FJUTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLGNBQVEsRUFBSUE7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpSLGVBSThEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKOUQsZUFLSTtBQUFRLGFBQU8sRUFBRVgsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBLGtCQURKO0FBV1A7O0dBdkh1QlosWTtVQStCRVUsdUQ7OztLQS9CRlYsWSIsImZpbGUiOiIuL3BhZ2VzL211dGF0aW9uL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VNdXRhdGlvbiwgZ3FsfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNdXRhdGlvblBhZ2UoKXtcbiAgICAvLyBjb25zdCBbd3JpdGVyLCBzZXRXcml0ZXJdID0gdXNlU3RhdGUoXCJcIilcbiAgICAvLyBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgLy8gY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIC8vIGNvbnN0IFtjb250ZW50cywgc2V0Q29udGVudHNdID0gdXNlU3RhdGUoXCJcIilcbiAgICAvLy0+IOydtOqxsCA06rCc66W8IO2VmOuCmOuhnCDrrLbripQg67Cp67KV7J20IOyeiOydjC4tPiDqsJ3ssrQg7IKs7JqpLlxuICAgIGNvbnN0IFthYWEsIHNldEFhYV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHdyaXRlcjonJyxcbiAgICAgICAgcGFzc3dvcmQ6JycsXG4gICAgICAgIHRpdGxlOicnLFxuICAgICAgICBjb250ZW50czonJyxcbiAgICB9KVxuICAgIFxuXG5cbiAgICBjb25zdCBDUkVBVEVfQk9BUkQgPSBncWxgXG4gICAgICAgICAgICBtdXRhdGlvbiBjcmVhdGVCb2FyZCgkd3JpdGVyOiBTdHJpbmcsICRwYXNzd29yZDogU3RyaW5nLCAkdGl0bGU6IFN0cmluZywgJGNvbnRlbnRzOiBTdHJpbmcpIHsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJvYXJkKCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRlcjogJHdyaXRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAkcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJHRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHM6ICRjb250ZW50c1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICApe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICBgXG4gICBcbiAgICBjb25zdCBbY3JlYXRlQm9hcmRdID0gdXNlTXV0YXRpb24oQ1JFQVRFX0JPQVJEKVxuICAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tQb3N0KCl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZUJvYXJkKHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6e3dyaXRlcixwYXNzd29yZCx0aXRsZSxjb250ZW50c31cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignd3JpdGVyJywgd3JpdGVyKVxuICAgICAgICAgICAgY29uc29sZS5pbmZvKCdwYXNzd29yZCcsIHBhc3N3b3JkKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcigndGl0bGUnLCB0aXRsZSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb250ZW50cycsIGNvbnRlbnRzKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICAgICAgYWxlcnQocmVzdWx0LmRhdGEuY3JlYXRlQm9hcmQubWVzc2FnZSlcbiAgICAgICAgfSBjYXRjaChlcnJvcil7XG5cbiAgICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpXG5cbiAgICAgICAgfSAgIFxuICAgICAgICAvLyBmaW5hbGx5e1xuICAgICAgICAvLyAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8tPiBmaW5hbGx564qUIOy6kOy5mCDtirjrnbzsnbQg7IOB6rSA7JeG7J20IOustOyhsOqxtCDrqZTshLjsp4Ag7Iuk7ZaJLlxuICAgIH1cblxuXG4gICAgLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZUJvYXJkKHtcbiAgICAvLyAgICAgICAgIHZhcmlhYmxlczoge1xuICAgIC8vICAgICAgICAgICAgIHdyaXRlcixcbiAgICAvLyAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgLy8gICAgICAgICAgICAgY29udGVudHM6IGNvbnRlbnRzXG4gICAgLy8gICAgICAgICAgICAgLy86IOuSpOyXkCDsnITsl5Ag7ISg7Ja47ZWcIHN0YXRl66W8IOuEo+uKlOuLpC4ge30g7JWI7JeQIOuEo+yngOuKlCDslYrsnYwuXG4gICAgLy8gICAgICAgICAgICAgLy8g7JWe6rO8IHN0YXRl6rCAIOqwmeycvOuptCDslZ4g64K07JqpIOyDneuetSDqsIDriqUuXG4gICAgLy8gICAgICAgICAgICAgLy8gdmFyaWFibGVzIC0+IFxuICAgIC8vICAgICAgICAgIH1cblxuICAgIC8vICAgICB9KVxuICBcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgIC8vICAgICAvLyBhbGVydChyZXN1bHQuZGF0YS5jcmVhdGVCb2FyZC5tZXNzYWdlKVxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcIuqyjOyLnOusvCDrk7HroZ3tlZjquLDsnoXri4jri6QuXCIpXG4gICAgLy8gICAgIC8vIGNvbnN0IHNlbmR3cml0ZXIgPSBhd2FpdCBiYmIoKVxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhzZW5kd3JpdGVyKVxuXG4gICAgLy8gICAgIC8v7L2Y7IaU66Gc6re4IOuLpOyWke2VmOqyjCDtmZzsmqlcbiAgICAvLyAgICAgLy8tPiDsi6TrrLTsl5DshJzripQg6rSE7Zi4IOyViOyXkCAnJyDrpbwg64Sj7J2MXG4gICAgLy8gfSAvL+yXrOq4sCDquLDspIAg7JyXIOu2gOu2hCBKUywg7JWE656r67aA67aEIEhUTUxcblxuICAgIC8vIGNvbnN0IG9uQ2hhbmdlV3JpdHRlciA9IGV2ZW50ID0+IHsgXG4gICAgICAgIFxuICAgIC8vICAgICAvLyBzZXRXcml0ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKVxuXG5cbiAgICAvLyB9XG4gICAgLy8gY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IGV2ZW50ID0+IHtcblxuICAgIC8vICAgICAvLyBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgIFxuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IG9uQ2hhbmdlVGl0bGUgPSBldmVudCA9PiB7XG4gXG4gICAgLy8gICAgIC8vIHNldFRpdGxlKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgXG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3Qgb25DaGFuZ2VDb250ZW50cyA9IGV2ZW50ID0+IHtcblxuICAgIC8vICAgICAvLyBzZXRDb250ZW50cyhldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgIFxuICAgIC8vIH1cbiAgICBjb25zdCBvbkNoYW5nZUlucHV0ID0gZXZlbnQgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIOyekeyEseyekDogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2UgPSB7b25DaGFuZ2VJbnB1dH0+PC9pbnB1dD48YnIgLz5cbiAgICAgICAgICAgICAgICDruYTrsIDrsojtmLg6IDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZSA9IHtvbkNoYW5nZUlucHV0fT48L2lucHV0PjxiciAvPlxuICAgICAgICAgICAgICAgIOygnOuqqTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2UgPSB7b25DaGFuZ2VJbnB1dH0+PC9pbnB1dD48YnIgLz5cbiAgICAgICAgICAgICAgICDrgrTsmqk6IDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlID0ge29uQ2hhbmdlSW5wdXR9PjwvaW5wdXQ+PGJyIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrUG9zdH0+6rKM7Iuc66y8IOuTseuhne2VmOq4sDwvYnV0dG9uPlxuICAgICAgICAgICAgPC8+XG5cbiAgICAgICAgKVxuICAgIFxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/mutation/index.js\n");

/***/ })

});