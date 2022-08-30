import "../styles/style.scss";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
                <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="/favicon-64x64.png" sizes="64x64" />
                <link rel="icon" type="image/png" href="/favicon-128x128.png" sizes="128x128" />
                {/* Google Tag Manager */}
                <React.Fragment>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-5F2DCX6');`,
                        }}
                    />
                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5F2DCX6" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                        }}
                    ></noscript>
                </React.Fragment>
                {/* Google Analytics */}
                <React.Fragment>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: ` window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                          
                            gtag('config', 'G-LXCP4D567W');`,
                        }}
                    />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-LXCP4D567W" />
                </React.Fragment>
            </Head>
            <AnimatePresence>
                <Component {...pageProps} />
            </AnimatePresence>
        </>
    );
}

export default MyApp;
