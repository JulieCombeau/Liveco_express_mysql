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

  exports.replaceOne = (animalId, animal) => {
      return db
        .promise()
        .query("UPDATE domestic SET ? WHERE id = ?", [animal, animalId])
        .then(([result]) => {
          return {id: result.insertId, ...animal }
          })
        };

