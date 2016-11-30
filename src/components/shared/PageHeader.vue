<template>
  <header class="nav-bar">
     <div class="nav-bar-left" @click="showLeftMenu=!showLeftMenu">
       <slot name="left"></slot>
     </div>
     <div class="nav-bar-title">
       <slot name="middle"></slot>
     </div>
     <div class="nav-bar-right vh">
       <slot name="right"></slot>
     </div>
     <nav class="nav-bar-tabs" v-show="showLeftMenu">
        <ul>
          <li><a>Dashboard</a></li>
          <li><a>Explore</a></li>
          <li><a>Profile</a></li>
          <li><a>Sign out</a></li>
        </ul>
      </nav>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  data () {
    return {
      showLeftMenu: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables';
@import '../../assets/scss/mixins/_flex';

header {
  box-sizing: border-box;
  @include flex-horizontal-center();
  height: $height-top-menu;
  background-color: $gray-lightest;
}

</style>
