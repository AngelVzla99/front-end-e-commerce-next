import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from '@material-ui/core';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import useAuth from 'hooks/auth.hook';
import {useRouter} from 'next/router';

const stringRegister = "Don't have an account?";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [error, setError] = useState('');
  const {login, data} = useAuth();

  const handleSubmit = async () => {
    try {
      await login(username, password);
      router.push('/');
    } catch (error: any) {
      setError("Username or password doesn't match");
    }
  };

  return (
    <Box
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '600px',
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
        <h1>Login</h1>
        <TextField
          label='Username'
          value={username}
          onChange={e => setUsername(e.target.value)}
          margin='normal'
        />
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
        <Button
          variant='contained'
          color='primary'
          onClick={handleSubmit}
          style={{margin: '20px 0px'}}
        >
          Login
        </Button>
        {/* Register link */}
        <Typography variant='body1' component='p'>
          {stringRegister}{' '}
          <a href='/register' style={{color: 'var(--color-text-primary)'}}>
            Register
          </a>
        </Typography>
        {/* Error message */}
        {error && (
          <Typography variant='body1' component='p' color='error'>
            {error}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
