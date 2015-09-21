(function(w, d) {
    var sTime = 200;
    var cTime = 5;

    //var vol = [
    //    ["http://s1.gzmjnx.cn/img/ltzn_15060910/swf/ltzn_50704_1000x60.swf", "http://cdn.859377.com/welcome.html?id=7849"],
    //    ["http://s1.gzmjnx.cn/img/ltzn_15060910/swf/ltzn_50704_1000x60.swf", "http://cdn.859377.com/welcome.html?id=7849"],
    //    ["http://s1.gzmjnx.cn/img/ltzn_15060910/swf/ltzn_50824_1000x60_tw.swf", "http://gjrowx.code.mytanwan.com/htmlcode/1598.html"],
    //    ["http://s1.gzmjnx.cn/img/ltzn_15060910/swf/ltzn_50824_1000x60_tw.swf", "http://gjrowx.code.mytanwan.com/htmlcode/1598.html"],
    //    ["http://s1.gzmjnx.cn/img/ltzn_15060910/swf/hqb_50817_1000x60.swf", "http://www.51miyou.cn/advertise/main.html"],
    //    ["http://s1.gzmjnx.cn/img/ltzn_15060910/swf/dzs_50820_1000x60.swf", "http://bdty.yy.com/12655.html"],
    //    ["http://s1.gzmjnx.cn/img/ltzn_15060910/swf/zszs_50820_1000x60.swf", "http://bdty.yy.com/12658.html"]
    //];

    //为了本地演示,修改为本地地址
    var vol = [
            ["./swf/ltzn_50704_1000x60.swf", "http://cdn.859377.com/welcome.html?id=7849"],
            ["./swf/ltzn_50824_1000x60_tw.swf", "http://gjrowx.code.mytanwan.com/htmlcode/1598.html"],
            ["./swf/hqb_50817_1000x60.swf", "http://www.51miyou.cn/advertise/main.html"],
            ["./swf/zszs_50820_1000x60.swf", "http://bdty.yy.com/12658.html"]
        ];

    function $c(n) {
        return d.createElement(n)
    }
    function $do() {
        var index = Math.floor(Math.random() * vol.length);
        var ite = vol[index];
        var str = '<div style="position:absolute; top:23px; right:10px; z-index:2;"><span style="width:13px;height:13px;cursor:pointer;display:block;background: url(http://a.wrkxsq.com/img/close3.png) 0px 0px no-repeat; " onclick="javascript:var e=document.getElementById(\'iuid_tp_8729\');if(!e)return;e.parentNode.removeChild(e);"></span></div><embed pluginspage="http://www.macromedia.com/go/getflashplayer" src="{0}" type="application/x-shockwave-flash" style="width: 1000px; height: 60px;" wmode="transparent"><a target="_blank" href="{1}" style="position:absolute; z-index:1;left:0px;top:0px;cursor:pointer;width:1000px; height:60px; background-color:#fff;filter:alpha(opacity=0);opacity:0;"></a>';
        str = str.replace("{0}", ite[0]);
        str = str.replace("{1}", ite[1]);
        var e = $c("DIV");
        e.id = "iuid_tp_8729";
        e.style.cssText = "display: block; padding: 0px; margin: 0 auto; width:1000px; border: 0px none; position:relative;";
        e.innerHTML = str;
        d.body.insertBefore(e, d.body.firstChild)
    }
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
    var ckie = 0;
    var sid = "lpvt_f30859c04ffb44465ef0467cc0fc181b";
    var skie = sCkie.get(sid);
    if (skie != "") {
        ckie = parseInt(skie)
    }
    if (ckie < 1) {
        setTimeout($do, sTime);
        sCkie.add(sid, "1", sCkie.expTime(cTime * 60 * 1000), 0, 0, 0)
    }
})(window, document);

//本脚本会插入flash 广告, 同时设置了cookie,测试时禁止此站点的cookie即可