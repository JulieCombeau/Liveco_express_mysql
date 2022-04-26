const db = require("./db")

exports.findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM domestic")
    .then((result) => result[0])
}

exports.insertOne = (animal) => {
  const { species, age, habitat } = animal
    return db
      .promise()
      .query("INSERT INTO domestic (species, age, habitat) VALUES (?, ?, ?)", [species, age, habitat])
      .then(([result]) => {id: result.insertId, species, age, habitat})
  };

