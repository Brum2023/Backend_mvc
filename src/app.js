
const express = require("express")
const userRoutes = require("./routes/userRoutes")

  
const app = express()

app.get("/",(req,res)=>{
   res.send("Estamos funcionando")
})

app.use(express.json())





app.use(express.json())

function callbackDaRaiz(req,res) {

   res.send("Linguiça")        
            
   


             }





             app.get("/",callbackDaRaiz)
 
             app.use("/users",userRoutes)

             module.exports = app 