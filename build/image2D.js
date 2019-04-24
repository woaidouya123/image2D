
    /*!
    * image2D - 🍇 使用ECMAScript绘制二维图片。Drawing Two-Dimensional Pictures Using ECMAScript.
    * git+https://github.com/yelloxing/image2D.git
    *
    * author 心叶
    *
    * version 0.0.1-dev
    *
    * build Thu Apr 11 2019
    *
    * Copyright yelloxing
    * Released under the MIT license
    *
    * Date:Wed Apr 24 2019 22:44:05 GMT+0800 (中国标准时间)
    */

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
    'use strict';

    /**
     * 判断传入的是不是结点
     * @param {Any} param
     * @return {Boolean} true:结点，false:不是结点
     */

    var isNode = function isNode(param) {
        return param && (param.nodeType === 1 || param.nodeType === 9 || param.nodeType === 11);
    };

    /**
     * 判断传入的元素是不是文本
     * @param {Any} param
     * @return {Boolean} true:文本，false:不是文本
     */
    var isText = function isText(param) {
        return param && param.nodeType === 3;
    };

    /**
     * 初始化配置文件
     * @param {Json} init 默认值
     * @param {Json} data
     * @return {Json}
     */
    var initConfig = function initConfig(init, data) {
        for (var key in data) {
            try {
                init[key] = data[key];
            } catch (e) {
                throw new Error("Illegal property value！");
            }
        }return init;
    };

    // 命名空间路径
    var NAMESPACE = {
        "svg": "http://www.w3.org/2000/svg",
        "xhtml": "http://www.w3.org/1999/xhtml",
        "xlink": "http://www.w3.org/1999/xlink",
        "xml": "http://www.w3.org/XML/1998/namespace",
        "xmlns": "http://www.w3.org/2000/xmlns/"
    };

    // 正则表达式
    var REGEXP = {

        // 空白字符:http://www.w3.org/TR/css3-selectors/#whitespace
        "whitespace": "[\\x20\\t\\r\\n\\f]",

        // 空格外的空白字符
        "blank": "[\\n\\f\\r]",

        // 标志符:http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
        "identifier": "(?:\\\\.|[\\w-]|[^\0-\\xa0])+"
    };

    // 记录需要使用xlink命名空间常见的xml属性
    var XLINK_ATTRIBUTE = ["href", "title", "show", "type", "role", "actuate"];

    /**
     * 设置svg字符串
     * @param {dom} target
     * @param {string} svgstring
     */
    var setSVG = function setSVG(target, svgstring) {
        if ('innerHTML' in SVGElement.prototype === false || 'innerHTML' in SVGSVGElement.prototype === false) {
            var frame = document.createElement("div");
            frame.innerHTML = svgstring;
            var toSvgNode = function toSvgNode(htmlNode) {
                var svgNode = document.createElementNS(NAMESPACE.svg, htmlNode.tagName.toLowerCase());
                var attrs = htmlNode.attributes,
                    i = void 0;
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
            var rslNode = toSvgNode(frame.firstChild);
            (function toSVG(pnode, svgPnode) {
                var node = pnode.firstChild;
                if (isText(node)) {
                    svgPnode.textContent = pnode.innerText;
                    return;
                }
                while (node) {
                    var svgNode = toSvgNode(node);
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

    // 变成指定类型的结点
    // type可以取：
    // 1.'HTML'，html结点
    // 2.'SVG'，svg结点(默认值)
    var toNode = function toNode(template, type) {
        var frame = void 0,
            childNodes = void 0;
        if (type === 'HTML') {
            frame = document.createElement("div");
            frame.innerHTML = template;
        } else {
            frame = document.createElementNS(NAMESPACE.svg, 'svg');
            // 部分浏览器svg元素没有innerHTML
            setSVG(frame, template);
        }
        childNodes = frame.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            if (isNode(childNodes[i])) return childNodes[i];
        }
    };

    /**
     * 变成结点
     * @param {string} template
     * @return {dom} 返回结点
     */
    function toNode$1(template) {

        // 把传递元素类型和标记进行统一处理
        if (new RegExp("^" + REGEXP.identifier + "$").test(template)) template = "<" + template + "></" + template + ">";

        var node = toNode(template, 'SVG');
        if (!node || /[A-Z]/.test(node.tagName) || node.tagName === 'canvas') {
            node = toNode(template, 'HTML');
        }

        return node;
    }

    /**
     * 在指定上下文查找结点
     * @param {string|dom|array|function|image2D} selector 选择器，必输
     * @param {dom} context 查找上下文，必输
     * @return {array|image2D} 结点数组
     * 特别注意：id选择器或者传入的是维护的结点，查找上下文会被忽略
     */
    function sizzle(selector, context) {

        // 如果是字符串
        if (typeof selector === 'string') {
            selector = selector.trim().replace(new RegExp(REGEXP.blank, 'g'), '');

            // 如果以'<'开头表示是字符串模板
            if (/^</.test(selector)) {
                var node = toNode$1(selector);
                if (isNode(node)) return [node];else return [];
            }

            // *表示查找全部
            else if (selector === '*') {
                    return context.getElementsByTagName('*');
                }

            var id = selector.match(new RegExp('#' + REGEXP.identifier, 'g'));
            // ID选择器
            // 此选择器会忽略上下文
            if (id) {
                var _node = document.getElementById(id[0].replace('#', ''));
                if (isNode(_node)) return [_node];else return [];
            }

            var cls = selector.match(new RegExp('\\.' + REGEXP.identifier, 'g')),
                tag = selector.match(new RegExp('^' + REGEXP.identifier));

            // 结点和class混合选择器
            if (tag || cls) {
                var allNodes = document.getElementsByTagName(tag ? tag[0] : "*"),
                    temp = [];
                for (var i = 0; i < allNodes.length; i++) {
                    var clazz = " " + allNodes[i].getAttribute('class') + " ",
                        flag = true;
                    for (var j = 0; cls && j < cls.length; j++) {
                        if (!clazz.match(" " + cls[j].replace('.', '') + " ")) {
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
                    throw new Error('Unsupported selector:' + selector);
                }
        }

        // 如果是结点
        else if (isNode(selector)) {
                return [selector];
            }

            // 如果是数组
            // 数组中的内容如果不是结点会直接被忽略
            else if (selector && (selector.constructor === Array || selector.constructor === HTMLCollection || selector.constructor === NodeList)) {
                    var _temp = [];
                    for (var _i = 0; _i < selector.length; _i++) {
                        if (isNode(selector[_i])) _temp.push(selector[_i]);
                    }
                    return _temp;
                }

                // 如果是image2D对象
                else if (selector && selector.constructor === image2D) {
                        return selector;
                    }

                    // 如果是函数
                    else if (typeof selector === 'function') {
                            var _allNodes = context.getElementsByTagName('*'),
                                _temp2 = [];
                            for (var _i2 = 0; _i2 < _allNodes.length; _i2++) {
                                // 如果选择器函数返回true，表示当前面对的结点被接受
                                if (selector(_allNodes[_i2])) _temp2.push(_allNodes[_i2]);
                            }
                            return _temp2;
                        }

                        // 未知情况，报错
                        else {
                                throw new Error('Unknown selector:' + selector);
                            }
    }

    var image2D = function image2D(selector, context) {
        return new image2D.prototype.init(selector, context);
    };

    image2D.prototype.init = function (selector, context) {
        this.context = context = context || document;
        var nodes = sizzle(selector, context),
            flag = void 0;
        for (flag = 0; flag < nodes.length; flag++) {
            this[flag] = nodes[flag];
        }
        this.length = nodes.length;
        return this;
    };

    image2D.prototype.extend = image2D.extend = function () {

        var target = arguments[0] || {};
        var source = arguments[1] || {};
        var length = arguments.length;

        /*
         * 确定复制目标和源
         */
        if (length === 1) {
            //如果只有一个参数，目标对象是自己
            source = target;
            target = this;
        }
        if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && typeof target !== 'function') {
            //如果目标不是对象或函数，则初始化为空对象
            target = {};
        }

        /*
         * 复制属性到对象上面
         */
        for (var key in source) {
            try {
                target[key] = source[key];
            } catch (e) {
                throw new Error("Illegal property value！");
            }
        }

        return target;
    };

    image2D.prototype.init.prototype = image2D.prototype;

    /**
     * 无论绘制的树结构是什么样子的
     * 计算时都假想目标树的样子如下：
     *  1.根结点在最左边，且上下居中
     *  2.树是从左往右生长的结构
     *  3.每个结点都是一块1*1的正方形，top和left分别表示正方形中心的位置
     *
     */
    function treeLayout() {

        var config = {},

        // 维护的树
        alltreedata = void 0,

        // 根结点ID
        rootid = void 0;

        /**
         * 把内部保存的树结点数据
         * 计算结束后会调用配置的绘图方法
         */
        var update = function update() {

            var beforeDis = [],
                size = 0,
                maxDeep = 0;
            (function positionCalc(pNode, deep) {

                if (deep > maxDeep) maxDeep = deep;
                var flag = void 0;
                for (flag = 0; flag < pNode.children.length; flag++) {
                    // 因为全部的子结点的位置确定了，父结点的y位置就是子结点的中间位置
                    // 因此有子结点的，先计算子结点
                    positionCalc(alltreedata[pNode.children[flag]], deep + 1);
                } // left的位置比较简单，deep从0开始编号
                // 比如deep=0，第一层，left=0+0.5=0.5，也就是根结点
                alltreedata[pNode.id].left = deep + 0.5;
                if (flag == 0) {

                    // beforeDis是一个数组，用以记录每一层此刻top下边缘（每一层是从上到下）
                    // 比如一层的第一个，top值最小可以取top=0.5
                    // 为了方便计算，beforeDis[deep] == undefined的时候表示现在准备计算的是这层的第一个结点
                    // 因此设置最低上边缘为-0.5
                    if (beforeDis[deep] == undefined) beforeDis[deep] = -0.5;
                    // 父边缘同意的进行初始化
                    if (beforeDis[deep - 1] == undefined) beforeDis[deep - 1] = -0.5;

                    // 添加的新结点top值第一种求法：本层上边缘+1（比如上边缘是-0.5，那么top最小是top=-0.5+1=0.5）
                    alltreedata[pNode.id].top = beforeDis[deep] + 1;

                    var pTop = beforeDis[deep] + 1 + (alltreedata[pNode.pid].children.length - 1) * 0.5;
                    // 计算的原则是：如果第一种可行，选择第一种，否则必须选择第二种
                    // 判断第一种是否可行的方法就是：如果第一种计算后确定的孩子上边缘不对导致孩子和孩子的前兄弟重合就是可行的
                    if (pTop - 1 < beforeDis[deep - 1])
                        // 必须保证父亲结点和父亲的前一个兄弟保存1的距离，至少
                        // 添加的新结点top值的第二种求法：根据孩子取孩子结点的中心top
                        alltreedata[pNode.id].top = beforeDis[deep - 1] + 1 - (alltreedata[pNode.pid].children.length - 1) * 0.5;
                } else {

                    // 此刻flag!=0
                    // 意味着结点有孩子，那么问题就解决了，直接取孩子的中间即可
                    // 其实，flag==0的分支计算的就是孩子，是没有孩子的叶结点，那是关键
                    alltreedata[pNode.id].top = (alltreedata[pNode.children[0]].top + alltreedata[pNode.children[flag - 1]].top) * 0.5;
                }

                // 因为计算孩子的时候
                // 无法掌握父辈兄弟的情况
                // 可能会出现父亲和兄弟重叠问题
                if (alltreedata[pNode.id].top <= beforeDis[deep]) {
                    var needUp = beforeDis[deep] + 1 - alltreedata[pNode.id].top;
                    (function doUp(_pid, _deep) {
                        alltreedata[_pid].top += needUp;
                        if (beforeDis[_deep] < alltreedata[_pid].top) beforeDis[_deep] = alltreedata[_pid].top;
                        var _flag = void 0;
                        for (_flag = 0; _flag < alltreedata[_pid].children.length; _flag++) {
                            doUp(alltreedata[_pid].children[_flag], _deep + 1);
                        }
                    })(pNode.id, deep);
                }

                // 计算好一个结点后，需要更新此刻该层的上边缘
                beforeDis[deep] = alltreedata[pNode.id].top;

                // size在每次计算一个结点后更新，是为了最终绘图的时候知道树有多宽（此处应该叫高）
                if (alltreedata[pNode.id].top + 0.5 > size) size = alltreedata[pNode.id].top + 0.5;
            })(alltreedata[rootid], 0);

            // 传递的参数分别表示：记录了位置信息的树结点集合、根结点ID和树的宽
            return {
                "node": alltreedata,
                "root": rootid,
                "size": size,
                "deep": maxDeep + 1
            };
        };

        /**
         * 根据配置的层次关系（配置的id,child,root）把原始数据变成内部结构，方便后期位置计算
         * @param {any} initTree
         *
         * tempTree[id]={
         *  "data":原始数据,
         *  "pid":父亲ID,
         *  "id":唯一标识ID,
         *  "children":[cid1、cid2、...]
         * }
         */
        var toInnerTree = function toInnerTree(initTree) {

            var tempTree = {};
            // 根结点
            var temp = config.root(initTree),
                id = void 0,
                rid = void 0;
            id = rid = config.id(temp);
            tempTree[id] = {
                "data": temp,
                "pid": null,
                "id": id,
                "children": []
            };
            // 根据传递的原始数据，生成内部统一结构
            (function createTree(pdata, pid) {
                var children = config.child(pdata, initTree),
                    flag = void 0;
                for (flag = 0; children && flag < children.length; flag++) {
                    id = config.id(children[flag]);
                    tempTree[pid].children.push(id);
                    tempTree[id] = {
                        "data": children[flag],
                        "pid": pid,
                        "id": id,
                        "children": []
                    };
                    createTree(children[flag], id);
                }
            })(temp, id);

            return [rid, tempTree];
        };

        // 可以传递任意格式的树原始数据
        // 只要配置对应的解析方法即可
        var tree = function tree(initTree) {

            var treeData = toInnerTree(initTree);
            alltreedata = treeData[1];
            rootid = treeData[0];
            return update();
        };

        // 获取根结点的方法:root(initTree)
        tree.root = function (rootback) {
            config.root = rootback;
            return tree;
        };

        // 获取子结点的方法:child(parentTree,initTree)
        tree.child = function (childback) {
            config.child = childback;
            return tree;
        };

        // 获取结点ID方法:id(treedata)
        tree.id = function (idback) {
            config.id = idback;
            return tree;
        };

        return tree;
    }

    function tree(config) {

        config = initConfig({

            // 类型：如果不是下面五种之一，就认为是原始类型
            // t:LR|RL|BT|TB|circle

            // 如果类型是LR|RL|BT|TB需要设置如下参数
            // 1.rx,ry:顶点节点坐标；2.w,h:宽和高

            // 如果类型是circle需要设置如下参数
            // 1.cx,cy：圆心；2.r:半径；3.begin,deg：开始和跨越弧度（可选）
            "begin": 0,
            "deg": Math.PI * 2

        }, config);

        var treeObj = function treeObj(initData) {

            var orgData = treeLayout()
            // 配置数据格式
            .root(config.root).child(config.child).id(config.id)
            // 计算初始坐标
            (initData);

            if (config.t === 'LR' || config.t === 'RL') ;else if (config.t === 'TB' || config.t === 'BT') ;else if (config.t === 'circle') ;

            // 启动绘图
            config.drawer(orgData);

            return treeObj;
        };

        // 设置绘图方法
        treeObj.drawer = function (drawerback) {
            config.drawer = drawerback;
            return treeObj;
        };

        return treeObj;
    }

    // 在(a,b,c)方向位移d
    function _move(d, a, b, c) {
        c = c || 0;
        var sqrt = Math.sqrt(a * a + b * b + c * c);
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, a * d / sqrt, b * d / sqrt, c * d / sqrt, 1];
    }

    // 围绕0Z轴旋转
    // 其它的旋转可以借助transform实现
    // 旋转角度单位采用弧度制
    function _rotate(deg) {
        var sin = Math.sin(deg),
            cos = Math.cos(deg);
        return [cos, sin, 0, 0, -sin, cos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    }

    // 围绕圆心x、y和z分别缩放xTimes, yTimes和zTimes倍
    function _scale(xTimes, yTimes, zTimes, cx, cy, cz) {
        cx = cx || 0;cy = cy || 0;cz = cz || 0;
        return [xTimes, 0, 0, 0, 0, yTimes, 0, 0, 0, 0, zTimes, 0, cx - cx * xTimes, cy - cy * yTimes, cz - cz * zTimes, 1];
    }

    // 针对任意射线(a1,b1,c1)->(a2,b2,c2)
    // 计算出二个变换矩阵
    // 分别为：任意射线变成OZ轴变换矩阵 + OZ轴变回原来的射线的变换矩阵
    function _transform(a1, b1, c1, a2, b2, c2) {

        if (typeof a1 === 'number' && typeof b1 === 'number') {

            // 如果设置二个点
            // 表示二维上围绕某个点旋转
            if (typeof c1 !== 'number') {
                c1 = 0;a2 = a1;b2 = b1;c2 = 1;
            }
            // 只设置三个点(设置不足六个点都认为只设置了三个点)
            // 表示围绕从原点出发的射线旋转
            else if (typeof a2 !== 'number' || typeof b2 !== 'number' || typeof c2 !== 'number') {
                    a2 = a1;b2 = b1;c2 = c1;a1 = 0;b1 = 0;c1 = 0;
                }

            if (a1 == a2 && b1 == b2 && c1 == c2) throw new Error('It\'s not a legitimate ray!');

            var sqrt1 = Math.sqrt((a2 - a1) * (a2 - a1) + (b2 - b1) * (b2 - b1)),
                cos1 = sqrt1 != 0 ? (b2 - b1) / sqrt1 : 1,
                sin1 = sqrt1 != 0 ? (a2 - a1) / sqrt1 : 0,
                b = (a2 - a1) * sin1 + (b2 - b1) * cos1,
                c = c2 - c1,
                sqrt2 = Math.sqrt(b * b + c * c),
                cos2 = sqrt2 != 0 ? c / sqrt2 : 1,
                sin2 = sqrt2 != 0 ? b / sqrt2 : 0;

            return [

            // 任意射线变成OZ轴变换矩阵
            [cos1, cos2 * sin1, sin1 * sin2, 0, -sin1, cos1 * cos2, cos1 * sin2, 0, 0, -sin2, cos2, 0, b1 * sin1 - a1 * cos1, c1 * sin2 - a1 * sin1 * cos2 - b1 * cos1 * cos2, -a1 * sin1 * sin2 - b1 * cos1 * sin2 - c1 * cos2, 1],

            // OZ轴变回原来的射线的变换矩阵
            [cos1, -sin1, 0, 0, cos2 * sin1, cos2 * cos1, -sin2, 0, sin1 * sin2, cos1 * sin2, cos2, 0, a1, b1, c1, 1]];
        } else {
            throw new Error('a1 and b1 is required!');
        }
    }

    // 二个4x4矩阵相乘
    // 或矩阵和齐次坐标相乘
    var _multiply = function _multiply(matrix4, param) {
        var newParam = [];
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < param.length / 4; j++) {
                newParam[j * 4 + i] = matrix4[i] * param[j * 4] + matrix4[i + 4] * param[j * 4 + 1] + matrix4[i + 8] * param[j * 4 + 2] + matrix4[i + 12] * param[j * 4 + 3];
            }
        }return newParam;
    };

    /**
     * 4x4矩阵
     * 列主序存储
     */
    function Matrix4(initMatrix4) {

        var matrix4 = initMatrix4 || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

        var matrix4Obj = {

            // 移动
            "move": function move(dis, a, b, c) {
                matrix4 = _multiply(_move(dis, a, b, c), matrix4);
                return matrix4Obj;
            },

            // 旋转
            "rotate": function rotate(deg, a1, b1, c1, a2, b2, c2) {
                var matrix4s = _transform(a1, b1, c1, a2, b2, c2);
                matrix4 = _multiply(_multiply(_multiply(matrix4s[1], _rotate(deg)), matrix4s[0]), matrix4);
                return matrix4Obj;
            },

            // 缩放
            "scale": function scale(xTimes, yTimes, zTimes, cx, cy, cz) {
                matrix4 = _multiply(_scale(xTimes, yTimes, zTimes, cx, cy, cz), matrix4);
                return matrix4Obj;
            },

            // 乘法
            // 可以传入一个矩阵(matrix4,flag)
            "multiply": function multiply(newMatrix4, flag) {
                matrix4 = flag ? _multiply(matrix4, newMatrix4) : _multiply(newMatrix4, matrix4);
                return matrix4Obj;
            },

            // 对一个坐标应用变换
            // 齐次坐标(x,y,z,w)
            "use": function use(x, y, z, w) {
                // w为0表示点位于无穷远处，忽略
                z = z || 0;w = w || 1;
                var temp = _multiply(matrix4, [x, y, z, w]);
                temp[0] = +temp[0].toFixed(7);
                temp[1] = +temp[1].toFixed(7);
                temp[2] = +temp[2].toFixed(7);
                temp[3] = +temp[3].toFixed(7);
                return temp;
            },

            // 矩阵的值
            "value": function value() {
                return matrix4;
            }

        };

        return matrix4Obj;
    }

    //当前正在运动的动画的tick函数堆栈
    var $timers = [];
    //唯一定时器的定时间隔
    var $interval = 13;
    //指定了动画时长duration默认值
    var $speeds = 400;
    //定时器ID
    var $timerId = null;

    /**
     * 动画轮播
     * @param {function} doback 轮询函数，有一个形参deep，0-1，表示执行进度
     * @param {number} duration 动画时长，可选
     * @param {function} callback 动画结束回调，可选，有一个形参deep，0-1，表示执行进度
     *
     * @returns {function} 返回一个函数，调用该函数，可以提前结束动画
     */
    function animation(doback, duration, callback) {

        var clock = {
            //把tick函数推入堆栈
            "timer": function timer(tick, duration, callback) {
                if (!tick) {
                    throw new Error('Tick is required!');
                }
                duration = duration || $speeds;
                var id = new Date().valueOf() + "_" + (Math.random() * 1000).toFixed(0);
                $timers.push({
                    "id": id,
                    "createTime": new Date(),
                    "tick": tick,
                    "duration": duration,
                    "callback": callback
                });
                clock.start();
                return id;
            },

            //开启唯一的定时器timerId
            "start": function start() {
                if (!$timerId) {
                    $timerId = window.setInterval(clock.tick, $interval);
                }
            },

            //被定时器调用，遍历timers堆栈
            "tick": function tick() {
                var createTime = void 0,
                    flag = void 0,
                    tick = void 0,
                    callback = void 0,
                    timer = void 0,
                    duration = void 0,
                    passTime = void 0,
                    timers = $timers;
                $timers = [];
                $timers.length = 0;
                for (flag = 0; flag < timers.length; flag++) {
                    //初始化数据
                    timer = timers[flag];
                    createTime = timer.createTime;
                    tick = timer.tick;
                    duration = timer.duration;
                    callback = timer.callback;

                    //执行
                    passTime = (+new Date() - createTime) / duration;
                    passTime = passTime > 1 ? 1 : passTime;
                    tick(passTime);
                    if (passTime < 1 && timer.id) {
                        //动画没有结束再添加
                        $timers.push(timer);
                    } else if (callback) {
                        callback(passTime);
                    }
                }
                if ($timers.length <= 0) {
                    clock.stop();
                }
            },

            //停止定时器，重置timerId=null
            "stop": function stop() {
                if ($timerId) {
                    window.clearInterval($timerId);
                    $timerId = null;
                }
            }
        };

        var id = clock.timer(function (deep) {
            //其中deep为0-1，表示改变的程度
            doback(deep);
        }, duration, callback);

        // 返回一个函数
        // 用于在动画结束前结束动画
        return function () {
            var i = void 0;
            for (i in $timers) {
                if ($timers[i].id == id) {
                    $timers[i].id = undefined;
                    return;
                }
            }
        };
    }

    /**
     * 返回渲染后的CSS样式值
     * @param {DOM} dom 目标结点
     * @param {String} name 属性名称（可选）
     * @return {String}
     */
    function getStyle(dom, name) {

        // 获取结点的全部样式
        var allStyle = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(dom, null) : dom.currentStyle;

        // 如果没有指定属性名称，返回全部样式
        return typeof name === 'string' ? allStyle.getPropertyValue(name) : allStyle;
    }

    function color(config) {}

    /**
     * Hermite三次插值
     * @param {Json} config 可选
     */
    function hermite(config) {

        config = initConfig({
            // 张弛系数
            "u": 0.5
        }, config);

        var MR = void 0,
            a = void 0,
            b = void 0;

        /**
         * 根据x值返回y值
         * @param {Number} x
         */
        var hermite = function hermite(x) {
            if (MR) {
                var sx = (x - a) / (b - a),
                    sx2 = sx * sx,
                    sx3 = sx * sx2;
                var sResult = sx3 * MR[0] + sx2 * MR[1] + sx * MR[2] + MR[3];
                return sResult * (b - a);
            } else throw new Error('You shoud first set the position!');
        };

        /**
         * 设置点的位置
         * @param {Number} x1 左边点的位置
         * @param {Number} y1
         * @param {Number} x2 右边点的位置
         * @param {Number} y2
         * @param {Number} s1 二个点的斜率
         * @param {Number} s2
         */
        hermite.setP = function (x1, y1, x2, y2, s1, s2) {
            if (x1 < x2) {
                // 记录原始尺寸
                a = x1;b = x2;
                var p3 = config.u * s1,
                    p4 = config.u * s2;
                // 缩放到[0,1]定义域
                y1 /= x2 - x1;
                y2 /= x2 - x1;
                // MR是提前计算好的多项式通解矩阵
                // 为了加速计算
                // 如上面说的
                // 统一在[0,1]上计算后再通过缩放和移动恢复
                // 避免了动态求解矩阵的麻烦
                MR = [2 * y1 - 2 * y2 + p3 + p4, 3 * y2 - 3 * y1 - 2 * p3 - p4, p3, y1];
            } else throw new Error('The point x-position should be increamented!');
            return hermite;
        };

        return hermite;
    }

    /**
     * Cardinal三次插值
     * ----------------------------
     * Hermite拟合的计算是，确定二个点和二个点的斜率
     * 用一个y=ax(3)+bx(2)+cx+d的三次多项式来求解
     * 而Cardinal是建立在此基础上
     * 给定需要拟合的二个点和第一个点的前一个点+最后一个点的后一个点
     * 第一个点的斜率由第一个点的前一个点和第二个点的斜率确定
     * 第二个点的斜率由第一个点和第二个点的后一个点的斜率确定
     */

    function cardinal(config) {

        config = initConfig({
            // 该参数用于调整曲线走势，默认数值t=0，分水岭t=-1，|t-(-1)|的值越大，曲线走势调整的越严重
            "t": 0
        }, config);

        var HS = void 0,
            i = void 0;

        // 根据x值返回y值
        var cardinal = function cardinal(x) {

            if (HS) {
                i = -1;
                // 寻找记录x实在位置的区间
                // 这里就是寻找对应的拟合函数
                while (i + 1 < HS.x.length && (x > HS.x[i + 1] || i == -1 && x >= HS.x[i + 1])) {
                    i += 1;
                }
                if (i == -1 || i >= HS.h.length) throw new Error('Coordinate crossing!');
                return HS.h[i](x);
            } else {
                throw new Error('You shoud first set the position!');
            }
        };

        // 设置张弛系数【应该在点的位置设置前设置】
        cardinal.setT = function (t) {

            if (typeof t === 'number') {
                config.t = t;
            } else {
                throw new Error('Expecting a figure!');
            }
            return cardinal;
        };

        // 设置点的位置
        // 参数格式：[[x,y],[x,y],...]
        // 至少二个点
        cardinal.setP = function (points) {

            HS = {
                "x": [],
                "h": []
            };
            var flag = void 0,
                slope = (points[1][1] - points[0][1]) / (points[1][0] - points[0][0]),
                temp = void 0;
            HS.x[0] = points[0][0];
            for (flag = 1; flag < points.length; flag++) {
                if (points[flag][0] <= points[flag - 1][0]) throw new Error('The point position should be increamented!');
                HS.x[flag] = points[flag][0];
                // 求点斜率
                temp = flag < points.length - 1 ? (points[flag + 1][1] - points[flag - 1][1]) / (points[flag + 1][0] - points[flag - 1][0]) : (points[flag][1] - points[flag - 1][1]) / (points[flag][0] - points[flag - 1][0]);
                // 求解二个点直接的拟合方程
                // 第一个点的前一个点直接取第一个点
                // 最后一个点的后一个点直接取最后一个点
                HS.h[flag - 1] = hermite({
                    "u": (1 - config.t) * 0.5
                }).setP(points[flag - 1][0], points[flag - 1][1], points[flag][0], points[flag][1], slope, temp);
                slope = temp;
            }
            return cardinal;
        };

        return cardinal;
    }

    /**
     * 点（x,y）围绕中心（cx,cy）旋转deg度
     */
    var _rotate2 = function _rotate2(cx, cy, deg, x, y) {
        var cos = Math.cos(deg),
            sin = Math.sin(deg);
        return [+((x - cx) * cos - (y - cy) * sin + cx).toFixed(7), +((x - cx) * sin + (y - cy) * cos + cy).toFixed(7)];
    };

    /**
     * 点（x,y）沿着向量（ax,ay）方向移动距离d
     */
    var _move2 = function _move2(ax, ay, d, x, y) {
        var sqrt = Math.sqrt(ax * ax + ay * ay);
        return [+(ax * d / sqrt + x).toFixed(7), +(ay * d / sqrt + y).toFixed(7)];
    };

    /**
     * 点（x,y）围绕中心（cx,cy）缩放times倍
     */
    var _scale2 = function _scale2(cx, cy, times, x, y) {
        return [+(times * (x - cx) + cx).toFixed(7), +(times * (y - cy) + cy).toFixed(7)];
    };

    var dot = function dot(config) {

        config = initConfig({
            // 前进方向
            d: [1, 1],
            // 中心坐标
            c: [0, 0],
            // 当前位置
            p: [0, 0]
        }, config);

        var dotObj = {

            // 前进方向以当前位置为中心，旋转deg度
            "rotate": function rotate(deg) {
                var dPx = config.d[0] + config.p[0],
                    dPy = config.d[1] + config.p[1];
                var dP = _rotate2(config.p[0], config.p[1], deg, dPx, dPy);
                config.d = [dP[0] - config.p[0], dP[1] - config.p[1]];
                return dotObj;
            },

            // 沿着当前前进方向前进d
            "move": function move(d) {
                config.p = _move2(config.d[0], config.d[1], d, config.p[0], config.p[1]);
                return dotObj;
            },

            // 围绕中心坐标缩放
            "scale": function scale(times) {
                config.p = _scale2(config.c[0], config.c[1], times, config.p[0], config.p[1]);
                return dotObj;
            },

            // 当前位置
            "value": function value() {
                return config.p;
            }

        };

        return dotObj;
    };

    /**
     * 把当前维护的结点加到目标结点内部的结尾
     * @param {selector} target
     * @return {image2D}
     */
    var appendTo = function appendTo(target, context) {
        var nodes = sizzle(target, context || document);
        if (nodes.length > 0) {
            for (var i = 0; i < this.length; i++) {
                nodes[0].appendChild(this[i]);
            }
        } else {
            throw new Error('Target empty!');
        }
        return this;
    };

    /**
     * 把当前维护的结点加到目标结点内部的开头
     * @param {selector} target
     * @return {image2D}
     */
    var prependTo = function prependTo(target, context) {
        var nodes = sizzle(target, context || document);
        if (nodes.length > 0) {
            for (var i = 0; i < this.length; i++) {
                nodes[0].insertBefore(this[i], nodes[0].childNodes[0]);
            }
        } else {
            throw new Error('Target empty!');
        }
        return this;
    };

    // 删除当前维护的结点
    var remove = function remove() {
        for (var i = 0; i < this.length; i++) {
            this[i].parentNode.removeChild(this[i]);
        }return this;
    };

    // 筛选当前结点
    var filter = function filter(filterback) {
        var temp = [];
        for (var i = 0; i < this.length; i++) {
            if (filterback(i, image2D(this[i]))) temp.push(this[i]);
        }
        return image2D(temp);
    };

    /**
     * 设置或获取样式
     * @arguments(key):获取指定样式
     * @arguments(key,value):设置指定样式
     * @arguments():获取全部样式
     * @arguments(json):设置大量样式
     */
    function style() {

        // 获取样式
        if (arguments.length <= 1 && (arguments.length <= 0 || _typeof(arguments[0]) !== 'object')) {
            if (this.length <= 0) throw new Error('Target empty!');
            return getStyle(this[0], arguments[0]);
        }

        // 设置样式
        for (var i = 0; i < this.length; i++) {
            if (arguments.length === 1) {
                for (var key in arguments[0]) {
                    this[i].style[key] = arguments[0][key];
                }
            } else this[i].style[arguments[0]] = arguments[1];
        }

        return this;
    }

    var setAttribute = function setAttribute(dom, attr, val) {
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
    function attribute() {

        // 获取属性值
        if (arguments.length === 1 && _typeof(arguments[0]) !== 'object') {
            if (this.length <= 0) throw new Error('Target empty!');
            return this[0].getAttribute(arguments[0]);
        }

        // 设置属性值
        else if (arguments.length > 0) {
                for (var i = 0; i < this.length; i++) {
                    if (arguments.length === 1) {
                        for (var key in arguments[0]) {
                            setAttribute(this[i], key, arguments[0][key]);
                        }
                    } else setAttribute(this[i], arguments[0], arguments[1]);
                }
            }

        return this;
    }

    // 用于把数据绑定到一组结点或返回第一个结点数据
    // 可以传递函数对数据处理
    var datum = function datum(data, calcback) {

        // 获取数据
        if (arguments.length <= 0) {
            if (this.length <= 0) throw new Error('Target empty!');
            return this[0].__data__;
        }

        // 设置数据
        for (var i = 0; i < this.length; i++) {
            this[i].__data__ = typeof calcback === 'function' ? calcback(data, i) : data;
        }return this;
    };

    // 用于把一组数据绑定到一组结点或返回一组结点数据
    // 可以传递函数对数据处理
    var data = function data(datas, calcback) {

        // 获取数据
        if (arguments.length <= 0) {
            var _temp3 = [];
            for (var _i3 = 0; _i3 < this.length; _i3++) {
                _temp3[_i3] = this[_i3].__data__;
            }return _temp3;
        }

        // 设置数据
        var temp = [],
            i = void 0;
        for (i = 0; i < this.length && i < datas.length; i++) {
            this[i].__data__ = typeof calcback === 'function' ? calcback(datas[i], i) : datas[i];
            temp.push(this[i]);
        }
        var newImage2D = image2D(temp);

        // 记录需要去平衡的数据
        newImage2D.__enter__ = [];
        for (; i < datas.length; i++) {
            newImage2D.__enter__.push(typeof calcback === 'function' ? calcback(datas[i], i) : datas[i]);
        } // 记录需要去平衡的结点
        newImage2D.__exit__ = [];
        for (; i < this.length; i++) {
            newImage2D.__exit__.push(this[i]);
        }return newImage2D;
    };

    // 把过滤出来多于结点的数据部分变成结点返回
    // 需要传递一个字符串来标明新创建元素是什么
    var enter = function enter(template) {

        if (!this.__enter__ || this.__enter__.constructor !== Array) throw new Error('Not a data node object to be balanced!');

        var temp = [];
        for (var i = 0; i < this.__enter__.length; i++) {
            temp[i] = toNode$1(template);
            temp[i].__data__ = this.__enter__[i];
        }

        delete this.__enter__;
        return image2D(temp);
    };

    // 把过滤出来多于数据的结点部分返回
    var exit = function exit() {

        if (!this.__exit__ || this.__exit__.constructor !== Array) throw new Error('Not a data node object to be balanced!');

        var exitImage2D = image2D(this.__exit__);
        delete this.__exit__;
        return exitImage2D;
    };

    // 在维护的结点上轮询执行传入的方法
    // doback(data,index,image2D)
    var loop = function loop(doback) {

        for (var i = 0; i < this.length; i++) {
            doback(this[i].__data__, i, image2D(this[i]));
        }return this;
    };

    /**
     * 绑定事件
     * @param {string} eventType
     * @param {function} callback
     */
    var bind = function bind(eventType, callback) {

        if (window.attachEvent) {
            for (var flag = 0; flag < this.length; flag++) {
                this[flag].attachEvent("on" + eventType, callback);
            } // 后绑定的先执行
        } else {
            for (var _flag2 = 0; _flag2 < this.length; _flag2++) {
                this[_flag2].addEventListener(eventType, callback, false);
            } // 捕获
        }

        return this;
    };

    /**
     * 获取鼠标相对特定元素左上角位置
     * @param {Event} event
     */
    var position = function position(event) {
        var bounding = this[0].getBoundingClientRect();
        if (!event || !event.clientX) throw new Error('Event is necessary!');
        return {
            "x": event.clientX - bounding.left,
            "y": event.clientY - bounding.top
        };
    };

    // 获取原生的canvas画笔
    function painter() {
        if (this.length > 0) {
            if (this[0].nodeName.toLowerCase() === 'canvas') {
                return this[0].getContext("2d");
            } else throw new Error('Painter is not a function!');
        } else throw new Error('Target empty!');
    }

    image2D.extend({

        // 布局
        tree: tree,

        // 矩阵变换
        Matrix4: Matrix4,

        // 二维简单变换
        rotate: _rotate2, move: _move2, scale: _scale2, dot: dot,

        // 工具类
        animation: animation, color: color,

        // 插值方法
        cardinal: cardinal

    });
    image2D.prototype.extend({

        // 结点操作
        appendTo: appendTo, prependTo: prependTo, remove: remove, filter: filter,

        // 结点属性或样式操作
        css: style, attr: attribute,

        // 结点和数据绑定
        datum: datum, data: data, enter: enter, exit: exit, loop: loop,

        // 结点事件
        bind: bind, position: position,

        // canvas2D绘图相关
        painter: painter

    });

    var
    // 保存之前的image2D，防止直接覆盖
    _image2D = window.image2D,


    // 保存之前的$$，防止直接覆盖
    _$$ = window.$$;

    image2D.noConflict = function (deep) {

        // 如果当前的$$是被最新的image2D覆盖的
        // 恢复之前的
        if (window.$$ === image2D) {
            window.$$ = _$$;
        }

        // 如果当前的image2D是被最新的image2D覆盖的
        // 且标记需要恢复
        // 恢复之前的
        if (deep && window.image2D === image2D) {
            window.image2D = _image2D;
        }

        // 返回当前image2D
        // 因为调用这个方法以后
        // 全局window下的image2D和$$是什么
        // 已经不一定了
        return image2D;
    };

    // 挂载库对象到根
    window.image2D = window.$$ = image2D;
})();