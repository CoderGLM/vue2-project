import * as types from './types'
import Api from 'src/api'

/*
 *
 *  Users Module
 *
 */
export const getAuthUserInfo = ({ commit }, token) => {
  Api.users.getAuthUserInfo(token).then(json => {
    commit(types.GetAuthUserInfo, json)
  })
}

