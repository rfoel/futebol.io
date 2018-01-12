import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import League from '@/components/League'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/league',
      name: 'league',
      component: League
    }
  ]
})
