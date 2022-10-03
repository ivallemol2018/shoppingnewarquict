const mongoose = require('mongoose')

const usersModel = mongoose.model('users', mongoose.Schema({
  username: { type: String, require: true, max: 250 },
  password: { type: String, require: true, max: 250 },
  name: { type: String, require: true, max: 250 },
  address: { type: String, require: true, max: 250 },
  phone: { type: String, require: true, max: 250 },
  age: { type: Number, require: true },
}))

module.exports = usersModel