import {useEffect, useState} from 'react';
// back-end connection
import axios from 'axios';
import {parseBadRequest} from 'utils/parsers';
const BASE_URL = 'https://angel-garces-back-end-e-commerce.onrender.com/api';
const url = `${BASE_URL}/users`;

// This hook is used to fetch data from the home endpoint
// and return the data and loading state

const useUser = () => {
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createUser = async (user: User, passwordValidation: string) => {
    if (user.password !== passwordValidation) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);

    let ans = false;
    try {
      const response = await axios.post(url + '/create-customer', user);
      setData(response.data as User);
      ans = true;
    } catch (error: any) {
      if (error.response) {
        const errorString = parseBadRequest(
          JSON.stringify(error.response.data.message)
        );
        setError(errorString);
      }
    }
    setLoading(false);
    return ans;
  };

  return {data, loading, error, createUser};
};

export default useUser;
