import axios from 'axios';

const getProduct =  async (id) => {
  const response = await axios.get('/api/productos/'+id);

  const product = response.data;

  return product;
}

export default getProduct;