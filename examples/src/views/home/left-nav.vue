/*
 * @Author: zhangjianzhong
 * @Date: 2020-07-13 13:16:44
 * @Last Modified by: zhangjianzhong
 * @Last Modified time: 2020-07-15 11:22:02
 */
<template>
	<el-menu class="home-left-nav-menu" router
			:default-openeds="expandMenuGroup"
			:default-active="activeMenu"
			@open="onGroupOpen" @close="onGroupClose">
		<el-submenu index="components">
			<template slot="title">
				<i class="el-icon-potato-strips"></i>
				<span>功能组件</span>
			</template>

			<el-menu-item v-for="{ id, name, path, } of menus.components" :key="id"
					:index="path">{{name}}</el-menu-item>
		</el-submenu>
		<el-submenu index="widgets">
			<template slot="title">
				<i class="el-icon-ice-drink"></i>
				<span>业务组件</span>
			</template>

			<el-menu-item v-for="{ id, name, path, } of menus.widgets" :key="id"
					:index="path">{{name}}</el-menu-item>
		</el-submenu>
		<el-submenu index="utils">
			<template slot="title">
				<i class="el-icon-ice-cream-round"></i>
				<span>功能函数</span>
			</template>

			<el-menu-item v-for="{ id, name, path, } of menus.utils" :key="id"
					:index="path">{{name}}</el-menu-item>
		</el-submenu>
	</el-menu>
</template>

<script>
	import menus from '../../config/menus.js'

	export default {
		name: 'home-left-nav',
		data(){
			return {
				expandMenuGroup: ['components', 'widgets', 'utils'],
			};
		},
		computed: {
			menus(){
				return menus;
			},
			activeMenu(){
				return this.$route.path;
			},
		},
		methods: {
			onGroupOpen(){},
			onGroupClose(){},
		},
	}
</script>

<style lang="scss">
	.home-left-nav-menu.el-menu{
		border-right: none;

		.el-submenu__title{
			box-sizing: border-box;
			height: 40px;
			line-height: 40px;
			padding-left: 14px;
			padding-right: 34px;
			margin: 4px 0;
		}
		.el-submenu .el-menu-item{
			box-sizing: border-box;
			height: 40px;
			line-height: 40px;
			padding-left: 32px;
			padding-right: 16px;
			margin: 4px 0;
			min-width: auto;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.el-submenu [class^=el-icon-]{
			margin-right: 3px;
			width: auto;
		}
	}
</style>