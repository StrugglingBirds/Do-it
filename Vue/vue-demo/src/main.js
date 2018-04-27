import './assets/js/rem'
import Vue from 'vue'
import Router from 'vue-router'
import routes from './route.config.js'
import App from './App.vue'
import './assets/css/common.css'

const router = new Router({
  routes
})
Vue.use(Router)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
