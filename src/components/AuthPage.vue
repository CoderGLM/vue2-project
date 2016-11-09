<template>
  <div id="wrapper">
    <h1 class="tip">{{ content }}<span class="dotting"></span></h1>
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
}
/*
 *  参考：http://www.zhangxinxu.com/wordpress/2014/12/css3-animation-dotting-loading/
 */
.dotting {
  display: inline-block;
  width: 10px;
  height: 2px;
  line-height: 2px;
  box-sizing: border-box;
  padding-left: 3px;
  padding-right: 2px;
  border-left: 2px solid currentColor;
  border-right: 2px solid currentColor;
  background-color: currentColor;
  background-clip: content-box;
  animation: dot 4s infinite step-start both;
}

@keyframes dot {
  25% { border-color: transparent; background-color: transparent; } /* 0 */
  50% { border-right-color: transparent; background-color: transparent; } /* 1 */
  75% { border-right-color: transparent; } /* 2 */
}
</style>
