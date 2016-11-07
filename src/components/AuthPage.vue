<template>
  <div id="wrapper">
    <h1 class="tip">{{ content }}<span>.</span><span>.</span><span>.</span></h1>
  </div>
</template>

<script>
// 开发者：https://github.com/settings/applications/431804

import Api from 'src/api'
import Vue from 'vue'

export default {
  name: 'AuthPage',
  data () {
    return {
      content: '正在授权，请稍后'
    }
  },
  created () {
    const rcode = /code=([a-zA-Z0-9]+)/
    const code = window.location.href.match(rcode)[1]

    Api.misc.getToken(code).then(json => {
      const accessToken = json.access_token
      console.log(accessToken)
      if (!accessToken) {
        this.content = '授权失败'
      }
      Vue.localStorage.setItem('access_token', accessToken)
      this.$router.push({ path: '/user' })
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss">
@keyframes dot2 {
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
}
@keyframes dot3 {
  25% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.tip {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 3rem;
  transform: translate(-50%,-50%);
  -webkit-box-reflect: below 0 linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2) 90%);

  span {
    &:nth-of-type(2) {
      animation-name: dot2;
    }
    &:nth-of-type(3) {
      animation-name: dot3;
    }
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
}

</style>
