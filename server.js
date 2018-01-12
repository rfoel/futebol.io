const express = require("express")
const history = require("connect-history-api-fallback")
const path = require("path")
const serveStatic = require("serve-static")

const app = express()

app.use(history({ verbose: true }))
app.use(serveStatic(path.join(__dirname, "/dist")))
app.set("port", process.env.PORT || 5000)

app.listen(app.get("port"), () => {
  console.log("Node server is running on port", app.get("port"))
})