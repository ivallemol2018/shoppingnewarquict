const mongoose = require('mongoose')
const keys = require('../config/keys');

const modelProduct =  mongoose.model('products', mongoose.Schema({
    nombre: { type: String, require: true, max: 250 },
    description: { type: String, max: 500 },
    codigo: { type: String, require: true, max: 100 },
    foto: { type: String, require: true, max: 100 },
    precio: { type: Number, require: true },
    stock: { type: Number, require: true }
  }))

mongoose.connect(keys.hostDbEcommerce);
 
const Products = [
  {"id":1,"timestamp":"6/22/2022 3:06:27 AM","nombre":"Lenovo IdeaPad 3","description":"Lenovo IdeaPad 3","codigo":"4256","foto":"https://m.media-amazon.com/images/I/71eLIuDmIgL._AC_SL1500_.jpg","precio":483,"stock":20},
  {"id":2,"timestamp":"6/22/2022 3:07:05 AM","nombre":"Logitech MK270 teclado","description":"Logitech MK270 teclado","codigo":"4257","foto":"https://m.media-amazon.com/images/I/61pUul1oDlL._AC_SL1500_.jpg","precio":30,"stock":20},
  {"id":3,"timestamp":"6/22/2022 3:07:45 AM","nombre":"Monitor ViewSonic OMNI","description":"Monitor ViewSonic OMNI","codigo":"4259","foto":"https://m.media-amazon.com/images/I/61HjHR0ilFL._AC_SL1500_.jpg","precio":189,"stock":10},
  {"id":4,"timestamp":"6/22/2022 10:19:48 AM","nombre":"Notebook MSI Stealth","description":"Notebook MSI Stealth","codigo":"4260","foto":"https://m.media-amazon.com/images/I/71p3Ygm14wL._AC_SL1500_.jpg","precio":1181,"stock":10}  
]
 
Products.forEach((product) => {
  const productModel = new modelProduct(product)
  productModel.save()
  .then(()=> console.log('Se guardo el producto',product.nombre))
  .catch((e) => console.log('Error', e))  
})

 