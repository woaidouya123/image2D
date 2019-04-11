import { hermite } from '../../src/export';

describe('Hermite插值法', function () {

    it('y=x(3次方)+1', function () {

        let interpolate = hermite({
            // 使用斜率不调整的Hermite插值法求出回归曲线
            "u": 1
        }).setP(0, 1, 3, 28, 0, 27);

        expect(interpolate(0)).toEqual(1);
        expect(interpolate(1)).toEqual(2);
        expect(interpolate(2)).toEqual(9);
        expect(interpolate(3)).toEqual(28);

    });

});
