/*
 *
 *  The unit test uses `jasmine` framework, if you're very new to `jasmine`, you'd better take a look at the link below:
 *
 *  http://jasmine.github.io/2.0/introduction.html
 *
 *  Vue unit test: https://vuejs.org/guide/unit-testing.html
 *
 */
import App from 'src/components/App'

describe('App.vue', () => {
  it('should export the correct `name`', () => {
    expect(App.name).toMatch(/^App$/)
  })
})
