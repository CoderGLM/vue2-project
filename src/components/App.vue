<template>
  <div id="wrapper">
    <header>CoderGLM</header>
    <div>
      <a href="#/home/123">home</a>
      <a href="#/login/123">login</a>
      <a href="#/about/123">about</a>
    </div>
    <transition name="expand">
      <router-view
        class="view"
        keep-alive>
      </router-view>
    </transition>
  </div>
</template>

<style lang="scss">
#wrapper {
  position: relative;
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
.expand-enter-active {
  transition: left .25s linear;
  position: absolute;
  left: 0;
}
.expand-leave {
  position: absolute;
  left: 0;
}
.expand-enter {
  position: absolute;
  left: -100%;
}
.expand-leave-active {
  transition: left .25s linear;
  position: absolute;
  left: 100%;
}

</style>
