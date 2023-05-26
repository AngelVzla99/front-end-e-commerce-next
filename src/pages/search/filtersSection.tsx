import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import ProductCard from '../../components/ProductCarousel/ProductCard';
import {TextField} from '@material-ui/core';
import {Product} from 'types/Product';
import useProducts from 'hooks/products.hook';
import Radio from '@mui/material/Radio';

interface Props {
  setSortBy: (sortBy: string) => void;
  sortBy: string;
}

export default function FiltersSection({setSortBy, sortBy}: Props) {
  return (
    <div style={{display: 'flex', width: '100%', flexDirection: 'column'}}>
      <div
        style={{
          // center title in the middle
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '10px',
        }}
      >
        <h3>Sort by</h3>
      </div>

      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>
          <Radio
            checked={sortBy === 'id'}
            onChange={() => setSortBy('id')}
            value='id'
            name='radio-buttons'
            inputProps={{'aria-label': 'A'}}
          />
          <span>Id</span>
        </div>
        <div>
          <Radio
            checked={sortBy === 'name'}
            onChange={() => setSortBy('name')}
            value='name'
            name='radio-buttons'
            inputProps={{'aria-label': 'A'}}
          />
          <span>name</span>
        </div>
        <div>
          <Radio
            checked={sortBy === 'price'}
            onChange={() => setSortBy('price')}
            value='price'
            name='radio-buttons'
            inputProps={{'aria-label': 'A'}}
          />
          <span>price</span>
        </div>
      </div>
    </div>
  );
}
