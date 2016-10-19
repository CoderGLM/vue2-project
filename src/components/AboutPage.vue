<template>
<div>{{ desc }}</div>
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
$fontSize: 20px;

div {
  font-size: $fontSize
}
</style>
