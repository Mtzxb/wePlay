<template>
	<view class="my-header">
		<view class="back">
			<navigator :url="_url" hover-class="navigator-hover" :open-type="openType">
				<image src="/static/images/返回.png" mode="aspectFit"></image>
			</navigator>
		</view>
		<view class="title">
			{{title}}
		</view>
		<view class="back"></view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			_url: {
				type: String,
				default: '/'
			},
			openType: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			backto () {
				
			}
		}
	}
</script>

<style lang="scss">
.my-header{
	height: 80upx;background-color: #f8f8f8;line-height: 80upx;display: flex;width: 100%;
	.back{
		flex: 0 0 10%;line-height: 80upx;text-align: center;
		image{
			width: 50upx;height: 50upx;margin-top: 15upx;
		}
	}
	.title{
		flex: 0 0 80%;text-align: center;font-weight: 500;
	}
}
</style>
