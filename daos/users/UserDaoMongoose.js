const MongoClient = require('../../contenedores/MongoClient')
const usersModel = require('./models/usersModel')

class UserDaoMongoose {
  constructor() {
    this.client = new MongoClient()
    this.client.connect()
  }

  async getByCriteria(criteria) {
    const users = await this.client.getByCriteria(usersModel,criteria)
    return users
  }  

  async getById(id) {
    const user = await this.client.getById(usersModel,id)
    return { ...user[0].toJSON(), id: String(user[0]._id.valueOf()) }
  }
}

module.exports = UserDaoMongoose