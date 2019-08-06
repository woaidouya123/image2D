'use strict';

var $print = require('./tool/print.js');

var options = {
    "karma单元测试": "npm run unit",
    "rollup+babel打包": "npm run build"
};

// 控制台打印提示信息
$print.log(
    "\n🍇  image2D" +
    "\n------------------------------------------------------------" +
    "\nDrawing Two-Dimensional Pictures Using ECMAScript." +
    "\n使用ECMAScript绘制二维图片。\n"
);
for (let key in options) {
    $print.log(key);
    $print.warn("StepByStep:image2D $  " + options[key] + "\n");
}

