<template>
  <div>
    <h1>{{ content }}</h1>
  </div>
</template>

<script>
// 开发者：https://github.com/settings/applications/431804

import Api from 'src/api'

export default {
  name: 'AuthPage',
  data () {
    return {
      content: '授权页面'
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
      window.localStorage.setItem('access_token', accessToken)
      this.$router.push({ path: '/user' })
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>
