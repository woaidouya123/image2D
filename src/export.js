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

    // 布局
    treeLayout: tree,

    // 矩阵变换
    Matrix4,

    // 工具类
    animation, formatColor,

    // 插值方法
    cardinal

});

/**
 * 挂载对象方法
 * -------------------
 */
import { appendTo, prependTo } from './library/xhtml/dom';
import style from './library/xhtml/style';
import attribute from './library/xhtml/attribute';
import { datum, data, enter, exit, loop } from './library/xhtml/data';
image2D.prototype.extend({

    // 结点操作
    appendTo, prependTo,

    // 结点属性或样式操作
    css: style, attr: attribute,

    // 结点和数据绑定
    datum, data, enter, exit, loop

});

// 导出接口
export {

    // 库对象
    image2D as default,
    image2D as $$,
    image2D

};
