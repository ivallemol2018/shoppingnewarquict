import axios from 'axios';

const deleteShoppingCart =  async (id) => {
  const response = await axios.delete(`/api/carrito/${id}`);

  return response.data;
}

export default deleteShoppingCart;