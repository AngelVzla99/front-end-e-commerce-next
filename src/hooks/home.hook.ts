import {useEffect, useState} from 'react';
// back-end connection
import axios from 'axios';
import {Product} from 'types/Product';
const BASE_URL = 'https://angel-garces-back-end-e-commerce.onrender.com/api';
const url = `${BASE_URL}/home`;

interface HomeData {
  bestDeals: Product[];
  mostBought: Product[];
  bannerUrls: string[];
}

// This hook is used to fetch data from the home endpoint
// and return the data and loading state

const useHome = () => {
  const [data, setData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    setLoading(true);
    const response = await axios.get(url);
    if (response.status !== 200) setError(response.data);
    else setData(response.data as HomeData);
    setLoading(false);
  };

  return {data, loading, error, fetchHomeData};
};

export default useHome;
