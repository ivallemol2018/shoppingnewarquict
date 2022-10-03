const express = require('express')
const ShoppingCart = require('../models/ShoppingCart')
const NotFoundError = require('../exceptions/NotFoundError')
const logger = require('../utils/log4').getLogger("error")

const { getShoppingCarts,
        getShoppingCartById,
        saveShoppingCart,
        deleteShoppingCartById,
        deleteShoppingCartItem,
        updateShoppingCart} = require('../services/shoppingCartServices')

const { Router } = express

const router = Router()

router.get('/:id/products', async(request,response)=>{
  try{
    const shoppingCartID = request.params.id

    const cart = await getShoppingCartById(shoppingCartID)
  
    response.json(cart.products)
  }catch(error){
    logger.error(error)
    return response.status(500).json({errors:[error]})
  }
})

router.post('/',async (request,response)=>{
  try{
    const shoppingCart = new ShoppingCart()

    const shoppingCartResponse = await saveShoppingCart(shoppingCart)

    response.json(shoppingCartResponse)
  }catch(error){
    logger.error(error)
    return response.status(500).json({errors:[error]})
  }    
})

router.post('/:id/products',async (request,response)=>{
  try{
    const product = request.body
    const shoppingCartID = request.params.id

    const shoppingCartResponse = await updateShoppingCart(shoppingCartID,product)

    response.json(shoppingCartResponse)    
  }catch(error){
    logger.error(error)
    return response.status(500).json({errors:[error]})
  }  
})

router.delete('/:id',async (request,response)=>{
  try{
    const {id} = request.params

    await deleteShoppingCartById(id);

    response.json({'message':'carrito se elimino'}) 

  }catch(error){
    logger.error(error)
    if(error instanceof NotFoundError ){
      return response.status(404).json(error)
    }    
    return response.status(500).json({errors:[error]})
  }
})

router.delete('/:id/products/:idProducto',async (request,response)=>{
  try{
    const {id, idProducto} = request.params

    const shoppingCartResponse = await deleteShoppingCartItem(id,idProducto)

    response.json(shoppingCartResponse) 

  }catch(error){
    logger.error(error)
    if(error instanceof NotFoundError ){
      return response.status(404).json(error)
    }    
    return response.status(500).json({errors:[error]})
  }  
})



module.exports=router;