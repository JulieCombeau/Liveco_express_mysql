const db = require("./db")

exports.findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM `students`")
    .then((result) => result[0])
}
