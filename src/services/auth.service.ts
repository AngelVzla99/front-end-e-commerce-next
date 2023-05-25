import axios from 'axios';
const BASE_URL = 'https://angel-garces-back-end-e-commerce.onrender.com';
const url = `${BASE_URL}`;

export const login = async (
  email: string,
  password: string
): Promise<string> => {
  const response = await axios.post(url + '/login', {
    email,
    password,
  });

  if (response.status !== 200) throw new Error(response.data);
  else {
    console.log('I will set the token => ', response.data);
    return response.data;
  }
};
