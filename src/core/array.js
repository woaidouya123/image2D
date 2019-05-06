// 数组操作补充
export default {

    // 删除数组中满足调整的元素，并且返回删除的元素的原位置(返回的是数组)
    // checkback(item,index)是判断函数，返回true满足条件删除
    "delete": function (array, checkback) {

        let org_index = [];

        // 查找元素
        for (let index = 0; index < array.length; index++) {
            if (checkback(array[index], index)) org_index.push(index);
        }

        // 删除元素
        for (let index = org_index.length; index > 0; index--) {
            array.splice(org_index[index - 1], 1);
        }

        return org_index;
    }
};
