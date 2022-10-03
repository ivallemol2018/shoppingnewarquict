import axios from 'axios';

const postOrder =  async (cartList) => {
  const response = await axios.post(`/api/order/`,cartList);

  return response;
}

export default postOrder;