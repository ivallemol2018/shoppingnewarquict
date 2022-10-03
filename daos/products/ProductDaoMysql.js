const ContenedorSqlite = require('../../contenedores/ContenedorMysql')
const connection = require('../../connection/mysqldb')

class ProductDaoMysql extends ContenedorSqlite{
  constructor(){
    super(connection)
    super.setSource('products')
  }

  async getById(id) {
    const product = await super.getById(id)

    return product[0]
  }  
}

module.exports = ProductDaoMysql