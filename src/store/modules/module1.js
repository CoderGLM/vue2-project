import * as types from '../types'

const state = {
  counter: 100
}

const mutations = {
  [types.ADD] (state, delta) {
    state.counter += delta
  },
  [types.SUB] (state, delta) {
    state.counter -= delta
  }
}

export default {
  state,
  mutations
}
