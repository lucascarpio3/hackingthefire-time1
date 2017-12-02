import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CallController from '@/components/CallController'
import Integration from '@/components/Integration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/call',
      name: 'Call',
      component: CallController
    },
    {
      path: '/integration',
      name: 'Integration',
      component: Integration
    }
  ]
})
