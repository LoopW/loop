import VueRouter from 'vue-router';
import {staticRoutes} from "@/router/staticRoutes";
import {defaultRoutes} from "@/router/defaultRoutes";
const routes = staticRoutes.concat(defaultRoutes);

export const router = new VueRouter({
	routes
})
