/*
 * @Author: zhangjianzhong
 * @Date: 2020-07-14 18:31:08
 * @Last Modified by: zhangjianzhong
 * @Last Modified time: 2020-07-15 11:40:27
 */
<template>
	<component :is="currentComponent" />
</template>

<script>
	import NotFound from '../common/not-found.vue'

	export default {
		name: 'home-content',
		data(){
			return {
				currentComponent: null,
			};
		},
		watch: {
			$route: {
				immediate: true,
				handler({ params: { type, module: moduleName, } }){
					this.currentComponent = ()=>import(`../modules/${ type }/${ moduleName }`).catch(()=>NotFound);
				},
			},
		},
	}
</script>