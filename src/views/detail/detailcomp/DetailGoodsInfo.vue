<template>
	<div v-if="Object.keys(detailInfo).length !== 0">
		<div class="info-text-wrap">
			<div class="text-top-style"></div>
			<div class="desc info-text-desc">{{detailInfo.desc}}</div>
			<div class="text-bot-style"></div>
		</div>
		<div class="img-list-wrap" v-for="item in detailInfo.detailImage">
			<div class="desc">{{item.key}}</div>
			<div v-for="(item, index) in item.list" :key="index">
				<img :src="item" alt="" class="img" @load="imgLoad">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailGoodsInfo',
		props: {
			detailInfo: {
				type: Object,
				default() {
					return {
					}
				}
			}
		},
		data() {
			return {
				counter: 0,
				imagesLength: 0
			}
		},
		methods: {
			imgLoad() {
				// if (++this.counter === this.imagesLength - 1) {
				// 	this.$emit('imgLoad')
				// }
				this.$emit('imgLoad')
			}
		},
		watch: {
			detailInfo() {
				this.imagesLength = this.detailInfo.detailImage[0].list.length
				// console.log(this.imagesLength);
			}
		}
	}
</script>

<style scoped>
	.info-text-wrap {
		position: relative;


	}

	.text-bot-style {
		width: 60px;
		height: 1px;
		background-color: #333;
		position: absolute;
		right: 4px;
		bottom: 0;

	}

	.text-bot-style::after {
		position: absolute;
		right: 0;
		top: -2.5px;
		display: block;
		content: '';
		width: 5px;
		height: 5px;
		background-color: #333;
	}

	.info-text-desc {
		padding: 10px 4px;
	}

	.text-top-style {
		width: 60px;
		height: 1px;
		background-color: #333;
		margin-left: 4px;

	}

	.text-top-style::before {
		position: absolute;
		left: 4px;
		top: -2.5px;
		display: block;
		content: '';
		width: 5px;
		height: 5px;
		background-color: #333;
	}

	.desc {
		font-size: 14px;
		padding-bottom: 6px;
		line-height: 20px;
		margin: 4px 0;
		text-indent: 10px;
	}

	.img {
		width: 100%;
	}
</style>