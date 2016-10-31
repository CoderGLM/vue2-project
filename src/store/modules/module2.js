import * as types from '../types'

const mutations = {
  [types.RESET] (state) {
    // module2 can't access counter in module1 actually.
    state.counter = 50
  }
}

export default {
  mutations
}
