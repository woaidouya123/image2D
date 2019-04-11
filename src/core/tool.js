/**
 * 判断传入的是不是结点
 * @param {Any} param
 * @return {Boolean} true:结点，false:不是结点
 */
export let isNode = function (param) {
    return param && (param.nodeType === 1 || param.nodeType === 9 || param.nodeType === 11);
};

/**
 * 返回渲染后的CSS样式值
 * @param {DOM} dom 目标结点
 * @param {String} name 属性名称（可选）
 * @return {String}
 */
export let getStyle = function (dom, name) {

    // 获取结点的全部样式
    var allStyle = document.defaultView && document.defaultView.getComputedStyle ?
        document.defaultView.getComputedStyle(dom, null) :
        dom.currentStyle;

    // 如果没有指定属性名称，返回全部样式
    return typeof name === 'string' ?
        allStyle.getPropertyValue(name) :
        allStyle;
};

/**
 * 初始化配置文件
 * @param {Json} init 默认值
 * @param {Json} data
 * @return {Json}
 */
export let initConfig = function (init, data) {
    for (let key in data)
        try {
            init[key] = data[key];
        } catch (e) {
            throw new Error("Illegal property value！");
        }
    return init;
};
