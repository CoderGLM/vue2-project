//  Misc Api
//
//  https://developer.github.com/v3/users/#get-the-authenticated-user
//

import * as Const from 'src/const'
import Vue from 'vue'

/*
 *
 *  Get access_token by code
 *
 *  If `code` is invalid, then throw type error.
 *
 *  data {
 *    'access_token': '3jd89fajk32lxadadax...'
 *    ...
 *  }
 *
 */
function getToken (code) {
  if (!code) {
    throw new TypeError('parameter type not valid')
  }
  return new Promise((resolve, reject) => {
    const url = Const.getAccessToken + code
    Vue.http.get(url).then(response => {
      return response.json()
    }).then(json => {
      resolve(json)
    }).catch(error => {
      reject(error)
    })
  })
}

export default {
  getToken
}
