import {Button, Typography} from '@material-ui/core';
import React from 'react';
import {Product} from 'types/Product';
import ButtonAddToCart from 'components/ButtonAddToCart/ButtonAddToCart';
import {useRouter} from 'next/router';

export default function ProductCard(product: Product) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/products/' + product.id);
  };

  return (
    <div
      style={{
        border: '2px solid #e9eaed',
        width: '150px',
        padding: '10px',
        margin: '0 auto',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <img
        src={product.photoUrlSmall}
        alt={product.name}
        height={150}
        style={{marginBottom: '10px'}}
      />
      <Typography variant='h6' component='h2'>
        {product.name}
      </Typography>
      <Typography variant='body1' component='p'>
        Price: {product.price}
      </Typography>
      {/* Black button when the mouse is over it change the color */}
      <ButtonAddToCart />
    </div>
  );
}
