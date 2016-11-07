<template>
  <div id="wrapper">
    <PageHeader id="header">
      <nav id="top-menu">
        <a v-for="n in 6" class="top-menu-item" :class="{pressed: topMenu.selectedIndex==n-1}" @click="topMenu.selectedIndex=n-1"><div class="top-menu-item-icon"></div></a>
      </nav>
    </PageHeader>
    <div id="content">
      <div class="content-item" role="main">

        <article class="status">
          <header class="status-top">
            <div class="status-portrait"></div>
            <p>
              <span>CoderGLM<span><br/>
              <time>2016年10月27日 11: 04</time>
            </p>
            <a class="status-top-arrow"></a>
          </header>
          <p class="status-content">
            Hi there, how would you pass animated values through redux connected components? I am building a react-native app and I would have liked to animate my navigation bar N depending on an animated value of another component C: I would like to update N's background color depending on C's height which is managed by an animated value which is modified when the user drags it.
          </p>
          <footer class="status-bottom">
            <button>Like</button>|
            <button>Comment</button>|
            <button>Share</button>
          </footer>
        </article>

      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from './shared/PageHeader'

export default {
  name: 'HomePage',
  data () {
    return {
      topMenu: {
        selectedIndex: 0
      }
    }
  },
  components: {
    PageHeader
  },
  created () {
    // fetch data
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      const url = 'http://211.149.193.19:8080/api/customers'
      this.$http.jsonp(url).then((data) => {
        console.log(data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/_variables.scss";
@import "./src/assets/scss/mixins/_flex.scss";

$top-menu-icon-positions: (
  (
    normal: -22px -78px,
    pressed: -63px -78px
  ),
  (
    normal: -123px -124px,
    pressed: -63px -78px
  ),
  (
    normal: -268px -78px,
    pressed: -63px -78px
  ),
  (
    normal: -350px -78px,
    pressed: -82px -124px
  ),
  (
    normal: -186px -78px,
    pressed: -227px -78px
  ),
  (
    normal: -104px -78px,
    pressed: -145px -78px
  )
);

#wrapper {
  background-color: $gray;
}
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
@for $i from 1 through 6 {
  .top-menu-item:nth-of-type(#{$i}) {
    div {
      background-position: map-get(nth($top-menu-icon-positions, $i), normal);
    }
    &.pressed {
      div {
        background-position: map-get(nth($top-menu-icon-positions, $i), pressed);
      }
    }
  }
}
.status {
  padding: 0.5rem;
  background-color: #fff;
}
.status-top {
  @include flex-horizontal-center();

  @at-root .status-portrait {
    width: 44px;
    height: 44px;
    margin: {
      right: .25rem;
      bottom: .25rem;
    }
    background: $gray;
  }
  p {
    flex: 1;
  }
  @at-root .status-top-arrow {
    width: 0.5rem;
    height: 0.5rem;
    border: {
      bottom: 1px solid $gray-light;
      left: 1px solid $gray-light;
    }
    transform: rotateZ(-45deg);
  }
}
.status-content {
  padding: {
    top: .2rem;
    bottom: .2rem;
  }
  font-family: $font-family-serif;
  line-height: $line-height-sm;
  text-align: justify;
  text-justify:distribute;
}
.status-bottom {
  @include flex-center();
  margin: .5rem -.5rem .5rem -.5rem;
  color: #5e5e5e;
  background-color: #d6d8db;
  button {
    flex: 1;
    height: 1.6rem;
    border: 0;
    background-color: transparent;
  }
}

</style>
