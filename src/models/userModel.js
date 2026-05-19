

const userList = require("../data/users")

const findAll = ()  =>{
 return userList
 
}
const create = (user) =>{
 userList.push(user)
 return user
}
const findById = (id) => {
  return userList.find(user => user.id === id)
 //for(let i = 0; i< userList.length;i++)
  //if(userList[i].id === id){}
    //return userLIst[i]
  }














module.exports = {

 findAll,
 create,
 findById

}
