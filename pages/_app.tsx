import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    <Component {...pageProps} />
    <CssBaseline />
  </>);
}

export default MyApp;
