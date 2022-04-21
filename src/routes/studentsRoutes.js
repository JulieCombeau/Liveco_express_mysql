const express = require("express")
const studentsCtrl = require("../controllers/studentsCtrl")

const router = express.Router()

router.get("/", studentsCtrl.getAll)
router.get("/:id", studentsCtrl.getOneById)

module.exports = router
