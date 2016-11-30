<template>
 <div id="wrapper bgf hc fwb">
  <page-header>
    <h1>Github</h1>
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
@import '../assets/scss/style.scss';
@import '../assets/scss/glm.lib.css';

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
