import { isNode } from './type';
import { REGEXP } from './config';
import toNode from './to-node';

export default function (selector, context) {

    // 如果是字符串
    if (typeof selector === 'string') {
        selector = selector.trim().replace(/[\n\f\r]/g, '');

        // 如果以'<'开头表示是字符串模板
        if (/^</.test(selector)) {
            return [toNode(selector)];
        }

        // *表示查找全部
        else if (selector === '*') {
            return context.getElementsByTagName('*');
        }

        let id = selector.match(new RegExp('#' + REGEXP.identifier, 'g'));
        // ID选择器
        // 此选择器会忽略上下文
        if (id) {
            return document.getElementById(id[0].replace('#', ''));
        }

        let cls = selector.match(new RegExp('\\.' + REGEXP.identifier, 'g')),
            tag = selector.match(new RegExp('^' + REGEXP.identifier));

        // 结点和class混合选择器
        if (tag || cls) {
            let allNodes = document.getElementsByTagName(tag ? tag[0] : "*"), temp = [];
            for (let i = 0; i < allNodes.length; i++) {
                let clazz = " " + allNodes[i].getAttribute('class') + " ", flag = true;
                for (let j = 0; cls && j < cls.length; j++) {
                    if (!clazz.match(" " + (cls[j].replace('.', '')) + " ")) {
                        flag = false;
                        break;
                    }
                }
                if (flag) temp.push(allNodes[i]);
            }
            return temp;
        }

        // 未知情况，报错
        else {
            throw new Error('Unsupported selector：' + selector);
        }

    }

    // 如果是结点
    else if (isNode(selector)) {
        return [selector];
    }

    // 如果是数组
    // 数组中的内容如果不是结点会直接被忽略
    else if (selector && (selector.constructor === Array || selector.constructor === HTMLCollection || selector.constructor === NodeList)) {
        let temp = [];
        for (let i = 0; i < selector.length; i++) {
            if (isNode(selector[i])) temp.push(selector[i]);
        }
        return temp;
    }

    // 如果是image2D对象
    else if (selector && selector.__constructor__ === 'image2D') {
        return selector;
    }

    // 如果是函数
    else if (typeof selector === 'function') {
        let allNodes = context.getElementsByTagName('*'), temp = [];
        for (let i = 0; i < allNodes.length; i++) {
            // 如果选择器函数返回true，表示当前面对的结点被接受
            if (selector(allNodes[i])) temp.push(allNodes[i]);
        }
        return temp;
    }

    // 未知情况，报错
    else {
        throw new Error('Unsupported selector：' + selector);
    }
};
