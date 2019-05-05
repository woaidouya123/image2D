import { isNode } from '../../core/type';

export default function () {

    if (!isNode(this[0])) throw new Error('Target empty!');

    if (this[0].nodeName.toLowerCase() !== 'canvas') throw new Error('Layer is not a function!');

    let layer = {

    };

    return layer;
};
