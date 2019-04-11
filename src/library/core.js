let image2D = function (nodes) {
    return new image2D.prototype.init(nodes);
};

image2D.prototype.init = function (nodes) {
    for (let flag = 0; flag < nodes.length; flag++) {
        this[flag] = nodes[flag];
    }
    this.length = nodes.length;
    return this;

};

image2D.prototype.extend = image2D.extend = function () {

    let target = arguments[0] || {};
    let source = arguments[1] || {};
    let length = arguments.length;

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
