'use strict';

module.exports = function (cuf) {

    let pkg = cuf.file.readJSON('package.json');

    let banner = `
    /*!
    * image2D - `+ pkg.description + `
    * `+ pkg.repository.url + `
    *
    * author `+ pkg.author + `
    *
    * version `+ pkg.version + `
    *
    * build Thu Apr 11 2019
    *
    * Copyright yelloxing
    * Released under the `+ pkg.license + ` license
    *
    * Date:`+ new Date() + `
    */\n\n`;

    cuf.config({

        // 说明文字打印
        "explain": {
            "plug": "./task/explain.js",
            "task": {
                "target": {
                    "karma单元测试": "npm run unit",
                    "rollup+babel打包": "npm run build"
                }
            }
        },

        // 代码打包
        "babel": {
            "plug": "./task/babel.js",
            "options": {
                // 中间文件是否删除
                "delete_temp": true
            },
            "task": {
                "target": {
                    "banner": banner,
                    "entry": "./build/module.new.js",
                    "output": "./build/image2D.js"
                }
            }
        },

        // JS代码压缩
        "uglify": {
            "plug": "./task/uglify.js",
            "task": {
                "target": {
                    "banner": banner,
                    "entry": "./build/image2D.js",
                    "output": "./build/image2D.min.js"
                }
            }
        }
    });

    cuf.register("explain", ["explain:target"]);
    cuf.register("build-babel", ["babel:target"]);
    cuf.register("build-ugligy", ["uglify:target"]);

};
