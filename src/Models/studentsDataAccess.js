const db = require("./db")

exports.findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM `students`")
    .then((result) => result[0])
}

exports.findOneById = (id) => {
  return db
    .promise()
    .query("SELECT * FROM `students` WHERE id = ?", [id])
    .then((result) => result[0])
}
