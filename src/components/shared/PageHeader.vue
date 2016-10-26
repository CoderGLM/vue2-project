<template>
  <header :id="id" :class='cls'>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: ['id', 'cls']
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/_variables.scss";

header {
  display: flex;
  align-items: stretch;
  justify-content: center;
  height: $height-top-menu;
  font-size: $font-size-lg;
  color: #fff;
  font-family: $font-family-sans-serif;
  font-weight: bold;
  text-align: center;
  background: #3b5998;
}
</style>
