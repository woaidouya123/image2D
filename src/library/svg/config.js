import browser from '../../core/browser';
import { isNode } from '../../core/type';

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
export let initText = function (painter, config) {
    if (!isNode(painter[0])) throw new Error('Target empty!');
    if (painter[0].nodeName.toLowerCase() !== 'text') throw new Error('Target error：' + painter[0]);

    return painter.css({

        // 文字对齐方式
        "text-anchor": config.textAlign,
        "dominant-baseline": config.textBaseline,

        // 文字大小和字体设置
        "font-size": config['font-size'],
        "font-family": config['font-family']
    });
};
