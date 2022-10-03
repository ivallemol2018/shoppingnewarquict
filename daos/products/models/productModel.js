const mongoose = require('mongoose')

const productsModel =  mongoose.model('products', mongoose.Schema({
  nombre: { type: String, require: true, max: 250 },
  description: { type: String, max: 500 },
  codigo: { type: String, require: true, max: 100 },
  foto: { type: String, require: true, max: 100 },
  precio: { type: Number, require: true },
  stock: { type: Number, require: true }
}))

module.exports = productsModel
