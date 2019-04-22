/**
 * 判断传入的是不是结点
 * @param {Any} param
 * @return {Boolean} true:结点，false:不是结点
 */
export let isNode = function (param) {
    return param && (param.nodeType === 1 || param.nodeType === 9 || param.nodeType === 11);
};

/**
 * 判断传入的元素是不是文本
 * @param {Any} param
 * @return {Boolean} true:文本，false:不是文本
 */
export let isText = function (param) {
    return param && param.nodeType === 3;
};
