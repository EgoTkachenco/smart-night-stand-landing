import { useEffect } from 'react'
import '../styles/reset.css'
import '../styles/common.css'
import '../styles/global.css'
import '../styles/index.scss'

import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // if (window) window.CI360 = { notInitOnLoad: true }
  }, [])
  return (
    <>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Script src="https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/3.0.3/js-cloudimage-360-view.min.js" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
