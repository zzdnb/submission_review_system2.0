!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.mdui = e()
}(this, function () {
    "use strict";
    var a, r = {};
    a = 0, window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame, window.cancelAnimationFrame = window.webkitCancelAnimationFrame), window.requestAnimationFrame || (window.requestAnimationFrame = function (t, e) {
        var n = (new Date).getTime(), i = Math.max(0, 16.7 - (n - a)), o = window.setTimeout(function () {
            t(n + i)
        }, i);
        return a = n + i, o
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
        clearTimeout(t)
    });
    var n, g = function () {
        var c = function (t) {
            for (var e = 0; e < t.length; e += 1) this[e] = t[e];
            return this.length = t.length, this
        };

        function v(t) {
            var e = [];
            if (!t) return new c(e);
            if (t instanceof c) return t;
            if ("string" == typeof t) {
                var n = t.trim();
                if ("<" === n[0] && ">" === n[n.length - 1]) {
                    var i = "div";
                    0 === n.indexOf("<li") && (i = "ul"), 0 === n.indexOf("<tr") && (i = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (i = "tr"), 0 === n.indexOf("<tbody") && (i = "table"), 0 === n.indexOf("<option") && (i = "select");
                    var o = document.createElement(i);
                    o.innerHTML = n;
                    for (var a = 0; a < o.childNodes.length; a += 1) e.push(o.childNodes[a])
                } else for (var s = "#" !== t[0] || t.match(/[ .<>:~]/) ? document.querySelectorAll(t) : [document.getElementById(t.slice(1))], r = 0; r < s.length; r += 1) s[r] && e.push(s[r])
            } else {
                if ("function" == typeof t) return v(document).ready(t);
                if (t.nodeType || t === window || t === document) e.push(t); else if (0 < t.length && t[0].nodeType) for (var d = 0; d < t.length; d += 1) e.push(t[d])
            }
            return new c(e)
        }

        function t() {
            for (var e = this, n = [], t = arguments.length; t--;) n[t] = arguments[t];
            if (!n.length) return this;
            if (1 === n.length) return Object.keys(n[0]).forEach(function (t) {
                e[t] = n[0][t]
            }), this;
            for (var i = n.shift(), o = function (e) {
                Object.keys(n[e]).forEach(function (t) {
                    i[t] = n[e][t]
                })
            }, a = 0; a < n.length; a += 1) o(a);
            return i
        }

        function u(t) {
            return "object" == typeof t && null !== t
        }

        function g(t) {
            return "function" == typeof t
        }

        function b(t) {
            return "string" == typeof t
        }

        function a(t) {
            return "number" == typeof t.length
        }

        function x(t, e) {
            if (a(t)) {
                for (var n = 0; n < t.length; n += 1) if (!1 === e.call(t[n], n, t[n])) return t
            } else for (var i = Object.keys(t), o = 0; o < i.length; o += 1) if (!1 === e.call(t[i[o]], i[o], t[i[o]])) return t;
            return t
        }

        function e(t, n) {
            var e, i, o = [];
            return x(t, function (t, e) {
                null != (i = n(e, t)) && o.push(i)
            }), (e = []).concat.apply(e, o)
        }

        function s(n, t) {
            return x(t, function (t, e) {
                n.push(e)
            }), n
        }

        function r(t) {
            for (var e = [], n = 0; n < t.length; n += 1) -1 === e.indexOf(t[n]) && e.push(t[n]);
            return e
        }

        (v.fn = c.prototype).extend = t, v.extend = t;
        var i = {};

        function n(t, n, i, o) {
            var a, s = [];
            return t.each(function (t, e) {
                for (a = e[o]; a;) {
                    if (2 === i) {
                        if (!n || n && v(a).is(n)) break;
                        s.push(a)
                    } else {
                        if (0 === i) {
                            (!n || n && v(a).is(n)) && s.push(a);
                            break
                        }
                        (!n || n && v(a).is(n)) && s.push(a)
                    }
                    a = a[o]
                }
            }), new c(r(s))
        }

        v.extend({
            each: x, merge: s, unique: r, map: e, contains: function (t, e) {
                return t && !e ? document.documentElement.contains(t) : t !== e && t.contains(e)
            }, param: function (t) {
                if (!u(t)) return "";
                var s = [];
                return x(t, function (t, e) {
                    !function n(i, o) {
                        var a;
                        u(o) ? x(o, function (t, e) {
                            a = Array.isArray(o) && !u(e) ? "" : t, n(i + "[" + a + "]", e)
                        }) : (a = null !== o && "" !== o ? "=" + encodeURIComponent(o) : "", s.push(encodeURIComponent(i) + a))
                    }(t, e)
                }), s.join("&")
            }
        }), v.fn.extend({
            each: function (t) {
                return x(this, t)
            }, map: function (n) {
                return new c(e(this, function (t, e) {
                    return n.call(t, e, t)
                }))
            }, get: function (t) {
                return void 0 === t ? [].slice.call(this) : this[0 <= t ? t : t + this.length]
            }, slice: function () {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                return new c([].slice.apply(this, t))
            }, filter: function (n) {
                if (g(n)) return this.map(function (t, e) {
                    return n.call(e, t, e) ? e : void 0
                });
                var i = v(n);
                return this.map(function (t, e) {
                    return -1 < i.index(e) ? e : void 0
                })
            }, not: function (t) {
                var n = this.filter(t);
                return this.map(function (t, e) {
                    return -1 < n.index(e) ? void 0 : e
                })
            }, offset: function () {
                if (this[0]) {
                    var t = this[0].getBoundingClientRect();
                    return {
                        left: t.left + window.pageXOffset,
                        top: t.top + window.pageYOffset,
                        width: t.width,
                        height: t.height
                    }
                }
                return null
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === v(t).css("position");) t = t.offsetParent;
                    return t || document.documentElement
                })
            }, position: function () {
                var t, e, n = this;
                if (!n[0]) return null;
                var i, o, a = {top: 0, left: 0};
                return "fixed" === n.css("position") ? e = n[0].getBoundingClientRect() : (t = n.offsetParent(), e = n.offset(), i = t[0], o = "html", i.nodeName && i.nodeName.toLowerCase() === o.toLowerCase() || (a = t.offset()), a = {
                    top: a.top + t.css("borderTopWidth"),
                    left: a.left + t.css("borderLeftWidth")
                }), {
                    top: e.top - a.top - n.css("marginTop"),
                    left: e.left - a.left - n.css("marginLeft"),
                    width: e.width,
                    height: e.height
                }
            }, show: function () {
                return this.each(function () {
                    var t, e, n;
                    "none" === this.style.display && (this.style.display = ""), "none" === window.getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (t = this.nodeName, i[t] || (e = document.createElement(t), document.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" === n && (n = "block"), i[t] = n), i[t]))
                })
            }, hide: function () {
                return this.each(function () {
                    this.style.display = "none"
                })
            }, toggle: function () {
                return this.each(function () {
                    this.style.display = "none" === this.style.display ? "" : "none"
                })
            }, hasClass: function (t) {
                return !(!this[0] || !t) && this[0].classList.contains(t)
            }, removeAttr: function (t) {
                return this.each(function () {
                    this.removeAttribute(t)
                })
            }, removeProp: function (t) {
                return this.each(function () {
                    try {
                        delete this[t]
                    } catch (t) {
                    }
                })
            }, eq: function (t) {
                var e = -1 === t ? this.slice(t) : this.slice(t, +t + 1);
                return new c(e)
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, index: function (t) {
                return t ? b(t) ? v(t).eq(0).parent().children().get().indexOf(this[0]) : this.get().indexOf(t) : this.eq(0).parent().children().get().indexOf(this[0])
            }, is: function (t) {
                var e = this[0];
                if (!e || null == t) return !1;
                if (b(t)) return e !== document && e !== window && (e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.msMatchesSelector).call(e, t);
                if (t === document || t === window) return e === t;
                if (t.nodeType || a(t)) {
                    for (var n = t.nodeType ? [t] : t, i = 0; i < n.length; i += 1) if (n[i] === e) return !0;
                    return !1
                }
                return !1
            }, find: function (i) {
                var o = [];
                return this.each(function (t, e) {
                    var n = e.nodeType;
                    1 !== n && 9 !== n || s(o, e.querySelectorAll(i))
                }), new c(o)
            }, children: function (n) {
                var i = [];
                return this.each(function (t, e) {
                    x(e.childNodes, function (t, e) {
                        1 === e.nodeType && (!n || n && v(e).is(n)) && i.push(e)
                    })
                }), new c(r(i))
            }, has: function (t) {
                var e = b(t) ? this.find(t) : v(t), n = e.length;
                return this.filter(function () {
                    for (var t = 0; t < n; t += 1) if (v.contains(this, e[t])) return !0;
                    return !1
                })
            }, siblings: function (t) {
                return this.prevAll(t).add(this.nextAll(t))
            }, closest: function (t) {
                var e = this;
                return e.is(t) || (e = e.parents(t).eq(0)), e
            }, remove: function () {
                return this.each(function (t, e) {
                    e.parentNode && e.parentNode.removeChild(e)
                })
            }, add: function (t) {
                return new c(r(s(this.get(), v(t))))
            }, empty: function () {
                return this.each(function () {
                    this.innerHTML = ""
                })
            }, clone: function () {
                return this.map(function () {
                    return this.cloneNode(!0)
                })
            }, replaceWith: function (t) {
                return this.before(t).remove()
            }, serializeArray: function () {
                var n = [], t = this[0];
                return t && t.elements && v([].slice.call(t.elements)).each(function () {
                    var t = v(this), e = t.attr("type");
                    "fieldset" === this.nodeName.toLowerCase() || this.disabled || -1 !== ["submit", "reset", "button"].indexOf(e) || -1 !== ["radio", "checkbox"].indexOf(e) && !this.checked || n.push({
                        name: t.attr("name"),
                        value: t.val()
                    })
                }), n
            }, serialize: function () {
                var n = [];
                return x(this.serializeArray(), function (t, e) {
                    n.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
                }), n.join("&")
            }
        }), x(["val", "html", "text"], function (i, t) {
            var o = {0: "value", 1: "innerHTML", 2: "textContent"}, e = {0: void 0, 1: void 0, 2: null};
            v.fn[t] = function (n) {
                return void 0 === n ? this[0] ? this[0][o[i]] : e[i] : this.each(function (t, e) {
                    e[o[i]] = n
                })
            }
        }), x(["attr", "prop", "css"], function (a, t) {
            function s(t, e, n) {
                0 === a ? t.setAttribute(e, n) : 1 === a ? t[e] = n : t.style[e] = n
            }

            v.fn[t] = function (e, i) {
                var o = arguments.length;
                return 1 === o && b(e) ? function (t, e) {
                    if (t) return 0 === a ? t.getAttribute(e) : 1 === a ? t[e] : window.getComputedStyle(t, null).getPropertyValue(e)
                }(this[0], e) : this.each(function (t, n) {
                    2 === o ? s(n, e, i) : x(e, function (t, e) {
                        s(n, t, e)
                    })
                })
            }
        }), x(["add", "remove", "toggle"], function (t, i) {
            v.fn[i + "Class"] = function (t) {
                if (!t) return this;
                var e = t.split(" ");
                return this.each(function (t, n) {
                    x(e, function (t, e) {
                        n.classList[i](e)
                    })
                })
            }
        }), x({Width: "width", Height: "height"}, function (r, d) {
            v.fn[d] = function (t) {
                if (void 0 === t) {
                    var e = this[0];
                    if ((s = e) && s === s.window) return e["inner" + r];
                    if ((a = e) && a.nodeType === a.DOCUMENT_NODE) return e.documentElement["scroll" + r];
                    var n = v(e), i = 0, o = "width" === d;
                    return "ActiveXObject" in window && "border-box" === n.css("box-sizing") && (i = parseFloat(n.css("padding-" + (o ? "left" : "top"))) + parseFloat(n.css("padding-" + (o ? "right" : "bottom"))) + parseFloat(n.css("border-" + (o ? "left" : "top") + "-width")) + parseFloat(n.css("border-" + (o ? "right" : "bottom") + "-width"))), parseFloat(v(e).css(d)) + i
                }
                var a, s;
                return isNaN(Number(t)) || "" === t || (t += "px"), this.css(d, t)
            }
        }), x({Width: "width", Height: "height"}, function (t, n) {
            v.fn["inner" + t] = function () {
                var t = this[n](), e = v(this[0]);
                return "border-box" !== e.css("box-sizing") && (t += parseFloat(e.css("padding-" + ("width" === n ? "left" : "top"))), t += parseFloat(e.css("padding-" + ("width" === n ? "right" : "bottom")))), t
            }
        }), x(["", "All", "Until"], function (e, t) {
            v.fn["prev" + t] = function (t) {
                return n(0 === e ? this : v(this.get().reverse()), t, e, "previousElementSibling")
            }
        }), x(["", "All", "Until"], function (e, t) {
            v.fn["next" + t] = function (t) {
                return n(this, t, e, "nextElementSibling")
            }
        }), x(["", "s", "sUntil"], function (e, t) {
            v.fn["parent" + t] = function (t) {
                return n(0 === e ? this : v(this.get().reverse()), t, e, "parentNode")
            }
        }), x(["append", "prepend"], function (a, t) {
            v.fn[t] = function (t) {
                var e, o = 1 < this.length;
                if (b(t)) {
                    var n = document.createElement("div");
                    n.innerHTML = t, e = [].slice.call(n.childNodes)
                } else e = v(t).get();
                return 1 === a && e.reverse(), this.each(function (n, i) {
                    x(e, function (t, e) {
                        o && 0 < n && (e = e.cloneNode(!0)), 0 === a ? i.appendChild(e) : i.insertBefore(e, i.childNodes[0])
                    })
                })
            }
        }), x(["insertBefore", "insertAfter"], function (o, t) {
            v.fn[t] = function (t) {
                var i = v(t);
                return this.each(function (t, n) {
                    i.each(function (t, e) {
                        e.parentNode.insertBefore(1 === i.length ? n : n.cloneNode(!0), 0 === o ? e : e.nextSibling)
                    })
                })
            }
        }), x({
            appendTo: "append",
            prependTo: "prepend",
            before: "insertBefore",
            after: "insertAfter",
            replaceAll: "replaceWith"
        }, function (t, e) {
            v.fn[t] = function (t) {
                return v(t)[e](this), this
            }
        });
        var d = "mduiElementDataStorage";
        v.extend({
            data: function (n, t, e) {
                var i = {};
                if (void 0 !== e) i[t] = e; else {
                    if (!u(t)) {
                        if (void 0 === t) {
                            var o = {};
                            return x(n.attributes, function (t, e) {
                                var n = e.name;
                                if (0 === n.indexOf("data-")) {
                                    var i = n.slice(5).replace(/-./g, function (t) {
                                        return t.charAt(1).toUpperCase()
                                    });
                                    o[i] = e.value
                                }
                            }), n[d] && x(n[d], function (t, e) {
                                o[t] = e
                            }), o
                        }
                        if (n[d] && t in n[d]) return n[d][t];
                        var a = n.getAttribute("data-" + t);
                        return a || void 0
                    }
                    i = t
                }
                n[d] || (n[d] = {}), x(i, function (t, e) {
                    n[d][t] = e
                })
            }, removeData: function (t, e) {
                t[d] && t[d][e] && (t[d][e] = null, delete t[d][e])
            }
        }), v.fn.extend({
            data: function (n, i) {
                return void 0 === i ? u(n) ? this.each(function (t, e) {
                    v.data(e, n)
                }) : this[0] ? v.data(this[0], n) : void 0 : this.each(function (t, e) {
                    v.data(e, n, i)
                })
            }, removeData: function (n) {
                return this.each(function (t, e) {
                    v.removeData(e, n)
                })
            }
        }), function () {
            try {
                return new t("test")
            } catch (t) {
            }
            var t = function (t, e) {
                e = e || {bubbles: !1, cancelable: !1};
                var n = document.createEvent("MouseEvent");
                return n.initMouseEvent(t, e.bubbles, e.cancelable, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n
            };
            t.prototype = Event.prototype, window.MouseEvent = t
        }(), function () {
            function t(t, e) {
                e = e || {bubbles: !1, cancelable: !1, detail: void 0};
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
            }

            "function" != typeof window.CustomEvent && (t.prototype = window.Event.prototype, window.CustomEvent = t)
        }();
        var l = {}, o = 1;

        function f() {
            return !1
        }

        function p(t) {
            return t.mduiElementId || (o += 1, t.mduiElementId = o), t.mduiElementId
        }

        function h(a, t, s, r) {
            (t || "").split(" ").forEach(function (t) {
                var e, n, i, o;
                (e = a, n = t, i = s, o = r, (l[p(e)] || []).filter(function (t) {
                    return t && (!n || t.e === n) && (!i || t.fn.toString() === i.toString()) && (!o || t.sel === o)
                })).forEach(function (t) {
                    delete l[p(a)][t.i], a.removeEventListener(t.e, t.proxy, !1)
                })
            })
        }

        v.fn.extend({
            ready: function (t) {
                return /complete|loaded|interactive/.test(document.readyState) && document.body ? t(v) : document.addEventListener("DOMContentLoaded", function () {
                    t(v)
                }, !1), this
            }, on: function (t, n, i, e, o) {
                var a = this;
                if (t && !b(t)) return x(t, function (t, e) {
                    a.on(t, n, i, e)
                }), a;
                if (b(n) || g(e) || !1 === e || (e = i, i = n, n = void 0), (g(i) || !1 === i) && (e = i, i = void 0), !1 === e && (e = f), 1 === o) {
                    var s = e;
                    e = function () {
                        return a.off(t, n, e), s.apply(this, arguments)
                    }
                }
                return this.each(function () {
                    !function (o, t, a, s, r) {
                        var d = p(o);
                        l[d] || (l[d] = []);
                        var c = !1;
                        u(s) && s.useCapture && (c = !0), t.split(" ").forEach(function (t) {
                            var e = {e: t, fn: a, sel: r, i: l[d].length};

                            function n(t, e) {
                                !1 === a.apply(e, void 0 === t._detail ? [t] : [t].concat(t._detail)) && (t.preventDefault(), t.stopPropagation())
                            }

                            function i(e) {
                                e._data = s, r ? v(o).find(r).get().reverse().forEach(function (t) {
                                    (t === e.target || v.contains(t, e.target)) && n(e, t)
                                }) : n(e, o)
                            }

                            e.proxy = i, l[d].push(e), o.addEventListener(e.e, i, c)
                        })
                    }(this, t, e, i, n)
                })
            }, one: function (t, n, i, e) {
                var o = this;
                return b(t) ? t.split(" ").forEach(function (t) {
                    o.on(t, n, i, e, 1)
                }) : x(t, function (t, e) {
                    t.split(" ").forEach(function (t) {
                        o.on(t, n, i, e, 1)
                    })
                }), this
            }, off: function (t, n, e) {
                var i = this;
                return t && !b(t) ? (x(t, function (t, e) {
                    i.off(t, n, e)
                }), i) : (b(n) || g(e) || !1 === e || (e = n, n = void 0), !1 === e && (e = f), i.each(function () {
                    h(this, t, e, n)
                }))
            }, trigger: function (t, e) {
                var n, i = -1 < ["click", "mousedown", "mouseup", "mousemove"].indexOf(t);
                return (n = i ? new MouseEvent(t, {bubbles: !0, cancelable: !0}) : new CustomEvent(t, {
                    detail: e,
                    bubbles: !0,
                    cancelable: !0
                }))._detail = e, this.each(function () {
                    this.dispatchEvent(n)
                })
            }
        });
        var y = {}, w = 0, $ = {
            ajaxStart: "start.mdui.ajax",
            ajaxSuccess: "success.mdui.ajax",
            ajaxError: "error.mdui.ajax",
            ajaxComplete: "complete.mdui.ajax"
        };

        function C(t) {
            return 0 <= ["GET", "HEAD"].indexOf(t)
        }

        function k(t, e) {
            return (t + "&" + e).replace(/[&?]{1,2}/, "?")
        }

        return v.extend({
            ajaxSetup: function (t) {
                v.extend(y, t || {})
            }, ajax: function (a) {
                var n = {
                    method: "GET",
                    data: !1,
                    processData: !0,
                    async: !0,
                    cache: !0,
                    username: "",
                    password: "",
                    headers: {},
                    xhrFields: {},
                    statusCode: {},
                    dataType: "text",
                    jsonp: "callback",
                    jsonpCallback: function () {
                        return w += 1, "mduijsonp_" + Date.now() + "_" + w
                    },
                    contentType: "application/x-www-form-urlencoded",
                    timeout: 0,
                    global: !0
                }, i = ["beforeSend", "success", "error", "statusCode", "complete"], s = !1, r = y, e = {};

                function d(t, e) {
                    a.global && v(document).trigger(t, e)
                }

                function c(t) {
                    for (var e, n, i = [], o = arguments.length - 1; 0 < o--;) i[o] = arguments[o + 1];
                    t && (t in r && (e = r[t].apply(r, i)), a[t] && (n = a[t].apply(a, i)), "beforeSend" !== t || !1 !== e && !1 !== n || (s = !0))
                }

                x(r, function (t, e) {
                    i.indexOf(t) < 0 && (n[t] = e)
                });
                var t, u = (a = v.extend({}, n, a)).method.toUpperCase();
                if (a.url || (a.url = window.location.toString()), t = (C(u) || a.processData) && a.data && [ArrayBuffer, Blob, Document, FormData].indexOf(a.data.constructor) < 0 ? b(a.data) ? a.data : v.param(a.data) : a.data, C(u) && t && (a.url = k(a.url, t), t = null), "jsonp" === a.dataType) {
                    var o, l = g(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback,
                        f = k(a.url, a.jsonp + "=" + l);
                    if (e.options = a, d($.ajaxStart, e), c("beforeSend", null), s) return;
                    var p = document.createElement("script");
                    return p.type = "text/javascript", p.onerror = function () {
                        o && clearTimeout(o), d($.ajaxError, e), c("error", null, "scripterror"), d($.ajaxComplete, e), c("complete", null, "scripterror")
                    }, p.src = f, window[l] = function (t) {
                        o && clearTimeout(o), e.data = t, d($.ajaxSuccess, e), c("success", t, "success", null), v(p).remove(), p = null, delete window[l]
                    }, v("head").append(p), void (0 < a.timeout && (o = setTimeout(function () {
                        v(p).remove(), p = null, d($.ajaxError, e), c("error", null, "timeout")
                    }, a.timeout)))
                }
                C(u) && !a.cache && (a.url = k(a.url, "_=" + Date.now()));
                var h, m = new XMLHttpRequest;
                return m.open(u, a.url, a.async, a.username, a.password), (a.contentType || t && !C(u) && !1 !== a.contentType) && m.setRequestHeader("Content-Type", a.contentType), "json" === a.dataType && m.setRequestHeader("Accept", "application/json, text/javascript"), a.headers && x(a.headers, function (t, e) {
                    m.setRequestHeader(t, e)
                }), void 0 === a.crossDomain && (a.crossDomain = /^([\w-]+:)?\/\/([^/]+)/.test(a.url) && RegExp.$2 !== window.location.host), a.crossDomain || m.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.xhrFields && x(a.xhrFields, function (t, e) {
                    m[t] = e
                }), e.xhr = m, e.options = a, m.onload = function () {
                    var n;
                    h && clearTimeout(h);
                    var i, o = 200 <= m.status && m.status < 300 || 0 === m.status;
                    if (o) if (n = 204 === m.status || "HEAD" === u ? "nocontent" : 304 === m.status ? "notmodified" : "success", "json" === a.dataType) {
                        try {
                            i = JSON.parse(m.responseText), e.data = i
                        } catch (t) {
                            n = "parsererror", d($.ajaxError, e), c("error", m, n)
                        }
                        "parsererror" !== n && (d($.ajaxSuccess, e), c("success", i, n, m))
                    } else i = "text" === m.responseType || "" === m.responseType ? m.responseText : m.response, e.data = i, d($.ajaxSuccess, e), c("success", i, n, m); else n = "error", d($.ajaxError, e), c("error", m, n);
                    x([r.statusCode, a.statusCode], function (t, e) {
                        e && e[m.status] && (o ? e[m.status](i, n, m) : e[m.status](m, n))
                    }), d($.ajaxComplete, e), c("complete", m, n)
                }, m.onerror = function () {
                    h && clearTimeout(h), d($.ajaxError, e), c("error", m, m.statusText), d($.ajaxComplete, e), c("complete", m, "error")
                }, m.onabort = function () {
                    var t = "abort";
                    h && (t = "timeout", clearTimeout(h)), d($.ajaxError, e), c("error", m, t), d($.ajaxComplete, e), c("complete", m, t)
                }, d($.ajaxStart, e), c("beforeSend", m), s || (0 < a.timeout && (h = setTimeout(function () {
                    m.abort()
                }, a.timeout)), m.send(t)), m
            }
        }), x($, function (t, e) {
            v.fn[t] = function (n) {
                return this.on(e, function (t, e) {
                    n(t, e.xhr, e.options, e.data)
                })
            }
        }), v
    }(), f = g(document), T = g(window), l = {};
    n = [], l.queue = function (t, e) {
        if (void 0 === n[t] && (n[t] = []), void 0 === e) return n[t];
        n[t].push(e)
    }, l.dequeue = function (t) {
        void 0 !== n[t] && n[t].length && n[t].shift()()
    };
    var d = {
        touches: 0,
        isAllow: function (t) {
            var e = !0;
            return d.touches && -1 < ["mousedown", "mouseup", "mousemove", "click", "mouseover", "mouseout", "mouseenter", "mouseleave"].indexOf(t.type) && (e = !1), e
        },
        register: function (t) {
            "touchstart" === t.type ? d.touches += 1 : -1 < ["touchmove", "touchend", "touchcancel"].indexOf(t.type) && setTimeout(function () {
                d.touches && (d.touches -= 1)
            }, 500)
        },
        start: "touchstart mousedown",
        move: "touchmove mousemove",
        end: "touchend mouseup",
        cancel: "touchcancel mouseleave",
        unlock: "touchend touchmove touchcancel"
    };
    g(function () {
        setTimeout(function () {
            g("body").addClass("mdui-loaded")
        }, 0)
    });
    var i, s = function (t) {
        var e = {};
        if (null === t || !t) return e;
        if ("object" == typeof t) return t;
        var n = t.indexOf("{");
        try {
            e = new Function("", "var json = " + t.substr(n) + "; return JSON.parse(JSON.stringify(json));")()
        } catch (t) {
        }
        return e
    }, p = function (t, e, n, i, o) {
        o || (o = {}), o.inst = n;
        var a = t + ".mdui." + e;
        "undefined" != typeof jQuery && jQuery(i).trigger(a, o), g(i).trigger(a, o)
    };
    g.fn.extend({
        reflow: function () {
            return this.each(function () {
                return this.clientLeft
            })
        }, transition: function (t) {
            return "string" != typeof t && (t += "ms"), this.each(function () {
                this.style.webkitTransitionDuration = t, this.style.transitionDuration = t
            })
        }, transitionEnd: function (e) {
            var n, i = ["webkitTransitionEnd", "transitionend"], o = this;

            function a(t) {
                if (t.target === this) for (e.call(this, t), n = 0; n < i.length; n++) o.off(i[n], a)
            }

            if (e) for (n = 0; n < i.length; n++) o.on(i[n], a);
            return this
        }, transformOrigin: function (t) {
            return this.each(function () {
                this.style.webkitTransformOrigin = t, this.style.transformOrigin = t
            })
        }, transform: function (t) {
            return this.each(function () {
                this.style.webkitTransform = t, this.style.transform = t
            })
        }
    }), g.extend({
        showOverlay: function (t) {
            var e = g(".mdui-overlay");
            e.length ? (e.data("isDeleted", 0), void 0 !== t && e.css("z-index", t)) : (void 0 === t && (t = 2e3), e = g('<div class="mdui-overlay">').appendTo(document.body).reflow().css("z-index", t));
            var n = e.data("overlay-level") || 0;
            return e.data("overlay-level", ++n).addClass("mdui-overlay-show")
        }, hideOverlay: function (t) {
            var e = g(".mdui-overlay");
            if (e.length) {
                var n = t ? 1 : e.data("overlay-level");
                1 < n ? e.data("overlay-level", --n) : e.data("overlay-level", 0).removeClass("mdui-overlay-show").data("isDeleted", 1).transitionEnd(function () {
                    e.data("isDeleted") && e.remove()
                })
            }
        }, lockScreen: function () {
            var t = g("body"), e = t.width();
            t.addClass("mdui-locked").width(e);
            var n = t.data("lockscreen-level") || 0;
            t.data("lockscreen-level", ++n)
        }, unlockScreen: function (t) {
            var e = g("body"), n = t ? 1 : e.data("lockscreen-level");
            1 < n ? e.data("lockscreen-level", --n) : e.data("lockscreen-level", 0).removeClass("mdui-locked").width("")
        }, throttle: function (n, i) {
            var o = null;
            return (!i || i < 16) && (i = 16), function () {
                var t = this, e = arguments;
                null === o && (o = setTimeout(function () {
                    n.apply(t, e), o = null
                }, i))
            }
        }
    }), i = {}, g.extend({
        guid: function (t) {
            if (void 0 !== t && void 0 !== i[t]) return i[t];

            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            var n = e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
            return void 0 !== t && (i[t] = n), n
        }
    }), function () {
        var a = {};

        function s(t, e, n, i, o) {
            var a = g(n), s = a.data("mdui.mutation");
            s || (s = [], a.data("mdui.mutation", s)), -1 === s.indexOf(t) && (s.push(t), e.call(n, i, o))
        }

        g.fn.extend({
            mutation: function () {
                return this.each(function (t, e) {
                    var o = g(this);
                    g.each(a, function (n, i) {
                        o.is(n) && s(n, i, o[0], t, e), o.find(n).each(function (t, e) {
                            s(n, i, this, t, e)
                        })
                    })
                })
            }
        }), r.mutation = function (n, i) {
            "string" == typeof n && "function" == typeof i ? (a[n] = i, g(n).each(function (t, e) {
                s(n, i, this, t, e)
            })) : g(document).mutation()
        }
    }(), r.Headroom = function () {
        var a = {
            tolerance: 5,
            offset: 0,
            initialClass: "mdui-headroom",
            pinnedClass: "mdui-headroom-pinned-top",
            unpinnedClass: "mdui-headroom-unpinned-top"
        };

        function t(t, e) {
            var n = this;
            if (n.$headroom = g(t).eq(0), n.$headroom.length) {
                var i = n.$headroom.data("mdui.headroom");
                if (i) return i;
                n.options = g.extend({}, a, e || {});
                var o = n.options.tolerance;
                o !== Object(o) && (n.options.tolerance = {down: o, up: o}), n._init()
            }
        }

        t.prototype._init = function () {
            var t = this;
            t.state = "pinned", t.$headroom.addClass(t.options.initialClass).removeClass(t.options.pinnedClass + " " + t.options.unpinnedClass), t.inited = !1, t.lastScrollY = 0, t._attachEvent()
        }, t.prototype._attachEvent = function () {
            var t = this;
            t.inited || (t.lastScrollY = window.pageYOffset, t.inited = !0, T.on("scroll", function () {
                t._scroll()
            }))
        }, t.prototype._scroll = function () {
            var i = this;
            i.rafId = window.requestAnimationFrame(function () {
                var t = window.pageYOffset, e = t > i.lastScrollY ? "down" : "up",
                    n = Math.abs(t - i.lastScrollY) >= i.options.tolerance[e];
                t > i.lastScrollY && t >= i.options.offset && n ? i.unpin() : (t < i.lastScrollY && n || t <= i.options.offset) && i.pin(), i.lastScrollY = t
            })
        };
        var e = function (t) {
            "pinning" === t.state && (t.state = "pinned", p("pinned", "headroom", t, t.$headroom)), "unpinning" === t.state && (t.state = "unpinned", p("unpinned", "headroom", t, t.$headroom))
        };
        return t.prototype.pin = function () {
            var t = this;
            "pinning" !== t.state && "pinned" !== t.state && t.$headroom.hasClass(t.options.initialClass) && (p("pin", "headroom", t, t.$headroom), t.state = "pinning", t.$headroom.removeClass(t.options.unpinnedClass).addClass(t.options.pinnedClass).transitionEnd(function () {
                e(t)
            }))
        }, t.prototype.unpin = function () {
            var t = this;
            "unpinning" !== t.state && "unpinned" !== t.state && t.$headroom.hasClass(t.options.initialClass) && (p("unpin", "headroom", t, t.$headroom), t.state = "unpinning", t.$headroom.removeClass(t.options.pinnedClass).addClass(t.options.unpinnedClass).transitionEnd(function () {
                e(t)
            }))
        }, t.prototype.enable = function () {
            this.inited || this._init()
        }, t.prototype.disable = function () {
            var t = this;
            t.inited && (t.inited = !1, t.$headroom.removeClass([t.options.initialClass, t.options.pinnedClass, t.options.unpinnedClass].join(" ")), T.off("scroll", function () {
                t._scroll()
            }), window.cancelAnimationFrame(t.rafId))
        }, t.prototype.getState = function () {
            return this.state
        }, t
    }(), g(function () {
        r.mutation("[mdui-headroom]", function () {
            var t = g(this), e = s(t.attr("mdui-headroom")), n = t.data("mdui.headroom");
            n || (n = new r.Headroom(t, e), t.data("mdui.headroom", n))
        })
    });
    var c, h, u, t, e, o, m, v = function () {
        var s = {accordion: !1};

        function t(t, e, n) {
            var i = this;
            i.ns = n;
            var o = "mdui-" + i.ns + "-item";
            if (i.class_item = o, i.class_item_open = o + "-open", i.class_header = o + "-header", i.class_body = o + "-body", i.$collapse = g(t).eq(0), i.$collapse.length) {
                var a = i.$collapse.data("mdui." + i.ns);
                if (a) return a;
                i.options = g.extend({}, s, e || {}), i.$collapse.on("click", "." + i.class_header, function () {
                    var t = g(this).parent("." + i.class_item);
                    i.$collapse.children(t).length && i.toggle(t)
                }), i.$collapse.on("click", "[mdui-" + i.ns + "-item-close]", function () {
                    var t = g(this).parents("." + i.class_item).eq(0);
                    i._isOpen(t) && i.close(t)
                })
            }
        }

        t.prototype._isOpen = function (t) {
            return t.hasClass(this.class_item_open)
        }, t.prototype._getItem = function (t) {
            return parseInt(t) === t ? this.$collapse.children("." + this.class_item).eq(t) : g(t).eq(0)
        };
        var o = function (t, e, n) {
            t._isOpen(n) ? (e.transition(0).height("auto").reflow().transition(""), p("opened", t.ns, t, n[0])) : (e.height(""), p("closed", t.ns, t, n[0]))
        };
        return t.prototype.open = function (t) {
            var e = this, n = e._getItem(t);
            if (!e._isOpen(n)) {
                e.options.accordion && e.$collapse.children("." + e.class_item_open).each(function () {
                    var t = g(this);
                    t !== n && e.close(t)
                });
                var i = n.children("." + e.class_body);
                i.height(i[0].scrollHeight).transitionEnd(function () {
                    o(e, i, n)
                }), p("open", e.ns, e, n[0]), n.addClass(e.class_item_open)
            }
        }, t.prototype.close = function (t) {
            var e = this, n = e._getItem(t);
            if (e._isOpen(n)) {
                var i = n.children("." + e.class_body);
                p("close", e.ns, e, n[0]), n.removeClass(e.class_item_open), i.transition(0).height(i[0].scrollHeight).reflow().transition("").height("").transitionEnd(function () {
                    o(e, i, n)
                })
            }
        }, t.prototype.toggle = function (t) {
            var e = this._getItem(t);
            this._isOpen(e) ? this.close(e) : this.open(e)
        }, t.prototype.openAll = function () {
            var e = this;
            e.$collapse.children("." + e.class_item).each(function () {
                var t = g(this);
                e._isOpen(t) || e.open(t)
            })
        }, t.prototype.closeAll = function () {
            var e = this;
            e.$collapse.children("." + e.class_item).each(function () {
                var t = g(this);
                e._isOpen(t) && e.close(t)
            })
        }, t
    }();
    return r.Collapse = function (t, e) {
        return new v(t, e, "collapse")
    }, g(function () {
        r.mutation("[mdui-collapse]", function () {
            var t = g(this), e = t.data("mdui.collapse");
            if (!e) {
                var n = s(t.attr("mdui-collapse"));
                e = new r.Collapse(t, n), t.data("mdui.collapse", e)
            }
        })
    }), function () {
        var i = function (t) {
            return "<" + t + ' class="mdui-table-cell-checkbox"><label class="mdui-checkbox"><input type="checkbox"/><i class="mdui-checkbox-icon"></i></label></' + t + ">"
        };

        function n(t) {
            this.$table = g(t).eq(0), this.$table.length && this.init()
        }

        n.prototype.init = function () {
            var t = this;
            t.$thRow = t.$table.find("thead tr"), t.$tdRows = t.$table.find("tbody tr"), t.$tdCheckboxs = g(), t.selectable = t.$table.hasClass("mdui-table-selectable"), t.selectedRow = 0, t._updateThCheckbox(), t._updateTdCheckbox(), t._updateNumericCol()
        }, n.prototype._updateTdCheckbox = function () {
            var n = this;
            n.$tdRows.each(function () {
                var t = g(this);
                if (t.find(".mdui-table-cell-checkbox").remove(), n.selectable) {
                    var e = g(i("td")).prependTo(t).find('input[type="checkbox"]');
                    t.hasClass("mdui-table-row-selected") && (e[0].checked = !0, n.selectedRow++), n.$thCheckbox[0].checked = n.selectedRow === n.$tdRows.length, e.on("change", function () {
                        e[0].checked ? (t.addClass("mdui-table-row-selected"), n.selectedRow++) : (t.removeClass("mdui-table-row-selected"), n.selectedRow--), n.$thCheckbox[0].checked = n.selectedRow === n.$tdRows.length
                    }), n.$tdCheckboxs = n.$tdCheckboxs.add(e)
                }
            })
        }, n.prototype._updateThCheckbox = function () {
            var t = this;
            t.$thRow.find(".mdui-table-cell-checkbox").remove(), t.selectable && (t.$thCheckbox = g(i("th")).prependTo(t.$thRow).find('input[type="checkbox"]').on("change", function () {
                var n = t.$thCheckbox[0].checked;
                t.selectedRow = n ? t.$tdRows.length : 0, t.$tdCheckboxs.each(function (t, e) {
                    e.checked = n
                }), t.$tdRows.each(function (t, e) {
                    g(e)[n ? "addClass" : "removeClass"]("mdui-table-row-selected")
                })
            }))
        }, n.prototype._updateNumericCol = function () {
            var n, i, o = this;
            o.$thRow.find("th").each(function (e, t) {
                n = g(t), o.$tdRows.each(function () {
                    i = g(this);
                    var t = n.hasClass("mdui-table-col-numeric") ? "addClass" : "removeClass";
                    i.find("td").eq(e)[t]("mdui-table-col-numeric")
                })
            })
        }, r.mutation(".mdui-table", function () {
            var t = g(this);
            t.data("mdui.table") || t.data("mdui.table", new n(t))
        }), r.updateTables = function () {
            g(arguments.length ? arguments[0] : ".mdui-table").each(function () {
                var t = g(this), e = t.data("mdui.table");
                e ? e.init() : t.data("mdui.table", new n(t))
            })
        }
    }(), c = {
        delay: 200, show: function (t, e) {
            if (2 !== t.button) {
                var n, i = (n = "touches" in t && t.touches.length ? t.touches[0] : t).pageX, o = n.pageY,
                    a = e.offset(), s = i - a.left, r = o - a.top, d = e.innerHeight(), c = e.innerWidth(),
                    u = Math.max(Math.pow(Math.pow(d, 2) + Math.pow(c, 2), .5), 48),
                    l = "translate3d(" + (c / 2 - s) + "px, " + (d / 2 - r) + "px, 0) scale(1)";
                g('<div class="mdui-ripple-wave" style="width: ' + u + "px; height: " + u + "px; margin-top:-" + u / 2 + "px; margin-left:-" + u / 2 + "px; left:" + s + "px; top:" + r + 'px;"></div>').data("translate", l).prependTo(e).reflow().transform(l)
            }
        }, hide: function (t, e) {
            var n = g(e || this);
            n.children(".mdui-ripple-wave").each(function () {
                !function (t) {
                    if (!t.length || t.data("isRemoved")) return;
                    t.data("isRemoved", !0);
                    var e = setTimeout(function () {
                        t.remove()
                    }, 400), n = t.data("translate");
                    t.addClass("mdui-ripple-wave-fill").transform(n.replace("scale(1)", "scale(1.01)")).transitionEnd(function () {
                        clearTimeout(e), t.addClass("mdui-ripple-wave-out").transform(n.replace("scale(1)", "scale(1.01)")), e = setTimeout(function () {
                            t.remove()
                        }, 700), setTimeout(function () {
                            t.transitionEnd(function () {
                                clearTimeout(e), t.remove()
                            })
                        }, 0)
                    })
                }(g(this))
            }), n.off("touchmove touchend touchcancel mousemove mouseup mouseleave", c.hide)
        }
    }, f.on(d.start, function (e) {
        if (d.isAllow(e) && (d.register(e), e.target !== document)) {
            var n, t = g(e.target);
            if ((n = t.hasClass("mdui-ripple") ? t : t.parents(".mdui-ripple").eq(0)).length) {
                if (n[0].disabled || null !== n.attr("disabled")) return;
                if ("touchstart" === e.type) {
                    var i = !1, o = setTimeout(function () {
                        o = null, c.show(e, n)
                    }, c.delay), a = function (t) {
                        o && (clearTimeout(o), o = null, c.show(e, n)), i || (i = !0, c.hide(t, n))
                    };
                    n.on("touchmove", function (t) {
                        o && (clearTimeout(o), o = null), a(t)
                    }).on("touchend touchcancel", a)
                } else c.show(e, n), n.on("touchmove touchend touchcancel mousemove mouseup mouseleave", c.hide)
            }
        }
    }).on(d.unlock, d.register), h = function (t, e) {
        return !("object" != typeof t || null === t || void 0 === t[e] || !t[e]) && t[e]
    }, f.on("input focus blur", ".mdui-textfield-input", {useCapture: !0}, function (t) {
        var e = t.target, n = g(e), i = t.type, o = n.val(), a = h(t.detail, "reInit"),
            s = h(t.detail, "domLoadedEvent"), r = n.attr("type") || "";
        if (!(0 <= ["checkbox", "button", "submit", "range", "radio", "image"].indexOf(r))) {
            var d = n.parent(".mdui-textfield");
            if ("focus" === i && d.addClass("mdui-textfield-focus"), "blur" === i && d.removeClass("mdui-textfield-focus"), "blur" !== i && "input" !== i || d[o && "" !== o ? "addClass" : "removeClass"]("mdui-textfield-not-empty"), d[e.disabled ? "addClass" : "removeClass"]("mdui-textfield-disabled"), "input" !== i && "blur" !== i || s || e.validity && d[e.validity.valid ? "removeClass" : "addClass"]("mdui-textfield-invalid-html5"), "textarea" === t.target.nodeName.toLowerCase()) {
                var c = n.val(), u = !1;
                "" === c.replace(/[\r\n]/g, "") && (n.val(" " + c), u = !0), n.height("");
                var l = n.height(), f = e.scrollHeight;
                l < f && n.height(f), u && n.val(c)
            }
            a && d.find(".mdui-textfield-counter").remove();
            var p = n.attr("maxlength");
            p && ((a || s) && g('<div class="mdui-textfield-counter"><span class="mdui-textfield-counter-inputed"></span> / ' + p + "</div>").appendTo(d), d.find(".mdui-textfield-counter-inputed").text(o.length.toString())), (d.find(".mdui-textfield-helper").length || d.find(".mdui-textfield-error").length || p) && d.addClass("mdui-textfield-has-bottom")
        }
    }), f.on("click", ".mdui-textfield-expandable .mdui-textfield-icon", function () {
        g(this).parents(".mdui-textfield").addClass("mdui-textfield-expanded").find(".mdui-textfield-input")[0].focus()
    }), f.on("click", ".mdui-textfield-expanded .mdui-textfield-close", function () {
        g(this).parents(".mdui-textfield").removeClass("mdui-textfield-expanded").find(".mdui-textfield-input").val("")
    }), r.updateTextFields = function () {
        g(arguments.length ? arguments[0] : ".mdui-textfield").each(function () {
            g(this).find(".mdui-textfield-input").trigger("input", {reInit: !0})
        })
    }, g(function () {
        r.mutation(".mdui-textfield", function () {
            g(this).find(".mdui-textfield-input").trigger("input", {domLoadedEvent: !0})
        })
    }), u = function (t) {
        var e = t.data(), n = e.$track, i = e.$fill, o = e.$thumb, a = e.$input, s = e.min, r = e.max, d = e.disabled,
            c = e.discrete, u = e.$thumbText, l = a.val(), f = (l - s) / (r - s) * 100;
        i.width(f + "%"), n.width(100 - f + "%"), d && (i.css("padding-right", "6px"), n.css("padding-left", "6px")), o.css("left", f + "%"), c && u.text(l), t[0 === parseFloat(f) ? "addClass" : "removeClass"]("mdui-slider-zero")
    }, t = function (t) {
        var e = g('<div class="mdui-slider-track"></div>'), n = g('<div class="mdui-slider-fill"></div>'),
            i = g('<div class="mdui-slider-thumb"></div>'), o = t.find('input[type="range"]'), a = o[0].disabled;
        t[a ? "addClass" : "removeClass"]("mdui-slider-disabled"), t.find(".mdui-slider-track").remove(), t.find(".mdui-slider-fill").remove(), t.find(".mdui-slider-thumb").remove(), t.append(e).append(n).append(i);
        var s, r = t.hasClass("mdui-slider-discrete");
        r && (s = g("<span></span>"), i.empty().append(s)), t.data({
            $track: e,
            $fill: n,
            $thumb: i,
            $input: o,
            min: o.attr("min"),
            max: o.attr("max"),
            disabled: a,
            discrete: r,
            $thumbText: s
        }), u(t)
    }, e = '.mdui-slider input[type="range"]', f.on("input change", e, function () {
        var t = g(this).parent();
        u(t)
    }).on(d.start, e, function (t) {
        d.isAllow(t) && (d.register(t), this.disabled || g(this).parent().addClass("mdui-slider-focus"))
    }).on(d.end, e, function (t) {
        d.isAllow(t) && (this.disabled || g(this).parent().removeClass("mdui-slider-focus"))
    }).on(d.unlock, e, d.register), r.updateSliders = function () {
        g(arguments.length ? arguments[0] : ".mdui-slider").each(function () {
            t(g(this))
        })
    }, g(function () {
        r.mutation(".mdui-slider", function () {
            t(g(this))
        })
    }), r.Fab = function () {
        var o = {trigger: "hover"};

        function t(t, e) {
            var n = this;
            if (n.$fab = g(t).eq(0), n.$fab.length) {
                var i = n.$fab.data("mdui.fab");
                if (i) return i;
                n.options = g.extend({}, o, e || {}), n.state = "closed", n.$btn = n.$fab.find(".mdui-fab"), n.$dial = n.$fab.find(".mdui-fab-dial"), n.$dialBtns = n.$dial.find(".mdui-fab"), "hover" === n.options.trigger && (n.$btn.on("touchstart mouseenter", function () {
                    n.open()
                }), n.$fab.on("mouseleave", function () {
                    n.close()
                })), "click" === n.options.trigger && n.$btn.on(d.start, function () {
                    n.open()
                }), f.on(d.start, function (t) {
                    g(t.target).parents(".mdui-fab-wrapper").length || n.close()
                })
            }
        }

        return t.prototype.open = function () {
            var n = this;
            "opening" !== n.state && "opened" !== n.state && (n.$dialBtns.each(function (t, e) {
                e.style["transition-delay"] = e.style["-webkit-transition-delay"] = 15 * (n.$dialBtns.length - t) + "ms"
            }), n.$dial.css("height", "auto").addClass("mdui-fab-dial-show"), n.$btn.find(".mdui-fab-opened").length && n.$btn.addClass("mdui-fab-opened"), n.state = "opening", p("open", "fab", n, n.$fab), n.$dialBtns.eq(0).transitionEnd(function () {
                n.$btn.hasClass("mdui-fab-opened") && (n.state = "opened", p("opened", "fab", n, n.$fab))
            }))
        }, t.prototype.close = function () {
            var t = this;
            "closing" !== t.state && "closed" !== t.state && (t.$dialBtns.each(function (t, e) {
                e.style["transition-delay"] = e.style["-webkit-transition-delay"] = 15 * t + "ms"
            }), t.$dial.removeClass("mdui-fab-dial-show"), t.$btn.removeClass("mdui-fab-opened"), t.state = "closing", p("close", "fab", t, t.$fab), t.$dialBtns.eq(-1).transitionEnd(function () {
                t.$btn.hasClass("mdui-fab-opened") || (t.state = "closed", p("closed", "fab", t, t.$fab), t.$dial.css("height", 0))
            }))
        }, t.prototype.toggle = function () {
            var t = this;
            "opening" === t.state || "opened" === t.state ? t.close() : "closing" !== t.state && "closed" !== t.state || t.open()
        }, t.prototype.getState = function () {
            return this.state
        }, t.prototype.show = function () {
            this.$fab.removeClass("mdui-fab-hide")
        }, t.prototype.hide = function () {
            this.$fab.addClass("mdui-fab-hide")
        }, t
    }(), g(function () {
        f.on("touchstart mousedown mouseover", "[mdui-fab]", function (t) {
            var e = g(this), n = e.data("mdui.fab");
            if (!n) {
                var i = s(e.attr("mdui-fab"));
                n = new r.Fab(e, i), e.data("mdui.fab", n)
            }
        })
    }), r.Select = function () {
        var a = {position: "auto", gutter: 16};

        function t(t, e) {
            var n = this, i = n.$selectNative = g(t).eq(0);
            if (i.length) {
                var o = i.data("mdui.select");
                if (o) return o;
                i.hide(), n.options = g.extend({}, a, e || {}), n.uniqueID = g.guid(), n.state = "closed", n.handleUpdate(), f.on("click touchstart", function (t) {
                    var e = g(t.target);
                    "opening" !== n.state && "opened" !== n.state || e.is(n.$select) || g.contains(n.$select[0], e[0]) || n.close()
                })
            }
        }

        t.prototype.handleUpdate = function () {
            var i = this;
            "opening" !== i.state && "opened" !== i.state || i.close();
            var n = i.$selectNative;
            i.value = n.val(), i.text = "", i.$items = g(), n.find("option").each(function (t, e) {
                var n = {
                    value: e.value,
                    text: e.textContent,
                    disabled: e.disabled,
                    selected: i.value === e.value,
                    index: t
                };
                i.value === n.value && (i.text = n.text, i.selectedIndex = t), i.$items = i.$items.add(g('<div class="mdui-select-menu-item mdui-ripple"' + (n.disabled ? " disabled" : "") + (n.selected ? " selected" : "") + ">" + n.text + "</div>").data(n))
            }), i.$selected = g('<span class="mdui-select-selected">' + i.text + "</span>"), i.$select = g('<div class="mdui-select mdui-select-position-' + i.options.position + '" style="' + i.$selectNative.attr("style") + '" id="' + i.uniqueID + '"></div>').show().append(i.$selected), i.$menu = g('<div class="mdui-select-menu"></div>').appendTo(i.$select).append(i.$items), g("#" + i.uniqueID).remove(), n.after(i.$select), i.size = i.$selectNative.attr("size"), i.size || (i.size = i.$items.length, 8 < i.size && (i.size = 8)), i.size < 2 && (i.size = 2), i.$items.on("click", function () {
                if ("closing" !== i.state) {
                    var t = g(this);
                    if (!t.data("disabled")) {
                        var e = t.data();
                        i.$selected.text(e.text), n.val(e.value), i.$items.removeAttr("selected"), t.attr("selected", ""), i.selectedIndex = e.index, i.value = e.value, i.text = e.text, n.trigger("change"), i.close()
                    }
                }
            }), i.$select.on("click", function (t) {
                var e = g(t.target);
                e.is(".mdui-select-menu") || e.is(".mdui-select-menu-item") || i.toggle()
            })
        };
        var e = function (t) {
            t.$select.removeClass("mdui-select-closing"), "opening" === t.state && (t.state = "opened", p("opened", "select", t, t.$selectNative), t.$menu.css("overflow-y", "auto")), "closing" === t.state && (t.state = "closed", p("closed", "select", t, t.$selectNative), t.$select.width(""), t.$menu.css({
                "margin-top": "",
                height: "",
                width: ""
            }))
        };
        return t.prototype.open = function () {
            var t = this;
            "opening" !== t.state && "opened" !== t.state && (t.state = "opening", p("open", "select", t, t.$selectNative), function (t) {
                var e, n, i = T.height(), o = t.options.gutter, a = t.options.position,
                    s = parseInt(t.$select.height()), r = t.$items.eq(0), d = parseInt(r.height()),
                    c = parseInt(r.css("margin-top")), u = parseFloat(t.$select.width() + .01), l = d * t.size + 2 * c,
                    f = t.$select[0].getBoundingClientRect().top;
                if ("auto" === a) {
                    var p = i - 2 * o;
                    p < l && (l = p), n = -(c + t.selectedIndex * d + (d - s) / 2);
                    var h = -(c + (t.size - 1) * d + (d - s) / 2);
                    n < h && (n = h);
                    var m = f + n;
                    m < o ? n = -(f - o) : i < m + l + o && (n = -(f + l + o - i)), e = t.selectedIndex * d + d / 2 + c + "px"
                } else "bottom" === a ? (n = s, e = "0px") : "top" === a && (n = -l - 1, e = "100%");
                t.$select.width(u), t.$menu.width(u).height(l).css({
                    "margin-top": n + "px",
                    "transform-origin": "center " + e + " 0"
                })
            }(t), t.$select.addClass("mdui-select-open"), t.$menu.transitionEnd(function () {
                e(t)
            }))
        }, t.prototype.close = function () {
            var t = this;
            "closing" !== t.state && "closed" !== t.state && (t.state = "closing", p("close", "select", t, t.$selectNative), t.$menu.css("overflow-y", ""), t.$select.removeClass("mdui-select-open").addClass("mdui-select-closing"), t.$menu.transitionEnd(function () {
                e(t)
            }))
        }, t.prototype.toggle = function () {
            var t = this;
            "opening" === t.state || "opened" === t.state ? t.close() : "closing" !== t.state && "closed" !== t.state || t.open()
        }, t
    }(), g(function () {
        r.mutation("[mdui-select]", function () {
            var t = g(this), e = t.data("mdui.select");
            e || (e = new r.Select(t, s(t.attr("mdui-select"))), t.data("mdui.select", e))
        })
    }), g(function () {
        r.mutation(".mdui-appbar-scroll-hide", function () {
            var t = g(this);
            t.data("mdui.headroom", new r.Headroom(t))
        }), r.mutation(".mdui-appbar-scroll-toolbar-hide", function () {
            var t = g(this), e = new r.Headroom(t, {
                pinnedClass: "mdui-headroom-pinned-toolbar",
                unpinnedClass: "mdui-headroom-unpinned-toolbar"
            });
            t.data("mdui.headroom", e)
        })
    }), r.Tab = function () {
        var a = {trigger: "click", loop: !1}, s = function (t) {
            return t[0].disabled || null !== t.attr("disabled")
        };

        function t(t, e) {
            var n = this;
            if (n.$tab = g(t).eq(0), n.$tab.length) {
                var i = n.$tab.data("mdui.tab");
                if (i) return i;
                n.options = g.extend({}, a, e || {}), n.$tabs = n.$tab.children("a"), n.$indicator = g('<div class="mdui-tab-indicator"></div>').appendTo(n.$tab), n.activeIndex = !1;
                var o = location.hash;
                o && n.$tabs.each(function (t, e) {
                    if (g(e).attr("href") === o) return n.activeIndex = t, !1
                }), !1 === n.activeIndex && n.$tabs.each(function (t, e) {
                    if (g(e).hasClass("mdui-tab-active")) return n.activeIndex = t, !1
                }), n.$tabs.length && !1 === n.activeIndex && (n.activeIndex = 0), n._setActive(), T.on("resize", g.throttle(function () {
                    n._setIndicatorPosition()
                }, 100)), n.$tabs.each(function (t, e) {
                    n._bindTabEvent(e)
                })
            }
        }

        return t.prototype._bindTabEvent = function (e) {
            var n = this, i = g(e), t = function (t) {
                s(i) ? t.preventDefault() : (n.activeIndex = n.$tabs.index(e), n._setActive())
            };
            i.on("click", t), "hover" === n.options.trigger && i.on("mouseenter", t), i.on("click", function (t) {
                0 === i.attr("href").indexOf("#") && t.preventDefault()
            })
        }, t.prototype._setActive = function () {
            var o = this;
            o.$tabs.each(function (t, e) {
                var n = g(e), i = n.attr("href");
                t !== o.activeIndex || s(n) ? (n.removeClass("mdui-tab-active"), g(i).hide()) : (n.hasClass("mdui-tab-active") || (p("change", "tab", o, o.$tab, {
                    index: o.activeIndex,
                    id: i.substr(1)
                }), p("show", "tab", o, n), n.addClass("mdui-tab-active")), g(i).show(), o._setIndicatorPosition())
            })
        }, t.prototype._setIndicatorPosition = function () {
            var t, e, n = this;
            !1 !== n.activeIndex ? (t = n.$tabs.eq(n.activeIndex), s(t) || (e = t.offset(), n.$indicator.css({
                left: e.left + n.$tab[0].scrollLeft - n.$tab[0].getBoundingClientRect().left + "px",
                width: t.width() + "px"
            }))) : n.$indicator.css({left: 0, width: 0})
        }, t.prototype.next = function () {
            var t = this;
            !1 !== t.activeIndex && (t.$tabs.length > t.activeIndex + 1 ? t.activeIndex++ : t.options.loop && (t.activeIndex = 0), t._setActive())
        }, t.prototype.prev = function () {
            var t = this;
            !1 !== t.activeIndex && (0 < t.activeIndex ? t.activeIndex-- : t.options.loop && (t.activeIndex = t.$tabs.length - 1), t._setActive())
        }, t.prototype.show = function (n) {
            var i = this;
            !1 !== i.activeIndex && (parseInt(n) === n ? i.activeIndex = n : i.$tabs.each(function (t, e) {
                if (e.id === n) return i.activeIndex = t, !1
            }), i._setActive())
        }, t.prototype.handleUpdate = function () {
            var n = this, t = n.$tabs, e = n.$tab.children("a"), i = t.get(), o = e.get();
            if (!e.length) return n.activeIndex = !1, n.$tabs = e, void n._setIndicatorPosition();
            e.each(function (t, e) {
                i.indexOf(e) < 0 && (n._bindTabEvent(e), !1 === n.activeIndex ? n.activeIndex = 0 : t <= n.activeIndex && n.activeIndex++)
            }), t.each(function (t, e) {
                o.indexOf(e) < 0 && (t < n.activeIndex ? n.activeIndex-- : t === n.activeIndex && (n.activeIndex = 0))
            }), n.$tabs = e, n._setActive()
        }, t
    }(), g(function () {
        r.mutation("[mdui-tab]", function () {
            var t = g(this), e = t.data("mdui.tab");
            e || (e = new r.Tab(t, s(t.attr("mdui-tab"))), t.data("mdui.tab", e))
        })
    }), r.Drawer = function () {
        var o = {overlay: !1, swipe: !1}, a = function () {
            return 1024 <= T.width()
        };

        function t(t, e) {
            var n = this;
            if (n.$drawer = g(t).eq(0), n.$drawer.length) {
                var i = n.$drawer.data("mdui.drawer");
                if (i) return i;
                n.options = g.extend({}, o, e || {}), n.overlay = !1, n.position = n.$drawer.hasClass("mdui-drawer-right") ? "right" : "left", n.$drawer.hasClass("mdui-drawer-close") ? n.state = "closed" : n.$drawer.hasClass("mdui-drawer-open") ? n.state = "opened" : a() ? n.state = "opened" : n.state = "closed", T.on("resize", g.throttle(function () {
                    a() ? (n.overlay && !n.options.overlay && (g.hideOverlay(), n.overlay = !1, g.unlockScreen()), n.$drawer.hasClass("mdui-drawer-close") || (n.state = "opened")) : n.overlay || "opened" !== n.state || (n.$drawer.hasClass("mdui-drawer-open") ? (g.showOverlay(), n.overlay = !0, g.lockScreen(), g(".mdui-overlay").one("click", function () {
                        n.close()
                    })) : n.state = "closed")
                }, 100)), n.$drawer.find("[mdui-drawer-close]").each(function () {
                    g(this).on("click", function () {
                        n.close()
                    })
                }), s(n)
            }
        }

        var s = function (a) {
            var e, s, r, d, c = !1, u = !1, l = g("body"), n = 24;

            function f(t, e) {
                var n = "translate(" + -1 * ("right" === a.position ? -1 : 1) * t + "px, 0) !important;";
                a.$drawer.css("cssText", "transform:" + n + (e ? "transition: initial !important;" : ""))
            }

            function o() {
                a.$drawer.css({transform: "", transition: ""})
            }

            function p() {
                return a.$drawer.width() + 10
            }

            function h(t) {
                return Math.min(Math.max("closing" === c ? d - t : p() + d - t, 0), p())
            }

            function i(t) {
                s = t.touches[0].pageX, "right" === a.position && (s = l.width() - s), r = t.touches[0].pageY, "opened" !== a.state && (n < s || e !== i) || (u = !0, l.on({
                    touchmove: m,
                    touchend: v,
                    touchcancel: m
                }))
            }

            function m(t) {
                var e = t.touches[0].pageX;
                "right" === a.position && (e = l.width() - e);
                var n = t.touches[0].pageY;
                if (c) f(h(e), !0); else if (u) {
                    var i = Math.abs(e - s), o = Math.abs(n - r);
                    8 < i && o <= 8 ? (d = e, c = "opened" === a.state ? "closing" : "opening", g.lockScreen(), f(h(e), !0)) : i <= 8 && 8 < o && v()
                }
            }

            function v(t) {
                if (c) {
                    var e = t.changedTouches[0].pageX;
                    "right" === a.position && (e = l.width() - e);
                    var n = h(e) / p();
                    u = !1;
                    var i = c;
                    c = null, "opening" === i ? n < .92 ? (o(), a.open()) : o() : .08 < n ? (o(), a.close()) : o(), g.unlockScreen()
                } else u = !1;
                l.off({touchmove: m, touchend: v, touchcancel: m})
            }

            a.options.swipe && (e || (l.on("touchstart", i), e = i))
        }, e = function (t) {
            t.$drawer.hasClass("mdui-drawer-open") ? (t.state = "opened", p("opened", "drawer", t, t.$drawer)) : (t.state = "closed", p("closed", "drawer", t, t.$drawer))
        };
        return t.prototype.open = function () {
            var t = this;
            "opening" !== t.state && "opened" !== t.state && (t.state = "opening", p("open", "drawer", t, t.$drawer), t.options.overlay || g("body").addClass("mdui-drawer-body-" + t.position), t.$drawer.removeClass("mdui-drawer-close").addClass("mdui-drawer-open").transitionEnd(function () {
                e(t)
            }), a() && !t.options.overlay || (t.overlay = !0, g.showOverlay().one("click", function () {
                t.close()
            }), g.lockScreen()))
        }, t.prototype.close = function () {
            var t = this;
            "closing" !== t.state && "closed" !== t.state && (t.state = "closing", p("close", "drawer", t, t.$drawer), t.options.overlay || g("body").removeClass("mdui-drawer-body-" + t.position), t.$drawer.addClass("mdui-drawer-close").removeClass("mdui-drawer-open").transitionEnd(function () {
                e(t)
            }), t.overlay && (g.hideOverlay(), t.overlay = !1, g.unlockScreen()))
        }, t.prototype.toggle = function () {
            var t = this;
            "opening" === t.state || "opened" === t.state ? t.close() : "closing" !== t.state && "closed" !== t.state || t.open()
        }, t.prototype.getState = function () {
            return this.state
        }, t
    }(), g(function () {
        r.mutation("[mdui-drawer]", function () {
            var t = g(this), e = s(t.attr("mdui-drawer")), n = e.target;
            delete e.target;
            var i = g(n).eq(0), o = i.data("mdui.drawer");
            o || (o = new r.Drawer(i, e), i.data("mdui.drawer", o)), t.on("click", function () {
                o.toggle()
            })
        })
    }), r.Dialog = function () {
        var n, i, a, o = {
            history: !0,
            overlay: !0,
            modal: !1,
            closeOnEsc: !0,
            closeOnCancel: !0,
            closeOnConfirm: !0,
            destroyOnClosed: !1
        }, s = "__md_dialog", r = function () {
            if (a) {
                var t = a.$dialog, e = t.children(".mdui-dialog-title"), n = t.children(".mdui-dialog-content"),
                    i = t.children(".mdui-dialog-actions");
                t.height(""), n.height("");
                var o = t.height();
                t.css({
                    top: (T.height() - o) / 2 + "px",
                    height: o + "px"
                }), n.height(o - (e.height() || 0) - (i.height() || 0))
            }
        }, d = function () {
            location.hash.substring(1).indexOf("mdui-dialog") < 0 && a.close(!0)
        }, c = function (t) {
            g(t.target).hasClass("mdui-overlay") && a && a.close()
        };

        function t(t, e) {
            var n = this;
            if (n.$dialog = g(t).eq(0), n.$dialog.length) {
                var i = n.$dialog.data("mdui.dialog");
                if (i) return i;
                g.contains(document.body, n.$dialog[0]) || (n.append = !0, g("body").append(n.$dialog)), n.options = g.extend({}, o, e || {}), n.state = "closed", n.$dialog.find("[mdui-dialog-cancel]").each(function () {
                    g(this).on("click", function () {
                        p("cancel", "dialog", n, n.$dialog), n.options.closeOnCancel && n.close()
                    })
                }), n.$dialog.find("[mdui-dialog-confirm]").each(function () {
                    g(this).on("click", function () {
                        p("confirm", "dialog", n, n.$dialog), n.options.closeOnConfirm && n.close()
                    })
                }), n.$dialog.find("[mdui-dialog-close]").each(function () {
                    g(this).on("click", function () {
                        n.close()
                    })
                })
            }
        }

        var u = function (t) {
            t.$dialog.hasClass("mdui-dialog-open") ? (t.state = "opened", p("opened", "dialog", t, t.$dialog)) : (t.state = "closed", p("closed", "dialog", t, t.$dialog), t.$dialog.hide(), 0 === l.queue(s).length && !a && i && (g.unlockScreen(), i = !1), T.off("resize", g.throttle(function () {
                r()
            }, 100)), t.options.destroyOnClosed && t.destroy())
        };
        return t.prototype._doOpen = function () {
            var t = this;
            if (a = t, i || (g.lockScreen(), i = !0), t.$dialog.show(), r(), T.on("resize", g.throttle(function () {
                r()
            }, 100)), t.state = "opening", p("open", "dialog", t, t.$dialog), t.$dialog.addClass("mdui-dialog-open").transitionEnd(function () {
                u(t)
            }), n || (n = g.showOverlay(5100)), n[t.options.modal ? "off" : "on"]("click", c).css("opacity", t.options.overlay ? "" : 0), t.options.history) {
                var e = location.hash.substring(1);
                -1 < e.indexOf("mdui-dialog") && (e = e.replace(/[&?]?mdui-dialog/g, "")), location.hash = e ? e + (-1 < e.indexOf("?") ? "&" : "?") + "mdui-dialog" : "mdui-dialog", T.on("hashchange", d)
            }
        }, t.prototype.open = function () {
            var t = this;
            "opening" !== t.state && "opened" !== t.state && (a && ("opening" === a.state || "opened" === a.state) || l.queue(s).length ? l.queue(s, function () {
                t._doOpen()
            }) : t._doOpen())
        }, t.prototype.close = function () {
            var t = this, e = arguments;
            setTimeout(function () {
                "closing" !== t.state && "closed" !== t.state && (a = null, t.state = "closing", p("close", "dialog", t, t.$dialog), 0 === l.queue(s).length && n && (g.hideOverlay(), n = null), t.$dialog.removeClass("mdui-dialog-open").transitionEnd(function () {
                    u(t)
                }), t.options.history && 0 === l.queue(s).length && (e[0] || window.history.back(), T.off("hashchange", d)), setTimeout(function () {
                    l.dequeue(s)
                }, 100))
            }, 0)
        }, t.prototype.toggle = function () {
            var t = this;
            "opening" === t.state || "opened" === t.state ? t.close() : "closing" !== t.state && "closed" !== t.state || t.open()
        }, t.prototype.getState = function () {
            return this.state
        }, t.prototype.destroy = function () {
            this.append && this.$dialog.remove(), this.$dialog.removeData("mdui.dialog"), 0 !== l.queue(s).length || a || (n && (g.hideOverlay(), n = null), i && (g.unlockScreen(), i = !1))
        }, t.prototype.handleUpdate = function () {
            r()
        }, f.on("keydown", function (t) {
            a && a.options.closeOnEsc && "opened" === a.state && 27 === t.keyCode && a.close()
        }), t
    }(), g(function () {
        f.on("click", "[mdui-dialog]", function () {
            var t = g(this), e = s(t.attr("mdui-dialog")), n = e.target;
            delete e.target;
            var i = g(n).eq(0), o = i.data("mdui.dialog");
            o || (o = new r.Dialog(i, e), i.data("mdui.dialog", o)), o.open()
        })
    }), r.dialog = function (n) {
        var i = {
            text: "", bold: !1, close: !0, onClick: function (t) {
            }
        };
        n = g.extend({}, {
            title: "",
            content: "",
            buttons: [],
            stackedButtons: !1,
            cssClass: "",
            history: !0,
            overlay: !0,
            modal: !1,
            closeOnEsc: !0,
            destroyOnClosed: !0,
            onOpen: function () {
            },
            onOpened: function () {
            },
            onClose: function () {
            },
            onClosed: function () {
            }
        }, n || {}), g.each(n.buttons, function (t, e) {
            n.buttons[t] = g.extend({}, i, e)
        });
        var o = "";
        n.buttons.length && (o = '<div class="mdui-dialog-actions ' + (n.stackedButtons ? "mdui-dialog-actions-stacked" : "") + '">', g.each(n.buttons, function (t, e) {
            o += '<a href="javascript:void(0)" class="mdui-btn mdui-ripple mdui-text-color-primary ' + (e.bold ? "mdui-btn-bold" : "") + '">' + e.text + "</a>"
        }), o += "</div>");
        var t = '<div class="mdui-dialog ' + n.cssClass + '">' + (n.title ? '<div class="mdui-dialog-title">' + n.title + "</div>" : "") + (n.content ? '<div class="mdui-dialog-content">' + n.content + "</div>" : "") + o + "</div>",
            a = new r.Dialog(t, {
                history: n.history,
                overlay: n.overlay,
                modal: n.modal,
                closeOnEsc: n.closeOnEsc,
                destroyOnClosed: n.destroyOnClosed
            });
        return n.buttons.length && a.$dialog.find(".mdui-dialog-actions .mdui-btn").each(function (t, e) {
            g(e).on("click", function () {
                "function" == typeof n.buttons[t].onClick && n.buttons[t].onClick(a), n.buttons[t].close && a.close()
            })
        }), "function" == typeof n.onOpen && a.$dialog.on("open.mdui.dialog", function () {
            n.onOpen(a)
        }).on("opened.mdui.dialog", function () {
            n.onOpened(a)
        }).on("close.mdui.dialog", function () {
            n.onClose(a)
        }).on("closed.mdui.dialog", function () {
            n.onClosed(a)
        }), a.open(), a
    }, r.alert = function (t, e, n, i) {
        "function" == typeof e && (i = n = e = ""), void 0 === n && (n = function () {
        }), void 0 === i && (i = {});
        return i = g.extend({}, {confirmText: "ok", history: !0, modal: !1, closeOnEsc: !0}, i), r.dialog({
            title: e,
            content: t,
            buttons: [{text: i.confirmText, bold: !1, close: !0, onClick: n}],
            cssClass: "mdui-dialog-alert",
            history: i.history,
            modal: i.modal,
            closeOnEsc: i.closeOnEsc
        })
    }, r.confirm = function (t, e, n, i, o) {
        "function" == typeof e && (o = i = n = e = ""), void 0 === n && (n = function () {
        }), void 0 === i && (i = function () {
        }), void 0 === o && (o = {});
        return o = g.extend({}, {
            confirmText: "ok",
            cancelText: "cancel",
            history: !0,
            modal: !1,
            closeOnEsc: !0
        }, o), r.dialog({
            title: e,
            content: t,
            buttons: [{text: o.cancelText, bold: !1, close: !0, onClick: i}, {
                text: o.confirmText,
                bold: !1,
                close: !0,
                onClick: n
            }],
            cssClass: "mdui-dialog-confirm",
            history: o.history,
            modal: o.modal,
            closeOnEsc: o.closeOnEsc
        })
    }, r.prompt = function (t, e, i, n, o) {
        "function" == typeof e && (o = n = i = e = ""), void 0 === i && (i = function () {
        }), void 0 === n && (n = function () {
        }), void 0 === o && (o = {});
        var a = '<div class="mdui-textfield">' + (t ? '<label class="mdui-textfield-label">' + t + "</label>" : "") + ("text" === (o = g.extend({}, {
            confirmText: "ok",
            cancelText: "cancel",
            history: !0,
            modal: !1,
            closeOnEsc: !0,
            type: "text",
            maxlength: "",
            defaultValue: "",
            confirmOnEnter: !1
        }, o)).type ? '<input class="mdui-textfield-input" type="text" value="' + o.defaultValue + '" ' + (o.maxlength ? 'maxlength="' + o.maxlength + '"' : "") + "/>" : "") + ("textarea" === o.type ? '<textarea class="mdui-textfield-input" ' + (o.maxlength ? 'maxlength="' + o.maxlength + '"' : "") + ">" + o.defaultValue + "</textarea>" : "") + "</div>";
        return r.dialog({
            title: e,
            content: a,
            buttons: [{
                text: o.cancelText, bold: !1, close: !0, onClick: function (t) {
                    var e = t.$dialog.find(".mdui-textfield-input").val();
                    n(e, t)
                }
            }, {
                text: o.confirmText, bold: !1, close: !0, onClick: function (t) {
                    var e = t.$dialog.find(".mdui-textfield-input").val();
                    i(e, t)
                }
            }],
            cssClass: "mdui-dialog-prompt",
            history: o.history,
            modal: o.modal,
            closeOnEsc: o.closeOnEsc,
            onOpen: function (n) {
                var t = n.$dialog.find(".mdui-textfield-input");
                r.updateTextFields(t), t[0].focus(), "text" === o.type && !0 === o.confirmOnEnter && t.on("keydown", function (t) {
                    if (13 === t.keyCode) {
                        var e = n.$dialog.find(".mdui-textfield-input").val();
                        i(e, n), n.close()
                    }
                }), "textarea" === o.type && t.on("input", function () {
                    n.handleUpdate()
                }), o.maxlength && n.handleUpdate()
            }
        })
    }, r.Tooltip = function () {
        var o = {position: "auto", delay: 0, content: ""}, c = function () {
            return 1024 < T.width()
        };

        function t(t, e) {
            var n = this;
            if (n.$target = g(t).eq(0), n.$target.length) {
                var i = n.$target.data("mdui.tooltip");
                if (i) return i;
                n.options = g.extend({}, o, e || {}), n.state = "closed", n.$tooltip = g('<div class="mdui-tooltip" id="' + g.guid() + '">' + n.options.content + "</div>").appendTo(document.body), n.$target.on("touchstart mouseenter", function (t) {
                    this.disabled || d.isAllow(t) && (d.register(t), n.open())
                }).on("touchend mouseleave", function (t) {
                    this.disabled || d.isAllow(t) && n.close()
                }).on(d.unlock, function (t) {
                    this.disabled || d.register(t)
                })
            }
        }

        var e = function (t) {
            t.$tooltip.hasClass("mdui-tooltip-open") ? (t.state = "opened", p("opened", "tooltip", t, t.$target)) : (t.state = "closed", p("closed", "tooltip", t, t.$target))
        };
        return t.prototype._doOpen = function () {
            var t = this;
            t.state = "opening", p("open", "tooltip", t, t.$target), t.$tooltip.addClass("mdui-tooltip-open").transitionEnd(function () {
                e(t)
            })
        }, t.prototype.open = function (t) {
            var e = this;
            if ("opening" !== e.state && "opened" !== e.state) {
                var n = g.extend({}, e.options);
                g.extend(e.options, s(e.$target.attr("mdui-tooltip"))), t && g.extend(e.options, t), n.content !== e.options.content && e.$tooltip.html(e.options.content), function (t) {
                    var e, n, i, o = t.$target[0].getBoundingClientRect(), a = c() ? 14 : 24,
                        s = t.$tooltip[0].offsetWidth, r = t.$tooltip[0].offsetHeight;
                    switch (i = t.options.position, -1 === ["bottom", "top", "left", "right"].indexOf(i) && (i = o.top + o.height + a + r + 2 < T.height() ? "bottom" : a + r + 2 < o.top ? "top" : a + s + 2 < o.left ? "left" : o.width + a + s + 2 < T.width() - o.left ? "right" : "bottom"), i) {
                        case"bottom":
                            e = s / 2 * -1, n = o.height / 2 + a, t.$tooltip.transformOrigin("top center");
                            break;
                        case"top":
                            e = s / 2 * -1, n = -1 * (r + o.height / 2 + a), t.$tooltip.transformOrigin("bottom center");
                            break;
                        case"left":
                            e = -1 * (s + o.width / 2 + a), n = r / 2 * -1, t.$tooltip.transformOrigin("center right");
                            break;
                        case"right":
                            e = o.width / 2 + a, n = r / 2 * -1, t.$tooltip.transformOrigin("center left")
                    }
                    var d = t.$target.offset();
                    t.$tooltip.css({
                        top: d.top + o.height / 2 + "px",
                        left: d.left + o.width / 2 + "px",
                        "margin-left": e + "px",
                        "margin-top": n + "px"
                    })
                }(e), e.options.delay ? e.timeoutId = setTimeout(function () {
                    e._doOpen()
                }, e.options.delay) : (e.timeoutId = !1, e._doOpen())
            }
        }, t.prototype.close = function () {
            var t = this;
            t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = !1), "closing" !== t.state && "closed" !== t.state && (t.state = "closing", p("close", "tooltip", t, t.$target), t.$tooltip.removeClass("mdui-tooltip-open").transitionEnd(function () {
                e(t)
            }))
        }, t.prototype.toggle = function () {
            var t = this;
            "opening" === t.state || "opened" === t.state ? t.close() : "closing" !== t.state && "closed" !== t.state || t.open()
        }, t.prototype.getState = function () {
            return this.state
        }, t
    }(), g(function () {
        f.on("touchstart mouseover", "[mdui-tooltip]", function () {
            var t = g(this), e = t.data("mdui.tooltip");
            if (!e) {
                var n = s(t.attr("mdui-tooltip"));
                e = new r.Tooltip(t, n), t.data("mdui.tooltip", e)
            }
        })
    }), function () {
        var n, i = "__md_snackbar", a = {
            timeout: 4e3,
            buttonText: "",
            buttonColor: "",
            position: "bottom",
            closeOnButtonClick: !0,
            closeOnOutsideClick: !0,
            onClick: function () {
            },
            onButtonClick: function () {
            },
            onOpen: function () {
            },
            onOpened: function () {
            },
            onClose: function () {
            },
            onClosed: function () {
            }
        }, o = function (t) {
            var e = g(t.target);
            e.hasClass("mdui-snackbar") || e.parents(".mdui-snackbar").length || n.close()
        };

        function s(t, e) {
            var n = this;
            if (n.message = t, n.options = g.extend({}, a, e || {}), n.message) {
                n.state = "closed", n.timeoutId = !1;
                var i = "", o = "";
                0 === n.options.buttonColor.indexOf("#") || 0 === n.options.buttonColor.indexOf("rgb") ? i = 'style="color:' + n.options.buttonColor + '"' : "" !== n.options.buttonColor && (o = "mdui-text-color-" + n.options.buttonColor), n.$snackbar = g('<div class="mdui-snackbar"><div class="mdui-snackbar-text">' + n.message + "</div>" + (n.options.buttonText ? '<a href="javascript:void(0)" class="mdui-snackbar-action mdui-btn mdui-ripple mdui-ripple-white ' + o + '" ' + i + ">" + n.options.buttonText + "</a>" : "") + "</div>").appendTo(document.body), n._setPosition("close"), n.$snackbar.reflow().addClass("mdui-snackbar-" + n.options.position)
            }
        }

        s.prototype._setPosition = function (t) {
            var e, n, i = this.$snackbar[0].clientHeight, o = this.options.position;
            e = "bottom" === o || "top" === o ? "-50%" : "0", "open" === t ? n = "0" : ("bottom" === o && (n = i), "top" === o && (n = -i), "left-top" !== o && "right-top" !== o || (n = -i - 24), "left-bottom" !== o && "right-bottom" !== o || (n = i + 24)), this.$snackbar.transform("translate(" + e + "," + n + "px)")
        }, s.prototype.open = function () {
            var e = this;
            e.message && "opening" !== e.state && "opened" !== e.state && (n ? l.queue(i, function () {
                e.open()
            }) : ((n = e).state = "opening", e.options.onOpen(), e._setPosition("open"), e.$snackbar.transitionEnd(function () {
                "opening" === e.state && (e.state = "opened", e.options.onOpened(), e.options.buttonText && e.$snackbar.find(".mdui-snackbar-action").on("click", function () {
                    e.options.onButtonClick(), e.options.closeOnButtonClick && e.close()
                }), e.$snackbar.on("click", function (t) {
                    g(t.target).hasClass("mdui-snackbar-action") || e.options.onClick()
                }), e.options.closeOnOutsideClick && f.on(d.start, o), e.options.timeout && (e.timeoutId = setTimeout(function () {
                    e.close()
                }, e.options.timeout)))
            })))
        }, s.prototype.close = function () {
            var t = this;
            t.message && "closing" !== t.state && "closed" !== t.state && (t.timeoutId && clearTimeout(t.timeoutId), t.options.closeOnOutsideClick && f.off(d.start, o), t.state = "closing", t.options.onClose(), t._setPosition("close"), t.$snackbar.transitionEnd(function () {
                "closing" === t.state && (n = null, t.state = "closed", t.options.onClosed(), t.$snackbar.remove(), l.dequeue(i))
            }))
        }, r.snackbar = function (t, e) {
            "string" != typeof t && (t = (e = t).message);
            var n = new s(t, e);
            return n.open(), n
        }
    }(), f.on("click", ".mdui-bottom-nav>a", function () {
        var n, i = g(this), o = i.parent();
        o.children("a").each(function (t, e) {
            (n = i.is(e)) && p("change", "bottomNav", null, o, {index: t}), g(e)[n ? "addClass" : "removeClass"]("mdui-bottom-nav-active")
        })
    }), r.mutation(".mdui-bottom-nav-scroll-hide", function () {
        var t = g(this), e = new r.Headroom(t, {
            pinnedClass: "mdui-headroom-pinned-down",
            unpinnedClass: "mdui-headroom-unpinned-down"
        });
        t.data("mdui.headroom", e)
    }), o = function () {
        var t = !!arguments.length && arguments[0];
        return '<div class="mdui-spinner-layer ' + (t ? "mdui-spinner-layer-" + t : "") + '"><div class="mdui-spinner-circle-clipper mdui-spinner-left"><div class="mdui-spinner-circle"></div></div><div class="mdui-spinner-gap-patch"><div class="mdui-spinner-circle"></div></div><div class="mdui-spinner-circle-clipper mdui-spinner-right"><div class="mdui-spinner-circle"></div></div></div>'
    }, m = function (t) {
        var e, n = g(t);
        e = n.hasClass("mdui-spinner-colorful") ? o("1") + o("2") + o("3") + o("4") : o(), n.html(e)
    }, r.mutation(".mdui-spinner", function () {
        m(this)
    }), r.updateSpinners = function () {
        g(arguments.length ? arguments[0] : ".mdui-spinner").each(function () {
            m(this)
        })
    }, r.Panel = function (t, e) {
        return new v(t, e, "panel")
    }, g(function () {
        r.mutation("[mdui-panel]", function () {
            var t = g(this), e = t.data("mdui.panel");
            if (!e) {
                var n = s(t.attr("mdui-panel"));
                e = new r.Panel(t, n), t.data("mdui.panel", e)
            }
        })
    }), r.Menu = function () {
        var a = {
            position: "auto",
            align: "auto",
            gutter: 16,
            fixed: !1,
            covered: "auto",
            subMenuTrigger: "hover",
            subMenuDelay: 200
        }, s = function (t) {
            var e, n, i, o, a, s, r = T.height(), d = T.width(), c = t.options.gutter, u = t.isCovered,
                l = t.options.fixed, f = t.$menu.width(), p = t.$menu.height(), h = t.$anchor,
                m = h[0].getBoundingClientRect(), v = m.top, g = m.left, b = m.height, x = m.width, y = r - v - b,
                w = d - g - x, $ = h[0].offsetTop, C = h[0].offsetLeft;
            if (i = "auto" === t.options.position ? p + c < y + (u ? b : 0) ? "bottom" : p + c < v + (u ? b : 0) ? "top" : "center" : t.options.position, o = "auto" === t.options.align ? f + c < w + x ? "left" : f + c < g + x ? "right" : "center" : t.options.align, "bottom" === i) s = "0", n = (u ? 0 : b) + (l ? v : $); else if ("top" === i) s = "100%", n = (u ? b : 0) + (l ? v - p : $ - p); else {
                s = "50%";
                var k = p;
                t.isCascade || r < p + 2 * c && (k = r - 2 * c, t.$menu.height(k)), n = (r - k) / 2 + (l ? 0 : $ - v)
            }
            if (t.$menu.css("top", n + "px"), "left" === o) a = "0", e = l ? g : C; else if ("right" === o) a = "100%", e = l ? g + x - f : C + x - f; else {
                a = "50%";
                var O = f;
                d < f + 2 * c && (O = d - 2 * c, t.$menu.width(O)), e = (d - O) / 2 + (l ? 0 : C - g)
            }
            t.$menu.css("left", e + "px"), t.$menu.transformOrigin(a + " " + s)
        }, u = function (t) {
            var e, n, i, o, a, s, r, d, c, u, l, f, p, h, m, v, g;
            d = (e = t).parent(".mdui-menu-item"), c = T.height(), u = T.width(), l = e.width(), f = e.height(), p = d[0].getBoundingClientRect(), h = p.width, m = p.height, v = p.left, g = p.top, a = l < u - v - h ? "left" : l < v ? "right" : "left", "bottom" == (o = f < c - g ? "bottom" : f < g + m ? "top" : "bottom") ? n = r = "0" : "top" === o && (r = "100%", n = -f + m), e.css("top", n + "px"), "left" === a ? (s = "0", i = h) : "right" === a && (s = "100%", i = -l), e.css("left", i + "px"), e.transformOrigin(s + " " + r), t.addClass("mdui-menu-open").parent(".mdui-menu-item").addClass("mdui-menu-item-active")
        }, l = function (t) {
            t.removeClass("mdui-menu-open").addClass("mdui-menu-closing").transitionEnd(function () {
                t.removeClass("mdui-menu-closing")
            }).parent(".mdui-menu-item").removeClass("mdui-menu-item-active"), t.find(".mdui-menu").each(function () {
                var t = g(this);
                t.removeClass("mdui-menu-open").addClass("mdui-menu-closing").transitionEnd(function () {
                    t.removeClass("mdui-menu-closing")
                }).parent(".mdui-menu-item").removeClass("mdui-menu-item-active")
            })
        }, r = function (r) {
            var d, c;
            (r.$menu.on("click", ".mdui-menu-item", function (t) {
                var e = g(this), n = g(t.target);
                if (null === e.attr("disabled") && !n.is(".mdui-menu") && !n.is(".mdui-divider") && n.parents(".mdui-menu-item").eq(0).is(e)) {
                    var i, o = e.children(".mdui-menu");
                    e.parent(".mdui-menu").children(".mdui-menu-item").each(function () {
                        var t = g(this).children(".mdui-menu");
                        !t.length || o.length && t.is(o) || l(t)
                    }), o.length && ((i = o).hasClass("mdui-menu-open") ? l(i) : u(i))
                }
            }), "hover" === r.options.subMenuTrigger) && r.$menu.on("mouseover mouseout", ".mdui-menu-item", function (t) {
                var e = g(this), n = t.type, i = g(t.relatedTarget);
                if (null === e.attr("disabled")) {
                    if ("mouseover" === n) {
                        if (!e.is(i) && g.contains(e[0], i[0])) return
                    } else if ("mouseout" === n && (e.is(i) || g.contains(e[0], i[0]))) return;
                    var o = e.children(".mdui-menu");
                    if ("mouseover" === n) {
                        if (o.length) {
                            var a = o.data("timeoutClose.mdui.menu");
                            if (a && clearTimeout(a), o.hasClass("mdui-menu-open")) return;
                            clearTimeout(c), d = c = setTimeout(function () {
                                u(o)
                            }, r.options.subMenuDelay), o.data("timeoutOpen.mdui.menu", d)
                        }
                    } else if ("mouseout" === n && o.length) {
                        var s = o.data("timeoutOpen.mdui.menu");
                        s && clearTimeout(s), d = setTimeout(function () {
                            l(o)
                        }, r.options.subMenuDelay), o.data("timeoutClose.mdui.menu", d)
                    }
                }
            })
        };

        function t(t, e, n) {
            var i = this;
            if (i.$anchor = g(t).eq(0), i.$anchor.length) {
                var o = i.$anchor.data("mdui.menu");
                if (o) return o;
                i.$menu = g(e).eq(0), i.$anchor.siblings(i.$menu).length && (i.options = g.extend({}, a, n || {}), i.state = "closed", i.isCascade = i.$menu.hasClass("mdui-menu-cascade"), "auto" === i.options.covered ? i.isCovered = !i.isCascade : i.isCovered = i.options.covered, i.$anchor.on("click", function () {
                    i.toggle()
                }), f.on("click touchstart", function (t) {
                    var e = g(t.target);
                    "opening" !== i.state && "opened" !== i.state || e.is(i.$menu) || g.contains(i.$menu[0], e[0]) || e.is(i.$anchor) || g.contains(i.$anchor[0], e[0]) || i.close()
                }), f.on("click", ".mdui-menu-item", function (t) {
                    var e = g(this);
                    e.find(".mdui-menu").length || null !== e.attr("disabled") || i.close()
                }), r(i), T.on("resize", g.throttle(function () {
                    s(i)
                }, 100)))
            }
        }

        t.prototype.toggle = function () {
            var t = this;
            "opening" === t.state || "opened" === t.state ? t.close() : "closing" !== t.state && "closed" !== t.state || t.open()
        };
        var e = function (t) {
            t.$menu.removeClass("mdui-menu-closing"), "opening" === t.state && (t.state = "opened", p("opened", "menu", t, t.$menu)), "closing" === t.state && (t.state = "closed", p("closed", "menu", t, t.$menu), t.$menu.css({
                top: "",
                left: "",
                width: "",
                position: "fixed"
            }))
        };
        return t.prototype.open = function () {
            var t = this;
            "opening" !== t.state && "opened" !== t.state && (t.state = "opening", p("open", "menu", t, t.$menu), s(t), t.$menu.css("position", t.options.fixed ? "fixed" : "absolute").addClass("mdui-menu-open").transitionEnd(function () {
                e(t)
            }))
        }, t.prototype.close = function () {
            var t = this;
            "closing" !== t.state && "closed" !== t.state && (t.state = "closing", p("close", "menu", t, t.$menu), t.$menu.find(".mdui-menu").each(function () {
                l(g(this))
            }), t.$menu.removeClass("mdui-menu-open").addClass("mdui-menu-closing").transitionEnd(function () {
                e(t)
            }))
        }, t
    }(), g(function () {
        f.on("click", "[mdui-menu]", function () {
            var t = g(this), e = t.data("mdui.menu");
            if (!e) {
                var n = s(t.attr("mdui-menu")), i = n.target;
                delete n.target, e = new r.Menu(t, i, n), t.data("mdui.menu", e), e.toggle()
            }
        })
    }), r.JQ = g, r
});