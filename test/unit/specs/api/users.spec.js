import Api from 'src/api'

describe('Api.users', () => {
  const { users } = Api

  beforeEach(() => {
    // window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000
  })

  it('will get json data', done => {
    users.getAuthUserInfo('552a0d2a68b89f6e13d0e07d71f831cd1797e7cd89').then(json => {
      expect(typeof json).toBe('object')
      done()
    })
  })
})
