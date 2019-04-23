import sizzle from '../../core/sizzle';

/**
 * 把当前维护的结点加到目标结点内部的结尾
 * @param {selector} target
 * @return {image2D}
 */
export let appendTo = function (target, context) {
    let nodes = sizzle(target, context || document);
    if (nodes.length > 0) {
        for (let i = 0; i < this.length; i++)
            nodes[0].appendChild(this[i]);
    } else {
        throw new Error('Target empty!');
    }
    return this;
};

/**
 * 把当前维护的结点加到目标结点内部的开头
 * @param {selector} target
 * @return {image2D}
 */
export let prependTo = function (target, context) {
    let nodes = sizzle(target, context || document);
    if (nodes.length > 0) {
        for (let i = 0; i < this.length; i++)
            nodes[0].insertBefore(this[i], nodes[0].childNodes[0]);
    } else {
        throw new Error('Target empty!');
    }
    return this;
};
