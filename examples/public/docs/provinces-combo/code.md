```html
<template>
	<ProvincesCombo v-model="cityCode" @change="onChange" />
</template>

<script>
	import ProvincesCombo from 'gaia-lunzi/provinces-combo'

	export default {
		components: {
			ProvincesCombo,
		},
		data(){
			return {
				cityCode: '',
			};
		},
		methods: {
			onChange(value){
				console.log(value);
			},
		},
	}
</script>
```