/*首页
 * @Author: zhangjianzhong
 * @Date: 2020-07-13 10:48:03
 * @Last Modified by: zhangjianzhong
 * @Last Modified time: 2020-07-15 11:09:48
 */
<template>
	<el-container class="home-wrap">
		<el-header class="home-header" height="48px">
			<top-nav />
		</el-header>
		<el-container>
			<el-aside class="home-aside" width="200px">
				<left-nav />
			</el-aside>
			<el-container>
				<el-main class="home-main">
					<el-page-header class="main-page-haeder"
							:content="moduleName" />
					<div class="home-content-wrap">
						<Content />
					</div>
				</el-main>
			</el-container>
		</el-container>
	</el-container>
</template>

<script>
	import TopNav from './top-nav.vue'
	import LeftNav from './left-nav.vue'
	import Content from './content.vue'
	import menus from '../../config/menus.js'

	export default {
		name: 'home',
		components: {
			TopNav,
			LeftNav,
			Content,
		},
		computed: {
			moduleNameMap(){
				const components = menus.components.reduce((map, {path,name})=>({...map,[path]:name}), {});
				const widgets = menus.widgets.reduce((map, {path,name})=>({...map,[path]:name}), {});
				const utils = menus.utils.reduce((map, {path,name})=>({...map,[path]:name}), {});
				return {
					...components,
					...widgets,
					...utils,
				};
			},
			moduleName(){
				return this.moduleNameMap[this.$route.path] || '未知组件';
				// const { type, module: moduleName, } = this.$route.path;
				// const menu = menus[type][moduleName];
				// console.log(menus);
				// debugger
				// return menu ? menu.name : '&nbsp;';
			},
		},
	}
</script>

<style lang="scss">
	.home-wrap{
		height: 100%;
		padding-top: 48px;
		padding-left: 200px;

		.el-main,
		.el-header,
		.el-footer{
			padding: 0;
		}

		.home-header{
			background-color: #001529;
			color: #fff;
			display: flex;
			align-items: center;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 1;
			width: 100%;
		}

		.home-aside{
			background-color: #fff;
			box-shadow: 2px 0 8px 0 rgba(29,35,41,.05);
			position: fixed;
			left: 0;
			top: 48px;
			bottom: 0;
			overflow: auto;
			z-index: 2;
		}

		.home-main{
			display: flex;
			flex-direction: column;
			overflow: unset;
			padding-top: 64px;

			.el-page-header{
				line-height: 40px;
				padding: 12px 24px;
				position: fixed;
				top: 48px;
				left: 200px;
				right: 0;
				z-index: 1;
				box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
				background-color: #fff;
			}
		}
		.home-content-wrap{
			background-color: #f0f2f5;
			padding: 24px;
			flex: 1;
		}

		.main-page-haeder{
			.el-page-header__left{
				display: none;
			}
		}
	}
</style>