import { initDefs } from './config';
import toNode from '../../core/to-node';

// 线性渐变
export let linearGradient = function (painter, target, x0, y0, x1, y1) {
    let defs = initDefs(target);
    let gradientId = "image2D-lg-" + new Date().valueOf() + "-" + Math.random();
    let gradientDom = toNode('<linearGradient id="' + gradientId + '" x1="' + x0 + '%" y1="' + y0 + '%" x2="' + x1 + '%" y2="' + y1 + '%"></linearGradient>');
    defs.appendChild(gradientDom);
    let enhanceGradient = {
        "value": function () {
            return "url(#" + gradientId + ")";
        },
        "addColorStop": function (stop, color) {
            gradientDom.appendChild(toNode('<stop offset="' + (stop * 100) + '%" style="stop-color:' + color + ';" />'));
            return enhanceGradient;
        }
    };
    return enhanceGradient;
};

// 环形渐变
export let radialGradient = function (painter, target, cx, cy, r) {
    let defs = initDefs(target);
    let gradientId = "image2D-rg-" + new Date().valueOf() + "-" + Math.random();
    let gradientDom = toNode('<radialGradient id="' + gradientId + '" cx="' + cx + '%" cy="' + cy + '%" r="' + r + '%"></radialGradient>');
    defs.appendChild(gradientDom);
    let enhanceGradient = {
        "value": function () {
            return "url(#" + gradientId + ")";
        },
        "addColorStop": function (stop, color) {
            gradientDom.appendChild(toNode('<stop offset="' + (stop * 100) + '%" style="stop-color:' + color + ';" />'));
            return enhanceGradient;
        }
    };
    return enhanceGradient;
};
