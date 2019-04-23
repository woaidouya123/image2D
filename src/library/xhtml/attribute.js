import { NAMESPACE, XLINK_ATTRIBUTE } from '../../core/config';

let setAttribute = function (dom, attr, val) {
    if (/[a-z]/.test(dom.tagName) && XLINK_ATTRIBUTE.indexOf(attr) >= 0) {
        // 如果是xml元素
        // 针对xlink使用特殊方法赋值
        dom.setAttributeNS(NAMESPACE.xlink, 'xlink:' + attr, val);
    } else dom.setAttribute(attr, val);
};

/**
 * 设置或获取属性
 * @arguments(attr):获取属性
 * @arguments(attr,value):设置指定属性值
 * @arguments(json):设置大量属性
 */
export default function () {

    // 获取属性值
    if (arguments.length === 1 && typeof arguments[0] !== 'object') {
        if (this.length <= 0) throw new Error('Target empty!');
        return this[0].getAttribute(arguments[0]);
    }

    // 设置属性值
    else if (arguments.length > 0) {
        for (let i = 0; i < this.length; i++) {
            if (arguments.length === 1) {
                for (let key in arguments[0])
                    setAttribute(this[i], key, arguments[0][key]);
            } else setAttribute(this[i], arguments[0], arguments[1]);
        }
    }

    return this;
};
