const ContenedorFile = require('../../contenedores/ContenedorFile')

class ProductDaoFile extends ContenedorFile{
  constructor(){
    super('DB/products.json')
  }

}

module.exports = ProductDaoFile