/*
 * @Author: zhangjianzhong
 * @Date: 2020-07-15 10:44:41
 * @Last Modified by:   zhangjianzhong
 * @Last Modified time: 2020-07-15 10:44:41
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: {},
	},
	getters: {
		user({ user, }){
			return user;
		},
	},
	mutations: {
		updateUser(state, user){
			state.user = user;
		},
	},
});