"use strict";
(() => {
var exports = {};
exports.id = 165;
exports.ids = [165];
exports.modules = {

/***/ 9531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSuites),
/* harmony export */   "getOneSuite": () => (/* binding */ getOneSuite)
/* harmony export */ });
function getSuites() {
    return new Promise((resolve)=>{
        fetch("http://127.0.0.1:8090/api/suite").then((response)=>{
            resolve(response.json().then((data)=>data));
        });
    });
}
async function getOneSuite(id) {
    return new Promise((resolve)=>{
        fetch(`http://127.0.0.1:8090/api/suite/${id}`).then((response)=>{
            resolve(response.json().then((data)=>data));
        });
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9531));
module.exports = __webpack_exports__;

})();