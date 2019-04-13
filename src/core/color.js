import getStyle from './get-style';
import { REGEXP } from './config';

/**
 * 把颜色统一转变成rgba(x,x,x,x)格式
 * @param {String} oral_color
 * @return {Array} 返回数字数组[r,g,b,a]
 */
export let formatColor = function (oral_color) {
    let head = document.getElementsByTagName('head')[0];
    head.style.color = oral_color;
    var color = getStyle(head, 'color').replace(/^rgba?\(([^)]+)\)$/, '$1').split(new RegExp('\\,' + REGEXP.whitespace));
    return [+color[0], +color[1], +color[2], color[3] == undefined ? 1 : +color[3]];
};
