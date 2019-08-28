import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/daizanwen',
      name: 'daizanwen',
      // route level code-splitting
      // this generates a separate chunk (daizanwen.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "daizanwen" */ './views/daizanwen.vue')
    },
	{
	  path: '/xiexiaoliang',
	  name: 'xiexiaoliang',
	  // route level code-splitting
	  // this generates a separate chunk (xiexiaoliang.[hash].js) for this route
	  // which is lazy-loaded when the route is visited.
	  component: () => import(/* webpackChunkName: "xiexiaoliang" */ './views/xiexiaoliang.vue')
	}
  ]
})
