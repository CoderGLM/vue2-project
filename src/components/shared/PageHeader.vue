<template>
  <header class="nav-bar">
     <a class="nav-bar-left">
       <svg aria-hidden="true" height="24" version="1.1" viewBox="0 0 12 16" width="18">
         <path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path>
       </svg>
     </a>
     <div class="nav-bar-title">
       <slot></slot>
     </div>
     <a class="nav-bar-right vh">
       <svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 14 16" width="17"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
     </a>
   </header>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/style.scss";

header {
  box-sizing: border-box;
  @include flex-horizontal-center();
  height: $height-top-menu;
  background-color: $gray-lightest;
}

</style>
