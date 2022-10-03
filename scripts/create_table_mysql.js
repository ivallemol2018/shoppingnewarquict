const options = require('../connection/mysqldb')
const knex = require('knex')(options)


knex.schema.createTable('productos', table =>{
  table.increments('id')
  table.string('nombre')
  table.string('description')
  table.string('codigo')
  table.string('foto')
  table.double('precio')
  table.bigint('stock')
}).then(()=> console.log('table created'))
  .catch(err=>{ console.log(err); throw err});
  
knex('productos').
  insert([
    {"id":1,"nombre":"Lenovo IdeaPad 3","description":"Lenovo IdeaPad 3","codigo":"4256","foto":"https://m.media-amazon.com/images/I/71eLIuDmIgL._AC_SL1500_.jpg","precio":483,"stock":20},
    {"id":2,"nombre":"Logitech MK270 teclado","description":"Logitech MK270 teclado","codigo":"4257","foto":"https://m.media-amazon.com/images/I/61pUul1oDlL._AC_SL1500_.jpg","precio":30,"stock":20},
    {"id":3,"nombre":"Monitor ViewSonic OMNI","description":"Monitor ViewSonic OMNI","codigo":"4259","foto":"https://m.media-amazon.com/images/I/61HjHR0ilFL._AC_SL1500_.jpg","precio":189,"stock":10},
    {"id":4,"nombre":"Notebook MSI Stealth","description":"Notebook MSI Stealth","codigo":"4260","foto":"https://m.media-amazon.com/images/I/71p3Ygm14wL._AC_SL1500_.jpg","precio":1181,"stock":10}
  ]).then(()=> console.log('register insertados'))
  .catch(err => {console.log(err); throw err})
  .finally(()=> knex.destroy());

  knex.schema.createTable('shoppingCart', table =>{
    table.increments('id')
    table.json('products')
  }).then(()=> console.log('table created'))
    .catch(err=>{ console.log(err); throw err})
    .finally(()=>{
      knex.destroy()
    })  