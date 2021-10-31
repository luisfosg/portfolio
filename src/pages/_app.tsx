import type { AppProps } from 'next/app'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

import { GlobalStyle } from 'theme/globalStyle'
import { ThemeContextProvider } from 'context/ThemeContext'
import useDarkMode from 'hooks/useDarkMode'

import AppLayout from 'layouts/app-layout'

function MyApp ({ Component, pageProps }: AppProps) {
  const { t } = useTranslation('common')
  const { mounted } = useDarkMode()
  if (!mounted) return null

  return (
    <>
      <Head>
        <title>{ t('title') }</title>
        <meta name="description" content={ t('description') } />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
