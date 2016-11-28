import * as types from '../types'

const state = {
  repos: []
}

const mutations = {
  [types.GetRepos]: (state, repos) => {
    state.repos = repos
  }
}

export default {
  state,
  mutations
}
