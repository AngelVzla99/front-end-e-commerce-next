import React, { useState } from 'react';
import { AppBar, Toolbar, TextField, Button } from '@material-ui/core';
import Image from 'next/image';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function MenuComponent() {
  const [searchText, setSearchText] = useState('');

  const handleLoginClick = () => {
    console.log('Login clicked');
  }

  const handleCartClick = () => {
    console.log('Cart clicked');
  }

  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "space-between",        
        backgroundColor: "white",
        cursor: "pointer",
        borderBottom: "1px solid grey",
        height: "64px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        paddingLeft:'10px',
        marginBottom:'64px'        
      }}
    >
        {/* Logo of the company */}
        <Image
          src="/next.svg"
          alt="Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority // this is for SEO purposes
        />

        {/* Search bar */}
        <TextField
          label="Search"
          variant="standard"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        
        <div style={{display:'flex'}}>
          {/* User info or login */}
          <Button style={{ width:'120px'}} onClick={handleLoginClick} >
            Login
          </Button>
          {/* Cart */}
          <Button style={{ width:'120px'}}  onClick={handleCartClick} >
            <ShoppingCartIcon />
          </Button>
        </div>

    </div>
  )
}
