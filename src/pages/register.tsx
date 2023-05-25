import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from '@material-ui/core';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {useToken} from 'context/tokenContext';
import useUser from 'hooks/user.hook';

const stringRegister = "Don't have an account?";

export default function Register() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {loading, error, createUser} = useUser();
  const {saveToken} = useToken();

  const handleSubmit = async () => {
    if (phoneNumber === null) {
      return;
    }

    const user: User = {
      email,
      firstName,
      lastName,
      phoneNumber,
      password,
    };

    try {
      const success = await createUser(user, password2);
      if (success) {
        saveToken(email, password);
        router.push('/');
      }
    } catch (error) {
      console.log('I reach this point');
    }
  };

  return (
    <Box
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <Box
        width='400px'
        style={{
          margin: '50px auto',
          padding: '20px',
          width: '500px',
          backgroundColor: 'var(--color-background-secondary)',
          borderRadius: '5px',
          boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <h1>Register</h1>
        {/* Email */}
        <TextField
          label='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          margin='normal'
        />
        {/* Password */}
        <TextField
          label='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          margin='normal'
          InputProps={{
            endAdornment: (
              <Button
                onClick={() => setShowPassword(!showPassword)}
                style={{color: 'var(--color-text-primary)'}}
              >
                <RemoveRedEyeIcon />
              </Button>
            ),
          }}
          type={showPassword ? 'text' : 'password'}
        />
        {/* Verify password */}
        <TextField
          label='Enter your password again'
          value={password2}
          onChange={e => setPassword2(e.target.value)}
          margin='normal'
          InputProps={{
            endAdornment: (
              <Button
                onClick={() => setShowPassword(!showPassword)}
                style={{color: 'var(--color-text-primary)'}}
              >
                <RemoveRedEyeIcon />
              </Button>
            ),
          }}
          type={showPassword ? 'text' : 'password'}
        />
        {/* First name */}
        <TextField
          label='First name'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          margin='normal'
        />
        {/* Last name */}
        <TextField
          label='Last name'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          margin='normal'
        />
        {/* Phone number */}
        <TextField
          label='Phone number'
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
          margin='normal'
        />
        {/* Login button */}
        <Button
          variant='contained'
          color='primary'
          onClick={handleSubmit}
          style={{margin: '20px 0px'}}
        >
          Register
        </Button>
        {/* Error message */}
        {error &&
          error.split('\n').map((error, index) => (
            <Typography key={index} color='error'>
              {error}
            </Typography>
          ))}
      </Box>
    </Box>
  );
}
