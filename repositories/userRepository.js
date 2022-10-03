const DaoFactory = require('../daos/DaoFactory')

const users = (new DaoFactory()).getUser()

const getById = async id =>{
  try{
    return await users.getById(id)
  }catch(error){
    throw 'There was an error trying to get the user by id'
  }  
}

const getByCriteria = async criteria =>{
  try{
    return await users.getByCriteria(criteria)
  }catch(error){
    throw 'There was an error trying to get the user by criteria'
  }
}

const create = async user =>{
  try{
    return await users.save(user)
  }catch(error){
    throw 'There was an error trying to save the user'
  }  
}

module.exports = {
  getByCriteria,
  create,
  getById
}