import toNode from '../../../src/core/to-node';
import { NAMESPACE } from '../../../src/core/config';
import { HTML, SVG } from '../../../src/core/type';

describe('字符串转为结点', function () {

    it('应该采用html命名空间', function () {

        expect(toNode('<div></div>', HTML).namespaceURI).toBe(NAMESPACE.xhtml);

    });

    it('应该采用svg命名空间', function () {

        expect(toNode('<g></g>', SVG).namespaceURI).toBe(NAMESPACE.svg);
        expect(toNode('<g></g>').namespaceURI).toBe(NAMESPACE.svg);

    });

});
