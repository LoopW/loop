import VueRouter from 'vue-router';
import {getCookie} from '@/utils/auth'
import {staticRoutes} from "@/router/staticRoutes";
import {defaultRoutes} from "@/router/defaultRoutes";
const routes = staticRoutes.concat(defaultRoutes);


 const router = new VueRouter({
	routes
})

//全局路由守卫
const whiteRouter =['Login','HomePage']
router.beforeEach((to,from,next)=>{
    next()
    // if(getCookie('token')){
    //     next()
    // }else{
    //     if (whiteRouter.includes(to.name)) {
    //         next()//确定进入
    //     } else {
    //         next({ name: "Login" })//确定进入并跳转
    //     }
    // }
})


export { router }
