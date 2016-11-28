import Vue from 'vue'
// http://vuex.vuejs.org/en/structure.html
import Router from 'vue-router'
import Resource from 'vue-resource'
import store from './store'
import App from './components/App'
import AuthPage from './components/AuthPage'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import AboutPage from './components/AboutPage'
import UserPage from './components/UserPage'
import Repos from './components/Repos'

import WedgetsPage from './components/wedgets/WedgetsPage'
import ShoppingPage from './components/wedgets/ShoppingPage'

import LocalStorage from './plugins/LocalStorage'

Vue.use(Router)
Vue.use(Resource)
Vue.use(LocalStorage)

//  router2.x文档：http://router.vuejs.org/en/index.html
//
// use routes instead of map function
var router = new Router({
  routes: [
    {
      path: '/auth',
      component: AuthPage
    },
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
      path: '/user',
      component: UserPage
    },
    {
      path: '/repos',
      component: Repos
    },
    {
      path: '/wedgets',
      component: WedgetsPage,
      // Nested routes: https://router.vuejs.org/en/essentials/nested-routes.html
      children: [
        {
          path: 'shopping',
          component: ShoppingPage
        }
      ]
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
