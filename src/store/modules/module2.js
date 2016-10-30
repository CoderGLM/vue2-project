import * as types from '../types'

const mutations = {
  [types.SUB] (state, { delta }) {
    state.counter -= delta
  }
}

export default {
  mutations
}
