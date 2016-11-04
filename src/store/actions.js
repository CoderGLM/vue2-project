import * as types from './types'
import Api from 'src/api'

export const addAction = ({ commit }) => {
  commit(types.ADD, 1)
}

export const subAction = ({ commit }) => {
  commit(types.SUB, 1)
}

export const resetAction = ({ commit }) => {
  commit(types.reset)
}

/*
 *
 *  Users Module
 *
 */
export const getAuthUserInfo = ({ commit }) => {
  Api.users.getAuthUserInfo().then(json => {
    commit(types.GetAuthUserInfo, json)
  })
}

