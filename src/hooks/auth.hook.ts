import {useState} from 'react';
// back-end connection
import axios from 'axios';
const BASE_URL = 'https://localhost:8080';
const url = `${BASE_URL}`;

// This hook is used to fetch data from the home endpoint
// and return the data and loading state

const useAuth = () => {
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);

    const response = await axios.post(
      `${url}/login`,
      {email, password},
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );

    // const response = await axios.post(`${url}/login`, {email, password});
    console.log('response', response);
    if (response.status !== 200) setError(response.data);
    else {
      setData(response.data as User);
      setToken(response.headers.authorization);
    }
    setLoading(false);
  };

  return {data, loading, error, token, login};
};

export default useAuth;
