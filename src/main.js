import Vue from 'vue'
import Vuex from 'vuex' // http://vuex.vuejs.org/en/structure.html
import Router from 'vue-router'
import Resource from 'vue-resource'
import store from './store'
import App from './components/App.vue'
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'
import AboutPage from './components/AboutPage.vue'

Vue.use(Vuex)
Vue.use(Router)
Vue.use(Resource)

// use routes instead of map function
var router = new Router({
  routes: [
    {
      path: '/home',
      component: HomePage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/about/:id',
      component: AboutPage
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

// use codeline as below instead of start function
new Vue(
  Vue.util.extend({router, store}, App)
).$mount('#app')
