const express = require("express")

const studentsRoutes = require("./routes/studentsRoutes")

const app = express()

app.use("/students", studentsRoutes)

app.get("/*", (req, res) => {
  res.status(404).send({ error: "Not found !" })
})

module.exports = app
