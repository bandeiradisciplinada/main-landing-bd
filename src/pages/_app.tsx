import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppProps } from 'next/app';

import Analytics from '../components/Analytics';
import '../styles/main.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className={`${inter.variable} font-sans`}>
    <Component {...pageProps} />
    <Analytics />
    <SpeedInsights />
  </main>
);

export default MyApp;
