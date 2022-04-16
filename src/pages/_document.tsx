import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8"/>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LuisFOsG - Luis Osorio | Página y Blog" />
        <meta property="og:url" content="https://luisfosg.vercel.app/" />
        <meta property="og:image" content="https://luisfosg.vercel.app/images/view.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1259" />
        <meta property="og:image:height" content="539" />
        <meta property="og:description" content="Página, Blog y Portafolio de LuisFOsG - Luis Osorio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LuisFOsG - Luis Osorio | Página y Blog" />
        <meta name="twitter:description" content="Página, Blog y Portafolio de LuisFOsG - Luis Osorio" />
        <meta name="twitter:creator" content="@LuisFOsG_" />

        <link rel="icon" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>

      <body>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </body>

    </Html>
  )
}
