import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MdView from './components/md-view.vue'

Vue.component('md-view', MdView);

Vue.use(ElementUI, {
	size: 'small',
	zIndex: 3000,
});

$.ajaxSetup({
	type: 'json',
	beforeSend(xhr, options){
		options.url = '/api' + options.url;
	},
});


Vue.config.productionTip = false

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')