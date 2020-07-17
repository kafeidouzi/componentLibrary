<template>
	<section id="app">
		<router-view v-loading.fullscreen.lock="loading" />
	</section>
</template>

<script>
	const api = {
		// 登录接口
		login: '/login/login_ajax',
	};

	export default {
		name: 'app',
		data() {
			return {
				form: {
					username: 'admin',
					password: 'yiside123',
				},
				loading: false,
			};
		},
		methods: {
			async init(){
				try{
					this.loading = true;

					const user = await $.ajax(api.login, {
						method: 'post',
						data: JSON.stringify(this.form),
						contentType: 'application/json',
						dataType: 'json',
					});
					this.$store.commit('updateUser', user);
				}catch(ex){
					this.$message.error('登录异常');
					console.error('登录失败', ex);
				}finally{
					this.loading = false;
				}
			},
		},
		created() {
			this.init();
		},
	}
</script>

<style lang="scss">
	*{
		margin: 0;
	}

	html,
	body,
	#app{
		height: 100%;

		.el-card~.el-card{
			margin-top: 20px;
		}
		.el-card{
			overflow: unset;
		}

		.pd-0{
			padding-bottom: 0;
		}
	}
</style>