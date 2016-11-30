<template>
  <div class="bgf">
    <section class="profile-header">
      <a class="profile-header-portrait" :href="profile.avatar_url">
        <img src="https://avatars3.githubusercontent.com/u/13973117?v=3&s=220" width="110">
      </a>
      <div>
        <hgroup>
          <h1 v-html="profile.name">name</h1>
          <h2 v-html="profile.login">login name</h2>
        </hgroup>
        <ul class="details pt1">
          <li class="details-item">
            <svg aria-hidden="true" class="octicon octicon-mail" height="16" version="1.1" viewBox="0 0 14 16" width="14">
              <path d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path>
            </svg>
            <a href="" v-html="profile.email">email</a>
          </li>
          <li class="details-item">
            <svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16">
              <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
            </svg>
            <a :href="profile.blog">{{ profile.blog }}</a>
          </li>
        </ul>
      </div>
    </section>

    <section class="user-bio">
      {{ profile.bio }}
    </section>

    <section class="repolist-wrapper">
      <h1>Popular repositories</h1>
      <div class="repolist bubble list mt1">
        <a class="repolist-item list-item" href="http://gengliming.com">
          <svg class="octicon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
          <div class="repolist-item-title">CoderGLM/ReactNativeLeaning</div>
          <strong>
            <small class="vt">24</small>
            <svg class="octicon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
          </strong>
        </a>
        <a class="repolist-item list-item" href="http://gengliming.com">
          <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
          <div class="repolist-item-title">CoderGLM/ReactNativeLeaning</div>
          <strong>
            <small class="vt">24</small>
            <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
          </strong>
        </a>
       </div>
    </section>

    <section class="timeline-wrapper">
      <div class="timeline-before">
        <h1 class="fs-lg fwb">Contribution activity</h1>
        <button>Jump to</button>
      </div>
      <div class="timeline">
        <h3>November 2016</h3>
        <div class="timeline-list">
          <div class="timeline-item">
            <svg aria-hidden="true" class="octicon octicon-repo-push" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 3H3V2h1v1zM3 5h1V4H3v1zm4 0L4 9h2v7h2V9h2L7 5zm4-5H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9.02L11 10H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"></path></svg>
            <div class="timeline-item-title">Created 37 commits in 2 repository</div>
            <button>
              <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
            </button>
          </div>
          <div class="timeline-item">
            <svg aria-hidden="true" class="octicon octicon-repo-push" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 3H3V2h1v1zM3 5h1V4H3v1zm4 0L4 9h2v7h2V9h2L7 5zm4-5H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9.02L11 10H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"></path></svg>
            <div class="timeline-item-title">Created 37 commits in 2 repository</div>
            <button>
              <svg aria-hidden="true" class="octicon octicon-unfold" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"></path></svg>
            </button>
          </div>
        </div>
        <a class="timeline-show-more">
          Show more activity
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UserPage',
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
@import '../../assets/scss/mixins/_flex';

.profile-header,
.user-bio,
.repolist-wrapper,
.timeline-wrapper {
  padding: 1.2rem;
}
.profile-header {
  display: flex;
  line-height: 1.5;
  h1 {
    color: #333;
    font-size: 1.6rem;
    font-weight: 800;
  }
  div {
    padding-left: 1rem;
  }
}
.details {
  @at-root .details-item {
    svg {
      color: #767676;
      vertical-align: middle;
      fill: currentColor;
    }
    path {
      color: #767676;
    }
  }
}
.user-bio {
  color: #767676 !important;
  line-height: 1.5;
  border-bottom: 1px solid $border-color-ee;
}
.repolist {
  @at-root .repolist-item {
    display: flex;
    align-items: stretch;
    padding-left: 1.5rem;
    @at-root .repolist-item-title {
      flex: 1;
      margin-left: 1rem;
    }
  }
}
.timeline-wrapper {
  border-bottom: 1px solid $border-color-ee;
  @at-root .timeline-before {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1.6rem;
    }
  }

  @at-root .timeline {
    position: relative;
    margin-top: 2rem;
    &::before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 1.1rem;
      width: 2px;
      display: block;
      background-color: #f5f5f5;
      content: "";
      z-index: -1;
    }
    h3 {
      padding: 0;
    }
    @at-root .timeline-item {
      display: flex;
      align-items: center;
      padding: 1.5rem 0;
      @at-root .timeline-item-title {
        flex: 1;
        padding-left: 1rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      >svg,>button {
        min-width: 2rem;
        color: #767676;
      }
    }
    @at-root .timeline-show-more {
      width: 100%;
      display: inline-block;
      padding: 1rem 0;
      font-weight: bold;
      text-align: center;
      text-shadow: 0 1px 0 rgba(255,255,255,0.9);
      border: 1px solid $border-color-ee;
      border-radius: 3px;
      background: linear-gradient(#fafafa, #eaeaea) no-repeat center;
    }
  }
}
</style>
