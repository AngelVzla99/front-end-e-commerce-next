import {useEffect, useState} from 'react';
// back-end connection
import axios from 'axios';
import {Product} from 'types/Product';
import {useToken} from 'context/tokenContext';
import {getProductById} from 'services/products.service';
const BASE_URL = 'https://angel-garces-back-end-e-commerce.onrender.com/api';
const url = `${BASE_URL}/users-cart`;

interface CartItem {
  productId: number;
  product: Product;
  amount: number;
}

interface putCart {
  products: {
    productId: number;
    amount: number;
  }[];
}

const useCart = () => {
  const [data, setData] = useState<CartItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const {token} = useToken();

  useEffect(() => {
    if (token) {
      getCart();
    }
  }, [token]);

  const getCart = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const elementsInCart = response.data as CartItem[];
      const realCart = await Promise.all(
        elementsInCart.map(async item => {
          const product = await getProductById(item.productId.toString());
          return {...item, product};
        })
      );
      setData(realCart as CartItem[]);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const changeCart = async (productId: number, amount: number) => {
    setLoading(true);
    try {
      // current products in the cart (convert to request format)
      let body = {
        products:
          data?.map(item => ({
            productId: item.productId,
            amount: item.amount,
          })) || [],
      } as putCart;

      // if the product exist => update the amount
      const index = body.products.findIndex(
        item => item.productId === productId
      );
      if (index !== -1) {
        body.products[index].amount = amount;
      } else {
        body.products.push({productId, amount});
      }
      // request to the back-end
      const response = await axios.put(url + '/update', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // if the request is successful => update the state
      if (response.status !== 200) {
        setError(response.data);
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {data, loading, error, getCart, changeCart};
};

export default useCart;
