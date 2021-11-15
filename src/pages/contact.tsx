import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

import FormContact from 'components/FormContact'
import { FormContactTitle } from 'components/FormContact/formContact.styles'
import { FormContainer, Info, Text } from 'styles/contact.style'

const Contact = () => {
  const { t } = useTranslation('contact')

  return (
    <>
      <Head>
        <title>{ t('title') } | LuisFOsG</title>
      </Head>
      <FormContainer>
        <Info>
          <FormContactTitle>{ t('info') }</FormContactTitle>
          <Text>
            { t('text1') }
          </Text>
          <a href="mailto:luisfosgdev@gmail.com">📫</a>
          <Text>
            { t('text2') }
          </Text>
        </Info>
        <FormContact/>
      </FormContainer>
    </>
  )
}

export default Contact
