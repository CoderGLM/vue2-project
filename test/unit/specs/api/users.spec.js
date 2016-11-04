import Api from 'src/api'

describe('Api.users', () => {
  const { users } = Api

  it('will get json data', done => {
    users.getAuthUserInfo('552a0d2a68b89f6e13d0e07d71f831cd1797e7cd89').then(json => {
      done(() => {
        expect(typeof json).toBe('object')
      })
    }).catch(err => {
      throw err
    })
  })
})
