'use strict';

let cp = require('child_process');
let file = require('fs');

let tempFile = "./build/uglifyjs.new.js";

var $print = require('./tool/print.js');
var $file = require('./tool/file.js');
var banner = require('./banner.js');

var options = {
    "banner": banner(),
    "entry": "./build/image2D.js",
    "output": "./build/image2D.min.js"
};

// js代码压缩混淆
$print.log("\n>>> node run uglify...");
$print.warn(options.entry + " → " + tempFile + " → " + options.output);
$file.write(options.output, options.banner || "");
cp.exec("uglifyjs " + options.entry + " -m -o " + tempFile, function (error, data) {
    if (error) {
        $print.error(error);
        $file.writeAppend(options.output, error);
        $print.error("\n>> uglifyjs压缩失败\n");
    } else {
        $file.writeAppend(options.output, $file.read(tempFile));
    }
    $print.error("delete " + tempFile + "\n");
    file.unlinkSync(tempFile);
});
