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
    //演示路由
    {
        path: '/demo',
        name:'Demo',
        component: () => import('@/pages/views/echartsDemo/demo.vue'),
        meta: {
            name: '演示',
            // showFlg: true,
            // icon: "el-icon-s-home",
        },
        children: []
    },
    //演示路由2
    {
        path: '/demo2',
        name:'Demo2',
        component: () => import('@/pages/views/echartsDemo/demo2.vue'),
        meta: {
            name: '演示2',
            // showFlg: true,
            // icon: "el-icon-s-home",
        },
        children: []
    },
    //演示路由3
    {
        path: '/demo3',
        name:'Demo3',
        component: () => import('@/pages/views/echartsDemo/demo3.vue'),
        meta: {
            name: '演示webscoket',
            // showFlg: true,
            // icon: "el-icon-s-home",
        },
        children: []
    },
    //演示路由4
    {
        path: '/demo4',
        name:'Demo3',
        component: () => import('@/pages/views/echartsDemo/demo4.vue'),
        meta: {
            name: '演示动画',
            // showFlg: true,
            // icon: "el-icon-s-home",
        },
        children: []
    },
    {
        path: '/login',
        name:'Login',
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
        name:'HomePage',
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
        name:'Test',
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
        name:'Page1',
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
                name:'Page1-1',
                meta: {
                    name: '导航1-1',
                    showFlg: false
                },
                children: [
                    {
                        path: 'page1-1-1',
                        name:'Page1-1-1',
                        component: () => import('@/pages/views/page1-1-1'),
                        meta: {
                            name: 'page1-1-1',
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
        name:'Page2',
        component: () => import('@/pages/views/TreeData.vue'),
        meta: {
            name: '树形与线性转化',
            showFlg: true,
            icon: "el-icon-s-home",
        },
        children: []
    },
    {
        path: '/page3',
        name:'Page3',
        component: () => import('@/pages/views/communication.vue'),
        meta: {
            name: '父子组件通讯',
            showFlg: true,
            icon: "el-icon-s-home",
        },
        children: []
    },
    {
        path: '/tip-router',
        name:'Tiprouter',
        component: () => import('@/pages/views/tip.vue'),
        meta: {
            name: '代码合并技巧',
            showFlg: true,
            icon: "el-icon-s-home",
        },
        children: []
    },
    {
        path: '/slot-router',
        name:'slotrouter',
        component: () => import('@/pages/views/slot.vue'),
        meta: {
            name: '插槽',
            showFlg: true,
            icon: "el-icon-s-home",
        },
        children: []
    },
    {
        path: '/JS-router',
        name:'JsRouter',
        component: () => import('@/pages/views/JS.vue'),
        meta: {
            name: 'JS',
            showFlg: true,
            icon: "el-icon-s-home",
        },
        children: []
    },
    {
        path: '/echart-map',
        name:'EchertMap',
        component: () => import('@/pages/views/echart.vue'),
        meta: {
            name: 'Echart',
            showFlg: true,
            icon: "el-icon-s-home",
        },
        children: []
    },
    //父子组件传值
    {
        path: '/par-son',
        name:'ParSon',
        component: () => import('@/pages/views/par_son_con/parent'),
        meta: {
            name: 'ParSon',
            showFlg: true,
            icon: "el-icon-s-home",
        },
        children: []
    },

];
