const studentsModel = require("../Models/studentsDataAccess")

exports.getAll = (req, res) => {
  studentsModel
    .findAll()
    .then((datas) => res.send(datas))
    .catch((err) => res.status(500).send(err))
}
