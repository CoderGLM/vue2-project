<template>
  <div id="wrapper">
    <header>CoderGLM</header>
    <div>
      <a href="#/home/123">home</a>
      <a href="#/login/123">login</a>
      <a href="#/about/123">about</a>
    </div>
    <div class=".container">
      <transition name="expand">
        <router-view
          class="view"
          keep-alive>
        </router-view>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
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
.expand-enter {
  transform: translate3d(-100%, 0, 0);
}

.expand-leave-active {
  transform: translate3d(100%, 0, 0);
}

</style>
