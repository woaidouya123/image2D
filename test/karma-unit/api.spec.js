describe('分组', function () {

    it('具体的测试', function () {

        // 对象比较
        expect(1).toBe(1);
        expect([1, 2, 3]).not.toBe([1, 2, 3]);

        // 值比较
        expect([1, 2, 3]).toEqual([1, 2, 3]);
        expect([1, 2, 3]).not.toEqual([1, 2, 4]);

        // 空值
        expect(null).not.toBeUndefined();
        expect(undefined).toBeUndefined();
        expect(null).toBeNull();
        expect(undefined).not.toBeNull();

        // 数组包含
        expect([1, 2, 3]).toContain(2);
        expect([1, 2, 3]).not.toContain("2");
        expect([1, 2, 3]).not.toContain(4);

        // 大小比较
        expect(2).toBeLessThan(2.1);
        expect(2).not.toBeLessThan(2);

        // 抛错
        let doIt = function () {
            throw new TypeError('错误描述');
        };
        expect(doIt).toThrowError('错误描述');
        expect(doIt).toThrowError(/错误/);
        expect(doIt).toThrowError(TypeError);
        expect(doIt).toThrowError(TypeError, '错误描述');

    });

});
