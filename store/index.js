import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({  
    state: {  
        login: uni.getStorageSync('user')? true:false,  
        user: JSON.parse(localStorage.getItem('user')) || '' 
    },
	mutations: {
		Login (state, provider){
			state.login = true;
			state.user  = provider
			uni.setStorage({
				key: 'user',
				data: provider
			})
		},
		loginOut (state, provider){
			state.login = false;
			state.user  = ' ';
			uni.removeStorage({
				key: 'user'
			})
		}
	}
})
  
export default store