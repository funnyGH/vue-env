import Vue from 'vue'
import Router from 'vue-router'

import onePage from '../pages/onePage'

import twoPage from '../pages/twoPage'
import threePage from '../pages/threePage'


Vue.use(Router)

export default new Router({
routes: [
	{
		path: '/',
		title: 'onePage',
		component: onePage
	},
	{
		path: '/twoPage',
		title: 'twoPage',
		component: twoPage
	},
	{
		path: '/threePage',
		title: 'threePage',
		component: threePage
	}
]
})
