import browser from '../../core/browser';
import { isNode } from '../../core/type';
import arc from '../calculate/graphic/arc';

export default function (key, value) {
    let browser_type = browser.type();

    // 文字水平对齐方式
    if (key === 'textAlign') {
        return {
            "left": "start",
            "right": "end",
            "center": "middle"
        }[value] || value;
    }

    // 文字垂直对齐方式
    else if (key === 'textBaseline') {
        return {
            "top": "text-before-edge",
            "bottom": {
                "Safari": "auto"
            }[browser_type] || "ideographic"
        }[value] || {
            "Firefox": "middle"
        }[browser_type] || "central";
    }

    return value;
};

// 文字统一设置方法
export let initText = function (painter, config, x, y) {
    if (!isNode(painter[0])) throw new Error('Target empty!');
    if (painter[0].nodeName.toLowerCase() !== 'text') throw new Error('Need a <text> !');

    let browser_type = browser.type();

    // 针对IE和Edge浏览器特殊处理
    if (browser_type === 'IE' || browser_type === 'Edge') {
        if (config.textBaseline === 'text-before-edge') y += config['font-size'];
        else if (config.textBaseline === 'central') y += config['font-size'] * 0.5;
    }

    return painter.css({

        // 文字对齐方式
        "text-anchor": config.textAlign,
        "dominant-baseline": config.textBaseline,

        // 文字大小和字体设置
        "font-size": config['font-size'] + "px",
        "font-family": config['font-family']
    }).attr({ "x": x, "y": y });
};

// 画弧统一设置方法
export let initArc = function (painter, config, cx, cy, r1, r2, beginDeg, deg) {
    if (painter[0].nodeName.toLowerCase() !== 'path') throw new Error('Need a <path> !');
    arc(beginDeg, deg, cx, cy, r1, r2, function (
        beginA, endA,
        begInnerX, begInnerY,
        begOuterX, begOuterY,
        endInnerX, endInnerY,
        endOuterX, endOuterY,
        r
    ) {
        let f = (endA - beginA) > Math.PI ? 1 : 0,
            d = "M" + begInnerX + " " + begInnerY;
        if (r < 0) r = -r;
        d +=
            // 横半径 竖半径 x轴偏移角度 0小弧/1大弧 0逆时针/1顺时针 终点x 终点y
            "A" + r1 + " " + r1 + " 0 " + f + " 1 " + endInnerX + " " + endInnerY;
        // 结尾
        if (config["arc-end-cap"] != 'round')
            d += "L" + endOuterX + " " + endOuterY;
        else
            d += "A" + r + " " + r + " " + " 0 1 0 " + endOuterX + " " + endOuterY;
        d += "A" + r2 + " " + r2 + " 0 " + f + " 0 " + begOuterX + " " + begOuterY;
        // 开头
        if (config["arc-start-cap"] != 'round')
            d += "L" + begInnerX + " " + begInnerY;
        else
            d += "A" + r + " " + r + " " + " 0 1 0 " + begInnerX + " " + begInnerY;
        painter.attr('d', d);
    });
    return painter;
};

// 画圆统一设置方法
export let initCircle = function (painter, cx, cy, r) {
    if (painter[0].nodeName.toLowerCase() !== 'circle') throw new Error('Need a <circle> !');
    painter.attr({
        "cx": cx,
        "cy": cy,
        "r": r
    });
    return painter;
};
