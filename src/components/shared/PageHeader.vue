<template>
  <header>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/_variables.scss";

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  font-size: $font-size-lg;
  color: #fff;
  font-family: $font-family-sans-serif;
  font-weight: bold;
  text-align: center;
  background: #3b5998;
}
</style>
