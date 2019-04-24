import treeLayout from '../../core/tree';
import { initConfig } from '../../core/config';

export default function (config) {

    config = initConfig({

    }, config);

    let treeObj = function (initData) {

        let orgData = treeLayout()
            // 配置数据格式
            .root(config.root).child(config.child).id(config.id)
            // 计算初始坐标
            (initData);


    };

    return treeObj;
};
