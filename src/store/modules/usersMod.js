import * as types from '../types'

const state = {
  profile: {}
}

const mutations = {
  [types.GetAuthUserInfo] (state, profile) {
    state.profile = profile
  }
}

export default {
  state,
  mutations
}
