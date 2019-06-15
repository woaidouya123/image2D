import image2D from '../core';
import toNode from '../../core/to-node';

// 用于把数据绑定到一组结点或返回第一个结点数据
// 可以传递函数对数据处理
export let datum = function (data, calcback) {

    // 获取数据
    if (arguments.length <= 0) {
        if (this.length <= 0) throw new Error('Target empty!');
        return this[0].__data__;
    }

    // 设置数据
    for (let i = 0; i < this.length; i++)
        this[i].__data__ = typeof calcback === 'function' ? calcback(data, i) : data;

    return this;
};

// 用于把一组数据绑定到一组结点或返回一组结点数据
// 可以传递函数对数据处理
export let data = function (datas, calcback) {

    // 获取数据
    if (arguments.length <= 0) {
        let temp = [];
        for (let i = 0; i < this.length; i++)
            temp[i] = this[i].__data__;
        return temp;
    }

    // 设置数据
    let temp = [], i;
    for (i = 0; i < this.length && i < datas.length; i++) {
        this[i].__data__ = typeof calcback === 'function' ? calcback(datas[i], i) : datas[i];
        temp.push(this[i]);
    }
    let newImage2D = image2D(temp);

    // 记录需要去平衡的数据
    newImage2D.__enter__ = [];
    for (; i < datas.length; i++)
        newImage2D.__enter__.push(typeof calcback === 'function' ? calcback(datas[i], i) : datas[i]);

    // 记录需要去平衡的结点
    newImage2D.__exit__ = [];
    for (; i < this.length; i++)
        newImage2D.__exit__.push(this[i]);

    return newImage2D;
};

// 把过滤出来多于结点的数据部分变成结点返回
// 需要传递一个字符串来标明新创建元素是什么
export let enter = function (template,type) {

    if (!this.__enter__ || this.__enter__.constructor !== Array)
        throw new Error('Not a data node object to be balanced!');

    let temp = [];
    for (let i = 0; i < this.__enter__.length; i++) {
        temp[i] = toNode(template,type);
        temp[i].__data__ = this.__enter__[i];
    }

    delete this.__enter__;
    return image2D(temp);
};

// 把过滤出来多于数据的结点部分返回
export let exit = function () {

    if (!this.__exit__ || this.__exit__.constructor !== Array)
        throw new Error('Not a data node object to be balanced!');

    let exitImage2D = image2D(this.__exit__);
    delete this.__exit__;
    return exitImage2D;
};

// 在维护的结点上轮询执行传入的方法
// doback(data,index,image2D)
export let loop = function (doback) {

    for (let i = 0; i < this.length; i++)
        doback(this[i].__data__, i, image2D(this[i]));

    return this;
};
