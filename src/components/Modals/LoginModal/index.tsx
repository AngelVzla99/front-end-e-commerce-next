import React from 'react';
import {Button, Modal} from '@material-ui/core';
import {useRouter} from 'next/router';

interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function ModalLogin({open, handleClose}: Props) {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <div
          style={{
            padding: '30px',
            backgroundColor: 'var(--color-background-secondary)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <p>You need to be logged in to add to cart</p>
          <Button
            variant='contained'
            color='primary'
            onClick={handleLoginClick}
            style={{marginTop: '20px', width: '100%'}}
          >
            Go to login
          </Button>
        </div>
      </Modal>
    </>
  );
}
