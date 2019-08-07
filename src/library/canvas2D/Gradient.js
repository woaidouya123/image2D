export let linearGradient = function (painter, x0, y0, x1, y1) {
    let gradient = painter.createLinearGradient(x0, y0, x1, y1);
    let enhanceGradient = {
        "value": function () { return gradient; },
        "addColorStop": function (stop, color) {
            gradient.addColorStop(stop, color);
            return enhanceGradient;
        }
    };
    return enhanceGradient;
};
