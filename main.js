import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import validate from '@/common/util/ys-validate.js'
Vue.prototype.$validate = validate

import store from './store'  
Vue.prototype.$store = store  

import axios from 'axios'
Vue.prototype.axios = axios

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
