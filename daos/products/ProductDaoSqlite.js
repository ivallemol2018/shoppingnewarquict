const ContenedorSqlite = require('../../contenedores/ContenedorSqlite')
const connection = require('../../connection/sqlite')

class ProductDaoSqlite extends ContenedorSqlite{
  constructor(){
    super(connection)
    super.setSource('products')
  }

  async getById(id) {
    const product = await super.getById(id)

    return product[0]
  }  
}

module.exports = ProductDaoSqlite