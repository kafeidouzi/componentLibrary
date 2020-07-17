/*省市区联动选择下拉框
 * @Author: zhangjianzhong
 * @Date: 2020-07-06 13:27:08
 * @Last Modified by: zhangjianzhong
 * @Last Modified time: 2020-07-15 10:38:22
 */
<template>
	<section class="provinces-combo-demo-wrap">
		<el-card header="分页条">
			分页条
		</el-card>

		<el-card>
			<md-view doc="provinces-combo/demo2" default-show-all></md-view>
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
			};
		},
	}
</script>