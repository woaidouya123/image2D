import sizzle from '../core/sizzle';

let image2D = function (selector, context) {
    return new image2D.prototype.init(selector, context);
};

image2D.prototype.init = function (selector, context) {
    this.context = context = context || document;
    let nodes = sizzle(selector, context), flag;
    for (flag = 0; flag < nodes.length; flag++) {
        this[flag] = nodes[flag];
    }
    this.selector = selector;
    this.length = nodes.length;
    this.__constructor__ = 'image2D';
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
    if (typeof target !== "object" && typeof target !== 'function') {
        //如果目标不是对象或函数，则初始化为空对象
        target = {};
    }

    /*
     * 复制属性到对象上面
     */
    for (let key in source) {
        try {
            target[key] = source[key];
        } catch (e) {
            throw new Error("Illegal property value！");
        }
    }

    return target;
};

image2D.prototype.init.prototype = image2D.prototype;

export default image2D;
