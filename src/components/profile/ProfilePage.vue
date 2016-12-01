<template>
  <div id="wrapper">
    <page-header>
      <svg slot="left" class="octicon" aria-hidden="true" height="24" version="1.1" viewBox="0 0 12 16" width="18">
        <path d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path>
      </svg>
      <h1 slot="middle">
        <a>
          <svg aria-hidden="true" height="32" version="1.1" viewBox="0 0 16 16" width="32">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
      </h1>
      <svg slot="right" aria-hidden="true" height="20" version="1.1" viewBox="0 0 14 16" width="17">
        <path d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path>
      </svg>
    </page-header>

    <section class="reponav-wrapper">
      <nav class="reponav slider">
        <router-link to="/profile/user">
          <a class="reponav-item slider-item" :class="{selected: selectedIndex===0}" @click="selectedIndex=0">
            Overview
          </a>
        </router-link>
        <router-link to="/profile/repos">
          <a class="reponav-item slider-item" :class="{selected: selectedIndex===1}" @click="selectedIndex=1">
            Repositories <small v-html="profile.public_repos"></small>
          </a>
        </router-link>
        <a>
          Stars&ensp;<small v-html="profile.public_repos">0</small>
        </a>
        <a class="reponav-item slider-item" :href="profile.followers_url">
          Followers&ensp;<small v-html="profile.followers">0</small>
        </a>
        <a class="reponav-item slider-item" :href="profile.following_url">
          Following&ensp;<small v-html="profile.following">0</small>
        </a>
      </nav>
    </section>

    <transition name="expand">
      <router-view keep-alive>
      </router-view>
    </transition>

    <page-footer></page-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import PageHeader from '../shared/PageHeader'
import PageFooter from '../shared/PageFooter'

export default {
  name: 'ProfilePage',
  data () {
    return {
      selectedIndex: 0
    }
  },
  components: {
    PageHeader,
    PageFooter
  },
  computed: {
    ...mapGetters({
      profile: 'authUserInfo'
    })
  },
  methods: {
    ...mapActions([
      'getAuthUserInfo'
    ])
  },
  mounted () {
    const token = Vue.localStorage.getItem('access_token')
    this.getAuthUserInfo(token)
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables';

.reponav-wrapper {
  height: 4rem;
  background-color: $gray-lightest;
  border-bottom: 1px solid $border-color-ee;
  overflow: hidden;
  @at-root .reponav {
    padding-bottom: 3rem;
    @at-root .reponav-item {
      font-size: 1.4rem;
      font-weight: 600;
      &.selected {
        color: #c9510c;
      }
    }
  }
}
</style>
