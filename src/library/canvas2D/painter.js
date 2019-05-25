import { initText, initArc, initCircle } from './config';

// 加强版本的画笔
export default function (canvas) {

    let painter = canvas.getContext("2d");

    // 默认配置不应该有canvas2D对象已经存在的属性
    // 这里是为了简化或和svg统一接口而自定义的属性
    let config = {
        "font-size": "16",
        "font-family": "sans-serif",
        "arc-start-cap": "butt",
        "arc-end-cap": "butt"
    };

    // 画笔
    let enhancePainter = {

        // 属性设置或获取
        "config": function () {
            if (arguments.length === 1) {
                if (typeof arguments[0] !== 'object') return painter[arguments[0]];
                for (let key in arguments[0]) {
                    if (config[key]) config[key] = arguments[0][key];
                    else painter[key] = arguments[0][key];
                }
            } else if (arguments.length === 2) {
                if (config[arguments[0]]) config[arguments[0]] = arguments[1];
                else painter[arguments[0]] = arguments[1];
            }
            return enhancePainter;
        },

        // 文字
        "fillText": function (text, x, y, deg) {
            painter.save();
            painter.beginPath();
            painter.translate(x, y);
            painter.rotate(deg || 0);
            initText(painter, config).fillText(text, 0, 0);
            painter.restore();
            return enhancePainter;
        },
        "strokeText": function (text, x, y, deg) {
            painter.save();
            painter.beginPath();
            painter.translate(x, y);
            painter.rotate(deg || 0);
            initText(painter, config).strokeText(text, 0, 0);
            painter.restore();
            return enhancePainter;
        },

        // 路径
        "beginPath": function () { painter.beginPath(); return enhancePainter; },
        "closePath": function () { painter.closePath(); return enhancePainter; },
        "moveTo": function (x, y) { painter.moveTo(x, y); return enhancePainter; },
        "lineTo": function (x, y) { painter.lineTo(x, y); return enhancePainter },
        "fill": function () { painter.fill(); return enhancePainter },
        "stroke": function () { painter.stroke(); return enhancePainter },

        // 擦除画面
        "clearn": function (x, y, width, height) { painter.clearRect(x || 0, y || 0, width || canvas.clientWidth, height || canvas.clientHeight); return enhancePainter; },

        // 地址图片
        "toDataURL": function () { return canvas.toDataURL() },

        // image
        "drawImage": function (img, sx, sy, sw, sh, x, y, w, h) { painter.drawImage(img, sx, sy, sw, sh, x, y, w, h); return enhancePainter; },

        // 弧
        "fillArc": function (cx, cy, r1, r2, beginDeg, deg) {
            initArc(painter, config, cx, cy, r1, r2, beginDeg, deg).fill(); return enhancePainter;
        },
        "strokeArc": function (cx, cy, r1, r2, beginDeg, deg) {
            initArc(painter, config, cx, cy, r1, r2, beginDeg, deg).stroke(); return enhancePainter;
        },

        // 圆形
        "fillCircle": function (cx, cy, r) {
            initCircle(painter, cx, cy, r).fill(); return enhancePainter;
        },
        "strokeCircle": function (cx, cy, r) {
            initCircle(painter, cx, cy, r).stroke(); return enhancePainter;
        }

    };

    return enhancePainter;
};
