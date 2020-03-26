import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 配置路由
const router = new VueRouter({
    routes: [{
        path: '/guide',
        component: resolve => require(['./pages/guide.vue'], resolve)
    }, {
        path: '/api',
        component: resolve => require(['./pages/api.vue'], resolve),
        children: [{
            path: 'how-to-use',
            component: resolve => require(['./pages/api/how-to-use.vue'], resolve)
        }, {
            path: 'xhtml',
            component: resolve => require(['./pages/api/xhtml.vue'], resolve)
        }, {
            path: 'painter',
            component: resolve => require(['./pages/api/painter.vue'], resolve)
        }, {
            path: 'calculate',
            component: resolve => require(['./pages/api/calculate.vue'], resolve)
        }, {
            path: 'tool',
            component: resolve => require(['./pages/api/tool.vue'], resolve)
        }, {
            path: '*',
            redirect: 'how-to-use'
        }]
    }, {
        path: '/about',
        component: resolve => require(['./pages/about.vue'], resolve)
    }, {
        path: '/*',
        redirect: 'guide'
    }]
});

export default router;
