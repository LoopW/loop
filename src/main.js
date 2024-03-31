import Vue from 'vue'
import App from './App.vue'

//引入路由文件
import { router } from './router'
//引入element-ui及css样式//element-ui的图标库直接包含在ElementUI，不需要单独引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入vuex
import { store } from './store'
//未完善 主要作用是打包的时候将所有的px转换成rem 实现屏幕响应式
import 'lib-flexible'
//引入路由
import VueRouter from 'vue-router'
// 炫酷的粒子动效
import  VueParticles  from  'vue-particles'
//挂在webscoket
//对服务端进行连接
import SocketService from '@/utils/webScoket'
// SocketService.Instance.connect()

// 其他的组件  this.$socket
// Vue.prototype.$socket = SocketService.Instance

//  引入Echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
//挂载到vue上
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueParticles);


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
