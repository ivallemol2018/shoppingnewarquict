import axios from 'axios';


const postLogout =  async () => {

  const response = await axios.post('/api/logout');

  return response;
}

export default postLogout;