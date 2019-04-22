'use strict';

let babel = require('babel-core');
let file = require('fs');

module.exports = function (cuf, options) {
    cuf.print.warn(options.entry + " → " + options.output);

    // 使用babel方法转义
    babel.transformFile(options.entry, {}, function (err, result) {
        if (result) {
            cuf.file.write(options.output, options.banner || "");
            cuf.file.writeAppend(options.output, result.code);
            if (options.delete_temp) {
                file.unlinkSync(options.entry);
                cuf.print.error("delete " + options.entry + "\n");
            }
        } else {
            cuf.print.error("\n>> babel转义失败！\n");
        }
    });

};
