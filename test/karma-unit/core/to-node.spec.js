import toNode from '../../../src/core/to-node';
import { NAMESPACE } from '../../../src/core/config';

describe('字符串模板变成结点', function () {

    it('HTML模板', function () {

        expect(toNode('<canvas>').namespaceURI).toEqual(NAMESPACE.xhtml);
        expect(toNode('<div>', 'html').namespaceURI).toEqual(NAMESPACE.xhtml);

        // 针对错误参数的抛错测试
        expect(function () { toNode('tr', 'html') }).toThrowError(/This template cannot be generated using div as a container:/);

    });

    it('SVG模板', function () {

        expect(toNode('<svg>').namespaceURI).toEqual(NAMESPACE.svg);
        expect(toNode('<path>').namespaceURI).toEqual(NAMESPACE.svg);

    });

});
