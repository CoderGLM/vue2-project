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

<!--*******************************************************************-->
<!--如果这里不使用scoped，那么其他页面就不用import下面的scss和css文件了-->
<!--*******************************************************************-->
<style lang="scss">
@import '../assets/scss/style';
@import '../assets/scss/glm.lib.css';

.expand-enter-active, .expand-leave-active {
  position: absolute;
  transition: all .25s linear;
}
.expand-enter, .expand-leave-active {
  left: vm;
}
</style>
