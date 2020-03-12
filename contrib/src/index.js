// 入口
const contrib = function (image2D, config) {

    // todo

};

// npm方式
if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = contrib;
}

// 浏览器环境下
else {
    window.XXX = contrib;
}