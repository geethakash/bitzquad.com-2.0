import "../styles/style.scss";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-64x64.png"
          sizes="64x64"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-128x128.png"
          sizes="128x128"
        />
      </Head>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
