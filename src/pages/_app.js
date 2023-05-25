import Footer from 'components/Footer/Footer';
import MenuComponent from '../components/MenuComponent/index';
import '../styles/global.css';
import {TokenContext} from 'context/tokenContext';
import {useState} from 'react';

export default function MyApp({Component, pageProps}) {
  const [token, setToken] = useState(null);

  return (
    <TokenContext.Provider value={{token, setToken}}>
      {/* this is the size of the header */}
      <div style={{margin: 0, padding: 0}}>
        <MenuComponent />

        <div style={{marginTop: '64px'}}>
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>
    </TokenContext.Provider>
  );
}
