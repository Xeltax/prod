"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 6277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/auth/[...nextauth].ts


/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    providers: [
        credentials_default()({
            name: "Credentials",
            credentials: {
                username: {
                    name: "username",
                    label: "Username",
                    type: "text",
                    placeholder: "jsmith"
                },
                password: {
                    name: "password",
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials, req) {
                var data = new URLSearchParams();
                // @ts-ignore
                data.append("username", credentials.username);
                // @ts-ignore
                data.append("password", credentials.password);
                const res = await fetch("http://127.0.0.1:8090/api/connect", {
                    method: "POST",
                    body: data,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                });
                const user = await res.json().then((data)=>data);
                if (res.ok && user) {
                    return user;
                }
                return null;
            }
        })
    ],
    secret: "c1bcd1f28a0c5afed7b8acf25fa5236c",
    callbacks: {
        jwt: async ({ token , user  })=>{
            user && (token.user = user);
            return token;
        },
        session: async ({ session , token  })=>{
            // @ts-ignore
            session.user = token.user;
            return session;
        },
        redirect ({ url , baseUrl  }) {
            return url;
        }
    },
    pages: {
        signIn: "/login",
        error: "/login"
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6277));
module.exports = __webpack_exports__;

})();