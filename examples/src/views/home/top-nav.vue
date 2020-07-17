/*
 * @Author: zhangjianzhong
 * @Date: 2020-07-15 10:44:29
 * @Last Modified by:   zhangjianzhong
 * @Last Modified time: 2020-07-15 10:44:29
 */
<template>
	<section class="home-top-nav-wrap">
		<div class="logo">
			<span>一撕得®</span>
			<img src="../../assets/imgs/logo-zipper.png" />
		</div>

		<div>
			<i class="el-icon-user-solid"></i>
			{{realName}}
		</div>
	</section>
</template>

<script>
export default {
	name: 'home-top-nav',
	computed: {
		realName(){
			return this.$store.getters.user.realName;
		},
	},
}
</script>

<style lang="scss">
	.home-top-nav-wrap{
		flex: 1;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-right: 10px;

		.logo{
			$size: 20px;

			padding-left: 5px;
			// width: 200px;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: $size;
			font-weight: bold;
			font-family: 宋体;

			img{
				margin-left: 10px;
				height: $size;
			}
		}
	}
</style>