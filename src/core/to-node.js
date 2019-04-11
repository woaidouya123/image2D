import { NAMESPACE, REGEXP } from './config';
import { HTML } from './type';
import { isNode } from './tool';

/**
 * 把一段字符串变成结点
 * @param {String} template 字符串模板，例子："div"、"g"和"<span></span>"、"<g><circle></circle></g>"
 * @param {Symbol} type 标记标签类型
 *
 * @return {Element} 返回SVG或HTML结点
 */
export default function (template, type) {

    // 把字母变成合法的模板字符串
    if (new RegExp("^" + REGEXP.identifier + "$").test(template)) template = "<" + template + "></" + template + ">";

    // 创建容器并添加进去
    let frame = type === HTML ? document.createElement("div") : document.createElementNS(NAMESPACE.svg, 'svg');
    frame.innerHTML = template;

    let child, childNodes = frame.childNodes, flag;
    for (flag = 0; flag < childNodes.length; flag++) {
        if (isNode(childNodes[flag])) {
            child = childNodes[flag];
            break;
        }
    }

    return child;
};
