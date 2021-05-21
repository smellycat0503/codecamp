/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/query";
exports.ids = ["pages/query"];
exports.modules = {

/***/ "./pages/query/index.js":
/*!******************************!*\
  !*** ./pages/query/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProfilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_query_write_QueryWrite_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/query/write/QueryWrite.container */ \"./src/components/query/write/QueryWrite.container.tsx\");\n\nvar _jsxFileName = \"/Users/parkminkyu/Desktop/codecamp_1\\u1100\\u1175_\\u1107\\u1161\\u11A8\\u1106\\u1175\\u11AB\\u1100\\u1172/class/pages/query/index.js\";\n// import {useMutation, gql} from '@apollo/client'\n// import { assertAbstractType } from 'graphql'\n// import { argsToArgsConfig } from 'graphql/type/definition'\n// import {useState} from 'react'\n// import {useRouter} from 'next/router'\n\nfunction ProfilePage() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_query_write_QueryWrite_container__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3BhZ2VzL3F1ZXJ5L2luZGV4LmpzPzdjMTkiXSwibmFtZXMiOlsiUHJvZmlsZVBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFdBQVQsR0FBdUI7QUFDcEMsc0JBQU8sOERBQUMscUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QiLCJmaWxlIjoiLi9wYWdlcy9xdWVyeS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7dXNlTXV0YXRpb24sIGdxbH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG4vLyBpbXBvcnQgeyBhc3NlcnRBYnN0cmFjdFR5cGUgfSBmcm9tICdncmFwaHFsJ1xuLy8gaW1wb3J0IHsgYXJnc1RvQXJnc0NvbmZpZyB9IGZyb20gJ2dyYXBocWwvdHlwZS9kZWZpbml0aW9uJ1xuLy8gaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCBRdWVyeSBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9xdWVyeS93cml0ZS9RdWVyeVdyaXRlLmNvbnRhaW5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGVQYWdlKCkge1xuICByZXR1cm4gPFF1ZXJ5IC8+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/query/index.js\n");

/***/ }),

/***/ "./src/components/query/write/QueryWrite.container.tsx":
/*!*************************************************************!*\
  !*** ./src/components/query/write/QueryWrite.container.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _QueryWrite_presenter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QueryWrite.presenter */ \"./src/components/query/write/QueryWrite.presenter.tsx\");\n/* harmony import */ var _QueryWrite_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./QueryWrite.queries */ \"./src/components/query/write/QueryWrite.queries.ts\");\n\nvar _jsxFileName = \"/Users/parkminkyu/Desktop/codecamp_1\\u1100\\u1175_\\u1107\\u1161\\u11A8\\u1106\\u1175\\u11AB\\u1100\\u1172/class/src/components/query/write/QueryWrite.container.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst Query = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  const {\n    0: aaaa,\n    1: setAaaa\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    name: '',\n    age: '',\n    school: ''\n  });\n  const {\n    0: isTrue,\n    1: setIsTure\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  const [createProfile] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_QueryWrite_queries__WEBPACK_IMPORTED_MODULE_5__.PROFILE);\n\n  async function onClickRegist() {\n    try {\n      const result = await createProfile({\n        variables: _objectSpread(_objectSpread({}, aaaa), {}, {\n          age: Number(aaaa.age)\n        })\n      });\n      console.log(result);\n      alert(result.data.createProfile.message);\n      router.push(`/query/${aaaa.name}`);\n    } catch (error) {\n      alert('error.message');\n    }\n  }\n\n  function onChangeInput(event) {\n    const cccc = _objectSpread(_objectSpread({}, aaaa), {}, {\n      [event.target.name]: event.target.value\n    });\n\n    setAaaa(cccc); //빈값은 언디파인드, 언디파인드는 곧 펄스.\n\n    if (aaaa.name && aaaa.age && aaaa.school) {\n      setIsTure(true);\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_QueryWrite_presenter__WEBPACK_IMPORTED_MODULE_4__.default, {\n    onClickRegist: onClickRegist,\n    onChangeInput: onChangeInput,\n    isTrue: isTrue\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Query);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3NyYy9jb21wb25lbnRzL3F1ZXJ5L3dyaXRlL1F1ZXJ5V3JpdGUuY29udGFpbmVyLnRzeD8zMWY3Il0sIm5hbWVzIjpbIlF1ZXJ5Iiwicm91dGVyIiwidXNlUm91dGVyIiwiYWFhYSIsInNldEFhYWEiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJhZ2UiLCJzY2hvb2wiLCJpc1RydWUiLCJzZXRJc1R1cmUiLCJjcmVhdGVQcm9maWxlIiwidXNlTXV0YXRpb24iLCJQUk9GSUxFIiwib25DbGlja1JlZ2lzdCIsInJlc3VsdCIsInZhcmlhYmxlcyIsIk51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsImRhdGEiLCJtZXNzYWdlIiwicHVzaCIsImVycm9yIiwib25DaGFuZ2VJbnB1dCIsImV2ZW50IiwiY2NjYyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFDbEIsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQztBQUMvQkMsUUFBSSxFQUFFLEVBRHlCO0FBRS9CQyxPQUFHLEVBQUUsRUFGMEI7QUFHL0JDLFVBQU0sRUFBRTtBQUh1QixHQUFELENBQWhDO0FBS0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCTCwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFFQSxRQUFNLENBQUNNLGFBQUQsSUFBa0JDLDJEQUFXLENBQUNDLHdEQUFELENBQW5DOztBQUVBLGlCQUFlQyxhQUFmLEdBQStCO0FBQzdCLFFBQUk7QUFDRixZQUFNQyxNQUFNLEdBQUcsTUFBTUosYUFBYSxDQUFDO0FBQ2pDSyxpQkFBUyxrQ0FBTWIsSUFBTjtBQUFZSSxhQUFHLEVBQUVVLE1BQU0sQ0FBQ2QsSUFBSSxDQUFDSSxHQUFOO0FBQXZCO0FBRHdCLE9BQUQsQ0FBbEM7QUFJQVcsYUFBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVo7QUFDQUssV0FBSyxDQUFDTCxNQUFNLENBQUNNLElBQVAsQ0FBWVYsYUFBWixDQUEwQlcsT0FBM0IsQ0FBTDtBQUNBckIsWUFBTSxDQUFDc0IsSUFBUCxDQUFhLFVBQVNwQixJQUFJLENBQUNHLElBQUssRUFBaEM7QUFDRCxLQVJELENBUUUsT0FBT2tCLEtBQVAsRUFBYztBQUNkSixXQUFLLENBQUMsZUFBRCxDQUFMO0FBQ0Q7QUFDRjs7QUFDRCxXQUFTSyxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUM1QixVQUFNQyxJQUFJLG1DQUNMeEIsSUFESztBQUVSLE9BQUN1QixLQUFLLENBQUNFLE1BQU4sQ0FBYXRCLElBQWQsR0FBcUJvQixLQUFLLENBQUNFLE1BQU4sQ0FBYUM7QUFGMUIsTUFBVjs7QUFJQXpCLFdBQU8sQ0FBQ3VCLElBQUQsQ0FBUCxDQUw0QixDQU01Qjs7QUFDQSxRQUFJeEIsSUFBSSxDQUFDRyxJQUFMLElBQWFILElBQUksQ0FBQ0ksR0FBbEIsSUFBeUJKLElBQUksQ0FBQ0ssTUFBbEMsRUFBMEM7QUFDeENFLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRDtBQUNGOztBQUNELHNCQUNFLDhEQUFDLDBEQUFEO0FBQ0UsaUJBQWEsRUFBRUksYUFEakI7QUFFRSxpQkFBYSxFQUFFVyxhQUZqQjtBQUdFLFVBQU0sRUFBRWhCO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsQ0EzQ0Q7O0FBNENBLCtEQUFlVCxLQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvcXVlcnkvd3JpdGUvUXVlcnlXcml0ZS5jb250YWluZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VNdXRhdGlvbiwgZ3FsfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQge2Fzc2VydEFic3RyYWN0VHlwZX0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQge2FyZ3NUb0FyZ3NDb25maWd9IGZyb20gJ2dyYXBocWwvdHlwZS9kZWZpbml0aW9uJztcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUXVlcnlVSSBmcm9tICcuL1F1ZXJ5V3JpdGUucHJlc2VudGVyJztcbmltcG9ydCB7UFJPRklMRX0gZnJvbSAnLi9RdWVyeVdyaXRlLnF1ZXJpZXMnO1xuXG5jb25zdCBRdWVyeSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW2FhYWEsIHNldEFhYWFdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6ICcnLFxuICAgIGFnZTogJycsXG4gICAgc2Nob29sOiAnJyxcbiAgfSk7XG4gIGNvbnN0IFtpc1RydWUsIHNldElzVHVyZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2NyZWF0ZVByb2ZpbGVdID0gdXNlTXV0YXRpb24oUFJPRklMRSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25DbGlja1JlZ2lzdCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlUHJvZmlsZSh7XG4gICAgICAgIHZhcmlhYmxlczogey4uLmFhYWEsIGFnZTogTnVtYmVyKGFhYWEuYWdlKX0sXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIGFsZXJ0KHJlc3VsdC5kYXRhLmNyZWF0ZVByb2ZpbGUubWVzc2FnZSk7XG4gICAgICByb3V0ZXIucHVzaChgL3F1ZXJ5LyR7YWFhYS5uYW1lfWApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydCgnZXJyb3IubWVzc2FnZScpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBvbkNoYW5nZUlucHV0KGV2ZW50KSB7XG4gICAgY29uc3QgY2NjYyA9IHtcbiAgICAgIC4uLmFhYWEsXG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfTtcbiAgICBzZXRBYWFhKGNjY2MpO1xuICAgIC8v67mI6rCS7J2AIOyWuOuUlO2MjOyduOuTnCwg7Ja465SU7YyM7J2465Oc64qUIOqzpyDtjoTsiqQuXG4gICAgaWYgKGFhYWEubmFtZSAmJiBhYWFhLmFnZSAmJiBhYWFhLnNjaG9vbCkge1xuICAgICAgc2V0SXNUdXJlKHRydWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxRdWVyeVVJXG4gICAgICBvbkNsaWNrUmVnaXN0PXtvbkNsaWNrUmVnaXN0fVxuICAgICAgb25DaGFuZ2VJbnB1dD17b25DaGFuZ2VJbnB1dH1cbiAgICAgIGlzVHJ1ZT17aXNUcnVlfVxuICAgIC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUXVlcnk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/query/write/QueryWrite.container.tsx\n");

/***/ }),

/***/ "./src/components/query/write/QueryWrite.presenter.tsx":
/*!*************************************************************!*\
  !*** ./src/components/query/write/QueryWrite.presenter.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _QueryWrite_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryWrite.styles */ \"./src/components/query/write/QueryWrite.styles.ts\");\n\nvar _jsxFileName = \"/Users/parkminkyu/Desktop/codecamp_1\\u1100\\u1175_\\u1107\\u1161\\u11A8\\u1106\\u1175\\u11AB\\u1100\\u1172/class/src/components/query/write/QueryWrite.presenter.tsx\";\n\n\nconst QueryUI = props => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: \"\\uC774\\uB984: \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"name\",\n      onChange: props.onChangeInput\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: \"\\uB098\\uC774: \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"age\",\n      onChange: props.onChangeInput\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: \"\\uD559\\uAD50: \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"school\",\n      onChange: props.onChangeInput\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_QueryWrite_styles__WEBPACK_IMPORTED_MODULE_1__.RegisterButton, {\n      onClick: props.onClickRegist,\n      aaa: props.isTrue,\n      children: \"\\uD504\\uB85C\\uD544 \\uB4F1\\uB85D\\uD558\\uAE30\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), \"//*aaa\\uAC00 \\uD0C0\\uC785\\uC2A4\\uD06C\\uB9BD\\uD2B8\\uB85C \\uBC14\\uB00C\\uBA74\\uC11C \\uC5D0\\uB7EC \\uBC1C\\uC0DD. \\uC2A4\\uD0C0\\uC77C\\uACFC \\uC5F0\\uACB0\\uD558\\uB294 \\uBD80\\uBD84(\\uC0C9\\uAE54 \\uBC14\\uAFB8\\uAE30)= \\uC598\\uAC00 \\uD2B8\\uB8E8\\uC778\\uC9C0 \\uD384\\uC2A4\\uC778\\uC9C0 \\uBAB0\\uB77C\\uC11C \\uADF8\\uB7FC.\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (QueryUI);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3NyYy9jb21wb25lbnRzL3F1ZXJ5L3dyaXRlL1F1ZXJ5V3JpdGUucHJlc2VudGVyLnRzeD9jYjBiIl0sIm5hbWVzIjpbIlF1ZXJ5VUkiLCJwcm9wcyIsIm9uQ2hhbmdlSW5wdXQiLCJvbkNsaWNrUmVnaXN0IiwiaXNUcnVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUlDLEtBQUQsSUFBVztBQUN6QixzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFJLEVBQUMsTUFBeEI7QUFBK0IsY0FBUSxFQUFFQSxLQUFLLENBQUNDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBSSxFQUFDLEtBQXhCO0FBQThCLGNBQVEsRUFBRUQsS0FBSyxDQUFDQztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFNRTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLFVBQUksRUFBQyxRQUF4QjtBQUFpQyxjQUFRLEVBQUVELEtBQUssQ0FBQ0M7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQU9FLDhEQUFDLDhEQUFEO0FBQWdCLGFBQU8sRUFBRUQsS0FBSyxDQUFDRSxhQUEvQjtBQUE4QyxTQUFHLEVBQUVGLEtBQUssQ0FBQ0csTUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFlRCxDQWhCRDs7QUFrQkEsK0RBQWVKLE9BQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9xdWVyeS93cml0ZS9RdWVyeVdyaXRlLnByZXNlbnRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlZ2lzdGVyQnV0dG9ufSBmcm9tICcuL1F1ZXJ5V3JpdGUuc3R5bGVzJztcblxuY29uc3QgUXVlcnlVSSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3Bhbj7snbTrpoQ6IDwvc3Bhbj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlSW5wdXR9PjwvaW5wdXQ+XG4gICAgICA8c3Bhbj7rgpjsnbQ6IDwvc3Bhbj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZ2VcIiBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2VJbnB1dH0+PC9pbnB1dD5cbiAgICAgIDxzcGFuPu2Vmeq1kDogPC9zcGFuPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNjaG9vbFwiIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZUlucHV0fT48L2lucHV0PlxuICAgICAgPFJlZ2lzdGVyQnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2tSZWdpc3R9IGFhYT17cHJvcHMuaXNUcnVlfT5cbiAgICAgICAg7ZSE66Gc7ZWEIOuTseuhne2VmOq4sFxuICAgICAgPC9SZWdpc3RlckJ1dHRvbj5cbiAgICAgIHsvKiA8UmVnaXN0ZXJCdXR0b24gb25DbGljaz0ge3Byb3BzLm9uQ2xpY2tSZWdpc3R9IGFhYT17cHJvcHMuaXNUcnVlfT7tlITroZztlYQg65Ox66Gd7ZWY6riwPC9SZWdpc3RlckJ1dHRvbj4gKi99XG4gICAgICAvLyphYWHqsIAg7YOA7J6F7Iqk7YGs66a97Yq466GcIOuwlOuAjOuptOyEnCDsl5Drn6wg67Cc7IOdLiDsiqTtg4Dsnbzqs7wg7Jew6rKw7ZWY64qUIOu2gOu2hCjsg4nquZQg67CU6r646riwKT0g7JaY6rCAIO2KuOujqOyduOyngCDtjoTsiqTsnbjsp4Ag66qw65287IScIOq3uOufvC5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXJ5VUk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/query/write/QueryWrite.presenter.tsx\n");

/***/ }),

/***/ "./src/components/query/write/QueryWrite.queries.ts":
/*!**********************************************************!*\
  !*** ./src/components/query/write/QueryWrite.queries.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PROFILE\": function() { return /* binding */ PROFILE; }\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PROFILE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  mutation bbbb($name: String, $age: Int, $school: String) {\n    createProfile(name: $name, age: $age, school: $school) {\n      message\n    }\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3NyYy9jb21wb25lbnRzL3F1ZXJ5L3dyaXRlL1F1ZXJ5V3JpdGUucXVlcmllcy50cz81ZGI5Il0sIm5hbWVzIjpbIlBST0ZJTEUiLCJncWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sTUFBTUEsT0FBTyxHQUFHQywrQ0FBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOTyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3F1ZXJ5L3dyaXRlL1F1ZXJ5V3JpdGUucXVlcmllcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z3FsfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmV4cG9ydCBjb25zdCBQUk9GSUxFID0gZ3FsYFxuICBtdXRhdGlvbiBiYmJiKCRuYW1lOiBTdHJpbmcsICRhZ2U6IEludCwgJHNjaG9vbDogU3RyaW5nKSB7XG4gICAgY3JlYXRlUHJvZmlsZShuYW1lOiAkbmFtZSwgYWdlOiAkYWdlLCBzY2hvb2w6ICRzY2hvb2wpIHtcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/query/write/QueryWrite.queries.ts\n");

/***/ }),

/***/ "./src/components/query/write/QueryWrite.styles.ts":
/*!*********************************************************!*\
  !*** ./src/components/query/write/QueryWrite.styles.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RegisterButton\": function() { return /* binding */ RegisterButton; }\n/* harmony export */ });\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);\n //* aaa에는 불린만 들어가게됨. 그 외에는 에러 발생.\n//* aaa 뒤에 ? 들어가면 aaa자체가 있어도 되고 없어도 됨. 불린이어야 되는 점은 변하지 않음.\n// interface IProps {\n//     aaa?:boolean\n// }\n\n//todo 타입스크립트 변환 시 에러 발생. aaa의 타입을 정해주기 위해 IProps사용. 앞에 대문자 I가 들어갔을 뿐이고 이름은 자유롭게.\nconst RegisterButton = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().button)`\n  //이모션 선언한 변수의 맨앞은 대문자!\n  /* background-color: yellow; */\n  //*aaa가 타입스크립트로 바뀌면서 에러 발생. 스타일과 연결하는 부분(색깔 바꾸기)=> 얘가 트루인지 펄스인지 몰라서 그럼.\n  /* background-color: ${props => props.aaa === true ? 'blue' : 'yellow'} */\n  background-color: ${props => props.aaa === true ? 'blue' : 'yellow'};\n`; //이모션 선언한 변수의 맨앞은 대문자!//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3NyYy9jb21wb25lbnRzL3F1ZXJ5L3dyaXRlL1F1ZXJ5V3JpdGUuc3R5bGVzLnRzP2Y3MTciXSwibmFtZXMiOlsiUmVnaXN0ZXJCdXR0b24iLCJzdHlsZWQiLCJwcm9wcyIsImFhYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0NBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUVPLE1BQU1BLGNBQWMsR0FBR0MsK0RBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EseUJBQTBCQyxLQUFELElBQVlBLEtBQUssQ0FBQ0MsR0FBTixLQUFjLElBQWQsR0FBcUIsTUFBckIsR0FBOEIsUUFBVTtBQUM3RSxzQkFBdUJELEtBQUQsSUFDbEJBLEtBQUssQ0FBQ0MsR0FBTixLQUFjLElBQWQsR0FBcUIsTUFBckIsR0FBOEIsUUFBUztBQUMzQyxDQVBPLEMsQ0FRUCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3F1ZXJ5L3dyaXRlL1F1ZXJ5V3JpdGUuc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuLy8qIGFhYeyXkOuKlCDrtojrprDrp4wg65Ok7Ja06rCA6rKM65CoLiDqt7gg7Jm47JeQ64qUIOyXkOufrCDrsJzsg50uXG4vLyogYWFhIOuSpOyXkCA/IOuTpOyWtOqwgOuptCBhYWHsnpDssrTqsIAg7J6I7Ja064+EIOuQmOqzoCDsl4bslrTrj4Qg65CoLiDrtojrprDsnbTslrTslbwg65CY64qUIOygkOydgCDrs4DtlZjsp4Ag7JWK7J2MLlxuLy8gaW50ZXJmYWNlIElQcm9wcyB7XG4vLyAgICAgYWFhPzpib29sZWFuXG4vLyB9XG5pbXBvcnQge0lQcm9wc30gZnJvbSAnLi9RdWVyeVdyaXRlLnR5cGVzJztcblxuLy90b2RvIO2DgOyeheyKpO2BrOumve2KuCDrs4DtmZgg7IucIOyXkOufrCDrsJzsg50uIGFhYeydmCDtg4DsnoXsnYQg7KCV7ZW07KO86riwIOychO2VtCBJUHJvcHPsgqzsmqkuIOyVnuyXkCDrjIDrrLjsnpAgSeqwgCDrk6TslrTqsJTsnYQg67+Q7J206rOgIOydtOumhOydgCDsnpDsnKDroa3qsowuXG5cbmV4cG9ydCBjb25zdCBSZWdpc3RlckJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIC8v7J2066qo7IWYIOyEoOyWuO2VnCDrs4DsiJjsnZgg66eo7JWe7J2AIOuMgOusuOyekCFcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogeWVsbG93OyAqL1xuICAvLyphYWHqsIAg7YOA7J6F7Iqk7YGs66a97Yq466GcIOuwlOuAjOuptOyEnCDsl5Drn6wg67Cc7IOdLiDsiqTtg4Dsnbzqs7wg7Jew6rKw7ZWY64qUIOu2gOu2hCjsg4nquZQg67CU6r646riwKT0+IOyWmOqwgCDtirjro6jsnbjsp4Ag7Y6E7Iqk7J247KeAIOuqsOudvOyEnCDqt7jrn7wuXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuYWFhID09PSB0cnVlID8gJ2JsdWUnIDogJ3llbGxvdycpfSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wczogSVByb3BzKSA9PlxuICAgIHByb3BzLmFhYSA9PT0gdHJ1ZSA/ICdibHVlJyA6ICd5ZWxsb3cnfTtcbmA7XG4vL+ydtOuqqOyFmCDshKDslrjtlZwg67OA7IiY7J2YIOunqOyVnuydgCDrjIDrrLjsnpAhXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/query/write/QueryWrite.styles.ts\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/styled");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/query/index.js"));
module.exports = __webpack_exports__;

})();