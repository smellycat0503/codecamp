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
exports.id = "pages/query/[name]";
exports.ids = ["pages/query/[name]"];
exports.modules = {

/***/ "./pages/query/[name]/index.js":
/*!*************************************!*\
  !*** ./pages/query/[name]/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuaryDetailPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/parkminkyu/Desktop/codecamp_1\\u1100\\u1175_\\u1107\\u1161\\u11A8\\u1106\\u1175\\u11AB\\u1100\\u1172/class/pages/query/[name]/index.js\";\n\n\nfunction QuaryDetailPage() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const aaa = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`\n    query zzz ($aaa: String){\n            fetchProfile(name: $aaa){\n                number\n                name\n                age\n                school\n            }\n        }\n    \n    `;\n  const {\n    data\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(aaa, {\n    variables: {\n      aaa: router.query.name\n    }\n  }); // const onClickRouting = () => {\n  //     // router.push('/query/훈이')\n  // }\n  // console.log('data',data.fetchProfile.name)\n  //삼항연산자=>이프냐 엘스냐 둘중 하나일 경우만 사용.\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [\"\\uC774\\uB984:\", !data ? '' : data.fetchProfile.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [\"\\uB098\\uC774:\", data === undefined ? '' : data.fetchProfile.age]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [\"\\uD559\\uAD50:\", data && data.fetchProfile.school]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3BhZ2VzL3F1ZXJ5L1tuYW1lXS9pbmRleC5qcz81MzAxIl0sIm5hbWVzIjpbIlF1YXJ5RGV0YWlsUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImFhYSIsImdxbCIsImRhdGEiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsInF1ZXJ5IiwibmFtZSIsImZldGNoUHJvZmlsZSIsInVuZGVmaW5lZCIsImFnZSIsInNjaG9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdlLFNBQVNBLGVBQVQsR0FBMEI7QUFFckMsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBLFFBQU1DLEdBQUcsR0FBR0MsK0NBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FWSTtBQVlBLFFBQU07QUFBRUM7QUFBRixNQUFXQyx3REFBUSxDQUFDSCxHQUFELEVBQU07QUFDM0JJLGFBQVMsRUFBQztBQUNOSixTQUFHLEVBQUNGLE1BQU0sQ0FBQ08sS0FBUCxDQUFhQztBQURYO0FBRGlCLEdBQU4sQ0FBekIsQ0FoQnFDLENBc0JyQztBQUVBO0FBQ0E7QUFFQTtBQUVBOztBQUNBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSxrQ0FDTyxDQUFDSixJQUFELEdBQVEsRUFBUixHQUFhQSxJQUFJLENBQUNLLFlBQUwsQ0FBa0JELElBRHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0k7QUFBQSxrQ0FDUUosSUFBSSxLQUFLTSxTQUFULEdBQXFCLEVBQXJCLEdBQTBCTixJQUFJLENBQUNLLFlBQUwsQ0FBa0JFLEdBRHBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLGVBU0k7QUFBQSxrQ0FDUVAsSUFBSSxJQUFJQSxJQUFJLENBQUNLLFlBQUwsQ0FBa0JHLE1BRGxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0JIIiwiZmlsZSI6Ii4vcGFnZXMvcXVlcnkvW25hbWVdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHt1c2VRdWVyeSwgZ3FsfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWFyeURldGFpbFBhZ2UoKXtcbiAgICBcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgYWFhID0gZ3FsYFxuICAgIHF1ZXJ5IHp6eiAoJGFhYTogU3RyaW5nKXtcbiAgICAgICAgICAgIGZldGNoUHJvZmlsZShuYW1lOiAkYWFhKXtcbiAgICAgICAgICAgICAgICBudW1iZXJcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgYWdlXG4gICAgICAgICAgICAgICAgc2Nob29sXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICBgXG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KGFhYSwge1xuICAgICAgICB2YXJpYWJsZXM6e1xuICAgICAgICAgICAgYWFhOnJvdXRlci5xdWVyeS5uYW1lICAgXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gY29uc3Qgb25DbGlja1JvdXRpbmcgPSAoKSA9PiB7XG5cbiAgICAvLyAgICAgLy8gcm91dGVyLnB1c2goJy9xdWVyeS/tm4jsnbQnKVxuICAgIC8vIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhJyxkYXRhLmZldGNoUHJvZmlsZS5uYW1lKVxuICAgIFxuICAgIC8v7IK87ZWt7Jew7IKw7J6QPT7snbTtlITrg5Ag7JeY7Iqk64OQIOuRmOykkSDtlZjrgpjsnbwg6rK97Jqw66eMIOyCrOyaqS5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAg7J2066aEOnshZGF0YSA/ICcnIDogZGF0YS5mZXRjaFByb2ZpbGUubmFtZSB9XG4gICAgICAgICAgICAgICB7LyogZGF0YeyVnuyXkCHqsIAg65Ok7Ja06rCA66+A66GcIGRhdGHqsIAg7JeG7J2EIOuVjCAnJywg7J6I7J2E65WMIDog7Jik66W47Kq97J20IOyggeyaqSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICDrgpjsnbQ6e2RhdGEgPT09IHVuZGVmaW5lZCA/ICcnIDogZGF0YS5mZXRjaFByb2ZpbGUuYWdlfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIO2Vmeq1kDp7ZGF0YSAmJiBkYXRhLmZldGNoUHJvZmlsZS5zY2hvb2x9XG4gICAgICAgICAgICAgICAgey8qIGRhdGHqsIAgdHJ1ZeuptCAo7J6I7Jy866m0KSYm65Kk6rCAIOyLpO2WieuQqC4gZmFsc2XrqbQgJibrkqTqsIAg7Iuk7ZaJIOyViOuQqCAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApIFxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/query/[name]/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/query/[name]/index.js"));
module.exports = __webpack_exports__;

})();