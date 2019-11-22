QUnit.test('旋转矩阵', 3, function () {

    var rotate2D = image2D.Matrix4().rotate(Math.PI / 2, 2, 1).use(2, 0);
    deepEqual(rotate2D, [3, 1, 0, 1], '2D旋转');

    var rotateLine = image2D.Matrix4().rotate(Math.PI / 3 * 2, 1, 1, 1).use(0, 1, 0);
    deepEqual(rotateLine, [0, 0, 1, 1], '来自圆心的射线旋转');

    var rotate3D = image2D.Matrix4().rotate(Math.PI / 3 * 4, 1, 0, 1, 2, 1, 2).use(1, 1, 1);
    deepEqual(rotate3D, [2, 0, 1, 1], '任意射线旋转');

});

QUnit.test('缩放矩阵', 1, function () {

    var scale = image2D.Matrix4().scale(1, 2, 7, 3, 4, 1).use(0, 0, 1);
    deepEqual(scale, [0, -4, 1, 1], '立体缩放');

});

QUnit.test('移动矩阵', 2, function () {

    var move2D = image2D.Matrix4().move(5, 3, 4).use(1, 2);
    deepEqual(move2D, [4, 6, 0, 1], '平面移动');

    var move3D = image2D.Matrix4().move(5, 3, 4, 0).use(1, 1, 1);
    deepEqual(move3D, [4, 5, 1, 1], '立体移动');

});

QUnit.test('多变换矩阵', 1, function () {

    var multiTransform = image2D.Matrix4().scale(0.5, 0.5, 0.5, 1, 0, 0).move(Math.sqrt(14), -1, -2, -3).rotate(Math.PI / 3 * 4, 1, 0, 1, 2, 1, 2).use(3, 6, 8);
    deepEqual(multiTransform, [2, 0, 1, 1], '缩放-》移动-》旋转');

});
