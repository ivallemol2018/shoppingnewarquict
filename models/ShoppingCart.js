class ShoppingCart{
  constructor(){
    this.products = []
  }

  set id(id){
    this._id = id;
  }

  get id(){
    return this._id;
  }

  set products(products){

    this._products = products;
  }

  get products(){
    return this._products;
  }  

  toJSON(){
    const {products } = this

    return {products }
  }    

}

module.exports = ShoppingCart;