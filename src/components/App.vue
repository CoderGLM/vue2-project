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
</script>

<style lang="scss">
.expand-enter-active, .expand-leave-active {
  transition: transform .5s linear;
}
.expand-enter, .expand-leave-active {
  opacity: 0;
}
</style>
