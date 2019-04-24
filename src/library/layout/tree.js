import treeLayout from '../../core/tree';
import { initConfig } from '../../core/config';

export default function (config) {

    config = initConfig({

        // 类型：如果不是下面五种之一，就认为是原始类型
        // t:LR|RL|BT|TB|circle

        // 如果类型是LR|RL|BT|TB需要设置如下参数
        // 1.rx,ry:顶点节点坐标；2.w,h:宽和高

        // 如果类型是circle需要设置如下参数
        // 1.cx,cy：圆心；2.r:半径；3.begin,deg：开始和跨越弧度（可选）
        "begin": 0,
        "deg": Math.PI * 2

    }, config);

    let treeObj = function (initData) {

        let orgData = treeLayout()
            // 配置数据格式
            .root(config.root).child(config.child).id(config.id)
            // 计算初始坐标
            (initData);


        if (config.t === 'LR' || config.t === 'RL') {

        } else if (config.t === 'TB' || config.t === 'BT') {

        } else if (config.t === 'circle') {

        }

        // 启动绘图
        config.drawer(orgData);

        return treeObj;
    };

    // 设置绘图方法
    treeObj.drawer = function (drawerback) {
        config.drawer = drawerback;
        return treeObj;
    };

    return treeObj;
};
