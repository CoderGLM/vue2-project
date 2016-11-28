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
  }).catch(error => {
    console.log(error)
  })
}

/*
 *
 *  Repositories Module
 *
 */
export const getRepos = ({ commit }, token) => {
  Api.repos.getRepos(token).then(json => {
    commit(types.GetRepos, json)
  }).catch(error => {
    console.log(error)
  })
}
