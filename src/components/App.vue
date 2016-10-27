<template>
  <div id="wrapper">
    <transition name="expand">
        <router-view
          keep-alive>
        </router-view>
    </transition>
  </div>
</template>

<script>
import 'assets/scss/reset.scss'
import 'assets/scss/style.scss'
import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default {
  name: 'App',
  store
}
</script>

<style lang="scss">
.expand-enter-active, .expand-leave-active {
  position: absolute;
  transition: all .5s linear;
}
.expand-enter, .expand-leave-active {
  opacity: 0;
}
</style>
