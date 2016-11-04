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
export default {
  name: 'App',
  created () {
  }
}
</script>

<style lang="scss">
@import '../assets/scss/reset.scss';
@import '../assets/scss/style.scss';

.expand-enter-active, .expand-leave-active {
  position: absolute;
  transition: all .25s linear;
}
.expand-enter, .expand-leave-active {
  opacity: 0;
}
</style>
