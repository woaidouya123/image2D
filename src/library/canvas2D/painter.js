import image2D from '../core';
import { isNode } from '../../core/type';

// 获取原生的canvas画笔
export let getPainter = function (target) {
    if (target) {
        if (target.constructor === image2D) target = target[0];

        if (target && target.nodeName.toLowerCase() === 'canvas') {
            return target[0].getContext("2d");
        } else if (isNode(target)) throw new Error('Painter is not a function!');
    }
    throw new Error('Target empty!');
};

// 加强版本的画笔
export default function () {

};
