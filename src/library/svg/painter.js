import image2D from '../core';
import normalConfig, { initText, initArc, initCircle } from './config';

export default function (target, selector) {

    let painter;
    if (selector) painter = image2D(selector, target);

    // 类似canvas画笔的属性
    let config = {

        // 基本设置
        "fillStyle": "#000",
        "strokeStyle": "#000",
        "lineWidth": 1,

        // 文字对齐方式
        "textAlign": "start",
        "textBaseline": normalConfig("textBaseline", "middle"),

        // 文字设置
        "font-size": "16",
        "font-family": "sans-serif",

        // arc二端闭合方式['butt':直线闭合,'round':圆帽闭合]
        "arc-start-cap": "butt",
        "arc-end-cap": "butt"

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
        "bind": function (selector) { painter = image2D(selector, target); return enhancePainter; },
        "appendTo": function (selector) { painter.appendTo(selector, target); return enhancePainter; },
        "prependTo": function (selector) { painter.prependTo(selector, target); return enhancePainter; },
        "afterTo": function (selector) { painter.afterTo(selector, target); return enhancePainter; },
        "beforeTo": function (selector) { painter.beforeTo(selector, target); return enhancePainter; },

        // 文字
        "fillText": function (text, x, y) {
            initText(painter, config, x, y).attr("fill", config.fillStyle)[0].textContent = text;
            return enhancePainter;
        },
        "strokeText": function (text, x, y) {
            initText(painter, config, x, y).attr({ "stroke": config.strokeStyle, "fill": "none" })[0].textContent = text;
            return enhancePainter;
        },

        // 弧
        "fillArc": function (cx, cy, r1, r2, beginDeg, deg) {
            initArc(painter, config, cx, cy, r1, r2, beginDeg, deg).attr("fill", config.fillStyle);
            return enhancePainter;
        },
        "strokeArc": function (cx, cy, r1, r2, beginDeg, deg) {
            initArc(painter, config, cx, cy, r1, r2, beginDeg, deg).attr({ "stroke-width": config.lineWidth, "stroke": config.strokeStyle, "fill": "none" });
            return enhancePainter;
        },

        // 圆形
        "fillCircle": function (cx, cy, r) {
            initCircle(painter, cx, cy, r).attr("fill", config.fillStyle); return enhancePainter;
        },
        "strokeCircle": function (cx, cy, r) {
            initCircle(painter, cx, cy, r).attr({ "stroke-width": config.lineWidth, "stroke": config.strokeStyle, "fill": "none" }); return enhancePainter;
        },


    };

    return enhancePainter;
};
