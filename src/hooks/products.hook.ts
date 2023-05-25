import {useEffect, useState} from 'react';
// back-end connection
import axios from 'axios';
import {Product} from 'types/Product';
const BASE_URL = 'https://angel-garces-back-end-e-commerce.onrender.com/api';
const url = `${BASE_URL}/products`;

// This hook is used to fetch data from the home endpoint
// and return the data and loading state

const useProducts = () => {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  return {data, loading, error};
};

export default useProducts;
