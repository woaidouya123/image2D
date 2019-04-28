// 文字统一设置方法
export let initText = function (painter, config) {
    painter.font = config['font-size'] + "px " + config['font-family'];
    return painter;
};
