<template>
 <div>
   <header id="login-header">
     facebook
   </header>
   <div id="login-tip">
     <i></i>
     <span>Get Facebook for iPhone and browse faster.</span>
   </div>
 </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      desc: 'This is a LoginPage'
    }
  }
}
</script>

<style lang="scss">
#login-header {
  box-sizing: border-box;
  color: #fff;
  font-family: helvetica, arial, sans-serif;
  background-color: #3b5998;
}
#login-tip {
  border: 0.1rem  orange solid;
}
</style>
