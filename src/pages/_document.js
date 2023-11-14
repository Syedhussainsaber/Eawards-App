import { Html, Head, Main, NextScript } from 'next/document'
import { ToastContainer } from 'react-toastify'
export default function Document() {
  return (

    <Html lang="en">
    
    <Head>
        <title>Eawards App - The Movie Review and Rating Platform</title>
        <meta name="description" content="Eawards - Movie Rating Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>

    </Html>

  )
}
