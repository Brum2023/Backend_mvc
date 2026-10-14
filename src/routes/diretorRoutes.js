const express = require("express")
const router = express.Router()

const DiretorController = require("../controllers/diretorController")

router.get("/",DiretorController.getAllDiretor)
router.post("/",DiretorController.createDiretor)

module.exports = router