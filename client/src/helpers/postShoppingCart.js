import axios from 'axios';

const postShoppingCart =  async () => {
  const response = await axios.post('/api/carrito');
  const cart = response.data;
  return cart;
}

export default postShoppingCart;