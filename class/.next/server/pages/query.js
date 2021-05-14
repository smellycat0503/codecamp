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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProfilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_type_definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql/type/definition */ \"graphql/type/definition\");\n/* harmony import */ var graphql_type_definition__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_type_definition__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/parkminkyu/Desktop/codecamp_1\\u1100\\u1175_\\u1107\\u1161\\u11A8\\u1106\\u1175\\u11AB\\u1100\\u1172/class/pages/query/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nfunction ProfilePage() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n  const {\n    0: aaaa,\n    1: setAaaa\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n    name: \"\",\n    age: \"\",\n    school: \"\" //세개 다 적용하기 위하 스프레드 쓰려고 하나로 묶어버림\n\n  }); // const onClickRouting3 = () =>{\n  //     router.push(`/query/${aaaa.name}`)\n  // }\n\n  const PROFILE = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n        mutation bbbb ( $name:String, $age:Int, $school:String )\n            {\n                createProfile(\n                name:$name,\n                age:$age,\n                school:$school\n            \n                ){\n                message\n                }\n            }\n        `; //playground에 느낌표가 들어가면 느낌표도 같이 넣어야함.\n\n  const [createProfile] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(PROFILE); //-> 뮤테이션 실행하기 위함.\n\n  async function onClickRegist() {\n    try {\n      const result = await createProfile({\n        variables: _objectSpread(_objectSpread({}, aaaa), {}, {\n          age: Number(aaaa.age) //이거 왜지??\n          //벨류로 꺼내면 텍스트가 되므로 다시 넘버로 변경해야함.\n\n        })\n      });\n      alert(\"성공시메세지데이터어디서볼까요\");\n      router.push(`/query/${aaaa.name}`); // aaaa.name\n    } catch (error) {\n      alert(\"실패시메세지데이터어디서확인할까요\");\n    }\n  }\n\n  function onChangeInput(event) {\n    const cccc = _objectSpread(_objectSpread({}, aaaa), {}, {\n      [event.target.name]: event.target.value //키에 []가 있으면 객채에서의 키를 의미. 벨류에 []가 있으면 일반적인 대괄호.\n      //키에 []가 없으면 객체 키가 아닌 값이 되어버림. 키로 만들기 위한JS에서의 약속.\n      // \n\n    }); // cccc.age.ggg\n    // const cccc = {\n    //     event: {\n    //         target: {\n    //             name: \"124\"\n    //         }\n    //     }\n    // }\n\n\n    setAaaa(cccc);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: \"\\uC774\\uB984: \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"name\",\n      onChange: onChangeInput\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 30\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: \"\\uB098\\uC774: \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"age\",\n      onChange: onChangeInput\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 30\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: \"\\uD559\\uAD50: \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"school\",\n      onChange: onChangeInput\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 30\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: onClickRegist,\n      children: \"\\uD504\\uB85C\\uD544 \\uB4F1\\uB85D\\uD558\\uAE30\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 100,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3BhZ2VzL3F1ZXJ5L2luZGV4LmpzPzdjMTkiXSwibmFtZXMiOlsiUHJvZmlsZVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhYWFhIiwic2V0QWFhYSIsInVzZVN0YXRlIiwibmFtZSIsImFnZSIsInNjaG9vbCIsIlBST0ZJTEUiLCJncWwiLCJjcmVhdGVQcm9maWxlIiwidXNlTXV0YXRpb24iLCJvbkNsaWNrUmVnaXN0IiwicmVzdWx0IiwidmFyaWFibGVzIiwiTnVtYmVyIiwiYWxlcnQiLCJwdXNoIiwiZXJyb3IiLCJvbkNoYW5nZUlucHV0IiwiZXZlbnQiLCJjY2NjIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSWUsU0FBU0EsV0FBVCxHQUFzQjtBQUdqQyxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBR0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUM1QjtBQUNJQyxRQUFJLEVBQUMsRUFEVDtBQUVJQyxPQUFHLEVBQUMsRUFGUjtBQUdJQyxVQUFNLEVBQUMsRUFIWCxDQUlJOztBQUpKLEdBRDRCLENBQWhDLENBTmlDLENBZWpDO0FBRUE7QUFDQTs7QUFJQSxRQUFNQyxPQUFPLEdBQUdDLCtDQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVpJLENBdEJpQyxDQW1DakM7O0FBQ0EsUUFBTSxDQUFDQyxhQUFELElBQWtCQywyREFBVyxDQUFDSCxPQUFELENBQW5DLENBcENpQyxDQXFDakM7O0FBRUEsaUJBQWVJLGFBQWYsR0FBOEI7QUFDMUIsUUFBRztBQUNDLFlBQU1DLE1BQU0sR0FBRyxNQUFNSCxhQUFhLENBQUM7QUFDL0JJLGlCQUFTLGtDQUFLWixJQUFMO0FBQ0xJLGFBQUcsRUFBQ1MsTUFBTSxDQUFDYixJQUFJLENBQUNJLEdBQU4sQ0FETCxDQUVMO0FBQ0E7O0FBSEs7QUFEc0IsT0FBRCxDQUFsQztBQU9BVSxXQUFLLENBQUMsaUJBQUQsQ0FBTDtBQUVBaEIsWUFBTSxDQUFDaUIsSUFBUCxDQUFhLFVBQVNmLElBQUksQ0FBQ0csSUFBSyxFQUFoQyxFQVZELENBWUM7QUFFSCxLQWRELENBY0UsT0FBTWEsS0FBTixFQUFZO0FBQ1ZGLFdBQUssQ0FBQyxtQkFBRCxDQUFMO0FBQ0g7QUFFSjs7QUFFRCxXQUFTRyxhQUFULENBQXVCQyxLQUF2QixFQUE2QjtBQUd6QixVQUFNQyxJQUFJLG1DQUNIbkIsSUFERztBQUVOLE9BQUNrQixLQUFLLENBQUNFLE1BQU4sQ0FBYWpCLElBQWQsR0FBcUJlLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUY1QixDQUdWO0FBQ0E7QUFDQTs7QUFMVSxNQUFWLENBSHlCLENBWXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBcEIsV0FBTyxDQUFDa0IsSUFBRCxDQUFQO0FBRUg7O0FBT0Qsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBQ3FCO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBSSxFQUFDLE1BQXhCO0FBQStCLGNBQVEsRUFBSUY7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURyQixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFFcUI7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFJLEVBQUMsS0FBeEI7QUFBOEIsY0FBUSxFQUFJQTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRnJCLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUdxQjtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLFVBQUksRUFBRSxRQUF6QjtBQUFrQyxjQUFRLEVBQUlBO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIckIsZUFJSTtBQUFRLGFBQU8sRUFBSVAsYUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWFIIiwiZmlsZSI6Ii4vcGFnZXMvcXVlcnkvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZU11dGF0aW9uLCBncWx9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0IHsgYXNzZXJ0QWJzdHJhY3RUeXBlIH0gZnJvbSAnZ3JhcGhxbCdcbmltcG9ydCB7IGFyZ3NUb0FyZ3NDb25maWcgfSBmcm9tICdncmFwaHFsL3R5cGUvZGVmaW5pdGlvbidcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZVBhZ2UoKXtcblxuICAgIFxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblxuICAgIGNvbnN0IFthYWFhLCBzZXRBYWFhXSA9IHVzZVN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOlwiXCIsXG4gICAgICAgICAgICBhZ2U6XCJcIixcbiAgICAgICAgICAgIHNjaG9vbDpcIlwiXG4gICAgICAgICAgICAvL+yEuOqwnCDri6Qg7KCB7Jqp7ZWY6riwIOychO2VmCDsiqTtlITroIjrk5wg7JOw66Ck6rOgIO2VmOuCmOuhnCDrrLbslrTrsoTrprxcbiAgICAgICAgfVxuICAgIClcblxuICAgIC8vIGNvbnN0IG9uQ2xpY2tSb3V0aW5nMyA9ICgpID0+e1xuXG4gICAgLy8gICAgIHJvdXRlci5wdXNoKGAvcXVlcnkvJHthYWFhLm5hbWV9YClcbiAgICAvLyB9XG5cblxuXG4gICAgY29uc3QgUFJPRklMRSA9IGdxbGBcbiAgICAgICAgbXV0YXRpb24gYmJiYiAoICRuYW1lOlN0cmluZywgJGFnZTpJbnQsICRzY2hvb2w6U3RyaW5nIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVQcm9maWxlKFxuICAgICAgICAgICAgICAgIG5hbWU6JG5hbWUsXG4gICAgICAgICAgICAgICAgYWdlOiRhZ2UsXG4gICAgICAgICAgICAgICAgc2Nob29sOiRzY2hvb2xcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICl7XG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYCBcbiAgICAvL3BsYXlncm91bmTsl5Ag64qQ64KM7ZGc6rCAIOuTpOyWtOqwgOuptCDripDrgoztkZzrj4Qg6rCZ7J20IOuEo+yWtOyVvO2VqC5cbiAgICBjb25zdCBbY3JlYXRlUHJvZmlsZV0gPSB1c2VNdXRhdGlvbihQUk9GSUxFKVxuICAgIC8vLT4g666k7YWM7J207IWYIOyLpO2Wie2VmOq4sCDsnITtlaguXG5cbiAgICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrUmVnaXN0KCl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZVByb2ZpbGUoe1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlczp7Li4uYWFhYSxcbiAgICAgICAgICAgICAgICAgICAgYWdlOk51bWJlcihhYWFhLmFnZSkgXG4gICAgICAgICAgICAgICAgICAgIC8v7J206rGwIOyZnOyngD8/XG4gICAgICAgICAgICAgICAgICAgIC8v67Ko66WY66GcIOq6vOuCtOuptCDthY3siqTtirjqsIAg65CY66+A66GcIOuLpOyLnCDrhJjrsoTroZwg67OA6rK97ZW07JW87ZWoLlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSBcbiAgICAgICAgICAgIGFsZXJ0KFwi7ISx6rO17Iuc66mU7IS47KeA642w7J207YSw7Ja065SU7ISc67O86rmM7JqUXCIpXG5cbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcXVlcnkvJHthYWFhLm5hbWV9YClcblxuICAgICAgICAgICAgLy8gYWFhYS5uYW1lXG5cbiAgICAgICAgfSBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICBhbGVydChcIuyLpO2MqOyLnOuplOyEuOyngOuNsOydtO2EsOyWtOuUlOyEnO2ZleyduO2VoOq5jOyalFwiKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNoYW5nZUlucHV0KGV2ZW50KXtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBjY2NjID0ge1xuICAgICAgICAgICAgLi4uYWFhYSxcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAvL+2CpOyXkCBbXeqwgCDsnojsnLzrqbQg6rCd7LGE7JeQ7ISc7J2YIO2CpOulvCDsnZjrr7guIOuyqOulmOyXkCBbXeqwgCDsnojsnLzrqbQg7J2867CY7KCB7J24IOuMgOq0hO2YuC5cbiAgICAgICAgLy/tgqTsl5AgW13qsIAg7JeG7Jy866m0IOqwneyytCDtgqTqsIAg7JWE64uMIOqwkuydtCDrkJjslrTrsoTrprwuIO2CpOuhnCDrp4zrk6TquLAg7JyE7ZWcSlPsl5DshJzsnZgg7JW97IaNLlxuICAgICAgICAvLyBcbiAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjY2NjLmFnZS5nZ2dcbiAgICAgICAgLy8gY29uc3QgY2NjYyA9IHtcbiAgICAgICAgLy8gICAgIGV2ZW50OiB7XG4gICAgICAgIC8vICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIG5hbWU6IFwiMTI0XCJcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICBzZXRBYWFhKGNjY2MpXG5cbiAgICB9XG5cblxuXG5cblxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4+7J2066aEOiA8L3NwYW4+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZSA9IHtvbkNoYW5nZUlucHV0fT48L2lucHV0PlxuICAgICAgICAgICAgPHNwYW4+64KY7J20OiA8L3NwYW4+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFnZVwiIG9uQ2hhbmdlID0ge29uQ2hhbmdlSW5wdXR9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8c3Bhbj7tlZnqtZA6IDwvc3Bhbj48aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPSBcInNjaG9vbFwiIG9uQ2hhbmdlID0ge29uQ2hhbmdlSW5wdXR9PjwvaW5wdXQ+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7b25DbGlja1JlZ2lzdH0+7ZSE66Gc7ZWEIOuTseuhne2VmOq4sDwvYnV0dG9uPlxuXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/query/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql");;

/***/ }),

/***/ "graphql/type/definition":
/*!******************************************!*\
  !*** external "graphql/type/definition" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql/type/definition");;

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