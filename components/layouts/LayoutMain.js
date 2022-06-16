import React, { ReactNode } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Head from 'next/head';
import Navbar from '../defaults/Navbar';
import Footer from '../defaults/Footer';

const Layout = ({
  children,
  title = 'Bitzquad | Solutions Beyond Technology',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Script src="/assets/js/cursorControls.js" />
      <header>
        <Navbar />
      </header>
      <div className="flex flex-col min-h-screen relative overflow-y-auto">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
