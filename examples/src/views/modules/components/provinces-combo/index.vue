/*省市区联动选择下拉框
 * @Author: zhangjianzhong
 * @Date: 2020-07-06 13:27:08
 * @Last Modified by: zhangjianzhong
 * @Last Modified time: 2020-07-14 17:01:31
 */
<template>
	<section class="provinces-combo-demo-wrap">
		<el-card header="效果演示">
			默认状态
			<ProvincesCombo v-model="province"></ProvincesCombo>

			<br>

			禁用状态
			<ProvincesCombo v-model="province2" disabled></ProvincesCombo>
		</el-card>

		<el-card header="何时使用">
			<md-view path="provinces-combo/use" />
		</el-card>

		<el-card header="代码示例">
			<md-view path="provinces-combo/code" default-show-all></md-view>
		</el-card>

		<el-card header="Attributes">
			<md-view path="provinces-combo/attrs" default-show-all />
		</el-card>

		<el-card header="Events">
			<md-view path="provinces-combo/events" />
		</el-card>
	</section>
</template>

<script>
	import ProvincesCombo from '@components/provinces-combo'

	export default {
		name: 'provinces-combo-demo',
		components: {
			ProvincesCombo,
		},
		data(){
			return {
				province: '',
				province2: '',
			};
		},
	}
</script>