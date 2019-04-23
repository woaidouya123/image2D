import image2D from './library/core';

/**
 * 挂载静态方法
 * -------------------
 */
import tree from './library/layout/tree';
import Matrix4 from './library/Matrix4/index';
import animation from './library/tools/animation';
import { formatColor } from './core/color';
import cardinal from './library/interpolate/Cardinal';
image2D.extend({
    "treeLayout": tree,
    "Matrix4": Matrix4,
    "animation": animation,
    "formatColor": formatColor,
    "cardinal": cardinal
});

/**
 * 挂载对象方法
 * -------------------
 */
import { appendTo, prependTo } from './library/xhtml/dom';
image2D.prototype.extend({
    "appendTo": appendTo,
    "prependTo": prependTo
});

// 导出接口
export {

    // 库对象
    image2D as default,
    image2D as $$,
    image2D

};
