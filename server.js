const express = require('express')
const history = require('connect-history-api-fallback')
const path = require('path')
const request = require('request')
const serveStatic = require('serve-static')

const app = express()

app.use(history({ verbose: true }))
app.use(serveStatic(path.join(__dirname, '/dist')))

app.listen(8080, function() {
  console.log(
    `Vue server listening on port ${this.address().port} in ${
      app.settings.env
    } mode`
  )
})
