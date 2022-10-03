const mongoose = require('mongoose')

const shoppingCartModel = mongoose.model('shoppingCart', mongoose.Schema({
  products: [{
    nombre: { type: String, require: true, max: 250 },
    description: { type: String, max: 500 },
    codigo: { type: String, require: true, max: 100 },
    foto: { type: String, require: true, max: 100 },
    precio: { type: Number, require: true },
    stock: { type: Number, require: true },
    quantity: { type: Number, require: true },
    id: { type: String, max: 50 }
  }]
}))

module.exports = shoppingCartModel
