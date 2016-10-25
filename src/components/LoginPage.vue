<template>
 <div id="wrapper">
   <page-header>CoderGLM</page-header>
   <div id="content">
     <div class="flex" id="login-tip">
        <i></i>
        <span>Get Facebook for iPhone and browse faster.</span>
     </div>
     <form class="login-form">
       <div>
         <input class="tf" type="text" placeholder="Email or Phone">
         <input class="tf" type="text" placeholder="Password">
       </div>
       <button class="login-btn">Log in</button>
     </form>
     <div class="account">
       <a class="create-btn">Create New Account</a>
       <div class="link">
         <a>Forget Password?</a><span> - </span><a>HelpCenter</a>
       </div>
     </div>
   </div>
   <footer>
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
     <address>Facebook ©2016</address>
   </footer>
 </div>
</template>

<script>
import PageHeader from 'components/shared/header.vue'

export default {
  name: 'LoginPage',
  components: {
    PageHeader
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';

$loginTipBg: #fffbe2;
$paddingTop: 1.2rem;

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
  align-items: center;
  box-sizing: border-box;
  padding: 0.4rem;
  border: 1px solid #e2c822;
  border-radius: $borderRadius;
  font-size: 1rem;
  line-height: 1.6rem;
  color: #3b5998;
  background-color: $loginTipBg;
  -webkit-tap-highlight-color: rgba(255,255,255,0);
}
#login-tip i {
  height: 2rem;
  width: 1.8rem;
  display: inline-block;
  margin-left: 0.7rem;
  margin-right: 1rem;
  background: url(../assets/images/mobile_icon.png) no-repeat $loginTipBg;
  background-position: -19px -22px;
  background-size: 104px 55px;
}
.login-form {
  padding-top: $paddingTop;
}
.login-form>div {
  border-radius: $borderRadius/2;
  overflow: hidden;
}
.login-form .tf {
  box-sizing: border-box; /*如果不设置此属性，100%的宽度很宽*/
  width: 100%;
  padding: 1rem;
  border: 1px solid #e5e5e5;
}
.login-form .tf:first-child {
  border-bottom-width: 0px;
}
.login-form .login-btn {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem;
  margin-top: $paddingTop/2;
  color: #fff;
  font-size: 1rem;
  text-shadow: 0 -1 rgba(0,0,0,.25);
  border-radius: $borderRadius/2;
  font-weight: bold;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.1)) no-repeat #627aad;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.account {
  text-align: center;
  padding-top: 2rem;
  color: #fff;
}
.account .create-btn {
  height: 3.6rem;
  padding: 0.6rem 1.6rem;
  font-size: 1rem;
  border-radius: $borderRadius/2;
  background: linear-gradient(#75ab4b, #4a8532) no-repeat #fff;
  text-shadow: 0 -1px 0 rgba(0,0,0,.35);
  box-shadow: inset 0 0 1px rgba(0,0,0,.7), inset 0 1px 0 rgba(255,255,255,.3), 0 1px 2px -1px rgba(0,0,0,.7);
}
.account .link {
  margin-top: 1.5rem;
  font-size: 0.6rem;
  color: #7596c8;
}
footer {
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  font-size: 0.6rem;
  color: #576b95;
}
footer table, footer address {
  width: 100%;
  color: #90949c;
}
footer table td {
  padding: 0.2rem;
}
footer address {
  margin-top: 1rem;
  text-align: center;
}
</style>
