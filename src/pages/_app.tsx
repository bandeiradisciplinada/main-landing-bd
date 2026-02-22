import { AppProps } from 'next/app';

import Analytics from '../components/Analytics';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Analytics />
  </>
);

export default MyApp;
