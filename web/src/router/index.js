import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import League from '@/components/League'
import Privacy from '@/components/Privacy'
import Error from '@/components/Error'
import leagues from '@/leagues.json'

Vue.use(Router)
const router = new Router({
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

router.beforeEach((to, from, next) => {
  if (to.name == 'league') {
    if (leagues.some(league => league.path === to.params.league)) next()
    else router.push('404')
  } else next()
})

export default router
