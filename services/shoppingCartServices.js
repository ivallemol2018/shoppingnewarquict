const { getAll, getById, save, deleteById, deleteItem, update} = require('../repositories/shoppingCartRepository')
const NotFoundError = require('../exceptions/NotFoundError')

const getShoppingCarts = async () =>{
  try{
    return await getAll();
  }catch(error){
    throw error
  }
}

const getShoppingCartById = async id =>{
  try{
    const shoppingCart = await getById(id)

    if(!shoppingCart){
      throw new NotFoundError('El shopping Cart no existe')
    }

    return shoppingCart
  }catch(error){
    throw error
  }
}

const saveShoppingCart = async shoppingCart =>{
  try{
    return await save(shoppingCart)
  }catch(error){
    throw error
  }  
}

const updateShoppingCart = async (shoppingCartID,product) =>{
  try{
    const shoppingCartRepository = await getById(shoppingCartID)

    if(!shoppingCartRepository){
      throw new NotFoundError('El shopping Cart no existe')
    }

    const shoppingCartResponse = update(shoppingCartID,product)

    return shoppingCartResponse

  }catch(error){
    throw error
  }  
}

const deleteShoppingCartById = async id =>{
  try{
    const shoppingCart = await getById(id)

    if(!shoppingCart){
      throw new NotFoundError('El shopping Cart no existe')
    }

    return await deleteById(id)
  }catch(error){
    throw error
  }
}

const deleteShoppingCartItem = async (shoppingCartID,productoID) =>{
  try{
    const shoppingCart = await getById(shoppingCartID)

    if(!shoppingCart){
      throw new NotFoundError('El shopping Cart no existe')
    }

    const shoppingCartResponse = deleteItem(shoppingCartID,productoID)

    return shoppingCartResponse

  }catch(error){
    throw error
  }
}

module.exports = {
  getShoppingCarts,
  getShoppingCartById,
  saveShoppingCart,
  deleteShoppingCartById,
  deleteShoppingCartItem,
  updateShoppingCart
}