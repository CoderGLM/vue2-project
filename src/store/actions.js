import * as types from './types'

export const addAction = ({ commit }) => {
  commit(types.ADD, 1)
}

export const subAction = ({ commit }) => {
  commit(types.SUB, 1)
}

export const resetAction = ({ commit }) => {
  commit(types.reset)
}
