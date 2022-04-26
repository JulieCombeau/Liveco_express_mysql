const express = require("express")

require("dotenv").config()

const app = express()

app.use(express.json())

const domesticsRoutes = require("./routes/domesticsRoutes")

app.use("/domestics", domesticsRoutes)

app.get("/", (req, res) => {
  res.send({ succes: "Hello !" })
})

app.get("/*", (req, res) => {
  res.status(404).send({ error: "Not found !" })
})

module.exports = app
