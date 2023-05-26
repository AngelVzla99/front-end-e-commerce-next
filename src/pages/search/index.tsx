import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import ProductCard from '../../components/ProductCarousel/ProductCard';
import {TextField} from '@material-ui/core';
import {Product} from 'types/Product';
import useProducts from 'hooks/products.hook';
import Radio from '@mui/material/Radio';
import FiltersSection from './filtersSection';
import Pagination from '@mui/material/Pagination';

const SearchPage = () => {
  // text field
  const router = useRouter();
  const {query} = router.query;
  // filters
  const [sortBy, setSortBy] = useState('id');
  // products
  const {data, searchByText} = useProducts();
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    if (typeof query === 'string' && query) searchByText(query, page, sortBy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page, sortBy]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div
      style={{display: 'flex', flexDirection: 'column', padding: '50px 100px'}}
    >
      <div style={{marginBottom: '40px'}}>
        <h1>Search</h1>
      </div>
      <div style={{display: 'flex'}}>
        {/* Filters section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            width: '20%',
            height: '100%',
            backgroundColor: 'var(--color-background-secondary)',
          }}
        >
          <FiltersSection setSortBy={setSortBy} sortBy={sortBy} />
        </div>
        {/* Products section */}
        <div
          style={{
            width: '80%',
            marginLeft: '20px',
            backgroundColor: 'var(--color-background-secondary)',
            padding: '40px',
          }}
        >
          {/* Current page and total number of page */}
          <div
            style={{
              marginBottom: '40px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <h3>Current page {page + 1}</h3>
            <h3>Total pages {data?.totalPages}</h3>
          </div>

          {/* Grid of products */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
              gridGap: '25px',
            }}
          >
            {data?.content.map((product: Product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          {/* Pagination using material ui */}
          <Pagination
            count={data?.totalPages}
            variant='outlined'
            shape='rounded'
            style={{
              marginTop: '40px',
              display: 'flex',
              justifyContent: 'center',
            }}
            // change page
            onChange={(event, value) => {
              setPage(value - 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
