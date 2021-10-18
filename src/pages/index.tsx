import type { NextPage } from 'next'

import { Container, Main, Title } from 'layouts/index.styles'

const Home: NextPage = () => {
  return (
    <Container>
      <Main>
        <Title color="primary">
          Welcome to <a href="#">Portfolio</a>
        </Title>
      </Main>
    </Container>
  )
}

export default Home
