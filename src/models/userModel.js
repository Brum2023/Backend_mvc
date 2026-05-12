

const userList = require("../data/users")

const findAll = ()  =>{
 return userList
 
}
const create = (user) =>{
 userList.push(user)
 return user
}

module.exports = {

 findAll,
 create
 

}
