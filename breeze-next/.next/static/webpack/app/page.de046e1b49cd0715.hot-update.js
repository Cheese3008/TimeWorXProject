"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/LoginLinks.js":
/*!*******************************!*\
  !*** ./src/app/LoginLinks.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/auth */ \"(app-pages-browser)/./src/hooks/auth.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst LoginLinks = ()=>{\n    _s();\n    const { user } = (0,_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuth)({\n        middleware: \"guest\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hidden fixed top-0 right-0 px-6 py-4 sm:block\",\n        children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            href: \"/dashboard\",\n            className: \"link ml-4 text-sm text-gray-700 underline\",\n            children: \"Dashboard\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Projectbasic\\\\breeze-next\\\\src\\\\app\\\\LoginLinks.js\",\n            lineNumber: 12,\n            columnNumber: 17\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/login\",\n                    className: \"link text-sm text-gray-700 underline\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projectbasic\\\\breeze-next\\\\src\\\\app\\\\LoginLinks.js\",\n                    lineNumber: 20,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/register\",\n                    className: \"link ml-4 text-sm text-gray-700 underline\",\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projectbasic\\\\breeze-next\\\\src\\\\app\\\\LoginLinks.js\",\n                    lineNumber: 27,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projectbasic\\\\breeze-next\\\\src\\\\app\\\\LoginLinks.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LoginLinks, \"9ep4vdl3mBfipxjmc+tQCDhw6Ik=\", false, function() {\n    return [\n        _hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = LoginLinks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginLinks);\nvar _c;\n$RefreshReg$(_c, \"LoginLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvTG9naW5MaW5rcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFNEI7QUFDVTtBQUV0QyxNQUFNRSxhQUFhOztJQUNmLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGLG9EQUFPQSxDQUFDO1FBQUVHLFlBQVk7SUFBUTtJQUUvQyxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDVkgscUJBQ0csOERBQUNILGlEQUFJQTtZQUNETyxNQUFLO1lBQ0xELFdBQVU7c0JBQ2I7Ozs7O3NDQUlEOzs4QkFDSSw4REFBQ04saURBQUlBO29CQUNETyxNQUFLO29CQUNMRCxXQUFVOzhCQUNiOzs7Ozs7OEJBSUQsOERBQUNOLGlEQUFJQTtvQkFDRE8sTUFBSztvQkFDTEQsV0FBVTs4QkFDYjs7Ozs7Ozs7Ozs7OztBQU9yQjtHQS9CTUo7O1FBQ2VELGdEQUFPQTs7O0tBRHRCQztBQWlDTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0xvZ2luTGlua3MuanM/OTAzYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0AvaG9va3MvYXV0aCdcclxuXHJcbmNvbnN0IExvZ2luTGlua3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoeyBtaWRkbGV3YXJlOiAnZ3Vlc3QnIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBmaXhlZCB0b3AtMCByaWdodC0wIHB4LTYgcHktNCBzbTpibG9ja1wiPlxyXG4gICAgICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9kYXNoYm9hcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmsgbWwtNCB0ZXh0LXNtIHRleHQtZ3JheS03MDAgdW5kZXJsaW5lXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9sb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmsgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIHVuZGVybGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9yZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmsgbWwtNCB0ZXh0LXNtIHRleHQtZ3JheS03MDAgdW5kZXJsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luTGlua3NcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VBdXRoIiwiTG9naW5MaW5rcyIsInVzZXIiLCJtaWRkbGV3YXJlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/LoginLinks.js\n"));

/***/ })

});