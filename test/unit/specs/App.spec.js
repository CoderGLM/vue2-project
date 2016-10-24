//import Vue from 'vue'
//import App from 'src/components/App'
//
//describe('App.vue', () => {
//  it('should render correct contents', () => {
//    const vm = new Vue({
//      el: document.createElement('div'),
//      render: (h) => h(App)
//    })
//    expect(vm.$el.querySelector('a').textContent)
//      .to.equal('home')
//  })
//})
import Vue from 'vue'
import App from 'src/components/App'

describe('App.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(App)
    })
    expect(vm.$el.querySelector('a').textContent)
      .toBe('home')
  })
})
