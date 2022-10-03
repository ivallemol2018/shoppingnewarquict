const ContenedorFile = require('../../contenedores/ContenedorFile')

class ShoppingCartDaoFile extends ContenedorFile{
  constructor(){
    super('DB/shoppingCart.json')
  }

  async update(shoppingCartID,product){
    const shoppingCart = await super.getById(shoppingCartID)

    let productsShoppingCart =  shoppingCart.products;

    if (!(productsShoppingCart instanceof Array))
      productsShoppingCart = []

    productsShoppingCart.push(product)

    shoppingCart.products = productsShoppingCart

    const shoppingCartResponse = await super.update(shoppingCart)

    return shoppingCartResponse
  }

  async deleteItem(shoppingCartID,productoID){

    const shoppingCart = await super.getById(shoppingCartID)

    const products =  shoppingCart.products

    const idx = products.findIndex(p => p.id == productoID) 

    products.splice(idx , 1)

    shoppingCart.products = products

    await super.update(shoppingCart)

    const shoppingCartResponse = await super.getById(shoppingCartID)

    return {id: shoppingCartResponse.id, products : shoppingCartResponse.products}

  }  
}

module.exports = ShoppingCartDaoFile