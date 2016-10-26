<template>
  <div>
    <PageHeader id="header">
      <nav id="top-menu">
        <a class="top-menu-item"><div class="top-menu-item-icon"></div></a>
        <a class="top-menu-item"><div class="top-menu-item-icon"></div></a>
        <a class="top-menu-item"><div class="top-menu-item-icon"></div></a>
        <a class="top-menu-item"><div class="top-menu-item-icon"></div></a>
        <a class="top-menu-item"><div class="top-menu-item-icon"></div></a>
        <a class="top-menu-item"><div class="top-menu-item-icon"></div></a>
      </nav>
    </PageHeader>
  </div>
</template>

<script>
import PageHeader from './shared/PageHeader'

export default {
  name: 'HomePage',
  components: {
    PageHeader
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/_variables.scss";
@import "./src/assets/scss/mixins/_flex.scss";

$top-menu-icon-positions: (
  (
    normal: (-22px, -78px),
  ),
  (
    normal: (-123px, -124px),
  ),
  (
    normal: (-123px, -124px),
  )
);

#header {
}
#top-menu {
  display: flex;
  flex: 1;
}
.top-menu-item {
  @include flex-center();
  flex: 1;
}
.top-menu-item-icon {
  width: 44px;
  height: 40px;
  background: url("../assets/images/icons_sprite1.png") no-repeat transparent;
  background-size: 401px 190px;
}
@for $i from 1 through 3 {
  .top-menu-item:nth-of-type(#{$i}) {
    div {
      background-position: map-get(nth($top-menu-icon-positions, $i), normal);
    }
  }
}

</style>
