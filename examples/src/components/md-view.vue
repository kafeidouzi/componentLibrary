/*
 * @Author: zhangjianzhong
 * @Date: 2020-07-13 16:42:49
 * @Last Modified by: zhangjianzhong
 * @Last Modified time: 2020-07-14 18:27:59
 */
<template>
	<section class="md-view-wrap" :style="wrapStyle">
		<iframe ref="frame" class="main-frame"
				:style="frameStyle"
				:src="src" @load="init" />

		<div class="btn-strip" v-if="isLongText">
			<el-button type="text" @click="showAll=!showAll">
				<i class="el-icon-arrow-left"></i>/<i class="el-icon-arrow-right"></i>
				<span class="txt">{{viewCodeLabel}}</span>
			</el-button>
		</div>
	</section>
</template>

<script>
	const _allowHeight = 200;

	export default {
		name: 'md-view',
		props: {
			// 文档路径
			path: String,
			doc: String,
			// 默认显示所有
			defaultShowAll: Boolean,
		},
		data(){
			return {
				timer: null,
				frameHeight: 0,
				showAll: false,
			};
		},
		computed: {
			src(){
				return `/md-view.html?path=${ encodeURIComponent(this.path || '') }`;
			},
			frameWin(){
				return this.$refs.frame.contentWindow;
			},
			frameRootEl(){
				return this.frameWin.document.documentElement;
			},
			frameStyle(){
				const height = this.frameHeight + 50;

				return {
					height: height + 'px',
				};
			},
			viewCodeLabel(){
				return this.showAll ? '收起' : '展示全部';
			},
			isLongText(){
				return this.frameHeight > _allowHeight;
			},
			wrapStyle(){
				const defaultHeight = this.isLongText ? _allowHeight : this.frameHeight;

				return {
					height: this.showAll ? 'auto' : defaultHeight + 'px',
				};
			},
		},
		methods: {
			init(){
				this.timer = setInterval(()=>{
					this.frameHeight = this.frameRootEl.offsetHeight;
				}, 300);

				this.renderDoc(this.doc);
			},
			renderDoc(doc){
				if(!this.path && doc){
					this.frameWin.render(doc);
				}/* else{
					const [{ text, }={}] = this.$slots.default;
					this.frameWin.render(text);
				} */
			},
		},
		watch: {
			doc: 'renderDoc',
		},
		created(){
			this.showAll = this.defaultShowAll;
		},
		mounted(){
			const { $options, $el, } = this.$parent;
			if($options.name == 'ElCard'){
				// $el.querySelector('.el-card__body').classList.add('pd-0');
			}
		},
		beforeDestory(){
			clearInterval(this.timer);
		},
	}
</script>

<style lang="scss">
	.md-view-wrap{
		$stripHeight: 50px;

		overflow: hidden;
		position: relative;
		// padding-bottom: $stripHeight;

		.main-frame{
			margin: 0;
			padding: 0;
			border: 0;
			width: 100%;
		}

		.btn-strip{
			display: flex;
			align-items: center;
			justify-content: center;
			bottom: 0;
			width: 100%;
			min-height: $stripHeight;
			position: absolute;
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
			background-color: #fff;
			color: #C0C4CC;

			.el-button--text{
				color: inherit;
			}

			&:hover{
				color: #409EFF;
			}
		}

		.txt{
			display: none;
		}
		&:hover .txt{
			display: inline;
		}
	}
</style>