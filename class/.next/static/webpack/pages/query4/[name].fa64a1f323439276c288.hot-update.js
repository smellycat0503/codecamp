/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/query4/[name]",{

/***/ "./pages/query4/[name]/index.tsx":
/*!***************************************!*\
  !*** ./pages/query4/[name]/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_parkminkyu_Desktop_codecamp_1_class_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/parkminkyu/Desktop/codecamp_1\\u1100\\u1175_\\u1107\\u1161\\u11A8\\u1106\\u1175\\u11AB\\u1100\\u1172/class/pages/query4/[name]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_parkminkyu_Desktop_codecamp_1_class_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n    query ZZZ($name : String){\\n      fetchProfile(name: $name\\n      ){\\n        name\\n        age\\n        school\\n      }}\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n// 백 데이터 쿼리 읽기,   useQuery, gql.\n// 프론트 주소 조회 -> router\n//!시작\n\n\n\nvar nameIndex = function nameIndex() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); // console.log(router)\n  //!여기서 variable 뒤에 경로 찾으러면 Gql 선언한 LEGO를 콘솔로그 해서 찾아야하나.\n\n  var LEGO = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\n  console.log(router); //*얘는 조회하는게 맞는지. 얘로는 뭘 알기 힘듦.\n  // const { data } = useQuery(LEGO, {variables:{name:router.query.name}})\n  //! useMutation 때는 선언 부분에 [], useQuery때 {}를 쓰는 이유 알아보기.\n  //!여기 베리어블스의 경로 파악하는 법 다시 물어보기. 라우터그냥 router.query는 약속인건가.\n  //! useMutation() 에서는 () 안에 gql만 넣음.  여기서는 전 페이지에서 입력한 데이터값을 읽어야함!!\n  // console.log(data)\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 7\n  }, _this);\n};\n\n_s(nameIndex, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (nameIndex); //!끝\n//해야할것 1. 유즈쿼리 2. 주소 받기 위한 라우터 사용.\n// import {gql, useQuery} from '@apollo/client'\n// import {useRouter} from 'next/router'\n//   const nameIndex = () => {\n//     const LEGO = gql`\n//     query ZZZ($name: String){\n//       fetchProfile(name: $name  ){\n//         name\n//         age\n//         school\n//       }}\n//     `\n//     const router = useRouter()\n//     const {data} = useQuery(LEGO, {variables:{name:router.query.name}})\n//     console.log(data)\n//     return(\n//       <div>\n//         <div>이름:{data && data.fetchProfile.name}</div>\n//         <div>나이:{!data ? '' : data.fetchProfile.age}</div>\n//         <div>학교:{data === undefined ? '' : data.fetchProfile.school}</div>\n//       </div>\n//     )\n//   }\n//   export default nameIndex\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVlcnk0L1tuYW1lXS9pbmRleC50c3g/OTE2YyJdLCJuYW1lcyI6WyJuYW1lSW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJMRUdPIiwiZ3FsIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUUsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUd0QixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCLENBSHNCLENBS3RCO0FBR0E7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxtREFBSCxtQkFBVjtBQVVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsTUFBWixFQW5Cc0IsQ0FvQnBCO0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFJQSxzQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQXZDRDs7R0FBTUQsUztVQUdXRSxrRDs7O0FBdUNuQiwrREFBZUYsU0FBZixFLENBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9xdWVyeTQvW25hbWVdL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOuwsSDrjbDsnbTthLAg7L+866asIOydveq4sCwgICB1c2VRdWVyeSwgZ3FsLlxuLy8g7ZSE66Gg7Yq4IOyjvOyGjCDsobDtmowgLT4gcm91dGVyXG5cbi8vIeyLnOyekVxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuXG4gIGNvbnN0IG5hbWVJbmRleCA9ICgpID0+IHtcblxuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIC8vIGNvbnNvbGUubG9nKHJvdXRlcilcblxuXG4gICAgLy8h7Jes6riw7IScIHZhcmlhYmxlIOuSpOyXkCDqsr3roZwg7LC+7Jy865+s66m0IEdxbCDshKDslrjtlZwgTEVHT+ulvCDsvZjshpTroZzqt7gg7ZW07IScIOywvuyVhOyVvO2VmOuCmC5cbiAgICBjb25zdCBMRUdPID0gZ3FsYFxuICAgIHF1ZXJ5IFpaWigkbmFtZSA6IFN0cmluZyl7XG4gICAgICBmZXRjaFByb2ZpbGUobmFtZTogJG5hbWVcbiAgICAgICl7XG4gICAgICAgIG5hbWVcbiAgICAgICAgYWdlXG4gICAgICAgIHNjaG9vbFxuICAgICAgfX1cbiAgICBgXG5cbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIpXG4gICAgICAvLyrslpjripQg7KGw7ZqM7ZWY64qU6rKMIOunnuuKlOyngC4g7JaY66Gc64qUIOutmCDslYzquLAg7Z6Y65OmLlxuXG4gICAgLy8gY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShMRUdPLCB7dmFyaWFibGVzOntuYW1lOnJvdXRlci5xdWVyeS5uYW1lfX0pXG4gICAgLy8hIHVzZU11dGF0aW9uIOuVjOuKlCDshKDslrgg67aA67aE7JeQIFtdLCB1c2VRdWVyeeuVjCB7feulvCDsk7DripQg7J207JygIOyVjOyVhOuztOq4sC5cbiAgICAvLyHsl6zquLAg67Kg66as7Ja067iU7Iqk7J2YIOqyveuhnCDtjIzslYXtlZjripQg67KVIOuLpOyLnCDrrLzslrTrs7TquLAuIOudvOyasO2EsOq3uOuDpSByb3V0ZXIucXVlcnnripQg7JW97IaN7J246rG06rCALlxuICAgIC8vISB1c2VNdXRhdGlvbigpIOyXkOyEnOuKlCAoKSDslYjsl5AgZ3Fs66eMIOuEo+ydjC4gIOyXrOq4sOyEnOuKlCDsoIQg7Y6Y7J207KeA7JeQ7IScIOyeheugpe2VnCDrjbDsnbTthLDqsJLsnYQg7J297Ja07JW87ZWoISFcblxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHsvKiA8ZGl2PuydtOumhDp7ZGF0YSAmJiBkYXRhLmZldGNoUHJvZmlsZS5uYW1lfTwvZGl2PiAqL31cbiAgICAgICAgey8qIDxkaXY+64KY7J20OntkYXRhICYmIGRhdGEuZmV0Y2hQcm9maWxlLmFnZX08L2Rpdj4gKi99XG4gICAgICAgIHsvKiA8ZGl2Pu2Vmeq1kDp7ZGF0YSA9PT0gdW5kZWZpbmVkID8gJycgOiBkYXRhLmZldGNoUHJvZmlsZS5zY2hvb2x9PC9kaXY+ICovfVxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICB9XG5cblxuZXhwb3J0IGRlZmF1bHQgbmFtZUluZGV4XG5cbi8vIeuBnVxuXG4vL+2VtOyVvO2VoOqygyAxLiDsnKDspojsv7zrpqwgMi4g7KO87IaMIOuwm+q4sCDsnITtlZwg65287Jqw7YSwIOyCrOyaqS5cblxuLy8gaW1wb3J0IHtncWwsIHVzZVF1ZXJ5fSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbi8vIGltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcblxuLy8gICBjb25zdCBuYW1lSW5kZXggPSAoKSA9PiB7XG5cblxuLy8gICAgIGNvbnN0IExFR08gPSBncWxgXG4vLyAgICAgcXVlcnkgWlpaKCRuYW1lOiBTdHJpbmcpe1xuLy8gICAgICAgZmV0Y2hQcm9maWxlKG5hbWU6ICRuYW1lICApe1xuLy8gICAgICAgICBuYW1lXG4vLyAgICAgICAgIGFnZVxuLy8gICAgICAgICBzY2hvb2xcbi8vICAgICAgIH19XG4vLyAgICAgYFxuXG4vLyAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuLy8gICAgIGNvbnN0IHtkYXRhfSA9IHVzZVF1ZXJ5KExFR08sIHt2YXJpYWJsZXM6e25hbWU6cm91dGVyLnF1ZXJ5Lm5hbWV9fSlcblxuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cblxuXG4vLyAgICAgcmV0dXJuKFxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPGRpdj7snbTrpoQ6e2RhdGEgJiYgZGF0YS5mZXRjaFByb2ZpbGUubmFtZX08L2Rpdj5cbi8vICAgICAgICAgPGRpdj7rgpjsnbQ6eyFkYXRhID8gJycgOiBkYXRhLmZldGNoUHJvZmlsZS5hZ2V9PC9kaXY+XG4vLyAgICAgICAgIDxkaXY+7ZWZ6rWQOntkYXRhID09PSB1bmRlZmluZWQgPyAnJyA6IGRhdGEuZmV0Y2hQcm9maWxlLnNjaG9vbH08L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vICAgfVxuLy8gICBleHBvcnQgZGVmYXVsdCBuYW1lSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/query4/[name]/index.tsx\n");

/***/ })

});