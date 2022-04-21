const express = require("express")

const app = express()

app.get("/*", (req, res) => {
  res.status(404).send({ error: "Not found !" })
})

module.exports = app
