import axios from 'axios';

const postProductShoppingCart =  async (id,product) => {
  const response = await axios.post(`/api/carrito/${id}/products`,product);
  const cart = response.data;

  return cart;
}

export default postProductShoppingCart;