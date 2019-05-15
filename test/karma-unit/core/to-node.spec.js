import toNode from '../../../src/core/to-node';
import { NAMESPACE } from '../../../src/core/config';

describe('字符串模板变成结点', function () {

    it('HTML模板', function () {

        expect(toNode('<canvas>').namespaceURI).toEqual(NAMESPACE.xhtml);
        expect(toNode('<div>').namespaceURI).toEqual(NAMESPACE.xhtml);

    });

    it('SVG模板', function () {

        expect(toNode('<svg>').namespaceURI).toEqual(NAMESPACE.svg);
        expect(toNode('<path>').namespaceURI).toEqual(NAMESPACE.svg);

    });

});
