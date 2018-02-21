// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import store from "./store"

import Buefy from "buefy"
Vue.use(Buefy, {
  defaultIconPack: "fa"
})

import './assets/main.scss'

Vue.config.productionTip = process.env.NODE_ENV === "production"

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
})
