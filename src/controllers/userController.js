





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



module.exports={
    createUser,
    getAllUsers
}
