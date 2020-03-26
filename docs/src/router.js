// 配置路由
export default {
    routes: [{
        path: 'guide',
        component: () => import("./pages/guide.iCrush")
    }, {
        path: 'api',
        component: () => import("./pages/api.iCrush"),
        children: [{
            path: 'how-to-use',
            component: () => import("./pages/api/how-to-use.iCrush")
        }, {
            path: 'xhtml',
            component: () => import("./pages/api/xhtml.iCrush")
        }, {
            path: 'painter',
            component: () => import("./pages/api/painter.iCrush")
        }, {
            path: 'calculate',
            component: () => import("./pages/api/calculate.iCrush")
        }, {
            path: 'tool',
            component: () => import("./pages/api/tool.iCrush")
        }, {
            path: '*',
            redirect: 'how-to-use'
        }]
    }, {
        path: 'about',
        component: () => import("./pages/about.iCrush")
    }, {
        path: '*',
        redirect: 'guide'
    }]
};
