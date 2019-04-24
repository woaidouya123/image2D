// 获取原生的canvas画笔
export default function () {
    if (this.length > 0) {
        if (this[0].nodeName.toLowerCase() === 'canvas') {
            return this[0].getContext("2d");
        } else throw new Error('Painter is not a function!');
    } else throw new Error('Target empty!');
};
