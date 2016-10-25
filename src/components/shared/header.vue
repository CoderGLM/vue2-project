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
header {
  padding: 0.7rem;
  font-family: helvetica, arial, sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background: #3b5998;
}
</style>
