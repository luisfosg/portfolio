import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'

import { Container, Main, Title } from 'layouts/index.styles'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <Main>
        <Title color="primary">
          { t('greeting') } <a href="#">{ t('portfolio') }</a>
        </Title>
      </Main>
    </Container>
  )
}

export default Home
