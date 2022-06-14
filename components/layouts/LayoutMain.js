import React, { ReactNode } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Head from 'next/head';
import Navbar from '../defaults/Navbar';
import Footer from '../defaults/Footer';

const Layout = ({ children, title = 'Bitzquad.com' }) => {
  return (
    <div className="flex flex-col min-h-screen relative container overflow-y-auto">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Script src="/assets/js/cursorControls.js" />
      <header>
        <Navbar />
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;