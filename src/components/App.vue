<template>
  <div id="wrapper">
    <transition name="expand">
        <router-view
          class="view"
          keep-alive>
        </router-view>
    </transition>
  </div>
</template>

<script>
import '../assets/scss/style.scss'
</script>

<style lang="scss">
/*@import 'assets/scss/style.scss';
@import 'assets/scss/reset.scss';*/

.container {
  position: relative;
  height: 90rem;
  overflow: hidden;
}
header {
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
    padding: 0.7rem;
    font-family: helvetica, arial, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
    color: #fff;
    background: #3b5998;
}
.view {
  position: absolute;
  top: 10rem;
  left: 0;
  width: 100%;
  height: 100%;
}
.expand-enter-active, .expand-leave-active {
  transition: transform .5s linear;
}
.expand-enter, .expand-leave-active {
  opacity: 0;
}
</style>
