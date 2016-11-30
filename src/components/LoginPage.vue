<template>
 <div id="wrapper bgf hc fwb">
  <page-header>
    <svg slot="left" aria-hidden="true" height="24" version="1.1" viewBox="0 0 12 16" width="18">
      <path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path>
    </svg>
    <h1 slot="middle">Github</h1>
    <svg slot="right" aria-hidden="true" height="20" version="1.1" viewBox="0 0 14 16" width="17"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
  </page-header>
  <section class="login-form bubble">
     <h1 class="login-form-title bubble-title">Sign in to Github</h1>
     <div class="px1">
       <label class="db my1">Username or email</label>
       <input class="login-form-account text" type="text" placeholder="呆的邮箱或用户名">
       <label class="db my1">Password&ensp;<a class="link" href="http://gengliming.com">(forgot password)</a></label>
       <input class="login-form-pwd text" type="text" placeholder="呆的密码">
       <a class="btn--submit my1" :href="authUrl">Sign in</a>
     </div>
   </section>
   <page-footer></page-footer>
 </div>
</template>

<script>
import PageHeader from 'components/shared/PageHeader'
import PageFooter from 'components/shared/PageFooter'
import * as Const from '../const'

export default {
  name: 'LoginPage',
  components: {
    PageHeader,
    PageFooter
  },
  data () {
    return {
      authUrl: Const.authorizeUrl
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables';

#wrapper {
  min-height: 567px;
  text-align: center;
  font-weight: bold;
  background-color: $gray-light;
}

.login-form {
  margin: 2rem; 
  text-align: left;
  @at-root .login-form-title {
    color: #fff;
    background-color: #686868;
  }
  @at-root .login-form-account, .login-form-pwd {
    display: block;
    width: 100%;
  }
  .btn--submit {
    width: 100%;
    height: 3rem;
    display: inline-block;
    color: #333;
    font-weight: bold;
    line-height: 3rem;
    border-color: #ddd;
  }
}
</style>
