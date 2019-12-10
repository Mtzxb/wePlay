<template>
	<view class="index" v-bind:style="[{'min-height': secondHeight + 'px' }]">
		<mSearch :mode="2" button="inside" @search="search($event)"></mSearch>
		<!-- 数据列表 -->
		<view class="list-box">
			<view style="margin-top: 90upx;"></view>
			<view class="container_of_slide" v-for="(item,index) in list" :key="index">
				<view class="slide_list" :style="{transform:'translate3d('+item.slide_x+'px, 0, 0)'}">
					<view class="now-message-info" hover-class="uni-list-cell-hover" :style="{width:Screen_width+'px'}" @click="getDetail(item)">
						<view class="icon-circle">{{item.owner}}</view>
						<view class="list-right">
							<view class="list-title">
								{{item.account}}
								<text v-if="item.theserver">({{item.theserver}})</text>
							</view>
							<view class="list-detail">{{item.password}}</view>
						</view>
						<view class="list-right-1">
							{{item.isOnline == '1'? '在线':'离线'}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 浮动添加按钮 -->
		<view class="btn-plusempty" hover-class="bottom-btn-hover" @click="addCustomer">
			<image src="../../static/slide-list/jiahao.png" class="plusempty-img"></image>
		</view>
	</view>
</template>

<script>
	import mSearch from '../../components/m-search/m-search.vue'
	export default {
		components: {
			mSearch
		},
		name: 'slide-list',
		computed: {
			Screen_width() {
				return uni.getSystemInfoSync().windowWidth;
			}
		},
		data() {
			return {
				img: '../../static/slide-list/qr_code.png',
				visible: false,
				start_slide_x: 0,
				btnWidth: 0,
				startX: 0,
				LastX: 0,
				startTime: 0,
				screenName: '',
				list : [
				],
				btuBottom: '0',
				secondHeight: ''
			};
		},
		onShow() {
			const res = uni.getSystemInfoSync();
			this.secondHeight = res.windowHeight;
			this.findAccount ()
		},
		created () {
			this.findAccount()
		},
		methods: {
			//查询所有
			findAccount () {
				uni.request({
				    url: '/v1/findAccount',
				    success: (res) => {
						this.list = res.data
				    }
				})
			},
			cancelEvent(){
				this.visible = false
			},
			search(e, val) {
				this.screenName = e
				console.log('点击搜索')
			},
			addCustomer(){
				uni.navigateTo({
				    url: '/pages/account/addAccount'
				});
			},
			getDetail(item){
				uni.navigateTo({
				    url: `/pages/account/upAccount?id=${item.id}`
				})
			}
		}
	}
</script>

<style scoped>
	.index{
		background: #F8F8F8;
	}
	.list-box{
		padding: 20upx 0;
	}
	.container_of_slide {
		width: 100%;
		overflow: hidden;
	}

	.slide_list {
		transition: all 100ms;
		transition-timing-function: ease-out;
		min-width: 200%;
		height: 160upx;
	}

	.now-message-info {
		box-sizing:border-box;
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
		font-size: 16px;
		clear:both;
		height: 160upx;
		padding: 0 30upx;
		margin-bottom: 20upx;
		background: #FFFFFF;
	}
	.now-message-info,
	.group-btn {
		float: left;
	}

	.group-btn {
		display: flex;
		flex-direction: row;
		height: 160upx;
		min-width: 100upx;
		align-items: center;

	}

	.group-btn .btn-div {
		height: 160upx;
		color: #fff;
		text-align: center;
		padding: 0 50upx;
		font-size: 34upx;
		line-height: 160upx;
	}

	.group-btn .top {
		background-color: #c4c7cd;
	}

	.group-btn .removeM {
		background-color: #ff3b32;
	}
	
	
	.icon-circle{
		background: #3396fb;
		border-radius: 100%;
		width:100upx;
		height: 100upx;
		line-height:100upx;
		text-align:center;
		color: #FFFFFF;
		font-weight: bold;
		font-size: 20px;
		float: left;
	}
	.list-right{
		float: left;
		margin-left: 25upx;
		margin-right: 30upx;
	}
	.list-right-1{
		float: right;
		color: #A9A9A9;
	}
	.list-title{
		width: 350upx;
		line-height:1.5;
		overflow:hidden;
		margin-bottom: 10upx;
		color:#333;
		display:-webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		overflow:hidden;
	}
	.list-detail{
		width: 350upx;
		font-size: 14px;
		color: #a9a9a9;
		display:-webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		overflow:hidden;
	}
	.button-box{
		box-sizing: border-box;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 998;
		background: #F8F8F8;
	}
	.btn-sub{
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		float: left;
		width: 100%;
		height: 100upx;
		background: #F8F8F8;
		color: #7fb2ff;
	}
	.btn-plusempty{
		width: 110upx;
		height: 110upx;
		background: #007bfa;
		position: fixed;
		bottom: 150upx;
		right: 20upx;
		border-radius: 100%;
		overflow: hidden;
		text-align: center;
		line-height: 110upx;
	}
	.empty{
		color: #999999;
	}
	.plusempty-img{
		width: 50upx;
		height: 50upx;
		margin-top: 30upx;
	}
	.scan-box{
		display:block;
		position:fixed;
		top:0;
		bottom:0;
		left:0;
		right:0;
		background-color:rgba(0, 0, 0, 0.3);
		z-index:99999;
	}
	.scan-item{
		display:-webkit-box;
		display:-webkit-flex;
		display:-ms-flexbox;
		display:flex;
		position:relative;
		margin:0 auto;
		width:80%;
		height:100%;
		-webkit-box-pack:center;
		-webkit-justify-content:center;
		-ms-flex-pack:center;
		justify-content:center;
		-webkit-box-align:center;
		-webkit-align-items:center;
		-ms-flex-align:center;
		align-items:center;
		-webkit-box-sizing:border-box;
		box-sizing:border-box;
		opacity:1;

	}
	.scan-content{
		position:relative;
		width: 400upx;
		height: 500upx;
		background: #FFFFFF;
		border-radius: 20upx;
	}
	.scan-icon{
		position: absolute;
		top: -50upx;
		left: 150upx;
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		box-sizing:border-box;
		background: #FFFFFF;
		padding: 20upx;
	}
	.scan-icon-img{
		width: 100%;
		height: 100%;
	}
	.scan-text{
		position: absolute;
		bottom: 40upx;
		left: 0;
		width: 100%;
		text-align: center;
		font-size: 14px;
	}
	.scan-share{
		width: 100%;
		height: 100%;
	}
	.scan-img{
		width: 300upx;
		height: 300upx;
		margin: auto;
		display: block;
		position: absolute;
		top: 80upx;
		left: 50upx;
		z-index: 99;
	}
	.scan-btn{
		top:-30upx;
		left:auto;
		right:-30upx;
		bottom:auto;
		position:absolute;
		width:64upx;
		height:64upx;
		border-radius:50%;
		z-index:99999;
		display: flex;
	}
	.uni-list-cell-hover {
		background-color: #eeeeee;
	}
	.bottom-btn-hover{
		background: #0564c7!important;;
	}
</style>
