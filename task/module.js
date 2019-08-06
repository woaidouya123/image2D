const rollup = require('rollup');

var $print = require('./tool/print.js');

async function build(inputOptions, outputOptions) {
    const bundle = await rollup.rollup(inputOptions);
    await bundle.write(outputOptions);
}
$print.log("\n>>> node run module...");
$print.warn("src/index.js → ./build/module.new.js");

build({
    input: 'src/index.js'
}, {
        format: 'iife',
        "name": "temp",
        file: './build/module.new.js'
    });
