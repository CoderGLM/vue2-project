//  Users Api
//
//  https://developer.github.com/v3/users/#get-the-authenticated-user
//

import * as Const from 'src/const'
import Vue from 'vue'

/*
 *
 *   Get user info authorized by access_token
 *
 *   If access_token not found in localStorage, then reject.
 *
 *   data:
 *   {
 *      avatar_url : "https://avatars.githubusercontent.com/u/13973117?v=3"
 *      bio : "Step outside of your comfort zone and you may just find something even better than before.  ↵"
 *      blog : "http://gengliming.com"
 *      company : null
 *      created_at : "2015-08-26T01:30:56Z"
 *      email : "779793115@qq.com"
 *      events_url : "https://api.github.com/users/CoderGLM/events{/privacy}"
 *      followers : 11
 *      followers_url : "https://api.github.com/users/CoderGLM/followers"
 *      following : 6
 *      following_url : "https://api.github.com/users/CoderGLM/following{/other_user}"
 *      gists_url : "https://api.github.com/users/CoderGLM/gists{/gist_id}"
 *      gravatar_id : ""
 *      hireable : true
 *      html_url : "https://github.com/CoderGLM"
 *      id : 13973117
 *      location : null
 *      login : "CoderGLM"
 *      name : "glm"
 *      organizations_url : "https://api.github.com/users/CoderGLM/orgs"
 *      public_gists : 0
 *      public_repos : 38
 *      received_events_url : "https://api.github.com/users/CoderGLM/received_events"
 *      repos_url : "https://api.github.com/users/CoderGLM/repos"
 *      site_admin : false
 *      starred_url : "https://api.github.com/users/CoderGLM/starred{/owner}{/repo}"
 *      subscriptions_url : "https://api.github.com/users/CoderGLM/subscriptions"
 *      type : "User"
 *      updated_at : "2016-11-01T08:30:25Z"
 *      url : "https://api.github.com/users/CoderGLM"
 *  }
 */

function getAuthUserInfo (token) {
  if (!token) {
    throw new TypeError('access_token not found')
  }

  console.log(token)

  return new Promise((resolve, reject) => {
    console.log(Vue.http.get)
    Vue.http.get(`${Const.getUserInfo}?access_token=${token}`).then(response => response.json()).then(json => {
      resolve(json)
    }).catch(error => {
      reject(error)
    })
  })
}

export default {
  getAuthUserInfo
}
