import * as types from '../types'

const state = {
  counter: 0
}

const mutations = {
  [types.ADD] (state, { delta }) {
    state.counter += delta
  }
}

export default {
  state,
  mutations
}
