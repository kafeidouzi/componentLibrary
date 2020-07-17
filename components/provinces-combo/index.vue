/*省市区组件
 * @Author: zhangjianzhong@yiside.com
 * @Date: 2020-04-03 17:24:45
 * @Last Modified by: zhangjianzhong
 * @Last Modified time: 2020-07-06 14:42:39
 */
<template>
	<section class="ysd-provinces-combo-wrap">
		<!-- 省份 -->
		<el-select v-model="province" @change="provinceChangeHandle" :disabled="disabled">
			<el-option v-for="{ code, name } of provinceList" :key="code"
					:label="name" :value="code"></el-option>
		</el-select>
		<!-- 城市 -->
		<el-select v-model="city" @change="cityChangeHandle" :disabled="disabled">
			<el-option v-for="{ code, name } of cityList" :key="code"
					:label="name" :value="code"></el-option>
		</el-select>
		<!-- 行政区 -->
		<el-select v-model="region" :disabled="disabled">
			<el-option v-for="{ code, name } of regionList" :key="code"
					:label="name" :value="code"></el-option>
		</el-select>
	</section>
</template>

<script>
	const api = {
		province: '/sys/area/getAreaList.action',
		city: '/sys/area/findCodeCity.action',
		region: '/sys/area/findCodeArea.action',
	};

	export default {
		name: 'ysd-provinces-combo',
		model: {
			prop: 'value',
			event: 'change',
		},
		props: {
			value: {
				type: String
			},
			disabled: Boolean,
		},
		data(){
			return {
				province: '',
				city: '',
				region: '',

				provinceList: [],
				cityList: [],
				regionList: [],
			};
		},
		methods: {
			/**获取省份列表 */
			async initProvinceList(){
				const { data, result, } = await $.get(api.province);

				if(result){
					this.provinceList = data;

					// 返回第一条省份的code
					return data[0].code;
				}else{
					this.$notify({
						type: 'error',
						title: '省份列表获取失败',
					});
				}
			},
			/**获取指定城市列表 */
			async getCityList(code){
				const { data, result, } = await $.get(api.city, {
					code,
				});

				if(result){
					this.cityList = data;

					// 返回第一条城市的code
					return data[0].code;
				}else{
					this.$notify({
						type: 'error',
						title: '城市列表获取失败',
					});
				}
			},
			/**获取指定行政区列表 */
			async getRegionList(code, value){
				const { data, result, } = await $.get(api.region, {
					code,
				});

				if(result){
					this.regionList = data;

					// 行政区列表数据变化后，重置选中项
					this.province = this.province || this.provinceList[0].code;
					this.city = this.city || this.cityList[0].code;
					this.region = value || this.regionList[0].code;
				}else{
					this.$notify({
						type: 'error',
						title: '行政区列表获取失败',
					});
				}
			},

			/**省份选项变化时 */
			async provinceChangeHandle(){
				const cityCode = await this.getCityList(this.province);

				// 更新选中第一个城市选项
				this.city = cityCode;

				// 获取第一个城市对应的行政区列表
				this.getRegionList(cityCode);
			},
			/**城市选项变化时 */
			cityChangeHandle(){
				this.getRegionList(this.city);
			},
		},
		watch: {
			/**行政区数据变化时，通知父级修改 */
			region(){
				this.$emit('change', this.region);
			},
			value(val){
				if(val == this.region){
					return;
				}

				// debugger
				// 截取省份code
				this.province = val.substr(0, 2) + '0000';
				// 截取城市code
				this.city = val.substr(0, 4) + '00';
				// 行政区code
				this.region = val;

				this.getCityList(val);
				this.getRegionList(val, val);
			}
		},
		created(){
			this.initProvinceList().then(async provinceCode=>{
				// 没有默认值时，继续获取城市列表和地区列表
				if(!this.value){
					const cityCode = await this.getCityList(provinceCode);
					this.getRegionList(cityCode);
				}
			});
		},
	}
</script>

<style lang="scss">
	.ysd-provinces-combo-wrap{
		.el-select{
			margin-right: 5px;
		}
	}
</style>