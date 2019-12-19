<template>
	<view class="add-account">
		<m-my-header title='添加账号' _url="/pages/account/index" openType="switchTab" />
		<view class="form">
			<form>
				<view class="uni-form-item uni-column" v-for="(item,index) in accountFormArr" :key="index">
					<view class="title">{{ item[1] }}</view>
					<input class="uni-input" :name="item[0]" :placeholder="item[1]" v-model="accountForm[item[0]]" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">是否在线</view>
					<view>
						<switch name="isOnline" :checked="accountForm.isOnline == 1" @change="changeOnlie" />
					</view>
				</view>
				<view class="uni-btn-v">
					<button size="mini" form-type="submit" @click="formSubmit">新增账号</button>
					<button size="mini" @click="backList">取消</button>
				</view>
			</form>
		</view>
	</view>
</template>
<script>
	import mMyHeader from '@/components/my-header'
	export default {
		components: {
			mMyHeader
		},
		data() {
			return {
				accountForm: {
					username: '',
					account: '',
					password: '',
					theserver: '',
					owner: '',
					remark: '',
					isOnline: 0
				},
				accountFormArr:[
					['username', '游戏昵称'],
					['account', '账号'],
					['password', '密码'],
					['theserver', '服务器'],
					['owner', '号主'],
					['remark', '备注']
				]
			}
		},
		methods: {
			formSubmit () {
				var data = this.accountForm
				let loginRules = [
				  {name: 'account',type: 'required', errmsg: '账号为必填项'},
				  {name: 'password', type: 'required', errmsg: '密码为必填项'},
				]
				let valLoginRes = this.$validate.validate(data, loginRules)
				if (!valLoginRes.isOk) {
				  uni.showToast({
				    icon: 'none',
				    title: valLoginRes.errmsg
				  })
				  return false
				}
				uni.request({
				    url: '/v1/addAccount',
				    data: data,
					method: 'POST',
				    success: (res) => {
				        if(res.data == "添加成功"){
				        	uni.showToast({
				        	  icon: 'none',
				        	  title: res.data
				        	})
				        	setTimeout(() => {
				        		uni.switchTab({
				        		    url: '/pages/account/index'
				        		})
				        	},1000)
				        }
				    }
				})
			},
			backList () {
				uni.navigateBack({
				    delta: 1
				});
			},
			changeOnlie (e) {
				if (this.accountForm.isOnline==0){
					this.accountForm.isOnline = 1
				}else{
					this.accountForm.isOnline = 0
				}
			}
		}
	}
</script>

<style lang="scss">
	uni-page-body{height: 100%;}
	.add-account{
		box-sizing: border-box;
		height: 100%;overflow: auto;
		.form{
			padding-top: 30upx;padding-bottom: 140upx;
			.uni-form-item{
				height: 120upx;border-bottom:1px solid #eee;padding: 0 48upx;margin-top: 20upx;
				.title{
					height: 50upx;line-height: 50upx;font-weight: 500;font-size: 32upx;
				}
				.uni-input{
					height: 70upx;line-height: 70upx;font-size: 26upx;
				}
			}
			.uni-btn-v{
				position: absolute;bottom: 10upx;width: 100%;
				button{
					margin-top: 10upx;width: 100%;
				}
			}
		}
	}
</style>
