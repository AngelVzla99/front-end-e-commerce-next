import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ModalLogin from 'components/Modals/LoginModal';
import {useToken} from 'context/tokenContext';
import useCart from 'hooks/cart.hook';
import React, {useEffect} from 'react';

export default function Cart() {
  const {token} = useToken();
  const [open, setOpen] = React.useState(false);
  const {data, getCart} = useCart();

  useEffect(() => {
    if (token) {
      getCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!token) {
      setOpen(true);
    }
  }, [token]);

  if (!token) {
    return (
      <>
        <div
          style={{
            justifyContent: 'space-between',
            padding: '20px',
            backgroundColor: 'var(--color-background-secondary)',
            margin: '100px',
          }}
        >
          <h1>Cart</h1>
        </div>
        ;{/* Modal for login */}
        <ModalLogin open={open} handleClose={() => setOpen(false)} />
      </>
    );
  }

  return (
    <div
      style={{
        justifyContent: 'space-between',
        padding: '20px',
        backgroundColor: 'var(--color-background-secondary)',
        margin: '100px',
      }}
    >
      <div style={{marginBottom: '20px'}}>
        <h1>Cart</h1>
      </div>
      {/* Show all products in the cart in a table */}
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price by item</TableCell>
              <TableCell align='right'>Quantity</TableCell>
              <TableCell align='right'>Total price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row, index) => (
              <TableRow
                key={index}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell component='th' scope='row'>
                  {row.product.name}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {row.product.price}
                </TableCell>
                <TableCell align='right'>{row.amount}</TableCell>
                <TableCell align='right'>
                  {row.amount * row.product.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
