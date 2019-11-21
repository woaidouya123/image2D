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
        component: resolve => require(['./pages/api.vue'], resolve)
    }, {
        path: '/about',
        component: resolve => require(['./pages/about.vue'], resolve)
    },
    {
        path: '/*',
        redirect: 'guide'
    }
    ]
});

export default router;
