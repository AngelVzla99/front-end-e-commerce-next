import MenuComponent from "../components/MenuComponent/index";
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <div style={{margin:0, padding:0 }}>
      <MenuComponent />
      {/* this is the size of the header */}
      <div style={{marginTop:'64px'}}>
      <Component {...pageProps} />
      </div>
    </div>
  );
}
