<template>
<div>{{ desc }}</div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      desc: 'This is a HomePage'
    }
  },
  route: {
    data ({ to }) {
      document.title = to.params.id
      return {
        desc: 'Enter HomePage'
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
