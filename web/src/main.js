import Vue from 'vue'
import Buefy from 'buefy'
import App from './App'
import router from './router'
import store from './store'
import './assets/main.scss'

Vue.use(Buefy, {
  defaultIconPack: 'fa'
})


Vue.config.productionTip = process.env.NODE_ENV === 'production'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
