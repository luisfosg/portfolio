import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class CustomDocument extends Document {
  static async getInitialProps (ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props: any) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
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
          <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    )
  }
}
