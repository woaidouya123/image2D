import { NAMESPACE, XLINK_ATTRIBUTE } from './config';

/**
 * 设置svg字符串
 * @param {dom} target
 * @param {string} svgstring
 */
export let setSVG = function (target, svgstring) {
    if ('innerHTML' in SVGElement.prototype === false || 'innerHTML' in SVGSVGElement.prototype === false) {
        let frame = document.createElement("div"), i;
        frame.innerHTML = svgstring;
        let toSvgNode = function (htmlNode) {
            let svgNode = document.createElementNS(NAMESPACE.svg, (htmlNode.tagName).toLowerCase());
            let attrs = htmlNode.attributes, i;
            for (i = 0; attrs && i < attrs.length; i++) {
                if (XLINK_ATTRIBUTE.indexOf(attrs[i].nodeName) >= 0) {
                    // 针对特殊的svg属性，追加命名空间
                    svgNode.setAttributeNS(NAMESPACE.xlink, 'xlink:' + attrs[i].nodeName, htmlNode.getAttribute(attrs[i].nodeName));
                } else {
                    svgNode.setAttribute(attrs[i].nodeName, htmlNode.getAttribute(attrs[i].nodeName));
                }
            }
            return svgNode;
        };
        let rslNode = toSvgNode(frame.firstChild);
        (function toSVG(pnode, svgPnode) {
            let node = pnode.firstChild;
            if (node && node.nodeType == 3) {
                svgPnode.textContent = pnode.innerText;
                return;
            }
            while (node) {
                let svgNode = toSvgNode(node);
                svgPnode.appendChild(svgNode);
                if (node.firstChild) toSVG(node, svgNode);
                node = node.nextSibling;
            }
        })(frame.firstChild, rslNode);
        target.appendChild(rslNode);
    } else {
        // 如果当前浏览器提供了svg类型结点的innerHTML,我们还是使用浏览器提供的
        target.innerHTML = svgstring;
    }
};
