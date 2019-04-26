import sizzle from '../../core/sizzle';
export default function (target, selector) {

    let painter;
    if (selector) painter = sizzle(selector, target)[0];

    // 类似canvas画笔的属性
    let config = {

    };

    // 画笔
    let enhancePainter = {

        // 属性设置或获取
        "config": function () {
            if (arguments.length === 1) {
                if (typeof arguments[0] !== 'object') return config[arguments[0]];
                for (let key in arguments[0])
                    config[key] = arguments[0][key];
            } else if (arguments.length === 2) config[arguments[0]] = arguments[1];
            return enhancePainter;
        },

        // 基础方法
        "painter": function (selector) { painter = sizzle(selector, target)[0]; return enhancePainter; },




    };

    return enhancePainter;
};
