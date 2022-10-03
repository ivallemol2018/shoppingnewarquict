const ContenedorMysql = require('../../contenedores/ContenedorMysql')
const connection = require('../../connection/mysqldb')

class ShoppingCartDaoMysql extends ContenedorMysql{
  constructor(){
    super(connection)
    super.setSource('shoppingCart')
  }

  async save(item) {

    const shoppingCart = await super.save({ products: JSON.stringify(item.products) })

    return  { id: shoppingCart[0] }

  }

  async getById(id) {
    const shoppingCart = await super.getById(id)
    return shoppingCart[0]
  }  

  async update(shoppingCartID,product){
    const shoppingCart = await this.getById(shoppingCartID)

    const productArray =  shoppingCart.products;

    productArray.push(product)

    shoppingCart.products = JSON.stringify(productArray)

    await super.update(shoppingCart)

    const shoppingCartResponse = await this.getById(shoppingCartID)

    return {id: shoppingCartResponse.id, products : shoppingCartResponse.products}
  }

  async deleteItem(shoppingCartID,productoID){

    const shoppingCart = await this.getById(shoppingCartID)

    const products =  shoppingCart.products

    const idx = products.findIndex(p => p.id == productoID) 

    products.splice(idx , 1)

    shoppingCart.products = JSON.stringify(products)

    await super.update(shoppingCart)

    const shoppingCartResponse = await this.getById(shoppingCartID)

    return {id: shoppingCartResponse.id, products : shoppingCartResponse.products}

  }    

}

module.exports = ShoppingCartDaoMysql