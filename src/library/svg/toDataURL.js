// 返回outHTML
let outhtml = function (dom) {

    var outhtml = dom.outerHTML || (function (n) {
        var div = document.createElement('div'),
            h;
        div.appendChild(n);
        h = div.innerHTML;
        div = null;
        return h;
    })(dom);

    return outhtml;
};

export default function (target, width, height, charset) {
    debugger
};
