(function (l) {
    function e(e) {
        for (var u, v, r = e[0], i = e[1], s = e[2], n = 0, c = []; n < r.length; n++) v = r[n], Object.prototype.hasOwnProperty.call(t, v) && t[v] && c.push(t[v][0]), t[v] = 0;
        for (u in i) Object.prototype.hasOwnProperty.call(i, u) && (l[u] = i[u]);
        o && o(e);
        while (c.length) c.shift()();
        return b.push.apply(b, s || []), a()
    }

    function a() {
        for (var l, e = 0; e < b.length; e++) {
            for (var a = b[e], u = !0, r = 1; r < a.length; r++) {
                var i = a[r];
                0 !== t[i] && (u = !1)
            }
            u && (b.splice(e--, 1), l = v(v.s = a[0]))
        }
        return l
    }

    var u = {}, t = {app: 0}, b = [];

    function v(e) {
        if (u[e]) return u[e].exports;
        var a = u[e] = {i: e, l: !1, exports: {}};
        return l[e].call(a.exports, a, a.exports, v), a.l = !0, a.exports
    }

    v.m = l, v.c = u, v.d = function (l, e, a) {
        v.o(l, e) || Object.defineProperty(l, e, {enumerable: !0, get: a})
    }, v.r = function (l) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(l, "__esModule", {value: !0})
    }, v.t = function (l, e) {
        if (1 & e && (l = v(l)), 8 & e) return l;
        if (4 & e && "object" === typeof l && l && l.__esModule) return l;
        var a = Object.create(null);
        if (v.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: l
        }), 2 & e && "string" != typeof l) for (var u in l) v.d(a, u, function (e) {
            return l[e]
        }.bind(null, u));
        return a
    }, v.n = function (l) {
        var e = l && l.__esModule ? function () {
            return l["default"]
        } : function () {
            return l
        };
        return v.d(e, "a", e), e
    }, v.o = function (l, e) {
        return Object.prototype.hasOwnProperty.call(l, e)
    }, v.p = "";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [], i = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var s = 0; s < r.length; s++) e(r[s]);
    var o = i;
    b.push([0, "chunk-vendors"]), a()
})({
    0: function (l, e, a) {
        l.exports = a("56d7")
    }, "0b24": function (l, e, a) {
    }, "0eb8": function (l, e, a) {
    }, 2753: function (l, e, a) {
        "use strict";
        var u = a("c2f2"), t = a.n(u);
        t.a
    }, "275c": function (l, e, a) {
    }, "2a45": function (l, e, a) {
    }, 3286: function (l, e, a) {
    }, 4678: function (l, e, a) {
        var u = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function t(l) {
            var e = b(l);
            return a(e)
        }

        function b(l) {
            if (!a.o(u, l)) {
                var e = new Error("Cannot find module '" + l + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return u[l]
        }

        t.keys = function () {
            return Object.keys(u)
        }, t.resolve = b, l.exports = t, t.id = "4678"
    }, "4d32": function (l, e, a) {
    }, "4ea6": function (l, e, a) {
        "use strict";
        var u = a("6759"), t = a.n(u);
        t.a
    }, "56d7": function (l, e, a) {
        "use strict";
        a.r(e);
        a("4de4"), a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var u = a("2b0e"), t = function () {
                var l = this, e = l.$createElement, a = l._self._c || e;
                return a("div", {attrs: {id: "app"}}, [a("router-view")], 1)
            }, b = [], v = {name: "app"}, r = v, i = a("2877"), s = Object(i["a"])(r, t, b, !1, null, null, null),
            o = s.exports, n = a("8c4f"), c = function () {
                var l = this, e = l.$createElement, a = l._self._c || e;
                return a("div", {staticClass: "login_container"}, [a("div", {staticClass: "login_box"}, [l._m(0), a("el-form", {
                    ref: "loginFormRef",
                    staticClass: "login_form",
                    attrs: {model: l.loginForm, rules: l.loginFormRules}
                }, [a("el-form-item", {attrs: {prop: "username"}}, [a("el-input", {
                    attrs: {"prefix-icon": "el-icon-user-solid"},
                    model: {
                        value: l.loginForm.username, callback: function (e) {
                            l.$set(l.loginForm, "username", e)
                        }, expression: "loginForm.username"
                    }
                })], 1), a("el-form-item", {attrs: {prop: "password"}}, [a("el-input", {
                    attrs: {
                        "prefix-icon": "el-icon-lock",
                        "show-password": ""
                    }, model: {
                        value: l.loginForm.password, callback: function (e) {
                            l.$set(l.loginForm, "password", e)
                        }, expression: "loginForm.password"
                    }
                })], 1), a("el-form-item", {staticClass: "btns"}, [a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: l.login}
                }, [l._v("登录")]), a("el-button", {
                    attrs: {type: "info"},
                    on: {click: l.resetLoginForm}
                }, [l._v("重置")])], 1)], 1)], 1)])
            }, d = [function () {
                var l = this, e = l.$createElement, u = l._self._c || e;
                return u("div", {staticClass: "avatar_box"}, [u("img", {attrs: {src: a("915e"), alt: ""}})])
            }], m = {
                name: "Login", data: function () {
                    return {
                        loginForm: {username: "admin", password: "123456"},
                        loginFormRules: {
                            username: [{required: !0, message: "请输入用户名", trigger: "blur"}],
                            password: [{required: !0, message: "请输入密码", trigger: "blur"}]
                        }
                    }
                }, methods: {
                    resetLoginForm: function () {
                        this.$refs.loginFormRef.resetFields()
                    }, login: function () {
                        var l = this;
                        this.$refs.loginFormRef.validate((function (e) {
                            e && axios.post("login", l.loginForm).then((function (e) {
                                var a = e.data;
                                200 === a.meta.status ? (l.$message.success(a.meta.msg), window.sessionStorage.setItem("token", a.data.token), l.$router.push("/home")) : l.$message.error(a.meta.msg)
                            })).catch((function () {
                                l.$message.error("请求失败")
                            }))
                        }))
                    }
                }
            }, h = m, g = (a("7391"), Object(i["a"])(h, c, d, !1, null, "3343fa30", null)), f = g.exports, p = function () {
                var l = this, e = l.$createElement, u = l._self._c || e;
                return u("el-container", {staticClass: "home-container"}, [u("el-header", [u("div", [u("img", {
                    attrs: {
                        src: a("cf05"),
                        alt: "",
                        height: "60"
                    }
                }), u("span", [l._v("电商后台管理系统")])]), u("el-button", {
                    attrs: {type: "info"},
                    on: {click: l.logout}
                }, [l._v("退出")])], 1), u("el-container", [u("el-aside", {attrs: {width: l.isCollapse ? "64px" : "200px"}}, [u("div", {
                    staticClass: "toggle-button",
                    on: {
                        click: function (e) {
                            l.isCollapse = !l.isCollapse
                        }
                    }
                }, [u("i", {class: l.isCollapse ? "el-icon-s-unfold" : "el-icon-s-fold"})]), u("el-menu", {
                    attrs: {
                        "background-color": "#333744",
                        "text-color": "#fff",
                        "active-text-color": "#409eff",
                        "default-openeds": l.defaultOpeneds,
                        "unique-opened": !1,
                        collapse: l.isCollapse,
                        "collapse-transition": !1,
                        router: !0,
                        "default-active": l.activePath
                    }
                }, l._l(l.menulist, (function (e) {
                    return u("el-submenu", {
                        key: e.id,
                        attrs: {index: e.id + ""}
                    }, [u("template", {slot: "title"}, [u("i", {class: l.iconsObj[e.id]}), u("span", [l._v(l._s(e.authName))])]), l._l(e.children, (function (e) {
                        return u("el-menu-item", {
                            key: e.id, attrs: {index: "/" + e.path}, on: {
                                click: function (a) {
                                    return l.saveNavState("/" + e.path)
                                }
                            }
                        }, [u("template", {slot: "title"}, [u("i", {staticClass: "el-icon-menu"}), u("span", [l._v(l._s(e.authName))])])], 2)
                    }))], 2)
                })), 1)], 1), u("el-main", [u("router-view")], 1)], 1)], 1)
            }, _ = [], y = (a("4160"), a("159b"), {
                name: "Home", data: function () {
                    return {
                        menulist: [],
                        iconsObj: {
                            125: "iconfont el-icon-user-solid",
                            103: "iconfont el-icon-s-grid",
                            101: "iconfont el-icon-s-management",
                            102: "iconfont el-icon-s-order",
                            145: "iconfont el-icon-s-data"
                        },
                        isCollapse: !1,
                        activePath: "",
                        defaultOpeneds: []
                    }
                }, created: function () {
                    this.getMenuList(), this.activePath = window.sessionStorage.getItem("activePath")
                }, methods: {
                    logout: function () {
                        window.sessionStorage.clear(), this.$router.push("/login")
                    }, getMenuList: function () {
                        var l = this;
                        axios.get("menus").then((function (e) {
                            var a = e.data;
                            200 === a.meta.status ? (a.data.forEach((function (e) {
                                l.defaultOpeneds.push("" + e.id)
                            })), l.menulist = a.data) : l.$message.error(a.meta.msg)
                        })).catch((function () {
                            l.$message.error("获取失败")
                        }))
                    }, saveNavState: function (l) {
                        this.activePath = l, window.sessionStorage.setItem("activePath", l)
                    }
                }
            }), w = y, F = (a("ba5c"), Object(i["a"])(w, p, _, !1, null, "2fef9fc8", null)), k = F.exports,
            $ = function () {
                var l = this, e = l.$createElement;
                l._self._c;
                return l._m(0)
            }, x = [function () {
                var l = this, e = l.$createElement, a = l._self._c || e;
                return a("div", [a("h3", [l._v("Welcome")])])
            }], j = {name: "Welcome"}, C = j, D = Object(i["a"])(C, $, x, !1, null, "c7f3c522", null), R = D.exports,
            I = function () {
                var l = this, e = l.$createElement, a = l._self._c || e;
                return a("div", [a("el-breadcrumb", {attrs: {"separator-class": "el-icon-arrow-right"}}, [a("el-breadcrumb-item", {attrs: {to: {path: "/home"}}}, [l._v("首页")]), a("el-breadcrumb-item", [l._v("用户管理")]), a("el-breadcrumb-item", [l._v("用户列表")])], 1), a("el-card", [a("el-row", {attrs: {gutter: 10}}, [a("el-col", {attrs: {span: 6}}, [a("el-input", {
                    attrs: {
                        placeholder: "请输入内容",
                        clearable: !0
                    }, on: {clear: l.getUserList}, model: {
                        value: l.queryInfo.query, callback: function (e) {
                            l.$set(l.queryInfo, "query", e)
                        }, expression: "queryInfo.query"
                    }
                }, [a("el-button", {
                    attrs: {slot: "append", icon: "el-icon-search"},
                    on: {click: l.getUserList},
                    slot: "append"
                })], 1)], 1), a("el-col", {attrs: {span: 6}}, [a("el-button", {
                    attrs: {type: "primary"},
                    on: {
                        click: function (e) {
                            l.addDialogVisible = !0
                        }
                    }
                }, [l._v("添加用户")])], 1)], 1), a("el-table", {
                    attrs: {
                        data: l.userList,
                        border: !0,
                        stripe: !0
                    }
                }, [a("el-table-column", {
                    attrs: {
                        label: "序号",
                        type: "index",
                        width: "50"
                    }
                }), a("el-table-column", {
                    attrs: {
                        label: "姓名",
                        prop: "username"
                    }
                }), a("el-table-column", {
                    attrs: {
                        label: "邮箱",
                        prop: "email"
                    }
                }), a("el-table-column", {
                    attrs: {
                        label: "电话",
                        prop: "mobile"
                    }
                }), a("el-table-column", {
                    attrs: {
                        label: "角色",
                        prop: "role_name"
                    }
                }), a("el-table-column", {
                    attrs: {label: "状态"}, scopedSlots: l._u([{
                        key: "default", fn: function (e) {
                            return [a("el-switch", {
                                on: {
                                    change: function (a) {
                                        return l.userStateChanged(e.row)
                                    }
                                }, model: {
                                    value: e.row.mg_state, callback: function (a) {
                                        l.$set(e.row, "mg_state", a)
                                    }, expression: "scope.row.mg_state"
                                }
                            })]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {label: "操作", width: "200"},
                    scopedSlots: l._u([{
                        key: "default", fn: function (e) {
                            return [a("el-button", {
                                attrs: {type: "primary", icon: "el-icon-edit", size: "mini"},
                                on: {
                                    click: function (a) {
                                        return l.showEditDialog(e.row.id)
                                    }
                                }
                            }), a("el-button", {
                                attrs: {type: "danger", icon: "el-icon-delete", size: "mini"},
                                on: {
                                    click: function (a) {
                                        return l.removeUserById(e.row.id)
                                    }
                                }
                            }), a("el-tooltip", {
                                attrs: {
                                    effect: "dark",
                                    content: "分配角色",
                                    placement: "top",
                                    enterable: !1
                                }
                            }, [a("el-button", {
                                attrs: {type: "warning", icon: "el-icon-setting", size: "mini"},
                                on: {
                                    click: function (a) {
                                        return l.showSetRoleDialog(e.row)
                                    }
                                }
                            })], 1)]
                        }
                    }])
                })], 1), a("el-pagination", {
                    attrs: {
                        "current-page": l.queryInfo.pagenum,
                        "page-sizes": [1, 2, 5, 10],
                        "page-size": l.queryInfo.pagesize,
                        total: l.total,
                        layout: "total, sizes, prev, pager, next, jumper",
                        background: ""
                    }, on: {"size-change": l.handleSizeChange, "current-change": l.handleCurrentChange}
                })], 1), a("el-dialog", {
                    attrs: {
                        title: "添加用户",
                        width: "50%",
                        visible: l.addDialogVisible,
                        "close-on-click-modal": !1
                    }, on: {
                        "update:visible": function (e) {
                            l.addDialogVisible = e
                        }, close: l.addDialogClosed
                    }
                }, [a("el-form", {
                    ref: "addFormRef",
                    attrs: {model: l.addForm, rules: l.addFormRules, "label-width": "70px"}
                }, [a("el-form-item", {
                    attrs: {
                        label: "用户名",
                        prop: "username"
                    }
                }, [a("el-input", {
                    model: {
                        value: l.addForm.username, callback: function (e) {
                            l.$set(l.addForm, "username", e)
                        }, expression: "addForm.username"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "密码",
                        prop: "password"
                    }
                }, [a("el-input", {
                    model: {
                        value: l.addForm.password, callback: function (e) {
                            l.$set(l.addForm, "password", e)
                        }, expression: "addForm.password"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "邮箱",
                        prop: "email"
                    }
                }, [a("el-input", {
                    model: {
                        value: l.addForm.email, callback: function (e) {
                            l.$set(l.addForm, "email", e)
                        }, expression: "addForm.email"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "手机号",
                        prop: "mobile"
                    }
                }, [a("el-input", {
                    model: {
                        value: l.addForm.mobile, callback: function (e) {
                            l.$set(l.addForm, "mobile", e)
                        }, expression: "addForm.mobile"
                    }
                })], 1)], 1), a("span", {
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    on: {
                        click: function (e) {
                            l.addDialogVisible = !1
                        }
                    }
                }, [l._v("取 消")]), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: l.addUser}
                }, [l._v("确 定")])], 1)], 1), a("el-dialog", {
                    attrs: {
                        title: "修改用户",
                        width: "50%",
                        visible: l.editDialogVisible,
                        "close-on-click-modal": !1
                    }, on: {
                        "update:visible": function (e) {
                            l.editDialogVisible = e
                        }, close: l.editDialogClosed
                    }
                }, [a("el-form", {
                    ref: "editFormRef",
                    attrs: {model: l.editForm, rules: l.editFormRules, "label-width": "70px"}
                }, [a("el-form-item", {attrs: {label: "用户名", prop: "username"}}, [a("el-input", {
                    attrs: {disabled: !0},
                    model: {
                        value: l.editForm.username, callback: function (e) {
                            l.$set(l.editForm, "username", e)
                        }, expression: "editForm.username"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "邮箱",
                        prop: "email"
                    }
                }, [a("el-input", {
                    model: {
                        value: l.editForm.email, callback: function (e) {
                            l.$set(l.editForm, "email", e)
                        }, expression: "editForm.email"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "手机号",
                        prop: "mobile"
                    }
                }, [a("el-input", {
                    model: {
                        value: l.editForm.mobile, callback: function (e) {
                            l.$set(l.editForm, "mobile", e)
                        }, expression: "editForm.mobile"
                    }
                })], 1)], 1), a("span", {
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    on: {
                        click: function (e) {
                            l.editDialogVisible = !1
                        }
                    }
                }, [l._v("取 消")]), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: l.editUser}
                }, [l._v("确 定")])], 1)], 1), a("el-dialog", {
                    attrs: {
                        title: "分配角色",
                        width: "50%",
                        visible: l.setRoleDialogVisible,
                        "close-on-click-modal": !1
                    }, on: {
                        "update:visible": function (e) {
                            l.setRoleDialogVisible = e
                        }, close: l.setRoleDialogClosed
                    }
                }, [a("div", [a("p", [l._v("当前的用户：" + l._s(l.userInfo.username))]), a("p", [l._v("当前的角色：" + l._s(l.userInfo.role_name))]), a("p", [l._v("分配新角色： "), a("el-select", {
                    attrs: {placeholder: "请选择"},
                    model: {
                        value: l.selectRoleId, callback: function (e) {
                            l.selectRoleId = e
                        }, expression: "selectRoleId"
                    }
                }, l._l(l.rolesList, (function (l) {
                    return a("el-option", {key: l.id, attrs: {label: l.roleName, value: l.id}})
                })), 1)], 1)]), a("span", {
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    on: {
                        click: function (e) {
                            l.setRoleDialogVisible = !1
                        }
                    }
                }, [l._v("取 消")]), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: l.saveRoleInfo}
                }, [l._v("确 定")])], 1)])], 1)
            }, L = [], V = (a("99af"), {
                name: "Users", data: function () {
                    var l = function (l, e, a) {
                        var u = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
                        if (u.test(e)) return a();
                        a(new Error("请输入合法的邮箱"))
                    }, e = function (l, e, a) {
                        var u = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
                        if (u.test(e)) return a();
                        a(new Error("请输入合法的手机号"))
                    };
                    return {
                        queryInfo: {query: "", pagenum: 1, pagesize: 5},
                        userList: [],
                        total: 0,
                        addDialogVisible: !1,
                        editDialogVisible: !1,
                        setRoleDialogVisible: !1,
                        addForm: {username: "", password: "", email: "", mobile: ""},
                        addFormRules: {
                            username: [{required: !0, message: "请输入用户名", trigger: "blur"}, {
                                min: 3,
                                max: 10,
                                message: "用户名长度在3~10个字符",
                                trigger: "blur"
                            }],
                            password: [{required: !0, message: "请输入密码", trigger: "blur"}, {
                                min: 6,
                                max: 15,
                                message: "密码长度在6~15个字符",
                                trigger: "blur"
                            }],
                            email: [{required: !0, message: "请输入邮箱", trigger: "blur"}, {validator: l, trigger: "blur"}],
                            mobile: [{required: !0, message: "请输入手机号", trigger: "blur"}, {validator: e, trigger: "blur"}]
                        },
                        editForm: {},
                        editFormRules: {
                            email: [{required: !0, message: "请输入邮箱", trigger: "blur"}, {
                                validator: l,
                                trigger: "blur"
                            }],
                            mobile: [{required: !0, message: "请输入手机号", trigger: "blur"}, {validator: e, trigger: "blur"}]
                        },
                        userInfo: {},
                        rolesList: [],
                        selectRoleId: ""
                    }
                }, created: function () {
                    this.getUserList()
                }, methods: {
                    getUserList: function () {
                        var l = this;
                        axios.get("users", {params: this.queryInfo}).then((function (e) {
                            var a = e.data;
                            200 === a.meta.status ? (l.userList = a.data.users, l.total = a.data.total) : l.$message.error(a.meta.msg)
                        })).catch((function () {
                            l.$message.error("获取失败")
                        }))
                    }, handleSizeChange: function (l) {
                        this.queryInfo.pagesize = l, this.getUserList()
                    }, handleCurrentChange: function (l) {
                        this.queryInfo.pagenum = l, this.getUserList()
                    }, userStateChanged: function (l) {
                        var e = this;
                        axios.put("users/".concat(l.id, "/state/").concat(l.mg_state)).then((function (a) {
                            var u = a.data;
                            200 === u.meta.status ? e.$message.success(u.meta.msg) : (l.mg_state = !l.mg_state, e.$message.error(u.meta.msg))
                        })).catch((function () {
                            e.$message.error("操作失败")
                        }))
                    }, addDialogClosed: function () {
                        this.$refs.addFormRef.resetFields()
                    }, addUser: function () {
                        var l = this;
                        this.$refs.addFormRef.validate((function (e) {
                            e && axios.post("users", l.addForm).then((function (e) {
                                var a = e.data;
                                201 === a.meta.status ? (l.addDialogVisible = !1, l.getUserList(), l.$message.success(a.meta.msg)) : l.$message.error(a.meta.msg)
                            })).catch((function () {
                                l.$message.error("操作失败")
                            }))
                        }))
                    }, showEditDialog: function (l) {
                        var e = this;
                        axios.get("users/".concat(l)).then((function (l) {
                            var a = l.data;
                            if (200 !== a.meta.status) return e.$message.error(a.meta.msg);
                            e.editForm = a.data
                        })).catch((function () {
                            return e.$message.error("请求失败")
                        })), this.editDialogVisible = !0
                    }, editDialogClosed: function () {
                        this.$refs.editFormRef.resetFields()
                    }, editUser: function () {
                        var l = this;
                        this.$refs.editFormRef.validate((function (e) {
                            e && axios.put("users/".concat(l.editForm.id), {
                                email: l.editForm.email,
                                mobile: l.editForm.mobile
                            }).then((function (e) {
                                var a = e.data;
                                200 === a.meta.status ? (l.editDialogVisible = !1, l.getUserList(), l.$message.success(a.meta.msg)) : l.$message.error(a.meta.msg)
                            })).catch((function () {
                                l.$message.error("操作失败")
                            }))
                        }))
                    }, removeUserById: function (l) {
                        var e = this;
                        this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning"
                        }).then((function () {
                            axios.delete("users/".concat(l)).then((function (l) {
                                var a = l.data;
                                200 === a.meta.status ? (e.$message.success(a.meta.msg), e.getUserList()) : e.$message.error(a.meta.msg)
                            })).catch((function () {
                                e.$message.error("操作失败")
                            }))
                        })).catch((function () {
                            e.$message.info("已取消删除")
                        }))
                    }, showSetRoleDialog: function (l) {
                        var e = this;
                        this.userInfo = l, axios.get("roles").then((function (l) {
                            var a = l.data;
                            200 === a.meta.status ? e.rolesList = a.data : e.$message.error(a.meta.msg)
                        })).catch((function () {
                            e.$message.error("请求失败")
                        })), this.setRoleDialogVisible = !0
                    }, setRoleDialogClosed: function () {
                        this.selectRoleId = "", this.userInfo = {}
                    }, saveRoleInfo: function () {
                        var l = this;
                        if (!this.selectRoleId) return this.$message.error("请选择要分配的角色");
                        axios.put("users/".concat(this.userInfo.id, "/role"), {rid: this.selectRoleId}).then((function (e) {
                            var a = e.data;
                            200 === a.meta.status ? (l.getUserList(), l.setRoleDialogVisible = !1, l.$message.success(a.meta.msg)) : l.$message.error(a.meta.msg)
                        })).catch((function () {
                            l.$message.error("操作失败")
                        }))
                    }
                }
            }), z = V, T = Object(i["a"])(z, I, L, !1, null, "1e80fe1a", null), q = T.exports, P = function () {
                var l = this, e = l.$createElement, a = l._self._c || e;
                return a("div", [a("el-breadcrumb", {attrs: {"separator-class": "el-icon-arrow-right"}}, [a("el-breadcrumb-item", {attrs: {to: {path: "/home"}}}, [l._v("首页")]), a("el-breadcrumb-item", [l._v("权限管理")]), a("el-breadcrumb-item", [l._v("权限列表")])], 1), a("el-card", [a("el-table", {
                    attrs: {
                        data: l.rightsList,
                        border: !0,
                        stripe: !0
                    }
                }, [a("el-table-column", {
                    attrs: {
                        label: "序号",
                        type: "index",
                        width: "50"
                    }
                }), a("el-table-column", {
                    attrs: {
                        label: "权限名称",
                        prop: "authName"
                    }
                }), a("el-table-column", {attrs: {label: "路径", prop: "path"}}), a("el-table-column", {
                    attrs: {
                        label: "权限等级",
                        prop: "level"
                    }, scopedSlots: l._u([{
                        key: "default", fn: function (e) {
                            return ["0" === e.row.level ? a("el-tag", [l._v("一级")]) : l._e(), "1" === e.row.level ? a("el-tag", {attrs: {type: "success"}}, [l._v("二级")]) : l._e(), "2" === e.row.level ? a("el-tag", {attrs: {type: "warning"}}, [l._v("三级")]) : l._e()]
                        }
                    }])
                })], 1)], 1)], 1)
            }, S = [], O = {
                name: "Rights", data: function () {
                    return {rightsList: []}
                }, created: function () {
                    this.getRightsList()
                }, methods: {
                    getRightsList: function () {
                        var l = this;
                        axios.get("rights/list").then((function (e) {
                            var a = e.data;
                            200 === a.meta.status ? l.rightsList = a.data : l.$message.error(a.meta.msg)
                        })).catch((function () {
                            l.$message.error("请求失败")
                        }))
                    }
                }
            }, E = O, N = Object(i["a"])(E, P, S, !1, null, "a5f861e8", null), K = N.exports, B = function () {
                var l = this, e = l.$createElement, a = l._self._c || e;
                return a("div", [a("el-breadcrumb", {attrs: {"separator-class": "el-icon-arrow-right"}}, [a("el-breadcrumb-item", {attrs: {to: {path: "/home"}}}, [l._v("首页")]), a("el-breadcrumb-item", [l._v("权限管理")]), a("el-breadcrumb-item", [l._v("角色列表")])], 1), a("el-card", [a("el-row", [a("el-col", [a("el-button", {
                    attrs: {type: "primary"},
                    on: {
                        click: function (e) {
                            l.addRoleDialogVisible = !0
                        }
                    }
                }, [l._v("添加角色")])], 1)], 1), a("el-table", {
                    attrs: {
                        data: l.roleList,
                        border: !0,
                        stripe: !0
                    }
                }, [a("el-table-column", {
                    attrs: {type: "expand", width: "50"},
                    scopedSlots: l._u([{
                        key: "default", fn: function (e) {
                            return l._l(e.row.children, (function (u, t) {
                                return a("el-row", {
                                    key: u.id,
                                    class: ["bdbottom", 0 === t ? "bdtop" : "", "vcenter"]
                                }, [a("el-col", {attrs: {span: 5}}, [a("el-tag", {
                                    attrs: {closable: !0},
                                    on: {
                                        close: function (a) {
                                            return l.removeRightById(e.row, u.id)
                                        }
                                    }
                                }, [l._v(l._s(u.authName))]), a("i", {staticClass: "el-icon-caret-right"})], 1), a("el-col", {attrs: {span: 19}}, l._l(u.children, (function (u, t) {
                                    return a("el-row", {
                                        key: u.id,
                                        class: [0 !== t ? "bdtop" : "", "vcenter"]
                                    }, [a("el-col", {attrs: {span: 6}}, [a("el-tag", {
                                        attrs: {
                                            type: "success",
                                            closable: !0
                                        }, on: {
                                            close: function (a) {
                                                return l.removeRightById(e.row, u.id)
                                            }
                                        }
                                    }, [l._v(l._s(u.authName))]), a("i", {staticClass: "el-icon-caret-right"})], 1), a("el-col", {attrs: {span: 18}}, l._l(u.children, (function (u) {
                                        return a("el-tag", {
                                            key: u.id,
                                            attrs: {type: "warning", closable: !0},
                                            on: {
                                                close: function (a) {
                                                    return l.removeRightById(e.row, u.id)
                                                }
                                            }
                                        }, [l._v(" " + l._s(u.authName) + " ")])
                                    })), 1)], 1)
                                })), 1)], 1)
                            }))
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {
                        label: "序号",
                        type: "index",
                        width: "50"
                    }
                }), a("el-table-column", {
                    attrs: {
                        label: "角色名称",
                        prop: "roleName"
                    }
                }), a("el-table-column", {
                    attrs: {
                        label: "角色描述",
                        prop: "roleDesc"
                    }
                }), a("el-table-column", {
                    attrs: {label: "操作", width: "300"},
                    scopedSlots: l._u([{
                        key: "default", fn: function (e) {
                            return [a("el-button", {
                                attrs: {size: "mini", type: "primary", icon: "el-icon-edit"},
                                on: {
                                    click: function (a) {
                                        return l.showEditDialog(e.row.id)
                                    }
                                }
                            }, [l._v("编辑")]), a("el-button", {
                                attrs: {size: "mini", type: "danger", icon: "el-icon-delete"},
                                on: {
                                    click: function (a) {
                                        return l.removeRoleById(e.row.id)
                                    }
                                }
                            }, [l._v("删除")]), a("el-button", {
                                attrs: {
                                    size: "mini",
                                    type: "warning",
                                    icon: "el-icon-setting"
                                }, on: {
                                    click: function (a) {
                                        return l.showSetRightDialog(e.row)
                                    }
                                }
                            }, [l._v("分配权限")])]
                        }
                    }])
                })], 1)], 1), a("el-dialog", {
                    attrs: {
                        title: "添加角色",
                        width: "50%",
                        visible: l.addRoleDialogVisible,
                        "close-on-click-modal": !1
                    }, on: {
                        "update:visible": function (e) {
                            l.addRoleDialogVisible = e
                        }, close: l.addRoleDialogClosed
                    }
                }, [a("el-form", {
                    ref: "addRoleFormRef",
                    attrs: {model: l.addRoleForm, rules: l.addRoleFormRules, "label-width": "80px"}
                }, [a("el-form-item", {
                    attrs: {
                        label: "角色名称",
                        prop: "roleName"
                    }
                }, [a("el-input", {
                    model: {
                        value: l.addRoleForm.roleName, callback: function (e) {
                            l.$set(l.addRoleForm, "roleName", e)
                        }, expression: "addRoleForm.roleName"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "角色描述",
                        prop: "roleDesc"
                    }
                }, [a("el-input", {
                    model: {
                        value: l.addRoleForm.roleDesc, callback: function (e) {
                            l.$set(l.addRoleForm, "roleDesc", e)
                        }, expression: "addRoleForm.roleDesc"
                    }
                })], 1)], 1), a("span", {
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    on: {
                        click: function (e) {
                            l.addRoleDialogVisible = !1
                        }
                    }
                }, [l._v("取 消")]), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: l.addRole}
                }, [l._v("确 定")])], 1)], 1), a("el-dialog", {
                    attrs: {
                        title: "修改角色",
                        width: "50%",
                        visible: l.editRoleDialogVisible,
                        "close-on-click-modal": !1
                    }, on: {
                        "update:visible": function (e) {
                            l.editRoleDialogVisible = e
                        }, close: l.editRoleDialogClosed
                    }
                }, [a("el-form", {
                    ref: "editRoleFormRef",
                    attrs: {model: l.editRoleForm, rules: l.editRoleFormRules, "label-width": "80px"}
                }, [a("el-form-item", {
                    attrs: {
                        label: "角色名称",
                        prop: "roleName"
                    }
                }, [a("el-input", {
                    model: {
                        value: l.editRoleForm.roleName, callback: function (e) {
                            l.$set(l.editRoleForm, "roleName", e)
                        }, expression: "editRoleForm.roleName"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "角色描述",
                        prop: "roleDesc"
                    }
                }, [a("el-input", {
                    model: {
                        value: l.editRoleForm.roleDesc, callback: function (e) {
                            l.$set(l.editRoleForm, "roleDesc", e)
                        }, expression: "editRoleForm.roleDesc"
                    }
                })], 1)], 1), a("span", {
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    on: {
                        click: function (e) {
                            l.editRoleDialogVisible = !1
                        }
                    }
                }, [l._v("取 消")]), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: l.editRole}
                }, [l._v("确 定")])], 1)], 1), a("el-dialog", {
                    attrs: {
                        title: "分配权限",
                        width: "30%",
                        visible: l.setRightDialogVisible,
                        "close-on-click-modal": !1
                    }, on: {
                        "update:visible": function (e) {
                            l.setRightDialogVisible = e
                        }, close: l.setRightsDialogClosed
                    }
                }, [a("el-tree", {
                    ref: "treeRef",
                    attrs: {
                        data: l.rightsList,
                        props: l.treeProps,
                        "show-checkbox": !0,
                        "default-expand-all": !0,
                        "node-key": "id",
                        "default-checked-keys": l.defaultKeys
                    }
                }), a("span", {attrs: {slot: "footer"}, slot: "footer"}, [a("el-button", {
                    on: {
                        click: function (e) {
                            l.setRightDialogVisible = !1
                        }
                    }
                }, [l._v("取 消")]), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: l.allotRights}
                }, [l._v("确 定")])], 1)], 1)], 1)
            }, U = [], A = (a("a15b"), a("2909")), M = {
                name: "Roles", data: function () {
                    return {
                        roleList: [],
                        setRightDialogVisible: !1,
                        rightsList: [],
                        treeProps: {label: "authName", children: "children"},
                        defaultKeys: [],
                        roleId: "",
                        addRoleDialogVisible: !1,
                        editRoleDialogVisible: !1,
                        addRoleForm: {roleName: "", roleDesc: ""},
                        addRoleFormRules: {
                            roleName: [{required: !0, message: "请输入角色名称", trigger: "blur"}],
                            roleDesc: [{required: !0, message: "请输入角色描述", trigger: "blur"}]
                        },
                        editRoleForm: {roleName: "", roleDesc: ""},
                        editRoleFormRules: {
                            roleName: [{required: !0, message: "请输入角色名称", trigger: "blur"}],
                            roleDesc: [{required: !0, message: "请输入角色描述", trigger: "blur"}]
                        }
                    }
                }, created: function () {
                    this.getRolesList()
                }, methods: {
                    getRolesList: function () {
                        var l = this;
                        axios.get("roles").then((function (e) {
                            var a = e.data;
                            200 === a.meta.status ? l.roleList = a.data : l.$message.error(a.meta.msg)
                        })).catch((function () {
                            l.$message.error("请求失败")
                        }))
                    }, removeRightById: function (l, e) {
                        var a = this;
                        this.$confirm("此操作将永久删除该权限, 是否继续?", "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning"
                        }).then((function () {
                            axios.delete("roles/".concat(l.id, "/rights/").concat(e)).then((function (e) {
                                var u = e.data;
                                200 === u.meta.status ? (l.children = u.data, a.$message.success(u.meta.msg)) : a.$message.error(u.meta.msg)
                            })).catch((function () {
                                a.$message.error("操作失败")
                            }))
                        })).catch((function () {
                            a.$message.info("已取消删除")
                        }))
                    }, showSetRightDialog: function (l) {
                        var e = this;
                        this.roleId = l.id, axios.get("rights/tree").then((function (a) {
                            var u = a.data;
                            200 === u.meta.status ? (e.rightsList = u.data, e.getLeafKeys(l, e.defaultKeys), e.setRightDialogVisible = !0) : e.$message.error(u.meta.msg)
                        })).catch((function () {
                            e.$message.error("请求失败")
                        }))
                    }, getLeafKeys: function (l, e) {
                        var a = this;
                        if (!l.children) return e.push(l.id);
                        l.children.forEach((function (l) {
                            return a.getLeafKeys(l, e)
                        }))
                    }, setRightsDialogClosed: function () {
                        this.defaultKeys = []
                    }, allotRights: function () {
                        var l = this,
                            e = [].concat(Object(A["a"])(this.$refs.treeRef.getCheckedKeys()), Object(A["a"])(this.$refs.treeRef.getHalfCheckedKeys())),
                            a = e.join(",");
                        axios.post("roles/".concat(this.roleId, "/rights"), {rids: a}).then((function (e) {
                            var a = e.data;
                            200 === a.meta.status ? (l.getRolesList(), l.setRightDialogVisible = !1, l.$message.success(a.meta.msg)) : l.$message.error(a.meta.msg)
                        })).catch((function () {
                            l.$message.error("操作失败")
                        }))
                    }, addRoleDialogClosed: function () {
                        this.$refs.addRoleFormRef.resetFields()
                    }, addRole: function () {
                        var l = this;
                        this.$refs.addRoleFormRef.validate((function (e) {
                            e && axios.post("roles", l.addRoleForm).then((function (e) {
                                var a = e.data;
                                201 === a.meta.status ? (l.addRoleDialogVisible = !1, l.getRolesList(), l.$message.success(a.meta.msg)) : l.$message.error(a.meta.msg)
                            })).catch((function () {
                                l.$message.error("操作失败")
                            }))
                        }))
                    }, showEditDialog: function (l) {
                        var e = this;
                        axios.get("roles/".concat(l)).then((function (l) {
                            var a = l.data;
                            if (200 !== a.meta.status) return e.$message.error(a.meta.msg);
                            e.editRoleForm = a.data
                        })).catch((function () {
                            return e.$message.error("请求失败")
                        })), this.editRoleDialogVisible = !0
                    }, editRoleDialogClosed: function () {
                        this.$refs.editRoleFormRef.resetFields()
                    }, editRole: function () {
                        var l = this;
                        this.$refs.editRoleFormRef.validate((function (e) {
                            e && axios.put("roles/".concat(l.editRoleForm.roleId), l.editRoleForm).then((function (e) {
                                var a = e.data;
                                200 === a.meta.status ? (l.editRoleDialogVisible = !1, l.getRolesList(), l.$message.success(a.meta.msg)) : l.$message.error(a.meta.msg)
                            })).catch((function () {
                                l.$message.error("操作失败")
                            }))
                        }))
                    }, removeRoleById: function (l) {
                        var e = this;
                        this.$confirm("此操作将永久删除该角色, 是否继续?", "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning"
                        }).then((function () {
                            axios.delete("roles/".concat(l)).then((function (l) {
                                var a = l.data;
                                200 === a.meta.status ? (e.$message.success(a.meta.msg), e.getRolesList()) : e.$message.error(a.meta.msg)
                            })).catch((function () {
                                e.$message.error("操作失败")
                            }))
                        })).catch((function () {
                            e.$message.info("已取消删除")
                        }))
                    }
                }
            }, G = M, H = (a("c486"), Object(i["a"])(G, B, U, !1, null, "57ce73e8", null)), Y = H.exports, Z = function () {
                var l = this, e = l.$createElement, a = l._self._c || e;
                return a("div", [a("el-breadcrumb", {attrs: {"separator-class": "el-icon-arrow-right"}}, [a("el-breadcrumb-item", {attrs: {to: {path: "/home"}}}, [l._v("首页")]), a("el-breadcrumb-item", [l._v("商品管理")]), a("el-breadcrumb-item", [l._v("商品分类")])], 1), a("el-card", [a("el-row", [a("el-col", [a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: l.showAddCateDialog}
                }, [l._v("添加分类")])], 1)], 1), a("el-table", {
                    attrs: {
                        data: l.cateList,
                        "row-key": "cat_id",
                        "tree-props": {children: "children"},
                        border: !0,
                        stripe: !0
                    }
                }, [a("el-table-column", {
                    attrs: {
                        label: "序号",
                        type: "index",
                        width: "50"
                    }
                }), a("el-table-column", {
                    attrs: {
                        label: "分类名称",
                        prop: "cat_name"
                    }
                }), a("el-table-column", {
                    attrs: {label: "是否有效"}, scopedSlots: l._u([{
                        key: "default", fn: function (l) {
                            return [!1 === l.row.cat_deleted ? a("i", {
                                staticClass: "el-icon-success",
                                staticStyle: {color: "lightgreen"}
                            }) : a("i", {staticClass: "el-icon-error", staticStyle: {color: "red"}})]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {label: "排序"}, scopedSlots: l._u([{
                        key: "default", fn: function (e) {
                            return [0 === e.row.cat_level ? a("el-tag", {attrs: {size: "mini"}}, [l._v("一级")]) : 1 === e.row.cat_level ? a("el-tag", {
                                attrs: {
                                    size: "mini",
                                    type: "success"
                                }
                            }, [l._v("二级")]) : a("el-tag", {attrs: {size: "mini", type: "warning"}}, [l._v("三级")])]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {label: "操作"}, scopedSlots: l._u([{
                        key: "default", fn: function (e) {
                            return [a("el-button", {
                                attrs: {size: "mini", type: "primary", icon: "el-icon-edit"},
                                on: {
                                    click: function (a) {
                                        return l.showEditDialog(e.row)
                                    }
                                }
                            }, [l._v("编辑")]), a("el-popconfirm", {
                                attrs: {
                                    title: "确定删除吗？",
                                    icon: "el-icon-delete",
                                    iconColor: "red"
                                }, on: {
                                    onConfirm: function (a) {
                                        return l.removeCateById(e.row.cat_id)
                                    }
                                }
                            }, [a("el-button", {
                                attrs: {
                                    slot: "reference",
                                    size: "mini",
                                    type: "danger",
                                    icon: "el-icon-delete"
                                }, slot: "reference"
                            }, [l._v("删除")])], 1)]
                        }
                    }])
                })], 1), a("el-pagination", {
                    attrs: {
                        "current-page": l.queryInfo.pagenum,
                        "page-sizes": [1, 2, 5, 10],
                        "page-size": l.queryInfo.pagesize,
                        total: l.total,
                        layout: "total, sizes, prev, pager, next, jumper",
                        background: ""
                    }, on: {"size-change": l.handleSizeChange, "current-change": l.handleCurrentChange}
                })], 1), a("el-dialog", {
                    attrs: {
                        title: "添加分类",
                        width: "50%",
                        visible: l.addCateDialogVisible,
                        "close-on-click-modal": !1
                    }, on: {
                        "update:visible": function (e) {
                            l.addCateDialogVisible = e
                        }, close: l.addCateDialogClosed
                    }
                }, [a("el-form", {
                    ref: "addCateFormRef",
                    attrs: {model: l.addCateForm, rules: l.addCateFormRules, "label-width": "80px"}
                }, [a("el-form-item", {
                    attrs: {
                        label: "分类名称",
                        prop: "cat_name"
                    }
                }, [a("el-input", {
                    model: {
                        value: l.addCateForm.cat_name, callback: function (e) {
                            l.$set(l.addCateForm, "cat_name", e)
                        }, expression: "addCateForm.cat_name"
                    }
                })], 1), a("el-form-item", {attrs: {label: "父级分类"}}, [a("el-cascader", {
                    attrs: {
                        options: l.parentCateList,
                        props: l.cascaderProps,
                        clearable: !0
                    }, on: {change: l.parentCateChange}, model: {
                        value: l.selectedKeys, callback: function (e) {
                            l.selectedKeys = e
                        }, expression: "selectedKeys"
                    }
                })], 1)], 1), a("span", {
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    on: {
                        click: function (e) {
                            l.addCateDialogVisible = !1
                        }
                    }
                }, [l._v("取 消")]), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: l.addCate}
                }, [l._v("确 定")])], 1)], 1), a("el-dialog", {
                    attrs: {
                        title: "编辑分类",
                        width: "50%",
                        visible: l.editCateDialogVisible,
                        "close-on-click-modal": !1
                    }, on: {
                        "update:visible": function (e) {
                            l.editCateDialogVisible = e
                        }, close: l.editCateDialogClosed
                    }
                }, [a("el-form", {
                    ref: "editCateFormRef",
                    attrs: {model: l.editCateForm, rules: l.editCateFormRules, "label-width": "80px"}
                }, [a("el-form-item", {
                    attrs: {
                        label: "分类名称",
                        prop: "cat_name"
                    }
                }, [a("el-input", {
                    model: {
                        value: l.editCateForm.cat_name, callback: function (e) {
                            l.$set(l.editCateForm, "cat_name", e)
                        }, expression: "editCateForm.cat_name"
                    }
                })], 1)], 1), a("span", {
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    on: {
                        click: function (e) {
                            l.editCateDialogVisible = !1
                        }
                    }
                }, [l._v("取 消")]), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: l.editCate}
                }, [l._v("确 定")])], 1)], 1)], 1)
            }, J = [], W = {
                name: "Cate", data: function () {
                    return {
                        addCateDialogVisible: !1,
                        addCateForm: {cat_name: "", cat_pid: 0, cat_level: 0},
                        addCateFormRules: {cat_name: [{required: !0, message: "请输入分类名称", trigger: "blur"}]},
                        parentCateList: [],
                        cascaderProps: {
                            expandTrigger: "hover",
                            checkStrictly: !0,
                            value: "cat_id",
                            label: "cat_name",
                            children: "children"
                        },
                        selectedKeys: [],
                        editCateDialogVisible: !1,
                        editCateForm: {cat_id: 0, cat_name: ""},
                        editCateFormRules: {cat_name: [{required: !0, message: "请输入分类名称", trigger: "blur"}]},
                        queryInfo: {type: 3, pagenum: 1, pagesize: 5},
                        cateList: [],
                        total: 0,
                        columns: [{label: "分类名称", prop: "cat_name"}, {
                            label: "是否有效",
                            type: "template",
                            template: "isok"
                        }, {label: "排序", type: "template", template: "order"}, {
                            label: "操作",
                            type: "template",
                            template: "opt"
                        }]
                    }
                }, created: function () {
                    this.getCateList()
                }, methods: {
                    getCateList: function () {
                        var l = this;
                        axios.get("categories", {params: this.queryInfo}).then((function (e) {
                            var a = e.data;
                            200 === a.meta.status ? (l.cateList = a.data.result, l.total = a.data.total) : l.$message.error(a.meta.msg)
                        })).catch((function () {
                            l.$message.error("请求失败")
                        }))
                    }, handleSizeChange: function (l) {
                        this.queryInfo.pagesize = l, this.getCateList()
                    }, handleCurrentChange: function (l) {
                        this.queryInfo.pagenum = l, this.getCateList()
                    }, showAddCateDialog: function () {
                        this.getParentCateList(), this.addCateDialogVisible = !0
                    }, getParentCateList: function () {
                        var l = this;
                        axios.get("categories", {params: {type: 2}}).then((function (e) {
                            var a = e.data;
                            200 === a.meta.status ? l.parentCateList = a.data : l.$message.error(a.meta.msg)
                        })).catch((function () {
                            l.$message.error("请求失败")
                        }))
                    }, parentCateChange: function () {
                        this.selectedKeys.length > 0 ? (this.addCateForm.cat_pid = this.selectedKeys[this.selectedKeys.length - 1], this.addCateForm.cat_level = this.selectedKeys.length) : (this.addCateForm.cat_pid = 0, this.addCateForm.cat_level = 0)
                    }, addCateDialogClosed: function () {
                        this.$refs.addCateFormRef.resetFields(), this.selectedKeys = [], this.addCateForm.cat_pid = 0, this.addCateForm.cat_level = 0
                    }, addCate: function () {
                        var l = this;
                        this.$refs.addCateFormRef.validate((function (e) {
                            e && axios.post("categories", l.addCateForm).then((function (e) {
                                var a = e.data;
                                201 === a.meta.status ? (l.$message.success(a.meta.msg), l.getCateList(), l.addCateDialogVisible = !1) : l.$message.error(a.meta.msg)
                            })).catch((function () {
                                l.$message.error("操作失败")
                            }))
                        }))
                    }, showEditDialog: function (l) {
                        this.editCateForm.cat_id = l.cat_id, this.editCateForm.cat_name = l.cat_name, this.editCateDialogVisible = !0
                    }, editCateDialogClosed: function () {
                        this.$refs.editCateFormRef.resetFields(), this.editCateForm.cat_id = 0, this.editCateForm.cat_name = ""
                    }, editCate: function () {
                        var l = this;
                        this.$refs.editCateFormRef.validate((function (e) {
                            e && axios.put("categories/".concat(l.editCateForm.cat_id), {cat_name: l.editCateForm.cat_name}).then((function (e) {
                                var a = e.data;
                                200 === a.meta.status ? (l.$message.success(a.meta.msg), l.getCateList(), l.editCateDialogVisible = !1) : l.$message.error(a.meta.msg)
                            })).catch((function () {
                                l.$message.error("操作失败")
                            }))
                        }))
                    }, removeCateById: function (l) {
                        var e = this;
                        axios.delete("categories/".concat(l)).then((function (l) {
                            var a = l.data;
                            200 === a.meta.status ? (e.$message.success(a.meta.msg), e.getCateList()) : e.$message.error(a.meta.msg)
                        })).catch((function () {
                            e.$message.error("操作失败")
                        }))
                    }
                }
            }, Q = W, X = (a("e6674"), Object(i["a"])(Q, Z, J, !1, null, "0bfaa80f", null)), ll = X.exports,
            el = function () {
                var l = this, e = l.$createElement, a = l._self._c || e;
                return a("div", [a("el-breadcrumb", {attrs: {"separator-class": "el-icon-arrow-right"}}, [a("el-breadcrumb-item", {attrs: {to: {path: "/home"}}}, [l._v("首页")]), a("el-breadcrumb-item", [l._v("商品管理")]), a("el-breadcrumb-item", [l._v("分类参数")])], 1), a("el-card", [a("el-alert", {
                    attrs: {
                        title: "注意：只允许为第三级分类设置相关参数！",
                        type: "warning",
                        closable: !1,
                        "show-icon": ""
                    }
                }), a("el-row", {staticClass: "cat_opt"}, [a("el-col", [a("span", [l._v("选择商品分类：")]), a("el-cascader", {
                    staticStyle: {width: "300px"},
                    attrs: {options: l.cateList, props: l.cascaderProps},
                    on: {change: l.getParamsData},
                    model: {
                        value: l.selectedKeys, callback: function (e) {
                            l.selectedKeys = e
                        }, expression: "selectedKeys"
                    }
                })], 1)], 1), a("el-tabs", {
                    on: {"tab-click": l.getParamsData},
                    model: {
                        value: l.activeName, callback: function (e) {
                            l.activeName = e
                        }, expression: "activeName"
                    }
                }, [a("el-tab-pane", {attrs: {label: "动态参数", name: "many"}}, [a("el-button", {
                    attrs: {
                        type: "primary",
                        disabled: l.isBtnDisabled
                    }, on: {
                        click: function (e) {
                            l.addDialogVisible = !0
                        }
                    }
                }, [l._v("添加参数")]), a("el-table", {
                    attrs: {
                        data: l.manyTableData,
                        border: "",
                        stripe: ""
                    }
                }, [a("el-table-column", {
                    attrs: {type: "expand"},
                    scopedSlots: l._u([{
                        key: "default", fn: function (e) {
                            return [l._l(e.row.attr_vals, (function (u, t) {
                                return a("el-tag", {
                                    key: t, attrs: {closable: ""}, on: {
                                        close: function (a) {
                                            return l.handleTagClose(e.row, t)
                                        }
                                    }
                                }, [l._v(l._s(u))])
                            })), e.row.inputTagVisible ? a("el-input", {
                                ref: "saveTagInput",
                                staticClass: "input-new-tag",
                                attrs: {size: "small"},
                                on: {
                                    blur: function (a) {
                                        return l.handleInputTagConfirm(e.row)
                                    }
                                },
                                nativeOn: {
                                    keyup: function (a) {
                                        return !a.type.indexOf("key") && l._k(a.keyCode, "enter", 13, a.key, "Enter") ? null : l.handleInputTagConfirm(e.row)
                                    }
                                },
                                model: {
                                    value: e.row.inputTagValue, callback: function (a) {
                                        l.$set(e.row, "inputTagValue", a)
                                    }, expression: "scope.row.inputTagValue"
                                }
                            }) : a("el-button", {
                                staticClass: "button-new-tag",
                                attrs: {size: "small"},
                                on: {
                                    click: function (a) {
                                        return l.showTagInput(e.row)
                                    }
                                }
                            }, [l._v("+ New Tag")])]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {
                        label: "序号",
                        type: "index",
                        width: "50"
                    }
                }), a("el-table-column", {
                    attrs: {
                        label: "参数名称",
                        prop: "attr_name"
                    }
                }), a("el-table-column", {
                    attrs: {label: "操作"}, scopedSlots: l._u([{
                        key: "default", fn: function (e) {
                            return [a("el-button", {
                                attrs: {size: "mini", type: "primary", icon: "el-icon-edit"},
                                on: {
                                    click: function (a) {
                                        return l.showEditDialog(e.row)
                                    }
                                }
                            }, [l._v("编辑")]), a("el-popconfirm", {
                                attrs: {
                                    title: "确定删除吗？",
                                    icon: "el-icon-delete",
                                    iconColor: "red"
                                }, on: {
                                    onConfirm: function (a) {
                                        return l.removeParamsById(e.row.attr_id)
                                    }
                                }
                            }, [a("el-button", {
                                attrs: {
                                    slot: "reference",
                                    size: "mini",
                                    type: "danger",
                                    icon: "el-icon-delete"
                                }, slot: "reference"
                            }, [l._v("删除")])], 1)]
                        }
                    }])
                })], 1)], 1), a("el-tab-pane", {
                    attrs: {
                        label: "静态属性",
                        name: "only"
                    }
                }, [a("el-button", {
                    attrs: {type: "primary", disabled: l.isBtnDisabled}, on: {
                        click: function (e) {
                            l.addDialogVisible = !0
                        }
                    }
                }, [l._v("添加属性")]), a("el-table", {
                    attrs: {
                        data: l.onlyTableData,
                        border: "",
                        stripe: ""
                    }
                }, [a("el-table-column", {
                    attrs: {type: "expand"},
                    scopedSlots: l._u([{
                        key: "default", fn: function (e) {
                            return [l._l(e.row.attr_vals, (function (u, t) {
                                return a("el-tag", {
                                    key: t, attrs: {closable: ""}, on: {
                                        close: function (a) {
                                            return l.handleTagClose(e.row, t)
                                        }
                                    }
                                }, [l._v(l._s(u))])
                            })), e.row.inputTagVisible ? a("el-input", {
                                ref: "saveTagInput",
                                staticClass: "input-new-tag",
                                attrs: {size: "small"},
                                on: {
                                    blur: function (a) {
                                        return l.handleInputTagConfirm(e.row)
                                    }
                                },
                                nativeOn: {
                                    keyup: function (a) {
                                        return !a.type.indexOf("key") && l._k(a.keyCode, "enter", 13, a.key, "Enter") ? null : l.handleInputTagConfirm(e.row)
                                    }
                                },
                                model: {
                                    value: e.row.inputTagValue, callback: function (a) {
                                        l.$set(e.row, "inputTagValue", a)
                                    }, expression: "scope.row.inputTagValue"
                                }
                            }) : a("el-button", {
                                staticClass: "button-new-tag",
                                attrs: {size: "small"},
                                on: {
                                    click: function (a) {
                                        return l.showTagInput(e.row)
                                    }
                                }
                            }, [l._v("+ New Tag")])]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {
                        label: "序号",
                        type: "index",
                        width: "50"
                    }
                }), a("el-table-column", {
                    attrs: {
                        label: "属性名称",
                        prop: "attr_name"
                    }
                }), a("el-table-column", {
                    attrs: {label: "操作"}, scopedSlots: l._u([{
                        key: "default", fn: function (e) {
                            return [a("el-button", {
                                attrs: {size: "mini", type: "primary", icon: "el-icon-edit"},
                                on: {
                                    click: function (a) {
                                        return l.showEditDialog(e.row)
                                    }
                                }
                            }, [l._v("编辑")]), a("el-popconfirm", {
                                attrs: {
                                    title: "确定删除吗？",
                                    icon: "el-icon-delete",
                                    iconColor: "red"
                                }, on: {
                                    onConfirm: function (a) {
                                        return l.removeParamsById(e.row.attr_id)
                                    }
                                }
                            }, [a("el-button", {
                                attrs: {
                                    slot: "reference",
                                    size: "mini",
                                    type: "danger",
                                    icon: "el-icon-delete"
                                }, slot: "reference"
                            }, [l._v("删除")])], 1)]
                        }
                    }])
                })], 1)], 1)], 1)], 1), a("el-dialog", {
                    attrs: {
                        title: "添加" + l.titleText,
                        width: "50%",
                        visible: l.addDialogVisible,
                        "close-on-click-modal": !1
                    }, on: {
                        "update:visible": function (e) {
                            l.addDialogVisible = e
                        }, close: l.addDialogClosed
                    }
                }, [a("el-form", {
                    ref: "addFormRef",
                    attrs: {model: l.addForm, rules: l.addFormRules, "label-width": "80px"}
                }, [a("el-form-item", {
                    attrs: {
                        label: l.titleText,
                        prop: "attr_name"
                    }
                }, [a("el-input", {
                    model: {
                        value: l.addForm.attr_name, callback: function (e) {
                            l.$set(l.addForm, "attr_name", e)
                        }, expression: "addForm.attr_name"
                    }
                })], 1)], 1), a("span", {
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    on: {
                        click: function (e) {
                            l.addDialogVisible = !1
                        }
                    }
                }, [l._v("取 消")]), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: l.addParams}
                }, [l._v("确 定")])], 1)], 1), a("el-dialog", {
                    attrs: {
                        title: "修改" + l.titleText,
                        width: "50%",
                        visible: l.editDialogVisible,
                        "close-on-click-modal": !1
                    }, on: {
                        "update:visible": function (e) {
                            l.editDialogVisible = e
                        }, close: l.editDialogClosed
                    }
                }, [a("el-form", {
                    ref: "editFormRef",
                    attrs: {model: l.editForm, rules: l.editFormRules, "label-width": "80px"}
                }, [a("el-form-item", {
                    attrs: {
                        label: l.titleText,
                        prop: "attr_name"
                    }
                }, [a("el-input", {
                    model: {
                        value: l.editForm.attr_name, callback: function (e) {
                            l.$set(l.editForm, "attr_name", e)
                        }, expression: "editForm.attr_name"
                    }
                })], 1)], 1), a("span", {
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    on: {
                        click: function (e) {
                            l.editDialogVisible = !1
                        }
                    }
                }, [l._v("取 消")]), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: l.editParams}
                }, [l._v("确 定")])], 1)], 1)], 1)
            }, al = [], ul = (a("a434"), a("ac1f"), a("1276"), a("498a"), a("5530")), tl = {
                name: "Params", data: function () {
                    return {
                        cateList: [],
                        cascaderProps: {expandTrigger: "hover", value: "cat_id", label: "cat_name", children: "children"},
                        selectedKeys: [],
                        activeName: "many",
                        manyTableData: [],
                        onlyTableData: [],
                        addDialogVisible: !1,
                        addForm: {attr_name: ""},
                        addFormRules: {attr_name: [{required: !0, message: "请输入参数名称", trigger: "blur"}]},
                        editDialogVisible: !1,
                        editForm: {},
                        editFormRules: {attr_name: [{required: !0, message: "请输入参数名称", trigger: "blur"}]}
                    }
                }, created: function () {
                    this.getCateList()
                }, methods: {
                    getCateList: function () {
                        var l = this;
                        axios.get("categories").then((function (e) {
                            var a = e.data;
                            200 === a.meta.status ? l.cateList = a.data : l.$message.error(a.meta.msg)
                        })).catch((function () {
                            l.$message.error("请求失败")
                        }))
                    }, getParamsData: function () {
                        var l = this;
                        3 === this.selectedKeys.length ? axios.get("categories/".concat(this.cateId, "/attributes"), {params: {sel: this.activeName}}).then((function (e) {
                            var a = e.data;
                            a.data.forEach((function (l) {
                                l.attr_vals = l.attr_vals ? l.attr_vals.split(",") : [], l.inputTagVisible = !1, l.inputTagValue = ""
                            })), 200 === a.meta.status ? "many" === l.activeName ? l.manyTableData = a.data : "only" === l.activeName && (l.onlyTableData = a.data) : l.$message.error(a.meta.msg)
                        })).catch((function () {
                            l.$message.error("请求失败")
                        })) : (this.selectedKeys = [], this.manyTableData = [], this.onlyTableData = [])
                    }, addDialogClosed: function () {
                        this.$refs.addFormRef.resetFields()
                    }, addParams: function () {
                        var l = this;
                        this.$refs.addFormRef.validate((function (e) {
                            e && axios.post("categories/".concat(l.cateId, "/attributes"), {
                                attr_name: l.addForm.attr_name,
                                attr_sel: l.activeName
                            }).then((function (e) {
                                var a = e.data;
                                201 === a.meta.status ? (l.$message.success(a.meta.msg), l.getParamsData(), l.addDialogVisible = !1) : l.$message.error(a.meta.msg)
                            })).catch((function () {
                                l.$message.error("操作失败")
                            }))
                        }))
                    }, showEditDialog: function (l) {
                        this.editForm = Object(ul["a"])({}, l), this.editDialogVisible = !0
                    }, editDialogClosed: function () {
                        this.$refs.editFormRef.resetFields()
                    }, editParams: function () {
                        var l = this;
                        this.$refs.editFormRef.validate((function (e) {
                            e && axios.put("categories/".concat(l.cateId, "/attributes/").concat(l.editForm.attr_id), {
                                attr_name: l.editForm.attr_name,
                                attr_sel: l.activeName
                            }).then((function (e) {
                                var a = e.data;
                                200 === a.meta.status ? (l.$message.success(a.meta.msg), l.getParamsData(), l.editDialogVisible = !1) : l.$message.error(a.meta.msg)
                            })).catch((function () {
                                l.$message.error("操作失败")
                            }))
                        }))
                    }, removeParamsById: function (l) {
                        var e = this;
                        axios.delete("categories/".concat(this.cateId, "/attributes/").concat(l)).then((function (l) {
                            var a = l.data;
                            200 === a.meta.status ? (e.$message.success(a.meta.msg), e.getParamsData()) : e.$message.error(a.meta.msg)
                        })).catch((function () {
                            e.$message.error("操作失败")
                        }))
                    }, handleInputTagConfirm: function (l) {
                        0 !== l.inputTagValue.trim().length && (l.attr_vals.push(l.inputTagValue.trim()), this.saveAttrVals(l)), l.inputTagValue = "", l.inputTagVisible = !1
                    }, saveAttrVals: function (l) {
                        var e = this;
                        axios.put("categories/".concat(this.cateId, "/attributes/").concat(l.attr_id), {
                            attr_name: l.attr_name,
                            attr_sel: l.attr_sel,
                            attr_vals: l.attr_vals.join(",")
                        }).then((function (l) {
                            var a = l.data;
                            200 === a.meta.status ? e.$message.success(a.meta.msg) : e.$message.error(a.meta.msg)
                        })).catch((function () {
                            e.$message.error("操作失败")
                        }))
                    }, showTagInput: function (l) {
                        var e = this;
                        l.inputTagVisible = !0, this.$nextTick((function (l) {
                            e.$refs.saveTagInput.$refs.input.focus()
                        }))
                    }, handleTagClose: function (l, e) {
                        l.attr_vals.splice(e, 1), this.saveAttrVals(l)
                    }
                }, computed: {
                    isBtnDisabled: function () {
                        return 3 !== this.selectedKeys.length
                    }, cateId: function () {
                        return 3 === this.selectedKeys.length ? this.selectedKeys[2] : null
                    }, titleText: function () {
                        return "many" === this.activeName ? "动态参数" : "静态属性"
                    }
                }
            }, bl = tl, vl = (a("6dbf"), Object(i["a"])(bl, el, al, !1, null, "101e91e6", null)), rl = vl.exports,
            il = function () {
                var l = this, e = l.$createElement, a = l._self._c || e;
                return a("div", [a("el-breadcrumb", {attrs: {"separator-class": "el-icon-arrow-right"}}, [a("el-breadcrumb-item", {attrs: {to: {path: "/home"}}}, [l._v("首页")]), a("el-breadcrumb-item", [l._v("商品管理")]), a("el-breadcrumb-item", [l._v("商品列表")])], 1), a("el-card", [a("el-row", {attrs: {gutter: 10}}, [a("el-col", {attrs: {span: 6}}, [a("el-input", {
                    attrs: {
                        placeholder: "请输入内容",
                        clearable: !0
                    }, on: {clear: l.getGoodsList}, model: {
                        value: l.queryInfo.query, callback: function (e) {
                            l.$set(l.queryInfo, "query", e)
                        }, expression: "queryInfo.query"
                    }
                }, [a("el-button", {
                    attrs: {slot: "append", icon: "el-icon-search"},
                    on: {click: l.getGoodsList},
                    slot: "append"
                })], 1)], 1), a("el-col", {attrs: {span: 6}}, [a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: l.goAddPage}
                }, [l._v("添加商品")])], 1)], 1), a("el-table", {
                    attrs: {
                        data: l.goodsList,
                        border: "",
                        stripe: ""
                    }
                }, [a("el-table-column", {
                    attrs: {
                        label: "序号",
                        type: "index",
                        width: "50"
                    }
                }), a("el-table-column", {
                    attrs: {
                        label: "商品名称",
                        prop: "goods_name"
                    }
                }), a("el-table-column", {
                    attrs: {
                        label: "商品价格(元)",
                        prop: "goods_price",
                        width: "130"
                    }
                }), a("el-table-column", {
                    attrs: {
                        label: "商品重量",
                        prop: "goods_weight",
                        width: "130"
                    }
                }), a("el-table-column", {
                    attrs: {label: "创建时间", prop: "add_time", width: "200"},
                    scopedSlots: l._u([{
                        key: "default", fn: function (e) {
                            return [l._v(l._s(l._f("dateFormat")(e.row.add_time)))]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {label: "操作", width: "200"},
                    scopedSlots: l._u([{
                        key: "default", fn: function (e) {
                            return [a("el-button", {
                                attrs: {type: "primary", icon: "el-icon-edit", size: "mini"},
                                on: {
                                    click: function (a) {
                                        return l.goEditPage(e.row.goods_id)
                                    }
                                }
                            }, [l._v("编辑")]), a("el-popconfirm", {
                                attrs: {
                                    title: "确定删除吗？",
                                    icon: "el-icon-delete",
                                    iconColor: "red"
                                }, on: {
                                    onConfirm: function (a) {
                                        return l.removeById(e.row.goods_id)
                                    }
                                }
                            }, [a("el-button", {
                                attrs: {
                                    slot: "reference",
                                    size: "mini",
                                    type: "danger",
                                    icon: "el-icon-delete"
                                }, slot: "reference"
                            }, [l._v("删除")])], 1)]
                        }
                    }])
                })], 1), a("el-pagination", {
                    attrs: {
                        "current-page": l.queryInfo.pagenum,
                        "page-sizes": [5, 10, 15, 20],
                        "page-size": l.queryInfo.pagesize,
                        total: l.total,
                        layout: "total, sizes, prev, pager, next, jumper",
                        background: ""
                    }, on: {"size-change": l.handleSizeChange, "current-change": l.handleCurrentChange}
                })], 1)], 1)
            }, sl = [], ol = {
                name: "List", data: function () {
                    return {queryInfo: {query: "", pagenum: 1, pagesize: 10}, goodsList: [], total: 0}
                }, created: function () {
                    this.getGoodsList()
                }, methods: {
                    getGoodsList: function () {
                        var l = this;
                        axios.get("goods", {params: this.queryInfo}).then((function (e) {
                            var a = e.data;
                            200 === a.meta.status ? (l.goodsList = a.data.goods, l.total = a.data.total) : l.$message.error(a.meta.msg)
                        })).catch((function () {
                            l.$message.error("获取失败")
                        }))
                    }, handleSizeChange: function (l) {
                        this.queryInfo.pagesize = l, this.getGoodsList()
                    }, handleCurrentChange: function (l) {
                        this.queryInfo.pagenum = l, this.getGoodsList()
                    }, removeById: function (l) {
                        var e = this;
                        axios.delete("goods/".concat(l)).then((function (l) {
                            var a = l.data;
                            200 === a.meta.status ? (e.$message.success(a.meta.msg), e.getGoodsList()) : e.$message.error(a.meta.msg)
                        })).catch((function () {
                            e.$message.error("操作失败")
                        }))
                    }, goAddPage: function () {
                        this.$router.push("/goods/add")
                    }, goEditPage: function (l) {
                        this.$router.push("/goods/edit/".concat(l))
                    }
                }
            }, nl = ol, cl = (a("4ea6"), Object(i["a"])(nl, il, sl, !1, null, "385feb3a", null)), dl = cl.exports,
            ml = function () {
                var l = this, e = l.$createElement, a = l._self._c || e;
                return a("div", [a("el-breadcrumb", {attrs: {"separator-class": "el-icon-arrow-right"}}, [a("el-breadcrumb-item", {attrs: {to: {path: "/home"}}}, [l._v("首页")]), a("el-breadcrumb-item", [l._v("商品管理")]), a("el-breadcrumb-item", [l._v("添加商品")])], 1), a("el-card", [a("el-alert", {
                    attrs: {
                        title: "添加商品信息",
                        type: "info",
                        center: "",
                        "show-icon": "",
                        closable: !1
                    }
                }), a("el-steps", {
                    attrs: {
                        space: 200,
                        active: l.activeIndex - 0,
                        "finish-status": "success",
                        "align-center": ""
                    }
                }, [a("el-step", {attrs: {title: "基本信息"}}), a("el-step", {attrs: {title: "商品参数"}}), a("el-step", {attrs: {title: "商品属性"}}), a("el-step", {attrs: {title: "商品图片"}}), a("el-step", {attrs: {title: "商品内容"}}), a("el-step", {attrs: {title: "完成"}})], 1), a("el-form", {
                    ref: "addFormRef",
                    attrs: {model: l.addForm, rules: l.addFormRules, "label-width": "70px", "label-position": "top"}
                }, [a("el-tabs", {
                    attrs: {"tab-position": "left", "before-leave": l.beforeTabLeave},
                    model: {
                        value: l.activeIndex, callback: function (e) {
                            l.activeIndex = e
                        }, expression: "activeIndex"
                    }
                }, [a("el-tab-pane", {attrs: {label: "基本信息", name: "0"}}, [a("el-form-item", {
                    attrs: {
                        label: "商品名称",
                        prop: "goods_name"
                    }
                }, [a("el-input", {
                    model: {
                        value: l.addForm.goods_name, callback: function (e) {
                            l.$set(l.addForm, "goods_name", e)
                        }, expression: "addForm.goods_name"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "商品价格",
                        prop: "goods_price"
                    }
                }, [a("el-input", {
                    attrs: {type: "number"},
                    model: {
                        value: l.addForm.goods_price, callback: function (e) {
                            l.$set(l.addForm, "goods_price", e)
                        }, expression: "addForm.goods_price"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "商品重量",
                        prop: "goods_weight"
                    }
                }, [a("el-input", {
                    attrs: {type: "number"},
                    model: {
                        value: l.addForm.goods_weight, callback: function (e) {
                            l.$set(l.addForm, "goods_weight", e)
                        }, expression: "addForm.goods_weight"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "商品数量",
                        prop: "goods_number"
                    }
                }, [a("el-input", {
                    attrs: {type: "number"},
                    model: {
                        value: l.addForm.goods_number, callback: function (e) {
                            l.$set(l.addForm, "goods_number", e)
                        }, expression: "addForm.goods_number"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "商品分类",
                        prop: "goods_cat"
                    }
                }, [a("el-cascader", {
                    staticStyle: {width: "300px"},
                    attrs: {options: l.cateList, props: l.cascaderProps},
                    on: {change: l.handleChange},
                    model: {
                        value: l.addForm.goods_cat, callback: function (e) {
                            l.$set(l.addForm, "goods_cat", e)
                        }, expression: "addForm.goods_cat"
                    }
                })], 1)], 1), a("el-tab-pane", {
                    attrs: {
                        label: "商品参数",
                        name: "1"
                    }
                }, l._l(l.manyTableData, (function (e, u) {
                    return a("el-form-item", {
                        key: e.attr_id,
                        attrs: {label: e.attr_name}
                    }, [a("el-checkbox-group", {
                        model: {
                            value: l.checkedManyTableData[u].attr_vals,
                            callback: function (e) {
                                l.$set(l.checkedManyTableData[u], "attr_vals", e)
                            },
                            expression: "checkedManyTableData[index].attr_vals"
                        }
                    }, l._l(e.attr_vals, (function (l, e) {
                        return a("el-checkbox", {key: e, attrs: {label: l, border: ""}})
                    })), 1)], 1)
                })), 1), a("el-tab-pane", {attrs: {label: "商品属性", name: "2"}}, l._l(l.onlyTableData, (function (e) {
                    return a("el-form-item", {
                        key: e.attr_id,
                        attrs: {label: e.attr_name}
                    }, [a("el-input", {
                        model: {
                            value: e.attr_vals, callback: function (a) {
                                l.$set(e, "attr_vals", a)
                            }, expression: "item.attr_vals"
                        }
                    })], 1)
                })), 1), a("el-tab-pane", {
                    attrs: {
                        label: "商品图片",
                        name: "3"
                    }
                }, [a("el-upload", {
                    attrs: {
                        action: "http://127.0.0.1:8888/api/private/v1/upload",
                        "on-preview": l.handlePreview,
                        "on-remove": l.handleRemove,
                        "list-type": "picture",
                        headers: l.headerObj,
                        "on-success": l.handleSuccess
                    }
                }, [a("el-button", {attrs: {type: "primary"}}, [l._v("点击上传")])], 1)], 1), a("el-tab-pane", {
                    attrs: {
                        label: "商品内容",
                        name: "4"
                    }
                }, [a("quill-editor", {
                    model: {
                        value: l.addForm.goods_introduce, callback: function (e) {
                            l.$set(l.addForm, "goods_introduce", e)
                        }, expression: "addForm.goods_introduce"
                    }
                }), a("el-button", {
                    staticClass: "btnAdd",
                    attrs: {type: "primary"},
                    on: {click: l.add}
                }, [l._v("添加商品")])], 1)], 1)], 1)], 1), a("el-dialog", {
                    attrs: {
                        title: "图片预览",
                        width: "50%",
                        visible: l.previewDialogVisible
                    }, on: {
                        "update:visible": function (e) {
                            l.previewDialogVisible = e
                        }
                    }
                }, [a("img", {staticClass: "previewImg", attrs: {src: l.previewPath, alt: ""}})])], 1)
            }, hl = [], gl = (a("c740"), a("2ef0")), fl = a.n(gl), pl = {
                name: "Add", data: function () {
                    return {
                        cateList: [],
                        cascaderProps: {expandTrigger: "hover", value: "cat_id", label: "cat_name", children: "children"},
                        activeIndex: "0",
                        addForm: {
                            goods_name: "",
                            goods_price: 0,
                            goods_weight: 0,
                            goods_number: 0,
                            goods_cat: [],
                            pics: [],
                            goods_introduce: "",
                            attrs: []
                        },
                        addFormRules: {
                            goods_name: [{required: !0, message: "请输入商品名称", trigger: "blur"}],
                            goods_price: [{required: !0, message: "请输入商品价格", trigger: "blur"}],
                            goods_weight: [{required: !0, message: "请输入商品重量", trigger: "blur"}],
                            goods_number: [{required: !0, message: "请输入商品数量", trigger: "blur"}],
                            goods_cat: [{required: !0, message: "请选择商品分类", trigger: "blur"}]
                        },
                        manyTableData: [],
                        checkedManyTableData: [],
                        onlyTableData: [],
                        headerObj: {Authorization: window.sessionStorage.getItem("token")},
                        previewPath: "",
                        previewDialogVisible: !1
                    }
                }, created: function () {
                    this.getCateList()
                }, methods: {
                    getCateList: function () {
                        var l = this;
                        axios.get("categories").then((function (e) {
                            var a = e.data;
                            200 === a.meta.status ? l.cateList = a.data : l.$message.error(a.meta.msg)
                        })).catch((function () {
                            l.$message.error("请求失败")
                        }))
                    }, handleChange: function () {
                        var l = this;
                        3 === this.addForm.goods_cat.length ? (axios.get("categories/".concat(this.cateId, "/attributes"), {params: {sel: "many"}}).then((function (e) {
                            var a = e.data;
                            200 === a.meta.status ? (a.data.forEach((function (l) {
                                l.attr_vals = l.attr_vals ? l.attr_vals.split(",") : []
                            })), l.manyTableData = a.data, l.checkedManyTableData = fl.a.cloneDeep(a.data)) : l.$message.error(a.meta.msg)
                        })).catch((function () {
                            l.$message.error("请求失败")
                        })), axios.get("categories/".concat(this.cateId, "/attributes"), {params: {sel: "only"}}).then((function (e) {
                            var a = e.data;
                            200 === a.meta.status ? l.onlyTableData = a.data : l.$message.error(a.meta.msg)
                        })).catch((function () {
                            l.$message.error("请求失败")
                        }))) : this.addForm.goods_cat = []
                    }, beforeTabLeave: function (l, e) {
                        if ("0" === e && 3 !== this.addForm.goods_cat.length) return this.$message.error("请选择商品分类"), !1
                    }, handlePreview: function (l) {
                        this.previewPath = l.response.data.url, this.previewDialogVisible = !0
                    }, handleRemove: function (l) {
                        var e = l.response.data.tmp_path, a = this.addForm.pics.findIndex((function (l) {
                            return l.pic === e
                        }));
                        this.addForm.pics.splice(a, 1)
                    }, handleSuccess: function (l) {
                        200 === l.meta.status ? (this.$message.success(l.meta.msg), this.addForm.pics.push({pic: l.data.tmp_path})) : this.$message.error(l.meta.msg)
                    }, add: function () {
                        var l = this;
                        this.$refs.addFormRef.validate((function (e) {
                            if (!e) return l.$message.error("请填写必要的表单项");
                            var a = fl.a.cloneDeep(l.addForm);
                            a.goods_cat = a.goods_cat.join(","), l.checkedManyTableData.forEach((function (l) {
                                var e = {attr_id: l.attr_id, attr_value: l.attr_vals.join(",")};
                                a.attrs.push(e)
                            })), l.onlyTableData.forEach((function (l) {
                                var e = {attr_id: l.attr_id, attr_value: l.attr_vals};
                                a.attrs.push(e)
                            })), axios.post("goods", a).then((function (e) {
                                var a = e.data;
                                201 === a.meta.status ? (l.$message.success(a.meta.msg), l.$router.push("/goods")) : l.$message.error(a.meta.msg)
                            })).catch((function () {
                                l.$message.error("操作失败")
                            }))
                        }))
                    }
                }, computed: {
                    cateId: function () {
                        return 3 === this.addForm.goods_cat.length ? this.addForm.goods_cat[2] : null
                    }
                }
            }, _l = pl, yl = (a("9bcc"), Object(i["a"])(_l, ml, hl, !1, null, "132e91ad", null)), wl = yl.exports,
            Fl = function () {
                var l = this, e = l.$createElement, a = l._self._c || e;
                return a("div", [a("el-breadcrumb", {attrs: {"separator-class": "el-icon-arrow-right"}}, [a("el-breadcrumb-item", {attrs: {to: {path: "/home"}}}, [l._v("首页")]), a("el-breadcrumb-item", [l._v("商品管理")]), a("el-breadcrumb-item", [l._v("编辑商品")])], 1), a("el-card", [a("el-alert", {
                    attrs: {
                        title: "编辑商品信息",
                        type: "info",
                        center: "",
                        "show-icon": "",
                        closable: !1
                    }
                }), a("el-steps", {
                    attrs: {
                        space: 200,
                        active: l.activeIndex - 0,
                        "finish-status": "success",
                        "align-center": ""
                    }
                }, [a("el-step", {attrs: {title: "基本信息"}}), a("el-step", {attrs: {title: "商品参数"}}), a("el-step", {attrs: {title: "商品属性"}}), a("el-step", {attrs: {title: "商品图片"}}), a("el-step", {attrs: {title: "商品内容"}}), a("el-step", {attrs: {title: "完成"}})], 1), a("el-form", {
                    ref: "editFormRef",
                    attrs: {model: l.editForm, rules: l.editFormRules, "label-width": "70px", "label-position": "top"}
                }, [a("el-tabs", {
                    attrs: {"tab-position": "left"},
                    model: {
                        value: l.activeIndex, callback: function (e) {
                            l.activeIndex = e
                        }, expression: "activeIndex"
                    }
                }, [a("el-tab-pane", {attrs: {label: "基本信息", name: "0"}}, [a("el-form-item", {
                    attrs: {
                        label: "商品名称",
                        prop: "goods_name"
                    }
                }, [a("el-input", {
                    model: {
                        value: l.editForm.goods_name, callback: function (e) {
                            l.$set(l.editForm, "goods_name", e)
                        }, expression: "editForm.goods_name"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "商品价格",
                        prop: "goods_price"
                    }
                }, [a("el-input", {
                    attrs: {type: "number"},
                    model: {
                        value: l.editForm.goods_price, callback: function (e) {
                            l.$set(l.editForm, "goods_price", e)
                        }, expression: "editForm.goods_price"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "商品重量",
                        prop: "goods_weight"
                    }
                }, [a("el-input", {
                    attrs: {type: "number"},
                    model: {
                        value: l.editForm.goods_weight, callback: function (e) {
                            l.$set(l.editForm, "goods_weight", e)
                        }, expression: "editForm.goods_weight"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "商品数量",
                        prop: "goods_number"
                    }
                }, [a("el-input", {
                    attrs: {type: "number"},
                    model: {
                        value: l.editForm.goods_number, callback: function (e) {
                            l.$set(l.editForm, "goods_number", e)
                        }, expression: "editForm.goods_number"
                    }
                })], 1), a("el-form-item", {attrs: {label: "商品分类"}}, [a("el-cascader", {
                    staticStyle: {width: "300px"},
                    attrs: {options: l.cateList, props: l.cascaderProps, disabled: ""},
                    model: {
                        value: l.editForm.goods_cat, callback: function (e) {
                            l.$set(l.editForm, "goods_cat", e)
                        }, expression: "editForm.goods_cat"
                    }
                })], 1)], 1), a("el-tab-pane", {
                    attrs: {
                        label: "商品参数",
                        name: "1"
                    }
                }, l._l(l.manyTableData, (function (e) {
                    return a("el-form-item", {
                        key: e.attr_id,
                        attrs: {label: e.attr_name}
                    }, [a("el-checkbox-group", {
                        model: {
                            value: e.attr_value, callback: function (a) {
                                l.$set(e, "attr_value", a)
                            }, expression: "item.attr_value"
                        }
                    }, l._l(e.attr_vals, (function (l, e) {
                        return a("el-checkbox", {key: e, attrs: {label: l, border: ""}})
                    })), 1)], 1)
                })), 1), a("el-tab-pane", {attrs: {label: "商品属性", name: "2"}}, l._l(l.onlyTableData, (function (e) {
                    return a("el-form-item", {
                        key: e.attr_id,
                        attrs: {label: e.attr_name}
                    }, [a("el-input", {
                        model: {
                            value: e.attr_vals, callback: function (a) {
                                l.$set(e, "attr_vals", a)
                            }, expression: "item.attr_vals"
                        }
                    })], 1)
                })), 1), a("el-tab-pane", {
                    attrs: {
                        label: "商品图片",
                        name: "3"
                    }
                }, [a("el-upload", {
                    attrs: {
                        action: "http://127.0.0.1:8888/api/private/v1/upload",
                        "on-preview": l.handlePreview,
                        "file-list": l.imgList,
                        "on-remove": l.handleRemove,
                        "list-type": "picture",
                        headers: l.headerObj,
                        "on-success": l.handleSuccess
                    }
                }, [a("el-button", {attrs: {type: "primary"}}, [l._v("点击上传")])], 1)], 1), a("el-tab-pane", {
                    attrs: {
                        label: "商品内容",
                        name: "4"
                    }
                }, [a("quill-editor", {
                    model: {
                        value: l.editForm.goods_introduce, callback: function (e) {
                            l.$set(l.editForm, "goods_introduce", e)
                        }, expression: "editForm.goods_introduce"
                    }
                }), a("el-button", {
                    staticClass: "btnEdit",
                    attrs: {type: "primary"},
                    on: {click: l.postEdit}
                }, [l._v("编辑商品")])], 1)], 1)], 1)], 1), a("el-dialog", {
                    attrs: {
                        title: "图片预览",
                        width: "50%",
                        visible: l.previewDialogVisible
                    }, on: {
                        "update:visible": function (e) {
                            l.previewDialogVisible = e
                        }
                    }
                }, [a("img", {staticClass: "previewImg", attrs: {src: l.previewPath, alt: ""}})])], 1)
            }, kl = [], $l = (a("d81d"), a("a9e3"), {
                name: "Edit", data: function () {
                    return {
                        cateList: [],
                        cascaderProps: {expandTrigger: "hover", value: "cat_id", label: "cat_name", children: "children"},
                        activeIndex: "0",
                        editForm: {
                            goods_name: "",
                            goods_price: 0,
                            goods_weight: 0,
                            goods_number: 0,
                            goods_cat: [],
                            pics: [],
                            goods_introduce: "",
                            attrs: []
                        },
                        editFormRules: {
                            goods_name: [{required: !0, message: "请输入商品名称", trigger: "blur"}],
                            goods_price: [{required: !0, message: "请输入商品价格", trigger: "blur"}],
                            goods_weight: [{required: !0, message: "请输入商品重量", trigger: "blur"}],
                            goods_number: [{required: !0, message: "请输入商品数量", trigger: "blur"}]
                        },
                        manyTableData: [],
                        onlyTableData: [],
                        imgList: [],
                        tmpImgList: [],
                        headerObj: {Authorization: window.sessionStorage.getItem("token")},
                        previewPath: "",
                        previewDialogVisible: !1
                    }
                }, created: function () {
                    this.getCateList(), this.getGoodsInfo()
                }, methods: {
                    getGoodsInfo: function () {
                        var l = this;
                        axios.get("goods/".concat(this.$route.params.id)).then((function (e) {
                            var a = e.data;
                            200 === a.meta.status ? (l.editForm = a.data, l.editForm.goods_cat = l.editForm.goods_cat.split(",").map(Number), l.getAttrData(), l.getImgList()) : l.$message.error(a.meta.msg)
                        })).catch((function () {
                            l.$message.error("请求失败")
                        }))
                    }, getCateList: function () {
                        var l = this;
                        axios.get("categories").then((function (e) {
                            var a = e.data;
                            200 === a.meta.status ? l.cateList = a.data : l.$message.error(a.meta.msg)
                        })).catch((function () {
                            l.$message.error("请求失败")
                        }))
                    }, getAttrData: function () {
                        var l = this;
                        this.editForm.attrs.forEach((function (e) {
                            "many" === e.attr_sel ? (e.attr_vals = e.attr_vals ? e.attr_vals.split(",") : [], e.attr_value = e.attr_value ? e.attr_value.split(",") : [], l.manyTableData.push(e)) : "only" === e.attr_sel && l.onlyTableData.push(e)
                        }))
                    }, getImgList: function () {
                        var l = this;
                        this.editForm.pics.forEach((function (e) {
                            l.imgList.push({name: e.pics_id, url: e.pics_big_url, pic: e.pics_big})
                        }))
                    }, handlePreview: function (l) {
                        this.previewPath = l.url, this.previewDialogVisible = !0
                    }, handleRemove: function (l) {
                        if (l.response) {
                            var e = l.response.data.tmp_path, a = this.tmpImgList.findIndex((function (l) {
                                return l.pic === e
                            }));
                            this.tmpImgList.splice(a, 1)
                        } else {
                            var u = l.pic, t = this.imgList.findIndex((function (l) {
                                return l.pic === u
                            }));
                            this.imgList.splice(t, 1)
                        }
                    }, handleSuccess: function (l) {
                        200 === l.meta.status ? (this.$message.success(l.meta.msg), this.tmpImgList.push({pic: l.data.tmp_path})) : this.$message.error(l.meta.msg)
                    }, postEdit: function () {
                        var l = this;
                        this.$refs.editFormRef.validate((function (e) {
                            if (!e) return l.$message.error("请填写必要的表单项");
                            var a = {
                                goods_name: l.editForm.goods_name,
                                goods_price: l.editForm.goods_price,
                                goods_number: l.editForm.goods_number,
                                goods_weight: l.editForm.goods_weight,
                                goods_introduce: l.editForm.goods_introduce,
                                attrs: [],
                                goods_cat: ""
                            };
                            a.goods_cat = l.editForm.goods_cat.join(","), l.manyTableData.forEach((function (l) {
                                var e = {attr_id: l.attr_id, attr_value: l.attr_value.join(",")};
                                a.attrs.push(e)
                            })), l.onlyTableData.forEach((function (l) {
                                var e = {attr_id: l.attr_id, attr_value: l.attr_vals};
                                a.attrs.push(e)
                            })), axios.put("goods/".concat(l.editForm.goods_id), a).then((function (e) {
                                var a = e.data;
                                200 === a.meta.status ? (l.$message.success(a.meta.msg), l.$router.push("/goods")) : l.$message.error(a.meta.msg)
                            })).catch((function () {
                                l.$message.error("操作失败")
                            }))
                        }))
                    }
                }
            }), xl = $l, jl = (a("6b31"), Object(i["a"])(xl, Fl, kl, !1, null, "31e46b12", null)), Cl = jl.exports,
            Dl = function () {
                var l = this, e = l.$createElement, a = l._self._c || e;
                return a("div", [a("el-breadcrumb", {attrs: {"separator-class": "el-icon-arrow-right"}}, [a("el-breadcrumb-item", {attrs: {to: {path: "/home"}}}, [l._v("首页")]), a("el-breadcrumb-item", [l._v("订单管理")]), a("el-breadcrumb-item", [l._v("订单列表")])], 1), a("el-card", [a("el-row", [a("el-col", {attrs: {span: 6}}, [a("el-input", {
                    attrs: {
                        placeholder: "请输入内容",
                        clearable: !0
                    }, on: {clear: l.getOrderList}, model: {
                        value: l.queryInfo.query, callback: function (e) {
                            l.$set(l.queryInfo, "query", e)
                        }, expression: "queryInfo.query"
                    }
                }, [a("el-button", {
                    attrs: {slot: "append", icon: "el-icon-search"},
                    on: {click: l.getOrderList},
                    slot: "append"
                })], 1)], 1)], 1), a("el-table", {
                    attrs: {
                        data: l.orderList,
                        border: "",
                        stripe: ""
                    }
                }, [a("el-table-column", {
                    attrs: {
                        label: "序号",
                        type: "index",
                        width: "50"
                    }
                }), a("el-table-column", {
                    attrs: {
                        label: "订单编号",
                        prop: "order_number"
                    }
                }), a("el-table-column", {
                    attrs: {
                        label: "订单价格",
                        prop: "order_price"
                    }
                }), a("el-table-column", {
                    attrs: {label: "是否付款"}, scopedSlots: l._u([{
                        key: "default", fn: function (e) {
                            return ["1" === e.row.pay_status ? a("el-tag", {attrs: {type: "success"}}, [l._v("已付款")]) : a("el-tag", {attrs: {type: "danger"}}, [l._v("未付款")])]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {
                        label: "是否发货",
                        prop: "is_send"
                    }
                }), a("el-table-column", {
                    attrs: {label: "下单时间"}, scopedSlots: l._u([{
                        key: "default", fn: function (e) {
                            return [l._v(l._s(l._f("dateFormat")(e.row.create_time)))]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {label: "操作", width: "200"},
                    scopedSlots: l._u([{
                        key: "default", fn: function (e) {
                            return [a("el-button", {
                                attrs: {size: "mini", type: "primary", icon: "el-icon-edit"},
                                on: {click: l.showEditDialog}
                            }, [l._v("编辑")]), a("el-button", {
                                attrs: {
                                    size: "mini",
                                    type: "success",
                                    icon: "el-icon-location"
                                }, on: {
                                    click: function (a) {
                                        return l.showProgressDialog(e.row)
                                    }
                                }
                            }, [l._v("物流")])]
                        }
                    }])
                })], 1), a("el-pagination", {
                    attrs: {
                        "current-page": l.queryInfo.pagenum,
                        "page-sizes": [5, 10, 15, 20],
                        "page-size": l.queryInfo.pagesize,
                        total: l.total,
                        layout: "total, sizes, prev, pager, next, jumper",
                        background: ""
                    }, on: {"size-change": l.handleSizeChange, "current-change": l.handleCurrentChange}
                })], 1), a("el-dialog", {
                    attrs: {
                        title: "修改地址",
                        width: "50%",
                        visible: l.editDialogVisible,
                        "close-on-click-modal": !1
                    }, on: {
                        "update:visible": function (e) {
                            l.editDialogVisible = e
                        }, close: l.editDialogClosed
                    }
                }, [a("el-form", {
                    ref: "editFormRef",
                    attrs: {model: l.editForm, rules: l.editFormRules, "label-width": "90px"}
                }, [a("el-form-item", {
                    attrs: {
                        label: "省市区/县",
                        prop: "address1"
                    }
                }, [a("el-cascader", {
                    attrs: {options: l.citydata},
                    model: {
                        value: l.editForm.address1, callback: function (e) {
                            l.$set(l.editForm, "address1", e)
                        }, expression: "editForm.address1"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "详细地址",
                        prop: "address2"
                    }
                }, [a("el-input", {
                    model: {
                        value: l.editForm.address2, callback: function (e) {
                            l.$set(l.editForm, "address2", e)
                        }, expression: "editForm.address2"
                    }
                })], 1)], 1), a("span", {
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    on: {
                        click: function (e) {
                            l.editDialogVisible = !1
                        }
                    }
                }, [l._v("取 消")]), a("el-button", {
                    attrs: {type: "primary"}, on: {
                        click: function (e) {
                            l.editDialogVisible = !1
                        }
                    }
                }, [l._v("确 定")])], 1)], 1), a("el-dialog", {
                    attrs: {
                        title: "物流进度",
                        width: "50%",
                        visible: l.progressDialogVisible
                    }, on: {
                        "update:visible": function (e) {
                            l.progressDialogVisible = e
                        }
                    }
                }, [a("el-timeline", l._l(l.progressInfo, (function (e, u) {
                    return a("el-timeline-item", {
                        key: u,
                        attrs: {timestamp: e.time}
                    }, [l._v(" " + l._s(e.context) + " ")])
                })), 1)], 1)], 1)
            }, Rl = [], Il = [{
                children: [{value: "东城区", label: "东城区"}, {value: "西城区", label: "西城区"}, {
                    value: "朝阳区",
                    label: "朝阳区"
                }, {value: "丰台区", label: "丰台区"}, {value: "石景山区", label: "石景山区"}, {
                    value: "海淀区",
                    label: "海淀区"
                }, {value: "门头沟区", label: "门头沟区"}, {value: "房山区", label: "房山区"}, {
                    value: "通州区",
                    label: "通州区"
                }, {value: "顺义区", label: "顺义区"}, {value: "昌平区", label: "昌平区"}, {value: "大兴区", label: "大兴区"}, {
                    value: "怀柔区",
                    label: "怀柔区"
                }, {value: "平谷区", label: "平谷区"}, {value: "密云区", label: "密云区"}, {value: "延庆区", label: "延庆区"}],
                value: "北京市",
                label: "北京市"
            }, {
                children: [{value: "和平区", label: "和平区"}, {value: "河东区", label: "河东区"}, {
                    value: "河西区",
                    label: "河西区"
                }, {value: "南开区", label: "南开区"}, {value: "河北区", label: "河北区"}, {value: "红桥区", label: "红桥区"}, {
                    value: "东丽区",
                    label: "东丽区"
                }, {value: "西青区", label: "西青区"}, {value: "津南区", label: "津南区"}, {value: "北辰区", label: "北辰区"}, {
                    value: "武清区",
                    label: "武清区"
                }, {value: "宝坻区", label: "宝坻区"}, {value: "滨海新区", label: "滨海新区"}, {
                    value: "宁河区",
                    label: "宁河区"
                }, {value: "静海区", label: "静海区"}, {value: "蓟州区", label: "蓟州区"}], value: "天津市", label: "天津市"
            }, {
                children: [{
                    children: [{value: "长安区", label: "长安区"}, {value: "桥西区", label: "桥西区"}, {
                        value: "新华区",
                        label: "新华区"
                    }, {value: "井陉矿区", label: "井陉矿区"}, {value: "裕华区", label: "裕华区"}, {
                        value: "藁城区",
                        label: "藁城区"
                    }, {value: "鹿泉区", label: "鹿泉区"}, {value: "栾城区", label: "栾城区"}, {
                        value: "井陉县",
                        label: "井陉县"
                    }, {value: "正定县", label: "正定县"}, {value: "行唐县", label: "行唐县"}, {
                        value: "灵寿县",
                        label: "灵寿县"
                    }, {value: "高邑县", label: "高邑县"}, {value: "深泽县", label: "深泽县"}, {
                        value: "赞皇县",
                        label: "赞皇县"
                    }, {value: "无极县", label: "无极县"}, {value: "平山县", label: "平山县"}, {
                        value: "元氏县",
                        label: "元氏县"
                    }, {value: "赵县", label: "赵县"}, {value: "晋州市", label: "晋州市"}, {value: "新乐市", label: "新乐市"}],
                    value: "石家庄市",
                    label: "石家庄市"
                }, {
                    children: [{value: "路南区", label: "路南区"}, {value: "路北区", label: "路北区"}, {
                        value: "古冶区",
                        label: "古冶区"
                    }, {value: "开平区", label: "开平区"}, {value: "丰南区", label: "丰南区"}, {
                        value: "丰润区",
                        label: "丰润区"
                    }, {value: "曹妃甸区", label: "曹妃甸区"}, {value: "滦县", label: "滦县"}, {
                        value: "滦南县",
                        label: "滦南县"
                    }, {value: "乐亭县", label: "乐亭县"}, {value: "迁西县", label: "迁西县"}, {
                        value: "玉田县",
                        label: "玉田县"
                    }, {value: "遵化市", label: "遵化市"}, {value: "迁安市", label: "迁安市"}], value: "唐山市", label: "唐山市"
                }, {
                    children: [{value: "海港区", label: "海港区"}, {value: "山海关区", label: "山海关区"}, {
                        value: "北戴河区",
                        label: "北戴河区"
                    }, {value: "抚宁区", label: "抚宁区"}, {value: "青龙满族自治县", label: "青龙满族自治县"}, {
                        value: "昌黎县",
                        label: "昌黎县"
                    }, {value: "卢龙县", label: "卢龙县"}], value: "秦皇岛市", label: "秦皇岛市"
                }, {
                    children: [{value: "邯山区", label: "邯山区"}, {value: "丛台区", label: "丛台区"}, {
                        value: "复兴区",
                        label: "复兴区"
                    }, {value: "峰峰矿区", label: "峰峰矿区"}, {value: "邯郸县", label: "邯郸县"}, {
                        value: "临漳县",
                        label: "临漳县"
                    }, {value: "成安县", label: "成安县"}, {value: "大名县", label: "大名县"}, {value: "涉县", label: "涉县"}, {
                        value: "磁县",
                        label: "磁县"
                    }, {value: "肥乡县", label: "肥乡县"}, {value: "永年县", label: "永年县"}, {
                        value: "邱县",
                        label: "邱县"
                    }, {value: "鸡泽县", label: "鸡泽县"}, {value: "广平县", label: "广平县"}, {
                        value: "馆陶县",
                        label: "馆陶县"
                    }, {value: "魏县", label: "魏县"}, {value: "曲周县", label: "曲周县"}, {value: "武安市", label: "武安市"}],
                    value: "邯郸市",
                    label: "邯郸市"
                }, {
                    children: [{value: "桥东区", label: "桥东区"}, {value: "桥西区", label: "桥西区"}, {
                        value: "邢台县",
                        label: "邢台县"
                    }, {value: "临城县", label: "临城县"}, {value: "内丘县", label: "内丘县"}, {
                        value: "柏乡县",
                        label: "柏乡县"
                    }, {value: "隆尧县", label: "隆尧县"}, {value: "任县", label: "任县"}, {
                        value: "南和县",
                        label: "南和县"
                    }, {value: "宁晋县", label: "宁晋县"}, {value: "巨鹿县", label: "巨鹿县"}, {
                        value: "新河县",
                        label: "新河县"
                    }, {value: "广宗县", label: "广宗县"}, {value: "平乡县", label: "平乡县"}, {
                        value: "威县",
                        label: "威县"
                    }, {value: "清河县", label: "清河县"}, {value: "临西县", label: "临西县"}, {
                        value: "南宫市",
                        label: "南宫市"
                    }, {value: "沙河市", label: "沙河市"}], value: "邢台市", label: "邢台市"
                }, {
                    children: [{value: "竞秀区", label: "竞秀区"}, {value: "莲池区", label: "莲池区"}, {
                        value: "满城区",
                        label: "满城区"
                    }, {value: "清苑区", label: "清苑区"}, {value: "徐水区", label: "徐水区"}, {
                        value: "涞水县",
                        label: "涞水县"
                    }, {value: "阜平县", label: "阜平县"}, {value: "定兴县", label: "定兴县"}, {
                        value: "唐县",
                        label: "唐县"
                    }, {value: "高阳县", label: "高阳县"}, {value: "容城县", label: "容城县"}, {
                        value: "涞源县",
                        label: "涞源县"
                    }, {value: "望都县", label: "望都县"}, {value: "安新县", label: "安新县"}, {
                        value: "易县",
                        label: "易县"
                    }, {value: "曲阳县", label: "曲阳县"}, {value: "蠡县", label: "蠡县"}, {
                        value: "顺平县",
                        label: "顺平县"
                    }, {value: "博野县", label: "博野县"}, {value: "雄县", label: "雄县"}, {
                        value: "涿州市",
                        label: "涿州市"
                    }, {value: "安国市", label: "安国市"}, {value: "高碑店市", label: "高碑店市"}], value: "保定市", label: "保定市"
                }, {
                    children: [{value: "桥东区", label: "桥东区"}, {value: "桥西区", label: "桥西区"}, {
                        value: "宣化区",
                        label: "宣化区"
                    }, {value: "下花园区", label: "下花园区"}, {value: "万全区", label: "万全区"}, {
                        value: "崇礼区",
                        label: "崇礼区"
                    }, {value: "张北县", label: "张北县"}, {value: "康保县", label: "康保县"}, {
                        value: "沽源县",
                        label: "沽源县"
                    }, {value: "尚义县", label: "尚义县"}, {value: "蔚县", label: "蔚县"}, {
                        value: "阳原县",
                        label: "阳原县"
                    }, {value: "怀安县", label: "怀安县"}, {value: "怀来县", label: "怀来县"}, {
                        value: "涿鹿县",
                        label: "涿鹿县"
                    }, {value: "赤城县", label: "赤城县"}], value: "张家口市", label: "张家口市"
                }, {
                    children: [{value: "双桥区", label: "双桥区"}, {value: "双滦区", label: "双滦区"}, {
                        value: "鹰手营子矿区",
                        label: "鹰手营子矿区"
                    }, {value: "承德县", label: "承德县"}, {value: "兴隆县", label: "兴隆县"}, {
                        value: "平泉县",
                        label: "平泉县"
                    }, {value: "滦平县", label: "滦平县"}, {value: "隆化县", label: "隆化县"}, {
                        value: "丰宁满族自治县",
                        label: "丰宁满族自治县"
                    }, {value: "宽城满族自治县", label: "宽城满族自治县"}, {value: "围场满族蒙古族自治县", label: "围场满族蒙古族自治县"}],
                    value: "承德市",
                    label: "承德市"
                }, {
                    children: [{value: "新华区", label: "新华区"}, {value: "运河区", label: "运河区"}, {
                        value: "沧县",
                        label: "沧县"
                    }, {value: "青县", label: "青县"}, {value: "东光县", label: "东光县"}, {
                        value: "海兴县",
                        label: "海兴县"
                    }, {value: "盐山县", label: "盐山县"}, {value: "肃宁县", label: "肃宁县"}, {
                        value: "南皮县",
                        label: "南皮县"
                    }, {value: "吴桥县", label: "吴桥县"}, {value: "献县", label: "献县"}, {
                        value: "孟村回族自治县",
                        label: "孟村回族自治县"
                    }, {value: "泊头市", label: "泊头市"}, {value: "任丘市", label: "任丘市"}, {
                        value: "黄骅市",
                        label: "黄骅市"
                    }, {value: "河间市", label: "河间市"}], value: "沧州市", label: "沧州市"
                }, {
                    children: [{value: "安次区", label: "安次区"}, {value: "广阳区", label: "广阳区"}, {
                        value: "固安县",
                        label: "固安县"
                    }, {value: "永清县", label: "永清县"}, {value: "香河县", label: "香河县"}, {
                        value: "大城县",
                        label: "大城县"
                    }, {value: "文安县", label: "文安县"}, {value: "大厂回族自治县", label: "大厂回族自治县"}, {
                        value: "霸州市",
                        label: "霸州市"
                    }, {value: "三河市", label: "三河市"}], value: "廊坊市", label: "廊坊市"
                }, {
                    children: [{value: "桃城区", label: "桃城区"}, {value: "冀州区", label: "冀州区"}, {
                        value: "枣强县",
                        label: "枣强县"
                    }, {value: "武邑县", label: "武邑县"}, {value: "武强县", label: "武强县"}, {
                        value: "饶阳县",
                        label: "饶阳县"
                    }, {value: "安平县", label: "安平县"}, {value: "故城县", label: "故城县"}, {
                        value: "景县",
                        label: "景县"
                    }, {value: "阜城县", label: "阜城县"}, {value: "深州市", label: "深州市"}], value: "衡水市", label: "衡水市"
                }, {value: "定州市", label: "定州市"}, {value: "辛集市", label: "辛集市"}], value: "河北省", label: "河北省"
            }, {
                children: [{
                    children: [{value: "小店区", label: "小店区"}, {value: "迎泽区", label: "迎泽区"}, {
                        value: "杏花岭区",
                        label: "杏花岭区"
                    }, {value: "尖草坪区", label: "尖草坪区"}, {value: "万柏林区", label: "万柏林区"}, {
                        value: "晋源区",
                        label: "晋源区"
                    }, {value: "清徐县", label: "清徐县"}, {value: "阳曲县", label: "阳曲县"}, {
                        value: "娄烦县",
                        label: "娄烦县"
                    }, {value: "古交市", label: "古交市"}], value: "太原市", label: "太原市"
                }, {
                    children: [{value: "城区", label: "城区"}, {value: "矿区", label: "矿区"}, {
                        value: "南郊区",
                        label: "南郊区"
                    }, {value: "新荣区", label: "新荣区"}, {value: "阳高县", label: "阳高县"}, {
                        value: "天镇县",
                        label: "天镇县"
                    }, {value: "广灵县", label: "广灵县"}, {value: "灵丘县", label: "灵丘县"}, {
                        value: "浑源县",
                        label: "浑源县"
                    }, {value: "左云县", label: "左云县"}, {value: "大同县", label: "大同县"}], value: "大同市", label: "大同市"
                }, {
                    children: [{value: "城区", label: "城区"}, {value: "矿区", label: "矿区"}, {
                        value: "郊区",
                        label: "郊区"
                    }, {value: "平定县", label: "平定县"}, {value: "盂县", label: "盂县"}], value: "阳泉市", label: "阳泉市"
                }, {
                    children: [{value: "城区", label: "城区"}, {value: "郊区", label: "郊区"}, {
                        value: "长治县",
                        label: "长治县"
                    }, {value: "襄垣县", label: "襄垣县"}, {value: "屯留县", label: "屯留县"}, {
                        value: "平顺县",
                        label: "平顺县"
                    }, {value: "黎城县", label: "黎城县"}, {value: "壶关县", label: "壶关县"}, {
                        value: "长子县",
                        label: "长子县"
                    }, {value: "武乡县", label: "武乡县"}, {value: "沁县", label: "沁县"}, {
                        value: "沁源县",
                        label: "沁源县"
                    }, {value: "潞城市", label: "潞城市"}], value: "长治市", label: "长治市"
                }, {
                    children: [{value: "城区", label: "城区"}, {value: "沁水县", label: "沁水县"}, {
                        value: "阳城县",
                        label: "阳城县"
                    }, {value: "陵川县", label: "陵川县"}, {value: "泽州县", label: "泽州县"}, {value: "高平市", label: "高平市"}],
                    value: "晋城市",
                    label: "晋城市"
                }, {
                    children: [{value: "朔城区", label: "朔城区"}, {value: "平鲁区", label: "平鲁区"}, {
                        value: "山阴县",
                        label: "山阴县"
                    }, {value: "应县", label: "应县"}, {value: "右玉县", label: "右玉县"}, {value: "怀仁县", label: "怀仁县"}],
                    value: "朔州市",
                    label: "朔州市"
                }, {
                    children: [{value: "榆次区", label: "榆次区"}, {value: "榆社县", label: "榆社县"}, {
                        value: "左权县",
                        label: "左权县"
                    }, {value: "和顺县", label: "和顺县"}, {value: "昔阳县", label: "昔阳县"}, {
                        value: "寿阳县",
                        label: "寿阳县"
                    }, {value: "太谷县", label: "太谷县"}, {value: "祁县", label: "祁县"}, {
                        value: "平遥县",
                        label: "平遥县"
                    }, {value: "灵石县", label: "灵石县"}, {value: "介休市", label: "介休市"}], value: "晋中市", label: "晋中市"
                }, {
                    children: [{value: "盐湖区", label: "盐湖区"}, {value: "临猗县", label: "临猗县"}, {
                        value: "万荣县",
                        label: "万荣县"
                    }, {value: "闻喜县", label: "闻喜县"}, {value: "稷山县", label: "稷山县"}, {
                        value: "新绛县",
                        label: "新绛县"
                    }, {value: "绛县", label: "绛县"}, {value: "垣曲县", label: "垣曲县"}, {value: "夏县", label: "夏县"}, {
                        value: "平陆县",
                        label: "平陆县"
                    }, {value: "芮城县", label: "芮城县"}, {value: "永济市", label: "永济市"}, {value: "河津市", label: "河津市"}],
                    value: "运城市",
                    label: "运城市"
                }, {
                    children: [{value: "忻府区", label: "忻府区"}, {value: "定襄县", label: "定襄县"}, {
                        value: "五台县",
                        label: "五台县"
                    }, {value: "代县", label: "代县"}, {value: "繁峙县", label: "繁峙县"}, {
                        value: "宁武县",
                        label: "宁武县"
                    }, {value: "静乐县", label: "静乐县"}, {value: "神池县", label: "神池县"}, {
                        value: "五寨县",
                        label: "五寨县"
                    }, {value: "岢岚县", label: "岢岚县"}, {value: "河曲县", label: "河曲县"}, {
                        value: "保德县",
                        label: "保德县"
                    }, {value: "偏关县", label: "偏关县"}, {value: "原平市", label: "原平市"}], value: "忻州市", label: "忻州市"
                }, {
                    children: [{value: "尧都区", label: "尧都区"}, {value: "曲沃县", label: "曲沃县"}, {
                        value: "翼城县",
                        label: "翼城县"
                    }, {value: "襄汾县", label: "襄汾县"}, {value: "洪洞县", label: "洪洞县"}, {
                        value: "古县",
                        label: "古县"
                    }, {value: "安泽县", label: "安泽县"}, {value: "浮山县", label: "浮山县"}, {
                        value: "吉县",
                        label: "吉县"
                    }, {value: "乡宁县", label: "乡宁县"}, {value: "大宁县", label: "大宁县"}, {
                        value: "隰县",
                        label: "隰县"
                    }, {value: "永和县", label: "永和县"}, {value: "蒲县", label: "蒲县"}, {
                        value: "汾西县",
                        label: "汾西县"
                    }, {value: "侯马市", label: "侯马市"}, {value: "霍州市", label: "霍州市"}], value: "临汾市", label: "临汾市"
                }, {
                    children: [{value: "离石区", label: "离石区"}, {value: "文水县", label: "文水县"}, {
                        value: "交城县",
                        label: "交城县"
                    }, {value: "兴县", label: "兴县"}, {value: "临县", label: "临县"}, {value: "柳林县", label: "柳林县"}, {
                        value: "石楼县",
                        label: "石楼县"
                    }, {value: "岚县", label: "岚县"}, {value: "方山县", label: "方山县"}, {
                        value: "中阳县",
                        label: "中阳县"
                    }, {value: "交口县", label: "交口县"}, {value: "孝义市", label: "孝义市"}, {value: "汾阳市", label: "汾阳市"}],
                    value: "吕梁市",
                    label: "吕梁市"
                }], value: "山西省", label: "山西省"
            }, {
                children: [{
                    children: [{value: "新城区", label: "新城区"}, {value: "回民区", label: "回民区"}, {
                        value: "玉泉区",
                        label: "玉泉区"
                    }, {value: "赛罕区", label: "赛罕区"}, {value: "土默特左旗", label: "土默特左旗"}, {
                        value: "托克托县",
                        label: "托克托县"
                    }, {value: "和林格尔县", label: "和林格尔县"}, {value: "清水河县", label: "清水河县"}, {value: "武川县", label: "武川县"}],
                    value: "呼和浩特市",
                    label: "呼和浩特市"
                }, {
                    children: [{value: "东河区", label: "东河区"}, {value: "昆都仑区", label: "昆都仑区"}, {
                        value: "青山区",
                        label: "青山区"
                    }, {value: "石拐区", label: "石拐区"}, {value: "白云鄂博矿区", label: "白云鄂博矿区"}, {
                        value: "九原区",
                        label: "九原区"
                    }, {value: "土默特右旗", label: "土默特右旗"}, {value: "固阳县", label: "固阳县"}, {
                        value: "达尔罕茂明安联合旗",
                        label: "达尔罕茂明安联合旗"
                    }], value: "包头市", label: "包头市"
                }, {
                    children: [{value: "海勃湾区", label: "海勃湾区"}, {value: "海南区", label: "海南区"}, {value: "乌达区", label: "乌达区"}],
                    value: "乌海市",
                    label: "乌海市"
                }, {
                    children: [{value: "红山区", label: "红山区"}, {value: "元宝山区", label: "元宝山区"}, {
                        value: "松山区",
                        label: "松山区"
                    }, {value: "阿鲁科尔沁旗", label: "阿鲁科尔沁旗"}, {value: "巴林左旗", label: "巴林左旗"}, {
                        value: "巴林右旗",
                        label: "巴林右旗"
                    }, {value: "林西县", label: "林西县"}, {value: "克什克腾旗", label: "克什克腾旗"}, {
                        value: "翁牛特旗",
                        label: "翁牛特旗"
                    }, {value: "喀喇沁旗", label: "喀喇沁旗"}, {value: "宁城县", label: "宁城县"}, {value: "敖汉旗", label: "敖汉旗"}],
                    value: "赤峰市",
                    label: "赤峰市"
                }, {
                    children: [{value: "科尔沁区", label: "科尔沁区"}, {value: "科尔沁左翼中旗", label: "科尔沁左翼中旗"}, {
                        value: "科尔沁左翼后旗",
                        label: "科尔沁左翼后旗"
                    }, {value: "开鲁县", label: "开鲁县"}, {value: "库伦旗", label: "库伦旗"}, {
                        value: "奈曼旗",
                        label: "奈曼旗"
                    }, {value: "扎鲁特旗", label: "扎鲁特旗"}, {value: "霍林郭勒市", label: "霍林郭勒市"}], value: "通辽市", label: "通辽市"
                }, {
                    children: [{value: "东胜区", label: "东胜区"}, {value: "康巴什区", label: "康巴什区"}, {
                        value: "达拉特旗",
                        label: "达拉特旗"
                    }, {value: "准格尔旗", label: "准格尔旗"}, {value: "鄂托克前旗", label: "鄂托克前旗"}, {
                        value: "鄂托克旗",
                        label: "鄂托克旗"
                    }, {value: "杭锦旗", label: "杭锦旗"}, {value: "乌审旗", label: "乌审旗"}, {value: "伊金霍洛旗", label: "伊金霍洛旗"}],
                    value: "鄂尔多斯市",
                    label: "鄂尔多斯市"
                }, {
                    children: [{value: "海拉尔区", label: "海拉尔区"}, {value: "扎赉诺尔区", label: "扎赉诺尔区"}, {
                        value: "阿荣旗",
                        label: "阿荣旗"
                    }, {value: "莫力达瓦达斡尔族自治旗", label: "莫力达瓦达斡尔族自治旗"}, {value: "鄂伦春自治旗", label: "鄂伦春自治旗"}, {
                        value: "鄂温克族自治旗",
                        label: "鄂温克族自治旗"
                    }, {value: "陈巴尔虎旗", label: "陈巴尔虎旗"}, {value: "新巴尔虎左旗", label: "新巴尔虎左旗"}, {
                        value: "新巴尔虎右旗",
                        label: "新巴尔虎右旗"
                    }, {value: "满洲里市", label: "满洲里市"}, {value: "牙克石市", label: "牙克石市"}, {
                        value: "扎兰屯市",
                        label: "扎兰屯市"
                    }, {value: "额尔古纳市", label: "额尔古纳市"}, {value: "根河市", label: "根河市"}], value: "呼伦贝尔市", label: "呼伦贝尔市"
                }, {
                    children: [{value: "临河区", label: "临河区"}, {value: "五原县", label: "五原县"}, {
                        value: "磴口县",
                        label: "磴口县"
                    }, {value: "乌拉特前旗", label: "乌拉特前旗"}, {value: "乌拉特中旗", label: "乌拉特中旗"}, {
                        value: "乌拉特后旗",
                        label: "乌拉特后旗"
                    }, {value: "杭锦后旗", label: "杭锦后旗"}], value: "巴彦淖尔市", label: "巴彦淖尔市"
                }, {
                    children: [{value: "集宁区", label: "集宁区"}, {value: "卓资县", label: "卓资县"}, {
                        value: "化德县",
                        label: "化德县"
                    }, {value: "商都县", label: "商都县"}, {value: "兴和县", label: "兴和县"}, {
                        value: "凉城县",
                        label: "凉城县"
                    }, {value: "察哈尔右翼前旗", label: "察哈尔右翼前旗"}, {value: "察哈尔右翼中旗", label: "察哈尔右翼中旗"}, {
                        value: "察哈尔右翼后旗",
                        label: "察哈尔右翼后旗"
                    }, {value: "四子王旗", label: "四子王旗"}, {value: "丰镇市", label: "丰镇市"}], value: "乌兰察布市", label: "乌兰察布市"
                }, {
                    children: [{value: "乌兰浩特市", label: "乌兰浩特市"}, {value: "阿尔山市", label: "阿尔山市"}, {
                        value: "科尔沁右翼前旗",
                        label: "科尔沁右翼前旗"
                    }, {value: "科尔沁右翼中旗", label: "科尔沁右翼中旗"}, {value: "扎赉特旗", label: "扎赉特旗"}, {value: "突泉县", label: "突泉县"}],
                    value: "兴安盟",
                    label: "兴安盟"
                }, {
                    children: [{value: "二连浩特市", label: "二连浩特市"}, {value: "锡林浩特市", label: "锡林浩特市"}, {
                        value: "阿巴嘎旗",
                        label: "阿巴嘎旗"
                    }, {value: "苏尼特左旗", label: "苏尼特左旗"}, {value: "苏尼特右旗", label: "苏尼特右旗"}, {
                        value: "东乌珠穆沁旗",
                        label: "东乌珠穆沁旗"
                    }, {value: "西乌珠穆沁旗", label: "西乌珠穆沁旗"}, {value: "太仆寺旗", label: "太仆寺旗"}, {
                        value: "镶黄旗",
                        label: "镶黄旗"
                    }, {value: "正镶白旗", label: "正镶白旗"}, {value: "正蓝旗", label: "正蓝旗"}, {value: "多伦县", label: "多伦县"}],
                    value: "锡林郭勒盟",
                    label: "锡林郭勒盟"
                }, {
                    children: [{value: "阿拉善左旗", label: "阿拉善左旗"}, {value: "阿拉善右旗", label: "阿拉善右旗"}, {
                        value: "额济纳旗",
                        label: "额济纳旗"
                    }], value: "阿拉善盟", label: "阿拉善盟"
                }], value: "内蒙古自治区", label: "内蒙古自治区"
            }, {
                children: [{
                    children: [{value: "和平区", label: "和平区"}, {value: "沈河区", label: "沈河区"}, {
                        value: "大东区",
                        label: "大东区"
                    }, {value: "皇姑区", label: "皇姑区"}, {value: "铁西区", label: "铁西区"}, {
                        value: "苏家屯区",
                        label: "苏家屯区"
                    }, {value: "浑南区", label: "浑南区"}, {value: "沈北新区", label: "沈北新区"}, {
                        value: "于洪区",
                        label: "于洪区"
                    }, {value: "辽中区", label: "辽中区"}, {value: "康平县", label: "康平县"}, {
                        value: "法库县",
                        label: "法库县"
                    }, {value: "新民市", label: "新民市"}], value: "沈阳市", label: "沈阳市"
                }, {
                    children: [{value: "中山区", label: "中山区"}, {value: "西岗区", label: "西岗区"}, {
                        value: "沙河口区",
                        label: "沙河口区"
                    }, {value: "甘井子区", label: "甘井子区"}, {value: "旅顺口区", label: "旅顺口区"}, {
                        value: "金州区",
                        label: "金州区"
                    }, {value: "普兰店区", label: "普兰店区"}, {value: "长海县", label: "长海县"}, {
                        value: "瓦房店市",
                        label: "瓦房店市"
                    }, {value: "庄河市", label: "庄河市"}], value: "大连市", label: "大连市"
                }, {
                    children: [{value: "铁东区", label: "铁东区"}, {value: "铁西区", label: "铁西区"}, {
                        value: "立山区",
                        label: "立山区"
                    }, {value: "千山区", label: "千山区"}, {value: "台安县", label: "台安县"}, {
                        value: "岫岩满族自治县",
                        label: "岫岩满族自治县"
                    }, {value: "海城市", label: "海城市"}], value: "鞍山市", label: "鞍山市"
                }, {
                    children: [{value: "新抚区", label: "新抚区"}, {value: "东洲区", label: "东洲区"}, {
                        value: "望花区",
                        label: "望花区"
                    }, {value: "顺城区", label: "顺城区"}, {value: "抚顺县", label: "抚顺县"}, {
                        value: "新宾满族自治县",
                        label: "新宾满族自治县"
                    }, {value: "清原满族自治县", label: "清原满族自治县"}], value: "抚顺市", label: "抚顺市"
                }, {
                    children: [{value: "平山区", label: "平山区"}, {value: "溪湖区", label: "溪湖区"}, {
                        value: "明山区",
                        label: "明山区"
                    }, {value: "南芬区", label: "南芬区"}, {value: "本溪满族自治县", label: "本溪满族自治县"}, {
                        value: "桓仁满族自治县",
                        label: "桓仁满族自治县"
                    }], value: "本溪市", label: "本溪市"
                }, {
                    children: [{value: "元宝区", label: "元宝区"}, {value: "振兴区", label: "振兴区"}, {
                        value: "振安区",
                        label: "振安区"
                    }, {value: "宽甸满族自治县", label: "宽甸满族自治县"}, {value: "东港市", label: "东港市"}, {value: "凤城市", label: "凤城市"}],
                    value: "丹东市",
                    label: "丹东市"
                }, {
                    children: [{value: "古塔区", label: "古塔区"}, {value: "凌河区", label: "凌河区"}, {
                        value: "太和区",
                        label: "太和区"
                    }, {value: "黑山县", label: "黑山县"}, {value: "义县", label: "义县"}, {
                        value: "凌海市",
                        label: "凌海市"
                    }, {value: "北镇市", label: "北镇市"}], value: "锦州市", label: "锦州市"
                }, {
                    children: [{value: "站前区", label: "站前区"}, {value: "西市区", label: "西市区"}, {
                        value: "鲅鱼圈区",
                        label: "鲅鱼圈区"
                    }, {value: "老边区", label: "老边区"}, {value: "盖州市", label: "盖州市"}, {value: "大石桥市", label: "大石桥市"}],
                    value: "营口市",
                    label: "营口市"
                }, {
                    children: [{value: "海州区", label: "海州区"}, {value: "新邱区", label: "新邱区"}, {
                        value: "太平区",
                        label: "太平区"
                    }, {value: "清河门区", label: "清河门区"}, {value: "细河区", label: "细河区"}, {
                        value: "阜新蒙古族自治县",
                        label: "阜新蒙古族自治县"
                    }, {value: "彰武县", label: "彰武县"}], value: "阜新市", label: "阜新市"
                }, {
                    children: [{value: "白塔区", label: "白塔区"}, {value: "文圣区", label: "文圣区"}, {
                        value: "宏伟区",
                        label: "宏伟区"
                    }, {value: "弓长岭区", label: "弓长岭区"}, {value: "太子河区", label: "太子河区"}, {
                        value: "辽阳县",
                        label: "辽阳县"
                    }, {value: "灯塔市", label: "灯塔市"}], value: "辽阳市", label: "辽阳市"
                }, {
                    children: [{value: "双台子区", label: "双台子区"}, {value: "兴隆台区", label: "兴隆台区"}, {
                        value: "大洼区",
                        label: "大洼区"
                    }, {value: "盘山县", label: "盘山县"}], value: "盘锦市", label: "盘锦市"
                }, {
                    children: [{value: "银州区", label: "银州区"}, {value: "清河区", label: "清河区"}, {
                        value: "铁岭县",
                        label: "铁岭县"
                    }, {value: "西丰县", label: "西丰县"}, {value: "昌图县", label: "昌图县"}, {
                        value: "调兵山市",
                        label: "调兵山市"
                    }, {value: "开原市", label: "开原市"}], value: "铁岭市", label: "铁岭市"
                }, {
                    children: [{value: "双塔区", label: "双塔区"}, {value: "龙城区", label: "龙城区"}, {
                        value: "朝阳县",
                        label: "朝阳县"
                    }, {value: "建平县", label: "建平县"}, {value: "喀喇沁左翼蒙古族自治县", label: "喀喇沁左翼蒙古族自治县"}, {
                        value: "北票市",
                        label: "北票市"
                    }, {value: "凌源市", label: "凌源市"}], value: "朝阳市", label: "朝阳市"
                }, {
                    children: [{value: "连山区", label: "连山区"}, {value: "龙港区", label: "龙港区"}, {
                        value: "南票区",
                        label: "南票区"
                    }, {value: "绥中县", label: "绥中县"}, {value: "建昌县", label: "建昌县"}, {value: "兴城市", label: "兴城市"}],
                    value: "葫芦岛市",
                    label: "葫芦岛市"
                }], value: "辽宁省", label: "辽宁省"
            }, {
                children: [{
                    children: [{value: "南关区", label: "南关区"}, {value: "宽城区", label: "宽城区"}, {
                        value: "朝阳区",
                        label: "朝阳区"
                    }, {value: "二道区", label: "二道区"}, {value: "绿园区", label: "绿园区"}, {
                        value: "双阳区",
                        label: "双阳区"
                    }, {value: "九台区", label: "九台区"}, {value: "农安县", label: "农安县"}, {
                        value: "榆树市",
                        label: "榆树市"
                    }, {value: "德惠市", label: "德惠市"}], value: "长春市", label: "长春市"
                }, {
                    children: [{value: "昌邑区", label: "昌邑区"}, {value: "龙潭区", label: "龙潭区"}, {
                        value: "船营区",
                        label: "船营区"
                    }, {value: "丰满区", label: "丰满区"}, {value: "永吉县", label: "永吉县"}, {
                        value: "蛟河市",
                        label: "蛟河市"
                    }, {value: "桦甸市", label: "桦甸市"}, {value: "舒兰市", label: "舒兰市"}, {value: "磐石市", label: "磐石市"}],
                    value: "吉林市",
                    label: "吉林市"
                }, {
                    children: [{value: "铁西区", label: "铁西区"}, {value: "铁东区", label: "铁东区"}, {
                        value: "梨树县",
                        label: "梨树县"
                    }, {value: "伊通满族自治县", label: "伊通满族自治县"}, {value: "公主岭市", label: "公主岭市"}, {value: "双辽市", label: "双辽市"}],
                    value: "四平市",
                    label: "四平市"
                }, {
                    children: [{value: "龙山区", label: "龙山区"}, {value: "西安区", label: "西安区"}, {
                        value: "东丰县",
                        label: "东丰县"
                    }, {value: "东辽县", label: "东辽县"}], value: "辽源市", label: "辽源市"
                }, {
                    children: [{value: "东昌区", label: "东昌区"}, {value: "二道江区", label: "二道江区"}, {
                        value: "通化县",
                        label: "通化县"
                    }, {value: "辉南县", label: "辉南县"}, {value: "柳河县", label: "柳河县"}, {
                        value: "梅河口市",
                        label: "梅河口市"
                    }, {value: "集安市", label: "集安市"}], value: "通化市", label: "通化市"
                }, {
                    children: [{value: "浑江区", label: "浑江区"}, {value: "江源区", label: "江源区"}, {
                        value: "抚松县",
                        label: "抚松县"
                    }, {value: "靖宇县", label: "靖宇县"}, {value: "长白朝鲜族自治县", label: "长白朝鲜族自治县"}, {value: "临江市", label: "临江市"}],
                    value: "白山市",
                    label: "白山市"
                }, {
                    children: [{value: "宁江区", label: "宁江区"}, {value: "前郭尔罗斯蒙古族自治县", label: "前郭尔罗斯蒙古族自治县"}, {
                        value: "长岭县",
                        label: "长岭县"
                    }, {value: "乾安县", label: "乾安县"}, {value: "扶余市", label: "扶余市"}], value: "松原市", label: "松原市"
                }, {
                    children: [{value: "洮北区", label: "洮北区"}, {value: "镇赉县", label: "镇赉县"}, {
                        value: "通榆县",
                        label: "通榆县"
                    }, {value: "洮南市", label: "洮南市"}, {value: "大安市", label: "大安市"}], value: "白城市", label: "白城市"
                }, {
                    children: [{value: "延吉市", label: "延吉市"}, {value: "图们市", label: "图们市"}, {
                        value: "敦化市",
                        label: "敦化市"
                    }, {value: "珲春市", label: "珲春市"}, {value: "龙井市", label: "龙井市"}, {
                        value: "和龙市",
                        label: "和龙市"
                    }, {value: "汪清县", label: "汪清县"}, {value: "安图县", label: "安图县"}], value: "延边朝鲜族自治州", label: "延边朝鲜族自治州"
                }], value: "吉林省", label: "吉林省"
            }, {
                children: [{
                    children: [{value: "道里区", label: "道里区"}, {value: "南岗区", label: "南岗区"}, {
                        value: "道外区",
                        label: "道外区"
                    }, {value: "平房区", label: "平房区"}, {value: "松北区", label: "松北区"}, {
                        value: "香坊区",
                        label: "香坊区"
                    }, {value: "呼兰区", label: "呼兰区"}, {value: "阿城区", label: "阿城区"}, {
                        value: "双城区",
                        label: "双城区"
                    }, {value: "依兰县", label: "依兰县"}, {value: "方正县", label: "方正县"}, {
                        value: "宾县",
                        label: "宾县"
                    }, {value: "巴彦县", label: "巴彦县"}, {value: "木兰县", label: "木兰县"}, {
                        value: "通河县",
                        label: "通河县"
                    }, {value: "延寿县", label: "延寿县"}, {value: "尚志市", label: "尚志市"}, {value: "五常市", label: "五常市"}],
                    value: "哈尔滨市",
                    label: "哈尔滨市"
                }, {
                    children: [{value: "龙沙区", label: "龙沙区"}, {value: "建华区", label: "建华区"}, {
                        value: "铁锋区",
                        label: "铁锋区"
                    }, {value: "昂昂溪区", label: "昂昂溪区"}, {value: "富拉尔基区", label: "富拉尔基区"}, {
                        value: "碾子山区",
                        label: "碾子山区"
                    }, {value: "梅里斯达斡尔族区", label: "梅里斯达斡尔族区"}, {value: "龙江县", label: "龙江县"}, {
                        value: "依安县",
                        label: "依安县"
                    }, {value: "泰来县", label: "泰来县"}, {value: "甘南县", label: "甘南县"}, {
                        value: "富裕县",
                        label: "富裕县"
                    }, {value: "克山县", label: "克山县"}, {value: "克东县", label: "克东县"}, {
                        value: "拜泉县",
                        label: "拜泉县"
                    }, {value: "讷河市", label: "讷河市"}], value: "齐齐哈尔市", label: "齐齐哈尔市"
                }, {
                    children: [{value: "鸡冠区", label: "鸡冠区"}, {value: "恒山区", label: "恒山区"}, {
                        value: "滴道区",
                        label: "滴道区"
                    }, {value: "梨树区", label: "梨树区"}, {value: "城子河区", label: "城子河区"}, {
                        value: "麻山区",
                        label: "麻山区"
                    }, {value: "鸡东县", label: "鸡东县"}, {value: "虎林市", label: "虎林市"}, {value: "密山市", label: "密山市"}],
                    value: "鸡西市",
                    label: "鸡西市"
                }, {
                    children: [{value: "向阳区", label: "向阳区"}, {value: "工农区", label: "工农区"}, {
                        value: "南山区",
                        label: "南山区"
                    }, {value: "兴安区", label: "兴安区"}, {value: "东山区", label: "东山区"}, {
                        value: "兴山区",
                        label: "兴山区"
                    }, {value: "萝北县", label: "萝北县"}, {value: "绥滨县", label: "绥滨县"}], value: "鹤岗市", label: "鹤岗市"
                }, {
                    children: [{value: "尖山区", label: "尖山区"}, {value: "岭东区", label: "岭东区"}, {
                        value: "四方台区",
                        label: "四方台区"
                    }, {value: "宝山区", label: "宝山区"}, {value: "集贤县", label: "集贤县"}, {
                        value: "友谊县",
                        label: "友谊县"
                    }, {value: "宝清县", label: "宝清县"}, {value: "饶河县", label: "饶河县"}], value: "双鸭山市", label: "双鸭山市"
                }, {
                    children: [{value: "萨尔图区", label: "萨尔图区"}, {value: "龙凤区", label: "龙凤区"}, {
                        value: "让胡路区",
                        label: "让胡路区"
                    }, {value: "红岗区", label: "红岗区"}, {value: "大同区", label: "大同区"}, {
                        value: "肇州县",
                        label: "肇州县"
                    }, {value: "肇源县", label: "肇源县"}, {value: "林甸县", label: "林甸县"}, {
                        value: "杜尔伯特蒙古族自治县",
                        label: "杜尔伯特蒙古族自治县"
                    }], value: "大庆市", label: "大庆市"
                }, {
                    children: [{value: "伊春区", label: "伊春区"}, {value: "南岔区", label: "南岔区"}, {
                        value: "友好区",
                        label: "友好区"
                    }, {value: "西林区", label: "西林区"}, {value: "翠峦区", label: "翠峦区"}, {
                        value: "新青区",
                        label: "新青区"
                    }, {value: "美溪区", label: "美溪区"}, {value: "金山屯区", label: "金山屯区"}, {
                        value: "五营区",
                        label: "五营区"
                    }, {value: "乌马河区", label: "乌马河区"}, {value: "汤旺河区", label: "汤旺河区"}, {
                        value: "带岭区",
                        label: "带岭区"
                    }, {value: "乌伊岭区", label: "乌伊岭区"}, {value: "红星区", label: "红星区"}, {
                        value: "上甘岭区",
                        label: "上甘岭区"
                    }, {value: "嘉荫县", label: "嘉荫县"}, {value: "铁力市", label: "铁力市"}], value: "伊春市", label: "伊春市"
                }, {
                    children: [{value: "向阳区", label: "向阳区"}, {value: "前进区", label: "前进区"}, {
                        value: "东风区",
                        label: "东风区"
                    }, {value: "郊区", label: "郊区"}, {value: "桦南县", label: "桦南县"}, {
                        value: "桦川县",
                        label: "桦川县"
                    }, {value: "汤原县", label: "汤原县"}, {value: "同江市", label: "同江市"}, {
                        value: "富锦市",
                        label: "富锦市"
                    }, {value: "抚远市", label: "抚远市"}], value: "佳木斯市", label: "佳木斯市"
                }, {
                    children: [{value: "新兴区", label: "新兴区"}, {value: "桃山区", label: "桃山区"}, {
                        value: "茄子河区",
                        label: "茄子河区"
                    }, {value: "勃利县", label: "勃利县"}], value: "七台河市", label: "七台河市"
                }, {
                    children: [{value: "东安区", label: "东安区"}, {value: "阳明区", label: "阳明区"}, {
                        value: "爱民区",
                        label: "爱民区"
                    }, {value: "西安区", label: "西安区"}, {value: "林口县", label: "林口县"}, {
                        value: "绥芬河市",
                        label: "绥芬河市"
                    }, {value: "海林市", label: "海林市"}, {value: "宁安市", label: "宁安市"}, {
                        value: "穆棱市",
                        label: "穆棱市"
                    }, {value: "东宁市", label: "东宁市"}], value: "牡丹江市", label: "牡丹江市"
                }, {
                    children: [{value: "爱辉区", label: "爱辉区"}, {value: "嫩江县", label: "嫩江县"}, {
                        value: "逊克县",
                        label: "逊克县"
                    }, {value: "孙吴县", label: "孙吴县"}, {value: "北安市", label: "北安市"}, {value: "五大连池市", label: "五大连池市"}],
                    value: "黑河市",
                    label: "黑河市"
                }, {
                    children: [{value: "北林区", label: "北林区"}, {value: "望奎县", label: "望奎县"}, {
                        value: "兰西县",
                        label: "兰西县"
                    }, {value: "青冈县", label: "青冈县"}, {value: "庆安县", label: "庆安县"}, {
                        value: "明水县",
                        label: "明水县"
                    }, {value: "绥棱县", label: "绥棱县"}, {value: "安达市", label: "安达市"}, {
                        value: "肇东市",
                        label: "肇东市"
                    }, {value: "海伦市", label: "海伦市"}], value: "绥化市", label: "绥化市"
                }, {
                    children: [{value: "呼玛县", label: "呼玛县"}, {value: "塔河县", label: "塔河县"}, {value: "漠河县", label: "漠河县"}],
                    value: "大兴安岭地区",
                    label: "大兴安岭地区"
                }], value: "黑龙江省", label: "黑龙江省"
            }, {
                children: [{value: "黄浦区", label: "黄浦区"}, {value: "徐汇区", label: "徐汇区"}, {
                    value: "长宁区",
                    label: "长宁区"
                }, {value: "静安区", label: "静安区"}, {value: "普陀区", label: "普陀区"}, {value: "虹口区", label: "虹口区"}, {
                    value: "杨浦区",
                    label: "杨浦区"
                }, {value: "闵行区", label: "闵行区"}, {value: "宝山区", label: "宝山区"}, {value: "嘉定区", label: "嘉定区"}, {
                    value: "浦东新区",
                    label: "浦东新区"
                }, {value: "金山区", label: "金山区"}, {value: "松江区", label: "松江区"}, {value: "青浦区", label: "青浦区"}, {
                    value: "奉贤区",
                    label: "奉贤区"
                }, {value: "崇明区", label: "崇明区"}], value: "上海市", label: "上海市"
            }, {
                children: [{
                    children: [{value: "玄武区", label: "玄武区"}, {value: "秦淮区", label: "秦淮区"}, {
                        value: "建邺区",
                        label: "建邺区"
                    }, {value: "鼓楼区", label: "鼓楼区"}, {value: "浦口区", label: "浦口区"}, {
                        value: "栖霞区",
                        label: "栖霞区"
                    }, {value: "雨花台区", label: "雨花台区"}, {value: "江宁区", label: "江宁区"}, {
                        value: "六合区",
                        label: "六合区"
                    }, {value: "溧水区", label: "溧水区"}, {value: "高淳区", label: "高淳区"}], value: "南京市", label: "南京市"
                }, {
                    children: [{value: "锡山区", label: "锡山区"}, {value: "惠山区", label: "惠山区"}, {
                        value: "滨湖区",
                        label: "滨湖区"
                    }, {value: "梁溪区", label: "梁溪区"}, {value: "新吴区", label: "新吴区"}, {
                        value: "江阴市",
                        label: "江阴市"
                    }, {value: "宜兴市", label: "宜兴市"}], value: "无锡市", label: "无锡市"
                }, {
                    children: [{value: "鼓楼区", label: "鼓楼区"}, {value: "云龙区", label: "云龙区"}, {
                        value: "贾汪区",
                        label: "贾汪区"
                    }, {value: "泉山区", label: "泉山区"}, {value: "铜山区", label: "铜山区"}, {value: "丰县", label: "丰县"}, {
                        value: "沛县",
                        label: "沛县"
                    }, {value: "睢宁县", label: "睢宁县"}, {value: "新沂市", label: "新沂市"}, {value: "邳州市", label: "邳州市"}],
                    value: "徐州市",
                    label: "徐州市"
                }, {
                    children: [{value: "天宁区", label: "天宁区"}, {value: "钟楼区", label: "钟楼区"}, {
                        value: "新北区",
                        label: "新北区"
                    }, {value: "武进区", label: "武进区"}, {value: "金坛区", label: "金坛区"}, {value: "溧阳市", label: "溧阳市"}],
                    value: "常州市",
                    label: "常州市"
                }, {
                    children: [{value: "虎丘区", label: "虎丘区"}, {value: "吴中区", label: "吴中区"}, {
                        value: "相城区",
                        label: "相城区"
                    }, {value: "姑苏区", label: "姑苏区"}, {value: "吴江区", label: "吴江区"}, {
                        value: "常熟市",
                        label: "常熟市"
                    }, {value: "张家港市", label: "张家港市"}, {value: "昆山市", label: "昆山市"}, {value: "太仓市", label: "太仓市"}],
                    value: "苏州市",
                    label: "苏州市"
                }, {
                    children: [{value: "崇川区", label: "崇川区"}, {value: "港闸区", label: "港闸区"}, {
                        value: "通州区",
                        label: "通州区"
                    }, {value: "海安县", label: "海安县"}, {value: "如东县", label: "如东县"}, {
                        value: "启东市",
                        label: "启东市"
                    }, {value: "如皋市", label: "如皋市"}, {value: "海门市", label: "海门市"}], value: "南通市", label: "南通市"
                }, {
                    children: [{value: "连云区", label: "连云区"}, {value: "海州区", label: "海州区"}, {
                        value: "赣榆区",
                        label: "赣榆区"
                    }, {value: "东海县", label: "东海县"}, {value: "灌云县", label: "灌云县"}, {value: "灌南县", label: "灌南县"}],
                    value: "连云港市",
                    label: "连云港市"
                }, {
                    children: [{value: "淮安区", label: "淮安区"}, {value: "淮阴区", label: "淮阴区"}, {
                        value: "清江浦区",
                        label: "清江浦区"
                    }, {value: "洪泽区", label: "洪泽区"}, {value: "涟水县", label: "涟水县"}, {
                        value: "盱眙县",
                        label: "盱眙县"
                    }, {value: "金湖县", label: "金湖县"}], value: "淮安市", label: "淮安市"
                }, {
                    children: [{value: "亭湖区", label: "亭湖区"}, {value: "盐都区", label: "盐都区"}, {
                        value: "大丰区",
                        label: "大丰区"
                    }, {value: "响水县", label: "响水县"}, {value: "滨海县", label: "滨海县"}, {
                        value: "阜宁县",
                        label: "阜宁县"
                    }, {value: "射阳县", label: "射阳县"}, {value: "建湖县", label: "建湖县"}, {value: "东台市", label: "东台市"}],
                    value: "盐城市",
                    label: "盐城市"
                }, {
                    children: [{value: "广陵区", label: "广陵区"}, {value: "邗江区", label: "邗江区"}, {
                        value: "江都区",
                        label: "江都区"
                    }, {value: "宝应县", label: "宝应县"}, {value: "仪征市", label: "仪征市"}, {value: "高邮市", label: "高邮市"}],
                    value: "扬州市",
                    label: "扬州市"
                }, {
                    children: [{value: "京口区", label: "京口区"}, {value: "润州区", label: "润州区"}, {
                        value: "丹徒区",
                        label: "丹徒区"
                    }, {value: "丹阳市", label: "丹阳市"}, {value: "扬中市", label: "扬中市"}, {value: "句容市", label: "句容市"}],
                    value: "镇江市",
                    label: "镇江市"
                }, {
                    children: [{value: "海陵区", label: "海陵区"}, {value: "高港区", label: "高港区"}, {
                        value: "姜堰区",
                        label: "姜堰区"
                    }, {value: "兴化市", label: "兴化市"}, {value: "靖江市", label: "靖江市"}, {value: "泰兴市", label: "泰兴市"}],
                    value: "泰州市",
                    label: "泰州市"
                }, {
                    children: [{value: "宿城区", label: "宿城区"}, {value: "宿豫区", label: "宿豫区"}, {
                        value: "沭阳县",
                        label: "沭阳县"
                    }, {value: "泗阳县", label: "泗阳县"}, {value: "泗洪县", label: "泗洪县"}], value: "宿迁市", label: "宿迁市"
                }], value: "江苏省", label: "江苏省"
            }, {
                children: [{
                    children: [{value: "上城区", label: "上城区"}, {value: "下城区", label: "下城区"}, {
                        value: "江干区",
                        label: "江干区"
                    }, {value: "拱墅区", label: "拱墅区"}, {value: "西湖区", label: "西湖区"}, {
                        value: "滨江区",
                        label: "滨江区"
                    }, {value: "萧山区", label: "萧山区"}, {value: "余杭区", label: "余杭区"}, {
                        value: "富阳区",
                        label: "富阳区"
                    }, {value: "桐庐县", label: "桐庐县"}, {value: "淳安县", label: "淳安县"}, {
                        value: "建德市",
                        label: "建德市"
                    }, {value: "临安市", label: "临安市"}], value: "杭州市", label: "杭州市"
                }, {
                    children: [{value: "海曙区", label: "海曙区"}, {value: "江东区", label: "江东区"}, {
                        value: "江北区",
                        label: "江北区"
                    }, {value: "北仑区", label: "北仑区"}, {value: "镇海区", label: "镇海区"}, {
                        value: "鄞州区",
                        label: "鄞州区"
                    }, {value: "象山县", label: "象山县"}, {value: "宁海县", label: "宁海县"}, {
                        value: "余姚市",
                        label: "余姚市"
                    }, {value: "慈溪市", label: "慈溪市"}, {value: "奉化市", label: "奉化市"}], value: "宁波市", label: "宁波市"
                }, {
                    children: [{value: "鹿城区", label: "鹿城区"}, {value: "龙湾区", label: "龙湾区"}, {
                        value: "瓯海区",
                        label: "瓯海区"
                    }, {value: "洞头区", label: "洞头区"}, {value: "永嘉县", label: "永嘉县"}, {
                        value: "平阳县",
                        label: "平阳县"
                    }, {value: "苍南县", label: "苍南县"}, {value: "文成县", label: "文成县"}, {
                        value: "泰顺县",
                        label: "泰顺县"
                    }, {value: "瑞安市", label: "瑞安市"}, {value: "乐清市", label: "乐清市"}], value: "温州市", label: "温州市"
                }, {
                    children: [{value: "南湖区", label: "南湖区"}, {value: "秀洲区", label: "秀洲区"}, {
                        value: "嘉善县",
                        label: "嘉善县"
                    }, {value: "海盐县", label: "海盐县"}, {value: "海宁市", label: "海宁市"}, {
                        value: "平湖市",
                        label: "平湖市"
                    }, {value: "桐乡市", label: "桐乡市"}], value: "嘉兴市", label: "嘉兴市"
                }, {
                    children: [{value: "吴兴区", label: "吴兴区"}, {value: "南浔区", label: "南浔区"}, {
                        value: "德清县",
                        label: "德清县"
                    }, {value: "长兴县", label: "长兴县"}, {value: "安吉县", label: "安吉县"}], value: "湖州市", label: "湖州市"
                }, {
                    children: [{value: "越城区", label: "越城区"}, {value: "柯桥区", label: "柯桥区"}, {
                        value: "上虞区",
                        label: "上虞区"
                    }, {value: "新昌县", label: "新昌县"}, {value: "诸暨市", label: "诸暨市"}, {value: "嵊州市", label: "嵊州市"}],
                    value: "绍兴市",
                    label: "绍兴市"
                }, {
                    children: [{value: "婺城区", label: "婺城区"}, {value: "金东区", label: "金东区"}, {
                        value: "武义县",
                        label: "武义县"
                    }, {value: "浦江县", label: "浦江县"}, {value: "磐安县", label: "磐安县"}, {
                        value: "兰溪市",
                        label: "兰溪市"
                    }, {value: "义乌市", label: "义乌市"}, {value: "东阳市", label: "东阳市"}, {value: "永康市", label: "永康市"}],
                    value: "金华市",
                    label: "金华市"
                }, {
                    children: [{value: "柯城区", label: "柯城区"}, {value: "衢江区", label: "衢江区"}, {
                        value: "常山县",
                        label: "常山县"
                    }, {value: "开化县", label: "开化县"}, {value: "龙游县", label: "龙游县"}, {value: "江山市", label: "江山市"}],
                    value: "衢州市",
                    label: "衢州市"
                }, {
                    children: [{value: "定海区", label: "定海区"}, {value: "普陀区", label: "普陀区"}, {
                        value: "岱山县",
                        label: "岱山县"
                    }, {value: "嵊泗县", label: "嵊泗县"}], value: "舟山市", label: "舟山市"
                }, {
                    children: [{value: "椒江区", label: "椒江区"}, {value: "黄岩区", label: "黄岩区"}, {
                        value: "路桥区",
                        label: "路桥区"
                    }, {value: "玉环县", label: "玉环县"}, {value: "三门县", label: "三门县"}, {
                        value: "天台县",
                        label: "天台县"
                    }, {value: "仙居县", label: "仙居县"}, {value: "温岭市", label: "温岭市"}, {value: "临海市", label: "临海市"}],
                    value: "台州市",
                    label: "台州市"
                }, {
                    children: [{value: "莲都区", label: "莲都区"}, {value: "青田县", label: "青田县"}, {
                        value: "缙云县",
                        label: "缙云县"
                    }, {value: "遂昌县", label: "遂昌县"}, {value: "松阳县", label: "松阳县"}, {
                        value: "云和县",
                        label: "云和县"
                    }, {value: "庆元县", label: "庆元县"}, {value: "景宁畲族自治县", label: "景宁畲族自治县"}, {value: "龙泉市", label: "龙泉市"}],
                    value: "丽水市",
                    label: "丽水市"
                }], value: "浙江省", label: "浙江省"
            }, {
                children: [{
                    children: [{value: "瑶海区", label: "瑶海区"}, {value: "庐阳区", label: "庐阳区"}, {
                        value: "蜀山区",
                        label: "蜀山区"
                    }, {value: "包河区", label: "包河区"}, {value: "长丰县", label: "长丰县"}, {
                        value: "肥东县",
                        label: "肥东县"
                    }, {value: "肥西县", label: "肥西县"}, {value: "庐江县", label: "庐江县"}, {value: "巢湖市", label: "巢湖市"}],
                    value: "合肥市",
                    label: "合肥市"
                }, {
                    children: [{value: "镜湖区", label: "镜湖区"}, {value: "弋江区", label: "弋江区"}, {
                        value: "鸠江区",
                        label: "鸠江区"
                    }, {value: "三山区", label: "三山区"}, {value: "芜湖县", label: "芜湖县"}, {
                        value: "繁昌县",
                        label: "繁昌县"
                    }, {value: "南陵县", label: "南陵县"}, {value: "无为县", label: "无为县"}], value: "芜湖市", label: "芜湖市"
                }, {
                    children: [{value: "龙子湖区", label: "龙子湖区"}, {value: "蚌山区", label: "蚌山区"}, {
                        value: "禹会区",
                        label: "禹会区"
                    }, {value: "淮上区", label: "淮上区"}, {value: "怀远县", label: "怀远县"}, {
                        value: "五河县",
                        label: "五河县"
                    }, {value: "固镇县", label: "固镇县"}], value: "蚌埠市", label: "蚌埠市"
                }, {
                    children: [{value: "大通区", label: "大通区"}, {value: "田家庵区", label: "田家庵区"}, {
                        value: "谢家集区",
                        label: "谢家集区"
                    }, {value: "八公山区", label: "八公山区"}, {value: "潘集区", label: "潘集区"}, {
                        value: "凤台县",
                        label: "凤台县"
                    }, {value: "寿县", label: "寿县"}], value: "淮南市", label: "淮南市"
                }, {
                    children: [{value: "花山区", label: "花山区"}, {value: "雨山区", label: "雨山区"}, {
                        value: "博望区",
                        label: "博望区"
                    }, {value: "当涂县", label: "当涂县"}, {value: "含山县", label: "含山县"}, {value: "和县", label: "和县"}],
                    value: "马鞍山市",
                    label: "马鞍山市"
                }, {
                    children: [{value: "杜集区", label: "杜集区"}, {value: "相山区", label: "相山区"}, {
                        value: "烈山区",
                        label: "烈山区"
                    }, {value: "濉溪县", label: "濉溪县"}], value: "淮北市", label: "淮北市"
                }, {
                    children: [{value: "铜官区", label: "铜官区"}, {value: "义安区", label: "义安区"}, {
                        value: "郊区",
                        label: "郊区"
                    }, {value: "枞阳县", label: "枞阳县"}], value: "铜陵市", label: "铜陵市"
                }, {
                    children: [{value: "迎江区", label: "迎江区"}, {value: "大观区", label: "大观区"}, {
                        value: "宜秀区",
                        label: "宜秀区"
                    }, {value: "怀宁县", label: "怀宁县"}, {value: "潜山县", label: "潜山县"}, {
                        value: "太湖县",
                        label: "太湖县"
                    }, {value: "宿松县", label: "宿松县"}, {value: "望江县", label: "望江县"}, {
                        value: "岳西县",
                        label: "岳西县"
                    }, {value: "桐城市", label: "桐城市"}], value: "安庆市", label: "安庆市"
                }, {
                    children: [{value: "屯溪区", label: "屯溪区"}, {value: "黄山区", label: "黄山区"}, {
                        value: "徽州区",
                        label: "徽州区"
                    }, {value: "歙县", label: "歙县"}, {value: "休宁县", label: "休宁县"}, {value: "黟县", label: "黟县"}, {
                        value: "祁门县",
                        label: "祁门县"
                    }], value: "黄山市", label: "黄山市"
                }, {
                    children: [{value: "琅琊区", label: "琅琊区"}, {value: "南谯区", label: "南谯区"}, {
                        value: "来安县",
                        label: "来安县"
                    }, {value: "全椒县", label: "全椒县"}, {value: "定远县", label: "定远县"}, {
                        value: "凤阳县",
                        label: "凤阳县"
                    }, {value: "天长市", label: "天长市"}, {value: "明光市", label: "明光市"}], value: "滁州市", label: "滁州市"
                }, {
                    children: [{value: "颍州区", label: "颍州区"}, {value: "颍东区", label: "颍东区"}, {
                        value: "颍泉区",
                        label: "颍泉区"
                    }, {value: "临泉县", label: "临泉县"}, {value: "太和县", label: "太和县"}, {
                        value: "阜南县",
                        label: "阜南县"
                    }, {value: "颍上县", label: "颍上县"}, {value: "界首市", label: "界首市"}], value: "阜阳市", label: "阜阳市"
                }, {
                    children: [{value: "埇桥区", label: "埇桥区"}, {value: "砀山县", label: "砀山县"}, {
                        value: "萧县",
                        label: "萧县"
                    }, {value: "灵璧县", label: "灵璧县"}, {value: "泗县", label: "泗县"}], value: "宿州市", label: "宿州市"
                }, {
                    children: [{value: "金安区", label: "金安区"}, {value: "裕安区", label: "裕安区"}, {
                        value: "叶集区",
                        label: "叶集区"
                    }, {value: "霍邱县", label: "霍邱县"}, {value: "舒城县", label: "舒城县"}, {
                        value: "金寨县",
                        label: "金寨县"
                    }, {value: "霍山县", label: "霍山县"}], value: "六安市", label: "六安市"
                }, {
                    children: [{value: "谯城区", label: "谯城区"}, {value: "涡阳县", label: "涡阳县"}, {
                        value: "蒙城县",
                        label: "蒙城县"
                    }, {value: "利辛县", label: "利辛县"}], value: "亳州市", label: "亳州市"
                }, {
                    children: [{value: "贵池区", label: "贵池区"}, {value: "东至县", label: "东至县"}, {
                        value: "石台县",
                        label: "石台县"
                    }, {value: "青阳县", label: "青阳县"}], value: "池州市", label: "池州市"
                }, {
                    children: [{value: "宣州区", label: "宣州区"}, {value: "郎溪县", label: "郎溪县"}, {
                        value: "广德县",
                        label: "广德县"
                    }, {value: "泾县", label: "泾县"}, {value: "绩溪县", label: "绩溪县"}, {
                        value: "旌德县",
                        label: "旌德县"
                    }, {value: "宁国市", label: "宁国市"}], value: "宣城市", label: "宣城市"
                }], value: "安徽省", label: "安徽省"
            }, {
                children: [{
                    children: [{value: "鼓楼区", label: "鼓楼区"}, {value: "台江区", label: "台江区"}, {
                        value: "仓山区",
                        label: "仓山区"
                    }, {value: "马尾区", label: "马尾区"}, {value: "晋安区", label: "晋安区"}, {
                        value: "闽侯县",
                        label: "闽侯县"
                    }, {value: "连江县", label: "连江县"}, {value: "罗源县", label: "罗源县"}, {
                        value: "闽清县",
                        label: "闽清县"
                    }, {value: "永泰县", label: "永泰县"}, {value: "平潭县", label: "平潭县"}, {
                        value: "福清市",
                        label: "福清市"
                    }, {value: "长乐市", label: "长乐市"}], value: "福州市", label: "福州市"
                }, {
                    children: [{value: "思明区", label: "思明区"}, {value: "海沧区", label: "海沧区"}, {
                        value: "湖里区",
                        label: "湖里区"
                    }, {value: "集美区", label: "集美区"}, {value: "同安区", label: "同安区"}, {value: "翔安区", label: "翔安区"}],
                    value: "厦门市",
                    label: "厦门市"
                }, {
                    children: [{value: "城厢区", label: "城厢区"}, {value: "涵江区", label: "涵江区"}, {
                        value: "荔城区",
                        label: "荔城区"
                    }, {value: "秀屿区", label: "秀屿区"}, {value: "仙游县", label: "仙游县"}], value: "莆田市", label: "莆田市"
                }, {
                    children: [{value: "梅列区", label: "梅列区"}, {value: "三元区", label: "三元区"}, {
                        value: "明溪县",
                        label: "明溪县"
                    }, {value: "清流县", label: "清流县"}, {value: "宁化县", label: "宁化县"}, {
                        value: "大田县",
                        label: "大田县"
                    }, {value: "尤溪县", label: "尤溪县"}, {value: "沙县", label: "沙县"}, {
                        value: "将乐县",
                        label: "将乐县"
                    }, {value: "泰宁县", label: "泰宁县"}, {value: "建宁县", label: "建宁县"}, {value: "永安市", label: "永安市"}],
                    value: "三明市",
                    label: "三明市"
                }, {
                    children: [{value: "鲤城区", label: "鲤城区"}, {value: "丰泽区", label: "丰泽区"}, {
                        value: "洛江区",
                        label: "洛江区"
                    }, {value: "泉港区", label: "泉港区"}, {value: "惠安县", label: "惠安县"}, {
                        value: "安溪县",
                        label: "安溪县"
                    }, {value: "永春县", label: "永春县"}, {value: "德化县", label: "德化县"}, {
                        value: "金门县",
                        label: "金门县"
                    }, {value: "石狮市", label: "石狮市"}, {value: "晋江市", label: "晋江市"}, {value: "南安市", label: "南安市"}],
                    value: "泉州市",
                    label: "泉州市"
                }, {
                    children: [{value: "芗城区", label: "芗城区"}, {value: "龙文区", label: "龙文区"}, {
                        value: "云霄县",
                        label: "云霄县"
                    }, {value: "漳浦县", label: "漳浦县"}, {value: "诏安县", label: "诏安县"}, {
                        value: "长泰县",
                        label: "长泰县"
                    }, {value: "东山县", label: "东山县"}, {value: "南靖县", label: "南靖县"}, {
                        value: "平和县",
                        label: "平和县"
                    }, {value: "华安县", label: "华安县"}, {value: "龙海市", label: "龙海市"}], value: "漳州市", label: "漳州市"
                }, {
                    children: [{value: "延平区", label: "延平区"}, {value: "建阳区", label: "建阳区"}, {
                        value: "顺昌县",
                        label: "顺昌县"
                    }, {value: "浦城县", label: "浦城县"}, {value: "光泽县", label: "光泽县"}, {
                        value: "松溪县",
                        label: "松溪县"
                    }, {value: "政和县", label: "政和县"}, {value: "邵武市", label: "邵武市"}, {
                        value: "武夷山市",
                        label: "武夷山市"
                    }, {value: "建瓯市", label: "建瓯市"}], value: "南平市", label: "南平市"
                }, {
                    children: [{value: "新罗区", label: "新罗区"}, {value: "永定区", label: "永定区"}, {
                        value: "长汀县",
                        label: "长汀县"
                    }, {value: "上杭县", label: "上杭县"}, {value: "武平县", label: "武平县"}, {
                        value: "连城县",
                        label: "连城县"
                    }, {value: "漳平市", label: "漳平市"}], value: "龙岩市", label: "龙岩市"
                }, {
                    children: [{value: "蕉城区", label: "蕉城区"}, {value: "霞浦县", label: "霞浦县"}, {
                        value: "古田县",
                        label: "古田县"
                    }, {value: "屏南县", label: "屏南县"}, {value: "寿宁县", label: "寿宁县"}, {
                        value: "周宁县",
                        label: "周宁县"
                    }, {value: "柘荣县", label: "柘荣县"}, {value: "福安市", label: "福安市"}, {value: "福鼎市", label: "福鼎市"}],
                    value: "宁德市",
                    label: "宁德市"
                }], value: "福建省", label: "福建省"
            }, {
                children: [{
                    children: [{value: "东湖区", label: "东湖区"}, {value: "西湖区", label: "西湖区"}, {
                        value: "青云谱区",
                        label: "青云谱区"
                    }, {value: "湾里区", label: "湾里区"}, {value: "青山湖区", label: "青山湖区"}, {
                        value: "新建区",
                        label: "新建区"
                    }, {value: "南昌县", label: "南昌县"}, {value: "安义县", label: "安义县"}, {value: "进贤县", label: "进贤县"}],
                    value: "南昌市",
                    label: "南昌市"
                }, {
                    children: [{value: "昌江区", label: "昌江区"}, {value: "珠山区", label: "珠山区"}, {
                        value: "浮梁县",
                        label: "浮梁县"
                    }, {value: "乐平市", label: "乐平市"}], value: "景德镇市", label: "景德镇市"
                }, {
                    children: [{value: "安源区", label: "安源区"}, {value: "湘东区", label: "湘东区"}, {
                        value: "莲花县",
                        label: "莲花县"
                    }, {value: "上栗县", label: "上栗县"}, {value: "芦溪县", label: "芦溪县"}], value: "萍乡市", label: "萍乡市"
                }, {
                    children: [{value: "濂溪区", label: "濂溪区"}, {value: "浔阳区", label: "浔阳区"}, {
                        value: "九江县",
                        label: "九江县"
                    }, {value: "武宁县", label: "武宁县"}, {value: "修水县", label: "修水县"}, {
                        value: "永修县",
                        label: "永修县"
                    }, {value: "德安县", label: "德安县"}, {value: "都昌县", label: "都昌县"}, {
                        value: "湖口县",
                        label: "湖口县"
                    }, {value: "彭泽县", label: "彭泽县"}, {value: "瑞昌市", label: "瑞昌市"}, {
                        value: "共青城市",
                        label: "共青城市"
                    }, {value: "庐山市", label: "庐山市"}], value: "九江市", label: "九江市"
                }, {
                    children: [{value: "渝水区", label: "渝水区"}, {value: "分宜县", label: "分宜县"}],
                    value: "新余市",
                    label: "新余市"
                }, {
                    children: [{value: "月湖区", label: "月湖区"}, {value: "余江县", label: "余江县"}, {value: "贵溪市", label: "贵溪市"}],
                    value: "鹰潭市",
                    label: "鹰潭市"
                }, {
                    children: [{value: "章贡区", label: "章贡区"}, {value: "南康区", label: "南康区"}, {
                        value: "赣县",
                        label: "赣县"
                    }, {value: "信丰县", label: "信丰县"}, {value: "大余县", label: "大余县"}, {
                        value: "上犹县",
                        label: "上犹县"
                    }, {value: "崇义县", label: "崇义县"}, {value: "安远县", label: "安远县"}, {
                        value: "龙南县",
                        label: "龙南县"
                    }, {value: "定南县", label: "定南县"}, {value: "全南县", label: "全南县"}, {
                        value: "宁都县",
                        label: "宁都县"
                    }, {value: "于都县", label: "于都县"}, {value: "兴国县", label: "兴国县"}, {
                        value: "会昌县",
                        label: "会昌县"
                    }, {value: "寻乌县", label: "寻乌县"}, {value: "石城县", label: "石城县"}, {value: "瑞金市", label: "瑞金市"}],
                    value: "赣州市",
                    label: "赣州市"
                }, {
                    children: [{value: "吉州区", label: "吉州区"}, {value: "青原区", label: "青原区"}, {
                        value: "吉安县",
                        label: "吉安县"
                    }, {value: "吉水县", label: "吉水县"}, {value: "峡江县", label: "峡江县"}, {
                        value: "新干县",
                        label: "新干县"
                    }, {value: "永丰县", label: "永丰县"}, {value: "泰和县", label: "泰和县"}, {
                        value: "遂川县",
                        label: "遂川县"
                    }, {value: "万安县", label: "万安县"}, {value: "安福县", label: "安福县"}, {
                        value: "永新县",
                        label: "永新县"
                    }, {value: "井冈山市", label: "井冈山市"}], value: "吉安市", label: "吉安市"
                }, {
                    children: [{value: "袁州区", label: "袁州区"}, {value: "奉新县", label: "奉新县"}, {
                        value: "万载县",
                        label: "万载县"
                    }, {value: "上高县", label: "上高县"}, {value: "宜丰县", label: "宜丰县"}, {
                        value: "靖安县",
                        label: "靖安县"
                    }, {value: "铜鼓县", label: "铜鼓县"}, {value: "丰城市", label: "丰城市"}, {
                        value: "樟树市",
                        label: "樟树市"
                    }, {value: "高安市", label: "高安市"}], value: "宜春市", label: "宜春市"
                }, {
                    children: [{value: "临川区", label: "临川区"}, {value: "南城县", label: "南城县"}, {
                        value: "黎川县",
                        label: "黎川县"
                    }, {value: "南丰县", label: "南丰县"}, {value: "崇仁县", label: "崇仁县"}, {
                        value: "乐安县",
                        label: "乐安县"
                    }, {value: "宜黄县", label: "宜黄县"}, {value: "金溪县", label: "金溪县"}, {
                        value: "资溪县",
                        label: "资溪县"
                    }, {value: "东乡县", label: "东乡县"}, {value: "广昌县", label: "广昌县"}], value: "抚州市", label: "抚州市"
                }, {
                    children: [{value: "信州区", label: "信州区"}, {value: "广丰区", label: "广丰区"}, {
                        value: "上饶县",
                        label: "上饶县"
                    }, {value: "玉山县", label: "玉山县"}, {value: "铅山县", label: "铅山县"}, {
                        value: "横峰县",
                        label: "横峰县"
                    }, {value: "弋阳县", label: "弋阳县"}, {value: "余干县", label: "余干县"}, {
                        value: "鄱阳县",
                        label: "鄱阳县"
                    }, {value: "万年县", label: "万年县"}, {value: "婺源县", label: "婺源县"}, {value: "德兴市", label: "德兴市"}],
                    value: "上饶市",
                    label: "上饶市"
                }], value: "江西省", label: "江西省"
            }, {
                children: [{
                    children: [{value: "历下区", label: "历下区"}, {value: "市中区", label: "市中区"}, {
                        value: "槐荫区",
                        label: "槐荫区"
                    }, {value: "天桥区", label: "天桥区"}, {value: "历城区", label: "历城区"}, {
                        value: "长清区",
                        label: "长清区"
                    }, {value: "平阴县", label: "平阴县"}, {value: "济阳县", label: "济阳县"}, {
                        value: "商河县",
                        label: "商河县"
                    }, {value: "章丘市", label: "章丘市"}], value: "济南市", label: "济南市"
                }, {
                    children: [{value: "市南区", label: "市南区"}, {value: "市北区", label: "市北区"}, {
                        value: "黄岛区",
                        label: "黄岛区"
                    }, {value: "崂山区", label: "崂山区"}, {value: "李沧区", label: "李沧区"}, {
                        value: "城阳区",
                        label: "城阳区"
                    }, {value: "胶州市", label: "胶州市"}, {value: "即墨市", label: "即墨市"}, {
                        value: "平度市",
                        label: "平度市"
                    }, {value: "莱西市", label: "莱西市"}], value: "青岛市", label: "青岛市"
                }, {
                    children: [{value: "淄川区", label: "淄川区"}, {value: "张店区", label: "张店区"}, {
                        value: "博山区",
                        label: "博山区"
                    }, {value: "临淄区", label: "临淄区"}, {value: "周村区", label: "周村区"}, {
                        value: "桓台县",
                        label: "桓台县"
                    }, {value: "高青县", label: "高青县"}, {value: "沂源县", label: "沂源县"}], value: "淄博市", label: "淄博市"
                }, {
                    children: [{value: "市中区", label: "市中区"}, {value: "薛城区", label: "薛城区"}, {
                        value: "峄城区",
                        label: "峄城区"
                    }, {value: "台儿庄区", label: "台儿庄区"}, {value: "山亭区", label: "山亭区"}, {value: "滕州市", label: "滕州市"}],
                    value: "枣庄市",
                    label: "枣庄市"
                }, {
                    children: [{value: "东营区", label: "东营区"}, {value: "河口区", label: "河口区"}, {
                        value: "垦利区",
                        label: "垦利区"
                    }, {value: "利津县", label: "利津县"}, {value: "广饶县", label: "广饶县"}], value: "东营市", label: "东营市"
                }, {
                    children: [{value: "芝罘区", label: "芝罘区"}, {value: "福山区", label: "福山区"}, {
                        value: "牟平区",
                        label: "牟平区"
                    }, {value: "莱山区", label: "莱山区"}, {value: "长岛县", label: "长岛县"}, {
                        value: "龙口市",
                        label: "龙口市"
                    }, {value: "莱阳市", label: "莱阳市"}, {value: "莱州市", label: "莱州市"}, {
                        value: "蓬莱市",
                        label: "蓬莱市"
                    }, {value: "招远市", label: "招远市"}, {value: "栖霞市", label: "栖霞市"}, {value: "海阳市", label: "海阳市"}],
                    value: "烟台市",
                    label: "烟台市"
                }, {
                    children: [{value: "潍城区", label: "潍城区"}, {value: "寒亭区", label: "寒亭区"}, {
                        value: "坊子区",
                        label: "坊子区"
                    }, {value: "奎文区", label: "奎文区"}, {value: "临朐县", label: "临朐县"}, {
                        value: "昌乐县",
                        label: "昌乐县"
                    }, {value: "青州市", label: "青州市"}, {value: "诸城市", label: "诸城市"}, {
                        value: "寿光市",
                        label: "寿光市"
                    }, {value: "安丘市", label: "安丘市"}, {value: "高密市", label: "高密市"}, {value: "昌邑市", label: "昌邑市"}],
                    value: "潍坊市",
                    label: "潍坊市"
                }, {
                    children: [{value: "任城区", label: "任城区"}, {value: "兖州区", label: "兖州区"}, {
                        value: "微山县",
                        label: "微山县"
                    }, {value: "鱼台县", label: "鱼台县"}, {value: "金乡县", label: "金乡县"}, {
                        value: "嘉祥县",
                        label: "嘉祥县"
                    }, {value: "汶上县", label: "汶上县"}, {value: "泗水县", label: "泗水县"}, {
                        value: "梁山县",
                        label: "梁山县"
                    }, {value: "曲阜市", label: "曲阜市"}, {value: "邹城市", label: "邹城市"}], value: "济宁市", label: "济宁市"
                }, {
                    children: [{value: "泰山区", label: "泰山区"}, {value: "岱岳区", label: "岱岳区"}, {
                        value: "宁阳县",
                        label: "宁阳县"
                    }, {value: "东平县", label: "东平县"}, {value: "新泰市", label: "新泰市"}, {value: "肥城市", label: "肥城市"}],
                    value: "泰安市",
                    label: "泰安市"
                }, {
                    children: [{value: "环翠区", label: "环翠区"}, {value: "文登区", label: "文登区"}, {
                        value: "荣成市",
                        label: "荣成市"
                    }, {value: "乳山市", label: "乳山市"}], value: "威海市", label: "威海市"
                }, {
                    children: [{value: "东港区", label: "东港区"}, {value: "岚山区", label: "岚山区"}, {
                        value: "五莲县",
                        label: "五莲县"
                    }, {value: "莒县", label: "莒县"}], value: "日照市", label: "日照市"
                }, {
                    children: [{value: "莱城区", label: "莱城区"}, {value: "钢城区", label: "钢城区"}],
                    value: "莱芜市",
                    label: "莱芜市"
                }, {
                    children: [{value: "兰山区", label: "兰山区"}, {value: "罗庄区", label: "罗庄区"}, {
                        value: "河东区",
                        label: "河东区"
                    }, {value: "沂南县", label: "沂南县"}, {value: "郯城县", label: "郯城县"}, {
                        value: "沂水县",
                        label: "沂水县"
                    }, {value: "兰陵县", label: "兰陵县"}, {value: "费县", label: "费县"}, {
                        value: "平邑县",
                        label: "平邑县"
                    }, {value: "莒南县", label: "莒南县"}, {value: "蒙阴县", label: "蒙阴县"}, {value: "临沭县", label: "临沭县"}],
                    value: "临沂市",
                    label: "临沂市"
                }, {
                    children: [{value: "德城区", label: "德城区"}, {value: "陵城区", label: "陵城区"}, {
                        value: "宁津县",
                        label: "宁津县"
                    }, {value: "庆云县", label: "庆云县"}, {value: "临邑县", label: "临邑县"}, {
                        value: "齐河县",
                        label: "齐河县"
                    }, {value: "平原县", label: "平原县"}, {value: "夏津县", label: "夏津县"}, {
                        value: "武城县",
                        label: "武城县"
                    }, {value: "乐陵市", label: "乐陵市"}, {value: "禹城市", label: "禹城市"}], value: "德州市", label: "德州市"
                }, {
                    children: [{value: "东昌府区", label: "东昌府区"}, {value: "阳谷县", label: "阳谷县"}, {
                        value: "莘县",
                        label: "莘县"
                    }, {value: "茌平县", label: "茌平县"}, {value: "东阿县", label: "东阿县"}, {
                        value: "冠县",
                        label: "冠县"
                    }, {value: "高唐县", label: "高唐县"}, {value: "临清市", label: "临清市"}], value: "聊城市", label: "聊城市"
                }, {
                    children: [{value: "滨城区", label: "滨城区"}, {value: "沾化区", label: "沾化区"}, {
                        value: "惠民县",
                        label: "惠民县"
                    }, {value: "阳信县", label: "阳信县"}, {value: "无棣县", label: "无棣县"}, {
                        value: "博兴县",
                        label: "博兴县"
                    }, {value: "邹平县", label: "邹平县"}], value: "滨州市", label: "滨州市"
                }, {
                    children: [{value: "牡丹区", label: "牡丹区"}, {value: "定陶区", label: "定陶区"}, {
                        value: "曹县",
                        label: "曹县"
                    }, {value: "单县", label: "单县"}, {value: "成武县", label: "成武县"}, {
                        value: "巨野县",
                        label: "巨野县"
                    }, {value: "郓城县", label: "郓城县"}, {value: "鄄城县", label: "鄄城县"}, {value: "东明县", label: "东明县"}],
                    value: "菏泽市",
                    label: "菏泽市"
                }], value: "山东省", label: "山东省"
            }, {
                children: [{
                    children: [{value: "中原区", label: "中原区"}, {value: "二七区", label: "二七区"}, {
                        value: "管城回族区",
                        label: "管城回族区"
                    }, {value: "金水区", label: "金水区"}, {value: "上街区", label: "上街区"}, {
                        value: "惠济区",
                        label: "惠济区"
                    }, {value: "中牟县", label: "中牟县"}, {value: "巩义市", label: "巩义市"}, {
                        value: "荥阳市",
                        label: "荥阳市"
                    }, {value: "新密市", label: "新密市"}, {value: "新郑市", label: "新郑市"}, {value: "登封市", label: "登封市"}],
                    value: "郑州市",
                    label: "郑州市"
                }, {
                    children: [{value: "龙亭区", label: "龙亭区"}, {value: "顺河回族区", label: "顺河回族区"}, {
                        value: "鼓楼区",
                        label: "鼓楼区"
                    }, {value: "禹王台区", label: "禹王台区"}, {value: "金明区", label: "金明区"}, {
                        value: "祥符区",
                        label: "祥符区"
                    }, {value: "杞县", label: "杞县"}, {value: "通许县", label: "通许县"}, {
                        value: "尉氏县",
                        label: "尉氏县"
                    }, {value: "兰考县", label: "兰考县"}], value: "开封市", label: "开封市"
                }, {
                    children: [{value: "老城区", label: "老城区"}, {value: "西工区", label: "西工区"}, {
                        value: "瀍河回族区",
                        label: "瀍河回族区"
                    }, {value: "涧西区", label: "涧西区"}, {value: "吉利区", label: "吉利区"}, {
                        value: "洛龙区",
                        label: "洛龙区"
                    }, {value: "孟津县", label: "孟津县"}, {value: "新安县", label: "新安县"}, {
                        value: "栾川县",
                        label: "栾川县"
                    }, {value: "嵩县", label: "嵩县"}, {value: "汝阳县", label: "汝阳县"}, {
                        value: "宜阳县",
                        label: "宜阳县"
                    }, {value: "洛宁县", label: "洛宁县"}, {value: "伊川县", label: "伊川县"}, {value: "偃师市", label: "偃师市"}],
                    value: "洛阳市",
                    label: "洛阳市"
                }, {
                    children: [{value: "新华区", label: "新华区"}, {value: "卫东区", label: "卫东区"}, {
                        value: "石龙区",
                        label: "石龙区"
                    }, {value: "湛河区", label: "湛河区"}, {value: "宝丰县", label: "宝丰县"}, {
                        value: "叶县",
                        label: "叶县"
                    }, {value: "鲁山县", label: "鲁山县"}, {value: "郏县", label: "郏县"}, {
                        value: "舞钢市",
                        label: "舞钢市"
                    }, {value: "汝州市", label: "汝州市"}], value: "平顶山市", label: "平顶山市"
                }, {
                    children: [{value: "文峰区", label: "文峰区"}, {value: "北关区", label: "北关区"}, {
                        value: "殷都区",
                        label: "殷都区"
                    }, {value: "龙安区", label: "龙安区"}, {value: "安阳县", label: "安阳县"}, {
                        value: "汤阴县",
                        label: "汤阴县"
                    }, {value: "滑县", label: "滑县"}, {value: "内黄县", label: "内黄县"}, {value: "林州市", label: "林州市"}],
                    value: "安阳市",
                    label: "安阳市"
                }, {
                    children: [{value: "鹤山区", label: "鹤山区"}, {value: "山城区", label: "山城区"}, {
                        value: "淇滨区",
                        label: "淇滨区"
                    }, {value: "浚县", label: "浚县"}, {value: "淇县", label: "淇县"}], value: "鹤壁市", label: "鹤壁市"
                }, {
                    children: [{value: "红旗区", label: "红旗区"}, {value: "卫滨区", label: "卫滨区"}, {
                        value: "凤泉区",
                        label: "凤泉区"
                    }, {value: "牧野区", label: "牧野区"}, {value: "新乡县", label: "新乡县"}, {
                        value: "获嘉县",
                        label: "获嘉县"
                    }, {value: "原阳县", label: "原阳县"}, {value: "延津县", label: "延津县"}, {
                        value: "封丘县",
                        label: "封丘县"
                    }, {value: "长垣县", label: "长垣县"}, {value: "卫辉市", label: "卫辉市"}, {value: "辉县市", label: "辉县市"}],
                    value: "新乡市",
                    label: "新乡市"
                }, {
                    children: [{value: "解放区", label: "解放区"}, {value: "中站区", label: "中站区"}, {
                        value: "马村区",
                        label: "马村区"
                    }, {value: "山阳区", label: "山阳区"}, {value: "修武县", label: "修武县"}, {
                        value: "博爱县",
                        label: "博爱县"
                    }, {value: "武陟县", label: "武陟县"}, {value: "温县", label: "温县"}, {
                        value: "沁阳市",
                        label: "沁阳市"
                    }, {value: "孟州市", label: "孟州市"}], value: "焦作市", label: "焦作市"
                }, {
                    children: [{value: "华龙区", label: "华龙区"}, {value: "清丰县", label: "清丰县"}, {
                        value: "南乐县",
                        label: "南乐县"
                    }, {value: "范县", label: "范县"}, {value: "台前县", label: "台前县"}, {value: "濮阳县", label: "濮阳县"}],
                    value: "濮阳市",
                    label: "濮阳市"
                }, {
                    children: [{value: "魏都区", label: "魏都区"}, {value: "许昌县", label: "许昌县"}, {
                        value: "鄢陵县",
                        label: "鄢陵县"
                    }, {value: "襄城县", label: "襄城县"}, {value: "禹州市", label: "禹州市"}, {value: "长葛市", label: "长葛市"}],
                    value: "许昌市",
                    label: "许昌市"
                }, {
                    children: [{value: "源汇区", label: "源汇区"}, {value: "郾城区", label: "郾城区"}, {
                        value: "召陵区",
                        label: "召陵区"
                    }, {value: "舞阳县", label: "舞阳县"}, {value: "临颍县", label: "临颍县"}], value: "漯河市", label: "漯河市"
                }, {
                    children: [{value: "湖滨区", label: "湖滨区"}, {value: "陕州区", label: "陕州区"}, {
                        value: "渑池县",
                        label: "渑池县"
                    }, {value: "卢氏县", label: "卢氏县"}, {value: "义马市", label: "义马市"}, {value: "灵宝市", label: "灵宝市"}],
                    value: "三门峡市",
                    label: "三门峡市"
                }, {
                    children: [{value: "宛城区", label: "宛城区"}, {value: "卧龙区", label: "卧龙区"}, {
                        value: "南召县",
                        label: "南召县"
                    }, {value: "方城县", label: "方城县"}, {value: "西峡县", label: "西峡县"}, {
                        value: "镇平县",
                        label: "镇平县"
                    }, {value: "内乡县", label: "内乡县"}, {value: "淅川县", label: "淅川县"}, {
                        value: "社旗县",
                        label: "社旗县"
                    }, {value: "唐河县", label: "唐河县"}, {value: "新野县", label: "新野县"}, {
                        value: "桐柏县",
                        label: "桐柏县"
                    }, {value: "邓州市", label: "邓州市"}], value: "南阳市", label: "南阳市"
                }, {
                    children: [{value: "梁园区", label: "梁园区"}, {value: "睢阳区", label: "睢阳区"}, {
                        value: "民权县",
                        label: "民权县"
                    }, {value: "睢县", label: "睢县"}, {value: "宁陵县", label: "宁陵县"}, {
                        value: "柘城县",
                        label: "柘城县"
                    }, {value: "虞城县", label: "虞城县"}, {value: "夏邑县", label: "夏邑县"}, {value: "永城市", label: "永城市"}],
                    value: "商丘市",
                    label: "商丘市"
                }, {
                    children: [{value: "浉河区", label: "浉河区"}, {value: "平桥区", label: "平桥区"}, {
                        value: "罗山县",
                        label: "罗山县"
                    }, {value: "光山县", label: "光山县"}, {value: "新县", label: "新县"}, {
                        value: "商城县",
                        label: "商城县"
                    }, {value: "固始县", label: "固始县"}, {value: "潢川县", label: "潢川县"}, {
                        value: "淮滨县",
                        label: "淮滨县"
                    }, {value: "息县", label: "息县"}], value: "信阳市", label: "信阳市"
                }, {
                    children: [{value: "川汇区", label: "川汇区"}, {value: "扶沟县", label: "扶沟县"}, {
                        value: "西华县",
                        label: "西华县"
                    }, {value: "商水县", label: "商水县"}, {value: "沈丘县", label: "沈丘县"}, {
                        value: "郸城县",
                        label: "郸城县"
                    }, {value: "淮阳县", label: "淮阳县"}, {value: "太康县", label: "太康县"}, {
                        value: "鹿邑县",
                        label: "鹿邑县"
                    }, {value: "项城市", label: "项城市"}], value: "周口市", label: "周口市"
                }, {
                    children: [{value: "驿城区", label: "驿城区"}, {value: "西平县", label: "西平县"}, {
                        value: "上蔡县",
                        label: "上蔡县"
                    }, {value: "平舆县", label: "平舆县"}, {value: "正阳县", label: "正阳县"}, {
                        value: "确山县",
                        label: "确山县"
                    }, {value: "泌阳县", label: "泌阳县"}, {value: "汝南县", label: "汝南县"}, {
                        value: "遂平县",
                        label: "遂平县"
                    }, {value: "新蔡县", label: "新蔡县"}], value: "驻马店市", label: "驻马店市"
                }, {value: "济源市", label: "济源市"}], value: "河南省", label: "河南省"
            }, {
                children: [{
                    children: [{value: "江岸区", label: "江岸区"}, {value: "江汉区", label: "江汉区"}, {
                        value: "硚口区",
                        label: "硚口区"
                    }, {value: "汉阳区", label: "汉阳区"}, {value: "武昌区", label: "武昌区"}, {
                        value: "青山区",
                        label: "青山区"
                    }, {value: "洪山区", label: "洪山区"}, {value: "东西湖区", label: "东西湖区"}, {
                        value: "汉南区",
                        label: "汉南区"
                    }, {value: "蔡甸区", label: "蔡甸区"}, {value: "江夏区", label: "江夏区"}, {
                        value: "黄陂区",
                        label: "黄陂区"
                    }, {value: "新洲区", label: "新洲区"}], value: "武汉市", label: "武汉市"
                }, {
                    children: [{value: "黄石港区", label: "黄石港区"}, {value: "西塞山区", label: "西塞山区"}, {
                        value: "下陆区",
                        label: "下陆区"
                    }, {value: "铁山区", label: "铁山区"}, {value: "阳新县", label: "阳新县"}, {value: "大冶市", label: "大冶市"}],
                    value: "黄石市",
                    label: "黄石市"
                }, {
                    children: [{value: "茅箭区", label: "茅箭区"}, {value: "张湾区", label: "张湾区"}, {
                        value: "郧阳区",
                        label: "郧阳区"
                    }, {value: "郧西县", label: "郧西县"}, {value: "竹山县", label: "竹山县"}, {
                        value: "竹溪县",
                        label: "竹溪县"
                    }, {value: "房县", label: "房县"}, {value: "丹江口市", label: "丹江口市"}], value: "十堰市", label: "十堰市"
                }, {
                    children: [{value: "西陵区", label: "西陵区"}, {value: "伍家岗区", label: "伍家岗区"}, {
                        value: "点军区",
                        label: "点军区"
                    }, {value: "猇亭区", label: "猇亭区"}, {value: "夷陵区", label: "夷陵区"}, {
                        value: "远安县",
                        label: "远安县"
                    }, {value: "兴山县", label: "兴山县"}, {value: "秭归县", label: "秭归县"}, {
                        value: "长阳土家族自治县",
                        label: "长阳土家族自治县"
                    }, {value: "五峰土家族自治县", label: "五峰土家族自治县"}, {value: "宜都市", label: "宜都市"}, {
                        value: "当阳市",
                        label: "当阳市"
                    }, {value: "枝江市", label: "枝江市"}], value: "宜昌市", label: "宜昌市"
                }, {
                    children: [{value: "襄城区", label: "襄城区"}, {value: "樊城区", label: "樊城区"}, {
                        value: "襄州区",
                        label: "襄州区"
                    }, {value: "南漳县", label: "南漳县"}, {value: "谷城县", label: "谷城县"}, {
                        value: "保康县",
                        label: "保康县"
                    }, {value: "老河口市", label: "老河口市"}, {value: "枣阳市", label: "枣阳市"}, {value: "宜城市", label: "宜城市"}],
                    value: "襄阳市",
                    label: "襄阳市"
                }, {
                    children: [{value: "梁子湖区", label: "梁子湖区"}, {value: "华容区", label: "华容区"}, {value: "鄂城区", label: "鄂城区"}],
                    value: "鄂州市",
                    label: "鄂州市"
                }, {
                    children: [{value: "东宝区", label: "东宝区"}, {value: "掇刀区", label: "掇刀区"}, {
                        value: "京山县",
                        label: "京山县"
                    }, {value: "沙洋县", label: "沙洋县"}, {value: "钟祥市", label: "钟祥市"}], value: "荆门市", label: "荆门市"
                }, {
                    children: [{value: "孝南区", label: "孝南区"}, {value: "孝昌县", label: "孝昌县"}, {
                        value: "大悟县",
                        label: "大悟县"
                    }, {value: "云梦县", label: "云梦县"}, {value: "应城市", label: "应城市"}, {
                        value: "安陆市",
                        label: "安陆市"
                    }, {value: "汉川市", label: "汉川市"}], value: "孝感市", label: "孝感市"
                }, {
                    children: [{value: "沙市区", label: "沙市区"}, {value: "荆州区", label: "荆州区"}, {
                        value: "公安县",
                        label: "公安县"
                    }, {value: "监利县", label: "监利县"}, {value: "江陵县", label: "江陵县"}, {
                        value: "石首市",
                        label: "石首市"
                    }, {value: "洪湖市", label: "洪湖市"}, {value: "松滋市", label: "松滋市"}], value: "荆州市", label: "荆州市"
                }, {
                    children: [{value: "黄州区", label: "黄州区"}, {value: "团风县", label: "团风县"}, {
                        value: "红安县",
                        label: "红安县"
                    }, {value: "罗田县", label: "罗田县"}, {value: "英山县", label: "英山县"}, {
                        value: "浠水县",
                        label: "浠水县"
                    }, {value: "蕲春县", label: "蕲春县"}, {value: "黄梅县", label: "黄梅县"}, {
                        value: "麻城市",
                        label: "麻城市"
                    }, {value: "武穴市", label: "武穴市"}], value: "黄冈市", label: "黄冈市"
                }, {
                    children: [{value: "咸安区", label: "咸安区"}, {value: "嘉鱼县", label: "嘉鱼县"}, {
                        value: "通城县",
                        label: "通城县"
                    }, {value: "崇阳县", label: "崇阳县"}, {value: "通山县", label: "通山县"}, {value: "赤壁市", label: "赤壁市"}],
                    value: "咸宁市",
                    label: "咸宁市"
                }, {
                    children: [{value: "曾都区", label: "曾都区"}, {value: "随县", label: "随县"}, {value: "广水市", label: "广水市"}],
                    value: "随州市",
                    label: "随州市"
                }, {
                    children: [{value: "恩施市", label: "恩施市"}, {value: "利川市", label: "利川市"}, {
                        value: "建始县",
                        label: "建始县"
                    }, {value: "巴东县", label: "巴东县"}, {value: "宣恩县", label: "宣恩县"}, {
                        value: "咸丰县",
                        label: "咸丰县"
                    }, {value: "来凤县", label: "来凤县"}, {value: "鹤峰县", label: "鹤峰县"}], value: "恩施土家族苗族自治州", label: "恩施土家族苗族自治州"
                }, {value: "仙桃市", label: "仙桃市"}, {value: "潜江市", label: "潜江市"}, {
                    value: "天门市",
                    label: "天门市"
                }, {value: "神农架林区", label: "神农架林区"}], value: "湖北省", label: "湖北省"
            }, {
                children: [{
                    children: [{value: "芙蓉区", label: "芙蓉区"}, {value: "天心区", label: "天心区"}, {
                        value: "岳麓区",
                        label: "岳麓区"
                    }, {value: "开福区", label: "开福区"}, {value: "雨花区", label: "雨花区"}, {
                        value: "望城区",
                        label: "望城区"
                    }, {value: "长沙县", label: "长沙县"}, {value: "宁乡县", label: "宁乡县"}, {value: "浏阳市", label: "浏阳市"}],
                    value: "长沙市",
                    label: "长沙市"
                }, {
                    children: [{value: "荷塘区", label: "荷塘区"}, {value: "芦淞区", label: "芦淞区"}, {
                        value: "石峰区",
                        label: "石峰区"
                    }, {value: "天元区", label: "天元区"}, {value: "株洲县", label: "株洲县"}, {
                        value: "攸县",
                        label: "攸县"
                    }, {value: "茶陵县", label: "茶陵县"}, {value: "炎陵县", label: "炎陵县"}, {value: "醴陵市", label: "醴陵市"}],
                    value: "株洲市",
                    label: "株洲市"
                }, {
                    children: [{value: "雨湖区", label: "雨湖区"}, {value: "岳塘区", label: "岳塘区"}, {
                        value: "湘潭县",
                        label: "湘潭县"
                    }, {value: "湘乡市", label: "湘乡市"}, {value: "韶山市", label: "韶山市"}], value: "湘潭市", label: "湘潭市"
                }, {
                    children: [{value: "珠晖区", label: "珠晖区"}, {value: "雁峰区", label: "雁峰区"}, {
                        value: "石鼓区",
                        label: "石鼓区"
                    }, {value: "蒸湘区", label: "蒸湘区"}, {value: "南岳区", label: "南岳区"}, {
                        value: "衡阳县",
                        label: "衡阳县"
                    }, {value: "衡南县", label: "衡南县"}, {value: "衡山县", label: "衡山县"}, {
                        value: "衡东县",
                        label: "衡东县"
                    }, {value: "祁东县", label: "祁东县"}, {value: "耒阳市", label: "耒阳市"}, {value: "常宁市", label: "常宁市"}],
                    value: "衡阳市",
                    label: "衡阳市"
                }, {
                    children: [{value: "双清区", label: "双清区"}, {value: "大祥区", label: "大祥区"}, {
                        value: "北塔区",
                        label: "北塔区"
                    }, {value: "邵东县", label: "邵东县"}, {value: "新邵县", label: "新邵县"}, {
                        value: "邵阳县",
                        label: "邵阳县"
                    }, {value: "隆回县", label: "隆回县"}, {value: "洞口县", label: "洞口县"}, {
                        value: "绥宁县",
                        label: "绥宁县"
                    }, {value: "新宁县", label: "新宁县"}, {value: "城步苗族自治县", label: "城步苗族自治县"}, {value: "武冈市", label: "武冈市"}],
                    value: "邵阳市",
                    label: "邵阳市"
                }, {
                    children: [{value: "岳阳楼区", label: "岳阳楼区"}, {value: "云溪区", label: "云溪区"}, {
                        value: "君山区",
                        label: "君山区"
                    }, {value: "岳阳县", label: "岳阳县"}, {value: "华容县", label: "华容县"}, {
                        value: "湘阴县",
                        label: "湘阴县"
                    }, {value: "平江县", label: "平江县"}, {value: "汨罗市", label: "汨罗市"}, {value: "临湘市", label: "临湘市"}],
                    value: "岳阳市",
                    label: "岳阳市"
                }, {
                    children: [{value: "武陵区", label: "武陵区"}, {value: "鼎城区", label: "鼎城区"}, {
                        value: "安乡县",
                        label: "安乡县"
                    }, {value: "汉寿县", label: "汉寿县"}, {value: "澧县", label: "澧县"}, {
                        value: "临澧县",
                        label: "临澧县"
                    }, {value: "桃源县", label: "桃源县"}, {value: "石门县", label: "石门县"}, {value: "津市市", label: "津市市"}],
                    value: "常德市",
                    label: "常德市"
                }, {
                    children: [{value: "永定区", label: "永定区"}, {value: "武陵源区", label: "武陵源区"}, {
                        value: "慈利县",
                        label: "慈利县"
                    }, {value: "桑植县", label: "桑植县"}], value: "张家界市", label: "张家界市"
                }, {
                    children: [{value: "资阳区", label: "资阳区"}, {value: "赫山区", label: "赫山区"}, {
                        value: "南县",
                        label: "南县"
                    }, {value: "桃江县", label: "桃江县"}, {value: "安化县", label: "安化县"}, {value: "沅江市", label: "沅江市"}],
                    value: "益阳市",
                    label: "益阳市"
                }, {
                    children: [{value: "北湖区", label: "北湖区"}, {value: "苏仙区", label: "苏仙区"}, {
                        value: "桂阳县",
                        label: "桂阳县"
                    }, {value: "宜章县", label: "宜章县"}, {value: "永兴县", label: "永兴县"}, {
                        value: "嘉禾县",
                        label: "嘉禾县"
                    }, {value: "临武县", label: "临武县"}, {value: "汝城县", label: "汝城县"}, {
                        value: "桂东县",
                        label: "桂东县"
                    }, {value: "安仁县", label: "安仁县"}, {value: "资兴市", label: "资兴市"}], value: "郴州市", label: "郴州市"
                }, {
                    children: [{value: "零陵区", label: "零陵区"}, {value: "冷水滩区", label: "冷水滩区"}, {
                        value: "祁阳县",
                        label: "祁阳县"
                    }, {value: "东安县", label: "东安县"}, {value: "双牌县", label: "双牌县"}, {
                        value: "道县",
                        label: "道县"
                    }, {value: "江永县", label: "江永县"}, {value: "宁远县", label: "宁远县"}, {
                        value: "蓝山县",
                        label: "蓝山县"
                    }, {value: "新田县", label: "新田县"}, {value: "江华瑶族自治县", label: "江华瑶族自治县"}], value: "永州市", label: "永州市"
                }, {
                    children: [{value: "鹤城区", label: "鹤城区"}, {value: "中方县", label: "中方县"}, {
                        value: "沅陵县",
                        label: "沅陵县"
                    }, {value: "辰溪县", label: "辰溪县"}, {value: "溆浦县", label: "溆浦县"}, {
                        value: "会同县",
                        label: "会同县"
                    }, {value: "麻阳苗族自治县", label: "麻阳苗族自治县"}, {value: "新晃侗族自治县", label: "新晃侗族自治县"}, {
                        value: "芷江侗族自治县",
                        label: "芷江侗族自治县"
                    }, {value: "靖州苗族侗族自治县", label: "靖州苗族侗族自治县"}, {value: "通道侗族自治县", label: "通道侗族自治县"}, {
                        value: "洪江市",
                        label: "洪江市"
                    }], value: "怀化市", label: "怀化市"
                }, {
                    children: [{value: "娄星区", label: "娄星区"}, {value: "双峰县", label: "双峰县"}, {
                        value: "新化县",
                        label: "新化县"
                    }, {value: "冷水江市", label: "冷水江市"}, {value: "涟源市", label: "涟源市"}], value: "娄底市", label: "娄底市"
                }, {
                    children: [{value: "吉首市", label: "吉首市"}, {value: "泸溪县", label: "泸溪县"}, {
                        value: "凤凰县",
                        label: "凤凰县"
                    }, {value: "花垣县", label: "花垣县"}, {value: "保靖县", label: "保靖县"}, {
                        value: "古丈县",
                        label: "古丈县"
                    }, {value: "永顺县", label: "永顺县"}, {value: "龙山县", label: "龙山县"}], value: "湘西土家族苗族自治州", label: "湘西土家族苗族自治州"
                }], value: "湖南省", label: "湖南省"
            }, {
                children: [{
                    children: [{value: "荔湾区", label: "荔湾区"}, {value: "越秀区", label: "越秀区"}, {
                        value: "海珠区",
                        label: "海珠区"
                    }, {value: "天河区", label: "天河区"}, {value: "白云区", label: "白云区"}, {
                        value: "黄埔区",
                        label: "黄埔区"
                    }, {value: "番禺区", label: "番禺区"}, {value: "花都区", label: "花都区"}, {
                        value: "南沙区",
                        label: "南沙区"
                    }, {value: "从化区", label: "从化区"}, {value: "增城区", label: "增城区"}], value: "广州市", label: "广州市"
                }, {
                    children: [{value: "武江区", label: "武江区"}, {value: "浈江区", label: "浈江区"}, {
                        value: "曲江区",
                        label: "曲江区"
                    }, {value: "始兴县", label: "始兴县"}, {value: "仁化县", label: "仁化县"}, {
                        value: "翁源县",
                        label: "翁源县"
                    }, {value: "乳源瑶族自治县", label: "乳源瑶族自治县"}, {value: "新丰县", label: "新丰县"}, {
                        value: "乐昌市",
                        label: "乐昌市"
                    }, {value: "南雄市", label: "南雄市"}], value: "韶关市", label: "韶关市"
                }, {
                    children: [{value: "罗湖区", label: "罗湖区"}, {value: "福田区", label: "福田区"}, {
                        value: "南山区",
                        label: "南山区"
                    }, {value: "宝安区", label: "宝安区"}, {value: "龙岗区", label: "龙岗区"}, {value: "盐田区", label: "盐田区"}],
                    value: "深圳市",
                    label: "深圳市"
                }, {
                    children: [{value: "香洲区", label: "香洲区"}, {value: "斗门区", label: "斗门区"}, {value: "金湾区", label: "金湾区"}],
                    value: "珠海市",
                    label: "珠海市"
                }, {
                    children: [{value: "龙湖区", label: "龙湖区"}, {value: "金平区", label: "金平区"}, {
                        value: "濠江区",
                        label: "濠江区"
                    }, {value: "潮阳区", label: "潮阳区"}, {value: "潮南区", label: "潮南区"}, {
                        value: "澄海区",
                        label: "澄海区"
                    }, {value: "南澳县", label: "南澳县"}], value: "汕头市", label: "汕头市"
                }, {
                    children: [{value: "禅城区", label: "禅城区"}, {value: "南海区", label: "南海区"}, {
                        value: "顺德区",
                        label: "顺德区"
                    }, {value: "三水区", label: "三水区"}, {value: "高明区", label: "高明区"}], value: "佛山市", label: "佛山市"
                }, {
                    children: [{value: "蓬江区", label: "蓬江区"}, {value: "江海区", label: "江海区"}, {
                        value: "新会区",
                        label: "新会区"
                    }, {value: "台山市", label: "台山市"}, {value: "开平市", label: "开平市"}, {
                        value: "鹤山市",
                        label: "鹤山市"
                    }, {value: "恩平市", label: "恩平市"}], value: "江门市", label: "江门市"
                }, {
                    children: [{value: "赤坎区", label: "赤坎区"}, {value: "霞山区", label: "霞山区"}, {
                        value: "坡头区",
                        label: "坡头区"
                    }, {value: "麻章区", label: "麻章区"}, {value: "遂溪县", label: "遂溪县"}, {
                        value: "徐闻县",
                        label: "徐闻县"
                    }, {value: "廉江市", label: "廉江市"}, {value: "雷州市", label: "雷州市"}, {value: "吴川市", label: "吴川市"}],
                    value: "湛江市",
                    label: "湛江市"
                }, {
                    children: [{value: "茂南区", label: "茂南区"}, {value: "电白区", label: "电白区"}, {
                        value: "高州市",
                        label: "高州市"
                    }, {value: "化州市", label: "化州市"}, {value: "信宜市", label: "信宜市"}], value: "茂名市", label: "茂名市"
                }, {
                    children: [{value: "端州区", label: "端州区"}, {value: "鼎湖区", label: "鼎湖区"}, {
                        value: "高要区",
                        label: "高要区"
                    }, {value: "广宁县", label: "广宁县"}, {value: "怀集县", label: "怀集县"}, {
                        value: "封开县",
                        label: "封开县"
                    }, {value: "德庆县", label: "德庆县"}, {value: "四会市", label: "四会市"}], value: "肇庆市", label: "肇庆市"
                }, {
                    children: [{value: "惠城区", label: "惠城区"}, {value: "惠阳区", label: "惠阳区"}, {
                        value: "博罗县",
                        label: "博罗县"
                    }, {value: "惠东县", label: "惠东县"}, {value: "龙门县", label: "龙门县"}], value: "惠州市", label: "惠州市"
                }, {
                    children: [{value: "梅江区", label: "梅江区"}, {value: "梅县区", label: "梅县区"}, {
                        value: "大埔县",
                        label: "大埔县"
                    }, {value: "丰顺县", label: "丰顺县"}, {value: "五华县", label: "五华县"}, {
                        value: "平远县",
                        label: "平远县"
                    }, {value: "蕉岭县", label: "蕉岭县"}, {value: "兴宁市", label: "兴宁市"}], value: "梅州市", label: "梅州市"
                }, {
                    children: [{value: "城区", label: "城区"}, {value: "海丰县", label: "海丰县"}, {
                        value: "陆河县",
                        label: "陆河县"
                    }, {value: "陆丰市", label: "陆丰市"}], value: "汕尾市", label: "汕尾市"
                }, {
                    children: [{value: "源城区", label: "源城区"}, {value: "紫金县", label: "紫金县"}, {
                        value: "龙川县",
                        label: "龙川县"
                    }, {value: "连平县", label: "连平县"}, {value: "和平县", label: "和平县"}, {value: "东源县", label: "东源县"}],
                    value: "河源市",
                    label: "河源市"
                }, {
                    children: [{value: "江城区", label: "江城区"}, {value: "阳东区", label: "阳东区"}, {
                        value: "阳西县",
                        label: "阳西县"
                    }, {value: "阳春市", label: "阳春市"}], value: "阳江市", label: "阳江市"
                }, {
                    children: [{value: "清城区", label: "清城区"}, {value: "清新区", label: "清新区"}, {
                        value: "佛冈县",
                        label: "佛冈县"
                    }, {value: "阳山县", label: "阳山县"}, {value: "连山壮族瑶族自治县", label: "连山壮族瑶族自治县"}, {
                        value: "连南瑶族自治县",
                        label: "连南瑶族自治县"
                    }, {value: "英德市", label: "英德市"}, {value: "连州市", label: "连州市"}], value: "清远市", label: "清远市"
                }, {value: "东莞市", label: "东莞市"}, {value: "中山市", label: "中山市"}, {
                    children: [{
                        value: "湘桥区",
                        label: "湘桥区"
                    }, {value: "潮安区", label: "潮安区"}, {value: "饶平县", label: "饶平县"}], value: "潮州市", label: "潮州市"
                }, {
                    children: [{value: "榕城区", label: "榕城区"}, {value: "揭东区", label: "揭东区"}, {
                        value: "揭西县",
                        label: "揭西县"
                    }, {value: "惠来县", label: "惠来县"}, {value: "普宁市", label: "普宁市"}], value: "揭阳市", label: "揭阳市"
                }, {
                    children: [{value: "云城区", label: "云城区"}, {value: "云安区", label: "云安区"}, {
                        value: "新兴县",
                        label: "新兴县"
                    }, {value: "郁南县", label: "郁南县"}, {value: "罗定市", label: "罗定市"}], value: "云浮市", label: "云浮市"
                }], value: "广东省", label: "广东省"
            }, {
                children: [{
                    children: [{value: "兴宁区", label: "兴宁区"}, {value: "青秀区", label: "青秀区"}, {
                        value: "江南区",
                        label: "江南区"
                    }, {value: "西乡塘区", label: "西乡塘区"}, {value: "良庆区", label: "良庆区"}, {
                        value: "邕宁区",
                        label: "邕宁区"
                    }, {value: "武鸣区", label: "武鸣区"}, {value: "隆安县", label: "隆安县"}, {
                        value: "马山县",
                        label: "马山县"
                    }, {value: "上林县", label: "上林县"}, {value: "宾阳县", label: "宾阳县"}, {value: "横县", label: "横县"}],
                    value: "南宁市",
                    label: "南宁市"
                }, {
                    children: [{value: "城中区", label: "城中区"}, {value: "鱼峰区", label: "鱼峰区"}, {
                        value: "柳南区",
                        label: "柳南区"
                    }, {value: "柳北区", label: "柳北区"}, {value: "柳江区", label: "柳江区"}, {
                        value: "柳城县",
                        label: "柳城县"
                    }, {value: "鹿寨县", label: "鹿寨县"}, {value: "融安县", label: "融安县"}, {
                        value: "融水苗族自治县",
                        label: "融水苗族自治县"
                    }, {value: "三江侗族自治县", label: "三江侗族自治县"}], value: "柳州市", label: "柳州市"
                }, {
                    children: [{value: "秀峰区", label: "秀峰区"}, {value: "叠彩区", label: "叠彩区"}, {
                        value: "象山区",
                        label: "象山区"
                    }, {value: "七星区", label: "七星区"}, {value: "雁山区", label: "雁山区"}, {
                        value: "临桂区",
                        label: "临桂区"
                    }, {value: "阳朔县", label: "阳朔县"}, {value: "灵川县", label: "灵川县"}, {
                        value: "全州县",
                        label: "全州县"
                    }, {value: "兴安县", label: "兴安县"}, {value: "永福县", label: "永福县"}, {
                        value: "灌阳县",
                        label: "灌阳县"
                    }, {value: "龙胜各族自治县", label: "龙胜各族自治县"}, {value: "资源县", label: "资源县"}, {
                        value: "平乐县",
                        label: "平乐县"
                    }, {value: "荔浦县", label: "荔浦县"}, {value: "恭城瑶族自治县", label: "恭城瑶族自治县"}], value: "桂林市", label: "桂林市"
                }, {
                    children: [{value: "万秀区", label: "万秀区"}, {value: "长洲区", label: "长洲区"}, {
                        value: "龙圩区",
                        label: "龙圩区"
                    }, {value: "苍梧县", label: "苍梧县"}, {value: "藤县", label: "藤县"}, {
                        value: "蒙山县",
                        label: "蒙山县"
                    }, {value: "岑溪市", label: "岑溪市"}], value: "梧州市", label: "梧州市"
                }, {
                    children: [{value: "海城区", label: "海城区"}, {value: "银海区", label: "银海区"}, {
                        value: "铁山港区",
                        label: "铁山港区"
                    }, {value: "合浦县", label: "合浦县"}], value: "北海市", label: "北海市"
                }, {
                    children: [{value: "港口区", label: "港口区"}, {value: "防城区", label: "防城区"}, {
                        value: "上思县",
                        label: "上思县"
                    }, {value: "东兴市", label: "东兴市"}], value: "防城港市", label: "防城港市"
                }, {
                    children: [{value: "钦南区", label: "钦南区"}, {value: "钦北区", label: "钦北区"}, {
                        value: "灵山县",
                        label: "灵山县"
                    }, {value: "浦北县", label: "浦北县"}], value: "钦州市", label: "钦州市"
                }, {
                    children: [{value: "港北区", label: "港北区"}, {value: "港南区", label: "港南区"}, {
                        value: "覃塘区",
                        label: "覃塘区"
                    }, {value: "平南县", label: "平南县"}, {value: "桂平市", label: "桂平市"}], value: "贵港市", label: "贵港市"
                }, {
                    children: [{value: "玉州区", label: "玉州区"}, {value: "福绵区", label: "福绵区"}, {
                        value: "容县",
                        label: "容县"
                    }, {value: "陆川县", label: "陆川县"}, {value: "博白县", label: "博白县"}, {
                        value: "兴业县",
                        label: "兴业县"
                    }, {value: "北流市", label: "北流市"}], value: "玉林市", label: "玉林市"
                }, {
                    children: [{value: "右江区", label: "右江区"}, {value: "田阳县", label: "田阳县"}, {
                        value: "田东县",
                        label: "田东县"
                    }, {value: "平果县", label: "平果县"}, {value: "德保县", label: "德保县"}, {
                        value: "那坡县",
                        label: "那坡县"
                    }, {value: "凌云县", label: "凌云县"}, {value: "乐业县", label: "乐业县"}, {
                        value: "田林县",
                        label: "田林县"
                    }, {value: "西林县", label: "西林县"}, {value: "隆林各族自治县", label: "隆林各族自治县"}, {value: "靖西市", label: "靖西市"}],
                    value: "百色市",
                    label: "百色市"
                }, {
                    children: [{value: "八步区", label: "八步区"}, {value: "平桂区", label: "平桂区"}, {
                        value: "昭平县",
                        label: "昭平县"
                    }, {value: "钟山县", label: "钟山县"}, {value: "富川瑶族自治县", label: "富川瑶族自治县"}], value: "贺州市", label: "贺州市"
                }, {
                    children: [{value: "金城江区", label: "金城江区"}, {value: "南丹县", label: "南丹县"}, {
                        value: "天峨县",
                        label: "天峨县"
                    }, {value: "凤山县", label: "凤山县"}, {value: "东兰县", label: "东兰县"}, {
                        value: "罗城仫佬族自治县",
                        label: "罗城仫佬族自治县"
                    }, {value: "环江毛南族自治县", label: "环江毛南族自治县"}, {value: "巴马瑶族自治县", label: "巴马瑶族自治县"}, {
                        value: "都安瑶族自治县",
                        label: "都安瑶族自治县"
                    }, {value: "大化瑶族自治县", label: "大化瑶族自治县"}, {value: "宜州市", label: "宜州市"}], value: "河池市", label: "河池市"
                }, {
                    children: [{value: "兴宾区", label: "兴宾区"}, {value: "忻城县", label: "忻城县"}, {
                        value: "象州县",
                        label: "象州县"
                    }, {value: "武宣县", label: "武宣县"}, {value: "金秀瑶族自治县", label: "金秀瑶族自治县"}, {value: "合山市", label: "合山市"}],
                    value: "来宾市",
                    label: "来宾市"
                }, {
                    children: [{value: "江州区", label: "江州区"}, {value: "扶绥县", label: "扶绥县"}, {
                        value: "宁明县",
                        label: "宁明县"
                    }, {value: "龙州县", label: "龙州县"}, {value: "大新县", label: "大新县"}, {
                        value: "天等县",
                        label: "天等县"
                    }, {value: "凭祥市", label: "凭祥市"}], value: "崇左市", label: "崇左市"
                }], value: "广西壮族自治区", label: "广西壮族自治区"
            }, {
                children: [{
                    children: [{value: "秀英区", label: "秀英区"}, {value: "龙华区", label: "龙华区"}, {
                        value: "琼山区",
                        label: "琼山区"
                    }, {value: "美兰区", label: "美兰区"}], value: "海口市", label: "海口市"
                }, {
                    children: [{value: "海棠区", label: "海棠区"}, {value: "吉阳区", label: "吉阳区"}, {
                        value: "天涯区",
                        label: "天涯区"
                    }, {value: "崖州区", label: "崖州区"}], value: "三亚市", label: "三亚市"
                }, {value: "三沙市", label: "三沙市"}, {value: "儋州市", label: "儋州市"}, {
                    value: "五指山市",
                    label: "五指山市"
                }, {value: "琼海市", label: "琼海市"}, {value: "文昌市", label: "文昌市"}, {value: "万宁市", label: "万宁市"}, {
                    value: "东方市",
                    label: "东方市"
                }, {value: "定安县", label: "定安县"}, {value: "屯昌县", label: "屯昌县"}, {value: "澄迈县", label: "澄迈县"}, {
                    value: "临高县",
                    label: "临高县"
                }, {value: "白沙黎族自治县", label: "白沙黎族自治县"}, {value: "昌江黎族自治县", label: "昌江黎族自治县"}, {
                    value: "乐东黎族自治县",
                    label: "乐东黎族自治县"
                }, {value: "陵水黎族自治县", label: "陵水黎族自治县"}, {value: "保亭黎族苗族自治县", label: "保亭黎族苗族自治县"}, {
                    value: "琼中黎族苗族自治县",
                    label: "琼中黎族苗族自治县"
                }], value: "海南省", label: "海南省"
            }, {
                children: [{value: "万州区", label: "万州区"}, {value: "涪陵区", label: "涪陵区"}, {
                    value: "渝中区",
                    label: "渝中区"
                }, {value: "大渡口区", label: "大渡口区"}, {value: "江北区", label: "江北区"}, {
                    value: "沙坪坝区",
                    label: "沙坪坝区"
                }, {value: "九龙坡区", label: "九龙坡区"}, {value: "南岸区", label: "南岸区"}, {
                    value: "北碚区",
                    label: "北碚区"
                }, {value: "綦江区", label: "綦江区"}, {value: "大足区", label: "大足区"}, {value: "渝北区", label: "渝北区"}, {
                    value: "巴南区",
                    label: "巴南区"
                }, {value: "黔江区", label: "黔江区"}, {value: "长寿区", label: "长寿区"}, {value: "江津区", label: "江津区"}, {
                    value: "合川区",
                    label: "合川区"
                }, {value: "永川区", label: "永川区"}, {value: "南川区", label: "南川区"}, {value: "璧山区", label: "璧山区"}, {
                    value: "铜梁区",
                    label: "铜梁区"
                }, {value: "潼南区", label: "潼南区"}, {value: "荣昌区", label: "荣昌区"}, {value: "开州区", label: "开州区"}, {
                    value: "梁平县",
                    label: "梁平县"
                }, {value: "城口县", label: "城口县"}, {value: "丰都县", label: "丰都县"}, {value: "垫江县", label: "垫江县"}, {
                    value: "武隆县",
                    label: "武隆县"
                }, {value: "忠县", label: "忠县"}, {value: "云阳县", label: "云阳县"}, {value: "奉节县", label: "奉节县"}, {
                    value: "巫山县",
                    label: "巫山县"
                }, {value: "巫溪县", label: "巫溪县"}, {value: "石柱土家族自治县", label: "石柱土家族自治县"}, {
                    value: "秀山土家族苗族自治县",
                    label: "秀山土家族苗族自治县"
                }, {value: "酉阳土家族苗族自治县", label: "酉阳土家族苗族自治县"}, {value: "彭水苗族土家族自治县", label: "彭水苗族土家族自治县"}],
                value: "重庆市",
                label: "重庆市"
            }, {
                children: [{
                    children: [{value: "锦江区", label: "锦江区"}, {value: "青羊区", label: "青羊区"}, {
                        value: "金牛区",
                        label: "金牛区"
                    }, {value: "武侯区", label: "武侯区"}, {value: "成华区", label: "成华区"}, {
                        value: "龙泉驿区",
                        label: "龙泉驿区"
                    }, {value: "青白江区", label: "青白江区"}, {value: "新都区", label: "新都区"}, {
                        value: "温江区",
                        label: "温江区"
                    }, {value: "双流区", label: "双流区"}, {value: "金堂县", label: "金堂县"}, {
                        value: "郫县",
                        label: "郫县"
                    }, {value: "大邑县", label: "大邑县"}, {value: "蒲江县", label: "蒲江县"}, {
                        value: "新津县",
                        label: "新津县"
                    }, {value: "都江堰市", label: "都江堰市"}, {value: "彭州市", label: "彭州市"}, {
                        value: "邛崃市",
                        label: "邛崃市"
                    }, {value: "崇州市", label: "崇州市"}, {value: "简阳市", label: "简阳市"}], value: "成都市", label: "成都市"
                }, {
                    children: [{value: "自流井区", label: "自流井区"}, {value: "贡井区", label: "贡井区"}, {
                        value: "大安区",
                        label: "大安区"
                    }, {value: "沿滩区", label: "沿滩区"}, {value: "荣县", label: "荣县"}, {value: "富顺县", label: "富顺县"}],
                    value: "自贡市",
                    label: "自贡市"
                }, {
                    children: [{value: "东区", label: "东区"}, {value: "西区", label: "西区"}, {
                        value: "仁和区",
                        label: "仁和区"
                    }, {value: "米易县", label: "米易县"}, {value: "盐边县", label: "盐边县"}], value: "攀枝花市", label: "攀枝花市"
                }, {
                    children: [{value: "江阳区", label: "江阳区"}, {value: "纳溪区", label: "纳溪区"}, {
                        value: "龙马潭区",
                        label: "龙马潭区"
                    }, {value: "泸县", label: "泸县"}, {value: "合江县", label: "合江县"}, {
                        value: "叙永县",
                        label: "叙永县"
                    }, {value: "古蔺县", label: "古蔺县"}], value: "泸州市", label: "泸州市"
                }, {
                    children: [{value: "旌阳区", label: "旌阳区"}, {value: "中江县", label: "中江县"}, {
                        value: "罗江县",
                        label: "罗江县"
                    }, {value: "广汉市", label: "广汉市"}, {value: "什邡市", label: "什邡市"}, {value: "绵竹市", label: "绵竹市"}],
                    value: "德阳市",
                    label: "德阳市"
                }, {
                    children: [{value: "涪城区", label: "涪城区"}, {value: "游仙区", label: "游仙区"}, {
                        value: "安州区",
                        label: "安州区"
                    }, {value: "三台县", label: "三台县"}, {value: "盐亭县", label: "盐亭县"}, {
                        value: "梓潼县",
                        label: "梓潼县"
                    }, {value: "北川羌族自治县", label: "北川羌族自治县"}, {value: "平武县", label: "平武县"}, {value: "江油市", label: "江油市"}],
                    value: "绵阳市",
                    label: "绵阳市"
                }, {
                    children: [{value: "利州区", label: "利州区"}, {value: "昭化区", label: "昭化区"}, {
                        value: "朝天区",
                        label: "朝天区"
                    }, {value: "旺苍县", label: "旺苍县"}, {value: "青川县", label: "青川县"}, {
                        value: "剑阁县",
                        label: "剑阁县"
                    }, {value: "苍溪县", label: "苍溪县"}], value: "广元市", label: "广元市"
                }, {
                    children: [{value: "船山区", label: "船山区"}, {value: "安居区", label: "安居区"}, {
                        value: "蓬溪县",
                        label: "蓬溪县"
                    }, {value: "射洪县", label: "射洪县"}, {value: "大英县", label: "大英县"}], value: "遂宁市", label: "遂宁市"
                }, {
                    children: [{value: "市中区", label: "市中区"}, {value: "东兴区", label: "东兴区"}, {
                        value: "威远县",
                        label: "威远县"
                    }, {value: "资中县", label: "资中县"}, {value: "隆昌县", label: "隆昌县"}], value: "内江市", label: "内江市"
                }, {
                    children: [{value: "市中区", label: "市中区"}, {value: "沙湾区", label: "沙湾区"}, {
                        value: "五通桥区",
                        label: "五通桥区"
                    }, {value: "金口河区", label: "金口河区"}, {value: "犍为县", label: "犍为县"}, {
                        value: "井研县",
                        label: "井研县"
                    }, {value: "夹江县", label: "夹江县"}, {value: "沐川县", label: "沐川县"}, {
                        value: "峨边彝族自治县",
                        label: "峨边彝族自治县"
                    }, {value: "马边彝族自治县", label: "马边彝族自治县"}, {value: "峨眉山市", label: "峨眉山市"}], value: "乐山市", label: "乐山市"
                }, {
                    children: [{value: "顺庆区", label: "顺庆区"}, {value: "高坪区", label: "高坪区"}, {
                        value: "嘉陵区",
                        label: "嘉陵区"
                    }, {value: "南部县", label: "南部县"}, {value: "营山县", label: "营山县"}, {
                        value: "蓬安县",
                        label: "蓬安县"
                    }, {value: "仪陇县", label: "仪陇县"}, {value: "西充县", label: "西充县"}, {value: "阆中市", label: "阆中市"}],
                    value: "南充市",
                    label: "南充市"
                }, {
                    children: [{value: "东坡区", label: "东坡区"}, {value: "彭山区", label: "彭山区"}, {
                        value: "仁寿县",
                        label: "仁寿县"
                    }, {value: "洪雅县", label: "洪雅县"}, {value: "丹棱县", label: "丹棱县"}, {value: "青神县", label: "青神县"}],
                    value: "眉山市",
                    label: "眉山市"
                }, {
                    children: [{value: "翠屏区", label: "翠屏区"}, {value: "南溪区", label: "南溪区"}, {
                        value: "宜宾县",
                        label: "宜宾县"
                    }, {value: "江安县", label: "江安县"}, {value: "长宁县", label: "长宁县"}, {value: "高县", label: "高县"}, {
                        value: "珙县",
                        label: "珙县"
                    }, {value: "筠连县", label: "筠连县"}, {value: "兴文县", label: "兴文县"}, {value: "屏山县", label: "屏山县"}],
                    value: "宜宾市",
                    label: "宜宾市"
                }, {
                    children: [{value: "广安区", label: "广安区"}, {value: "前锋区", label: "前锋区"}, {
                        value: "岳池县",
                        label: "岳池县"
                    }, {value: "武胜县", label: "武胜县"}, {value: "邻水县", label: "邻水县"}, {value: "华蓥市", label: "华蓥市"}],
                    value: "广安市",
                    label: "广安市"
                }, {
                    children: [{value: "通川区", label: "通川区"}, {value: "达川区", label: "达川区"}, {
                        value: "宣汉县",
                        label: "宣汉县"
                    }, {value: "开江县", label: "开江县"}, {value: "大竹县", label: "大竹县"}, {
                        value: "渠县",
                        label: "渠县"
                    }, {value: "万源市", label: "万源市"}], value: "达州市", label: "达州市"
                }, {
                    children: [{value: "雨城区", label: "雨城区"}, {value: "名山区", label: "名山区"}, {
                        value: "荥经县",
                        label: "荥经县"
                    }, {value: "汉源县", label: "汉源县"}, {value: "石棉县", label: "石棉县"}, {
                        value: "天全县",
                        label: "天全县"
                    }, {value: "芦山县", label: "芦山县"}, {value: "宝兴县", label: "宝兴县"}], value: "雅安市", label: "雅安市"
                }, {
                    children: [{value: "巴州区", label: "巴州区"}, {value: "恩阳区", label: "恩阳区"}, {
                        value: "通江县",
                        label: "通江县"
                    }, {value: "南江县", label: "南江县"}, {value: "平昌县", label: "平昌县"}], value: "巴中市", label: "巴中市"
                }, {
                    children: [{value: "雁江区", label: "雁江区"}, {value: "安岳县", label: "安岳县"}, {value: "乐至县", label: "乐至县"}],
                    value: "资阳市",
                    label: "资阳市"
                }, {
                    children: [{value: "马尔康市", label: "马尔康市"}, {value: "汶川县", label: "汶川县"}, {
                        value: "理县",
                        label: "理县"
                    }, {value: "茂县", label: "茂县"}, {value: "松潘县", label: "松潘县"}, {
                        value: "九寨沟县",
                        label: "九寨沟县"
                    }, {value: "金川县", label: "金川县"}, {value: "小金县", label: "小金县"}, {
                        value: "黑水县",
                        label: "黑水县"
                    }, {value: "壤塘县", label: "壤塘县"}, {value: "阿坝县", label: "阿坝县"}, {
                        value: "若尔盖县",
                        label: "若尔盖县"
                    }, {value: "红原县", label: "红原县"}], value: "阿坝藏族羌族自治州", label: "阿坝藏族羌族自治州"
                }, {
                    children: [{value: "康定市", label: "康定市"}, {value: "泸定县", label: "泸定县"}, {
                        value: "丹巴县",
                        label: "丹巴县"
                    }, {value: "九龙县", label: "九龙县"}, {value: "雅江县", label: "雅江县"}, {
                        value: "道孚县",
                        label: "道孚县"
                    }, {value: "炉霍县", label: "炉霍县"}, {value: "甘孜县", label: "甘孜县"}, {
                        value: "新龙县",
                        label: "新龙县"
                    }, {value: "德格县", label: "德格县"}, {value: "白玉县", label: "白玉县"}, {
                        value: "石渠县",
                        label: "石渠县"
                    }, {value: "色达县", label: "色达县"}, {value: "理塘县", label: "理塘县"}, {
                        value: "巴塘县",
                        label: "巴塘县"
                    }, {value: "乡城县", label: "乡城县"}, {value: "稻城县", label: "稻城县"}, {value: "得荣县", label: "得荣县"}],
                    value: "甘孜藏族自治州",
                    label: "甘孜藏族自治州"
                }, {
                    children: [{value: "西昌市", label: "西昌市"}, {value: "木里藏族自治县", label: "木里藏族自治县"}, {
                        value: "盐源县",
                        label: "盐源县"
                    }, {value: "德昌县", label: "德昌县"}, {value: "会理县", label: "会理县"}, {
                        value: "会东县",
                        label: "会东县"
                    }, {value: "宁南县", label: "宁南县"}, {value: "普格县", label: "普格县"}, {
                        value: "布拖县",
                        label: "布拖县"
                    }, {value: "金阳县", label: "金阳县"}, {value: "昭觉县", label: "昭觉县"}, {
                        value: "喜德县",
                        label: "喜德县"
                    }, {value: "冕宁县", label: "冕宁县"}, {value: "越西县", label: "越西县"}, {
                        value: "甘洛县",
                        label: "甘洛县"
                    }, {value: "美姑县", label: "美姑县"}, {value: "雷波县", label: "雷波县"}], value: "凉山彝族自治州", label: "凉山彝族自治州"
                }], value: "四川省", label: "四川省"
            }, {
                children: [{
                    children: [{value: "南明区", label: "南明区"}, {value: "云岩区", label: "云岩区"}, {
                        value: "花溪区",
                        label: "花溪区"
                    }, {value: "乌当区", label: "乌当区"}, {value: "白云区", label: "白云区"}, {
                        value: "观山湖区",
                        label: "观山湖区"
                    }, {value: "开阳县", label: "开阳县"}, {value: "息烽县", label: "息烽县"}, {
                        value: "修文县",
                        label: "修文县"
                    }, {value: "清镇市", label: "清镇市"}], value: "贵阳市", label: "贵阳市"
                }, {
                    children: [{value: "钟山区", label: "钟山区"}, {value: "六枝特区", label: "六枝特区"}, {
                        value: "水城县",
                        label: "水城县"
                    }, {value: "盘县", label: "盘县"}], value: "六盘水市", label: "六盘水市"
                }, {
                    children: [{value: "红花岗区", label: "红花岗区"}, {value: "汇川区", label: "汇川区"}, {
                        value: "播州区",
                        label: "播州区"
                    }, {value: "桐梓县", label: "桐梓县"}, {value: "绥阳县", label: "绥阳县"}, {
                        value: "正安县",
                        label: "正安县"
                    }, {value: "道真仡佬族苗族自治县", label: "道真仡佬族苗族自治县"}, {
                        value: "务川仡佬族苗族自治县",
                        label: "务川仡佬族苗族自治县"
                    }, {value: "凤冈县", label: "凤冈县"}, {value: "湄潭县", label: "湄潭县"}, {
                        value: "余庆县",
                        label: "余庆县"
                    }, {value: "习水县", label: "习水县"}, {value: "赤水市", label: "赤水市"}, {value: "仁怀市", label: "仁怀市"}],
                    value: "遵义市",
                    label: "遵义市"
                }, {
                    children: [{value: "西秀区", label: "西秀区"}, {value: "平坝区", label: "平坝区"}, {
                        value: "普定县",
                        label: "普定县"
                    }, {value: "镇宁布依族苗族自治县", label: "镇宁布依族苗族自治县"}, {
                        value: "关岭布依族苗族自治县",
                        label: "关岭布依族苗族自治县"
                    }, {value: "紫云苗族布依族自治县", label: "紫云苗族布依族自治县"}], value: "安顺市", label: "安顺市"
                }, {
                    children: [{value: "七星关区", label: "七星关区"}, {value: "大方县", label: "大方县"}, {
                        value: "黔西县",
                        label: "黔西县"
                    }, {value: "金沙县", label: "金沙县"}, {value: "织金县", label: "织金县"}, {
                        value: "纳雍县",
                        label: "纳雍县"
                    }, {value: "威宁彝族回族苗族自治县", label: "威宁彝族回族苗族自治县"}, {value: "赫章县", label: "赫章县"}],
                    value: "毕节市",
                    label: "毕节市"
                }, {
                    children: [{value: "碧江区", label: "碧江区"}, {value: "万山区", label: "万山区"}, {
                        value: "江口县",
                        label: "江口县"
                    }, {value: "玉屏侗族自治县", label: "玉屏侗族自治县"}, {value: "石阡县", label: "石阡县"}, {
                        value: "思南县",
                        label: "思南县"
                    }, {value: "印江土家族苗族自治县", label: "印江土家族苗族自治县"}, {value: "德江县", label: "德江县"}, {
                        value: "沿河土家族自治县",
                        label: "沿河土家族自治县"
                    }, {value: "松桃苗族自治县", label: "松桃苗族自治县"}], value: "铜仁市", label: "铜仁市"
                }, {
                    children: [{value: "兴义市", label: "兴义市"}, {value: "兴仁县", label: "兴仁县"}, {
                        value: "普安县",
                        label: "普安县"
                    }, {value: "晴隆县", label: "晴隆县"}, {value: "贞丰县", label: "贞丰县"}, {
                        value: "望谟县",
                        label: "望谟县"
                    }, {value: "册亨县", label: "册亨县"}, {value: "安龙县", label: "安龙县"}],
                    value: "黔西南布依族苗族自治州",
                    label: "黔西南布依族苗族自治州"
                }, {
                    children: [{value: "凯里市", label: "凯里市"}, {value: "黄平县", label: "黄平县"}, {
                        value: "施秉县",
                        label: "施秉县"
                    }, {value: "三穗县", label: "三穗县"}, {value: "镇远县", label: "镇远县"}, {
                        value: "岑巩县",
                        label: "岑巩县"
                    }, {value: "天柱县", label: "天柱县"}, {value: "锦屏县", label: "锦屏县"}, {
                        value: "剑河县",
                        label: "剑河县"
                    }, {value: "台江县", label: "台江县"}, {value: "黎平县", label: "黎平县"}, {
                        value: "榕江县",
                        label: "榕江县"
                    }, {value: "从江县", label: "从江县"}, {value: "雷山县", label: "雷山县"}, {
                        value: "麻江县",
                        label: "麻江县"
                    }, {value: "丹寨县", label: "丹寨县"}], value: "黔东南苗族侗族自治州", label: "黔东南苗族侗族自治州"
                }, {
                    children: [{value: "都匀市", label: "都匀市"}, {value: "福泉市", label: "福泉市"}, {
                        value: "荔波县",
                        label: "荔波县"
                    }, {value: "贵定县", label: "贵定县"}, {value: "瓮安县", label: "瓮安县"}, {
                        value: "独山县",
                        label: "独山县"
                    }, {value: "平塘县", label: "平塘县"}, {value: "罗甸县", label: "罗甸县"}, {
                        value: "长顺县",
                        label: "长顺县"
                    }, {value: "龙里县", label: "龙里县"}, {value: "惠水县", label: "惠水县"}, {value: "三都水族自治县", label: "三都水族自治县"}],
                    value: "黔南布依族苗族自治州",
                    label: "黔南布依族苗族自治州"
                }], value: "贵州省", label: "贵州省"
            }, {
                children: [{
                    children: [{value: "五华区", label: "五华区"}, {value: "盘龙区", label: "盘龙区"}, {
                        value: "官渡区",
                        label: "官渡区"
                    }, {value: "西山区", label: "西山区"}, {value: "东川区", label: "东川区"}, {
                        value: "呈贡区",
                        label: "呈贡区"
                    }, {value: "晋宁县", label: "晋宁县"}, {value: "富民县", label: "富民县"}, {
                        value: "宜良县",
                        label: "宜良县"
                    }, {value: "石林彝族自治县", label: "石林彝族自治县"}, {value: "嵩明县", label: "嵩明县"}, {
                        value: "禄劝彝族苗族自治县",
                        label: "禄劝彝族苗族自治县"
                    }, {value: "寻甸回族彝族自治县", label: "寻甸回族彝族自治县"}, {value: "安宁市", label: "安宁市"}], value: "昆明市", label: "昆明市"
                }, {
                    children: [{value: "麒麟区", label: "麒麟区"}, {value: "沾益区", label: "沾益区"}, {
                        value: "马龙县",
                        label: "马龙县"
                    }, {value: "陆良县", label: "陆良县"}, {value: "师宗县", label: "师宗县"}, {
                        value: "罗平县",
                        label: "罗平县"
                    }, {value: "富源县", label: "富源县"}, {value: "会泽县", label: "会泽县"}, {value: "宣威市", label: "宣威市"}],
                    value: "曲靖市",
                    label: "曲靖市"
                }, {
                    children: [{value: "红塔区", label: "红塔区"}, {value: "江川区", label: "江川区"}, {
                        value: "澄江县",
                        label: "澄江县"
                    }, {value: "通海县", label: "通海县"}, {value: "华宁县", label: "华宁县"}, {
                        value: "易门县",
                        label: "易门县"
                    }, {value: "峨山彝族自治县", label: "峨山彝族自治县"}, {
                        value: "新平彝族傣族自治县",
                        label: "新平彝族傣族自治县"
                    }, {value: "元江哈尼族彝族傣族自治县", label: "元江哈尼族彝族傣族自治县"}], value: "玉溪市", label: "玉溪市"
                }, {
                    children: [{value: "隆阳区", label: "隆阳区"}, {value: "施甸县", label: "施甸县"}, {
                        value: "龙陵县",
                        label: "龙陵县"
                    }, {value: "昌宁县", label: "昌宁县"}, {value: "腾冲市", label: "腾冲市"}], value: "保山市", label: "保山市"
                }, {
                    children: [{value: "昭阳区", label: "昭阳区"}, {value: "鲁甸县", label: "鲁甸县"}, {
                        value: "巧家县",
                        label: "巧家县"
                    }, {value: "盐津县", label: "盐津县"}, {value: "大关县", label: "大关县"}, {
                        value: "永善县",
                        label: "永善县"
                    }, {value: "绥江县", label: "绥江县"}, {value: "镇雄县", label: "镇雄县"}, {
                        value: "彝良县",
                        label: "彝良县"
                    }, {value: "威信县", label: "威信县"}, {value: "水富县", label: "水富县"}], value: "昭通市", label: "昭通市"
                }, {
                    children: [{value: "古城区", label: "古城区"}, {value: "玉龙纳西族自治县", label: "玉龙纳西族自治县"}, {
                        value: "永胜县",
                        label: "永胜县"
                    }, {value: "华坪县", label: "华坪县"}, {value: "宁蒗彝族自治县", label: "宁蒗彝族自治县"}], value: "丽江市", label: "丽江市"
                }, {
                    children: [{value: "思茅区", label: "思茅区"}, {value: "宁洱哈尼族彝族自治县", label: "宁洱哈尼族彝族自治县"}, {
                        value: "墨江哈尼族自治县",
                        label: "墨江哈尼族自治县"
                    }, {value: "景东彝族自治县", label: "景东彝族自治县"}, {
                        value: "景谷傣族彝族自治县",
                        label: "景谷傣族彝族自治县"
                    }, {value: "镇沅彝族哈尼族拉祜族自治县", label: "镇沅彝族哈尼族拉祜族自治县"}, {
                        value: "江城哈尼族彝族自治县",
                        label: "江城哈尼族彝族自治县"
                    }, {value: "孟连傣族拉祜族佤族自治县", label: "孟连傣族拉祜族佤族自治县"}, {
                        value: "澜沧拉祜族自治县",
                        label: "澜沧拉祜族自治县"
                    }, {value: "西盟佤族自治县", label: "西盟佤族自治县"}], value: "普洱市", label: "普洱市"
                }, {
                    children: [{value: "临翔区", label: "临翔区"}, {value: "凤庆县", label: "凤庆县"}, {
                        value: "云县",
                        label: "云县"
                    }, {value: "永德县", label: "永德县"}, {value: "镇康县", label: "镇康县"}, {
                        value: "双江拉祜族佤族布朗族傣族自治县",
                        label: "双江拉祜族佤族布朗族傣族自治县"
                    }, {value: "耿马傣族佤族自治县", label: "耿马傣族佤族自治县"}, {value: "沧源佤族自治县", label: "沧源佤族自治县"}],
                    value: "临沧市",
                    label: "临沧市"
                }, {
                    children: [{value: "楚雄市", label: "楚雄市"}, {value: "双柏县", label: "双柏县"}, {
                        value: "牟定县",
                        label: "牟定县"
                    }, {value: "南华县", label: "南华县"}, {value: "姚安县", label: "姚安县"}, {
                        value: "大姚县",
                        label: "大姚县"
                    }, {value: "永仁县", label: "永仁县"}, {value: "元谋县", label: "元谋县"}, {
                        value: "武定县",
                        label: "武定县"
                    }, {value: "禄丰县", label: "禄丰县"}], value: "楚雄彝族自治州", label: "楚雄彝族自治州"
                }, {
                    children: [{value: "个旧市", label: "个旧市"}, {value: "开远市", label: "开远市"}, {
                        value: "蒙自市",
                        label: "蒙自市"
                    }, {value: "弥勒市", label: "弥勒市"}, {value: "屏边苗族自治县", label: "屏边苗族自治县"}, {
                        value: "建水县",
                        label: "建水县"
                    }, {value: "石屏县", label: "石屏县"}, {value: "泸西县", label: "泸西县"}, {
                        value: "元阳县",
                        label: "元阳县"
                    }, {value: "红河县", label: "红河县"}, {value: "金平苗族瑶族傣族自治县", label: "金平苗族瑶族傣族自治县"}, {
                        value: "绿春县",
                        label: "绿春县"
                    }, {value: "河口瑶族自治县", label: "河口瑶族自治县"}], value: "红河哈尼族彝族自治州", label: "红河哈尼族彝族自治州"
                }, {
                    children: [{value: "文山市", label: "文山市"}, {value: "砚山县", label: "砚山县"}, {
                        value: "西畴县",
                        label: "西畴县"
                    }, {value: "麻栗坡县", label: "麻栗坡县"}, {value: "马关县", label: "马关县"}, {
                        value: "丘北县",
                        label: "丘北县"
                    }, {value: "广南县", label: "广南县"}, {value: "富宁县", label: "富宁县"}], value: "文山壮族苗族自治州", label: "文山壮族苗族自治州"
                }, {
                    children: [{value: "景洪市", label: "景洪市"}, {value: "勐海县", label: "勐海县"}, {value: "勐腊县", label: "勐腊县"}],
                    value: "西双版纳傣族自治州",
                    label: "西双版纳傣族自治州"
                }, {
                    children: [{value: "大理市", label: "大理市"}, {value: "漾濞彝族自治县", label: "漾濞彝族自治县"}, {
                        value: "祥云县",
                        label: "祥云县"
                    }, {value: "宾川县", label: "宾川县"}, {value: "弥渡县", label: "弥渡县"}, {
                        value: "南涧彝族自治县",
                        label: "南涧彝族自治县"
                    }, {value: "巍山彝族回族自治县", label: "巍山彝族回族自治县"}, {value: "永平县", label: "永平县"}, {
                        value: "云龙县",
                        label: "云龙县"
                    }, {value: "洱源县", label: "洱源县"}, {value: "剑川县", label: "剑川县"}, {value: "鹤庆县", label: "鹤庆县"}],
                    value: "大理白族自治州",
                    label: "大理白族自治州"
                }, {
                    children: [{value: "瑞丽市", label: "瑞丽市"}, {value: "芒市", label: "芒市"}, {
                        value: "梁河县",
                        label: "梁河县"
                    }, {value: "盈江县", label: "盈江县"}, {value: "陇川县", label: "陇川县"}], value: "德宏傣族景颇族自治州", label: "德宏傣族景颇族自治州"
                }, {
                    children: [{value: "泸水市", label: "泸水市"}, {value: "福贡县", label: "福贡县"}, {
                        value: "贡山独龙族怒族自治县",
                        label: "贡山独龙族怒族自治县"
                    }, {value: "兰坪白族普米族自治县", label: "兰坪白族普米族自治县"}], value: "怒江傈僳族自治州", label: "怒江傈僳族自治州"
                }, {
                    children: [{value: "香格里拉市", label: "香格里拉市"}, {value: "德钦县", label: "德钦县"}, {
                        value: "维西傈僳族自治县",
                        label: "维西傈僳族自治县"
                    }], value: "迪庆藏族自治州", label: "迪庆藏族自治州"
                }], value: "云南省", label: "云南省"
            }, {
                children: [{
                    children: [{value: "城关区", label: "城关区"}, {value: "堆龙德庆区", label: "堆龙德庆区"}, {
                        value: "林周县",
                        label: "林周县"
                    }, {value: "当雄县", label: "当雄县"}, {value: "尼木县", label: "尼木县"}, {
                        value: "曲水县",
                        label: "曲水县"
                    }, {value: "达孜县", label: "达孜县"}, {value: "墨竹工卡县", label: "墨竹工卡县"}], value: "拉萨市", label: "拉萨市"
                }, {
                    children: [{value: "桑珠孜区", label: "桑珠孜区"}, {value: "南木林县", label: "南木林县"}, {
                        value: "江孜县",
                        label: "江孜县"
                    }, {value: "定日县", label: "定日县"}, {value: "萨迦县", label: "萨迦县"}, {
                        value: "拉孜县",
                        label: "拉孜县"
                    }, {value: "昂仁县", label: "昂仁县"}, {value: "谢通门县", label: "谢通门县"}, {
                        value: "白朗县",
                        label: "白朗县"
                    }, {value: "仁布县", label: "仁布县"}, {value: "康马县", label: "康马县"}, {
                        value: "定结县",
                        label: "定结县"
                    }, {value: "仲巴县", label: "仲巴县"}, {value: "亚东县", label: "亚东县"}, {
                        value: "吉隆县",
                        label: "吉隆县"
                    }, {value: "聂拉木县", label: "聂拉木县"}, {value: "萨嘎县", label: "萨嘎县"}, {value: "岗巴县", label: "岗巴县"}],
                    value: "日喀则市",
                    label: "日喀则市"
                }, {
                    children: [{value: "卡若区", label: "卡若区"}, {value: "江达县", label: "江达县"}, {
                        value: "贡觉县",
                        label: "贡觉县"
                    }, {value: "类乌齐县", label: "类乌齐县"}, {value: "丁青县", label: "丁青县"}, {
                        value: "察雅县",
                        label: "察雅县"
                    }, {value: "八宿县", label: "八宿县"}, {value: "左贡县", label: "左贡县"}, {
                        value: "芒康县",
                        label: "芒康县"
                    }, {value: "洛隆县", label: "洛隆县"}, {value: "边坝县", label: "边坝县"}], value: "昌都市", label: "昌都市"
                }, {
                    children: [{value: "巴宜区", label: "巴宜区"}, {value: "工布江达县", label: "工布江达县"}, {
                        value: "米林县",
                        label: "米林县"
                    }, {value: "墨脱县", label: "墨脱县"}, {value: "波密县", label: "波密县"}, {
                        value: "察隅县",
                        label: "察隅县"
                    }, {value: "朗县", label: "朗县"}], value: "林芝市", label: "林芝市"
                }, {
                    children: [{value: "乃东区", label: "乃东区"}, {value: "扎囊县", label: "扎囊县"}, {
                        value: "贡嘎县",
                        label: "贡嘎县"
                    }, {value: "桑日县", label: "桑日县"}, {value: "琼结县", label: "琼结县"}, {
                        value: "曲松县",
                        label: "曲松县"
                    }, {value: "措美县", label: "措美县"}, {value: "洛扎县", label: "洛扎县"}, {
                        value: "加查县",
                        label: "加查县"
                    }, {value: "隆子县", label: "隆子县"}, {value: "错那县", label: "错那县"}, {value: "浪卡子县", label: "浪卡子县"}],
                    value: "山南市",
                    label: "山南市"
                }, {
                    children: [{value: "那曲县", label: "那曲县"}, {value: "嘉黎县", label: "嘉黎县"}, {
                        value: "比如县",
                        label: "比如县"
                    }, {value: "聂荣县", label: "聂荣县"}, {value: "安多县", label: "安多县"}, {
                        value: "申扎县",
                        label: "申扎县"
                    }, {value: "索县", label: "索县"}, {value: "班戈县", label: "班戈县"}, {
                        value: "巴青县",
                        label: "巴青县"
                    }, {value: "尼玛县", label: "尼玛县"}, {value: "双湖县", label: "双湖县"}], value: "那曲地区", label: "那曲地区"
                }, {
                    children: [{value: "普兰县", label: "普兰县"}, {value: "札达县", label: "札达县"}, {
                        value: "噶尔县",
                        label: "噶尔县"
                    }, {value: "日土县", label: "日土县"}, {value: "革吉县", label: "革吉县"}, {
                        value: "改则县",
                        label: "改则县"
                    }, {value: "措勤县", label: "措勤县"}], value: "阿里地区", label: "阿里地区"
                }], value: "西藏自治区", label: "西藏自治区"
            }, {
                children: [{
                    children: [{value: "新城区", label: "新城区"}, {value: "碑林区", label: "碑林区"}, {
                        value: "莲湖区",
                        label: "莲湖区"
                    }, {value: "灞桥区", label: "灞桥区"}, {value: "未央区", label: "未央区"}, {
                        value: "雁塔区",
                        label: "雁塔区"
                    }, {value: "阎良区", label: "阎良区"}, {value: "临潼区", label: "临潼区"}, {
                        value: "长安区",
                        label: "长安区"
                    }, {value: "高陵区", label: "高陵区"}, {value: "蓝田县", label: "蓝田县"}, {
                        value: "周至县",
                        label: "周至县"
                    }, {value: "户县", label: "户县"}], value: "西安市", label: "西安市"
                }, {
                    children: [{value: "王益区", label: "王益区"}, {value: "印台区", label: "印台区"}, {
                        value: "耀州区",
                        label: "耀州区"
                    }, {value: "宜君县", label: "宜君县"}], value: "铜川市", label: "铜川市"
                }, {
                    children: [{value: "渭滨区", label: "渭滨区"}, {value: "金台区", label: "金台区"}, {
                        value: "陈仓区",
                        label: "陈仓区"
                    }, {value: "凤翔县", label: "凤翔县"}, {value: "岐山县", label: "岐山县"}, {
                        value: "扶风县",
                        label: "扶风县"
                    }, {value: "眉县", label: "眉县"}, {value: "陇县", label: "陇县"}, {value: "千阳县", label: "千阳县"}, {
                        value: "麟游县",
                        label: "麟游县"
                    }, {value: "凤县", label: "凤县"}, {value: "太白县", label: "太白县"}], value: "宝鸡市", label: "宝鸡市"
                }, {
                    children: [{value: "秦都区", label: "秦都区"}, {value: "杨陵区", label: "杨陵区"}, {
                        value: "渭城区",
                        label: "渭城区"
                    }, {value: "三原县", label: "三原县"}, {value: "泾阳县", label: "泾阳县"}, {
                        value: "乾县",
                        label: "乾县"
                    }, {value: "礼泉县", label: "礼泉县"}, {value: "永寿县", label: "永寿县"}, {
                        value: "彬县",
                        label: "彬县"
                    }, {value: "长武县", label: "长武县"}, {value: "旬邑县", label: "旬邑县"}, {
                        value: "淳化县",
                        label: "淳化县"
                    }, {value: "武功县", label: "武功县"}, {value: "兴平市", label: "兴平市"}], value: "咸阳市", label: "咸阳市"
                }, {
                    children: [{value: "临渭区", label: "临渭区"}, {value: "华州区", label: "华州区"}, {
                        value: "潼关县",
                        label: "潼关县"
                    }, {value: "大荔县", label: "大荔县"}, {value: "合阳县", label: "合阳县"}, {
                        value: "澄城县",
                        label: "澄城县"
                    }, {value: "蒲城县", label: "蒲城县"}, {value: "白水县", label: "白水县"}, {
                        value: "富平县",
                        label: "富平县"
                    }, {value: "韩城市", label: "韩城市"}, {value: "华阴市", label: "华阴市"}], value: "渭南市", label: "渭南市"
                }, {
                    children: [{value: "宝塔区", label: "宝塔区"}, {value: "安塞区", label: "安塞区"}, {
                        value: "延长县",
                        label: "延长县"
                    }, {value: "延川县", label: "延川县"}, {value: "子长县", label: "子长县"}, {
                        value: "志丹县",
                        label: "志丹县"
                    }, {value: "吴起县", label: "吴起县"}, {value: "甘泉县", label: "甘泉县"}, {
                        value: "富县",
                        label: "富县"
                    }, {value: "洛川县", label: "洛川县"}, {value: "宜川县", label: "宜川县"}, {
                        value: "黄龙县",
                        label: "黄龙县"
                    }, {value: "黄陵县", label: "黄陵县"}], value: "延安市", label: "延安市"
                }, {
                    children: [{value: "汉台区", label: "汉台区"}, {value: "南郑县", label: "南郑县"}, {
                        value: "城固县",
                        label: "城固县"
                    }, {value: "洋县", label: "洋县"}, {value: "西乡县", label: "西乡县"}, {value: "勉县", label: "勉县"}, {
                        value: "宁强县",
                        label: "宁强县"
                    }, {value: "略阳县", label: "略阳县"}, {value: "镇巴县", label: "镇巴县"}, {
                        value: "留坝县",
                        label: "留坝县"
                    }, {value: "佛坪县", label: "佛坪县"}], value: "汉中市", label: "汉中市"
                }, {
                    children: [{value: "榆阳区", label: "榆阳区"}, {value: "横山区", label: "横山区"}, {
                        value: "神木县",
                        label: "神木县"
                    }, {value: "府谷县", label: "府谷县"}, {value: "靖边县", label: "靖边县"}, {
                        value: "定边县",
                        label: "定边县"
                    }, {value: "绥德县", label: "绥德县"}, {value: "米脂县", label: "米脂县"}, {
                        value: "佳县",
                        label: "佳县"
                    }, {value: "吴堡县", label: "吴堡县"}, {value: "清涧县", label: "清涧县"}, {value: "子洲县", label: "子洲县"}],
                    value: "榆林市",
                    label: "榆林市"
                }, {
                    children: [{value: "汉滨区", label: "汉滨区"}, {value: "汉阴县", label: "汉阴县"}, {
                        value: "石泉县",
                        label: "石泉县"
                    }, {value: "宁陕县", label: "宁陕县"}, {value: "紫阳县", label: "紫阳县"}, {
                        value: "岚皋县",
                        label: "岚皋县"
                    }, {value: "平利县", label: "平利县"}, {value: "镇坪县", label: "镇坪县"}, {
                        value: "旬阳县",
                        label: "旬阳县"
                    }, {value: "白河县", label: "白河县"}], value: "安康市", label: "安康市"
                }, {
                    children: [{value: "商州区", label: "商州区"}, {value: "洛南县", label: "洛南县"}, {
                        value: "丹凤县",
                        label: "丹凤县"
                    }, {value: "商南县", label: "商南县"}, {value: "山阳县", label: "山阳县"}, {
                        value: "镇安县",
                        label: "镇安县"
                    }, {value: "柞水县", label: "柞水县"}], value: "商洛市", label: "商洛市"
                }], value: "陕西省", label: "陕西省"
            }, {
                children: [{
                    children: [{value: "城关区", label: "城关区"}, {value: "七里河区", label: "七里河区"}, {
                        value: "西固区",
                        label: "西固区"
                    }, {value: "安宁区", label: "安宁区"}, {value: "红古区", label: "红古区"}, {
                        value: "永登县",
                        label: "永登县"
                    }, {value: "皋兰县", label: "皋兰县"}, {value: "榆中县", label: "榆中县"}], value: "兰州市", label: "兰州市"
                }, {value: "嘉峪关市", label: "嘉峪关市"}, {
                    children: [{value: "金川区", label: "金川区"}, {value: "永昌县", label: "永昌县"}],
                    value: "金昌市",
                    label: "金昌市"
                }, {
                    children: [{value: "白银区", label: "白银区"}, {value: "平川区", label: "平川区"}, {
                        value: "靖远县",
                        label: "靖远县"
                    }, {value: "会宁县", label: "会宁县"}, {value: "景泰县", label: "景泰县"}], value: "白银市", label: "白银市"
                }, {
                    children: [{value: "秦州区", label: "秦州区"}, {value: "麦积区", label: "麦积区"}, {
                        value: "清水县",
                        label: "清水县"
                    }, {value: "秦安县", label: "秦安县"}, {value: "甘谷县", label: "甘谷县"}, {
                        value: "武山县",
                        label: "武山县"
                    }, {value: "张家川回族自治县", label: "张家川回族自治县"}], value: "天水市", label: "天水市"
                }, {
                    children: [{value: "凉州区", label: "凉州区"}, {value: "民勤县", label: "民勤县"}, {
                        value: "古浪县",
                        label: "古浪县"
                    }, {value: "天祝藏族自治县", label: "天祝藏族自治县"}], value: "武威市", label: "武威市"
                }, {
                    children: [{value: "甘州区", label: "甘州区"}, {value: "肃南裕固族自治县", label: "肃南裕固族自治县"}, {
                        value: "民乐县",
                        label: "民乐县"
                    }, {value: "临泽县", label: "临泽县"}, {value: "高台县", label: "高台县"}, {value: "山丹县", label: "山丹县"}],
                    value: "张掖市",
                    label: "张掖市"
                }, {
                    children: [{value: "崆峒区", label: "崆峒区"}, {value: "泾川县", label: "泾川县"}, {
                        value: "灵台县",
                        label: "灵台县"
                    }, {value: "崇信县", label: "崇信县"}, {value: "华亭县", label: "华亭县"}, {
                        value: "庄浪县",
                        label: "庄浪县"
                    }, {value: "静宁县", label: "静宁县"}], value: "平凉市", label: "平凉市"
                }, {
                    children: [{value: "肃州区", label: "肃州区"}, {value: "金塔县", label: "金塔县"}, {
                        value: "瓜州县",
                        label: "瓜州县"
                    }, {value: "肃北蒙古族自治县", label: "肃北蒙古族自治县"}, {value: "阿克塞哈萨克族自治县", label: "阿克塞哈萨克族自治县"}, {
                        value: "玉门市",
                        label: "玉门市"
                    }, {value: "敦煌市", label: "敦煌市"}], value: "酒泉市", label: "酒泉市"
                }, {
                    children: [{value: "西峰区", label: "西峰区"}, {value: "庆城县", label: "庆城县"}, {
                        value: "环县",
                        label: "环县"
                    }, {value: "华池县", label: "华池县"}, {value: "合水县", label: "合水县"}, {
                        value: "正宁县",
                        label: "正宁县"
                    }, {value: "宁县", label: "宁县"}, {value: "镇原县", label: "镇原县"}], value: "庆阳市", label: "庆阳市"
                }, {
                    children: [{value: "安定区", label: "安定区"}, {value: "通渭县", label: "通渭县"}, {
                        value: "陇西县",
                        label: "陇西县"
                    }, {value: "渭源县", label: "渭源县"}, {value: "临洮县", label: "临洮县"}, {value: "漳县", label: "漳县"}, {
                        value: "岷县",
                        label: "岷县"
                    }], value: "定西市", label: "定西市"
                }, {
                    children: [{value: "武都区", label: "武都区"}, {value: "成县", label: "成县"}, {
                        value: "文县",
                        label: "文县"
                    }, {value: "宕昌县", label: "宕昌县"}, {value: "康县", label: "康县"}, {value: "西和县", label: "西和县"}, {
                        value: "礼县",
                        label: "礼县"
                    }, {value: "徽县", label: "徽县"}, {value: "两当县", label: "两当县"}], value: "陇南市", label: "陇南市"
                }, {
                    children: [{value: "临夏市", label: "临夏市"}, {value: "临夏县", label: "临夏县"}, {
                        value: "康乐县",
                        label: "康乐县"
                    }, {value: "永靖县", label: "永靖县"}, {value: "广河县", label: "广河县"}, {
                        value: "和政县",
                        label: "和政县"
                    }, {value: "东乡族自治县", label: "东乡族自治县"}, {value: "积石山保安族东乡族撒拉族自治县", label: "积石山保安族东乡族撒拉族自治县"}],
                    value: "临夏回族自治州",
                    label: "临夏回族自治州"
                }, {
                    children: [{value: "合作市", label: "合作市"}, {value: "临潭县", label: "临潭县"}, {
                        value: "卓尼县",
                        label: "卓尼县"
                    }, {value: "舟曲县", label: "舟曲县"}, {value: "迭部县", label: "迭部县"}, {
                        value: "玛曲县",
                        label: "玛曲县"
                    }, {value: "碌曲县", label: "碌曲县"}, {value: "夏河县", label: "夏河县"}], value: "甘南藏族自治州", label: "甘南藏族自治州"
                }], value: "甘肃省", label: "甘肃省"
            }, {
                children: [{
                    children: [{value: "城东区", label: "城东区"}, {value: "城中区", label: "城中区"}, {
                        value: "城西区",
                        label: "城西区"
                    }, {value: "城北区", label: "城北区"}, {value: "大通回族土族自治县", label: "大通回族土族自治县"}, {
                        value: "湟中县",
                        label: "湟中县"
                    }, {value: "湟源县", label: "湟源县"}], value: "西宁市", label: "西宁市"
                }, {
                    children: [{value: "乐都区", label: "乐都区"}, {value: "平安区", label: "平安区"}, {
                        value: "民和回族土族自治县",
                        label: "民和回族土族自治县"
                    }, {value: "互助土族自治县", label: "互助土族自治县"}, {value: "化隆回族自治县", label: "化隆回族自治县"}, {
                        value: "循化撒拉族自治县",
                        label: "循化撒拉族自治县"
                    }], value: "海东市", label: "海东市"
                }, {
                    children: [{value: "门源回族自治县", label: "门源回族自治县"}, {value: "祁连县", label: "祁连县"}, {
                        value: "海晏县",
                        label: "海晏县"
                    }, {value: "刚察县", label: "刚察县"}], value: "海北藏族自治州", label: "海北藏族自治州"
                }, {
                    children: [{value: "同仁县", label: "同仁县"}, {value: "尖扎县", label: "尖扎县"}, {
                        value: "泽库县",
                        label: "泽库县"
                    }, {value: "河南蒙古族自治县", label: "河南蒙古族自治县"}], value: "黄南藏族自治州", label: "黄南藏族自治州"
                }, {
                    children: [{value: "共和县", label: "共和县"}, {value: "同德县", label: "同德县"}, {
                        value: "贵德县",
                        label: "贵德县"
                    }, {value: "兴海县", label: "兴海县"}, {value: "贵南县", label: "贵南县"}], value: "海南藏族自治州", label: "海南藏族自治州"
                }, {
                    children: [{value: "玛沁县", label: "玛沁县"}, {value: "班玛县", label: "班玛县"}, {
                        value: "甘德县",
                        label: "甘德县"
                    }, {value: "达日县", label: "达日县"}, {value: "久治县", label: "久治县"}, {value: "玛多县", label: "玛多县"}],
                    value: "果洛藏族自治州",
                    label: "果洛藏族自治州"
                }, {
                    children: [{value: "玉树市", label: "玉树市"}, {value: "杂多县", label: "杂多县"}, {
                        value: "称多县",
                        label: "称多县"
                    }, {value: "治多县", label: "治多县"}, {value: "囊谦县", label: "囊谦县"}, {value: "曲麻莱县", label: "曲麻莱县"}],
                    value: "玉树藏族自治州",
                    label: "玉树藏族自治州"
                }, {
                    children: [{value: "格尔木市", label: "格尔木市"}, {value: "德令哈市", label: "德令哈市"}, {
                        value: "乌兰县",
                        label: "乌兰县"
                    }, {value: "都兰县", label: "都兰县"}, {value: "天峻县", label: "天峻县"}], value: "海西蒙古族藏族自治州", label: "海西蒙古族藏族自治州"
                }], value: "青海省", label: "青海省"
            }, {
                children: [{
                    children: [{value: "兴庆区", label: "兴庆区"}, {value: "西夏区", label: "西夏区"}, {
                        value: "金凤区",
                        label: "金凤区"
                    }, {value: "永宁县", label: "永宁县"}, {value: "贺兰县", label: "贺兰县"}, {value: "灵武市", label: "灵武市"}],
                    value: "银川市",
                    label: "银川市"
                }, {
                    children: [{value: "大武口区", label: "大武口区"}, {value: "惠农区", label: "惠农区"}, {value: "平罗县", label: "平罗县"}],
                    value: "石嘴山市",
                    label: "石嘴山市"
                }, {
                    children: [{value: "利通区", label: "利通区"}, {value: "红寺堡区", label: "红寺堡区"}, {
                        value: "盐池县",
                        label: "盐池县"
                    }, {value: "同心县", label: "同心县"}, {value: "青铜峡市", label: "青铜峡市"}], value: "吴忠市", label: "吴忠市"
                }, {
                    children: [{value: "原州区", label: "原州区"}, {value: "西吉县", label: "西吉县"}, {
                        value: "隆德县",
                        label: "隆德县"
                    }, {value: "泾源县", label: "泾源县"}, {value: "彭阳县", label: "彭阳县"}], value: "固原市", label: "固原市"
                }, {
                    children: [{value: "沙坡头区", label: "沙坡头区"}, {value: "中宁县", label: "中宁县"}, {value: "海原县", label: "海原县"}],
                    value: "中卫市",
                    label: "中卫市"
                }], value: "宁夏回族自治区", label: "宁夏回族自治区"
            }, {
                children: [{
                    children: [{value: "天山区", label: "天山区"}, {value: "沙依巴克区", label: "沙依巴克区"}, {
                        value: "新市区",
                        label: "新市区"
                    }, {value: "水磨沟区", label: "水磨沟区"}, {value: "头屯河区", label: "头屯河区"}, {
                        value: "达坂城区",
                        label: "达坂城区"
                    }, {value: "米东区", label: "米东区"}, {value: "乌鲁木齐县", label: "乌鲁木齐县"}], value: "乌鲁木齐市", label: "乌鲁木齐市"
                }, {
                    children: [{value: "独山子区", label: "独山子区"}, {value: "克拉玛依区", label: "克拉玛依区"}, {
                        value: "白碱滩区",
                        label: "白碱滩区"
                    }, {value: "乌尔禾区", label: "乌尔禾区"}], value: "克拉玛依市", label: "克拉玛依市"
                }, {
                    children: [{value: "高昌区", label: "高昌区"}, {value: "鄯善县", label: "鄯善县"}, {value: "托克逊县", label: "托克逊县"}],
                    value: "吐鲁番市",
                    label: "吐鲁番市"
                }, {
                    children: [{value: "伊州区", label: "伊州区"}, {value: "巴里坤哈萨克自治县", label: "巴里坤哈萨克自治县"}, {
                        value: "伊吾县",
                        label: "伊吾县"
                    }], value: "哈密市", label: "哈密市"
                }, {
                    children: [{value: "昌吉市", label: "昌吉市"}, {value: "阜康市", label: "阜康市"}, {
                        value: "呼图壁县",
                        label: "呼图壁县"
                    }, {value: "玛纳斯县", label: "玛纳斯县"}, {value: "奇台县", label: "奇台县"}, {
                        value: "吉木萨尔县",
                        label: "吉木萨尔县"
                    }, {value: "木垒哈萨克自治县", label: "木垒哈萨克自治县"}], value: "昌吉回族自治州", label: "昌吉回族自治州"
                }, {
                    children: [{value: "博乐市", label: "博乐市"}, {value: "阿拉山口市", label: "阿拉山口市"}, {
                        value: "精河县",
                        label: "精河县"
                    }, {value: "温泉县", label: "温泉县"}], value: "博尔塔拉蒙古自治州", label: "博尔塔拉蒙古自治州"
                }, {
                    children: [{value: "库尔勒市", label: "库尔勒市"}, {value: "轮台县", label: "轮台县"}, {
                        value: "尉犁县",
                        label: "尉犁县"
                    }, {value: "若羌县", label: "若羌县"}, {value: "且末县", label: "且末县"}, {
                        value: "焉耆回族自治县",
                        label: "焉耆回族自治县"
                    }, {value: "和静县", label: "和静县"}, {value: "和硕县", label: "和硕县"}, {value: "博湖县", label: "博湖县"}],
                    value: "巴音郭楞蒙古自治州",
                    label: "巴音郭楞蒙古自治州"
                }, {
                    children: [{value: "阿克苏市", label: "阿克苏市"}, {value: "温宿县", label: "温宿县"}, {
                        value: "库车县",
                        label: "库车县"
                    }, {value: "沙雅县", label: "沙雅县"}, {value: "新和县", label: "新和县"}, {
                        value: "拜城县",
                        label: "拜城县"
                    }, {value: "乌什县", label: "乌什县"}, {value: "阿瓦提县", label: "阿瓦提县"}, {value: "柯坪县", label: "柯坪县"}],
                    value: "阿克苏地区",
                    label: "阿克苏地区"
                }, {
                    children: [{value: "阿图什市", label: "阿图什市"}, {value: "阿克陶县", label: "阿克陶县"}, {
                        value: "阿合奇县",
                        label: "阿合奇县"
                    }, {value: "乌恰县", label: "乌恰县"}], value: "克孜勒苏柯尔克孜自治州", label: "克孜勒苏柯尔克孜自治州"
                }, {
                    children: [{value: "喀什市", label: "喀什市"}, {value: "疏附县", label: "疏附县"}, {
                        value: "疏勒县",
                        label: "疏勒县"
                    }, {value: "英吉沙县", label: "英吉沙县"}, {value: "泽普县", label: "泽普县"}, {
                        value: "莎车县",
                        label: "莎车县"
                    }, {value: "叶城县", label: "叶城县"}, {value: "麦盖提县", label: "麦盖提县"}, {
                        value: "岳普湖县",
                        label: "岳普湖县"
                    }, {value: "伽师县", label: "伽师县"}, {value: "巴楚县", label: "巴楚县"}, {
                        value: "塔什库尔干塔吉克自治县",
                        label: "塔什库尔干塔吉克自治县"
                    }], value: "喀什地区", label: "喀什地区"
                }, {
                    children: [{value: "和田市", label: "和田市"}, {value: "和田县", label: "和田县"}, {
                        value: "墨玉县",
                        label: "墨玉县"
                    }, {value: "皮山县", label: "皮山县"}, {value: "洛浦县", label: "洛浦县"}, {
                        value: "策勒县",
                        label: "策勒县"
                    }, {value: "于田县", label: "于田县"}, {value: "民丰县", label: "民丰县"}], value: "和田地区", label: "和田地区"
                }, {
                    children: [{value: "伊宁市", label: "伊宁市"}, {value: "奎屯市", label: "奎屯市"}, {
                        value: "霍尔果斯市",
                        label: "霍尔果斯市"
                    }, {value: "伊宁县", label: "伊宁县"}, {value: "察布查尔锡伯自治县", label: "察布查尔锡伯自治县"}, {
                        value: "霍城县",
                        label: "霍城县"
                    }, {value: "巩留县", label: "巩留县"}, {value: "新源县", label: "新源县"}, {
                        value: "昭苏县",
                        label: "昭苏县"
                    }, {value: "特克斯县", label: "特克斯县"}, {value: "尼勒克县", label: "尼勒克县"}], value: "伊犁哈萨克自治州", label: "伊犁哈萨克自治州"
                }, {
                    children: [{value: "塔城市", label: "塔城市"}, {value: "乌苏市", label: "乌苏市"}, {
                        value: "额敏县",
                        label: "额敏县"
                    }, {value: "沙湾县", label: "沙湾县"}, {value: "托里县", label: "托里县"}, {
                        value: "裕民县",
                        label: "裕民县"
                    }, {value: "和布克赛尔蒙古自治县", label: "和布克赛尔蒙古自治县"}], value: "塔城地区", label: "塔城地区"
                }, {
                    children: [{value: "阿勒泰市", label: "阿勒泰市"}, {value: "布尔津县", label: "布尔津县"}, {
                        value: "富蕴县",
                        label: "富蕴县"
                    }, {value: "福海县", label: "福海县"}, {value: "哈巴河县", label: "哈巴河县"}, {
                        value: "青河县",
                        label: "青河县"
                    }, {value: "吉木乃县", label: "吉木乃县"}], value: "阿勒泰地区", label: "阿勒泰地区"
                }, {value: "石河子市", label: "石河子市"}, {value: "阿拉尔市", label: "阿拉尔市"}, {
                    value: "图木舒克市",
                    label: "图木舒克市"
                }, {value: "五家渠市", label: "五家渠市"}, {value: "铁门关市", label: "铁门关市"}], value: "新疆维吾尔自治区", label: "新疆维吾尔自治区"
            }, {value: "台湾省", label: "台湾省"}, {value: "香港特别行政区", label: "香港特别行政区"}, {value: "澳门特别行政区", label: "澳门特别行政区"}],
            Ll = {
                name: "Order", data: function () {
                    return {
                        queryInfo: {query: "", pagenum: 2, pagesize: 10},
                        orderList: [],
                        total: 0,
                        editDialogVisible: !1,
                        progressDialogVisible: !1,
                        editForm: {address1: [], address2: ""},
                        editFormRules: {
                            address1: [{required: !0, message: "请选择省市区/县", trigger: "blur"}],
                            address2: [{required: !0, message: "请输入详细地址", trigger: "blur"}]
                        },
                        citydata: Il,
                        progressInfo: []
                    }
                }, created: function () {
                    this.getOrderList()
                }, methods: {
                    getOrderList: function () {
                        var l = this;
                        axios.get("orders", {params: this.queryInfo}).then((function (e) {
                            var a = e.data;
                            200 === a.meta.status ? (l.orderList = a.data.goods, l.total = a.data.total) : l.$message.error(a.meta.msg)
                        })).catch((function () {
                            l.$message.error("请求失败")
                        }))
                    }, handleSizeChange: function (l) {
                        this.queryInfo.pagesize = l, this.getOrderList()
                    }, handleCurrentChange: function (l) {
                        this.queryInfo.pagenum = l, this.getOrderList()
                    }, showEditDialog: function () {
                        this.editDialogVisible = !0
                    }, editDialogClosed: function () {
                        this.$refs.editFormRef.resetFields()
                    }, showProgressDialog: function () {
                        var l = this;
                        axios.get("kuaidi/1106975712662").then((function (e) {
                            var a = e.data;
                            200 === a.meta.status ? (l.progressInfo = a.data, l.progressDialogVisible = !0) : l.$message.error(a.meta.msg)
                        })).catch((function () {
                            l.$message.error("请求失败")
                        }))
                    }
                }
            }, Vl = Ll, zl = (a("2753"), Object(i["a"])(Vl, Dl, Rl, !1, null, "0d5e458f", null)), Tl = zl.exports,
            ql = function () {
                var l = this, e = l.$createElement, a = l._self._c || e;
                return a("div", [a("el-breadcrumb", {attrs: {"separator-class": "el-icon-arrow-right"}}, [a("el-breadcrumb-item", {attrs: {to: {path: "/home"}}}, [l._v("首页")]), a("el-breadcrumb-item", [l._v("数据统计")]), a("el-breadcrumb-item", [l._v("数据报表")])], 1), a("el-card", [a("div", {
                    staticStyle: {
                        width: "100%",
                        height: "700px"
                    }, attrs: {id: "main"}
                })])], 1)
            }, Pl = [], Sl = (a("96cf"), a("1da1")), Ol = a("313e"), El = a.n(Ol), Nl = {
                name: "Report", data: function () {
                    return {
                        options: {
                            title: {text: "用户来源"},
                            tooltip: {
                                trigger: "axis",
                                axisPointer: {type: "cross", label: {backgroundColor: "#E9EEF3"}}
                            },
                            grid: {left: "3%", right: "4%", bottom: "3%", containLabel: !0},
                            xAxis: [{boundaryGap: !1}],
                            yAxis: [{type: "value"}]
                        }
                    }
                }, mounted: function () {
                    var l = this;
                    return Object(Sl["a"])(regeneratorRuntime.mark((function e() {
                        var a, u, t, b;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return a = El.a.init(document.getElementById("main")), e.next = 3, axios.get("reports/type/1");
                                case 3:
                                    u = e.sent, t = u.data, 200 !== t.meta.status && l.$message.error("请求失败"), b = fl.a.merge(t.data, l.options), a.setOption(b);
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }
            }, Kl = Nl, Bl = Object(i["a"])(Kl, ql, Pl, !1, null, "746e3bac", null), Ul = Bl.exports;
        u["default"].use(n["a"]);
        var Al = [{path: "/", redirect: "/login"}, {path: "/login", component: f}, {
            path: "/home",
            component: k,
            redirect: "/welcome",
            children: [{path: "/welcome", component: R}, {path: "/users", component: q}, {
                path: "/rights",
                component: K
            }, {path: "/roles", component: Y}, {path: "/categories", component: ll}, {
                path: "/params",
                component: rl
            }, {path: "/goods", component: dl}, {path: "/goods/add", component: wl}, {
                path: "/goods/edit/:id",
                component: Cl
            }, {path: "/orders", component: Tl}, {path: "/reports", component: Ul}]
        }], Ml = new n["a"]({mode: "hash", base: "", routes: Al}), Gl = n["a"].prototype.push;
        n["a"].prototype.push = function (l) {
            return Gl.call(this, l).catch((function (l) {
                return l
            }))
        }, Ml.beforeEach((function (l, e, a) {
            if ("/login" === l.path) return a();
            var u = window.sessionStorage.getItem("token");
            if (!u) return a("/login");
            a()
        }));
        var Hl = Ml, Yl = (a("d3b7"), a("bc3a")), Zl = a.n(Yl), Jl = {}, Wl = Zl.a.create(Jl);
        Wl.interceptors.request.use((function (l) {
            return l
        }), (function (l) {
            return Promise.reject(l)
        })), Wl.interceptors.response.use((function (l) {
            return l
        }), (function (l) {
            return Promise.reject(l)
        })), Plugin.install = function (l, e) {
            l.axios = Wl, window.axios = Wl, Object.defineProperties(l.prototype, {
                axios: {
                    get: function () {
                        return Wl
                    }
                }, $axios: {
                    get: function () {
                        return Wl
                    }
                }
            })
        }, u["default"].use(Plugin);
        Plugin;
        var Ql = a("5c96"), Xl = a.n(Ql);
        a("0fae");
        u["default"].use(Xl.a);
        var le = a("c1df"), ee = a.n(le), ae = (a("aede"), a("953d")), ue = a.n(ae),
            te = (a("a7539"), a("8096"), a("14e1"), a("323e")), be = a.n(te);
        a("a5d8");
        axios.defaults.baseURL = "https://api.naccl.top/vue/shop/api/private/v1/", axios.interceptors.request.use((function (l) {
            return be.a.start(), l.headers.Authorization = window.sessionStorage.getItem("token"), l
        })), axios.interceptors.response.use((function (l) {
            return be.a.done(), l
        })), u["default"].filter("dateFormat", (function (l) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
            return ee()(l).format(e)
        })), u["default"].use(ue.a), u["default"].config.productionTip = !1, new u["default"]({
            router: Hl,
            render: function (l) {
                return l(o)
            }
        }).$mount("#app")
    }, 6759: function (l, e, a) {
    }, "6b31": function (l, e, a) {
        "use strict";
        var u = a("2a45"), t = a.n(u);
        t.a
    }, "6dbf": function (l, e, a) {
        "use strict";
        var u = a("3286"), t = a.n(u);
        t.a
    }, 7391: function (l, e, a) {
        "use strict";
        var u = a("0eb8"), t = a.n(u);
        t.a
    }, "915e": function (l, e, a) {
        l.exports = a.p + "img/avatar.9efe3748.jpg"
    }, "9bcc": function (l, e, a) {
        "use strict";
        var u = a("275c"), t = a.n(u);
        t.a
    }, aede: function (l, e, a) {
    }, ba5c: function (l, e, a) {
        "use strict";
        var u = a("f96d"), t = a.n(u);
        t.a
    }, c2f2: function (l, e, a) {
    }, c486: function (l, e, a) {
        "use strict";
        var u = a("0b24"), t = a.n(u);
        t.a
    }, cf05: function (l, e, a) {
        l.exports = a.p + "img/logo.82b9c7a5.png"
    }, e6674: function (l, e, a) {
        "use strict";
        var u = a("4d32"), t = a.n(u);
        t.a
    }, f96d: function (l, e, a) {
    }
});
//# sourceMappingURL=app.35b55262.js.map