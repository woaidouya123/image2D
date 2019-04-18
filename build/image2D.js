
    /*!
    * image2D - 🍇 使用ECMAScript绘制二维图片。Drawing Two-Dimensional Pictures Using ECMAScript.
    * git+https://github.com/yelloxing/image2D.git
    *
    * author 心叶
    *
    * version 0.0.0-beta
    *
    * build Thu Apr 11 2019
    *
    * Copyright yelloxing
    * Released under the MIT license
    *
    * Date:Thu Apr 18 2019 22:24:18 GMT+0800 (GMT+08:00)
    */

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
    'use strict';

    var image2D = function image2D(nodes) {
        return new image2D.prototype.init(nodes);
    };

    image2D.prototype.init = function (nodes) {
        for (var flag = 0; flag < nodes.length; flag++) {
            this[flag] = nodes[flag];
        }
        this.length = nodes.length;
        return this;
    };

    image2D.prototype.extend = image2D.extend = function () {

        var target = arguments[0] || {};
        var source = arguments[1] || {};
        var length = arguments.length;

        /*
         * 确定复制目标和源
         */
        if (length === 1) {
            //如果只有一个参数，目标对象是自己
            source = target;
            target = this;
        }
        if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== "object" && typeof target !== 'function') {
            //如果目标不是对象或函数，则初始化为空对象
            target = {};
        }

        /*
         * 复制属性到对象上面
         */
        for (var key in source) {
            try {
                target[key] = source[key];
            } catch (e) {
                throw new Error("Illegal property value！");
            }
        }

        return target;
    };

    image2D.prototype.init.prototype = image2D.prototype;

    var
    // 保存之前的image2D，防止直接覆盖
    _image2D = window.image2D,


    // 保存之前的$$，防止直接覆盖
    _$$ = window.$$;

    image2D.noConflict = function (deep) {

        // 如果当前的$$是被最新的image2D覆盖的
        // 恢复之前的
        if (window.$$ === image2D) {
            window.$$ = _$$;
        }

        // 如果当前的image2D是被最新的image2D覆盖的
        // 且标记需要恢复
        // 恢复之前的
        if (deep && window.image2D === image2D) {
            window.image2D = _image2D;
        }

        // 返回当前image2D
        // 因为调用这个方法以后
        // 全局window下的image2D和$$是什么
        // 已经不一定了
        return image2D;
    };

    // 挂载库对象到根
    window.image2D = window.$$ = image2D;
})();