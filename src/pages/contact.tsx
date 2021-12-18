import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import Image from 'next/image'

import FormContact from 'components/FormContact'
import LinkCircle from 'components/LinkCircle'

import { FormContactTitle } from 'components/FormContact/formContact.styles'
import { FormContainer, Info, Text, SectionFlex } from 'styles/contact.style'

import {
  Square,
  Square2
} from 'styles/index.style'

const Contact = () => {
  const { t } = useTranslation('contact')

  return (
    <>
      <Head>
        <title>{ t('title') } | LuisFOsG</title>
      </Head>
      <FormContainer>
        <Info>
          <Square radius="10px" width="98%" opacity={0.1} />
          <Square2 radius="10px" width="98%" opacity={0.1} />
          <FormContactTitle>{ t('info') }</FormContactTitle>
          <Text>
            { t('text1') }
          </Text>
          <SectionFlex>
            <LinkCircle href="mailto:luisfosgdev@gmail.com">📫</LinkCircle>
            <LinkCircle target="_blank" href="https://www.linkedin.com/in/luisfosg">
              <Image src="/images/linkedin.svg" width="25" height="25" alt="LinkedIn" />
            </LinkCircle>
          </SectionFlex>
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
