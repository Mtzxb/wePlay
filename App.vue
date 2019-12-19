<script>
	import Vue from 'vue'
	
	export default {
		created() {
			
		},
		onLaunch: function() {
			
		},
		onShow: function() {
			console.log('App 开启')
		},
		onHide: function() {
			console.log('App 关闭')
		}
	}
</script>

<style lang="scss">
// todo 字体引用路径问题待解决
@font-face {
  font-family: 'iconfont';
  src: url('./static/fonts/iconfont.ttf');
}
body{
	background: #FFFFFF !important;
}
</style>