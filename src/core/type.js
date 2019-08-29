/**
 * 判断传入的元素是不是canvas2D画笔
 * @param {Any} param
 * @return {Boolean} true:画笔，false:不是画笔
 */
export let isCanvas2D = function (param) {
    return param && param.constructor === CanvasRenderingContext2D;
};

/**
 * 判断传入的元素是不是数组
 * @param {Any} param
 * @return {Boolean} true:数组，false:不是数组
 */
export let isArray = function (param) {
    return param && param.constructor === Array;
};
