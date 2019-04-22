'use strict';

let cp = require('child_process');
let file = require('fs');

let tempFile = "./build/uglifyjs.new.js";

// js代码压缩混淆
module.exports = function (cuf, options) {
    cuf.print.warn(options.entry + " → " + tempFile + " → " + options.output);
    cuf.file.write(options.output, options.banner || "");
    cp.exec("uglifyjs " + options.entry + " -m -o " + tempFile, function (error, data) {
        if (error) {
            cuf.print.error(error);
            cuf.file.writeAppend(options.output, error);
            cuf.print.error("\n>> uglifyjs压缩失败\n");
        } else {
            cuf.file.writeAppend(options.output, cuf.file.read(tempFile));
        }
        cuf.print.error("delete " + tempFile + "\n");
        file.unlinkSync(tempFile);
    });
};
