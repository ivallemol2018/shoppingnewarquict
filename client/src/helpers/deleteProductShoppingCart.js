import axios from 'axios';

const deleteProductShoppingCart =  async (id,idProduct) => {
  const response = await axios.delete(`/api/carrito/${id}/products/${idProduct}`);
  return response.data;
}

export default deleteProductShoppingCart;