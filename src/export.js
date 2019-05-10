import image2D from './library/core';

/**
 * 挂载静态方法
 * -------------------
 */
import treeLayout from './library/layout/tree';
import Matrix4 from './library/Matrix4/index';
import animation from './library/tools/animation';
import cardinal from './library/interpolate/Cardinal';
import { rotate, move, scale, dot } from './library/calculate/transform';
image2D.extend({

    // 布局
    treeLayout,

    // 矩阵变换
    Matrix4,

    // 二维简单变换
    rotate, move, scale, dot,

    // 工具类
    animation,

    // 插值类计算
    cardinal

});

/**
 * 挂载对象方法
 * -------------------
 */
import { appendTo, prependTo, afterTo, beforeTo, remove, filter, text } from './library/xhtml/dom';
import style from './library/xhtml/style';
import attribute from './library/xhtml/attribute';
import { datum, data, enter, exit, loop } from './library/xhtml/data';
import { bind, position } from './library/xhtml/event';
import painter from './library/painter';
import layer from './library/canvas2D/layer';
image2D.prototype.extend({

    // 结点操作
    appendTo, prependTo, afterTo, beforeTo, remove, filter, text,

    // 结点属性或样式操作
    css: style, attr: attribute,

    // 结点和数据绑定
    datum, data, enter, exit, loop,

    // 结点事件
    bind, position,

    // 自定义画笔
    painter,

    // 图层
    layer

});

// 导出接口
export {

    // 库对象
    image2D as default,
    image2D as $$,
    image2D

};
