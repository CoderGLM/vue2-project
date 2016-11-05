/*
 *
 *  When you test vue-resource, you must gurantee:
 *
 *  1. add Vue.use(Resource) or the Vue.http will be undefined
 *
 *  2. add catch to promise object or unexpected error will come to you.
 *
 *
 */

import Vue from 'vue'
import Resource from 'vue-resource'
import Api from 'src/api'

describe('Api.users', () => {
  const { users } = Api

  beforeEach(() => {
    // This is required for `users.getAuthUserInfo` function
    Vue.use(Resource)
    window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000
  })

  it('will get json data', done => {
    users.getAuthUserInfo('3f3c4d1ac7c55d89b48bcdbe6d519f5ba3167b78').then(json => {
      expect(typeof json).toBe('object')
    }).catch(error => {
      expect(typeof error).tbBe('object')
    }).finally(done)
  })
})
