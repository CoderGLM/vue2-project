<template>
  <div>
    <h1>{{ content }}</h1>
  </div>
</template>

<script>
// 开发者：https://github.com/settings/applications/431804

import * as Const from '../const'

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
    window.localStorage.setItem('code', code)

    const url = Const.getAccessToken + code
    this.$http
        .get(url)
        .then(response => {
          return response.json()
        })
        .then(json => {
          const accessToken = json.access_token

          if (!accessToken) {
            this.content = '授权失败'
          }

          window.localStorage.setItem('access_token', accessToken)
          console.log(`access_token = ${accessToken}`)
          this.$http.get(Const.getUserInfo + accessToken).then(response => {
            return response.json()
          }).then(data => {
            this.content = data
          })
          this.$router.push({ path: '/user' })
        }).catch((err) => {
          console.log(err)
        })
  }
}
</script>
