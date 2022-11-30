/**
 *
 * 路由配置规则：
 *
 * {
 *  path:'',路径
 *  name:'',路由名称，生成menu时menu name
 *  meta:{},额外信息，icon为menu中的icon  showFlg标识 是否展示当前的页面路由菜单
 *  children: [], 子路由，menu中的子menu 没有时可为空数组
 * }
 *
 */
export const staticRoutes = [
    {
        path: '/login',
        // redirect: "/HomePage",
        component: () => import('@/pages/views/login/index'),
        meta: {
            name: '登录',
            // showFlg: true,
            // icon: "el-icon-s-home",
        },
        children: []
    },
    {
        path: '/HomePage',
        // redirect: "/HomePage",
        component: () => import('@/pages/views/HomePage/index'),
        meta: {
            name: '首页',
            showFlg: true,
            icon: "el-icon-s-home",
            //关闭首页tag的叉号
            closeX:true
        },
        children: []
    },
    {
        path: '/test',
        // redirect: "/HomePage",
        component: () => import('@/pages/ComputedAndWatch'),
        meta: {
            name: '计算属性与监听',
            showFlg: true,
            icon: "el-icon-s-home",
        },
        children: []
    },
    {
        path: '/page1',
        component: () => import('@/layout/empty.vue'),
        meta: {
            name: '导航一',
            showFlg: false,
            icon: "el-icon-s-home",
        },
        children: [
            {
                path: 'page1-1',
                component: () => import('@/layout/empty.vue'),
                meta: {
                    name: '导航1-1',
                    showFlg: false
                },
                children: [
                    {
                        path: 'page1-1-1',
                        component: () => import('@/pages/views/page1-1-1'),
                        meta: {
                            name: '导航1-1-1',
                            showFlg: true
                        },
                        children:[]
                    }
                ]
            }
        ]
    },
    {
        path: '/page2',
        component: () => import('@/pages/views/page2.vue'),
        meta: {
            name: '导航二',
            showFlg: true,
            icon: "el-icon-s-home",
        },
        children: []
    },
    {
        path: '/page3',
        component: () => import('@/pages/views/page3.vue'),
        meta: {
            name: '导航三',
            showFlg: true,
            icon: "el-icon-s-home",
        },
        children: []
    },
];
