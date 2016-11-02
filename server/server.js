/*
 *
 *
 *  此文件为中转服务器，因为web的跨域问题，和jsonp的局限性（只能get 和 不能修改请求头的Accept），
 *
 *  所以使用此文件中转接口。
 *
 *  (jsonp的局限性可以参考：http://stackoverflow.com/questions/22619138/add-accept-header-to-jquery-ajax-get-via-jsonp-request)
 *
 *
 *
 *  最初主要是针对接口：/access_token/:code，后续可能还会追加
 *
 *
 */

// http://javascript.ruanyifeng.com/nodejs/express.html

const CLIENT_ID = '8fda6183ba583635f0e5'
const CLIENT_SECRET = '6402f910e027326d07edda48ccb3e2573cb55a77'

var request = require('request')
var express = require('express')
var app = express()

var port = 8888
var router = express.Router()

// 获取access_token
//
// http://stackoverflow.com/questions/298745/how-do-i-send-a-cross-domain-post-request-via-javascript
router.get('/access_token/:code', (req, res) => {
  var { code } = req.params

  var url = `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`
  var options = {
    url: url,
    headers: {
      'Accept': 'application/json',
      'method': 'POST'
    }
  }
  request(options, (err, response, body) => {
    res.setHeader('Content-Type', 'application/json')
    // CORS
    // http://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
    res.setHeader('Access-Control-Max-Age', '1000')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
    res.send(body)
  })
})

app.use(router)
app.listen(port)

console.log('note: server is running')
