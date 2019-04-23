import image2D from '../core';

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



};

// 把过滤出来多于结点的数据部分变成结点返回
// 需要传递一个字符串来标明新创建元素是什么
export let enter = function (template) {

};

// 把过滤出来多于数据的结点部分返回
export let exit = function () {

};

// 在维护的结点上轮询执行传入的方法
// doback(data,index,image2D)
export let loop = function (doback) {

    for (let i = 0; i < this.length; i++)
        doback(this[i].__data__, i, image2D(this[i]));

    return this;
};
