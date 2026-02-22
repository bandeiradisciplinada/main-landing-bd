import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppProps } from 'next/app';

import Analytics from '../components/Analytics';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Analytics />
    <SpeedInsights />
  </>
);

export default MyApp;
