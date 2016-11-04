import UserPage from 'components/UserPage'

describe('UserPage.vue', () => {
  it('shoule have the correct name : UserPage', () => {
    expect(UserPage.name).toMatch(/^UserPage$/)
  })
})
