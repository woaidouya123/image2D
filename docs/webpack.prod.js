const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const uglify = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new ExtractTextPlugin('./dist/main.css'),
        new uglify({
            uglifyOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                    pure_funcs: ['console.log']
                }
            }
        })
    ]
});
