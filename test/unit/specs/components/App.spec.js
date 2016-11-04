/*
 *
 *  The unit test uses `jasmine` framework, if you're very new to `jasmine`, you'd better take a look at the link below:
 *
 *  http://jasmine.github.io/2.0/introduction.html
 *
 *  Vue unit test: https://vuejs.org/guide/unit-testing.html
 *
 *  每个单元测试必须回答的 5 个问题《奇舞周刊》：http://www.75team.com/post/5-questions-every-unit-test-must-answer.html
 *
 */
import App from 'components/App'

describe('App.vue', () => {
  it('should export the correct `name`', () => {
    expect(App.name).toMatch(/^App$/)
  })

  it('has a created hook', () => {
    expect(typeof App.created).toBe('function')
  })
})
