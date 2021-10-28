import useTranslation from 'next-translate/useTranslation'
import styled from 'styled-components'

import { ContentContainer as Container } from 'components/Content/content.styles'
import FormContact from 'components/FormContact'

const FormContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Info = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    order: 2;
  }
`

const Contact = () => {
  const { t } = useTranslation('contact')

  return (
    <Container>
      <h1>{ t('contact') }</h1>
      <FormContainer>
        <Info>
          <h2>Info</h2>
          <p className="prototype">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, repellat eos sapiente vitae rerum delectus quasi eaque nostrum omnis fugit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ducimus earum optio eveniet, unde illo ut placeat doloremque quam similique eligendi libero, dignissimos dicta! Consectetur laudantium ipsam repudiandae sequi.
          </p>
        </Info>
        <FormContact/>
      </FormContainer>
    </Container>
  )
}

export default Contact
