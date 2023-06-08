"use strict";
(() => {
var exports = {};
exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 3348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUser": () => (/* binding */ addUser),
/* harmony export */   "connectUser": () => (/* binding */ connectUser),
/* harmony export */   "default": () => (/* binding */ getUsers),
/* harmony export */   "deleteUser": () => (/* binding */ deleteUser)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function getUsers() {
    return new Promise((resolve)=>{
        fetch("http://127.0.0.1:8090/api/user").then((res)=>{
            resolve(res.json().then((data)=>data));
        });
    });
}
async function addUser(user) {
    try {
        const response = await fetch("http://127.0.0.1:8090/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error("Failed to add user");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
async function deleteUser(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8090/api/user/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error("Failed to delete user");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
async function connectUser(user) {
    try {
        var data = new URLSearchParams();
        data.append("username", user.username);
        data.append("password", user.password);
        const response = await fetch("http://127.0.0.1:8090/api/connect", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: data
        });
    } catch (error) {
        console.error(error);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3348));
module.exports = __webpack_exports__;

})();