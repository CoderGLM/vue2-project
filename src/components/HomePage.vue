<template>
  <div style="position: relative">
    <transition name="expand">
    <!--<div v-show="show" class="tran-item yellow page">{{ desc }}</div>-->
      <component :is="view">
      </component>
    </transition>
    <input style="position:absolute;top:2rem;" type="button" @click="toggle" value="toggle me">
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      view: 'one',
      desc: 'This is a HomePage'
    }
  },
  methods: {
    toggle: function () {
      this.view = this.view === 'one' ? 'two' : 'one'
    }
  },
  components: {
    one: {
      template: '<div class="view yellow"></div>'
    },
    two: {
      template: '<div class="purple view"></div>'
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
  font-size: $fontSize;
}
.tran-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90rem;
}
.view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90rem
}
.yellow {
  background: lightgray;
}
.page {
  height: 10rem;
}
</style>
