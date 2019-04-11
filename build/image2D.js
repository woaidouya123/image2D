
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
    * Date:Thu Apr 11 2019 17:49:51 GMT+0800 (GMT+08:00)
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

    /**
     * 判断传入的是不是结点
     * @param {Any} param
     * @return {Boolean} true:结点，false:不是结点
     */

    /**
     * 返回渲染后的CSS样式值
     * @param {DOM} dom 目标结点
     * @param {String} name 属性名称（可选）
     * @return {String}
     */
    var getStyle = function getStyle(dom, name) {

        // 获取结点的全部样式
        var allStyle = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(dom, null) : dom.currentStyle;

        // 如果没有指定属性名称，返回全部样式
        return typeof name === 'string' ? allStyle.getPropertyValue(name) : allStyle;
    };

    /**
     * 初始化配置文件
     * @param {Json} init 默认值
     * @param {Json} data
     * @return {Json}
     */
    var initConfig = function initConfig(init, data) {
        for (var key in data) {
            try {
                init[key] = data[key];
            } catch (e) {
                throw new Error("Illegal property value！");
            }
        }return init;
    };

    /**
     * Hermite三次插值
     * @param {Json} config 可选
     */
    function hermite(config) {

        config = initConfig({
            // 张弛系数
            "u": 0.5
        }, config);

        var MR = void 0,
            a = void 0,
            b = void 0;

        /**
         * 根据x值返回y值
         * @param {Number} x
         */
        var hermite = function hermite(x) {
            if (MR) {
                var sx = (x - a) / (b - a),
                    sx2 = sx * sx,
                    sx3 = sx * sx2;
                var sResult = sx3 * MR[0] + sx2 * MR[1] + sx * MR[2] + MR[3];
                return sResult * (b - a);
            } else throw new Error('You shoud first set the position!');
        };

        /**
         * 设置点的位置
         * @param {Number} x1 左边点的位置
         * @param {Number} y1
         * @param {Number} x2 右边点的位置
         * @param {Number} y2
         * @param {Number} s1 二个点的斜率
         * @param {Number} s2
         */
        hermite.setP = function (x1, y1, x2, y2, s1, s2) {
            if (x1 < x2) {
                // 记录原始尺寸
                a = x1;b = x2;
                var p3 = config.u * s1,
                    p4 = config.u * s2;
                // 缩放到[0,1]定义域
                y1 /= x2 - x1;
                y2 /= x2 - x1;
                // MR是提前计算好的多项式通解矩阵
                // 为了加速计算
                // 如上面说的
                // 统一在[0,1]上计算后再通过缩放和移动恢复
                // 避免了动态求解矩阵的麻烦
                MR = [2 * y1 - 2 * y2 + p3 + p4, 3 * y2 - 3 * y1 - 2 * p3 - p4, p3, y1];
            } else throw new Error('The point position should be increamented!');
            return hermite;
        };

        return hermite;
    }

    // 命名空间路径

    // 空格、标志符
    var REGEXP = {

        // http://www.w3.org/TR/css3-selectors/#whitespace
        "whitespace": "[\\x20\\t\\r\\n\\f]",

        // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
        "identifier": "(?:\\\\.|[\\w-]|[^\0-\\xa0])+"
    };

    /**
     * 把颜色统一转变成rgba(x,x,x,x)格式
     * @param {String} oral_color
     * @return {Array} 返回数字数组[r,g,b,a]
     */
    var formatColor = function formatColor(oral_color) {
        var head = document.getElementsByTagName('head')[0];
        head.style.color = oral_color;
        var color = getStyle(head, 'color').replace(/^rgba?\(([^)]+)\)$/, '$1').split(new RegExp('\\,' + REGEXP.whitespace));
        return [+color[0], +color[1], +color[2], color[3] == undefined ? 1 : +color[3]];
    };

    // 挂载方法
    image2D.hermite = hermite;
    image2D.formatColor = formatColor;

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

    window.image2D = window.$$ = image2D;
})();