import type { AppProps } from 'next/app'
import Head from 'next/head'

import AppLayout from 'layouts/app-layout'

import { GlobalStyle } from 'theme/globalStyle'
import { ThemeContextProvider } from 'context/ThemeContext'
import useDarkMode from 'hooks/useDarkMode'

function MyApp ({ Component, pageProps }: AppProps) {
  const { mounted } = useDarkMode()
  if (!mounted) return null

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>LuisFOsG´s Page</title>
        <meta name="description" content="LuisFOsG´s Page and the Portfolio Site" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/52636768?v=4?s=400" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <ThemeContextProvider>
        <GlobalStyle/>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeContextProvider>
    </>
  )
}

export default MyApp
