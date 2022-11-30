import Vue from 'vue'
import App from './App.vue'
//引入路由文件
import { router } from './router'
//引入element-ui及css样式//element-ui的图标库直接包含在ElementUI，不需要单独引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入vuex
import { store } from './store'
//引入路由
import VueRouter from 'vue-router'
// 炫酷的粒子动效
import  VueParticles  from  'vue-particles'
//挂载到vue上
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueParticles);


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
