import axios from 'axios';

const getProducts =  async () => {
  const response = await axios.get('/api/productos');

  const productosList = response.data;

  return productosList;
}

export default getProducts;