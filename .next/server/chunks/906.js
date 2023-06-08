"use strict";
exports.id = 906;
exports.ids = [906];
exports.modules = {

/***/ 8906:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GX": () => (/* binding */ deleteRoom),
/* harmony export */   "ZP": () => (/* binding */ getRooms),
/* harmony export */   "dB": () => (/* binding */ createRoom),
/* harmony export */   "el": () => (/* binding */ enterRoom)
/* harmony export */ });
/* unused harmony export leaveRoom */
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages__WEBPACK_IMPORTED_MODULE_0__]);
_pages__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function getRooms() {
    return new Promise((resolve)=>{
        fetch(_pages__WEBPACK_IMPORTED_MODULE_0__.apiUrl + "/room").then((response)=>{
            resolve(response.json().then((data)=>data));
        });
    });
}
async function createRoom(room, user) {
    try {
        const response = await fetch(_pages__WEBPACK_IMPORTED_MODULE_0__.apiUrl + "/room", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // @ts-ignore
                "Authorization": "Bearer " + user.access_token
            },
            body: JSON.stringify(room)
        });
        if (!response.ok) {
            throw new Error("Failed to add room");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
async function deleteRoom(room) {
    try {
        const response = await fetch(_pages__WEBPACK_IMPORTED_MODULE_0__.apiUrl + "/room/" + room.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(room)
        });
        if (!response.ok) {
            throw new Error("Failed to delete room");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
async function enterRoom(uuid, id) {
    try {
        const response = await fetch(_pages__WEBPACK_IMPORTED_MODULE_0__.apiUrl + `/rooms/${uuid}/users/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: ""
        });
        if (!response.ok) {
            throw new Error("Failed to enter active rooms");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
async function leaveRoom(uuid) {
    try {
        const response = await fetch(apiUrl + `/rooms/${uuid}/users/1`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error("Failed to leave active rooms");
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