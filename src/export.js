import image2D from './library/core';

import tree from './library/layout/tree';
import Matrix4 from './library/Matrix4/index';
import animation from './library/tools/animation';
import { formatColor } from './core/color';
import cardinal from './library/interpolate/Cardinal';

/**
 * 挂载静态方法
 * -------------------
 */
image2D.treeLayout = tree;
image2D.Matrix4 = Matrix4;
image2D.animation = animation;
image2D.formatColor = formatColor;
image2D.cardinal = cardinal;

export {

    // 导出库对象
    image2D as default,
    image2D as $$,
    image2D

};
