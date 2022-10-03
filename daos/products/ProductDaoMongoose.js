const ContenedorMongoose = require('../../contenedores/MongoClient')
const productsModel = require('./models/productModel')

class ProductDaoMongoose  {
  constructor() {
    this.client = new ContenedorMongoose()
    this.client.connect()
  }

  async getAll() {
    const products = await this.client.getAll(productsModel)

    return products.map((product) => {
      return { ...product.toJSON(), id: String(product._id.valueOf()) }
    })
  }

  async getById(id) {
    const products = await this.client.getById(productsModel,id)
    return { ...products[0].toJSON(), id: String(products[0]._id.valueOf()) }
  }

  async deleteById(id) {
    return await this.client.deleteById(productsModel,id)
  }

  async deleteAll() {
    return null 
  }


  async getByCriteria(criteria) {
    return await this.client.getByCriteria(productsModel,criteria)
  }  

  async save(item) {
    return await this.client.save(productsModel,item)
  }

  async update(item) {
    return await this.client.update(productsModel,item)
  }

  async exit(){
    return await this.client.disconnect()
  }

}

module.exports = ProductDaoMongoose