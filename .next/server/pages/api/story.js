"use strict";
(() => {
var exports = {};
exports.id = 698;
exports.ids = [698,405];
exports.modules = {

/***/ 3544:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons/faRightFromBracket");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 6747:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStory": () => (/* binding */ createStory),
/* harmony export */   "default": () => (/* binding */ getStories),
/* harmony export */   "deleteStory": () => (/* binding */ deleteStory)
/* harmony export */ });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6506);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages__WEBPACK_IMPORTED_MODULE_0__]);
_pages__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function getStories(idRoom) {
    return new Promise((resolve)=>{
        fetch(_pages__WEBPACK_IMPORTED_MODULE_0__/* .apiUrl */ .J + "/rooms/" + idRoom + "?include=storys").then((response)=>{
            resolve(response.json().then((data)=>data["storys"]));
        });
    });
}
async function createStory(story, user) {
    try {
        const response = await fetch(_pages__WEBPACK_IMPORTED_MODULE_0__/* .apiUrl */ .J + "/story/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // @ts-ignore
                "Authorization": "Bearer " + user.access_token
            },
            body: JSON.stringify(story)
        });
        if (!response.ok) {
            throw new Error("Failed to add story");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
async function deleteStory(story) {
    try {
        const response = await fetch(_pages__WEBPACK_IMPORTED_MODULE_0__/* .apiUrl */ .J + "/story/" + story.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(story)
        });
        if (!response.ok) {
            throw new Error("Failed to delete story");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [725,506], () => (__webpack_exec__(6747)));
module.exports = __webpack_exports__;

})();