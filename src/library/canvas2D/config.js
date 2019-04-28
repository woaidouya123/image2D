// 文字统一设置方法
export let initText = function (painter, config) {
    painter.font = config['font-size'] + " " + config['font-family'];
    return painter;
};
