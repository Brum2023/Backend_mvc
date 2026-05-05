
const express = require("express")

 const userController = require("./controllers/userController") 
  
const app = express()

function callbackDaRaiz(request,response) {

   response.send("Linguiça")        
            
   


             }





             app.get("/",callbackDaRaiz)
 
app.get("/users",userController.getAllUsers)

module.exports = app