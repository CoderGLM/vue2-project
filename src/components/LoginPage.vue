<template>
 <div id="wrapper">
   <page-header>CoderGLM</page-header>
   <div id="content">
     <div id="login-tip">
        <i></i>
        <span>Get Facebook for iPhone and browse faster.</span>
     </div>
     <form class="login-form">
       <div>
         <input class="login-form-text" type="email" placeholder="Email or Phone"  autocapitalize="off">
         <input class="login-form-text" type="text" placeholder="Password">
       </div>
       <router-link to="/home/2"><button class="login-form-btn">Log in</button></router-link>
     </form>
     <div class="account">
       <a class="account-create-btn">Create New Account</a>
       <div class="account-link">
         <a>Forget Password?</a><span> - </span><a>HelpCenter</a>
       </div>
     </div>
   </div>
   <footer class="login-footer">
     <table>
       <tr>
         <td>English(US)</td>
         <td>中文(简体)</td>
       </tr>
       <tr>
         <td>日本语</td>
         <td>Español</td>
       </tr>
       <tr>
         <td>Português (Brasil)</td>
         <td>中文(简体)</td>
       </tr>
       <tr>
         <td>Français (France)</td>
         <td>+</td>
       </tr>
     </table>
     <address>mailto: 779793115@qq.com</address>
   </footer>
 </div>
</template>

<script>
import PageHeader from 'components/shared/PageHeader.vue'

export default {
  name: 'LoginPage',
  components: {
    PageHeader
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';
@import '../assets/scss/_variables.scss';

#wrapper {
  min-height: 567px;
  background-color: #fff;
}
#content {
  max-width: 41.6rem;
  padding: 0.8rem;
  padding-bottom: 3rem;
  background-color: #eceff5;
}
#login-tip {
  display: flex;
  align-items: center;
  padding: 0.4rem;
  font-size: 1rem;
  line-height: 1.6rem;
  color: #3b5998;
  border: 1px solid #e2c822;
  border-radius: $border-radius;
  background-color: $yellow-lighter;
  -webkit-tap-highlight-color: rgba(255,255,255,0);

  i {
    flex-shrink: 0;
    height: 2rem;
    width: 1.2rem;
    display: inline-block;
    margin-left: 0.7rem;
    margin-right: 1rem;
    background: url(../assets/images/mobile_icon.png) no-repeat $yellow-lighter;
    background-position: -19px -22px;
    background-size: 104px 55px;
  }
}
.login-form {
  padding-top: $spacer;

  > div {
    border-radius: $border-radius/2;
    overflow: hidden;
  }
  .login-form-text {
    width: 100%;
    padding: 1rem;
    border: 1px solid #e5e5e5;

    &:first-child {
      border-bottom-width: 0px;
    }
  }
  @at-root .login-form-btn {
    @extend .btn--lightpurple;
    width: 100%;
    margin-top: $spacer-sm;
    font-weight: bold;
  }
}
.account {
  text-align: center;
  padding-top: 2rem;
  color: #fff;

  .account-create-btn {
    @extend .btn--green;
    height: 3.6rem;
    padding: 0.6rem 1.6rem;
    text-shadow: 0 -1px 0 rgba(0,0,0,.35);
    box-shadow: inset 0 0 1px rgba(0,0,0,.7), inset 0 1px 0 rgba(255,255,255,.3), 0 1px 2px -1px rgba(0,0,0,.7);
  }
  .account-link {
    margin-top: 1.5rem;
    font-size: 0.6rem;
    color: #7596c8;
  }
}
.login-footer {
  padding: 1rem;
  width: 100%;
  font-size: 0.6rem;
  color: #576b95;
  background-color: #fff;

  %tmp {
    width: 100%;
    color: #90949c;
    text-align: center;
  }
  table {
    @extend %tmp;
    td {
      padding: 0.2rem;
    }
  }
  address {
    @extend %tmp;
    margin-top: 1rem;
    text-align: center;
  }
}
</style>
