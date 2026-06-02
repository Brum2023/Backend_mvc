const express = require("express")
const router = express.Router()

const userController = require("../controllers/userController") 
router.get("/",userController.getAllUsers)
router.get("/:id",userController.getUserById)
router.post("/",userController.createUser)
router.put("/:id",userController.updateuser)
router.delete("/:id",userController.deleteuser)

module.exports = router

