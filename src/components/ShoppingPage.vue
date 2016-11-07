<template>
  <div id="wrapper">
    <page-header id="header">
      this is Header
    </page-header>
    <div class="main">
      <div class="products">
        <h2 class="category-title">分类一</h2>
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
    </div>
    <footer>
      This is footer
    </footer>
  </div>
</template>

<script>
import PageHeader from './shared/PageHeader'

export default {
  name: 'ShoppingPage',
  components: {
    PageHeader
  }
}
</script>

<style lang="scss">
@import "./src/assets/scss/_variables.scss";
@import "./src/assets/scss/reset.scss";

$color-main: #ff6633;

#header, footer {
  color: #fff;
  background-color: $color-main;
}
footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: $height-top-menu;
}
</style>
