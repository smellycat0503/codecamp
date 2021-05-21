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
exports.id = "pages/query4/[name]";
exports.ids = ["pages/query4/[name]"];
exports.modules = {

/***/ "./pages/query4/[name]/index.tsx":
/*!***************************************!*\
  !*** ./pages/query4/[name]/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/parkminkyu/Desktop/codecamp_1\\u1100\\u1175_\\u1107\\u1161\\u11A8\\u1106\\u1175\\u11AB\\u1100\\u1172/class/pages/query4/[name]/index.tsx\";\n// 백 데이터 쿼리 읽기,   useQuery, gql.\n// 프론트 주소 조회 -> router\n//!시작\n\n\n\nconst nameIndex = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); // console.log(router)\n  //!여기서 variable 뒤에 경로 찾으러면 Gql 선언한 LEGO를 콘솔로그 해서 찾아야하나.\n\n  const LEGO = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n    query ZZZ($name : String){\n      fetchProfile(name: $name\n      ){\n        name\n        age\n        school\n      }}\n    `;\n  console.log(router); //*얘는 조회하는게 맞는지. 얘로는 뭘 알기 힘듦.\n  // const { data } = useQuery(LEGO, {variables:{name:router.query.name}})\n  //! useMutation 때는 선언 부분에 [], useQuery때 {}를 쓰는 이유 알아보기.\n  //!여기 베리어블스의 경로 파악하는 법 다시 물어보기. 라우터그냥 router.query는 약속인건가.\n  //! useMutation() 에서는 () 안에 gql만 넣음.  여기서는 전 페이지에서 입력한 데이터값을 읽어야함!!\n  // console.log(data)\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 7\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (nameIndex); //!끝\n//해야할것 1. 유즈쿼리 2. 주소 받기 위한 라우터 사용.\n// import {gql, useQuery} from '@apollo/client'\n// import {useRouter} from 'next/router'\n//   const nameIndex = () => {\n//     const LEGO = gql`\n//     query ZZZ($name: String){\n//       fetchProfile(name: $name  ){\n//         name\n//         age\n//         school\n//       }}\n//     `\n//     const router = useRouter()\n//     const {data} = useQuery(LEGO, {variables:{name:router.query.name}})\n//     console.log(data)\n//     return(\n//       <div>\n//         <div>이름:{data && data.fetchProfile.name}</div>\n//         <div>나이:{!data ? '' : data.fetchProfile.age}</div>\n//         <div>학교:{data === undefined ? '' : data.fetchProfile.school}</div>\n//       </div>\n//     )\n//   }\n//   export default nameIndex//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3BhZ2VzL3F1ZXJ5NC9bbmFtZV0vaW5kZXgudHN4PzkxNmMiXSwibmFtZXMiOlsibmFtZUluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwiTEVHTyIsImdxbCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUUsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFHdEIsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QixDQUhzQixDQUt0QjtBQUdBOztBQUNBLFFBQU1DLElBQUksR0FBR0MsK0NBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVJJO0FBVUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxNQUFaLEVBbkJzQixDQW9CcEI7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUlBLHNCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBdkNEOztBQTBDRiwrREFBZUQsU0FBZixFLENBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9xdWVyeTQvW25hbWVdL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOuwsSDrjbDsnbTthLAg7L+866asIOydveq4sCwgICB1c2VRdWVyeSwgZ3FsLlxuLy8g7ZSE66Gg7Yq4IOyjvOyGjCDsobDtmowgLT4gcm91dGVyXG5cbi8vIeyLnOyekVxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuXG4gIGNvbnN0IG5hbWVJbmRleCA9ICgpID0+IHtcblxuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIC8vIGNvbnNvbGUubG9nKHJvdXRlcilcblxuXG4gICAgLy8h7Jes6riw7IScIHZhcmlhYmxlIOuSpOyXkCDqsr3roZwg7LC+7Jy865+s66m0IEdxbCDshKDslrjtlZwgTEVHT+ulvCDsvZjshpTroZzqt7gg7ZW07IScIOywvuyVhOyVvO2VmOuCmC5cbiAgICBjb25zdCBMRUdPID0gZ3FsYFxuICAgIHF1ZXJ5IFpaWigkbmFtZSA6IFN0cmluZyl7XG4gICAgICBmZXRjaFByb2ZpbGUobmFtZTogJG5hbWVcbiAgICAgICl7XG4gICAgICAgIG5hbWVcbiAgICAgICAgYWdlXG4gICAgICAgIHNjaG9vbFxuICAgICAgfX1cbiAgICBgXG5cbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIpXG4gICAgICAvLyrslpjripQg7KGw7ZqM7ZWY64qU6rKMIOunnuuKlOyngC4g7JaY66Gc64qUIOutmCDslYzquLAg7Z6Y65OmLlxuXG4gICAgLy8gY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShMRUdPLCB7dmFyaWFibGVzOntuYW1lOnJvdXRlci5xdWVyeS5uYW1lfX0pXG4gICAgLy8hIHVzZU11dGF0aW9uIOuVjOuKlCDshKDslrgg67aA67aE7JeQIFtdLCB1c2VRdWVyeeuVjCB7feulvCDsk7DripQg7J207JygIOyVjOyVhOuztOq4sC5cbiAgICAvLyHsl6zquLAg67Kg66as7Ja067iU7Iqk7J2YIOqyveuhnCDtjIzslYXtlZjripQg67KVIOuLpOyLnCDrrLzslrTrs7TquLAuIOudvOyasO2EsOq3uOuDpSByb3V0ZXIucXVlcnnripQg7JW97IaN7J246rG06rCALlxuICAgIC8vISB1c2VNdXRhdGlvbigpIOyXkOyEnOuKlCAoKSDslYjsl5AgZ3Fs66eMIOuEo+ydjC4gIOyXrOq4sOyEnOuKlCDsoIQg7Y6Y7J207KeA7JeQ7IScIOyeheugpe2VnCDrjbDsnbTthLDqsJLsnYQg7J297Ja07JW87ZWoISFcblxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHsvKiA8ZGl2PuydtOumhDp7ZGF0YSAmJiBkYXRhLmZldGNoUHJvZmlsZS5uYW1lfTwvZGl2PiAqL31cbiAgICAgICAgey8qIDxkaXY+64KY7J20OntkYXRhICYmIGRhdGEuZmV0Y2hQcm9maWxlLmFnZX08L2Rpdj4gKi99XG4gICAgICAgIHsvKiA8ZGl2Pu2Vmeq1kDp7ZGF0YSA9PT0gdW5kZWZpbmVkID8gJycgOiBkYXRhLmZldGNoUHJvZmlsZS5zY2hvb2x9PC9kaXY+ICovfVxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICB9XG5cblxuZXhwb3J0IGRlZmF1bHQgbmFtZUluZGV4XG5cbi8vIeuBnVxuXG4vL+2VtOyVvO2VoOqygyAxLiDsnKDspojsv7zrpqwgMi4g7KO87IaMIOuwm+q4sCDsnITtlZwg65287Jqw7YSwIOyCrOyaqS5cblxuLy8gaW1wb3J0IHtncWwsIHVzZVF1ZXJ5fSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbi8vIGltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcblxuLy8gICBjb25zdCBuYW1lSW5kZXggPSAoKSA9PiB7XG5cblxuLy8gICAgIGNvbnN0IExFR08gPSBncWxgXG4vLyAgICAgcXVlcnkgWlpaKCRuYW1lOiBTdHJpbmcpe1xuLy8gICAgICAgZmV0Y2hQcm9maWxlKG5hbWU6ICRuYW1lICApe1xuLy8gICAgICAgICBuYW1lXG4vLyAgICAgICAgIGFnZVxuLy8gICAgICAgICBzY2hvb2xcbi8vICAgICAgIH19XG4vLyAgICAgYFxuXG4vLyAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuLy8gICAgIGNvbnN0IHtkYXRhfSA9IHVzZVF1ZXJ5KExFR08sIHt2YXJpYWJsZXM6e25hbWU6cm91dGVyLnF1ZXJ5Lm5hbWV9fSlcblxuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cblxuXG4vLyAgICAgcmV0dXJuKFxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPGRpdj7snbTrpoQ6e2RhdGEgJiYgZGF0YS5mZXRjaFByb2ZpbGUubmFtZX08L2Rpdj5cbi8vICAgICAgICAgPGRpdj7rgpjsnbQ6eyFkYXRhID8gJycgOiBkYXRhLmZldGNoUHJvZmlsZS5hZ2V9PC9kaXY+XG4vLyAgICAgICAgIDxkaXY+7ZWZ6rWQOntkYXRhID09PSB1bmRlZmluZWQgPyAnJyA6IGRhdGEuZmV0Y2hQcm9maWxlLnNjaG9vbH08L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vICAgfVxuLy8gICBleHBvcnQgZGVmYXVsdCBuYW1lSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/query4/[name]/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/query4/[name]/index.tsx"));
module.exports = __webpack_exports__;

})();