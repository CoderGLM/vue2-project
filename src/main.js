import Vue from 'vue'
// http://vuex.vuejs.org/en/structure.html
import Router from 'vue-router'
import Resource from 'vue-resource'
import store from './store'
import App from './components/App.vue'
import AuthPage from './components/AuthPage.vue'
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'
import AboutPage from './components/AboutPage.vue'
import UserPage from './components/UserPage.vue'

Vue.use(Router)
Vue.use(Resource)

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
      path: '*',
      redirect: '/login'
    }
  ]
})

// use codeline as below instead of start function
new Vue(
  Vue.util.extend({router, store}, App)
).$mount('#app')
