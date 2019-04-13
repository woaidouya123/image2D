// painter对象
export const PAINTER = Symbol();

// 标签类型
export const SVG = Symbol();
export const HTML = Symbol();

/**
 * 判断传入的是不是结点
 * @param {Any} param
 * @return {Boolean} true:结点，false:不是结点
 */
export let isNode = function (param) {
    return param && (param.nodeType === 1 || param.nodeType === 9 || param.nodeType === 11);
};
