const studentsModel = require("../Models/studentsDataAccess")

exports.getAll = (req, res) => {
  studentsModel
    .findAll()
    .then((datas) => res.send(datas))
    .catch((err) => res.status(500).send(err))
}

exports.getOneById = (req, res) => {
  const id = parseInt(req.params.id)

  studentsModel
    .findOneById(id)
    .then((datas) => {
      if (datas.length === 0) {
        res.status(404).send({ error: "Nothing found !" })
      } else {
        res.send(datas)
      }
    })
    .catch((err) => res.status(500).send(err))
}
