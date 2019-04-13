import { formatColor } from '../../../src/core/color';

describe('色彩统一格式化', function () {

    it('初始化值通过颜色名称设置', function () {

        expect(formatColor('red')).toEqual([255, 0, 0, 1]);
        // rgb(0,255,0)是鲜绿色，green是纯绿色
        expect(formatColor('green')).toEqual([0, 128, 0, 1]);
        expect(formatColor('blue')).toEqual([0, 0, 255, 1]);

    });

    it('rgb方式设置的颜色', function () {

        expect(formatColor('rgb(0,255,0)')).toEqual([0, 255, 0, 1]);
        expect(formatColor('rgb(123,5,0)')).toEqual([123, 5, 0, 1]);

    });

    it('rgba方式设置的颜色', function () {

        expect(formatColor('rgba(0,255,0,1)')).toEqual([0, 255, 0, 1]);
        expect(formatColor('rgba(0,255,0,0)')).toEqual([0, 255, 0, 0]);

    });

    it('#XXX方式设置的颜色', function () {

        expect(formatColor('#0f0')).toEqual([0, 255, 0, 1]);
        expect(formatColor('#00ff00')).toEqual([0, 255, 0, 1]);

    });

});
