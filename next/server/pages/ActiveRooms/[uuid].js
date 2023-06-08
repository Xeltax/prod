(() => {
var exports = {};
exports.id = 561;
exports.ids = [561,405];
exports.modules = {

/***/ 1984:
/***/ ((module) => {

// Exports
module.exports = {
	"activeRoomTitle": "activeRoom_activeRoomTitle__05kMJ",
	"activeRoomUsers": "activeRoom_activeRoomUsers__19oVx",
	"cardContainer": "activeRoom_cardContainer__gsp2J",
	"card": "activeRoom_card__HC7C_",
	"topValue": "activeRoom_topValue__jWJ0_",
	"bottomValue": "activeRoom_bottomValue__mzcIF",
	"usersContainer": "activeRoom_usersContainer__eGSbZ",
	"connectedUsers": "activeRoom_connectedUsers__ZdQfN",
	"inviteMate": "activeRoom_inviteMate__Hj4dT",
	"storiesContainer": "activeRoom_storiesContainer__Uv3e1",
	"storiesContainerHeader": "activeRoom_storiesContainerHeader__XAjpD",
	"titleContainer": "activeRoom_titleContainer__eAUEk",
	"buttonContainer": "activeRoom_buttonContainer__o5dDS",
	"storiesContainerBody": "activeRoom_storiesContainerBody__wgkvM"
};


/***/ }),

/***/ 2541:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActiveRoom),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_api_room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8906);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4015);
/* harmony import */ var _styles_pages_activeRoom_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1984);
/* harmony import */ var _styles_pages_activeRoom_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_activeRoom_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4563);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
/* harmony import */ var _pages_api_suite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6814);
/* harmony import */ var _component_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7581);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _component_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4780);
/* harmony import */ var _component_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3170);
/* harmony import */ var _hook_useModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1091);
/* harmony import */ var _pages_api_story__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7441);
/* harmony import */ var _pages_api_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3432);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_room__WEBPACK_IMPORTED_MODULE_1__, _component_Layout__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__, framer_motion__WEBPACK_IMPORTED_MODULE_6__, _component_Modal__WEBPACK_IMPORTED_MODULE_10__, _pages_api_story__WEBPACK_IMPORTED_MODULE_12__]);
([_pages_api_room__WEBPACK_IMPORTED_MODULE_1__, _component_Layout__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__, framer_motion__WEBPACK_IMPORTED_MODULE_6__, _component_Modal__WEBPACK_IMPORTED_MODULE_10__, _pages_api_story__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const getStaticProps = async (context)=>{
    const itemID = context.params?.uuid;
    const data = await (0,_pages_api_room__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)();
    // @ts-ignore
    const foundItem = data.find((item)=>itemID === item.uuid);
    // enterRoom(itemID)
    if (foundItem === undefined || foundItem === null || !foundItem) {
        return {
            notFound: true
        };
    } else {
        return {
            props: {
                room: foundItem
            }
        };
    }
};
const getStaticPaths = async ()=>{
    const data = await (0,_pages_api_room__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)();
    // @ts-ignore
    const pathsWithParams = data.map((item)=>({
            params: {
                uuid: item.uuid
            }
        }));
    return {
        paths: pathsWithParams,
        fallback: true
    };
};
function ActiveRoom(props) {
    const { isOpen , toggle  } = (0,_hook_useModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const { isOpen2 , toggle2  } = (0,_hook_useModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const { isOpen3 , toggle3  } = (0,_hook_useModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const [users, setUsers] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
    const [suite, setSuite] = react__WEBPACK_IMPORTED_MODULE_2___default().useState({});
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession)();
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [refresh, setRefresh] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [dataStories, setDataStories] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [activeStory, setActiveStory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const story = {
        name: name,
        description: description,
        idRoom: id
    };
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [completeName, setCompleteName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const user = {
        username: username,
        password: password,
        email: email,
        completeName: completeName
    };
    //
    // if (props.room === undefined || props.room === null || !props.room) {
    //     return
    // }
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setRefresh(false);
        (0,_pages_api_story__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .ZP)(props.room.id).then((res)=>{
            setDataStories(res);
        });
        setUsers(JSON.parse(props.room.connectedUsers));
        // @ts-ignore
        const dataSuite = (0,_pages_api_suite__WEBPACK_IMPORTED_MODULE_13__/* .getOneSuite */ .J)(props.room.suite).then((res)=>{
            setSuite(res);
        });
        if (status === "unauthenticated") {
            toggle();
        } else if (status === "authenticated") {
            // @ts-ignore
            (0,_pages_api_room__WEBPACK_IMPORTED_MODULE_1__/* .enterRoom */ .el)(props.room.uuid, session?.user.user.id);
        }
    }, [
        props.room,
        status,
        refresh
    ]);
    let suiteValues = [];
    if (suite.suitevalues) {
        // @ts-ignore
        suiteValues = JSON.parse(suite.suitevalues);
    }
    if (session?.user) {
        // @ts-ignore
        (0,_pages_api_room__WEBPACK_IMPORTED_MODULE_1__/* .enterRoom */ .el)(props.room.uuid, session?.user.id);
    } else if (!isOpen && !isOpen2 && !session?.user) {}
    if (props.room === undefined || props.room === null || !props.room) {
        return;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_styles_pages_activeRoom_module_scss__WEBPACK_IMPORTED_MODULE_14___default().activeRoomTitle),
                        children: props.room.name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_pages_activeRoom_module_scss__WEBPACK_IMPORTED_MODULE_14___default().activeRoomUsers),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_pages_activeRoom_module_scss__WEBPACK_IMPORTED_MODULE_14___default().cardContainer),
                                children: suiteValues && suiteValues.map((value, index)=>{
                                    return(// eslint-disable-next-line react/jsx-key
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
                                        whileHover: {
                                            scale: 1.05,
                                            transition: {
                                                duration: 0.2
                                            },
                                            translateY: -5
                                        },
                                        className: (_styles_pages_activeRoom_module_scss__WEBPACK_IMPORTED_MODULE_14___default().card),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_pages_activeRoom_module_scss__WEBPACK_IMPORTED_MODULE_14___default().topValue),
                                                children: value
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                children: value
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_pages_activeRoom_module_scss__WEBPACK_IMPORTED_MODULE_14___default().bottomValue),
                                                children: value
                                            })
                                        ]
                                    }));
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_pages_activeRoom_module_scss__WEBPACK_IMPORTED_MODULE_14___default().usersContainer),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Connect\xe9(e)s (",
                                            users.length,
                                            ")"
                                        ]
                                    }),
                                    users.map((user, index)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_pages_activeRoom_module_scss__WEBPACK_IMPORTED_MODULE_14___default().connectedUsers),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faUser
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: user.username
                                                })
                                            ]
                                        }, index);
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_pages_activeRoom_module_scss__WEBPACK_IMPORTED_MODULE_14___default().inviteMate),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Inviter un participant"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                disabled: true,
                                                type: "text",
                                                value: "http://127.0.0.1:3000/ActiveRooms/" + props.room.uuid
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_pages_activeRoom_module_scss__WEBPACK_IMPORTED_MODULE_14___default().storiesContainer),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_pages_activeRoom_module_scss__WEBPACK_IMPORTED_MODULE_14___default().storiesContainerHeader),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_pages_activeRoom_module_scss__WEBPACK_IMPORTED_MODULE_14___default().titleContainer),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                onClick: ()=>setActiveStory(1),
                                                children: "Active Stories"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                onClick: ()=>setActiveStory(2),
                                                children: "Completed Stories"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                onClick: ()=>[
                                                        setActiveStory(3)
                                                    ],
                                                children: [
                                                    "All Stories (",
                                                    dataStories.length,
                                                    ")"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_pages_activeRoom_module_scss__WEBPACK_IMPORTED_MODULE_14___default().buttonContainer),
                                        onClick: ()=>toggle3(),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPlus
                                            }),
                                            "New"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_pages_activeRoom_module_scss__WEBPACK_IMPORTED_MODULE_14___default().storiesContainerBody),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                style: activeStory > 1 ? {
                                                    display: "flex",
                                                    justifyContent: "space-between"
                                                } : {
                                                    display: "none"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        children: "Story"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        children: "Points"
                                                    })
                                                ]
                                            })
                                        }),
                                        dataStories.map((story, index)=>{
                                            if (story.points === null) {
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        style: activeStory == 1 ? {
                                                            display: "flex"
                                                        } : {
                                                            display: "none"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faBars
                                                                    }),
                                                                    " ",
                                                                    story.name
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                                    onClick: ()=>{
                                                                        (0,_pages_api_story__WEBPACK_IMPORTED_MODULE_12__/* .deleteStory */ .LA)(story);
                                                                        dataStories.splice(story.id);
                                                                        setRefresh(true);
                                                                    },
                                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTrashCan
                                                                })
                                                            })
                                                        ]
                                                    })
                                                });
                                            }
                                            if (story.points !== null) {
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        style: activeStory == 2 ? {
                                                            display: "flex"
                                                        } : {
                                                            display: "none"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                children: story.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                children: story.points
                                                            })
                                                        ]
                                                    })
                                                });
                                            }
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    style: activeStory == 3 ? {
                                                        display: "flex"
                                                    } : {
                                                        display: "none"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: story.name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            children: story.points == null ? "-" : story.points
                                                        })
                                                    ]
                                                })
                                            });
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_Modal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                isOpen: isOpen3,
                toggle: toggle3,
                title: "Cr\xe9er une User Story",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        label: "Nom de la story",
                        type: "text",
                        inputData: setName,
                        value: name,
                        placeholder: "Nom"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        label: "Description de la story",
                        type: "text",
                        inputData: setDescription,
                        value: description,
                        placeholder: "Description"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        event: ()=>{
                            (0,_pages_api_story__WEBPACK_IMPORTED_MODULE_12__/* .createStory */ .DZ)(story, session?.user);
                            toggle3();
                            setRefresh(true);
                        },
                        children: "Valider"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_Modal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        event: ()=>{
                            toggle();
                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.signIn)("credentials", {
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_Modal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        event: ()=>{
                            toggle2();
                            (0,_pages_api_user__WEBPACK_IMPORTED_MODULE_15__/* .addUser */ .cn)(user);
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

/***/ 7441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DZ": () => (/* binding */ createStory),
/* harmony export */   "LA": () => (/* binding */ deleteStory),
/* harmony export */   "ZP": () => (/* binding */ getStories)
/* harmony export */ });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages__WEBPACK_IMPORTED_MODULE_0__]);
_pages__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function getStories(idRoom) {
    return new Promise((resolve)=>{
        fetch(_pages__WEBPACK_IMPORTED_MODULE_0__.apiUrl + "/rooms/" + idRoom + "?include=storys").then((response)=>{
            resolve(response.json().then((data)=>data["storys"]));
        });
    });
}
async function createStory(story, user) {
    try {
        const response = await fetch(_pages__WEBPACK_IMPORTED_MODULE_0__.apiUrl + "/story/", {
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
        const response = await fetch(_pages__WEBPACK_IMPORTED_MODULE_0__.apiUrl + "/story/" + story.id, {
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

/***/ }),

/***/ 6814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ getOneSuite)
/* harmony export */ });
/* unused harmony export default */
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


/***/ }),

/***/ 3544:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons/faRightFromBracket");

/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4563:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,835,85,906], () => (__webpack_exec__(2541)));
module.exports = __webpack_exports__;

})();