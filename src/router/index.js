import Vue from 'vue'
// import Vuetify from 'vuetify'
import Router from 'vue-router'
import Home from '@/components/Home.vue'

Vue.use(Router)
// Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    }
  ]
})
