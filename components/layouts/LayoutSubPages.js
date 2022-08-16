import React, { ReactNode, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Head from 'next/head';
import Navbar from '../defaults/Navbar';
import Footer from '../defaults/Footer';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.min.css';

const Layout = ({
  children,
  title = 'Bitzquad | Solutions Beyond Technology',
}) => {
  const containerRef = useRef(null);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Script src="/assets/js/cursorControls.js" />
      <LocomotiveScrollProvider
        innerRef={containerRef}
        options={{
          smooth: true,
        }}
        watch={[]}
      >
        <div
          className=" flex min-h-screen flex-col overflow-x-hidden"
          data-scroll-container
          ref={containerRef}
        >
          <Navbar animated={false} />
          {children}
          <Footer />
        </div>
      </LocomotiveScrollProvider>
    </>
  );
};

export default Layout;
