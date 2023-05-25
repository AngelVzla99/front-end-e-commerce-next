import React from 'react';
import styles from './../../styles/ProductCart.module.css';

export default function ButtonAddToCart() {
  return (
    <button type='button' className={styles.blackButton}>
      Add to cart
    </button>
  );
}
