import {
    NAMESPACE,
    REGEXP
} from './config';
import isElement from '@yelloxing/core.js/isElement';
import isString from '@yelloxing/core.js/isString';
import {
    setSVG
} from './polyfill';

// 变成指定类型的结点
// type可以取：
// 1.'HTML'，html结点
// 2.'SVG'，svg结点(默认值)
let toNode = function (template, type) {
    let frame, childNodes;
    if (type === 'html' || type === 'HTML') {
        if (/^<tr>/.test(template)) {
            frame = document.createElement("tbody");
        } else if (/^<th>/.test(template) || /^<td>/.test(template)) {
            frame = document.createElement("tr");
        } else if (/^<thead>/.test(template) || /^<tbody>/.test(template)) {
            frame = document.createElement("table");
        } else {
            frame = document.createElement("div");
        }
        frame.innerHTML = template;

        // 比如tr标签，它应该被tbody或thead包含
        // 这里容器是div，这类标签无法生成
        if (!/</.test(frame.innerHTML)) {
            throw new Error('This template cannot be generated using div as a container:' + template + "\nPlease contact us: https://github.com/yelloxing/image2D/issues");
        }
    } else {
        frame = document.createElementNS(NAMESPACE.svg, 'svg');
        // 部分浏览器svg元素没有innerHTML
        setSVG(frame, template);
    }
    childNodes = frame.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
        if (isElement(childNodes[i])) return childNodes[i];
    }
};

/**
 * 变成结点
 * @param {string} template
 * @param {string} type
 * @return {dom} 返回结点
 */
export default function (template, type) {

    // 把传递元素类型和标记进行统一处理
    if (new RegExp("^" + REGEXP.identifier + "$").test(template)) template = "<" + template + "></" + template + ">";

    let mark = /<([^>]+)>.*/.exec(template)[1];

    // 画布canvas特殊知道，一定是html
    if ("canvas" === mark.toLowerCase()) type = 'HTML';

    // 此外，如果没有特殊设定，给常用的html标签默认
    if (!isString(type) && [

            // 三大display元素
            "div", "span", "p",

            // 小元素
            "em", "i",

            // 关系元素
            "table", "ul", "ol", "dl",

            // 表单相关
            "form", "input", "button", "textarea",

            // H5结构元素
            "header", "footer", "article", "section",

            // 标题元素
            "h1", "h2", "h3", "h4", "h5", "h6",

            // 替换元素
            "image", "video", "iframe", "object",

            // 资源元素
            "style", "script", "link",

            // table系列
            "tr", "td", "th", "tbody", "thead"

        ].indexOf(mark.toLowerCase()) >= 0) type = 'HTML';

    return toNode(template, type);
};
