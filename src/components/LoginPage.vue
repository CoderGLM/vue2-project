<template>
<div class="green page">{{ desc }}</div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      desc: 'This is a LoginPage'
    }
  },
  route: {
    data ({ to }) {
      document.title = to.params.id
      return {
        desc: 'Enter LoginPage'
      }
    }
  }
}
</script>

<style lang="scss">
.green {
  background: green;
}
</style>
