import type { AppProps } from 'next/app'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

import AppLayout from 'layouts/app-layout'

import { GlobalStyle } from 'theme/globalStyle'
import { ThemeContextProvider } from 'context/ThemeContext'
import useDarkMode from 'hooks/useDarkMode'

function MyApp ({ Component, pageProps }: AppProps) {
  const { t } = useTranslation('common')
  const { mounted } = useDarkMode()
  if (!mounted) return null

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>{ t('title') }</title>
        <meta name="description" content={ t('description') } />

        <meta property="og:title" content="LuisFOsG - Luis Osorio | Página y Blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luisfosg.vercel.app/" />
        <meta property="og:image" content="https://luisfosg.vercel.app/images/view.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1259" />
        <meta property="og:image:height" content="539" />
        <meta property="og:description" content="Página, Blog y Portafolio de LuisFOsG - Luis Osorio" />

        <meta name="twitter:card" content="https://luisfosg.vercel.app/images/view.png" />
        <meta name="twitter:title" content="LuisFOsG - Luis Osorio | Página y Blog" />
        <meta name="twitter:description" content="Página, Blog y Portafolio de LuisFOsG - Luis Osorio" />
        <meta name="twitter:creator" content="@LuisFOsG_" />

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
