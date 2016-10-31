import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import module1 from './modules/module1'
import module2 from './modules/module2'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    module1,
    module2
  },
  strict: debug
})
