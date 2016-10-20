<template>
<div class="purple page">{{ desc }}</div>
</template>

<script>
export default {
  name: 'AboutPage',
  data () {
    return {
      desc: 'This is a AboutPage'
    }
  },
  route: {
    data ({ to }) {
      document.title = to.params.id
      return {
        desc: 'Enter AboutPage'
      }
    }
  }
}
</script>

<style lang="scss">
.purple {
  background: purple;
}
</style>
