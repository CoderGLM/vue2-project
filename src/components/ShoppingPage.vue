<template>
  <div id="wrapper">
    <header class="header">
      this is Header
    </header>
    <div class="main">
      <div class="category-list">
        <article class="category">
          <h2 class="category-title" ref="tag0">分类一</h2>
          <ul class="category-content">
            <li class="category-content-item" v-for="n in 15">{{ n }}</li>
          </ul>
        </article>
        <article class="category">
          <h2 class="category-title" ref="tag1">分类二</h2>
          <ul class="category-content">
            <li class="category-content-item" v-for="n in 20">{{ n*n }}</li>
          </ul>
        </article>
         <article class="category">
          <h2 class="category-title" ref="tag2">分类三</h2>
          <ul class="category-content">
            <li class="category-content-item" v-for="n in 20">{{ n*2 }}</li>
          </ul>
        </article>

      </div>
    </div>
    <aside class="side-bar">
      <ul>
        <li class="side-bar-item" :class="{ active: curMenu === 0 }">分类一</li>
        <li class="side-bar-item" :class="{ active: curMenu === 1 }">分类二</li>
        <li class="side-bar-item" :class="{ active: curMenu === 2 }">分类三</li>
      </ul>
    </aside>
    <footer class="footer">
      This is footer
    </footer>
  </div>
</template>

<script>
import PageHeader from './shared/PageHeader'

export default {
  name: 'ShoppingPage',
  data () {
    return {
      curMenu: 0
    }
  },
  components: {
    PageHeader
  },
  mounted () {
    let headerHeight = 44
    window.addEventListener('scroll', (e) => {
      for (let i = 2; i >= 0; i--) {
        //
        // top is relative to viewport.
        //
        // reference: https://developer.mozilla.org/en/docs/Web/API/Element/getBoundingClientRect
        //
        let top = this.$refs[`tag${i}`].getBoundingClientRect().top
        if (top <= headerHeight) {
          this.curMenu = i
          break
        }
      }
    }, false)
    //
    //  BTW, Maybe it's not relevant to my code above, but it's valuable. Take a look at :
    //
    //
    //  What's the different between scrollY/scrollX and pageYOffset/pageXOffset?
    //
    //
    //  Scripts requiring high cross-browser compatibility can use `window.pageXOffset` and `window.pageYOffset`
    //
    //  instead of `window.scrollX` and `window.scrollY`
    //
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/_variables.scss";
@import "./src/assets/scss/reset.scss";
@import "./src/assets/scss/style.scss";

$color-main: #ff6633;
$width-side-bar: 4rem;

.header, .footer, .side-bar {
  position: fixed;
  left: 0;
}
.header, .footer {
  right: 0;
  height: $height-top-menu;
  color: #fff;
  background-color: $color-main;
}
.main {
  padding: $height-top-menu 0 $height-top-menu $width-side-bar;
  -webkit-overflow-scrolling: touch;
}
.category-list {
  @at-root .category {
    text-align: center;
    @at-root .category-title {
    }
    @at-root .category-content {
      @at-root .category-content-item {
        padding: 0.5rem;
      }
    }
  }
}
.side-bar {
  top: $height-top-menu;
  width: $width-side-bar;
  @at-root .side-bar-item {
    padding: 0.5rem;

    &.active {
      background-color: lightgray;
    }
  }
}
.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
