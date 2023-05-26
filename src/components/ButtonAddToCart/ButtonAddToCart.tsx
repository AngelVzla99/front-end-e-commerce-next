import React, {useEffect} from 'react';
import styles from './../../styles/ProductCart.module.css';
import {Button, Modal} from '@material-ui/core';
import {useToken} from 'context/tokenContext';
import {useRouter} from 'next/router';
import useCart from 'hooks/cart.hook';
import ModalLogin from 'components/Modals/LoginModal';

interface Props {
  productId: number;
}

export default function ButtonAddToCart({productId}: Props) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const {token} = useToken();
  const {changeCart} = useCart();
  const classes = styles;

  const handleCartClick = async () => {
    if (token) {
      await changeCart(productId, 1);
    } else {
      handleOpen();
    }
  };

  const handleOpen = () => setOpen(true);

  return (
    <>
      {/* Button */}
      <button
        type='button'
        className={styles.blackButton}
        onClick={handleCartClick}
      >
        Add to cart
      </button>

      {/* Modal for login */}
      <ModalLogin open={open} handleClose={() => setOpen(false)} />
    </>
  );
}
