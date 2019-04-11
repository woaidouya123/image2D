module.exports = function (config) {
    config.set({

        basePath: './',


        // 使用到的测试框架
        frameworks: ['jasmine', 'browserify'],


        // 配置业务代码和测试代码在哪里
        files: [
            'src/**/*.js',
            'test/karma-unit/**/*.spec.js'
        ],


        // 预处理，转换ES6+代码
        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/karma-unit/**/*.js': ['browserify']
        },


        //karma-browserify 配置，配置为使用 babelify
        browserify: {
            debug: true,
            transform: [['babelify', { presets: ['es2015'], plugins: ['transform-class-properties'] }]]
        },


        //用 karma-jasmine-html-reporter 生成report
        reporters: ['kjhtml'],


        // 测试服务器端口
        port: 20000,


        // 启用或禁用输出报告或者日志中的颜色
        colors: true,


        // 日志级别
        // 可选项: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // 启用或禁用自动检测文件变化进行测试
        autoWatch: true,


        // 自启动浏览器
        browsers: ['Opera', 'Chrome', 'Firefox', 'Safari'],


        //  开启或禁用持续集成模式
        //  设置为true, Karma将打开浏览器，执行测试并最后退出
        singleRun: false,


        // 并发级别（启动的浏览器数）
        concurrency: Infinity
    })
}
