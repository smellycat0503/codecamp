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
exports.id = "pages/image2";
exports.ids = ["pages/image2"];
exports.modules = {

/***/ "./pages/image2/index.tsx":
/*!********************************!*\
  !*** ./pages/image2/index.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_commons_libraries_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/commons/libraries/utils */ \"./src/commons/libraries/utils.ts\");\n\n\nvar _jsxFileName = \"/Users/parkminkyu/Desktop/codecamp_1\\u1100\\u1175_\\u1107\\u1161\\u11A8\\u1106\\u1175\\u11AB\\u1100\\u1172/class/pages/image2/index.tsx\";\n\n\n\n\nconst Image2Page = () => {\n  const {\n    0: fileUrl,\n    1: setFileUrl\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n  const UPLOAD_FILE = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n    mutation uploadFile($file: Upload!) {\n      uploadFile(file: $file) {\n        url\n      }\n    }\n  `;\n  const [uploadFile] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(UPLOAD_FILE);\n\n  const onChangeFile = async event => {\n    const file = event.target.files[0]; // console.log(file)    if (!checkImage(file)) return\n    //!파일 업로드 했을때 체크하고 이상 없을 시 리턴한다는 뜻\n    //uploadFile 뮤테이션 실행!\n    // uploadFile({\n    //   variables: {file: file},\n    // })\n\n    const reader = new FileReader();\n    reader.readAsDataURL(file);\n\n    reader.onload = event => {\n      console.log(event.target.result);\n    };\n\n    try {\n      const {\n        data\n      } = await uploadFile({\n        variables: {\n          file\n        }\n      });\n      setFileUrl((0,_src_commons_libraries_utils__WEBPACK_IMPORTED_MODULE_3__.getStorageUrl)(data.uploadFile.url));\n    } catch (error) {\n      alert(error.message);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"file\",\n      onChange: onChangeFile\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: fileUrl\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Image2Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3BhZ2VzL2ltYWdlMi9pbmRleC50c3g/MDJhZiJdLCJuYW1lcyI6WyJJbWFnZTJQYWdlIiwiZmlsZVVybCIsInNldEZpbGVVcmwiLCJ1c2VTdGF0ZSIsIlVQTE9BRF9GSUxFIiwiZ3FsIiwidXBsb2FkRmlsZSIsInVzZU11dGF0aW9uIiwib25DaGFuZ2VGaWxlIiwiZXZlbnQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJkYXRhIiwidmFyaWFibGVzIiwiZ2V0U3RvcmFnZVVybCIsInVybCIsImVycm9yIiwiYWxlcnQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFPQSxNQUFNQSxVQUFVLEdBQUcsTUFBTTtBQUN2QixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLCtDQUFRLEVBQXRDO0FBRUEsUUFBTUMsV0FBVyxHQUFHQywrQ0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FORTtBQVFBLFFBQU0sQ0FBQ0MsVUFBRCxJQUNKQywyREFBVyxDQUFxQ0gsV0FBckMsQ0FEYjs7QUFHQSxRQUFNSSxZQUFZLEdBQUcsTUFBT0MsS0FBUCxJQUFpQjtBQUNwQyxVQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFiLENBQW1CLENBQW5CLENBQWIsQ0FEb0MsQ0FFcEM7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7QUFDQUQsVUFBTSxDQUFDRSxhQUFQLENBQXFCTCxJQUFyQjs7QUFDQUcsVUFBTSxDQUFDRyxNQUFQLEdBQWlCUCxLQUFELElBQVc7QUFDekJRLGFBQU8sQ0FBQ0MsR0FBUixDQUFZVCxLQUFLLENBQUNFLE1BQU4sQ0FBYVEsTUFBekI7QUFDRCxLQUZEOztBQUlBLFFBQUk7QUFDRixZQUFNO0FBQUNDO0FBQUQsVUFBUyxNQUFNZCxVQUFVLENBQUM7QUFBQ2UsaUJBQVMsRUFBRTtBQUFDWDtBQUFEO0FBQVosT0FBRCxDQUEvQjtBQUNBUixnQkFBVSxDQUFDb0IsMkVBQWEsQ0FBQ0YsSUFBSSxDQUFDZCxVQUFMLENBQWdCaUIsR0FBakIsQ0FBZCxDQUFWO0FBQ0QsS0FIRCxDQUdFLE9BQU9DLEtBQVAsRUFBYztBQUNkQyxXQUFLLENBQUNELEtBQUssQ0FBQ0UsT0FBUCxDQUFMO0FBQ0Q7QUFDRixHQXRCRDs7QUF3QkEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLGNBQVEsRUFBRWxCO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFLLFNBQUcsRUFBRVA7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUEsa0JBREY7QUFNRCxDQTVDRDs7QUE4Q0EsK0RBQWVELFVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbWFnZTIvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VNdXRhdGlvbiwgZ3FsfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtnZXRTdG9yYWdlVXJsfSBmcm9tICcuLi8uLi9zcmMvY29tbW9ucy9saWJyYXJpZXMvdXRpbHMnXG5pbXBvcnQge2NoZWNrSW1hZ2V9IGZyb20gJy4uLy4uL3NyYy9jb21tb25zL2xpYnJhcmllcy92YWxpZGF0aW9ucydcbmltcG9ydCB7XG4gIElNdXRhdGlvbixcbiAgSU11dGF0aW9uVXBsb2FkRmlsZUFyZ3MsXG59IGZyb20gJy4uLy4uL3NyYy9jb21tb25zL3R5cGVzL2dlbmVyYXRlZC90eXBlcydcblxuY29uc3QgSW1hZ2UyUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2ZpbGVVcmwsIHNldEZpbGVVcmxdID0gdXNlU3RhdGU8c3RyaW5nPigpXG5cbiAgY29uc3QgVVBMT0FEX0ZJTEUgPSBncWxgXG4gICAgbXV0YXRpb24gdXBsb2FkRmlsZSgkZmlsZTogVXBsb2FkISkge1xuICAgICAgdXBsb2FkRmlsZShmaWxlOiAkZmlsZSkge1xuICAgICAgICB1cmxcbiAgICAgIH1cbiAgICB9XG4gIGBcblxuICBjb25zdCBbdXBsb2FkRmlsZV0gPVxuICAgIHVzZU11dGF0aW9uPElNdXRhdGlvbiwgSU11dGF0aW9uVXBsb2FkRmlsZUFyZ3M+KFVQTE9BRF9GSUxFKVxuXG4gIGNvbnN0IG9uQ2hhbmdlRmlsZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICAvLyBjb25zb2xlLmxvZyhmaWxlKSAgICBpZiAoIWNoZWNrSW1hZ2UoZmlsZSkpIHJldHVyblxuICAgIC8vIe2MjOydvCDsl4XroZzrk5wg7ZaI7J2E65WMIOyytO2BrO2VmOqzoCDsnbTsg4Eg7JeG7J2EIOyLnCDrpqzthLTtlZzri6TripQg65y7XG5cbiAgICAvL3VwbG9hZEZpbGUg666k7YWM7J207IWYIOyLpO2WiSFcbiAgICAvLyB1cGxvYWRGaWxlKHtcbiAgICAvLyAgIHZhcmlhYmxlczoge2ZpbGU6IGZpbGV9LFxuICAgIC8vIH0pXG5cbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcbiAgICByZWFkZXIub25sb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQucmVzdWx0KVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCB1cGxvYWRGaWxlKHt2YXJpYWJsZXM6IHtmaWxlfX0pXG4gICAgICBzZXRGaWxlVXJsKGdldFN0b3JhZ2VVcmwoZGF0YS51cGxvYWRGaWxlLnVybCkpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e29uQ2hhbmdlRmlsZX0gLz5cbiAgICAgIDxpbWcgc3JjPXtmaWxlVXJsfT48L2ltZz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZTJQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/image2/index.tsx\n");

/***/ }),

/***/ "./src/commons/libraries/utils.ts":
/*!****************************************!*\
  !*** ./src/commons/libraries/utils.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStorageUrl\": function() { return /* binding */ getStorageUrl; }\n/* harmony export */ });\nconst getStorageUrl = () => {\n  return `https://storage.cloud.google.com/${URL}`;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3NyYy9jb21tb25zL2xpYnJhcmllcy91dGlscy50cz85ZjExIl0sIm5hbWVzIjpbImdldFN0b3JhZ2VVcmwiLCJVUkwiXSwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUNqQyxTQUFRLG9DQUFtQ0MsR0FBSSxFQUEvQztBQUNELENBRk0iLCJmaWxlIjoiLi9zcmMvY29tbW9ucy9saWJyYXJpZXMvdXRpbHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0U3RvcmFnZVVybCA9ICgpID0+IHtcbiAgcmV0dXJuIGBodHRwczovL3N0b3JhZ2UuY2xvdWQuZ29vZ2xlLmNvbS8ke1VSTH1gXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/commons/libraries/utils.ts\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/image2/index.tsx"));
module.exports = __webpack_exports__;

})();