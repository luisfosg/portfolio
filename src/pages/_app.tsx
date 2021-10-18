import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import AppLayout from 'layouts/app-layout'
import { useDarkMode } from 'hooks/useDarkMode'

import { GlobalStyle } from 'theme/globalStyle'
import { themes } from 'theme'

function MyApp ({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useDarkMode()

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="LuisFOsG´s Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle/>
        <AppLayout setThemeMode={toggleTheme}>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
