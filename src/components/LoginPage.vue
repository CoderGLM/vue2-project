<template>
 <div id="wrapper">
   <header>
     <a>
       <svg aria-hidden="true" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
     </a>
     <h1>Github</h1>
     <a></a>
   </header>
   <section class="login-form tl">
     <h1>Sign in to Github</h1>
     <div class="pl1 pr1">
       <label class="db">Username or email</label>
       <div>
         <input class="db" type="text" placeholder="呆的邮箱或用户名">
       </div>
       <label class="db">Password<a href="http://gengliming.com">(forgot password)</a></label>
       <div class="mb1">
         <input class="db" type="text" placeholder="呆的密码">
       </div>
       <a class="submit mb1 tc" :href="authUrl">Sign in</a>
     </div>
   </section>
   <footer>
     <a>
       <svg class="bgCur" aria-hidden="true" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
     </a>
     <span></span>
     <a>Desktop version</a>
   </footer>
 </div>
</template>

<script>
import PageHeader from 'components/shared/PageHeader.vue'
import * as Const from '../const'

export default {
  name: 'LoginPage',
  components: {
    PageHeader
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
@import '../assets/scss/_variables.scss';
@import '../assets/scss/mixins/_flex.scss';

$spacer-min: 1rem;
$spacer-mid: 2rem;
$border-radius: 1px;

a {
  text-decoration: none;
}

.db {
  display: block !important;
}
.tl {
  text-align: left;
}
.tc {
  text-align: center;
}
.tr {
  text-align: right;
}
.ml1 {
  margin-left: 1rem;
}
.mr1 {
  margin-right: 1rem;
}
.mb1 {
  margin-bottom: 1rem;
}
.pl1 {
  padding-left: 1rem;
}
.pr1 {
  padding-right: 1rem;
}

#wrapper {
  min-height: 567px;
  font: 1rem/1.42 BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: bold;
  text-align: center;
  background-color: #fff;
}

header,
.header {
  @include flex-horizontal-center();
  height: $height-top-menu;
  display: flex;
  text-align: center;
  border-bottom: 1px solid $gray-lighter;
  background-color: $gray-lightest;
  a {
    @include flex-center();
    padding: 1rem;
  }
  h1 {
    @include flex-center();
    flex: 1;
    font-size: 2rem;
  }
}

.login-form {
  margin: 2rem;
  border: 1px solid $gray-lighter;
  h1 {
    padding: 1rem 1.5rem;
    color: #fff;
    font-size: 1.2rem;
    line-height: 2rem;
    background-color: #586873;
  }
  label {
    padding: 1rem 0 1rem 0.5rem;
  }
  input, .submit {
    display: inline-block;
    width: 100%;
    height: 2.6rem;
    line-height: 2.6rem;
    border: 1px solid #ddd;
    border-radius: $border-radius;
  }
  .submit {
    color: #000;
    box-sizing: content-box;
    background: linear-gradient(#fafafa, #eaeaea) no-repeat;
  }
  input {
    box-sizing: border-box;
    padding: 0.6rem;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  }
}

footer,
.footer {
  @include flex-horizontal-center();
  margin: {
    left: $spacer-mid;
    right: $spacer-mid;
  }
  color: $gray-light;
  a {
    @include flex-center();
  }
  span {
    flex: 1;
  }
  svg {
    fill: currentColor;
  }
}


</style>
