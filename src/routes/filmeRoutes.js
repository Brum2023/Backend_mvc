const express = require("express")
const router = express.Router()

const FilmeController = require("../controllers/filmesController")

router.get("/",FilmeController.getAllFilmes)
router.get("/:id",FilmeController.getFilmeById)
router.post("/",FilmeController.createFilme)
router.get("/search",FilmeController.getFilmeByFiltro)
module.exports = router
