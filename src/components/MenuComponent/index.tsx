import React, {useEffect, useState} from 'react';
import {TextField, Button} from '@material-ui/core';
import Image from 'next/image';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useRouter} from 'next/router';
import {useToken} from 'context/tokenContext';

export default function MenuComponent() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();
  const {token} = useToken();

  const handleLogoClick = () => {
    setSearchText('');
    router.push('/');
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleCartClick = () => {
    router.push('/cart');
  };

  useEffect(() => {
    if (searchText) {
      router.push(`/search?query=${searchText}`);
    } else {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        cursor: 'pointer',
        borderBottom: '1px solid grey',
        height: '70px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        paddingLeft: '10px',
        marginBottom: '64px',
      }}
    >
      {/* Logo of the company */}
      <Image
        src='/next.svg'
        alt='Logo'
        className='dark:invert'
        width={100}
        height={24}
        priority // this is for SEO purposes
        onClick={handleLogoClick}
      />

      {/* Search bar */}
      <TextField
        label='Search'
        variant='filled'
        size='small'
        style={{width: '50%', marginTop: '10px'}}
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        // remove animation
        InputProps={{disableUnderline: true}}
      />

      <div style={{display: 'flex'}}>
        {/* User info or login */}
        <Button style={{width: '120px'}} onClick={handleLoginClick}>
          {token ? 'Welcome' : 'Login'}
        </Button>
        {/* Cart */}
        <Button style={{width: '120px'}} onClick={handleCartClick}>
          <ShoppingCartIcon />
        </Button>
      </div>
    </div>
  );
}
