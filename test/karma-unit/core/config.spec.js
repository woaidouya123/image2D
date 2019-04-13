import { initConfig } from '../../../src/core/config';

describe('初始化配置文件', function () {

    it('初始化内容为空', function () {

        expect(initConfig({}, { "key": "value" })).toEqual({ "key": "value" });

    });

    it('初始化内容不为空', function () {

        expect(initConfig({ "initKey": "initValue" }, { "key": "value" })).toEqual({ "initKey": "initValue", "key": "value" });
        expect(initConfig({ "initKey": "initValue", "key": "value2" }, { "key": "value", "key3": "value3" })).toEqual({ "initKey": "initValue", "key": "value", "key3": "value3" });

    });

});
