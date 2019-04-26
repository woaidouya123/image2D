import { isNode } from '../core/type';
import painter_canvas2D from './canvas2D/painter';
import painter_svg from './svg/painter';

// 统一画笔
// 负责启动具体的绘图对象
export default function () {

    if (!isNode(this[0])) throw new Error('Target empty!');

    let target = this[0], nodeName = target.nodeName.toLowerCase();

    // canvas2D
    if (nodeName === 'canvas') return painter_canvas2D(target);

    // svg
    if (nodeName === 'svg') return painter_svg(target, arguments[0]);

    throw new Error('Painter is not a function!');
};
