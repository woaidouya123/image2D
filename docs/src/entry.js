import Vue from 'vue';

// 兼容文件
import 'promise-polyfill/src/polyfill';

// 引入启动界面
import App from './App.vue';

// 引入路由文件
import router from './router';

// 引入基础样式
import '@yelloxing/normalize.css';

// 引入公共样式
import './style.scss';

// 添加水印
let watermark = resolve => require(['./service/watermark'], resolve);
new Promise(resolve => watermark(resolve)).then(callback => callback.default("请求提意见"));

//根对象
window.vm = new Vue({

    //挂载点
    el: document.getElementById('root'),

    // 启用路由
    router,

    // 启动vue
    render: createElement => createElement(App)
});
