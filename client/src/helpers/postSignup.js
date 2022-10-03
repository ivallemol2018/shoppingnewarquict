import axios from 'axios';


const postSignup =  async (formData) => {


  const response = await axios({
    method: "post",
    url: '/api/signup',
    data: formData
  });

  return response.data;
}

export default postSignup;