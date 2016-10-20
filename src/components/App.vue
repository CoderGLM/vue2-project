<template>
  <div id="wrapper">
    <header>CoderGLM</header>
    <div>
      <a href="#/home/123">home</a>
      <a href="#/login/123">login</a>
      <a href="#/about/123">about</a>
    </div>
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
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
</style>
