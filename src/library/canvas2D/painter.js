import image2D from '../core';
import { isNode } from '../../core/type';

// 获取原生的canvas画笔
export let getPainter = function (target) {
    if (target) {
        if (target.constructor === image2D) target = target[0];

        if (target && target.nodeName.toLowerCase() === 'canvas') {
            return target.getContext("2d");
        } else if (isNode(target)) throw new Error('Painter is not a function!');
    }
    throw new Error('Target empty!');
};

// 加强版本的画笔
export default function () {

    let canvas = this[0];
    let painter = getPainter(canvas);

    // 画笔
    let enhancePainter = {

        // 属性设置或获取
        "config": function () {
            if (arguments.length === 1) {
                if (typeof arguments[0] !== 'object') return painter[arguments[0]];
                for (let key in arguments[0])
                    painter[key] = arguments[0][key];
            } else if (arguments.length === 2) painter[arguments[0]] = arguments[1];
            return enhancePainter;
        },

        /**
         * 基础方法
         * ---------------
         */



    };

    return enhancePainter;
};
