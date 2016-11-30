<template>
  <div class="wrapper">
    <ul class="repo-list list">
      <li class="repo-list-item list-item" v-for="repo in repos">
        <a class="list-item-title">
          <svg class="octicon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
          <span v-text="repo.full_name"></span>
        </a>
        <p class="fs-sm pt1">personal blog source code.</p>
        <div class="pt1">
          <span class="circle"></span>
          <span v-text="repo.language"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Repositories',
  computed: {
    ...mapGetters({
      repos: 'repos'
    })
  },
  methods: {
    ...mapActions([
      'getRepos'
    ])
  },
  mounted () {
    this.getRepos(Vue.localStorage.getItem('access_token'))
  }
}
</script>

<style lang="scss">
@import '../assets/scss/style.scss';

.repo-list {
  @at-root .repo-list-item {
    a {
      position: relative;
      left: -1.8rem;
      display: inline-block;
      color: $link-color;
    }
    .octicon {
      margin-right: .5rem;
      color: $gray-icon;
    }
    .circle {
      width: 1.2rem;
      height: 1.2rem;
      background-color: #563d7c;
    }
  }
}
</style>
