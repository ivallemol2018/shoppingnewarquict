const { getByCriteria,create, getById } = require('../repositories/userRepository')
const NotFoundError = require('../exceptions/NotFoundError')

const getUserById = async id =>{
  try{
    const user = await getById(id)

    if(!user){
      throw new NotFoundError('El usuario no existe')
    }

    return user
  }catch(error){
    throw error
  }  
}

const getUserByCriteria = async criteria =>{
  try{
    const user = await getByCriteria(criteria)

    if(!user){
      throw new NotFoundError('El usuario no existe')
    }

    return user
  }catch(error){
    throw error
  }
}

const createUser = async user =>{
  try{
    const userFind = await getByCriteria({username: user.username})

    if(userFind){
      throw new NotFoundError('The user exists')
    }

    return await create(user)

  }catch(error){
    throw error
  }
}

module.exports = {
  getUserByCriteria,
  createUser,
  getUserById
}