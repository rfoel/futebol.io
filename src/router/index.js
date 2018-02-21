import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import League from '@/components/League'
import Privacy from '@/components/Privacy'
import Error from '@/components/Error'

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
      path: '/@:league',
      name: 'league',
      component: League
    },
    {
      path: '/politica-de-privacidade',
      name: 'privacy',
      component: Privacy
    },
    {
      path: '*',
      component: Error
    }
  ]
})
