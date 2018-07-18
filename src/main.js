// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store'
import App from './App'
import router from './router'
import './common/rem.js'
import "./assets/iconfont/iconfont.css"

Vue.config.productionTip = false


const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach(function(to, from, next) {
	const toIndex = history.getItem(to.path)
	const fromIndex = history.getItem(from.path)
	if(toIndex) {
		if(!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
			store.commit('UPDATE_DIRECTION', 'forward')
		} else {
			store.commit('UPDATE_DIRECTION', 'reverse')
			history.removeItem(from.path)
		}
	} else {
		++historyCount
		history.setItem('count', historyCount)
		to.path !== '/' && history.setItem(to.path, historyCount)
		store.commit('UPDATE_DIRECTION', 'forward')
	}
	if(/\/http/.test(to.path)) {
		let url = to.path.split('http')[1]
		window.location.href = `http${url}`
	} else {
		next()
	}
})



import myheader from './components/header'
Vue.component('myheader', myheader);

// import Vuex from 'vuex'
// Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
    el: '#app',
	store,
    router,
    components: { App },
    template: '<App/>'
})
