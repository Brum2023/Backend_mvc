const express = require("express")

const app = express()

function callbackDaRaiz(request,response) {

   response.send("Hello World")        
        
   


             }

app.get("/",callbackDaRaiz)
 
app.listen(2000, () => {
    console.log("API rodando!")

})


