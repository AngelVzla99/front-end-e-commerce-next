import React, {useEffect} from 'react';
import {Button, Modal} from '@material-ui/core';
import {useRouter} from 'next/router';
import axios from 'axios';
const BASE_URL = 'https://angel-garces-back-end-e-commerce.onrender.com';

export default function ModalWait() {
  const [open, setOpen] = React.useState(true);

  const isOk = async () => {
    const ans = await axios.get(`${BASE_URL}/health`);
    if (ans.status === 200) {
      setOpen(false);
    }
  };

  // request to the server to create the container
  useEffect(() => {
    isOk();
  }, []);

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
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
          <p>
            The container with the back-end is loading, please wait 5 minutes
            and refresh the page{' '}
          </p>
        </div>
      </Modal>
    </>
  );
}
