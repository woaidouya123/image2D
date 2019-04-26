// 加强版本的画笔
export default function (canvas) {

    let painter = canvas.getContext("2d");

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

        // 文字
        "fillText": function (text, x, y) { painter.fillText(text, x, y); return enhancePainter; },
        "strokeText": function (text, x, y) { painter.strokeText(text, x, y); return enhancePainter; },

        // 路径
        "beginPath": function () { painter.beginPath(); return enhancePainter; },
        "closePath": function () { painter.closePath(); return enhancePainter; },
        "moveTo": function (x, y) { painter.moveTo(x, y); return enhancePainter; },
        "lineTo": function (x, y) { painter.lineTo(x, y); return enhancePainter },

        // 地址图片
        "toDataURL": function () { return painter.toDataURL() },

        // image
        "drawImage": function (img, sx, sy, sw, sh, x, y, w, h) { painter.drawImage(img, sx, sy, sw, sh, x, y, w, h); return enhancePainter; },



    };

    return enhancePainter;
};
