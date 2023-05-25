// back-end connection
import axios from 'axios';
import {Product} from 'types/Product';
const BASE_URL = 'https://angel-garces-back-end-e-commerce.onrender.com/api';
const url = `${BASE_URL}/products`;

export const countProducts = async () => {
  const response = await axios.get(url + '/count');
  if (response.status !== 200) throw new Error(response.data);
  return response.data;
};

export const getProductById = async (id: string) => {
  const response = await axios.get(url + '/' + id);
  if (response.status !== 200) return null;
  return response.data;
};
