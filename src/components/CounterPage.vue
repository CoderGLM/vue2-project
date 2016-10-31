<template>
  <div>
    <div>{{ num }}</div>
    <div>{{ isBig }}</div>
    <button @click="addAction">Add</button>
    <button @click="subAction">Sub</button>
    <button @click="resetAction">RESET</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
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
