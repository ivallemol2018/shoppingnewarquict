const DaoFactory = require('../daos/DaoFactory')

const shoppingCarts = (new DaoFactory()).getShoppingCart()

const getAll = async () => {
  try{
    return await shoppingCarts.getAll()
    
  }catch(error){
    throw 'There was an error trying to get all shoppingCart'
  }
}

const getById = async id =>{
  try{
    return await shoppingCarts.getById(id)
  }catch(error){
    throw 'There was an error trying to get the shoppingCart by id'
  }
}

const save = async (shoppingCart) =>{
  try{
    return await shoppingCarts.save(shoppingCart.toJSON())
  }catch(error){

    throw 'There was an error trying to save the shoppingCart ' + error
  }
}

const deleteById = async id =>{
  try{
    return await shoppingCarts.deleteById(id)
  }catch(error){
    throw 'There was an error trying to delete the shoppingCart ' + error
  }
}

const deleteItem = async (shoppingCartID,productoID)  =>{
  try{
    return await shoppingCarts.deleteItem(shoppingCartID,productoID)
  }catch(error){
    throw 'There was an error trying to delete item the shoppingCart'
  }    
}

const update = async (shoppingCartID,product) =>{
  try{
    return await shoppingCarts.update(shoppingCartID,product)
  }catch(error){
    throw 'There was an error trying to update the shoppingCart'
  }  
}

module.exports = {
  getAll,
  getById,
  save,
  deleteById,
  deleteItem,
  update
}