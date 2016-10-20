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
        keep-alive
        transition="test"
        transition-mode="out-in">
      </router-view>
    </transition>
  </div>
</template>

<style lang="scss">
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
  transition: all .3s ease;
}
.expand-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.expand-enter, .expand-leave-active {
  padding-left: 10px;
  opacity: 0;
}

</style>
