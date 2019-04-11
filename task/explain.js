'use strict';

// 控制台打印提示信息
module.exports = function (cuf, options) {
    cuf.print.log(
        "\nProvide more flexible data visualization solutions!" +
        "\n====================================================================" +
        "\n提供更友好的数据可视化解决方案！\n"
    );
    for (let key in options) {
        cuf.print.log(key);
        cuf.print.warn("$ "+options[key] + "\n");
    }
};
