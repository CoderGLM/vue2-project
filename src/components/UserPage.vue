<template>
  <div id="wrapper">
    <page-header>This is UserPage</page-header>
  </div>
</template>

<script>
import PageHeader from './shared/PageHeader'

export default {
  name: 'UserPage',
  components: {
    PageHeader
  }
}
</script>

<style lang="scss" scoped>
#wrapper {
  width: 100%
}
</style>
