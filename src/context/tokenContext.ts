import React, {useContext} from 'react';
import {login} from 'services/auth.service';

export const TokenContext = React.createContext({
  token: null,
  setToken: (token: string) => {},
});

export const useToken = () => {
  // this variables are defined in the context provider (TokenContext.Provider)
  const {token, setToken} = useContext(TokenContext);

  const saveToken = async (email: string, password: string) => {
    const token = await login(email, password);
    if (token) setToken(token);
  };

  return {token, saveToken};
};
