import image2D from '../core';
import normalConfig from './config';
import toDataURL from './toDataURL';

export default function (target, selector) {

    let painter;
    if (selector) painter = image2D(selector, target);

    // 类似canvas画笔的属性
    let config = {
        "fillStyle": "#000",
        "strokeStyle": "#000",
        "textAlign": "start",
        "textBaseline": normalConfig("textBaseline", "middle")
    };

    // 画笔
    let enhancePainter = {

        // 属性设置或获取
        "config": function () {
            if (arguments.length === 1) {
                if (typeof arguments[0] !== 'object') return config[arguments[0]];
                for (let key in arguments[0])
                    config[key] = normalConfig(key, arguments[0][key]);
            } else if (arguments.length === 2) config[arguments[0]] = normalConfig(arguments[0], arguments[1]);
            return enhancePainter;
        },

        // 基础方法
        "painter": function (selector) { painter = image2D(selector, target); return enhancePainter; },
        "appendTo": function (selector) { painter.appendTo(selector, target); return enhancePainter; },
        "prependTo": function (selector) { painter.prependTo(selector, target); return enhancePainter; },

        // 文字
        "fillText": function (text, x, y) {
            painter.attr({ "x": x, "y": y, "fill": config.fillStyle })[0].textContent = text;
            return enhancePainter;
        },
        "strokeText": function (text, x, y) {
            painter.attr({ "x": x, "y": y, "stroke": config.strokeStyle })[0].textContent = text;
            return enhancePainter;
        },

        // 地址图片
        "toDataURL": function (charset) {
            let width = target.getAttribute('width') || 300; // 默认值的选择是因为替换原始默认尺寸
            let height = target.getAttribute('height') || 150;
            charset = charset || 'utf-8';
            return toDataURL(target, width, height, charset);
        }


    };

    return enhancePainter;
};
