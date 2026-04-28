const express = require("express")

const app = express()

function callbackDaRaiz(request,response) {

   response.send("Linguiça")        
            
   


             }
function callbackListaUsuarios(req,res){
    
        const listaUsuarios = [ {
    id:2,
    name:"Will"
   }
]
   res.json(listaUsuarios)

 








}
app.get("/",callbackDaRaiz)
 app.get("/users",callbackListaUsuarios)
app.listen(2000, () => {
    console.log("API rodando http://localhost:2000")

})


