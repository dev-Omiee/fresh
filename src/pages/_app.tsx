import { AppProps } from 'next/app';
import '../scss/menu.scss'
import Navbar from '../components/navbar'; // Import your additional component

import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
