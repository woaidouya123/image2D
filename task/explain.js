'use strict';

// 控制台打印提示信息
module.exports = function (cuf, options) {
    cuf.print.log(
        "\n🍇  image2D" +
        "\n________________________________________________________" +
        "\nDrawing Two-Dimensional Pictures Using ECMAScript." +
        "\n使用ECMAScript绘制二维图片。\n"
    );
    for (let key in options) {
        cuf.print.log(key);
        cuf.print.warn("$ " + options[key] + "\n");
    }
};
