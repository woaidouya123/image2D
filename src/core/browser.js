// 返回浏览器名称
let type = function () {
    let userAgent = window.navigator.userAgent;

    if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) return "Opera";

    if (
        (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1) ||
        (userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1)
    ) return "IE";

    if (userAgent.indexOf("Edge") > -1) return "Edge";

    if (userAgent.indexOf("Firefox") > -1) return "Firefox";

    if (userAgent.indexOf("Chrome") > -1) return "Chrome";

    if (userAgent.indexOf("Safari") > -1) return "Safari";

    return "unknown";
};

export default {
    type
};
