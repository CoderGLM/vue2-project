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

export default {
  name: 'App'
}
</script>

<style lang="scss">
.expand-enter-active, .expand-leave-active {
  position: absolute;
  transition: all .25s linear;
}
.expand-enter, .expand-leave-active {
  opacity: 0;
}
</style>
