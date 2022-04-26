const Joi = require("joi")

const domesticsModel = require("../models/domesticsDataAccess")

exports.getAll = (req, res) => {
  domesticsModel
    .findAll()
    .then((datas) => res.send(datas))
    .catch((err) => res.status(500).send(err))
}

exports.postOne = (req, res) => {
const { species, age, habitat } = req.body

const { error: validationErrors } = Joi.object({
  species: Joi.string().max(255).required(),
  age: Joi.number().min(0).required(),
  habitat: Joi.string().max(255).required(),
}).validate({ species, age, habitat }, { abortEarly: false })

if (validationErrors) {
  res.status(422).json({errors : validationErrors.details})
} else {
  domesticsModel
    .insertOne(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).send(err))
}
}


