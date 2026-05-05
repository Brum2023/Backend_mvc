





const userModel = require("../models/userModel")


function getAllUsers(req,res){
    const users = userModel.findAll()
       
   return res.json(users)

 





}
module.exports={
    getAllUsers
}
