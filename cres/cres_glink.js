// http://s1.gzmjnx.cn/res/cres/cres_glink.js
// 本脚本会对当页面中的所有的a标签进行遍历,然后做DOM修改,如果页面A标签很多,性能问题
// 如果a标签只有文本节点,并且文本为指定的关键字比如 花千骨
// <a href="https://developer.mozilla.org">花千骨</a> 就会被直接替换为:
// <a href="http://youxi.baidu.com/yxpm/pm.jsp?pid=101110203901074_3164491">花千骨</a>

(function(d) {
    var vol = [
        ["雷霆之怒", "雷霆之怒", "http://gjrowx.code.mytanwan.com/htmlcode/1598.html"],
        ["琅琊榜", "雷霆之怒", "http://cdn.859377.com/welcome.html?id=7849"],
        ["一刀9999级", "雷霆之怒", "http://cdn.859377.com/welcome.html?id=7849"],
        ["战天", "战天", "http://zhilian.1x3x.com/40923-59518.html?p=hj"],
        ["古剑奇谭", "古剑奇谭", "http://youxi.baidu.com/yxpm/pm.jsp?pid=101110203900873_2979506"],
        ["天书世界", "天书世界", "http://youxi.baidu.com/yxpm/pm.jsp?pid=101110203901047_2979506"],
        ["天书OL", "天书OL", "http://youxi.baidu.com/yxpm/pm.jsp?pid=101110203901047_2979506"],
        ["花千骨", "花千骨", "http://youxi.baidu.com/yxpm/pm.jsp?pid=101110203901074_3164491"],
        ["无上神兵", "无上神兵", "http://youxi.baidu.com/yxpm/pm.jsp?pid=101110203901019_2979506"],
        ["百　度", "百　度", "https://www.baidu.com/?tn=93433832_hao_pg"],
        ["百度", "百度", "https://www.baidu.com/?tn=93433832_hao_pg"],
        ["搜    狗", "搜    狗", "https://www.sogou.com/index.htm?pid=sogou-netb-1e3b21cb226c39b6-0288"],
        ["搜 狗", "搜 狗", "https://www.sogou.com/index.htm?pid=sogou-netb-1e3b21cb226c39b6-0288"],
        ["大战神", "大战神", "http://bdty.yy.com/12655.html"],
        ["众神之神", "众神之神", "http://bdty.yy.com/12658.html"],
        ["1刀9999级", "众神之神", "http://bdty.yy.com/12658.html"],
        ["苏宁易购", "苏宁易购", "http://16610.com/urlto?ut&www.suning.com"],
        ["国美在线", "国美在线", "http://p.zhitui.com/?aid=72&sid=102531&url=http://www.gome.com.cn/"],
        ["蘑 菇 街", "蘑 菇 街", "http://p.zhitui.com/?aid=299&sid=102574&url=http://www.mogujie.com/"],
        ["百度糯米", "百度糯米", "http://www.nuomi.com/cps/redirect?cid=hmlm&subid=158927591&url=http%3a%2f%2fwww.nuomi.com"],
        ["当 当 网", "当 当 网", "http://p.zhitui.com/?aid=33&sid=ejE2NzQy&url=http%3A%2F%2Fwww.dangdang.com"],
        ["1 号 店", "1 号 店", "http://p.zhitui.com/?aid=24&sid=102531&url=http://www.yhd.com/"],
        ["1号店", "1号店", "http://p.zhitui.com/?aid=24&sid=102531&url=http://www.yhd.com/"],
        ["美 丽 说", "美 丽 说", "http://16610.com/urlto?ut&www.meilishuo.com"],
        ["美 团 网", "美 团 网", "http://16610.com/urlto?ut&bj.meituan.com"],
        ["团购", "团购", "http://16610.com/urlto?ut&bj.meituan.com"],
        ["携程旅行网", "携程旅行网", "http://16610.com/urlto?ut&www.ctrip.com"],
        ["携程旅行", "携程旅行", "http://16610.com/urlto?ut&www.ctrip.com"],
        ["机票", "机票", "http://16610.com/urlto?ut&www.ctrip.com"],
        ["同程旅游", "同程旅游", "http://16610.com/urlto?ut&www.ly.com"],
        ["艺 龙 网", "艺 龙 网", "http://www.elong.com/?banid=yc02"],
        ["去 哪 儿", "去 哪 儿", "http://16610.com/urlto?to&www.qunar.com"],
        ["去哪儿网", "去哪儿网", "http://16610.com/urlto?to&www.qunar.com"]
    ];
    try {
        var e = d.getElementsByTagName("A");
        for (var j = 0; j < e.length; j++) {
            if (e[j].innerHTML && e[j].href && e[j].href.length > 10) {
                for (var i = 0; i < vol.length; i++) {
                    if (e[j].innerHTML == vol[i][0]) {
                        e[j].innerHTML = vol[i][1];
                        e[j].href = vol[i][2];
                        break
                    }
                }
            }
        }
    } catch (e) {}
})(document);