import Vue from 'vue'
import Router from 'vue-router'
import Pricing from './views/Pricing.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('./views/Features.vue')
    },
    {
      path: '/enterprise',
      name: 'enterprise',
      component: () => import('./views/Enterprise.vue')
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('./views/Support.vue')
    }
  ]
});

  
