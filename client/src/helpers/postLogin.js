import axios from 'axios';


const postLogin =  async (login) => {

  const response = await axios.post('/api/login',login);

  return response.data;
}

export default postLogin;