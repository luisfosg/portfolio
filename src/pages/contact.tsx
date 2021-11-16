import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import Image from 'next/image'

import FormContact from 'components/FormContact'
import { FormContactTitle } from 'components/FormContact/formContact.styles'

import { FormContainer, Info, Text, Section, SectionFlex } from 'styles/contact.style'
import LinkCircle from 'components/LinkCircle'

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
          <Section>
            <Text>
              { t('text1') }
            </Text>
            <SectionFlex>
              <LinkCircle href="mailto:luisfosgdev@gmail.com">📫</LinkCircle>
              <LinkCircle target="_blank" href="https://www.linkedin.com/in/luisfosg/">
                <Image src="/images/linkedin.svg" width="25" height="25" alt="LinkedIn" />
              </LinkCircle>
            </SectionFlex>
            <Text>
              { t('text2') }
            </Text>
          </Section>
        </Info>
        <FormContact/>
      </FormContainer>
    </>
  )
}

export default Contact
