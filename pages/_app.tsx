import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      </Head>
      <Component {...pageProps} />
      <CssBaseline />
    </>
  );
}

export default MyApp;
