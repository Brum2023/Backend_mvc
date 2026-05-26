





const userModel = require("../models/userModel")


function getAllUsers(req,res){
    const users = userModel.findAll()
       
   return res.json(users)
}
 

function createUser (req,res) {
  //const body = req.body.name
  const{ name,age,nationality }=req.body
  const newUser ={
    id:Date.now(),
   name: name,
   age:age,
   nationality:nationality
 
}
const createdUser = userModel.create(newUser)  


return res.status(201).json(createdUser)

}
const getUserById = (req, res ) =>{
   const id = Number(req.params.id)
   
   const user = userModel.findById(id)
   if(!user){
    return res.status(404).json({
      message : "Erro de usuário"
    })
   } 
    return res.json(user)

   

//console.log(userModel.findById())

  }
const updateuser=(req,res) =>{
  const id = Number(req.params.id)
  const{name} =req.body
  const newData = {
    name:name
  }
  const updatedUser = userModel.update(id,newData)
  if(!updatedUser){
    return res.status(404).json({
       message: "Usuário não encontrado"
    })
  }




  return res.json(updatedUser)
}

const deleteuser = (req,res) => {
   const id=Number(req.params.id)
   const deleteuser =userModel.remove(id)
   return res.json({
    message:"Usuario removido"
   })
  }






module.exports={
    createUser,
    getAllUsers,
    getUserById,
    updateuser,
    deleteuser 




}
