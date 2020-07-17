/*
 * @Author: zhangjianzhong
 * @Date: 2020-07-15 10:44:46
 * @Last Modified by: zhangjianzhong
 * @Last Modified time: 2020-07-15 11:24:57
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/index.vue'
import menus from '../config/menus.js'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: menus.components[0].path,
	},
	{
		path: '/:type/:module',
		component: HomeView,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router