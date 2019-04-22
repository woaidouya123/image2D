import { NAMESPACE, REGEXP } from './config';
import { isNode } from './type';
import { setSVG } from './polyfill';

// 变成指定类型的结点
// type可以取：
// 1.'HTML'，html结点
// 2.'SVG'，svg结点(默认值)
let toNode = function (template, type) {
    let frame, childNodes;
    if (type === 'HTML') {
        frame = document.createElement("div");
        frame.innerHTML = template;
    } else {
        frame = document.createElementNS(NAMESPACE.svg, 'svg');
        // 部分浏览器svg元素没有innerHTML
        setSVG(frame, template);
    }
    childNodes = frame.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
        if (isNode(childNodes[i])) return childNodes[i];
    }
};

/**
 * 变成结点
 * @param {string} template
 * @return {dom} 返回结点
 */
export default function (template) {

    // 把传递元素类型和标记进行统一处理
    if (new RegExp("^" + REGEXP.identifier + "$").test(template)) template = "<" + template + "></" + template + ">";

    let node = toNode(template, 'SVG');
    if (!node || /[A-Z]/.test(node.tagName) || node.tagName === 'canvas') {
        node = toNode(template, 'HTML');
    }

    return node;
};
