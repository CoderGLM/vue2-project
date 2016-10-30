import * as types from './types'

export const addAction = ({ commit }, delta) => {
  commit(types.ADD, delta)
}

export const subAction = ({ commit }, delta) => {
  commit(types.SUB, delta)
}
