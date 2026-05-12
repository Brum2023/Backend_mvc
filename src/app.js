
const express = require("express")

 const userController = require("./controllers/userController") 
  
const app = express()

app.use(express.json())

function callbackDaRaiz(req,res) {

   res.send("Linguiça")        
            
   


             }





             app.get("/",callbackDaRaiz)
 
app.get("/users",userController.getAllUsers)
app.post("/users",userController.createUser)
module.exports = app

