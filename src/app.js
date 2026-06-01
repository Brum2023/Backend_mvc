
const express = require("express")

 const userController = require("./controllers/userController") 
  
const app = express()

app.use(express.json())

function callbackDaRaiz(req,res) {

   res.send("Linguiça")        
            
   


             }





             app.get("/",callbackDaRaiz)
 
app.get("/users",userController.getAllUsers)
app.get("/users/:id",userController.getUserById)
app.post("/users",userController.createUser)
app.put("/users/:id",userController.updateuser)
app.delete("/users/:id",userController.deleteuser)

module.exports = app

