import image2D from './library/core';

import tree from './library/layout/tree';
import Matrix4 from './library/Matrix4/index';

/**
 * 挂载方法
 * -------------------
 */
image2D.treeLayout = tree;
image2D.Matrix4 = Matrix4;

export {

    // 导出库对象
    image2D as default,
    image2D as $$,
    image2D

};
