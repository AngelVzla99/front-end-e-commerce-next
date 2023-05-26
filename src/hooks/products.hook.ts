import {useEffect, useState} from 'react';
// back-end connection
import axios from 'axios';
import {Product} from 'types/Product';
import {Page} from 'types/Page';
const BASE_URL = 'https://angel-garces-back-end-e-commerce.onrender.com/api';
const url = `${BASE_URL}/products`;

// This hook is used to fetch data from the home endpoint
// and return the data and loading state

const paginationSize = 8;

const useProducts = () => {
  const [data, setData] = useState<Page<Product> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const searchByText = async (text: string, page: number, sortBy: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${url}/search-by-text?query=${text}&page=${page.toString()}&size=${paginationSize}&sortBy=${sortBy}`
      );
      setData(response.data || []);
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  };

  return {data, loading, error, searchByText};
};

export default useProducts;
