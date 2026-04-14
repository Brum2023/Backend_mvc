const express = require("express")

const app = express()

function callbackDaRaiz(request,response) {

   response.send("Linguiça")        
            
   


             }

app.get("/",callbackDaRaiz)
 
app.listen(2000, () => {
    console.log("API rodando http://localhost:2000")

})


