import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import usersMod from './modules/usersMod'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    usersMod
  },
  strict: debug
})
