exports.id = 85;
exports.ids = [85];
exports.modules = {

/***/ 5665:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__Y61Nt"
};


/***/ }),

/***/ 3050:
/***/ ((module) => {

// Exports
module.exports = {
	"indexCard": "IndexCard_indexCard__R1YY_",
	"linked": "IndexCard_linked__u2Rn2"
};


/***/ }),

/***/ 8894:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "Input_input__XUtc3",
	"inputNumberIcon": "Input_inputNumberIcon__nL7EK"
};


/***/ }),

/***/ 6458:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 2064:
/***/ ((module) => {

// Exports
module.exports = {
	"modalOverlay": "Modal_modalOverlay__oINB5",
	"modal": "Modal_modal__WFaF0",
	"modalContent": "Modal_modalContent__ueo5m"
};


/***/ }),

/***/ 8849:
/***/ ((module) => {

// Exports
module.exports = {
	"navContainer": "Nav_navContainer__k04YJ",
	"logoPlacement": "Nav_logoPlacement__i26Fw",
	"crown": "Nav_crown__mP57n",
	"navLinks": "Nav_navLinks___ndn9",
	"accounts": "Nav_accounts__r4w_F"
};


/***/ }),

/***/ 7181:
/***/ ((module) => {

// Exports
module.exports = {
	"indexContainer": "Index_indexContainer__6fIZO",
	"infoContainer": "Index_infoContainer__dV8Do",
	"cardPlacement": "Index_cardPlacement__PVXDn"
};


/***/ }),

/***/ 4780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_component_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5665);
/* harmony import */ var _styles_component_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_component_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function Button(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_component_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().button),
        style: {
            background: `${props.color ?? "#E3BC3E"}`
        },
        "data-color": props.color,
        "data-size": props.size ?? "normal",
        "data-icon-position": props.iconPosition,
        onClick: props.event,
        children: [
            props.icon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: props.icon
            }) : undefined,
            props.children
        ]
    });
}


/***/ }),

/***/ 472:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ IndexCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_component_IndexCard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3050);
/* harmony import */ var _styles_component_IndexCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_component_IndexCard_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function IndexCard(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        whileHover: {
            y: -10
        },
        className: (_styles_component_IndexCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().indexCard),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                icon: props.icon,
                size: "2xl",
                color: "#E3BC3EFF"
            }),
            props.link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "Rooms",
                className: (_styles_component_IndexCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().linked),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: props.children
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: props.children
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_component_Input_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8894);
/* harmony import */ var _styles_component_Input_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_component_Input_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function Input(props) {
    const handleInput = (e)=>{
        props.inputData(e);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_component_Input_module_scss__WEBPACK_IMPORTED_MODULE_2___default().input),
        "data-icon-position": props.iconPosition,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                children: props.label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: props.icon
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                style: {
                    borderBottom: `3px solid ${props.bottomColor ?? "#E3BC3E"}`
                },
                required: true,
                value: props.value,
                type: props.type,
                placeholder: props.placeholder,
                "data-icon-position": props.iconPosition,
                pattern: props.pattern,
                onChange: (e)=>handleInput(e.target.value)
            })
        ]
    });
}


/***/ }),

/***/ 4015:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_component_Layout_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6458);
/* harmony import */ var _styles_component_Layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_component_Layout_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(214);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_Nav__WEBPACK_IMPORTED_MODULE_3__]);
_component_Nav__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Layout(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "PlanIt PokerStar"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                src: "https://kit.fontawesome.com/f7632788f8.js",
                crossOrigin: "anonymous"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: (_styles_component_Layout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().main),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Nav__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    props.children
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3170:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_component_Modal_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2064);
/* harmony import */ var _styles_component_Modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_component_Modal_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Modal(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
            children: props.isOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: (_styles_component_Modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalOverlay),
                        onClick: props.toggle
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                        animate: {
                            y: "-100px",
                            opacity: 1
                        },
                        initial: {
                            opacity: 0
                        },
                        exit: {
                            y: "500px",
                            opacity: 0,
                            transitionDuration: "0.5s"
                        },
                        className: (_styles_component_Modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modal),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: props.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_component_Modal_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalContent),
                                children: props.children
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 214:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_component_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8849);
/* harmony import */ var _styles_component_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_component_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4563);
/* harmony import */ var _component_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3170);
/* harmony import */ var _component_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7581);
/* harmony import */ var _component_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4780);
/* harmony import */ var _hook_useModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1091);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faRightFromBracket__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3544);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faRightFromBracket__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faRightFromBracket__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _pages_api_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3432);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__, _component_Modal__WEBPACK_IMPORTED_MODULE_6__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__, _component_Modal__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function Nav() {
    const [loginForm, setLoginForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();
    // const connected = useConnected()
    const { isOpen , toggle  } = (0,_hook_useModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { isOpen2 , toggle2  } = (0,_hook_useModal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [completeName, setCompleteName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const user = {
        username: username,
        password: password,
        email: email,
        completeName: completeName
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: (_styles_component_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default().navContainer),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_component_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default().logoPlacement),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCrown,
                                className: (_styles_component_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default().crown)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "PlanIt PokerStar"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_component_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default().navLinks),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/",
                                children: "Accueil"
                            }),
                            session?.user ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/Rooms",
                                children: "Room"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                onClick: ()=>toggle(),
                                children: "Room"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_component_Nav_module_scss__WEBPACK_IMPORTED_MODULE_11___default().accounts),
                        children: !session?.user ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            onClick: ()=>{
                                toggle();
                            // @ts-ignore
                            },
                            href: "#",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faUser
                                }),
                                session?.user?.user.username
                            ]
                        }) : // @ts-ignore
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_solid_svg_icons_faRightFromBracket__WEBPACK_IMPORTED_MODULE_10__.faRightFromBracket
                                }),
                                session?.user?.user.username
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_Modal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                isOpen: isOpen,
                toggle: toggle,
                title: "Connexion",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        type: "text",
                        placeholder: "Nom d'utilisateur",
                        inputData: setUsername,
                        value: username,
                        label: "Nom d'utilisateur"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        type: "password",
                        placeholder: "Mot de passe",
                        inputData: setPassword,
                        value: password,
                        label: "Mot de passe"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        event: ()=>{
                            toggle();
                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)("credentials", {
                                "username": username,
                                "password": password
                            });
                        },
                        children: "Se connecter"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "Vous n'avez pas encore de compte ? ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                onClick: ()=>{
                                    toggle();
                                    toggle2();
                                },
                                children: "Cr\xe9er cotre compte"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_Modal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                isOpen: isOpen2,
                toggle: toggle2,
                title: "Cr\xe9ation de compte",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        type: "text",
                        placeholder: "Nom d'utilisateur",
                        inputData: setUsername,
                        value: username,
                        label: "Nom d'utilisateur"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        type: "email",
                        placeholder: "Addresse Email",
                        inputData: setEmail,
                        value: email,
                        label: "Email"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        type: "text",
                        placeholder: "Nom complet (Ex : Jhon Smith)",
                        inputData: setCompleteName,
                        value: completeName,
                        label: "Nom complet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        type: "password",
                        placeholder: "Mot de passe",
                        inputData: setPassword,
                        value: password,
                        label: "Mot de passe"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        event: ()=>{
                            toggle2();
                            (0,_pages_api_user__WEBPACK_IMPORTED_MODULE_12__/* .addUser */ .cn)(user);
                        },
                        children: "Cr\xe9er mon compte"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "Vous avez d\xe9j\xe0 un compte ? ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                onClick: ()=>{
                                    toggle2();
                                    toggle();
                                },
                                children: "Connect\xe9 vous"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useModal() {
    const [isOpen, setisOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isOpen2, setisOpen2] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isOpen3, setisOpen3] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const toggle = ()=>{
        setisOpen(!isOpen);
    };
    const toggle2 = ()=>{
        setisOpen2(!isOpen2);
    };
    const toggle3 = ()=>{
        setisOpen3(!isOpen3);
    };
    return {
        isOpen,
        toggle,
        isOpen2,
        toggle2,
        isOpen3,
        toggle3
    };
}


/***/ }),

/***/ 3432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cn": () => (/* binding */ addUser)
/* harmony export */ });
/* unused harmony exports default, deleteUser, connectUser */
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


/***/ }),

/***/ 85:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiUrl": () => (/* binding */ apiUrl),
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_pages_Index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7181);
/* harmony import */ var _styles_pages_Index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Index_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4015);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _component_IndexCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(472);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_Layout__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_2__, _component_IndexCard__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__]);
([_component_Layout__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_2__, _component_IndexCard__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const apiUrl = "http://127.0.0.1:8090/api";

function Home() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_pages_Index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().indexContainer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    initial: {
                        y: 100,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_pages_Index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().infoContainer),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "Rien de mieux qu'un poker entre collegues"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_pages_Index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().cardPlacement),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_IndexCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faDiceOne,
                                        children: "Cr\xe9er votre Room"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faChevronRight,
                                        size: "2xl",
                                        color: "#E3BC3EFF"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_IndexCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faDiceTwo,
                                        children: "Inviter des contributeurs"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faChevronRight,
                                        size: "2xl",
                                        color: "#E3BC3EFF"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_IndexCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faDiceThree,
                                        children: "R\xe9diger les User Stories"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faChevronRight,
                                        size: "2xl",
                                        color: "#E3BC3EFF"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_IndexCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faDiceFour,
                                        children: "C’est partie pour le vote"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faChevronRight,
                                        size: "2xl",
                                        color: "#E3BC3EFF"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_IndexCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faDice,
                                        link: true,
                                        children: "Commencer un poker"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;