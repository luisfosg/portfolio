import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

import FormContact from 'components/FormContact'
import { FormContactTitle } from 'components/FormContact/formContact.styles'
import { FormContainer, Info } from 'styles/contact.style'

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
          <p className="prototype">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, repellat eos sapiente vitae rerum delectus quasi eaque nostrum omnis fugit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ducimus earum optio eveniet, unde illo ut placeat doloremque quam similique eligendi libero, dignissimos dicta! Consectetur laudantium ipsam repudiandae sequi.
          </p>
          <p className="prototype">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, repellat eos sapiente vitae rerum delectus quasi eaque nostrum omnis fugit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ducimus earum optio eveniet, unde illo ut placeat doloremque quam similique eligendi libero, dignissimos dicta! Consectetur laudantium ipsam repudiandae sequi.
          </p><br />
          <a href="mailto:luisfosgdev@gmail.com">📫</a>
        </Info>
        <FormContact/>
      </FormContainer>
    </>
  )
}

export default Contact
