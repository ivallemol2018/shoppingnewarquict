const minimist = require('minimist')
const ProductDaoMysql = require('./products/ProductDaoMysql')
const ProductDaoSqlite = require('./products/ProductDaoSqlite')
const ProductDaoFile = require('./products/ProductDaoFile')
const ProductDaoMongoose = require('./products/ProductDaoMongoose')
const ShoppingCartDaoMysql = require('./shoppingCart/ShoppingCartDaoMysql')
const ShoppingCartDaoSqlite = require('./shoppingCart/ShoppingCartDaoSqlite')
const ShoppingCartDaoFile = require('./shoppingCart/ShoppingCartDaoFile')
const ShoppingCartDaoMongoose = require('./shoppingCart/ShoppingCartDaoMongoose')
const UserDaoMongoose = require('./users/UserDaoMongoose')
const keys = require('../config/keys');

class DaoFactory {

  constructor(){
    const argv = minimist(process.argv.slice(2))

    const { driver } = argv

    this.driver = driver || keys.driverClassName
  }

  getProduct() {
    switch (this.driver) {
      case 'mysql':
        return new ProductDaoMysql();
      case 'sqlite':
        return new ProductDaoSqlite();
      case 'file':
        return new ProductDaoFile();
      case 'mongo':
        return new ProductDaoMongoose();
    }
  }

  getShoppingCart() {
    switch (this.driver) {
      case 'mysql':
        return new ShoppingCartDaoMysql();
      case 'sqlite':
        return new ShoppingCartDaoSqlite();
      case 'file':
        return new ShoppingCartDaoFile();
      case 'mongo':
        return new ShoppingCartDaoMongoose();
    }
  }

  getUser() {
    return new UserDaoMongoose();
  }

}

module.exports = DaoFactory