<template>
  <div id="wrapper">
    <div id="header">
      <h1>Header</h1>
    </div>
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

