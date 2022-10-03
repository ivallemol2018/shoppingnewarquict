const MongoClient = require('../../contenedores/MongoClient')
const shoppingCartModel = require('./models/shoppingCartModel')

class ShoppingCartDaoMongoose {
  constructor() {
    this.client = new MongoClient()
    this.client.connect()
  }

  async getAll() {
    const shoppingCart = await this.client.getAll(shoppingCartModel)

    return shoppingCart.map((product) => {
      return { ...product.toJSON(), id: String(product._id.valueOf()) }
    })
  }

  async getById(id) {
    const shoppingCart = await this.client.getById(shoppingCartModel,id)
    return { ...shoppingCart[0].toJSON(), id: String(shoppingCart[0]._id.valueOf()) }
  }

  async deleteById(id) {
    return await this.client.deleteById(shoppingCartModel,id)
  }

  async save(item) {
    const shoppingCart = await this.client.save(shoppingCartModel,item)

    return { ...shoppingCart.toJSON(), id: String(shoppingCart._id.valueOf()) }

  }

  async update(shoppingCartID, product) {
    const shoppingCart = await this.getById(shoppingCartID)

    const productArray = shoppingCart.products;

    productArray.push({ ...product, id: product._id })

    shoppingCart.products = productArray

    await this.client.update(shoppingCartModel,shoppingCart)

    const shoppingCartResponse = await this.getById(shoppingCartID)

    return shoppingCartResponse
  }

  async deleteItem(shoppingCartID,productoID){

    const shoppingCart = await this.getById(shoppingCartID)

    const products =  shoppingCart.products

    const idx = products.findIndex(p => p.id == productoID) 

    products.splice(idx , 1)

    shoppingCart.products = products

    await this.client.update(shoppingCartModel,shoppingCart)

    const shoppingCartResponse = await this.getById(shoppingCartID)

    return shoppingCartResponse

  }  
  
  async exit(){
    return await this.client.disconnect()
  }

}

module.exports = ShoppingCartDaoMongoose