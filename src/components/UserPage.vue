<template>
  <div id="wrapper">
    <header class="nav-bar">
      <button>
        <svg class="octicon octicon-three-bars" aria-hidden="true" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
      </button>
      <div class="nav-bar-title">
        <a>
          <svg aria-hidden="true" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
      </div>
      <button>
        <svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 14 16" width="17"><path d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
      </button>
    </header>

    <div class="reponav-wrapper">
      <nav class="reponav">
        <a class="reponav-item selected">Overview</a>
        <a class="reponav-item">Repositories <span v-html="profile.public_repos"></span></a>
        <a class="reponav-item">Stars <span v-html="profile.public_repos">0</span></a>
        <a class="reponav-item" :href="profile.followers_url">Followers <span v-html="profile.followers">0</span></a>
        <a class="reponav-item" :href="profile.following_url">Following <span v-html="profile.following">0</span></a>
      </nav>
    </div>

    <div class="profile-header">
      <a class="profile-header-portrait" :href="profile.avatar_url">
        <img src="https://avatars3.githubusercontent.com/u/13973117?v=3&s=220" width="110">
      </a>
      <div>
        <h1 v-html="profile.name">name</h1>
        <h2 v-html="profile.login">login name</h2>
        <ul class="details">
          <li class="details-item">
            <svg aria-hidden="true" class="octicon octicon-mail" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></svg>
            <a href="" v-html="profile.email">email</a>
          </li>
          <li class="details-item">
            <svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>  
            <a :href="profile.blog">{{ profile.blog }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="user-bio">
      {{ profile.bio }}
    </div>

    <div class="repolist-wrapper">
      <h2>Popular repositories</h2>
      <div class="repolist">
        <a class="repolist-item" href="http://gengliming.com">
          <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
          <div class="repolist-item-title">CoderGLM/ReactNativeLeaning</div>
          <strong>
            24
            <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
          </strong>
         </a>
         <a class="repolist-item" href="http://gengliming.com">
          <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
          <div class="repolist-item-title">CoderGLM/ReactNativeLeaning</div>
          <strong>
            24
            <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
          </strong>
         </a>
         <a class="repolist-item" href="http://gengliming.com">
          <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
          <div class="repolist-item-title">CoderGLM/ReactNativeLeaning</div>
          <strong>
            24
            <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
          </strong>
         </a>
      </div>
    </div>

    <div class="timeline-wrapper">
      <div class="timeline-before">
        <h2>Contribution activity</h2>
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
    </div>

    <footer class="profile-footer">
      <svg aria-hidden="true" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
      <button>
        Desktop version
      </button>
    </footer>
  </div>
</template>

<script>
import PageHeader from './shared/PageHeader'
import * as Const from 'src/const'

/*
  avatar_url : "https://avatars.githubusercontent.com/u/13973117?v=3"
  bio : "Step outside of your comfort zone and you may just find something even better than before.  ↵"
  blog : "http://gengliming.com"
  company : null
  created_at : "2015-08-26T01:30:56Z"
  email : "779793115@qq.com"
  events_url : "https://api.github.com/users/CoderGLM/events{/privacy}"
  followers : 11
  followers_url : "https://api.github.com/users/CoderGLM/followers"
  following : 6
  following_url : "https://api.github.com/users/CoderGLM/following{/other_user}"
  gists_url : "https://api.github.com/users/CoderGLM/gists{/gist_id}"
  gravatar_id : ""
  hireable : true
  html_url : "https://github.com/CoderGLM"
  id : 13973117
  location : null
  login : "CoderGLM"
  name : "glm"
  organizations_url : "https://api.github.com/users/CoderGLM/orgs"
  public_gists : 0
  public_repos : 38
  received_events_url : "https://api.github.com/users/CoderGLM/received_events"
  repos_url : "https://api.github.com/users/CoderGLM/repos"
  site_admin : false
  starred_url : "https://api.github.com/users/CoderGLM/starred{/owner}{/repo}"
  subscriptions_url : "https://api.github.com/users/CoderGLM/subscriptions"
  type : "User"
  updated_at : "2016-11-01T08:30:25Z"
  url : "https://api.github.com/users/CoderGLM"
*/

export default {
  name: 'UserPage',
  components: {
    PageHeader
  },
  data () {
    return {
      profile: {}
    }
  },
  mounted () {
    const code = window.localStorage.getItem('access_token')
    this.$http.get(Const.getUserInfo + code)
              .then(response => response.json())
              .then(json => {
                // console.log(json)
                this.profile = json
              })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables';
@import '../assets/scss/mixins/_flex';

$gray-lightest: #f5f5f5;
$color-border: #d5d5d5;
$color-link: #4078c0;
$padding-container: 1.2rem;

/* 最外层容器 */
%container {
  padding: $padding-container;
}

a {
  text-decoration: none;
}
svg {
  fill: currentColor;
}

.nav-bar,
.profile-header,
.user-bio,
.repolist-wrapper,
.timeline-wrapper,
.profile-footer {
  @extend %container;
}

#wrapper {
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
.nav-bar {
  @include flex-center();
  height: $height-top-menu;
  background: $gray-lightest;

  button {
    padding: 0;
  }

  @at-root .nav-bar-title {
    flex: 1;
    text-align: center;
  }
}
.reponav-wrapper {
  height: 2.8rem;
  border-bottom: 1px solid $color-border;
  background-color: $gray-lightest;
  overflow-y: hidden;

  @at-root .reponav {
    height: 4rem;
    padding-top: 0.5rem;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    @at-root .reponav-item {
      padding: 1rem #{$padding-container};
      font-size: 1.4rem;
      font-weight: 600;
      white-space: prev;
      text-decoration: none;

      &.selected {
        color: #c9510c;
      }
      span {
        font-size: 1.2rem;
        background-color: #eee;
      }
    }
  }
}
.profile-header {
  display: flex;
  line-height: 1.5;

  h1 {
    font-family: -webkit-pictograph, sans-serif;
    color: #333;
    font-size: 1.6rem;
    font-weight: 800;
  }
  div {
    padding-left: 1rem;
  }
}
.details {
  padding-top: 1rem;

  @at-root .details-item {
    a {
      color: $color-link;
      text-decoration: none;
    }
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
  border-bottom: 1px solid $color-border;
}
.repolist-wrapper {
}
.repolist {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  border: 1px solid $color-border;
  border-radius: 3px;

  @at-root .repolist-item {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1.2rem 0;
    @at-root .repolist-item-title {
      flex: 1;
      color: $color-link;
      word-wrap: break-word;
      word-break: break-all;
    }
    >strong,>svg {
      min-width: 3rem;
      color: #767676;
    }
    #{&}+.repolist-item {
      border-top: 1px solid $color-border;
    }
  }
}
.timeline-wrapper {
  border-bottom: 1px solid $color-border;
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
      border: 1px solid $color-border;
      border-radius: 3px;
      background: linear-gradient(#fafafa, #eaeaea) no-repeat center;
    }
  }
}
.profile-footer {
  display: flex;
  justify-content: space-between;
  color: #aaa;

  button {
    color: inherit;
  }
}

</style>
