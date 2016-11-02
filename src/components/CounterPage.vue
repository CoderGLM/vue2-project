<template>
  <div id="wrapper">
    <page-header>
      <button class="page-header-btn" onclick="history.go(-1)">&lt;back</button>
      <span class="page-header-title">vuex test</span>
      <button class="page-header-btn"></button>
    </page-header>
    <div>{{ num }}</div>
    <div>{{ isBig }}</div>
    <button @click="addAction">Add</button>
    <button @click="subAction">Sub</button>
    <button @click="resetAction">RESET</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import PageHeader from './shared/PageHeader.vue'

export default {
  components: {
    PageHeader
  },
  computed: {
    ...mapState({
      // Note that: counter in module1
      num: state => state.module1.counter
    }),
    ...mapGetters({
      isBig: 'isBigger'
    })
  },
  methods: {
    ...mapActions([
      'addAction',
      'subAction',
      'resetAction'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/_variables.scss";

#wrapper {
  width: 100%;
}
.page-header-title {
  display: inline-block;
  flex: 1;
}
.page-header-btn {
  width: $height-top-menu;
  color: #fff;
}
</style>
