import useProducts from 'hooks/products.hook';
import React, {useMemo} from 'react';
import {Product} from 'types/Product';
import {countProducts, getProductById} from '../../services/products.service';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardHeader,
  makeStyles,
} from '@material-ui/core';
import ButtonAddToCart from 'components/ButtonAddToCart/ButtonAddToCart';

interface Props {
  product: Product;
}

export default function ProductComponent({product}: Props) {
  return (
    <Card style={{display: 'flex', padding: '50px'}}>
      <div
        style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CardMedia
          component='img'
          alt={product.name}
          height='500'
          image={product.photoUrlBig}
          title={product.name}
          style={{width: '300px'}}
        />
      </div>

      <div>
        <CardHeader title={product.name} />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {product.description}
          </Typography>
          <Typography variant='h5' component='h2' gutterBottom>
            Price: {product.price}
          </Typography>
          <div style={{width: '400px'}}>
            <ButtonAddToCart productId={product.id} />
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

interface Params {
  params: {
    id: string;
  };
}

export async function getStaticProps({params}: Params) {
  const {id} = params;
  const product = await getProductById(id);

  if (product === null) {
    return {
      props: {},
      redirect: {
        destination: `/`,
      },
    };
  }

  return {
    props: {
      product: product,
    },
  };
}

export async function getStaticPaths() {
  const nProducts = await countProducts();
  const productIds = Array.from(Array(nProducts), (_, i) => (i + 1).toString());

  return {
    paths: productIds.map(id => ({
      params: {
        id,
      },
    })),
    fallback: false,
  };
}
