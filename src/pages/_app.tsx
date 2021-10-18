import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import AppLayout from 'layouts/app-layout'

import { GlobalStyle } from 'theme/globalStyle'
import { theme } from 'theme'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="LuisFOsG´s Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
