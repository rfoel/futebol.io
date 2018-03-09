const express = require('express')
const history = require('connect-history-api-fallback')
const path = require('path')
const request = require('request')
const serveStatic = require('serve-static')
const compression = require('compression')

const app = express()

app.use(compression())
app.use(history({ verbose: true }))

app.get('/*', function(req, res, next) {
  if (req.url.indexOf('/static/') === 0) {
    res.setHeader('Cache-Control', 'public, max-age=2592000')
    res.setHeader('Expires', new Date(Date.now() + 2592000000).toUTCString())
  }
  next()
})

app.listen(8080, function() {
  console.log(
    `Vue server listening on port ${this.address().port} in ${
      app.settings.env
    } mode`
  )
})
