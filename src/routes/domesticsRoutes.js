const express = require("express")

const domesticsCtrl = require("../controllers/domesticsCtrl")

const router = express.Router()

router.get("/", domesticsCtrl.getAll)

router.post("/", domesticsCtrl.postOne)

// router.get("/:id", studentsCtrl.getOneById)

module.exports = router


