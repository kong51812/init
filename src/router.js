import Vue from 'vue'
import Router from 'vue-router'
import index from './views/login'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/routerB',
      name: 'routerB',
      component: () => import('./views/routerB.vue')
    }
  ]
})